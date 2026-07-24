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

let english = fs.readFileSync(path.join(root, 'negotiation_skills_test', 'index.html'), 'utf8');
english = replaceAll(english, [
  ['/negotiation_skills_test/', '/team_player_test/'],
  ["topicId: 'negotiation_skills_test'", "topicId: 'team_player_test'"],
  ['Negotiation Skills Test', 'Team Player Test'],
  ['Self-Assessment · Negotiation Skills', 'Self-Assessment · Teamwork'],
  ['Explore how you prepare, communicate, create value, manage differences, and secure workable agreements across 20 closely related negotiation dimensions.', 'Explore how you collaborate, communicate, follow through, build trust, navigate differences, and help a team learn across 20 closely related dimensions.'],
  ['Questions are drawn evenly across all 20 negotiation-skill dimensions.', 'Questions are drawn evenly across all 20 team-player dimensions.'],
  ['This educational self-reflection measures negotiation habits, not intelligence, worth, professional certification, or guaranteed outcomes. Culture, role, power, stakes, experience, and context can shape negotiation behaviour. Answers are scored only on your device and are not stored or sent.', 'This educational self-reflection measures teamwork habits, not intelligence, personal worth, employability, or guaranteed team performance. Role, culture, access, power, health, workload, and team conditions can shape behaviour. Answers are scored only on your device and are not stored or sent.'],
  ['Your Negotiation Skills Profile', 'Your Team Player Profile'],
  ['average negotiation-skill score out of 10', 'average team-player score out of 10'],
  ['Breakdown by Negotiation Dimension', 'Breakdown by Teamwork Dimension'],
  ['See My Negotiation Profile', 'See My Team Player Profile'],
  ['Overall negotiation-skills score:', 'Overall team-player score:']
]);

let urdu = fs.readFileSync(path.join(root, 'negotiation_skills_test', 'urdu.html'), 'utf8');
urdu = replaceAll(urdu, [
  ['/negotiation_skills_test/', '/team_player_test/'],
  ["topicId: 'negotiation_skills_test'", "topicId: 'team_player_test'"],
  ['مذاکراتی مہارتوں کا امتحان', 'ٹیم پلیئر ٹیسٹ'],
  ['خود شناسی · مذاکراتی مہارتیں', 'خود شناسی · ٹیم ورک'],
  ['دریافت کریں کہ آپ مذاکرات کی تیاری، گفتگو، باہمی قدر، اختلافات اور قابلِ عمل معاہدوں کو 20 متعلقہ پہلوؤں میں کیسے سنبھالتے ہیں۔', 'دریافت کریں کہ آپ 20 متعلقہ پہلوؤں میں کیسے تعاون، ابلاغ، ذمہ داری کی تکمیل، اعتماد، اختلافات اور ٹیم کی مشترکہ تعلیم کو سنبھالتے ہیں۔'],
  ['سوالات مذاکراتی مہارتوں کے تمام 20 پہلوؤں میں یکساں تقسیم ہیں۔', 'سوالات ٹیم پلیئر کی تمام 20 مہارتوں میں یکساں تقسیم ہیں۔'],
  ['یہ تعلیمی ذاتی جائزہ مذاکراتی عادات دیکھتا ہے، ذہانت، ذاتی قدر، پیشہ ورانہ سند یا یقینی نتائج نہیں۔ ثقافت، کردار، طاقت، اہمیت، تجربہ اور حالات بھی مذاکراتی رویے پر اثر ڈالتے ہیں۔ جوابات صرف آپ کے آلے پر شمار ہوتے ہیں اور محفوظ یا ارسال نہیں کیے جاتے۔', 'یہ تعلیمی ذاتی جائزہ ٹیم ورک کی عادات دیکھتا ہے، ذہانت، ذاتی قدر، ملازمت کی اہلیت یا یقینی ٹیم کارکردگی نہیں۔ کردار، ثقافت، رسائی، طاقت، صحت، کام کا بوجھ اور ٹیم کے حالات رویے پر اثر ڈال سکتے ہیں۔ جوابات صرف آپ کے آلے پر شمار ہوتے ہیں اور محفوظ یا ارسال نہیں کیے جاتے۔'],
  ['آپ کی مذاکراتی مہارتوں کی سطح', 'آپ کا ٹیم پلیئر پروفائل'],
  ['10 میں سے مذاکراتی مہارتوں کا اوسط اسکور', '10 میں سے ٹیم پلیئر کا اوسط اسکور'],
  ['مذاکراتی مہارت کے ہر پہلو کی تفصیل', 'ٹیم ورک کے ہر پہلو کی تفصیل'],
  ['میرا مذاکراتی پروفائل دکھائیں ←', 'میرا ٹیم پلیئر پروفائل دکھائیں ←'],
  ['مجموعی مذاکراتی مہارتوں کا اسکور:', 'مجموعی ٹیم پلیئر اسکور:']
]);

fs.writeFileSync(path.join(__dirname, 'index.html'), english);
fs.writeFileSync(path.join(__dirname, 'urdu.html'), urdu);
console.log('Built English and Urdu team-player test pages.');
