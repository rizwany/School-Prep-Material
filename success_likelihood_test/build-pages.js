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
  ['/team_player_test/', '/success_likelihood_test/'],
  ["topicId: 'team_player_test'", "topicId: 'success_likelihood_test'"],
  ['Team Player Test', 'Success Likelihood Test'],
  ['Self-Assessment · Teamwork', 'Self-Assessment · Success Readiness'],
  ['Explore how you collaborate, communicate, follow through, build trust, navigate differences, and help a team learn across 20 closely related dimensions.', 'Explore the habits and enabling conditions that currently support purposeful progress across 20 dimensions—without treating the result as a prediction or guarantee.'],
  ['Questions are drawn evenly across all 20 team-player dimensions.', 'Questions are drawn evenly across all 20 success-readiness dimensions.'],
  ['This educational self-reflection measures teamwork habits, not intelligence, personal worth, employability, or guaranteed team performance. Role, culture, access, power, health, workload, and team conditions can shape behaviour. Answers are scored only on your device and are not stored or sent.', 'This educational self-reflection measures current success-readiness habits and enabling conditions. It does not predict or guarantee success, measure personal worth, or account fully for opportunity, inequality, health, resources, luck, and events outside your control. Answers are scored only on your device and are not stored or sent.'],
  ['Your Team Player Profile', 'Your Success Readiness Profile'],
  ['average team-player score out of 10', 'average success-readiness score out of 10'],
  ['Breakdown by Teamwork Dimension', 'Breakdown by Success-Readiness Dimension'],
  ['See My Team Player Profile', 'See My Success Readiness Profile'],
  ['Overall team-player score:', 'Overall success-readiness score:']
]);

let urdu = fs.readFileSync(path.join(root, 'team_player_test', 'urdu.html'), 'utf8');
urdu = replaceAll(urdu, [
  ['/team_player_test/', '/success_likelihood_test/'],
  ["topicId: 'team_player_test'", "topicId: 'success_likelihood_test'"],
  ['ٹیم پلیئر ٹیسٹ', 'کامیابی کے امکان کا ٹیسٹ'],
  ['خود شناسی · ٹیم ورک', 'خود شناسی · کامیابی کی تیاری'],
  ['دریافت کریں کہ آپ 20 متعلقہ پہلوؤں میں کیسے تعاون، ابلاغ، ذمہ داری کی تکمیل، اعتماد، اختلافات اور ٹیم کی مشترکہ تعلیم کو سنبھالتے ہیں۔', 'ان عادات اور سازگار حالات کا 20 پہلوؤں میں جائزہ لیں جو اس وقت بامقصد پیش رفت کی حمایت کرتے ہیں—نتیجے کو پیش گوئی یا ضمانت سمجھے بغیر۔'],
  ['سوالات ٹیم پلیئر کی تمام 20 مہارتوں میں یکساں تقسیم ہیں۔', 'سوالات کامیابی کی تیاری کے تمام 20 پہلوؤں میں یکساں تقسیم ہیں۔'],
  ['یہ تعلیمی ذاتی جائزہ ٹیم ورک کی عادات دیکھتا ہے، ذہانت، ذاتی قدر، ملازمت کی اہلیت یا یقینی ٹیم کارکردگی نہیں۔ کردار، ثقافت، رسائی، طاقت، صحت، کام کا بوجھ اور ٹیم کے حالات رویے پر اثر ڈال سکتے ہیں۔ جوابات صرف آپ کے آلے پر شمار ہوتے ہیں اور محفوظ یا ارسال نہیں کیے جاتے۔', 'یہ تعلیمی ذاتی جائزہ کامیابی کی موجودہ تیاری کی عادات اور سازگار حالات دیکھتا ہے۔ یہ کامیابی کی پیش گوئی یا ضمانت، ذاتی قدر کی پیمائش نہیں کرتا اور مواقع، عدم مساوات، صحت، وسائل، قسمت اور اختیار سے باہر واقعات کو مکمل طور پر شامل نہیں کر سکتا۔ جوابات صرف آپ کے آلے پر شمار ہوتے ہیں اور محفوظ یا ارسال نہیں کیے جاتے۔'],
  ['آپ کا ٹیم پلیئر پروفائل', 'آپ کی کامیابی کی تیاری کا پروفائل'],
  ['10 میں سے ٹیم پلیئر کا اوسط اسکور', '10 میں سے کامیابی کی تیاری کا اوسط اسکور'],
  ['ٹیم ورک کے ہر پہلو کی تفصیل', 'کامیابی کی تیاری کے ہر پہلو کی تفصیل'],
  ['میرا ٹیم پلیئر پروفائل دکھائیں ←', 'میری کامیابی کی تیاری دکھائیں ←'],
  ['مجموعی ٹیم پلیئر اسکور:', 'کامیابی کی مجموعی تیاری کا اسکور:']
]);

fs.writeFileSync(path.join(__dirname, 'index.html'), english);
fs.writeFileSync(path.join(__dirname, 'urdu.html'), urdu);
console.log('Built English and Urdu success-likelihood test pages.');
