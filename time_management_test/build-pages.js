const fs=require('fs'),path=require('path'),root=path.join(__dirname,'..');
const sourceDir=path.join(root,'goal_setting_test');
function replaceRequired(text,from,to,label){const next=text.replace(from,to);if(next===text)throw Error(`Page-template replacement failed: ${label}`);return next}
function english(){let s=fs.readFileSync(path.join(sourceDir,'index.html'),'utf8');
  s=s.replaceAll('/goal_setting_test/','/time_management_test/').replaceAll("'goal_setting_test'","'time_management_test'").replaceAll('Goal-Setting Test','Time Management Test');
  s=replaceRequired(s,/  <div class="page-hero">[\s\S]*?  <\/div>\r?\n\r?\n  <!-- LENGTH SCREEN -->/,`  <div class="page-hero">
    <div class="hero-badge">Self-Assessment · Time Management</div>
    <h1>Time Management Test</h1>
    <p>Explore how you plan, prioritise, schedule, focus, adapt, and balance your available time across 20 closely related dimensions.</p>
  </div>

  <!-- LENGTH SCREEN -->`,'English hero');
  s=replaceRequired(s,'<div class="level-hero"><h2>Choose Your Test Length</h2><p>Questions are drawn evenly across all 20 goal-setting dimensions.</p></div>','<div class="level-hero"><h2>Choose Your Test Length</h2><p>Questions are drawn evenly across all 20 time-management dimensions.</p></div>','English level intro');
  s=replaceRequired(s,/    <p class="disclaimer">[^<]*<\/p>/,'    <p class="disclaimer">This educational self-reflection measures time-management habits, not intelligence, worth, or guaranteed productivity. Workload, health, caregiving, resources, and circumstances also shape time use. Answers are scored only on your device and are not stored or sent.</p>','English disclaimer');
  s=s.replace('Your Goal-Setting Profile','Your Time-Management Profile').replace('average goal-setting score out of 10','average time-management score out of 10').replace('Breakdown by Goal-Setting Dimension','Breakdown by Time-Management Dimension').replace('See My Goal Profile','See My Time Profile').replace('Overall goal-setting score:','Overall time-management score:');
  return s}
function urdu(){let s=fs.readFileSync(path.join(sourceDir,'urdu.html'),'utf8');
  s=s.replaceAll('/goal_setting_test/','/time_management_test/').replaceAll("'goal_setting_test'","'time_management_test'").replaceAll('ہدف سازی کا امتحان','وقت کے انتظام کا امتحان');
  s=replaceRequired(s,/  <div class="page-hero">[\s\S]*?  <\/div>\r?\n\r?\n  <!-- LENGTH SCREEN -->/,`  <div class="page-hero">
    <div class="hero-badge">خود شناسی · وقت کا انتظام</div>
    <h1>وقت کے انتظام کا امتحان</h1>
    <p>دریافت کریں کہ آپ دستیاب وقت کو 20 متعلقہ پہلوؤں میں کیسے منصوبہ بند، ترجیح، شیڈول، مرکوز، تبدیل اور متوازن کرتے ہیں۔</p>
  </div>

  <!-- LENGTH SCREEN -->`,'Urdu hero');
  s=replaceRequired(s,/    <div class="level-hero"><h2>[^<]*<\/h2><p>[^<]*<\/p><\/div>/,'    <div class="level-hero"><h2>اپنے امتحان کی طوالت منتخب کریں</h2><p>سوالات وقت کے انتظام کے تمام 20 پہلوؤں میں یکساں تقسیم ہیں۔</p></div>','Urdu level intro');
  s=replaceRequired(s,/    <p class="disclaimer">[^<]*<\/p>/,'    <p class="disclaimer">یہ تعلیمی ذاتی جائزہ وقت کے انتظام کی عادات دیکھتا ہے، ذہانت، قدر یا یقینی کارکردگی نہیں۔ کام کا بوجھ، صحت، دیکھ بھال، وسائل اور حالات بھی وقت کے استعمال پر اثر ڈالتے ہیں۔ جوابات صرف آپ کے آلے پر شمار ہوتے ہیں اور محفوظ یا ارسال نہیں کیے جاتے۔</p>','Urdu disclaimer');
  s=s.replace('آپ کی ہدف سازی کی سطح','آپ کے وقت کے انتظام کی سطح').replace('10 میں سے ہدف سازی کا اوسط اسکور','10 میں سے وقت کے انتظام کا اوسط اسکور').replace('ہدف سازی کے ہر پہلو کی تفصیل','وقت کے انتظام کے ہر پہلو کی تفصیل').replace('میرا ہدفی پروفائل دکھائیں','میرا وقت کا پروفائل دکھائیں').replace('مجموعی ہدف سازی اسکور:','مجموعی وقت کے انتظام کا اسکور:');
  return s}
fs.mkdirSync(__dirname,{recursive:true});fs.writeFileSync(path.join(__dirname,'index.html'),english());fs.writeFileSync(path.join(__dirname,'urdu.html'),urdu());console.log('Generated Time Management pages using the ethics-style Goal-Setting template.');
