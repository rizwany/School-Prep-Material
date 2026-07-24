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

let english = fs.readFileSync(path.join(root, 'ambition_skills_test', 'index.html'), 'utf8');
english = replaceAll(english, [
  ['/ambition_skills_test/', '/addiction_test/'],
  ["topicId: 'ambition_skills_test'", "topicId: 'addiction_test'"],
  ['Ambition Skills &amp; Ability Test', 'Addiction Test — Risk Self-Screen'],
  ["testName: 'Ambition Skills & Ability Test'", "testName: 'Addiction Test — Risk Self-Screen'"],
  ['`Ambition Skills & Ability Test — ${r.length} questions`', '`Addiction Test — Risk Self-Screen — ${r.length} questions`'],
  ['Self-Assessment · Healthy Ambition', 'Private Self-Screen · Addiction Risk'],
  ['Explore your current capacity for healthy ambition across 20 dimensions, from purposeful aspiration and challenge to discipline, resilience, learning, influence, ethics, and sustainable wellbeing.', 'Think about one substance or potentially addictive behaviour that concerns you and answer for the past 12 months. The 20 dimensions cover control, craving, priority, harm, safety, support, readiness, and recovery.'],
  ['Questions are drawn evenly across all 20 healthy-ambition dimensions.', 'Questions are drawn evenly across all 20 addiction-risk and recovery dimensions.'],
  ['This educational self-reflection measures current ambition-related habits and skills. It does not measure personal worth, diagnose a condition, or predict or guarantee achievement. Health, access, opportunity, resources, responsibilities, discrimination, luck, and other circumstances also shape outcomes. Answers are scored only on your device and are not stored or sent.', 'This private educational self-screen is not a diagnosis and cannot determine whether you have an addiction. Tolerance or physical dependence can occur without addiction, including with prescribed medicines. Do not change prescribed medication or suddenly stop alcohol, benzodiazepines, or another dependence-forming substance without medical advice. Suspected overdose, trouble breathing, inability to wake, seizure, hallucinations, severe confusion, or immediate danger requires emergency medical help now. Answers stay on your device and are not stored or sent.'],
  ['Your Healthy Ambition Profile', 'Your Addiction-Risk Summary'],
  ['average healthy-ambition score out of 10', 'average current-concern score out of 10'],
  ['Breakdown by Ambition Dimension', 'Breakdown by Risk & Recovery Dimension'],
  ['See My Ambition Profile', 'See My Risk Summary'],
  ['Overall healthy-ambition score:', 'Overall current-concern score:']
]);

let urdu = fs.readFileSync(path.join(root, 'ambition_skills_test', 'urdu.html'), 'utf8');
urdu = replaceAll(urdu, [
  ['/ambition_skills_test/', '/addiction_test/'],
  ["topicId: 'ambition_skills_test'", "topicId: 'addiction_test'"],
  ['بلند حوصلگی کی مہارتوں اور صلاحیت کا ٹیسٹ', 'نشے کا ٹیسٹ — خطرے کا ذاتی جائزہ'],
  ['خود شناسی · صحت مند بلند حوصلگی', 'نجی ذاتی جائزہ · نشے کا خطرہ'],
  ['بامقصد ارادے اور چیلنج سے لے کر نظم، ثابت قدمی، سیکھنے، مثبت اثر، اخلاقیات اور پائیدار صحت تک اپنی صحت مند بلند حوصلگی کا 20 پہلوؤں میں جائزہ لیں۔', 'ایک ایسے مادے یا ممکنہ نشہ آور رویے کے بارے میں سوچیں جو تشویش پیدا کرتا ہے اور گزشتہ 12 ماہ کے مطابق جواب دیں۔ 20 پہلو قابو، طلب، ترجیح، نقصان، حفاظت، معاونت، تبدیلی اور بحالی دیکھتے ہیں۔'],
  ['سوالات صحت مند بلند حوصلگی کے تمام 20 پہلوؤں میں یکساں تقسیم ہیں۔', 'سوالات نشے کے خطرے اور بحالی کے تمام 20 پہلوؤں میں یکساں تقسیم ہیں۔'],
  ['یہ تعلیمی ذاتی جائزہ بلند حوصلگی سے متعلق موجودہ عادات اور مہارتیں دیکھتا ہے۔ یہ ذاتی قدر کی پیمائش، کسی کیفیت کی تشخیص یا کامیابی کی پیش گوئی یا ضمانت نہیں۔ صحت، رسائی، مواقع، وسائل، ذمہ داریاں، امتیاز، قسمت اور دوسرے حالات بھی نتائج پر اثر ڈالتے ہیں۔ جوابات صرف آپ کے آلے پر شمار ہوتے ہیں اور محفوظ یا ارسال نہیں کیے جاتے۔', 'یہ نجی تعلیمی ذاتی جائزہ تشخیص نہیں اور یہ طے نہیں کر سکتا کہ آپ کو نشہ ہے۔ برداشت یا جسمانی انحصار نشے کے بغیر بھی ہو سکتا ہے، خاص طور پر تجویز شدہ دوا کے ساتھ۔ طبی مشورے کے بغیر تجویز شدہ دوا تبدیل نہ کریں اور الکحل، بینزودیازپین یا انحصار پیدا کرنے والا مادہ اچانک بند نہ کریں۔ زیادہ مقدار کا شبہ، سانس میں مشکل، نہ جاگنا، دورہ، غیر موجود چیزیں محسوس کرنا، شدید الجھن یا فوری خطرہ ہو تو ابھی ہنگامی طبی مدد لیں۔ جوابات صرف آپ کے آلے پر رہتے ہیں اور محفوظ یا ارسال نہیں کیے جاتے۔'],
  ['آپ کی صحت مند بلند حوصلگی کا پروفائل', 'آپ کے نشے کے خطرے کا خلاصہ'],
  ['10 میں سے صحت مند بلند حوصلگی کا اوسط اسکور', '10 میں سے موجودہ تشویش کا اوسط اسکور'],
  ['بلند حوصلگی کے ہر پہلو کی تفصیل', 'خطرے اور بحالی کے ہر پہلو کی تفصیل'],
  ['میرا بلند حوصلگی پروفائل دکھائیں ←', 'میرے خطرے کا خلاصہ دکھائیں ←'],
  ['مجموعی صحت مند بلند حوصلگی کا اسکور:', 'موجودہ تشویش کا مجموعی اسکور:']
]);

fs.writeFileSync(path.join(__dirname, 'index.html'), english);
fs.writeFileSync(path.join(__dirname, 'urdu.html'), urdu);
console.log('Built English and Urdu addiction-risk self-screen pages.');
