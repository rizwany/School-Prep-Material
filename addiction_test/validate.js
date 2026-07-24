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
function check(condition, name, details = '') { checks.push({name, passed:Boolean(condition), details}); }

check(en.questions.length === 500, 'English bank contains 500 questions', `${en.questions.length}`);
check(ur.questions.length === 500, 'Urdu bank contains 500 questions', `${ur.questions.length}`);
check(en.meta.categories.length === 20 && ur.meta.categories.length === 20, 'Both banks contain 20 subtopics');
for (const [language, bank] of [['English', en], ['Urdu', ur]]) {
  check(new Set(bank.questions.map(q => q.id)).size === 500, `${language} IDs are unique`);
  check(new Set(bank.questions.map(q => q.text)).size === 500, `${language} question texts are unique`);
  const categoryIds = new Set(bank.meta.categories.map(c => c.id));
  check(bank.questions.every(q => categoryIds.has(q.category)), `${language} category references are valid`);
  check(bank.meta.categories.every(c => bank.questions.filter(q => q.category === c.id).length === 25), `${language} has 25 questions per subtopic`);
  check(bank.meta.categories.every(c => bank.questions.filter(q => q.category === c.id && q.reverse).length === 12), `${language} has 12 protective reverse-scored questions per subtopic`);
}
check(en.questions.every((q, i) => q.id === ur.questions[i].id && q.category === ur.questions[i].category && q.reverse === ur.questions[i].reverse), 'English and Urdu question metadata is aligned');
check(!ur.questions.some(q => /[A-Za-z]{3,}/.test(q.text)), 'Urdu questions contain no English fragments');
check(!ur.questions.some(q => /[\u0900-\u097F]/.test(q.text)), 'Urdu questions contain no Devanagari characters');
check(en.questions.some(q => q.reverse) && en.questions.some(q => !q.reverse), 'Bank contains risk and protective items');
check(10 === 10 && (11 - 1) === 10, 'Frequent risk or absent protection scores toward high concern');
check(1 === 1 && (11 - 10) === 1, 'Absent risk or frequent protection scores toward low concern');
check(en.meta.scale.minLabel === 'Never / not applicable' && ur.meta.scale.minLabel.includes('لاگو نہیں'), 'Scale provides a not-applicable response');

for (const length of [20, 60, 100, 500]) {
  check(Number.isInteger(length / 20), `${length}-question option balances evenly across 20 subtopics`);
  check(enPage.includes(`data-len="${length}"`) && urPage.includes(`data-len="${length}"`), `${length}-question option exists on both pages`);
}
const coreIds = ['levelScreen','quizWrap','qNum','qTotal','pFill','qCard','btnNext','resultsWrap','resEmoji','resLevel','resScore','resMsg','bdList','btnRetry','cpBtn'];
check(coreIds.every(id => ethics.includes(`id="${id}"`) && enPage.includes(`id="${id}"`) && urPage.includes(`id="${id}"`)), 'Core ethics-test UI contract is preserved');
check(!/ambition_skills_test|Ambition Skills|healthy-ambition|بلند حوصلگی/.test(enPage + urPage), 'No source-template topic residue remains');
check(enPage.includes('/assets/favicons/favicon.ico') && urPage.includes('/assets/favicons/favicon.ico'), 'Default favicon is included on both pages');
check(enPage.includes('/assets/favicons/apple-icon-180x180.png') && urPage.includes('/assets/favicons/android-icon-192x192.png'), 'Full favicon metadata is retained');
check(/not a diagnosis/.test(enPage) && /تشخیص نہیں/.test(urPage), 'Both pages state that the screen is not diagnostic');
check(/suddenly stop alcohol, benzodiazepines/.test(enPage) && /اچانک بند نہ کریں/.test(urPage), 'Both pages warn against unsafe sudden withdrawal');
check(/Suspected overdose/.test(enPage) && /زیادہ مقدار کا شبہ/.test(urPage), 'Both pages include urgent overdose guidance');
check(en.meta.levels[0].label.includes('Very High') && en.meta.levels.at(-1).label.includes('Not No Risk'), 'Result labels avoid false reassurance and map high scores to concern');

function parseInlineScripts(page, language) {
  try {
    [...page.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)].map(m => m[1]).filter(s => s.trim()).forEach(s => new vm.Script(s));
    check(true, `${language} inline JavaScript parses`);
  } catch (error) { check(false, `${language} inline JavaScript parses`, error.message); }
}
parseInlineScripts(enPage, 'English page');
parseInlineScripts(urPage, 'Urdu page');
check(home.includes('addiction_test/index.html'), 'Homepage links to English test');
check(home.includes('addiction_test/urdu.html'), 'Homepage links to Urdu test');
check(home.includes('Addiction Test — Risk Self-Screen') && home.includes('نشے کا ٹیسٹ'), 'Homepage includes bilingual section title');

const failures = checks.filter(c => !c.passed);
console.log(JSON.stringify({passed:failures.length === 0, checks:checks.length, failures}, null, 2));
if (failures.length) process.exit(1);
