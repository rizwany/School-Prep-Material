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

let english = fs.readFileSync(path.join(root, 'time_management_test', 'index.html'), 'utf8');
english = replaceAll(english, [
  ['/time_management_test/', '/negotiation_skills_test/'],
  ["topicId: 'time_management_test'", "topicId: 'negotiation_skills_test'"],
  ['Time Management Test', 'Negotiation Skills Test'],
  ['Self-Assessment · Time Management', 'Self-Assessment · Negotiation Skills'],
  ['Explore how you plan, prioritise, schedule, focus, adapt, and balance your available time across 20 closely related dimensions.', 'Explore how you prepare, communicate, create value, manage differences, and secure workable agreements across 20 closely related negotiation dimensions.'],
  ['Questions are drawn evenly across all 20 time-management dimensions.', 'Questions are drawn evenly across all 20 negotiation-skill dimensions.'],
  ['This educational self-reflection measures time-management habits, not intelligence, worth, or guaranteed productivity. Workload, health, caregiving, resources, and circumstances also shape time use. Answers are scored only on your device and are not stored or sent.', 'This educational self-reflection measures negotiation habits, not intelligence, worth, professional certification, or guaranteed outcomes. Culture, role, power, stakes, experience, and context can shape negotiation behaviour. Answers are scored only on your device and are not stored or sent.'],
  ['Your Time-Management Profile', 'Your Negotiation Skills Profile'],
  ['average time-management score out of 10', 'average negotiation-skill score out of 10'],
  ['Breakdown by Time-Management Dimension', 'Breakdown by Negotiation Dimension'],
  ['See My Time Profile', 'See My Negotiation Profile'],
  ['Overall time-management score:', 'Overall negotiation-skills score:'],
]);

let urdu = fs.readFileSync(path.join(root, 'time_management_test', 'urdu.html'), 'utf8');
urdu = replaceAll(urdu, [
  ['/time_management_test/', '/negotiation_skills_test/'],
  ["topicId: 'time_management_test'", "topicId: 'negotiation_skills_test'"],
  ['وقت کے انتظام کا امتحان', 'مذاکراتی مہارتوں کا امتحان'],
  ['خود شناسی · وقت کا انتظام', 'خود شناسی · مذاکراتی مہارتیں'],
  ['دریافت کریں کہ آپ دستیاب وقت کو 20 متعلقہ پہلوؤں میں کیسے منصوبہ بند، ترجیح، شیڈول، مرکوز، تبدیل اور متوازن کرتے ہیں۔', 'دریافت کریں کہ آپ مذاکرات کی تیاری، گفتگو، باہمی قدر، اختلافات اور قابلِ عمل معاہدوں کو 20 متعلقہ پہلوؤں میں کیسے سنبھالتے ہیں۔'],
  ['سوالات وقت کے انتظام کے تمام 20 پہلوؤں میں یکساں تقسیم ہیں۔', 'سوالات مذاکراتی مہارتوں کے تمام 20 پہلوؤں میں یکساں تقسیم ہیں۔'],
  ['یہ تعلیمی ذاتی جائزہ وقت کے انتظام کی عادات دیکھتا ہے، ذہانت، قدر یا یقینی کارکردگی نہیں۔ کام کا بوجھ، صحت، دیکھ بھال، وسائل اور حالات بھی وقت کے استعمال پر اثر ڈالتے ہیں۔ جوابات صرف آپ کے آلے پر شمار ہوتے ہیں اور محفوظ یا ارسال نہیں کیے جاتے۔', 'یہ تعلیمی ذاتی جائزہ مذاکراتی عادات دیکھتا ہے، ذہانت، ذاتی قدر، پیشہ ورانہ سند یا یقینی نتائج نہیں۔ ثقافت، کردار، طاقت، اہمیت، تجربہ اور حالات بھی مذاکراتی رویے پر اثر ڈالتے ہیں۔ جوابات صرف آپ کے آلے پر شمار ہوتے ہیں اور محفوظ یا ارسال نہیں کیے جاتے۔'],
  ['آپ کے وقت کے انتظام کی سطح', 'آپ کی مذاکراتی مہارتوں کی سطح'],
  ['10 میں سے وقت کے انتظام کا اوسط اسکور', '10 میں سے مذاکراتی مہارتوں کا اوسط اسکور'],
  ['وقت کے انتظام کے ہر پہلو کی تفصیل', 'مذاکراتی مہارت کے ہر پہلو کی تفصیل'],
  ['میرا وقت کا پروفائل دکھائیں ←', 'میرا مذاکراتی پروفائل دکھائیں ←'],
  ['مجموعی وقت کے انتظام کا اسکور:', 'مجموعی مذاکراتی مہارتوں کا اسکور:'],
]);

fs.writeFileSync(path.join(__dirname, 'index.html'), english);
fs.writeFileSync(path.join(__dirname, 'urdu.html'), urdu);
console.log('Built English and Urdu negotiation-skills test pages.');
