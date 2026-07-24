const fs=require('fs'),path=require('path'),root=path.join(__dirname,'..'),sourceDir=path.join(root,'time_management_test');
function required(text,from,to,label){const next=text.replace(from,to);if(next===text)throw Error(`Page-template replacement failed: ${label}`);return next}
function english(){let s=fs.readFileSync(path.join(sourceDir,'index.html'),'utf8');
  s=s.replaceAll('/time_management_test/','/procrastination_test/').replaceAll("'time_management_test'","'procrastination_test'").replaceAll('Time Management Test','Procrastination Test');
  s=required(s,/  <div class="page-hero">[\s\S]*?  <\/div>\r?\n\r?\n  <!-- LENGTH SCREEN -->/,`  <div class="page-hero">
    <div class="hero-badge">Self-Assessment · Procrastination</div>
    <h1>Procrastination Test</h1>
    <p>Explore why tasks are delayed across 20 dimensions involving initiation, decisions, emotions, beliefs, distractions, deadlines, persistence, environment, and daily-life impact.</p>
  </div>

  <!-- LENGTH SCREEN -->`,'English hero');
  s=required(s,/    <div class="level-hero"><h2>[^<]*<\/h2><p>[^<]*<\/p><\/div>/,'    <div class="level-hero"><h2>Choose Your Test Length</h2><p>Questions are drawn evenly across all 20 procrastination dimensions.</p></div>','English level intro');
  s=required(s,/    <p class="disclaimer">[^<]*<\/p>/,'    <p class="disclaimer">Higher scores indicate stronger current procrastination patterns. This educational reflection is not a clinical diagnosis and cannot determine a single cause. Persistent delay may also relate to stress, mood, attention, health, workload, or environment. Answers are scored only on your device and are not stored or sent.</p>','English disclaimer');
  s=s.replace('Your Time-Management Profile','Your Procrastination Pattern').replace('average time-management score out of 10','average procrastination score out of 10').replace('Breakdown by Time-Management Dimension','Breakdown by Procrastination Dimension').replace('See My Time Profile','See My Procrastination Pattern').replace('Overall time-management score:','Overall procrastination score:');
  return s}
function urdu(){let s=fs.readFileSync(path.join(sourceDir,'urdu.html'),'utf8');
  s=s.replaceAll('/time_management_test/','/procrastination_test/').replaceAll("'time_management_test'","'procrastination_test'").replaceAll('وقت کے انتظام کا امتحان','ٹال مٹول کا امتحان');
  s=required(s,/  <div class="page-hero">[\s\S]*?  <\/div>\r?\n\r?\n  <!-- LENGTH SCREEN -->/,`  <div class="page-hero">
    <div class="hero-badge">خود شناسی · ٹال مٹول</div>
    <h1>ٹال مٹول کا امتحان</h1>
    <p>آغاز، فیصلوں، جذبات، عقائد، توجہ بٹنے، آخری تاریخ، ثابت قدمی، ماحول اور روزمرہ اثر سے متعلق 20 پہلوؤں میں کام مؤخر ہونے کی وجوہات سمجھیں۔</p>
  </div>

  <!-- LENGTH SCREEN -->`,'Urdu hero');
  s=required(s,/    <div class="level-hero"><h2>[^<]*<\/h2><p>[^<]*<\/p><\/div>/,'    <div class="level-hero"><h2>اپنے امتحان کی طوالت منتخب کریں</h2><p>سوالات ٹال مٹول کے تمام 20 پہلوؤں میں یکساں تقسیم ہیں۔</p></div>','Urdu level intro');
  s=required(s,/    <p class="disclaimer">[^<]*<\/p>/,'    <p class="disclaimer">زیادہ اسکور موجودہ ٹال مٹول کا زیادہ شدید انداز ظاہر کرتا ہے۔ یہ تعلیمی جائزہ طبی تشخیص نہیں اور ایک وجہ طے نہیں کر سکتا۔ مسلسل تاخیر کا تعلق دباؤ، مزاج، توجہ، صحت، کام کے بوجھ یا ماحول سے بھی ہو سکتا ہے۔ جوابات صرف آپ کے آلے پر شمار ہوتے ہیں اور محفوظ یا ارسال نہیں کیے جاتے۔</p>','Urdu disclaimer');
  s=s.replace('آپ کے وقت کے انتظام کی سطح','آپ کی ٹال مٹول کی سطح').replace('10 میں سے وقت کے انتظام کا اوسط اسکور','10 میں سے ٹال مٹول کا اوسط اسکور').replace('وقت کے انتظام کے ہر پہلو کی تفصیل','ٹال مٹول کے ہر پہلو کی تفصیل').replace('میرا وقت کا پروفائل دکھائیں','میرا ٹال مٹول کا انداز دکھائیں').replace('مجموعی وقت کے انتظام کا اسکور:','مجموعی ٹال مٹول اسکور:');
  return s}
fs.mkdirSync(__dirname,{recursive:true});fs.writeFileSync(path.join(__dirname,'index.html'),english());fs.writeFileSync(path.join(__dirname,'urdu.html'),urdu());console.log('Generated Procrastination pages using the ethics-style Time Management template.');
