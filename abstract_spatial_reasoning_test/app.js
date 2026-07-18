const config = window.TEST_CONFIG;
const $ = s => document.querySelector(s);
let bank=[], meta, quiz=[], at=0, score=0, answered=false, stats={};

async function init(){
  try{
    const res=await fetch(config.data);
    if(!res.ok) throw new Error(`HTTP ${res.status}`);
    ({meta,questions:bank}=await res.json());
    renderTopics();
    document.querySelectorAll('.length').forEach(b=>b.addEventListener('click',()=>start(Number(b.dataset.length))));
  }catch(e){$('.start').innerHTML=`<p class="feedback">${config.loadError}: ${e.message}</p>`}
}
function renderTopics(){
  $('.topics').innerHTML=meta.categories.map(c=>`<span class="topic">${c.icon} ${c.label}</span>`).join('');
}
function balancedSample(n){
  if(n===500) return shuffle([...bank]);
  const groups=Object.fromEntries(meta.categories.map(c=>[c.id,shuffle(bank.filter(q=>q.category===c.id))]));
  const out=[]; let round=0;
  while(out.length<n){for(const c of meta.categories){if(out.length<n&&groups[c.id][round])out.push(groups[c.id][round]);}round++}
  return shuffle(out);
}
function shuffle(a){for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function start(n){quiz=balancedSample(n);at=0;score=0;stats={};answered=false;$('.start').classList.add('hidden');$('.results').classList.add('hidden');$('.quiz').classList.remove('hidden');renderQuestion()}
function renderQuestion(){
  const q=quiz[at], cat=meta.categories.find(c=>c.id===q.category);
  $('.counter').textContent=`${config.question} ${at+1} / ${quiz.length}`;
  $('.fill').style.width=`${at/quiz.length*100}%`;
  $('.category').textContent=`${cat.icon} ${cat.label}`;$('.difficulty').textContent=config[q.difficulty];
  $('.prompt').textContent=q.prompt;$('.visual').textContent=q.visual;$('.visual').classList.toggle('hidden',!q.visual);
  $('.options').innerHTML=q.options.map((o,i)=>`<button class="option" data-i="${i}"><span>${String.fromCharCode(65+i)}.</span> ${escapeHtml(o)}</button>`).join('');
  $('.feedback').classList.add('hidden');$('.feedback').textContent='';$('.next').disabled=true;$('.next').textContent=at===quiz.length-1?config.finish:config.next;answered=false;
  document.querySelectorAll('.option').forEach(b=>b.addEventListener('click',choose));
}
function choose(e){
  if(answered)return;answered=true;const picked=Number(e.currentTarget.dataset.i),q=quiz[at],good=picked===q.answer;
  stats[q.category]??={right:0,total:0};stats[q.category].total++;if(good){score++;stats[q.category].right++}
  document.querySelectorAll('.option').forEach((b,i)=>{b.disabled=true;if(i===q.answer)b.classList.add('correct');else if(i===picked)b.classList.add('wrong')});
  $('.feedback').textContent=`${good?config.correct:config.incorrect} ${q.explanation}`;$('.feedback').classList.remove('hidden');$('.next').disabled=false;
}
$('.next').addEventListener('click',()=>{at++;if(at<quiz.length)renderQuestion();else showResults()});
$('.quit').addEventListener('click',reset);
function showResults(){
  $('.quiz').classList.add('hidden');$('.results').classList.remove('hidden');const pct=Math.round(score/quiz.length*100);
  $('.score-ring').style.setProperty('--score',`${pct*3.6}deg`);$('.score-ring strong').textContent=`${pct}%`;$('.score-ring span').textContent=`${score} / ${quiz.length}`;
  $('.result-copy').textContent=pct>=85?config.excellent:pct>=65?config.good:pct>=45?config.growing:config.practice;
  $('.breakdown').innerHTML=Object.entries(stats).sort((a,b)=>b[1].total-a[1].total).map(([id,s])=>{const c=meta.categories.find(x=>x.id===id),p=Math.round(s.right/s.total*100);return `<div class="break-row"><span>${c.icon} ${c.label}</span><div class="mini-track"><div class="mini-fill" style="width:${p}%"></div></div><span>${s.right}/${s.total}</span></div>`}).join('');
  window.scrollTo({top:0,behavior:'smooth'});
}
function reset(){$('.results').classList.add('hidden');$('.quiz').classList.add('hidden');$('.start').classList.remove('hidden');window.scrollTo({top:0,behavior:'smooth'})}
$('.retry').addEventListener('click',reset);
function escapeHtml(v){const d=document.createElement('div');d.textContent=v;return d.innerHTML}
init();
