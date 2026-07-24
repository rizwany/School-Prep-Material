const fs=require('fs'),path=require('path');
const root=path.join(__dirname,'..');
function change(s,from,to,label){const next=s.replace(from,to);if(next===s)throw Error(`Template replacement failed: ${label}`);return next}
function common(s,lang){
  s=s.replaceAll('/ethics_test/','/grit_test/').replaceAll("'ethics_test'","'grit_test'");
  s=s.replaceAll('#4361EE','#b91c1c').replaceAll('#3451d1','#991b1b').replaceAll('67,97,238','185,28,28').replaceAll('#eef1fd','#fef2f2');
  s=change(s,'const perCategory = length / 10;','const perCategory = length / BANK.meta.categories.length;','dynamic sampling');
  s=s.replace('let currentLength = 10;','let currentLength = 20;').replace('<span id="qTotal">10</span>','<span id="qTotal">20</span>');
  s=change(s,/if \(window\.LP\) window\.LP\.recordTestResult\([^\n]+/,
    `if (window.LP) window.LP.recordTestResult({ topicId: 'grit_test', testName: '${lang==='en'?'Grit & Perseverance Test':'استقامت اور مستقل مزاجی کا امتحان'}', score: overall, maxScore: 10, percentage: (overall - 1) / 9 * 100, label: level.label });`,'result recording');
  return s;
}
function english(){let s=fs.readFileSync(path.join(root,'ethics_test','index.html'),'utf8');s=common(s,'en');
  s=s.replaceAll('Ethics &amp; Moral Understanding Test','Grit &amp; Perseverance Test').replaceAll('Ethics & Moral Understanding Test','Grit & Perseverance Test');
  s=change(s,/  <div class="page-hero">[\s\S]*?  <\/div>\r?\n\r?\n  <!--[^\n]*LENGTH SCREEN[^\n]*-->/,`  <div class="page-hero">
    <div class="hero-badge">Self-Assessment · Grit</div>
    <h1>Grit &amp; Perseverance Test</h1>
    <p>Explore how consistently you combine passion and perseverance for long-term goals — through boredom, setbacks, criticism, and plateaus — across 20 closely related dimensions of grit.</p>
  </div>

  <!-- LENGTH SCREEN -->`,'English hero');
  s=change(s,/  <div class="level-screen" id="levelScreen">[\s\S]*?  <!--[^\n]*QUIZ[^\n]*-->/,`  <div class="level-screen" id="levelScreen">
    <div class="level-hero"><h2>Choose Your Test Length</h2><p>Questions are drawn evenly across all 20 grit dimensions.</p></div>
    <div class="level-cards">
      <div class="level-card" data-len="20"><div class="lv-icon">🌤️</div><div class="lv-body"><div class="lv-title">Quick Check</div><div class="lv-desc">20 questions &nbsp;·&nbsp; ~6 minutes &nbsp;·&nbsp; 1 per dimension</div></div><div class="lv-badge">Fast</div><div class="lv-arrow">→</div></div>
      <div class="level-card" data-len="60"><div class="lv-icon">🧭</div><div class="lv-body"><div class="lv-title">Standard Test</div><div class="lv-desc">60 questions &nbsp;·&nbsp; ~15 minutes &nbsp;·&nbsp; 3 per dimension</div></div><div class="lv-badge">Balanced</div><div class="lv-arrow">→</div></div>
      <div class="level-card" data-len="100"><div class="lv-icon">🔬</div><div class="lv-body"><div class="lv-title">Deep Dive</div><div class="lv-desc">100 questions &nbsp;·&nbsp; ~25 minutes &nbsp;·&nbsp; 5 per dimension</div></div><div class="lv-badge">Thorough</div><div class="lv-arrow">→</div></div>
      <div class="level-card" data-len="500"><div class="lv-icon">🏔️</div><div class="lv-body"><div class="lv-title">Complete Question Bank</div><div class="lv-desc">500 questions &nbsp;·&nbsp; all 25 items per dimension &nbsp;·&nbsp; comprehensive reflection</div></div><div class="lv-badge">Complete</div><div class="lv-arrow">→</div></div>
    </div>
    <p class="disclaimer">This educational self-reflection measures grit-related habits, not intelligence, worth, or guaranteed achievement. Context, resources, health, and opportunity also affect outcomes. Answers are scored only on your device and are not stored or sent.</p>
  </div>

  <!-- QUIZ -->`,'English levels');
  s=s.replace('<div class="res-title">Your Ethical Level</div>','<div class="res-title">Your Grit Profile</div>').replace('<div class="res-label">average score out of 10</div>','<div class="res-label">average grit score out of 10</div>').replace('<div class="breakdown-title">Breakdown by Dimension</div>','<div class="breakdown-title">Breakdown by Grit Dimension</div>');
  s=s.replace("btn.textContent = qIdx < questions.length - 1 ? 'Next →' : 'See My Results →';","btn.textContent = qIdx < questions.length - 1 ? 'Next →' : 'See My Grit Profile →';");
  s=s.replace('`Ethics & Moral Understanding Test — ${r.length} questions`','`Grit & Perseverance Test — ${r.length} questions`');
  s=s.replace('`Overall: ${r.overall.toFixed(1)}/10 — ${r.level.label}`','`Overall grit score: ${r.overall.toFixed(1)}/10 — ${r.level.label}`');
  s=change(s,/<h3 style="font-size:1\.05rem;font-weight:800;margin-bottom:10px;color:#1a1f36;">Learn More About Ethics &amp; Moral Understanding<\/h3>[\s\S]*?<p style="font-size:0\.88rem;font-style:italic;color:#5a6076;">To learn more about this topic, try Google or any Generative AI chatbot\.<\/p>/g,
`<h3 style="font-size:1.05rem;font-weight:800;margin-bottom:10px;color:#1a1f36;">Learn More About Grit &amp; Perseverance</h3>
        <p style="font-size:0.92rem;line-height:1.65;color:#3a4056;margin-bottom:10px;">Grit is the combination of passion and perseverance for long-term goals — staying committed to the same important aims for years, and working hard to make them a reality even through boredom, setbacks, and plateaus. Psychologist Angela Duckworth's research found grit to be a strong predictor of achievement across many domains, often independent of raw talent.</p>
        <p style="font-size:0.92rem;line-height:1.65;color:#3a4056;margin-bottom:14px;">Gritty people are not immune to discouragement — they simply keep returning to the work anyway. Grit can be strengthened deliberately, much like a skill, through consistent small habits rather than relying on bursts of motivation.</p>
        <p style="font-size:0.92rem;font-weight:800;color:#1a1f36;margin-bottom:8px;">To build this skill step-by-step:</p>
        <ul style="font-size:0.9rem;line-height:1.6;color:#3a4056;padding-left:20px;margin-bottom:14px;">
          <li style="margin-bottom:8px;"><strong>Anchor Goals to Identity:</strong> Connect a long-term goal to the kind of person you want to become, not just the reward at the end.</li>
          <li style="margin-bottom:8px;"><strong>Build Daily Habits, Not Motivation Spikes:</strong> Schedule small, repeatable actions you can do even on low-motivation days.</li>
          <li style="margin-bottom:8px;"><strong>Practice Recovering from Setbacks Quickly:</strong> After a failure, set a specific time to resume — the speed of recovery matters more than avoiding failure.</li>
          <li><strong>Track Plateaus, Not Just Wins:</strong> Expect stretches with little visible progress, and treat them as a normal part of mastering anything difficult.</li>
        </ul>
        <p style="font-size:0.88rem;font-style:italic;color:#5a6076;">To learn more about this topic, try Google or any Generative AI chatbot.</p>`,'English learn-more section');
  return s}
function urdu(){let s=fs.readFileSync(path.join(root,'ethics_test','urdu.html'),'utf8');s=common(s,'ur');
  s=change(s,/<meta name="description"[^>]*>/,'<meta name="description" content="استقامت اور مستقل مزاجی کا امتحان" />','Urdu description');
  s=change(s,/<meta property="og:title"[^>]*>/,'<meta property="og:title" content="استقامت اور مستقل مزاجی کا امتحان | LearnPad" />','Urdu og title');
  s=change(s,/<meta property="og:description"[^>]*>/,'<meta property="og:description" content="استقامت اور مستقل مزاجی کا امتحان" />','Urdu og description');
  s=change(s,/<title>[^<]*<\/title>/,'<title>استقامت اور مستقل مزاجی کا امتحان | LearnPad</title>','Urdu title');
  s=change(s,/  <div class="page-hero">[\s\S]*?  <\/div>\r?\n\r?\n  <!--[^\n]*LENGTH SCREEN[^\n]*-->/,`  <div class="page-hero">
    <div class="hero-badge">خود شناسی · استقامت</div>
    <h1>استقامت اور مستقل مزاجی کا امتحان</h1>
    <p>دریافت کریں کہ آپ طویل مدتی اہداف کے لیے جذبے اور استقامت کو کتنے تسلسل سے یکجا کرتے ہیں — بوریت، ناکامیوں، تنقید اور جمود کے باوجود — استقامت کے 20 متعلقہ پہلوؤں میں۔</p>
  </div>

  <!-- LENGTH SCREEN -->`,'Urdu hero');
  s=change(s,/  <div class="level-screen" id="levelScreen">[\s\S]*?  <!--[^\n]*QUIZ[^\n]*-->/,`  <div class="level-screen" id="levelScreen">
    <div class="level-hero"><h2>اپنے امتحان کی طوالت منتخب کریں</h2><p>سوالات استقامت کے تمام 20 پہلوؤں میں یکساں تقسیم ہیں۔</p></div>
    <div class="level-cards">
      <div class="level-card" data-len="20"><div class="lv-icon">🌤️</div><div class="lv-body"><div class="lv-title">فوری جائزہ</div><div class="lv-desc">20 سوالات &nbsp;·&nbsp; تقریباً 6 منٹ &nbsp;·&nbsp; ہر پہلو سے 1</div></div><div class="lv-badge">تیز</div><div class="lv-arrow">←</div></div>
      <div class="level-card" data-len="60"><div class="lv-icon">🧭</div><div class="lv-body"><div class="lv-title">معیاری امتحان</div><div class="lv-desc">60 سوالات &nbsp;·&nbsp; تقریباً 15 منٹ &nbsp;·&nbsp; ہر پہلو سے 3</div></div><div class="lv-badge">متوازن</div><div class="lv-arrow">←</div></div>
      <div class="level-card" data-len="100"><div class="lv-icon">🔬</div><div class="lv-body"><div class="lv-title">گہرا جائزہ</div><div class="lv-desc">100 سوالات &nbsp;·&nbsp; تقریباً 25 منٹ &nbsp;·&nbsp; ہر پہلو سے 5</div></div><div class="lv-badge">تفصیلی</div><div class="lv-arrow">←</div></div>
      <div class="level-card" data-len="500"><div class="lv-icon">🏔️</div><div class="lv-body"><div class="lv-title">مکمل سوال بینک</div><div class="lv-desc">500 سوالات &nbsp;·&nbsp; ہر پہلو کے تمام 25 سوالات &nbsp;·&nbsp; جامع جائزہ</div></div><div class="lv-badge">مکمل</div><div class="lv-arrow">←</div></div>
    </div>
    <p class="disclaimer">یہ تعلیمی ذاتی جائزہ استقامت سے متعلق عادات دیکھتا ہے، ذہانت، قدر یا کامیابی کی ضمانت نہیں۔ حالات، وسائل، صحت اور مواقع بھی نتائج پر اثر ڈالتے ہیں۔ جوابات صرف آپ کے آلے پر شمار ہوتے ہیں اور محفوظ یا ارسال نہیں کیے جاتے۔</p>
  </div>

  <!-- QUIZ -->`,'Urdu levels');
  s=change(s,/<div class="res-title">[^<]*<\/div>/,'<div class="res-title">آپ کی استقامت کی سطح</div>','Urdu result title');
  s=change(s,/<div class="res-label">[^<]*<\/div>/,'<div class="res-label">10 میں سے استقامت کا اوسط اسکور</div>','Urdu result label');
  s=change(s,/<div class="breakdown-title">[^<]*<\/div>/,'<div class="breakdown-title">استقامت کے ہر پہلو کی تفصیل</div>','Urdu breakdown');
  s=change(s,/btn\.textContent = qIdx < questions\.length - 1 \? '[^']*' : '[^']*';/,"btn.textContent = qIdx < questions.length - 1 ? 'اگلا ←' : 'میرا استقامت پروفائل دکھائیں ←';",'Urdu next');
  s=change(s,/`[^`]*— \$\{r\.length\}[^`]*`/,'`استقامت اور مستقل مزاجی کا امتحان — ${r.length} سوالات`','Urdu share title');
  s=change(s,/`[^`]*\$\{r\.overall\.toFixed\(1\)\}\/10[^`]*`/,'`مجموعی استقامت اسکور: ${r.overall.toFixed(1)}/10 — ${r.level.label}`','Urdu share score');
  s=change(s,/<h3 style="font-size:1\.05rem;font-weight:800;margin-bottom:10px;color:#1a1f36;">[^<]*<\/h3>[\s\S]*?<p style="font-size:0\.88rem;font-style:italic;color:#5a6076;">[^<]*<\/p>/g,
`<h3 style="font-size:1.05rem;font-weight:800;margin-bottom:10px;color:#1a1f36;">استقامت اور مستقل مزاجی کے بارے میں مزید جانیں</h3>
        <p style="font-size:0.92rem;line-height:1.9;color:#3a4056;margin-bottom:10px;">استقامت (Grit) طویل مدتی اہداف کے لیے جذبے اور مستقل مزاجی کا امتزاج ہے — برسوں تک ایک ہی اہم مقصد سے وابستہ رہنا، اور بوریت، ناکامیوں اور جمود کے باوجود اسے حقیقت بنانے کے لیے محنت جاری رکھنا۔ ماہرِ نفسیات انجیلا ڈک ورتھ کی تحقیق کے مطابق استقامت کئی شعبوں میں کامیابی کی مضبوط پیش گو ہے، اکثر خام صلاحیت سے بھی زیادہ اہم۔</p>
        <p style="font-size:0.92rem;line-height:1.9;color:#3a4056;margin-bottom:14px;">استقامت رکھنے والے افراد مایوسی سے محفوظ نہیں ہوتے — وہ صرف مایوسی کے باوجود دوبارہ کام کی طرف لوٹ آتے ہیں۔ استقامت کو کسی مہارت کی طرح جان بوجھ کر مضبوط بنایا جا سکتا ہے، جوش کی لہروں پر انحصار کرنے کے بجائے مستقل چھوٹی عادات کے ذریعے۔</p>
        <p style="font-size:0.92rem;font-weight:800;color:#1a1f36;margin-bottom:8px;">اس مہارت کو مرحلہ وار بہتر بنائیں:</p>
        <ul style="font-size:0.9rem;line-height:1.8;color:#3a4056;padding-right:20px;padding-left:0;margin-bottom:14px;">
          <li style="margin-bottom:8px;"><strong>اہداف کو شناخت سے جوڑیں:</strong> طویل مدتی ہدف کو صرف آخری فائدے کے بجائے اپنی مطلوبہ شخصیت سے جوڑیں۔</li>
          <li style="margin-bottom:8px;"><strong>روزانہ عادات بنائیں، جوش کی لہروں پر انحصار نہ کریں:</strong> ایسے چھوٹے، قابلِ تکرار اقدامات طے کریں جو کم حوصلے کے دنوں میں بھی ممکن ہوں۔</li>
          <li style="margin-bottom:8px;"><strong>ناکامی سے جلد بحال ہونے کی مشق کریں:</strong> ناکامی کے بعد دوبارہ شروع کرنے کا مخصوص وقت طے کریں — بحالی کی رفتار ناکامی سے بچنے سے زیادہ اہم ہے۔</li>
          <li><strong>جمود کو بھی نوٹ کریں، صرف کامیابیوں کو نہیں:</strong> ایسے مراحل کی توقع رکھیں جن میں نظر آنے والی پیش رفت کم ہو، اور انہیں کسی بھی مشکل چیز میں مہارت حاصل کرنے کا معمول حصہ سمجھیں۔</li>
        </ul>
        <p style="font-size:0.88rem;font-style:italic;color:#5a6076;">اس موضوع کے بارے میں مزید جاننے کے لیے گوگل یا کسی جنریٹو AI چیٹ بوٹ کی مدد لیں۔</p>`,'Urdu learn-more section');
  return s}
fs.mkdirSync(__dirname,{recursive:true});fs.writeFileSync(path.join(__dirname,'index.html'),english());fs.writeFileSync(path.join(__dirname,'urdu.html'),urdu());console.log('Generated Grit & Perseverance pages from the ethics_test structure.');
