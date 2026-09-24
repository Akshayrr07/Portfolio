import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const root = new URL('../', import.meta.url);
const readJson = async (path) => JSON.parse(await readFile(new URL(path, root), 'utf8'));
const readSource = async (path) => readFile(new URL(path, root), 'utf8');

const placeholderLinks = new Set([
  '#',
  'https://github.com',
  'https://linkedin.com',
  'https://demo.com',
  'mailto:your.email@example.com',
]);

const assertAvailableUrl = (value, path) => {
  if (value === null || value === undefined || value === '') return;

  assert.ok(
    value.startsWith('https://') || /^mailto:[^\s@]+@[^\s@]+$/.test(value),
    `${path} has an unsupported URL: ${value}`,
  );
  assert.ok(!placeholderLinks.has(value), `${path} contains a placeholder URL: ${value}`);
  if (value.startsWith('https://')) {
    const { hostname, pathname } = new URL(value);
    if (hostname === 'github.com') {
      assert.ok(
        pathname.split('/').filter(Boolean).length >= 1,
        `${path} must link to a specific GitHub account or repository`,
      );
    }
  }
};

test('social data uses only the known GitHub profile or null for unavailable links', async () => {
  const social = await readJson('src/assets/data/social.json');

  assert.deepEqual(social, {
    email: null,
    linkedin: null,
    github: 'https://github.com/Akshayrr07',
    twitter: null,
    portfolio: null,
  });

  Object.entries(social).forEach(([key, value]) => assertAvailableUrl(value, `social.${key}`));
});

test('project data uses only known canonical or unavailable links', async () => {
  const projects = await readJson('src/assets/data/projects.json');

  projects.forEach((project) => {
    assertAvailableUrl(project.github, `projects.${project.id}.github`);
    assertAvailableUrl(project.liveDemo, `projects.${project.id}.liveDemo`);
  });
});

test('Hero and Contact consume the shared social data', async () => {
  const [hero, contact] = await Promise.all([
    readSource('src/components/sections/Hero.jsx'),
    readSource('src/components/sections/Contact.jsx'),
  ]);

  assert.match(hero, /social\.json/);
  assert.match(contact, /social\.json/);
  assert.doesNotMatch(hero, /href="https:\/\/(?:github|linkedin)\.com"/);
  assert.doesNotMatch(hero, /href="mailto:/);
});

test('unavailable social links are not rendered', async () => {
  const contact = await readSource('src/components/sections/Contact.jsx');
  const hero = await readSource('src/components/sections/Hero.jsx');

  for (const source of [hero, contact]) {
    assert.match(source, /socialData\.github &&/);
    assert.match(source, /socialData\.linkedin &&/);
    assert.match(source, /socialData\.email &&/);
  }
});

test('external links open safely while mailto links stay in context', async () => {
  const [button, socialLink, hero, projectDetail] = await Promise.all([
    readSource('src/components/common/Button.jsx'),
    readSource('src/components/common/SocialLink.jsx'),
    readSource('src/components/sections/Hero.jsx'),
    readSource('src/pages/ProjectDetail.jsx'),
  ]);

  for (const source of [button, socialLink]) {
    assert.match(source, /startsWith\('mailto:'\)/);
    assert.match(source, /isMailto \? undefined : '_blank'/);
    assert.doesNotMatch(source, /target="_blank"/);
  }

  assert.doesNotMatch(hero, /href="mailto:[^"]+"[^>]*target="_blank"/);
  assert.match(projectDetail, /\{project\.github && \(/);
  assert.match(projectDetail, /\{project\.liveDemo && \(/);
});
