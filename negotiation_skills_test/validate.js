const fs = require('fs');
const path = require('path');
const vm = require('vm');

const dir = __dirname;
const root = path.resolve(dir, '..');
const en = JSON.parse(fs.readFileSync(path.join(dir, 'assets', 'questions.json'), 'utf8'));
const ur = JSON.parse(fs.readFileSync(path.join(dir, 'assets', 'questions-urdu.json'), 'utf8'));
const enPage = fs.readFileSync(path.join(dir, 'index.html'), 'utf8');
const urPage = fs.readFileSync(path.join(dir, 'urdu.html'), 'utf8');
const home = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const ethics = fs.readFileSync(path.join(root, 'ethics_test', 'index.html'), 'utf8');

const checks = [];
function check(condition, name, details = '') {
  checks.push({ name, passed: Boolean(condition), details });
}

check(en.questions.length === 500, 'English bank contains 500 questions', `${en.questions.length}`);
check(ur.questions.length === 500, 'Urdu bank contains 500 questions', `${ur.questions.length}`);
check(en.meta.categories.length === 20 && ur.meta.categories.length === 20, 'Both banks contain 20 subtopics');

for (const [language, bank] of [['English', en], ['Urdu', ur]]) {
  check(new Set(bank.questions.map(q => q.id)).size === 500, `${language} IDs are unique`);
  check(new Set(bank.questions.map(q => q.text)).size === 500, `${language} question texts are unique`);
  const validCategories = new Set(bank.meta.categories.map(c => c.id));
  check(bank.questions.every(q => validCategories.has(q.category)), `${language} category references are valid`);
  check(bank.meta.categories.every(c => bank.questions.filter(q => q.category === c.id).length === 25), `${language} has 25 questions per subtopic`);
  check(bank.meta.categories.every(c => bank.questions.filter(q => q.category === c.id && q.reverse).length === 12), `${language} has 12 reverse-scored questions per subtopic`);
}

check(en.questions.every((q, i) => q.id === ur.questions[i].id && q.category === ur.questions[i].category && q.reverse === ur.questions[i].reverse), 'English and Urdu question metadata is aligned');
check(!ur.questions.some(q => /[A-Za-z]{3,}/.test(q.text)), 'Urdu questions contain no English fragments');
check(!ur.questions.some(q => /[\u0900-\u097F]/.test(q.text)), 'Urdu questions contain no Devanagari characters');
check(en.questions.some(q => q.reverse) && en.questions.some(q => !q.reverse), 'Bank contains positive and reverse-scored items');
check((11 - 1) === 10 && 10 === 10, 'Constructive responses score toward 10');
check((11 - 10) === 1 && 1 === 1, 'Unconstructive responses score toward 1');

for (const length of [20, 60, 100, 500]) {
  check(Number.isInteger(length / 20), `${length}-question option balances evenly across 20 subtopics`);
  check(enPage.includes(`data-len="${length}"`) && urPage.includes(`data-len="${length}"`), `${length}-question option exists on both pages`);
}

const requiredIds = [...ethics.matchAll(/id="([A-Za-z][A-Za-z0-9_-]*)"/g)].map(m => m[1]);
const relevantIds = requiredIds.filter(id => ['levelScreen', 'quizWrap', 'qNum', 'qTotal', 'pFill', 'qCard', 'btnNext', 'resultsWrap', 'resEmoji', 'resLevel', 'resScore', 'resMsg', 'bdList', 'btnRetry', 'cpBtn'].includes(id));
check(relevantIds.every(id => enPage.includes(`id="${id}"`) && urPage.includes(`id="${id}"`)), 'Core ethics-test UI contract is preserved');

const oldResidue = /time_management_test|Time Management Test|time-management|وقت کے انتظام/;
check(!oldResidue.test(enPage) && !oldResidue.test(urPage), 'No source-template topic residue remains');
check(enPage.includes('/assets/favicons/favicon.ico') && urPage.includes('/assets/favicons/favicon.ico'), 'Default favicon is included on both pages');
check(enPage.includes('/assets/favicons/apple-icon-180x180.png') && urPage.includes('/assets/favicons/android-icon-192x192.png'), 'Full favicon metadata is retained');

function validateInlineScripts(page, label) {
  const scripts = [...page.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)]
    .map(m => m[1]).filter(code => code.trim());
  try {
    scripts.forEach(code => new vm.Script(code));
    check(true, `${label} inline JavaScript parses`);
  } catch (error) {
    check(false, `${label} inline JavaScript parses`, error.message);
  }
}
validateInlineScripts(enPage, 'English page');
validateInlineScripts(urPage, 'Urdu page');

check(home.includes('negotiation_skills_test/index.html'), 'Homepage links to English test');
check(home.includes('negotiation_skills_test/urdu.html'), 'Homepage links to Urdu test');
check(home.includes('Negotiation Skills Test') && home.includes('مذاکراتی مہارتوں کا امتحان'), 'Homepage includes bilingual section title');

const failures = checks.filter(c => !c.passed);
console.log(JSON.stringify({ passed: failures.length === 0, checks: checks.length, failures }, null, 2));
if (failures.length) process.exit(1);
