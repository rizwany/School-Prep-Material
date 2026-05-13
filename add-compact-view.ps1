# add-compact-view.ps1
# Adds Compact View to all worksheet HTML files (skips already-processed ones)

$ErrorActionPreference = 'Stop'
$dir = 'd:\coding\claude\School-Prep-Material'
$done = 0; $skipped = 0; $warned = 0

# ── COMPACT VIEW CSS (hardcoded hex, works in both Pattern A and B) ──────────
$CV_CSS = @'

    /* ===== COMPACT VIEW ===== */
    .cv-overlay{position:fixed;inset:0;background:#f4f6fb;z-index:600;display:flex;flex-direction:column;overflow:hidden}
    .cv-overlay.hidden{display:none}
    .cv-header{display:flex;align-items:center;justify-content:space-between;padding:14px 20px;background:#fff;border-bottom:2px solid #e2e6f0;flex-shrink:0;gap:12px}
    .cv-exit{font-size:0.82rem;font-weight:800;color:#5a6076;background:none;border:2px solid #e2e6f0;cursor:pointer;font-family:'Nunito',sans-serif;padding:6px 14px;border-radius:8px;transition:all .15s;white-space:nowrap}
    .cv-exit:hover{background:#e2e6f0;color:#1a1f36}
    .cv-prog-text{font-size:0.9rem;font-weight:800;color:#1a1f36;text-align:center;flex:1}
    .cv-score-chip{font-size:0.82rem;font-weight:700;color:#4361EE;background:#eef1fd;padding:4px 12px;border-radius:50px;white-space:nowrap}
    .cv-progress-track{height:5px;background:#e2e6f0;flex-shrink:0}
    .cv-progress-fill{height:100%;background:linear-gradient(90deg,#4361EE,#7B61FF);border-radius:0 99px 99px 0;transition:width .5s ease}
    .cv-body{flex:1;display:flex;align-items:center;justify-content:center;padding:28px 20px;overflow-y:auto}
    .cv-body.hidden{display:none}
    .cv-card{background:#fff;border-radius:20px;box-shadow:0 8px 40px rgba(67,97,238,.13);padding:32px 28px;width:100%;max-width:520px;border:3px solid transparent;transition:border-color .25s,background .25s}
    .cv-card.cv-correct{border-color:#22c55e;background:#f0fdf4}
    .cv-card.cv-wrong{border-color:#ef4444;background:#fef2f2}
    .cv-slide-in{animation:cvSlideIn .32s cubic-bezier(.34,1.56,.64,1) both}
    @keyframes cvSlideIn{from{opacity:0;transform:translateY(28px) scale(.95)}to{opacity:1;transform:translateY(0) scale(1)}}
    @keyframes cvShakeWrong{0%,100%{transform:translateX(0)}20%{transform:translateX(-6px)}40%{transform:translateX(6px)}60%{transform:translateX(-4px)}80%{transform:translateX(4px)}}
    .cv-q-label{font-size:.72rem;font-weight:800;color:#4361EE;text-transform:uppercase;letter-spacing:.07em;margin-bottom:14px}
    .cv-question-text{font-size:1.15rem;font-weight:700;color:#1a1f36;line-height:1.55;margin-bottom:24px}
    .cv-input{font-family:'JetBrains Mono',monospace;font-size:1.4rem;font-weight:700;color:#1a1f36;border:2.5px solid #e2e6f0;border-radius:12px;padding:12px 20px;width:160px;outline:none;transition:border-color .2s,box-shadow .2s;text-align:center;display:block}
    .cv-input:focus{border-color:#4361EE;box-shadow:0 0 0 4px rgba(67,97,238,.12)}
    .cv-input.cv-shake{animation:cvShakeWrong .45s ease}
    .cv-radio-group{display:flex;gap:12px;flex-wrap:wrap}
    .cv-radio-label{display:flex;align-items:center;justify-content:center;gap:8px;font-weight:700;font-size:1rem;cursor:pointer;padding:13px 20px;border:2.5px solid #e2e6f0;border-radius:50px;transition:all .18s;flex:1;text-align:center;min-width:80px}
    .cv-radio-label:has(input:checked){border-color:#4361EE;background:#eef1fd;color:#4361EE}
    .cv-radio-label input{accent-color:#4361EE;display:none}
    .cv-select{font-family:'Nunito',sans-serif;font-size:1rem;font-weight:700;color:#1a1f36;border:2.5px solid #e2e6f0;border-radius:12px;padding:12px 16px;width:100%;outline:none;cursor:pointer;background:#fff;transition:border-color .2s}
    .cv-select:focus{border-color:#4361EE}
    .cv-feedback{font-size:.95rem;font-weight:700;border-radius:10px;padding:10px 14px;display:none;margin-top:16px}
    .cv-feedback.show{display:block}
    .cv-feedback.cv-fb-correct{background:#f0fdf4;color:#166534;border:1.5px solid #22c55e}
    .cv-feedback.cv-fb-wrong{background:#fef2f2;color:#991b1b;border:1.5px solid #ef4444}
    .cv-footer{flex-shrink:0;padding:16px 20px 28px;background:#fff;border-top:2px solid #e2e6f0}
    .cv-footer.hidden{display:none}
    .cv-ctas{display:flex;gap:12px;max-width:520px;margin:0 auto}
    .cv-btn-skip{flex:1;padding:15px 10px;border-radius:14px;font-family:'Nunito',sans-serif;font-weight:800;font-size:1rem;border:2px solid #e2e6f0;cursor:pointer;background:#fff;color:#5a6076;transition:all .18s}
    .cv-btn-skip:hover:not(:disabled){border-color:#1a1f36;color:#1a1f36;background:#f8f9fc}
    .cv-btn-submit{flex:2;padding:15px 10px;border-radius:14px;font-family:'Nunito',sans-serif;font-weight:800;font-size:1rem;border:none;cursor:pointer;background:#4361EE;color:#fff;transition:all .18s}
    .cv-btn-submit:hover:not(:disabled){background:#3451d1;transform:translateY(-2px);box-shadow:0 6px 18px rgba(67,97,238,.3)}
    .cv-btn-skip:disabled,.cv-btn-submit:disabled{opacity:.45;cursor:not-allowed;transform:none;box-shadow:none}
    .cv-result-body{text-align:center;width:100%;max-width:520px}
    .cv-result-score-big{font-family:'JetBrains Mono',monospace;font-size:4rem;font-weight:700;color:#4361EE;line-height:1;margin-bottom:10px}
    .cv-result-msg{font-size:1.05rem;font-weight:700;color:#1a1f36;margin-bottom:26px;line-height:1.4}
    .cv-result-dots{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin-bottom:30px}
    .cv-result-dot{width:42px;height:42px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.15rem}
    .cv-result-dot.dot-correct{background:#f0fdf4}
    .cv-result-dot.dot-wrong{background:#fef2f2}
    .cv-result-dot.dot-skipped{background:#f0f1f5}
    .cv-result-btns{display:flex;flex-direction:column;gap:12px;max-width:340px;margin:0 auto}
    .cv-result-btns .btn-outline{background:transparent;color:#4361EE;border:2px solid #4361EE}
    .cv-result-btns .btn-outline:hover{background:#eef1fd}
    .cv-result-btns .btn-lg{padding:13px 32px;font-size:1rem}
    @media(max-width:480px){
      .cv-card{padding:22px 16px;border-radius:16px}
      .cv-question-text{font-size:1rem}
      .cv-result-score-big{font-size:3rem}
      .cv-btn-skip,.cv-btn-submit{font-size:.93rem;padding:13px 8px}
      .cv-radio-label{padding:11px 14px;font-size:.93rem}
    }
    /* ===== END COMPACT VIEW ===== */
'@

# ── COMPACT VIEW HTML OVERLAY (shared, uses onclick attrs) ───────────────────
$CV_HTML = @'

<!-- COMPACT VIEW OVERLAY -->
<div id="cvOverlay" class="cv-overlay hidden" role="dialog" aria-modal="true" aria-label="Compact quiz mode">
  <div class="cv-header">
    <button class="cv-exit" onclick="exitCompactView()" aria-label="Exit compact view">&#x2715; Exit</button>
    <div class="cv-prog-text">Question <span id="cvQNum">1</span> of 10</div>
    <div class="cv-score-chip" id="cvScoreChip">0 &#x2713;</div>
  </div>
  <div class="cv-progress-track"><div class="cv-progress-fill" id="cvProgressFill" style="width:0%"></div></div>
  <div class="cv-body" id="cvQuestionSection">
    <div class="cv-card" id="cvCard">
      <div class="cv-q-label" id="cvQLabel">Question 1 of 10</div>
      <div class="cv-question-text" id="cvQuestionText"></div>
      <div id="cvInputArea"></div>
      <div class="cv-feedback" id="cvFeedback"></div>
    </div>
  </div>
  <div class="cv-body hidden" id="cvResultSection">
    <div class="cv-result-body">
      <div class="cv-result-score-big" id="cvResultScore">0/10</div>
      <div class="cv-result-msg" id="cvResultMsg"></div>
      <div class="cv-result-dots" id="cvResultDots"></div>
      <div class="cv-result-btns">
        <button class="btn btn-primary btn-lg" onclick="cvPlayAgain()">&#x1F504; Play Again</button>
        <button class="btn btn-outline btn-lg" onclick="cvShareResults()" style="border-color:#6C63FF;color:#6C63FF">&#x1F4E4; Share Results</button>
        <button class="btn btn-outline btn-lg" onclick="exitCompactView()">&#x2715; Exit Compact View</button>
      </div>
    </div>
  </div>
  <div class="cv-footer" id="cvFooter">
    <div class="cv-ctas">
      <button class="cv-btn-skip" onclick="cvSkip()">&#x21AA; Skip</button>
      <button class="cv-btn-submit" onclick="cvSubmit()">&#x2713; Submit</button>
    </div>
  </div>
</div>
'@

# ── PATTERN A: button addition (after newWsBtn) ──────────────────────────────
$CV_BTN_A = @'

    <div class="controls-divider" aria-hidden="true"></div>
    <button class="btn btn-neutral" onclick="openCompactView()">&#x1F4F1; Compact View</button>
'@

# ── PATTERN B: button addition (after shareResults button) ───────────────────
$CV_BTN_B = @'

  <button class="btn" onclick="openCompactView()">&#x1F4F1; Compact View</button>
'@

# ── PATTERN A JS (Grade 1-3, uses generateQuestions / updateStats / showToast) ─
$CV_JS_A = @'

  // ===== COMPACT VIEW =====
  var cvQuestions=[],cvIdx=0,cvCorrect=0,cvAnswering=false,cvLog=[];

  function cvAnswersMatch(u,c){
    var us=String(u).trim().toLowerCase(),cs=String(c).trim().toLowerCase();
    if(us===cs)return true;
    var un=parseFloat(us),cn=parseFloat(cs);
    if(!isNaN(un)&&!isNaN(cn))return Math.abs(un-cn)<0.02;
    if(us.indexOf('/')>=0&&cs.indexOf('/')>=0){var up=us.split('/'),cp=cs.split('/');return parseInt(up[0])*parseInt(cp[1])===parseInt(cp[0])*parseInt(up[1]);}
    return false;
  }

  function openCompactView(){
    cvQuestions=generateQuestions(difficulty==='easy');
    cvIdx=0;cvCorrect=0;cvAnswering=false;cvLog=[];
    document.getElementById('cvOverlay').classList.remove('hidden');
    document.getElementById('cvQuestionSection').classList.remove('hidden');
    document.getElementById('cvResultSection').classList.add('hidden');
    document.getElementById('cvFooter').classList.remove('hidden');
    document.body.style.overflow='hidden';
    cvRenderQuestion();
  }

  function exitCompactView(){document.getElementById('cvOverlay').classList.add('hidden');document.body.style.overflow='';}

  function cvUpdateHeader(){
    document.getElementById('cvQNum').textContent=Math.min(cvIdx+1,10);
    document.getElementById('cvScoreChip').textContent=cvCorrect+' ✓';
    document.getElementById('cvProgressFill').style.width=(cvIdx/10*100)+'%';
  }

  function cvRenderQuestion(){
    if(cvIdx>=10){cvShowResult();return;}
    var q=cvQuestions[cvIdx];
    cvAnswering=false;
    var card=document.getElementById('cvCard');
    card.className='cv-card';void card.offsetWidth;card.classList.add('cv-slide-in');
    document.getElementById('cvQLabel').textContent='Question '+(cvIdx+1)+' of 10';
    document.getElementById('cvQuestionText').innerHTML=q.text;
    var fb=document.getElementById('cvFeedback');fb.className='cv-feedback';fb.textContent='';
    var area=document.getElementById('cvInputArea');
    var opts=q.opts||q.options||[];
    if(q.type==='number'){
      area.innerHTML='<input class="cv-input" type="number" id="cvNumInput" autocomplete="off" placeholder="?"/>';
      setTimeout(function(){var el=document.getElementById('cvNumInput');if(el)el.focus();},80);
      var inp=document.getElementById('cvNumInput');
      if(inp)inp.addEventListener('keydown',function(e){if(e.key==='Enter')cvSubmit();});
    }else if(q.type==='radio'){
      area.innerHTML='<div class="cv-radio-group" role="radiogroup">'+opts.map(function(o){return'<label class="cv-radio-label"><input type="radio" name="cvradio" value="'+o+'"/>'+o+'</label>';}).join('')+'</div>';
    }else if(q.type==='select'){
      area.innerHTML='<select class="cv-select" id="cvNumInput"><option value="" disabled selected>-- choose --</option>'+opts.map(function(o){return'<option value="'+o+'">'+o+'</option>';}).join('')+'</select>';
    }else{
      area.innerHTML='<input class="cv-input" type="number" id="cvNumInput" autocomplete="off" placeholder="?"/>';
      setTimeout(function(){var el=document.getElementById('cvNumInput');if(el)el.focus();},80);
      var inp2=document.getElementById('cvNumInput');
      if(inp2)inp2.addEventListener('keydown',function(e){if(e.key==='Enter')cvSubmit();});
    }
    document.getElementById('cvSubmitBtn').disabled=false;
    document.getElementById('cvSkipBtn').disabled=false;
    cvUpdateHeader();
  }

  function cvGetAnswer(){
    var q=cvQuestions[cvIdx];
    if(q.type==='number'||q.type==='select'){var el=document.getElementById('cvNumInput');return el?el.value.trim():'';}
    var c=document.querySelector('input[name="cvradio"]:checked');return c?c.value:'';
  }

  function cvSubmit(){
    if(cvAnswering)return;
    var ua=cvGetAnswer();
    if(!ua){
      var inp=document.getElementById('cvNumInput');var grp=document.querySelector('.cv-radio-group');
      var target=inp||grp;
      if(target){target.classList.add('cv-shake');setTimeout(function(){target.classList.remove('cv-shake');},500);}
      return;
    }
    cvAnswering=true;
    var q=cvQuestions[cvIdx];var ok=cvAnswersMatch(ua,q.answer);
    if(ok)cvCorrect++;cvLog.push({correct:ok,skipped:false});
    var card=document.getElementById('cvCard');card.classList.add(ok?'cv-correct':'cv-wrong');
    var fb=document.getElementById('cvFeedback');
    fb.className='cv-feedback show '+(ok?'cv-fb-correct':'cv-fb-wrong');
    fb.textContent=ok?'✅ Correct!':'❌ Correct answer: '+q.answer;
    document.getElementById('cvSubmitBtn').disabled=true;document.getElementById('cvSkipBtn').disabled=true;
    cvUpdateHeader();setTimeout(function(){cvIdx++;cvRenderQuestion();},1400);
  }

  function cvSkip(){if(cvAnswering)return;cvAnswering=true;cvLog.push({correct:false,skipped:true});cvIdx++;cvRenderQuestion();}

  function cvShowResult(){
    document.getElementById('cvProgressFill').style.width='100%';
    document.getElementById('cvQuestionSection').classList.add('hidden');
    document.getElementById('cvFooter').classList.add('hidden');
    document.getElementById('cvResultScore').textContent=cvCorrect+'/10';
    var msgs=['\u{1F632} No worries — open the Help page and come back stronger!','\u{1F423} A good start! The Guide will help you.','\u{1F605} Keep practising!','\u{1F605} Keep practising!','\u{1F914} Getting there!','\u{1F914} Half right — you have more in you!','\u{1F44D} More than half right!','\u{1F44F} Great job!','\u{1F60E} Fantastic!','\u{1F525} Almost flawless!','\u{1F3C6} PERFECT SCORE!'];
    document.getElementById('cvResultMsg').textContent=msgs[cvCorrect]||'Great effort!';
    document.getElementById('cvResultDots').innerHTML=cvLog.map(function(r,i){return'<div class="cv-result-dot '+(r.correct?'dot-correct':r.skipped?'dot-skipped':'dot-wrong')+'" title="Q'+(i+1)+'">'+(r.correct?'✅':r.skipped?'⏭️':'❌')+'</div>';}).join('');
    document.getElementById('cvResultSection').classList.remove('hidden');
    updateStats(cvCorrect);renderStats();
  }

  function cvPlayAgain(){
    document.getElementById('cvResultSection').classList.add('hidden');
    document.getElementById('cvQuestionSection').classList.remove('hidden');
    document.getElementById('cvFooter').classList.remove('hidden');
    cvQuestions=generateQuestions(difficulty==='easy');
    cvIdx=0;cvCorrect=0;cvAnswering=false;cvLog=[];cvRenderQuestion();
  }

  function cvShareResults(){
    var name=localStorage.getItem(USERNAME_KEY)||'Anonymous';
    var dl=difficulty==='easy'?'Easy':'Hard';
    var emojis=cvLog.map(function(r){return r.correct?'✅':r.skipped?'⏭️':'❌';}).join('');
    var text='\u{1F4F1} '+TOPIC+' (Grade '+GRADE+')\n\u{1F464} '+name+' scored '+cvCorrect+'/10 on '+dl+' mode! (Compact View)\n'+emojis+'\n\nThink you can beat it?\n\u{1F517} '+location.href;
    if(navigator.share)navigator.share({title:TOPIC,text:text,url:location.href}).catch(function(){});
    else if(navigator.clipboard)navigator.clipboard.writeText(text).then(function(){showToast('Copied! Share it anywhere \u{1F4E4}');});
    else showToast('Copy the URL and share it manually \u{1F517}');
  }

  window.openCompactView=openCompactView;window.exitCompactView=exitCompactView;
  window.cvSubmit=cvSubmit;window.cvSkip=cvSkip;window.cvPlayAgain=cvPlayAgain;window.cvShareResults=cvShareResults;
  // ===== END COMPACT VIEW =====

'@

# ── PATTERN B JS (Grade 4-7, uses generators array / saveStats) ──────────────
$CV_JS_B = @'

  // ===== COMPACT VIEW =====
  var cvQuestions=[],cvIdx=0,cvCorrect=0,cvAnswering=false,cvLog=[];

  function cvAnswersMatch(u,c){
    var us=String(u).trim().toLowerCase(),cs=String(c).trim().toLowerCase();
    if(us===cs)return true;
    var un=parseFloat(us),cn=parseFloat(cs);
    if(!isNaN(un)&&!isNaN(cn))return Math.abs(un-cn)<0.02;
    if(us.indexOf('/')>=0&&cs.indexOf('/')>=0){var up=us.split('/'),cp=cs.split('/');return parseInt(up[0])*parseInt(cp[1])===parseInt(cp[0])*parseInt(up[1]);}
    return false;
  }

  function openCompactView(){
    var shuffled=[].concat(generators).sort(function(){return Math.random()-0.5;});
    cvQuestions=shuffled.slice(0,10).map(function(fn){try{return fn(difficulty==='easy');}catch(e){return generators[0](difficulty==='easy');}});
    cvIdx=0;cvCorrect=0;cvAnswering=false;cvLog=[];
    document.getElementById('cvOverlay').classList.remove('hidden');
    document.getElementById('cvQuestionSection').classList.remove('hidden');
    document.getElementById('cvResultSection').classList.add('hidden');
    document.getElementById('cvFooter').classList.remove('hidden');
    document.body.style.overflow='hidden';
    cvRenderQuestion();
  }

  function exitCompactView(){document.getElementById('cvOverlay').classList.add('hidden');document.body.style.overflow='';}

  function cvUpdateHeader(){
    document.getElementById('cvQNum').textContent=Math.min(cvIdx+1,10);
    document.getElementById('cvScoreChip').textContent=cvCorrect+' ✓';
    document.getElementById('cvProgressFill').style.width=(cvIdx/10*100)+'%';
  }

  function cvRenderQuestion(){
    if(cvIdx>=10){cvShowResult();return;}
    var q=cvQuestions[cvIdx];
    cvAnswering=false;
    var card=document.getElementById('cvCard');
    card.className='cv-card';void card.offsetWidth;card.classList.add('cv-slide-in');
    document.getElementById('cvQLabel').textContent='Question '+(cvIdx+1)+' of 10';
    document.getElementById('cvQuestionText').innerHTML=q.text;
    var fb=document.getElementById('cvFeedback');fb.className='cv-feedback';fb.textContent='';
    var area=document.getElementById('cvInputArea');
    var opts=q.opts||q.options||[];
    if(q.type==='number'||q.type==='text'||q.type==='textinput'){
      var isText=(q.type!=='number'||q.freeText);
      area.innerHTML='<input class="cv-input" type="'+(isText?'text':'number')+'" id="cvNumInput" autocomplete="off" placeholder="'+(isText?'e.g. 3/4':'?')+'"/>';
      setTimeout(function(){var el=document.getElementById('cvNumInput');if(el)el.focus();},80);
      var inp=document.getElementById('cvNumInput');
      if(inp)inp.addEventListener('keydown',function(e){if(e.key==='Enter')cvSubmit();});
    }else if(q.type==='radio'){
      area.innerHTML='<div class="cv-radio-group" role="radiogroup"><label class="cv-radio-label"><input type="radio" name="cvradio" value="True"/>True</label><label class="cv-radio-label"><input type="radio" name="cvradio" value="False"/>False</label></div>';
    }else if(q.type==='radio3'){
      area.innerHTML='<div class="cv-radio-group" role="radiogroup"><label class="cv-radio-label"><input type="radio" name="cvradio" value="<"/>&lt;</label><label class="cv-radio-label"><input type="radio" name="cvradio" value=">"/>&gt;</label><label class="cv-radio-label"><input type="radio" name="cvradio" value="="/>&#61;</label></div>';
    }else if(q.type==='radiomc'||q.type==='textmc'){
      area.innerHTML='<div class="cv-radio-group" role="radiogroup">'+opts.map(function(o){return'<label class="cv-radio-label"><input type="radio" name="cvradio" value="'+o+'"/>'+o+'</label>';}).join('')+'</div>';
    }else if(q.type==='select'){
      area.innerHTML='<select class="cv-select" id="cvNumInput"><option value="" disabled selected>-- choose --</option>'+opts.map(function(o){return'<option value="'+o+'">'+o+'</option>';}).join('')+'</select>';
    }else{
      area.innerHTML='<input class="cv-input" type="number" id="cvNumInput" autocomplete="off" placeholder="?"/>';
      setTimeout(function(){var el=document.getElementById('cvNumInput');if(el)el.focus();},80);
      var inp2=document.getElementById('cvNumInput');
      if(inp2)inp2.addEventListener('keydown',function(e){if(e.key==='Enter')cvSubmit();});
    }
    document.getElementById('cvSubmitBtn').disabled=false;
    document.getElementById('cvSkipBtn').disabled=false;
    cvUpdateHeader();
  }

  function cvGetAnswer(){
    var q=cvQuestions[cvIdx];
    if(q.type==='radio'||q.type==='radio3'||q.type==='radiomc'||q.type==='textmc'){var c=document.querySelector('input[name="cvradio"]:checked');return c?c.value:'';}
    var el=document.getElementById('cvNumInput');return el?el.value.trim():'';
  }

  function cvSubmit(){
    if(cvAnswering)return;
    var ua=cvGetAnswer();
    if(!ua){
      var inp=document.getElementById('cvNumInput');var grp=document.querySelector('.cv-radio-group');
      var target=inp||grp;
      if(target){target.classList.add('cv-shake');setTimeout(function(){target.classList.remove('cv-shake');},500);}
      return;
    }
    cvAnswering=true;
    var q=cvQuestions[cvIdx];var ok=cvAnswersMatch(ua,q.answer);
    if(ok)cvCorrect++;cvLog.push({correct:ok,skipped:false});
    var card=document.getElementById('cvCard');card.classList.add(ok?'cv-correct':'cv-wrong');
    var fb=document.getElementById('cvFeedback');
    fb.className='cv-feedback show '+(ok?'cv-fb-correct':'cv-fb-wrong');
    fb.textContent=ok?'✅ Correct!':'❌ Correct answer: '+q.answer;
    document.getElementById('cvSubmitBtn').disabled=true;document.getElementById('cvSkipBtn').disabled=true;
    cvUpdateHeader();setTimeout(function(){cvIdx++;cvRenderQuestion();},1400);
  }

  function cvSkip(){if(cvAnswering)return;cvAnswering=true;cvLog.push({correct:false,skipped:true});cvIdx++;cvRenderQuestion();}

  function cvShowResult(){
    document.getElementById('cvProgressFill').style.width='100%';
    document.getElementById('cvQuestionSection').classList.add('hidden');
    document.getElementById('cvFooter').classList.add('hidden');
    document.getElementById('cvResultScore').textContent=cvCorrect+'/10';
    var msgs=['\u{1F632} No worries — open the Help page and come back stronger!','\u{1F423} A good start! The Guide will help you.','\u{1F605} Keep practising!','\u{1F605} Keep practising!','\u{1F914} Getting there!','\u{1F914} Half right — you have more in you!','\u{1F44D} More than half right!','\u{1F44F} Great job!','\u{1F60E} Fantastic!','\u{1F525} Almost flawless!','\u{1F3C6} PERFECT SCORE!'];
    document.getElementById('cvResultMsg').textContent=msgs[cvCorrect]||'Great effort!';
    document.getElementById('cvResultDots').innerHTML=cvLog.map(function(r,i){return'<div class="cv-result-dot '+(r.correct?'dot-correct':r.skipped?'dot-skipped':'dot-wrong')+'" title="Q'+(i+1)+'">'+(r.correct?'✅':r.skipped?'⏭️':'❌')+'</div>';}).join('');
    document.getElementById('cvResultSection').classList.remove('hidden');
    saveStats(cvCorrect);
  }

  function cvPlayAgain(){
    document.getElementById('cvResultSection').classList.add('hidden');
    document.getElementById('cvQuestionSection').classList.remove('hidden');
    document.getElementById('cvFooter').classList.remove('hidden');
    var shuffled=[].concat(generators).sort(function(){return Math.random()-0.5;});
    cvQuestions=shuffled.slice(0,10).map(function(fn){try{return fn(difficulty==='easy');}catch(e){return generators[0](difficulty==='easy');}});
    cvIdx=0;cvCorrect=0;cvAnswering=false;cvLog=[];cvRenderQuestion();
  }

  function cvShareResults(){
    var dl=difficulty==='easy'?'Easy':'Hard';
    var emojis=cvLog.map(function(r){return r.correct?'✅':r.skipped?'⏭️':'❌';}).join('');
    var text='\u{1F4F1} Math Worksheet\nScored '+cvCorrect+'/10 on '+dl+' mode! (Compact View)\n'+emojis+'\n\nThink you can beat it?\n\u{1F517} '+location.href;
    if(navigator.share)navigator.share({title:'Math Worksheet',text:text,url:location.href}).catch(function(){});
    else if(navigator.clipboard)navigator.clipboard.writeText(text).then(function(){alert('Copied! Share it anywhere \u{1F4E4}');});
    else alert('Copy the URL and share it manually \u{1F517}');
  }

  window.openCompactView=openCompactView;window.exitCompactView=exitCompactView;
  window.cvSubmit=cvSubmit;window.cvSkip=cvSkip;window.cvPlayAgain=cvPlayAgain;window.cvShareResults=cvShareResults;
  // ===== END COMPACT VIEW =====

'@

# ── PROCESS FILES ─────────────────────────────────────────────────────────────
$enc = New-Object System.Text.UTF8Encoding $false

Get-ChildItem $dir -Filter '*-worksheet.html' | ForEach-Object {
    $file = $_
    $c = [System.IO.File]::ReadAllText($file.FullName, [System.Text.Encoding]::UTF8)
    $c = $c.Replace("`r`n", "`n")  # normalize to LF

    # Skip already-processed files
    if ($c.Contains('cv-overlay')) {
        $skipped++
        Write-Host "SKIP (already done): $($file.Name)"
        return
    }

    $isA = $c.Contains('--clr-bg:')
    $pattern = if ($isA) { 'A' } else { 'B' }

    # ── 1. CSS ──────────────────────────────────────────────────────────────
    if ($isA) {
        $cssM = '@media(max-width:600px){.page-wrap{padding:16px 14px 48px}}'
        if (-not $c.Contains($cssM)) { $warned++; Write-Host "WARN [CSS-A] $($file.Name)"; return }
        $c = $c.Replace($cssM, $cssM + $CV_CSS)
    } else {
        $cssM = '    footer { text-align: center; padding: 24px; font-size: 0.8rem; color: var(--muted); font-weight: 600; }'
        if (-not $c.Contains($cssM)) { $warned++; Write-Host "WARN [CSS-B] $($file.Name)"; return }
        $c = $c.Replace($cssM, $CV_CSS + "`n" + $cssM)
    }

    # ── 2. HTML overlay ─────────────────────────────────────────────────────
    if ($isA) {
        $htmlM = '<div class="toast" id="toast" role="status" aria-live="polite"></div>'
        if (-not $c.Contains($htmlM)) { $warned++; Write-Host "WARN [HTML-A] $($file.Name)"; return }
        $c = $c.Replace($htmlM, $htmlM + $CV_HTML)
    } else {
        $htmlM = '<!-- End Google Tag Manager (noscript) -->'
        if (-not $c.Contains($htmlM)) { $warned++; Write-Host "WARN [HTML-B] $($file.Name)"; return }
        $c = $c.Replace($htmlM, $htmlM + $CV_HTML)
    }

    # ── 3. Compact View button ──────────────────────────────────────────────
    if ($isA) {
        $btnM = '<button class="btn btn-neutral" id="newWsBtn">'
        # Find full button tag (text varies per grade/topic)
        $btnStart = $c.IndexOf($btnM)
        if ($btnStart -lt 0) { $warned++; Write-Host "WARN [BTN-A] $($file.Name)"; return }
        $btnEnd = $c.IndexOf('</button>', $btnStart) + '</button>'.Length
        $fullBtn = $c.Substring($btnStart, $btnEnd - $btnStart)
        $c = $c.Replace($fullBtn, $fullBtn + $CV_BTN_A)
    } else {
        $btnM = '<button class="btn btn-primary" onclick="shareResults()">Share Results</button>'
        if (-not $c.Contains($btnM)) { $warned++; Write-Host "WARN [BTN-B] $($file.Name)"; return }
        $c = $c.Replace($btnM, $btnM + $CV_BTN_B)
    }

    # ── 4. JavaScript ────────────────────────────────────────────────────────
    if ($isA) {
        $jsM = '  initUsername();'
        if (-not $c.Contains($jsM)) { $warned++; Write-Host "WARN [JS-A] $($file.Name)"; return }
        $c = $c.Replace($jsM, $CV_JS_A + $jsM)
    } else {
        $jsM = '  generate(); render();'
        $idx = $c.LastIndexOf($jsM)
        if ($idx -lt 0) { $warned++; Write-Host "WARN [JS-B] $($file.Name)"; return }
        $c = $c.Substring(0, $idx) + $CV_JS_B + $c.Substring($idx)
    }

    [System.IO.File]::WriteAllText($file.FullName, $c, $enc)
    $done++
    Write-Host "DONE [$pattern]: $($file.Name)"
}

Write-Host ""
Write-Host "=== Results: $done processed, $skipped skipped (already done), $warned warnings ==="
