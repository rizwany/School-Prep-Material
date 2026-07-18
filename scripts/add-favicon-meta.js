const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const blockLines = [
  '<link rel="apple-touch-icon" sizes="57x57" href="/assets/favicons/apple-icon-57x57.png">',
  '<link rel="apple-touch-icon" sizes="60x60" href="/assets/favicons/apple-icon-60x60.png">',
  '<link rel="apple-touch-icon" sizes="72x72" href="/assets/favicons/apple-icon-72x72.png">',
  '<link rel="apple-touch-icon" sizes="76x76" href="/assets/favicons/apple-icon-76x76.png">',
  '<link rel="apple-touch-icon" sizes="114x114" href="/assets/favicons/apple-icon-114x114.png">',
  '<link rel="apple-touch-icon" sizes="120x120" href="/assets/favicons/apple-icon-120x120.png">',
  '<link rel="apple-touch-icon" sizes="144x144" href="/assets/favicons/apple-icon-144x144.png">',
  '<link rel="apple-touch-icon" sizes="152x152" href="/assets/favicons/apple-icon-152x152.png">',
  '<link rel="apple-touch-icon" sizes="180x180" href="/assets/favicons/apple-icon-180x180.png">',
  '<link rel="icon" type="image/png" sizes="192x192" href="/assets/favicons/android-icon-192x192.png">',
  '<link rel="icon" type="image/png" sizes="32x32" href="/assets/favicons/favicon-32x32.png">',
  '<link rel="icon" type="image/png" sizes="96x96" href="/assets/favicons/favicon-96x96.png">',
  '<link rel="icon" type="image/png" sizes="16x16" href="/assets/favicons/favicon-16x16.png">',
  '<link rel="icon" type="image/x-icon" href="/assets/favicons/favicon.ico">',
  '<link rel="manifest" href="/assets/favicons/manifest.json">',
  '<meta name="msapplication-TileColor" content="#ffffff">',
  '<meta name="msapplication-TileImage" content="/assets/favicons/ms-icon-144x144.png">',
  '<meta name="theme-color" content="#ffffff">'
];

const ignoredDirectories = new Set(['.git', '.next', 'node_modules', 'vendor']);
function findHtmlFiles(directory, relative = '') {
  const found = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (entry.isDirectory() && ignoredDirectories.has(entry.name)) continue;
    const childRelative = path.join(relative, entry.name);
    const childPath = path.join(directory, entry.name);
    if (entry.isDirectory()) found.push(...findHtmlFiles(childPath, childRelative));
    else if (entry.isFile() && entry.name.toLowerCase().endsWith('.html')) found.push(childRelative);
  }
  return found;
}
const files = findHtmlFiles(root).sort();
const faviconAssets = [
  'apple-icon-57x57.png', 'apple-icon-60x60.png', 'apple-icon-72x72.png', 'apple-icon-76x76.png',
  'apple-icon-114x114.png', 'apple-icon-120x120.png', 'apple-icon-144x144.png',
  'apple-icon-152x152.png', 'apple-icon-180x180.png', 'android-icon-192x192.png',
  'favicon-32x32.png', 'favicon-96x96.png', 'favicon-16x16.png', 'favicon.ico', 'manifest.json', 'ms-icon-144x144.png'
];

let updated = 0;
let skipped = 0;
for (const relative of files) {
  const file = path.join(root, relative);
  const source = fs.readFileSync(file, 'utf8');
  let migrated = source;
  for (const asset of faviconAssets) migrated = migrated.replaceAll(`"/${asset}"`, `"/assets/favicons/${asset}"`);
  if (migrated !== source) {
    fs.writeFileSync(file, migrated, 'utf8');
    updated++;
    continue;
  }
  if (source.includes('href="/assets/favicons/apple-icon-57x57.png"')) {
    const missingLines = blockLines.filter(line => !source.includes(line));
    if (missingLines.length) {
      const newline = source.includes('\r\n') ? '\r\n' : '\n';
      const manifestLine = '<link rel="manifest" href="/assets/favicons/manifest.json">';
      const output = source.replace(manifestLine, missingLines.join(newline) + newline + manifestLine);
      fs.writeFileSync(file, output, 'utf8');
      updated++;
      continue;
    }
    skipped++;
    continue;
  }
  const head = source.match(/<head\b[^>]*>/i);
  if (!head) throw new Error(`Missing <head> in ${relative}`);
  const newline = source.includes('\r\n') ? '\r\n' : '\n';
  const block = blockLines.join(newline);
  const output = source.slice(0, head.index + head[0].length) + newline + block + source.slice(head.index + head[0].length);
  fs.writeFileSync(file, output, 'utf8');
  updated++;
}

for (const relative of files) {
  const source = fs.readFileSync(path.join(root, relative), 'utf8');
  const headEnd = source.search(/<\/head\s*>/i);
  if (headEnd < 0) throw new Error(`Missing </head> in ${relative}`);
  for (const line of blockLines) {
    const occurrences = source.split(line).length - 1;
    if (occurrences !== 1) throw new Error(`${relative}: expected one occurrence of ${line}, found ${occurrences}`);
    if (source.indexOf(line) > headEnd) throw new Error(`${relative}: favicon metadata is outside <head>`);
  }
}

console.log(`Favicon metadata: ${updated} updated, ${skipped} already complete, ${files.length} total HTML pages verified.`);
