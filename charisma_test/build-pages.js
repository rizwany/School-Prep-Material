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

let english = fs.readFileSync(path.join(root, 'team_player_test', 'index.html'), 'utf8');
english = replaceAll(english, [
  ['/team_player_test/', '/charisma_test/'],
  ["topicId: 'team_player_test'", "topicId: 'charisma_test'"],
  ['--accent:      #2f855a;', '--accent:      #db2777;'],
  ['--accent-dark: #276749;', '--accent-dark: #be185d;'],
  ['background: #e9f7ef', 'background: #fce7f3'],
  ['rgba(47,133,90,.12)', 'rgba(219,39,119,.12)'],
  ['rgba(47,133,90,.2)', 'rgba(219,39,119,.2)'],
  ['Team Player Test', 'Charisma Test'],
  ['Self-Assessment · Teamwork', 'Self-Assessment · Charisma'],
  ['Explore how you collaborate, communicate, follow through, build trust, navigate differences, and help a team learn across 20 closely related dimensions.', 'Explore how you connect, engage, and leave an impression through presence, warmth, confidence, humor, storytelling, influence, and 14 other closely related dimensions of charisma.'],
  ['Questions are drawn evenly across all 20 team-player dimensions.', 'Questions are drawn evenly across all 20 charisma dimensions.'],
  ['This educational self-reflection measures teamwork habits, not intelligence, personal worth, employability, or guaranteed team performance. Role, culture, access, power, health, workload, and team conditions can shape behaviour. Answers are scored only on your device and are not stored or sent.', 'This educational self-reflection measures social habits, not intelligence, personal worth, or guaranteed social success. Context, culture, energy levels, familiarity, and personality style can all shape charisma in the moment. Answers are scored only on your device and are not stored or sent.'],
  ['Your Team Player Profile', 'Your Charisma Profile'],
  ['average team-player score out of 10', 'average charisma score out of 10'],
  ['Breakdown by Teamwork Dimension', 'Breakdown by Charisma Dimension'],
  ['See My Team Player Profile', 'See My Charisma Profile'],
  ['Overall team-player score:', 'Overall charisma score:']
]);

let urdu = fs.readFileSync(path.join(root, 'team_player_test', 'urdu.html'), 'utf8');
urdu = replaceAll(urdu, [
  ['/team_player_test/', '/charisma_test/'],
  ["topicId: 'team_player_test'", "topicId: 'charisma_test'"],
  ['--accent:      #2f855a;', '--accent:      #db2777;'],
  ['--accent-dark: #276749;', '--accent-dark: #be185d;'],
  ['background: #e9f7ef', 'background: #fce7f3'],
  ['rgba(47,133,90,.12)', 'rgba(219,39,119,.12)'],
  ['rgba(47,133,90,.2)', 'rgba(219,39,119,.2)'],
  ['ٹیم پلیئر ٹیسٹ', 'کشش شخصیت کا ٹیسٹ'],
  ['خود شناسی · ٹیم ورک', 'خود شناسی · کشش شخصیت'],
  ['دریافت کریں کہ آپ 20 متعلقہ پہلوؤں میں کیسے تعاون، ابلاغ، ذمہ داری کی تکمیل، اعتماد، اختلافات اور ٹیم کی مشترکہ تعلیم کو سنبھالتے ہیں۔', 'دریافت کریں کہ آپ موجودگی، گرم جوشی، اعتماد، مزاح، کہانی سنانے، اثر و رسوخ اور مزید 14 قریبی پہلوؤں کے ذریعے کیسے لوگوں سے جڑتے اور تاثر چھوڑتے ہیں۔'],
  ['سوالات ٹیم پلیئر کی تمام 20 مہارتوں میں یکساں تقسیم ہیں۔', 'سوالات کشش شخصیت کے تمام 20 پہلوؤں میں یکساں تقسیم ہیں۔'],
  ['یہ تعلیمی ذاتی جائزہ ٹیم ورک کی عادات دیکھتا ہے، ذہانت، ذاتی قدر، ملازمت کی اہلیت یا یقینی ٹیم کارکردگی نہیں۔ کردار، ثقافت، رسائی، طاقت، صحت، کام کا بوجھ اور ٹیم کے حالات رویے پر اثر ڈال سکتے ہیں۔ جوابات صرف آپ کے آلے پر شمار ہوتے ہیں اور محفوظ یا ارسال نہیں کیے جاتے۔', 'یہ تعلیمی ذاتی جائزہ سماجی عادات دیکھتا ہے، ذہانت، ذاتی قدر یا یقینی سماجی کامیابی نہیں۔ موقع، ثقافت، توانائی کی سطح، شناسائی اور شخصیت کا انداز لمحے میں کشش کو متاثر کر سکتے ہیں۔ جوابات صرف آپ کے آلے پر شمار ہوتے ہیں اور محفوظ یا ارسال نہیں کیے جاتے۔'],
  ['آپ کا ٹیم پلیئر پروفائل', 'آپ کا کشش شخصیت پروفائل'],
  ['10 میں سے ٹیم پلیئر کا اوسط اسکور', '10 میں سے کشش شخصیت کا اوسط اسکور'],
  ['ٹیم ورک کے ہر پہلو کی تفصیل', 'کشش شخصیت کے ہر پہلو کی تفصیل'],
  ['میرا ٹیم پلیئر پروفائل دکھائیں ←', 'میرا کشش شخصیت پروفائل دکھائیں ←'],
  ['مجموعی ٹیم پلیئر اسکور:', 'مجموعی کشش شخصیت اسکور:']
]);

fs.writeFileSync(path.join(__dirname, 'index.html'), english);
fs.writeFileSync(path.join(__dirname, 'urdu.html'), urdu);
console.log('Built English and Urdu charisma test pages.');
