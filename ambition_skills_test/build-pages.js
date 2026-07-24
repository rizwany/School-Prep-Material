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

let english = fs.readFileSync(path.join(root, 'entrepreneurship_skills_test', 'index.html'), 'utf8');
english = replaceAll(english, [
  ['/entrepreneurship_skills_test/', '/ambition_skills_test/'],
  ["topicId: 'entrepreneurship_skills_test'", "topicId: 'ambition_skills_test'"],
  ['Entrepreneurship Skills &amp; Ability Test', 'Ambition Skills &amp; Ability Test'],
  ["testName: 'Entrepreneurship Skills & Ability Test'", "testName: 'Ambition Skills & Ability Test'"],
  ['`Entrepreneurship Skills & Ability Test — ${r.length} questions`', '`Ambition Skills & Ability Test — ${r.length} questions`'],
  ['Self-Assessment · Entrepreneurship', 'Self-Assessment · Healthy Ambition'],
  ['Explore your current entrepreneurship skills and habits across 20 dimensions, from opportunity discovery and validation to finance, sales, leadership, execution, adaptation, and responsible business.', 'Explore your current capacity for healthy ambition across 20 dimensions, from purposeful aspiration and challenge to discipline, resilience, learning, influence, ethics, and sustainable wellbeing.'],
  ['Questions are drawn evenly across all 20 entrepreneurship dimensions.', 'Questions are drawn evenly across all 20 healthy-ambition dimensions.'],
  ['This educational self-reflection measures current entrepreneurship habits and skills. It does not predict or guarantee venture success, certify professional ability, or replace legal, financial, tax, or business advice. Markets, capital, timing, access, health, policy, luck, and other conditions also shape outcomes. Answers are scored only on your device and are not stored or sent.', 'This educational self-reflection measures current ambition-related habits and skills. It does not measure personal worth, diagnose a condition, or predict or guarantee achievement. Health, access, opportunity, resources, responsibilities, discrimination, luck, and other circumstances also shape outcomes. Answers are scored only on your device and are not stored or sent.'],
  ['Your Entrepreneurship Skills Profile', 'Your Healthy Ambition Profile'],
  ['average entrepreneurship-readiness score out of 10', 'average healthy-ambition score out of 10'],
  ['Breakdown by Entrepreneurship Dimension', 'Breakdown by Ambition Dimension'],
  ['See My Entrepreneurship Profile', 'See My Ambition Profile'],
  ['Overall entrepreneurship-readiness score:', 'Overall healthy-ambition score:']
]);

let urdu = fs.readFileSync(path.join(root, 'entrepreneurship_skills_test', 'urdu.html'), 'utf8');
urdu = replaceAll(urdu, [
  ['/entrepreneurship_skills_test/', '/ambition_skills_test/'],
  ["topicId: 'entrepreneurship_skills_test'", "topicId: 'ambition_skills_test'"],
  ['کاروباری مہارتوں اور صلاحیت کا ٹیسٹ', 'بلند حوصلگی کی مہارتوں اور صلاحیت کا ٹیسٹ'],
  ['خود شناسی · کاروباری صلاحیت', 'خود شناسی · صحت مند بلند حوصلگی'],
  ['مواقع کی دریافت اور تصدیق سے لے کر مالیات، فروخت، قیادت، عمل، موافقت اور ذمہ دار کاروبار تک اپنی موجودہ کاروباری مہارتوں اور عادات کا 20 پہلوؤں میں جائزہ لیں۔', 'بامقصد ارادے اور چیلنج سے لے کر نظم، ثابت قدمی، سیکھنے، مثبت اثر، اخلاقیات اور پائیدار صحت تک اپنی صحت مند بلند حوصلگی کا 20 پہلوؤں میں جائزہ لیں۔'],
  ['سوالات کاروباری مہارت کے تمام 20 پہلوؤں میں یکساں تقسیم ہیں۔', 'سوالات صحت مند بلند حوصلگی کے تمام 20 پہلوؤں میں یکساں تقسیم ہیں۔'],
  ['یہ تعلیمی ذاتی جائزہ موجودہ کاروباری عادات اور مہارتیں دیکھتا ہے۔ یہ کاروباری کامیابی کی پیش گوئی یا ضمانت، پیشہ ورانہ صلاحیت کی سند یا قانونی، مالی، ٹیکس یا کاروباری مشورے کا متبادل نہیں۔ منڈی، سرمایہ، وقت، رسائی، صحت، پالیسی، قسمت اور دوسرے حالات بھی نتائج پر اثر ڈالتے ہیں۔ جوابات صرف آپ کے آلے پر شمار ہوتے ہیں اور محفوظ یا ارسال نہیں کیے جاتے۔', 'یہ تعلیمی ذاتی جائزہ بلند حوصلگی سے متعلق موجودہ عادات اور مہارتیں دیکھتا ہے۔ یہ ذاتی قدر کی پیمائش، کسی کیفیت کی تشخیص یا کامیابی کی پیش گوئی یا ضمانت نہیں۔ صحت، رسائی، مواقع، وسائل، ذمہ داریاں، امتیاز، قسمت اور دوسرے حالات بھی نتائج پر اثر ڈالتے ہیں۔ جوابات صرف آپ کے آلے پر شمار ہوتے ہیں اور محفوظ یا ارسال نہیں کیے جاتے۔'],
  ['آپ کی کاروباری مہارتوں کا پروفائل', 'آپ کی صحت مند بلند حوصلگی کا پروفائل'],
  ['10 میں سے کاروباری تیاری کا اوسط اسکور', '10 میں سے صحت مند بلند حوصلگی کا اوسط اسکور'],
  ['کاروباری مہارت کے ہر پہلو کی تفصیل', 'بلند حوصلگی کے ہر پہلو کی تفصیل'],
  ['میرا کاروباری پروفائل دکھائیں ←', 'میرا بلند حوصلگی پروفائل دکھائیں ←'],
  ['مجموعی کاروباری تیاری کا اسکور:', 'مجموعی صحت مند بلند حوصلگی کا اسکور:']
]);

fs.writeFileSync(path.join(__dirname, 'index.html'), english);
fs.writeFileSync(path.join(__dirname, 'urdu.html'), urdu);
console.log('Built English and Urdu ambition-skills test pages.');
