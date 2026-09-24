import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const readSource = (relativePath) => readFile(new URL(relativePath, import.meta.url), 'utf8');

test('mobile navigation exposes stateful menu semantics and a matching menu id', async () => {
  const source = await readSource('../src/components/layout/Navbar.jsx');

  assert.match(source, /id=["']mobile-navigation-menu["']/);
  assert.match(source, /aria-controls=["']mobile-navigation-menu["']/);
  assert.match(source, /aria-expanded=\{isOpen\}/);
  assert.match(source, /aria-label=\{isOpen\s*\?\s*['"]Close menu['"]\s*:\s*['"]Open menu['"]\}/);
});

test('mobile navigation closes with Escape and returns focus to its trigger', async () => {
  const source = await readSource('../src/components/layout/Navbar.jsx');

  assert.match(source, /event\.key\s*===\s*['"]Escape['"]/);
  assert.match(source, /setIsOpen\(false\)/);
  assert.match(source, /menuButtonRef\.current\?\.focus\(\)/);
});

test('mobile menu controls meet the 44px minimum target size', async () => {
  const [navbarSource, themeToggleSource] = await Promise.all([
    readSource('../src/components/layout/Navbar.jsx'),
    readSource('../src/components/common/ThemeToggle.jsx'),
  ]);

  assert.match(navbarSource, /className=["'][^"']*min-h-11[^"']*min-w-11/);
  assert.match(themeToggleSource, /className=["'][^"']*min-h-11[^"']*min-w-11/);
});
