const fs=require('fs'),path=require('path'),vm=require('vm'),root=path.join(__dirname,'..');
const ok=(value,message)=>{if(!value)throw Error(message)};
const en=require('./assets/questions.json'),ur=require('./assets/questions-urdu.json');
ok(en.questions.length===500&&ur.questions.length===500,'Expected 500 questions in each language');
ok(en.meta.categories.length===20&&ur.meta.categories.length===20,'Expected 20 categories');
ok(new Set(en.questions.map(q=>q.id)).size===500&&new Set(ur.questions.map(q=>q.id)).size===500,'IDs must be unique');
ok(new Set(en.questions.map(q=>q.text)).size===500&&new Set(ur.questions.map(q=>q.text)).size===500,'Question text must be unique');
for(let i=0;i<500;i++){const a=en.questions[i],b=ur.questions[i];ok(a.id===b.id&&a.category===b.category&&a.reverse===b.reverse,`Bilingual alignment ${i}`)}
for(const c of en.meta.categories){const items=en.questions.filter(q=>q.category===c.id);ok(items.length===25,`${c.id} count`);ok(items.filter(q=>q.reverse).length===12,`${c.id} reverse balance`)}
ok(!ur.questions.some(q=>/[A-Za-z]{3}|[\u0900-\u097f]/.test(q.text)),'Urdu-bank script check');
const high=en.questions.map(q=>q.reverse?11-1:10).reduce((a,b)=>a+b)/500,low=en.questions.map(q=>q.reverse?11-10:1).reduce((a,b)=>a+b)/500;
ok(high===10&&low===1,'Reverse-scoring extremes');
for(const n of [20,60,100,500]){const per=n/en.meta.categories.length;ok(Number.isInteger(per)&&per<=25,`Balanced length ${n}`)}
const reference=fs.readFileSync(path.join(root,'ethics_test','index.html'),'utf8');
const classes=[...reference.matchAll(/class="([^"]+)"/g)].flatMap(m=>m[1].split(/\s+/));
const ids=[...reference.matchAll(/id="([^"]+)"/g)].map(m=>m[1]);
for(const name of ['index.html','urdu.html']){const file=path.join(__dirname,name),html=fs.readFileSync(file,'utf8');
  for(const cls of new Set(classes))ok(html.includes(cls),`${name} missing class ${cls}`);
  for(const id of new Set(ids))ok(html.includes(`id="${id}"`),`${name} missing id ${id}`);
  for(const fn of ['buildQuestionSet','startQuiz','renderQuestion','adjustedScore','computeScores','showResults','copyLink'])ok(html.includes(`function ${fn}`),`${name} missing ${fn}`);
  for(const n of [20,60,100,500])ok(html.includes(`data-len="${n}"`),`${name} missing length ${n}`);
  ok(!/Ethics|Moral|ethics_test/i.test(html),`${name} retains ethics content`);
  const scripts=[...html.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/g)].map(m=>m[1]);
  scripts.forEach((code,i)=>new vm.Script(code,{filename:`${name}#${i}`}));
}
const home=fs.readFileSync(path.join(root,'index.html'),'utf8');ok(home.includes('goal_setting_test/index.html')&&home.includes('goal_setting_test/urdu.html'),'Homepage links');
console.log(JSON.stringify({english:500,urdu:500,subtopics:20,perSubtopic:25,reversePerSubtopic:12,lengths:[20,60,100,500],highScore:high,lowScore:low,bilingualAlignment:'passed',urduScript:'passed',ethicsStructureContract:'passed',inlineScripts:'passed',homepageLinks:'passed'},null,2));
