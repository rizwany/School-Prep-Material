const fs = require('fs');
const path = require('path');

const root = __dirname;
const indexPath = path.join(root, 'index.html');
const html = fs.readFileSync(indexPath, 'utf8');

function fail(message) {
  console.error(`FAIL: ${message}`);
  process.exitCode = 1;
}

function pass(message) {
  console.log(`OK: ${message}`);
}

function extractObjectLiteral(source, name) {
  const marker = `const ${name} =`;
  const start = source.indexOf(marker);
  if (start === -1) {
    throw new Error(`Could not find ${name}`);
  }

  const braceStart = source.indexOf('{', start);
  if (braceStart === -1) {
    throw new Error(`Could not find ${name} object start`);
  }

  let depth = 0;
  let inString = false;
  let quote = '';
  let escaped = false;

  for (let i = braceStart; i < source.length; i++) {
    const ch = source[i];

    if (inString) {
      if (escaped) {
        escaped = false;
      } else if (ch === '\\') {
        escaped = true;
      } else if (ch === quote) {
        inString = false;
      }
      continue;
    }

    if (ch === '"' || ch === "'" || ch === '`') {
      inString = true;
      quote = ch;
      continue;
    }

    if (ch === '{') depth++;
    if (ch === '}') depth--;

    if (depth === 0) {
      return source.slice(braceStart, i + 1);
    }
  }

  throw new Error(`Could not find ${name} object end`);
}

function loadObject(name) {
  const literal = extractObjectLiteral(html, name);
  return Function(`return (${literal});`)();
}

const SITE_DATA = loadObject('SITE_DATA');
const LIVE_LINKS = loadObject('LIVE_LINKS');

if (html.includes('<nav class="navbar"') && html.includes('aria-label="Main navigation"')) {
  pass('index has the common top navigation');
} else {
  fail('index is missing the common top navigation');
}

if (html.includes('links.helpUr') && html.includes('links.worksheetUr')) {
  pass('topic renderer supports Urdu guide and worksheet links');
} else {
  fail('topic renderer does not render Urdu links');
}

const math = SITE_DATA.subjects && SITE_DATA.subjects.math;
if (!math) {
  fail('SITE_DATA.subjects.math is missing');
  process.exit();
}

let liveMathTopics = 0;
let missingRegistry = 0;
let missingFiles = 0;
let missingUrdu = 0;

function toSlug(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

for (const grade of SITE_DATA.grades) {
  const topics = math.grades[grade] || [];
  for (const topicName of topics) {
    const key = `math-grade${grade}-${toSlug(topicName)}`;
    const links = LIVE_LINKS[key];

    if (!links) {
      missingRegistry++;
      fail(`missing LIVE_LINKS entry for ${key}`);
      continue;
    }

    liveMathTopics++;

    for (const field of ['help', 'worksheet', 'helpUr', 'worksheetUr']) {
      if (!links[field]) {
        missingUrdu++;
        fail(`${key} is missing ${field}`);
        continue;
      }

      const target = path.join(root, links[field]);
      if (!fs.existsSync(target)) {
        missingFiles++;
        fail(`${key}.${field} points to missing file: ${links[field]}`);
      }
    }
  }
}

if (!missingRegistry) pass(`all ${liveMathTopics} Math topics are registered`);
if (!missingUrdu) pass('all registered Math topics include English and Urdu link fields');
if (!missingFiles) pass('all registered Math guide/worksheet files exist');

if (!process.exitCode) {
  console.log('Index structure test passed.');
}
