const fs=require('fs'),path=require('path');
const root=path.join(__dirname,'..');
function change(s,from,to,label){const next=s.replace(from,to);if(next===s)throw Error(`Template replacement failed: ${label}`);return next}
function common(s,lang){
  s=s.replaceAll('/ethics_test/','/goal_setting_test/').replaceAll("'ethics_test'","'goal_setting_test'");
  s=s.replaceAll('#4361EE','#2f855a').replaceAll('#3451d1','#276749').replaceAll('67,97,238','47,133,90').replaceAll('#eef1fd','#e9f7ef');
  s=change(s,'const perCategory = length / 10;','const perCategory = length / BANK.meta.categories.length;','dynamic sampling');
  s=s.replace('let currentLength = 10;','let currentLength = 20;').replace('<span id="qTotal">10</span>','<span id="qTotal">20</span>');
  s=change(s,/if \(window\.LP\) window\.LP\.recordTestResult\([^\n]+/,
    `if (window.LP) window.LP.recordTestResult({ topicId: 'goal_setting_test', testName: '${lang==='en'?'Goal-Setting Test':'ہدف سازی کا امتحان'}', score: overall, maxScore: 10, percentage: (overall - 1) / 9 * 100, label: level.label });`,'result recording');
  return s;
}
function english(){let s=fs.readFileSync(path.join(root,'ethics_test','index.html'),'utf8');s=common(s,'en');
  s=s.replaceAll('Ethics &amp; Moral Understanding Test','Goal-Setting Test').replaceAll('Ethics & Moral Understanding Test','Goal-Setting Test');
  s=change(s,/  <div class="page-hero">[\s\S]*?  <\/div>\r?\n\r?\n  <!--[^\n]*LENGTH SCREEN[^\n]*-->/,`  <div class="page-hero">
    <div class="hero-badge">Self-Assessment · Goal-Setting</div>
    <h1>Goal-Setting Test</h1>
    <p>Explore how you turn meaningful intentions into clear, realistic, actionable goals across 20 closely related planning and follow-through dimensions.</p>
  </div>

  <!-- LENGTH SCREEN -->`,'English hero');
  s=change(s,/  <div class="level-screen" id="levelScreen">[\s\S]*?  <!--[^\n]*QUIZ[^\n]*-->/,`  <div class="level-screen" id="levelScreen">
    <div class="level-hero"><h2>Choose Your Test Length</h2><p>Questions are drawn evenly across all 20 goal-setting dimensions.</p></div>
    <div class="level-cards">
      <div class="level-card" data-len="20"><div class="lv-icon">🌤️</div><div class="lv-body"><div class="lv-title">Quick Check</div><div class="lv-desc">20 questions &nbsp;·&nbsp; ~6 minutes &nbsp;·&nbsp; 1 per dimension</div></div><div class="lv-badge">Fast</div><div class="lv-arrow">→</div></div>
      <div class="level-card" data-len="60"><div class="lv-icon">🧭</div><div class="lv-body"><div class="lv-title">Standard Test</div><div class="lv-desc">60 questions &nbsp;·&nbsp; ~15 minutes &nbsp;·&nbsp; 3 per dimension</div></div><div class="lv-badge">Balanced</div><div class="lv-arrow">→</div></div>
      <div class="level-card" data-len="100"><div class="lv-icon">🔬</div><div class="lv-body"><div class="lv-title">Deep Dive</div><div class="lv-desc">100 questions &nbsp;·&nbsp; ~25 minutes &nbsp;·&nbsp; 5 per dimension</div></div><div class="lv-badge">Thorough</div><div class="lv-arrow">→</div></div>
      <div class="level-card" data-len="500"><div class="lv-icon">🏔️</div><div class="lv-body"><div class="lv-title">Complete Question Bank</div><div class="lv-desc">500 questions &nbsp;·&nbsp; all 25 items per dimension &nbsp;·&nbsp; comprehensive reflection</div></div><div class="lv-badge">Complete</div><div class="lv-arrow">→</div></div>
    </div>
    <p class="disclaimer">This educational self-reflection measures goal-setting habits, not intelligence, worth, or guaranteed achievement. Context, resources, health, and opportunity also affect outcomes. Answers are scored only on your device and are not stored or sent.</p>
  </div>

  <!-- QUIZ -->`,'English levels');
  s=s.replace('<div class="res-title">Your Ethical Level</div>','<div class="res-title">Your Goal-Setting Profile</div>').replace('<div class="res-label">average score out of 10</div>','<div class="res-label">average goal-setting score out of 10</div>').replace('<div class="breakdown-title">Breakdown by Dimension</div>','<div class="breakdown-title">Breakdown by Goal-Setting Dimension</div>');
  s=s.replace("btn.textContent = qIdx < questions.length - 1 ? 'Next →' : 'See My Results →';","btn.textContent = qIdx < questions.length - 1 ? 'Next →' : 'See My Goal Profile →';");
  s=s.replace('`Goal-Setting Test — ${r.length} questions`','`Goal-Setting Test — ${r.length} questions`');
  s=s.replace('`Overall: ${r.overall.toFixed(1)}/10 — ${r.level.label}`','`Overall goal-setting score: ${r.overall.toFixed(1)}/10 — ${r.level.label}`');
  return s}
function urdu(){let s=fs.readFileSync(path.join(root,'ethics_test','urdu.html'),'utf8');s=common(s,'ur');
  s=change(s,/<meta name="description"[^>]*>/,'<meta name="description" content="ہدف سازی کا امتحان" />','Urdu description');
  s=change(s,/<meta property="og:title"[^>]*>/,'<meta property="og:title" content="ہدف سازی کا امتحان | LearnPad" />','Urdu og title');
  s=change(s,/<meta property="og:description"[^>]*>/,'<meta property="og:description" content="ہدف سازی کا امتحان" />','Urdu og description');
  s=change(s,/<title>[^<]*<\/title>/,'<title>ہدف سازی کا امتحان | LearnPad</title>','Urdu title');
  s=change(s,/  <div class="page-hero">[\s\S]*?  <\/div>\r?\n\r?\n  <!--[^\n]*LENGTH SCREEN[^\n]*-->/,`  <div class="page-hero">
    <div class="hero-badge">خود شناسی · ہدف سازی</div>
    <h1>ہدف سازی کا امتحان</h1>
    <p>دریافت کریں کہ آپ بامعنی ارادوں کو 20 متعلقہ منصوبہ بندی اور عمل کے پہلوؤں میں واضح، حقیقت پسندانہ اور قابلِ عمل اہداف میں کیسے بدلتے ہیں۔</p>
  </div>

  <!-- LENGTH SCREEN -->`,'Urdu hero');
  s=change(s,/  <div class="level-screen" id="levelScreen">[\s\S]*?  <!--[^\n]*QUIZ[^\n]*-->/,`  <div class="level-screen" id="levelScreen">
    <div class="level-hero"><h2>اپنے امتحان کی طوالت منتخب کریں</h2><p>سوالات ہدف سازی کے تمام 20 پہلوؤں میں یکساں تقسیم ہیں۔</p></div>
    <div class="level-cards">
      <div class="level-card" data-len="20"><div class="lv-icon">🌤️</div><div class="lv-body"><div class="lv-title">فوری جائزہ</div><div class="lv-desc">20 سوالات &nbsp;·&nbsp; تقریباً 6 منٹ &nbsp;·&nbsp; ہر پہلو سے 1</div></div><div class="lv-badge">تیز</div><div class="lv-arrow">←</div></div>
      <div class="level-card" data-len="60"><div class="lv-icon">🧭</div><div class="lv-body"><div class="lv-title">معیاری امتحان</div><div class="lv-desc">60 سوالات &nbsp;·&nbsp; تقریباً 15 منٹ &nbsp;·&nbsp; ہر پہلو سے 3</div></div><div class="lv-badge">متوازن</div><div class="lv-arrow">←</div></div>
      <div class="level-card" data-len="100"><div class="lv-icon">🔬</div><div class="lv-body"><div class="lv-title">گہرا جائزہ</div><div class="lv-desc">100 سوالات &nbsp;·&nbsp; تقریباً 25 منٹ &nbsp;·&nbsp; ہر پہلو سے 5</div></div><div class="lv-badge">تفصیلی</div><div class="lv-arrow">←</div></div>
      <div class="level-card" data-len="500"><div class="lv-icon">🏔️</div><div class="lv-body"><div class="lv-title">مکمل سوال بینک</div><div class="lv-desc">500 سوالات &nbsp;·&nbsp; ہر پہلو کے تمام 25 سوالات &nbsp;·&nbsp; جامع جائزہ</div></div><div class="lv-badge">مکمل</div><div class="lv-arrow">←</div></div>
    </div>
    <p class="disclaimer">یہ تعلیمی ذاتی جائزہ ہدف سازی کی عادات دیکھتا ہے، ذہانت، قدر یا کامیابی کی ضمانت نہیں۔ حالات، وسائل، صحت اور مواقع بھی نتائج پر اثر ڈالتے ہیں۔ جوابات صرف آپ کے آلے پر شمار ہوتے ہیں اور محفوظ یا ارسال نہیں کیے جاتے۔</p>
  </div>

  <!-- QUIZ -->`,'Urdu levels');
  s=change(s,/<div class="res-title">[^<]*<\/div>/,'<div class="res-title">آپ کی ہدف سازی کی سطح</div>','Urdu result title');
  s=change(s,/<div class="res-label">[^<]*<\/div>/,'<div class="res-label">10 میں سے ہدف سازی کا اوسط اسکور</div>','Urdu result label');
  s=change(s,/<div class="breakdown-title">[^<]*<\/div>/,'<div class="breakdown-title">ہدف سازی کے ہر پہلو کی تفصیل</div>','Urdu breakdown');
  s=change(s,/btn\.textContent = qIdx < questions\.length - 1 \? '[^']*' : '[^']*';/,"btn.textContent = qIdx < questions.length - 1 ? 'اگلا ←' : 'میرا ہدفی پروفائل دکھائیں ←';",'Urdu next');
  s=change(s,/`[^`]*— \$\{r\.length\}[^`]*`/,'`ہدف سازی کا امتحان — ${r.length} سوالات`','Urdu share title');
  s=change(s,/`[^`]*\$\{r\.overall\.toFixed\(1\)\}\/10[^`]*`/,'`مجموعی ہدف سازی اسکور: ${r.overall.toFixed(1)}/10 — ${r.level.label}`','Urdu share score');
  return s}
fs.mkdirSync(__dirname,{recursive:true});fs.writeFileSync(path.join(__dirname,'index.html'),english());fs.writeFileSync(path.join(__dirname,'urdu.html'),urdu());console.log('Generated Goal-Setting pages from the ethics_test structure.');
