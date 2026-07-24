const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');

function replaceAll(source, replacements) {
  for (const [from, to] of replacements) {
    if (!source.includes(from)) throw new Error(`Template text not found: ${from}`);
    source = source.split(from).join(to);
  }
  return source;
}

let english = fs.readFileSync(path.join(root, 'success_likelihood_test', 'index.html'), 'utf8');
english = replaceAll(english, [
  ['/success_likelihood_test/', '/entrepreneurship_skills_test/'],
  ["topicId: 'success_likelihood_test'", "topicId: 'entrepreneurship_skills_test'"],
  ['Success Likelihood Test', 'Entrepreneurship Skills &amp; Ability Test'],
  ["testName: 'Entrepreneurship Skills &amp; Ability Test'", "testName: 'Entrepreneurship Skills & Ability Test'"],
  ['`Entrepreneurship Skills &amp; Ability Test — ${r.length} questions`', '`Entrepreneurship Skills & Ability Test — ${r.length} questions`'],
  ['Self-Assessment · Success Readiness', 'Self-Assessment · Entrepreneurship'],
  ['Explore the habits and enabling conditions that currently support purposeful progress across 20 dimensions—without treating the result as a prediction or guarantee.', 'Explore your current entrepreneurship skills and habits across 20 dimensions, from opportunity discovery and validation to finance, sales, leadership, execution, adaptation, and responsible business.'],
  ['Questions are drawn evenly across all 20 success-readiness dimensions.', 'Questions are drawn evenly across all 20 entrepreneurship dimensions.'],
  ['This educational self-reflection measures current success-readiness habits and enabling conditions. It does not predict or guarantee success, measure personal worth, or account fully for opportunity, inequality, health, resources, luck, and events outside your control. Answers are scored only on your device and are not stored or sent.', 'This educational self-reflection measures current entrepreneurship habits and skills. It does not predict or guarantee venture success, certify professional ability, or replace legal, financial, tax, or business advice. Markets, capital, timing, access, health, policy, luck, and other conditions also shape outcomes. Answers are scored only on your device and are not stored or sent.'],
  ['Your Success Readiness Profile', 'Your Entrepreneurship Skills Profile'],
  ['average success-readiness score out of 10', 'average entrepreneurship-readiness score out of 10'],
  ['Breakdown by Success-Readiness Dimension', 'Breakdown by Entrepreneurship Dimension'],
  ['See My Success Readiness Profile', 'See My Entrepreneurship Profile'],
  ['Overall success-readiness score:', 'Overall entrepreneurship-readiness score:']
]);

let urdu = fs.readFileSync(path.join(root, 'success_likelihood_test', 'urdu.html'), 'utf8');
urdu = replaceAll(urdu, [
  ['/success_likelihood_test/', '/entrepreneurship_skills_test/'],
  ["topicId: 'success_likelihood_test'", "topicId: 'entrepreneurship_skills_test'"],
  ['کامیابی کے امکان کا ٹیسٹ', 'کاروباری مہارتوں اور صلاحیت کا ٹیسٹ'],
  ['خود شناسی · کامیابی کی تیاری', 'خود شناسی · کاروباری صلاحیت'],
  ['ان عادات اور سازگار حالات کا 20 پہلوؤں میں جائزہ لیں جو اس وقت بامقصد پیش رفت کی حمایت کرتے ہیں—نتیجے کو پیش گوئی یا ضمانت سمجھے بغیر۔', 'مواقع کی دریافت اور تصدیق سے لے کر مالیات، فروخت، قیادت، عمل، موافقت اور ذمہ دار کاروبار تک اپنی موجودہ کاروباری مہارتوں اور عادات کا 20 پہلوؤں میں جائزہ لیں۔'],
  ['سوالات کامیابی کی تیاری کے تمام 20 پہلوؤں میں یکساں تقسیم ہیں۔', 'سوالات کاروباری مہارت کے تمام 20 پہلوؤں میں یکساں تقسیم ہیں۔'],
  ['یہ تعلیمی ذاتی جائزہ کامیابی کی موجودہ تیاری کی عادات اور سازگار حالات دیکھتا ہے۔ یہ کامیابی کی پیش گوئی یا ضمانت، ذاتی قدر کی پیمائش نہیں کرتا اور مواقع، عدم مساوات، صحت، وسائل، قسمت اور اختیار سے باہر واقعات کو مکمل طور پر شامل نہیں کر سکتا۔ جوابات صرف آپ کے آلے پر شمار ہوتے ہیں اور محفوظ یا ارسال نہیں کیے جاتے۔', 'یہ تعلیمی ذاتی جائزہ موجودہ کاروباری عادات اور مہارتیں دیکھتا ہے۔ یہ کاروباری کامیابی کی پیش گوئی یا ضمانت، پیشہ ورانہ صلاحیت کی سند یا قانونی، مالی، ٹیکس یا کاروباری مشورے کا متبادل نہیں۔ منڈی، سرمایہ، وقت، رسائی، صحت، پالیسی، قسمت اور دوسرے حالات بھی نتائج پر اثر ڈالتے ہیں۔ جوابات صرف آپ کے آلے پر شمار ہوتے ہیں اور محفوظ یا ارسال نہیں کیے جاتے۔'],
  ['آپ کی کامیابی کی تیاری کا پروفائل', 'آپ کی کاروباری مہارتوں کا پروفائل'],
  ['10 میں سے کامیابی کی تیاری کا اوسط اسکور', '10 میں سے کاروباری تیاری کا اوسط اسکور'],
  ['کامیابی کی تیاری کے ہر پہلو کی تفصیل', 'کاروباری مہارت کے ہر پہلو کی تفصیل'],
  ['میری کامیابی کی تیاری دکھائیں ←', 'میرا کاروباری پروفائل دکھائیں ←'],
  ['کامیابی کی مجموعی تیاری کا اسکور:', 'مجموعی کاروباری تیاری کا اسکور:']
]);

fs.writeFileSync(path.join(__dirname, 'index.html'), english);
fs.writeFileSync(path.join(__dirname, 'urdu.html'), urdu);
console.log('Built English and Urdu entrepreneurship-skills test pages.');
