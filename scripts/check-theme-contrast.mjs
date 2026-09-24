import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const css = await readFile(new URL('../src/index.css', import.meta.url), 'utf8');
const toggle = await readFile(new URL('../src/components/common/ThemeToggle.jsx', import.meta.url), 'utf8');

const parseHex = (hex) => {
  const value = hex.trim().replace('#', '');
  assert.match(value, /^[0-9a-f]{6}$/i, `Expected a six-digit hex color, got: ${hex}`);
  return [0, 2, 4].map((offset) => Number.parseInt(value.slice(offset, offset + 2), 16) / 255);
};

const luminance = (hex) => {
  const channels = parseHex(hex).map((channel) => (
    channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4
  ));
  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
};

const contrastRatio = (foreground, background) => {
  const colors = [luminance(foreground), luminance(background)].sort((a, b) => b - a);
  return (colors[0] + 0.05) / (colors[1] + 0.05);
};

const token = (name, scope = css) => {
  const match = scope.match(new RegExp(`--${name}:\\s*(#[0-9a-f]{6})`, 'i'));
  assert.ok(match, `Missing --${name} color token`);
  return match[1];
};

const darkToken = token('color-accent-text', css.slice(css.indexOf('.dark {')));
const lightToken = token('color-accent-text');
const decorativeAccent = token('color-accent');

assert.equal(decorativeAccent.toLowerCase(), '#25d366', 'Decorative accent identity must remain #25D366');
const lightContrast = contrastRatio(lightToken, '#f5f5f5');
const darkContrast = contrastRatio(darkToken, '#0b0b0b');
assert.ok(
  lightContrast >= 4.5,
  `Light text accent ${lightToken} must have 4.5:1 contrast on #f5f5f5`,
);
assert.ok(
  darkContrast >= 4.5,
  `Dark text accent ${darkToken} must have 4.5:1 contrast on #0b0b0b`,
);
assert.match(toggle, /aria-label=\{isDark\s*\?\s*['"]Switch to light theme['"]\s*:\s*['"]Switch to dark theme['"]\}/);
assert.match(toggle, /aria-pressed=\{isDark\}/);

console.log(`Theme contrast check passed: ${lightToken} on #f5f5f5 (${lightContrast.toFixed(2)}:1), ${darkToken} on #0b0b0b (${darkContrast.toFixed(2)}:1)`);
