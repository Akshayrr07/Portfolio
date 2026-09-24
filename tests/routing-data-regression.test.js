import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const readSource = (relativePath) => readFile(new URL(relativePath, import.meta.url), 'utf8');
const readJson = async (relativePath) => JSON.parse(await readSource(relativePath));

const collect = (source, pattern, group = 1) =>
  Array.from(source.matchAll(pattern), (match) => match[group]);
const sorted = (values) => [...values].sort();

test('router exposes the home and parameterized project-detail routes', async () => {
  const appSource = await readSource('../src/routes/App.jsx');
  const routes = Array.from(
    appSource.matchAll(
      /<Route\b[^>]*\bpath=(["'])([^"']+)\1[^>]*\belement=\{<([A-Za-z][A-Za-z0-9]*)\s*\/>\}[^>]*\/?>/g,
    ),
    (match) => [match[2], match[3]],
  );

  assert.ok(routes.some(([path, component]) => path === '/' && component === 'Home'));
  assert.ok(routes.some(([path, component]) => path === '/projects/:id' && component === 'ProjectDetail'));
});

test('project detail resolves its route parameter from the shared project data', async () => {
  const [appSource, detailSource, gridSource] = await Promise.all([
    readSource('../src/routes/App.jsx'),
    readSource('../src/pages/ProjectDetail.jsx'),
    readSource('../src/components/project/ProjectGrid.jsx'),
  ]);

  assert.match(appSource, /path=(["'])\/projects\/:id\1/);
  assert.match(detailSource, /import\s+projectsData\s+from\s+['"]\.\.\/assets\/data\/projects\.json['"]/);
  assert.match(detailSource, /const\s*\{\s*id\s*\}\s*=\s*useParams\(\)/);
  assert.match(detailSource, /projectsData\.find\([\s\S]*?\.id\s*===\s*id[\s\S]*?\)/);
  assert.match(gridSource, /import\s+projectsData\s+from\s+['"]\.\.\/\.\.\/assets\/data\/projects\.json['"]/);
});

test('home section ids cover every navbar hash target', async () => {
  const [homeSource, navbarSource] = await Promise.all([
    readSource('../src/pages/Home.jsx'),
    readSource('../src/components/layout/Navbar.jsx'),
  ]);
  const sectionIds = collect(homeSource, /<(?:div|section)\s+id=(["'])([^"']+)\1/g, 2);
  const navTargets = collect(navbarSource, /path:\s*['"]\/(#[^'"]+)['"]/g);

  assert.ok(sectionIds.length > 0, 'expected Home to expose section anchors');
  assert.deepEqual(sorted(navTargets.map((target) => target.slice(1))), sorted(sectionIds));
});

test('project data provides unique route-safe ids and supported link values', async () => {
  const projects = await readJson('../src/assets/data/projects.json');

  assert.ok(Array.isArray(projects) && projects.length > 0, 'expected at least one project');
  const ids = projects.map((project) => project.id);
  assert.equal(new Set(ids).size, ids.length, 'project ids must be unique');
  for (const project of projects) {
    assert.match(
      project.id,
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
      `project id must be a single URL path segment: ${project.id}`,
    );
    assert.equal(
      isRenderableExternalLink(project.github),
      true,
      `project github must be a valid URL, null, or the explicit '#' sentinel: ${project.id}`,
    );
    assert.equal(
      isRenderableExternalLink(project.liveDemo),
      true,
      `project liveDemo must be a valid URL, null, or the explicit '#' sentinel: ${project.id}`,
    );
  }
});

test('social data matches the links consumed by the contact UI', async () => {
  const [socialData, contactSource] = await Promise.all([
    readJson('../src/assets/data/social.json'),
    readSource('../src/components/sections/Contact.jsx'),
  ]);

  assert.deepEqual(sorted(Object.keys(socialData)), ['email', 'github', 'linkedin', 'portfolio', 'twitter']);
  assert.ok(
    socialData.email === null || /^mailto:[^\s@]+@[^\s@]+\.[^\s@]+$/.test(socialData.email),
  );
  for (const field of ['github', 'linkedin', 'portfolio', 'twitter']) {
    assert.equal(
      isRenderableExternalLink(socialData[field]),
      true,
      `social ${field} must be an HTTP(S) URL or the explicit '#' sentinel`,
    );
  }

  for (const field of ['email', 'github', 'linkedin']) {
    assert.match(
      contactSource,
      new RegExp(`socialData\\.${field}\\b`),
      `Contact must consume socialData.${field}`,
    );
  }
});

function isRenderableExternalLink(value) {
  if (value === null || value === '#') {
    return true;
  }
  if (typeof value !== 'string' || value.trim() === '') {
    return false;
  }

  try {
    const url = new URL(value);
    return (url.protocol === 'https:' || url.protocol === 'http:') && url.hostname.includes('.');
  } catch {
    return false;
  }
}
