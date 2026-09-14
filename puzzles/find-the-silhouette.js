'use strict';
const LEVELS = {
  easy: { name: 'Easy', objects: 12, seconds: 20, columns: 4, desktopColumns: 6 },
  hard: { name: 'Hard', objects: 24, seconds: 25, columns: 6, desktopColumns: 8 },
  advanced: { name: 'Advanced', objects: 36, seconds: 30, columns: 6, desktopColumns: 9 }
};
const TOTAL_ROUNDS = 10;
const INITIAL_HINTS = 3;
const el = id => document.getElementById(id);
let level = 'easy', round = 0, phase = 'levels', target, targets = [];
let hints = INITIAL_HINTS, misses = 0, history = [], clockId, deadline = 0, remaining = 0;
function shuffle(items) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
function show(screen) {
  ['levelScreen','gameScreen','resultsScreen'].forEach(id => el(id).hidden = id !== screen);
}
function stopClock() { clearInterval(clockId); }
function updateHints() {
  el('hintCount').textContent = hints;
  const highlighted = Boolean(el('objectCollage').querySelector('.hinted'));
  el('hintBtn').disabled = hints === 0 || phase !== 'playing' || highlighted;
  el('hintBtn').setAttribute('aria-label', `Hint: highlight the matching object (${hints} remaining)`);
}
function updateProgress() {
  el('roundProgress').replaceChildren(...Array.from({length: TOTAL_ROUNDS}, (_, i) => {
    const segment = document.createElement('span');
    segment.className = history[i] ? (history[i].passed ? 'passed' : 'failed') : (i === round ? 'current' : '');
    return segment;
  }));
  el('roundProgress').setAttribute('aria-label', `${history.length} of ${TOTAL_ROUNDS} rounds complete`);
}
function updateClock() {
  remaining = Math.max(0, deadline - performance.now());
  const seconds = Math.ceil(remaining / 1000);
  el('timerText').textContent = `00:${String(seconds).padStart(2,'0')}`;
  document.querySelector('.timer').classList.toggle('urgent', seconds <= 5);
  if (remaining === 0 && phase === 'playing') completeRound(false);
}
function startClock() {
  stopClock(); deadline = performance.now() + remaining;
  updateClock(); clockId = setInterval(updateClock, 100);
}
function startQuiz(selectedLevel) {
  stopClock(); level = selectedLevel; round = 0; history = []; hints = INITIAL_HINTS;
  targets = shuffle(SILHOUETTE_OBJECTS).slice(0, TOTAL_ROUNDS);
  show('gameScreen'); startRound();
}
function startRound() {
  phase = 'playing'; misses = 0; target = targets[round];
  const config = LEVELS[level];
  const others = shuffle(SILHOUETTE_OBJECTS.filter(object => object !== target)).slice(0,config.objects - 1);
  const objects = shuffle([target,...others]);
  const angles = config.objects === 12 ? [0] : [-25,-15,0,15,25];
  const targetAngle = angles[Math.floor(Math.random() * angles.length)];
  const board = el('objectCollage');
  board.style.setProperty('--columns',config.columns);
  board.style.setProperty('--rows',Math.ceil(objects.length / config.columns));
  board.style.setProperty('--desktop-columns',config.desktopColumns);
  board.style.setProperty('--desktop-rows',Math.ceil(objects.length / config.desktopColumns));
  board.replaceChildren(...objects.map(object => {
    const button = document.createElement('button'); button.className = 'collage-object';
    button.dataset.object = SILHOUETTE_OBJECTS.indexOf(object); button.title = object.name;
    button.setAttribute('aria-label',object.name);
    const angle = object === target ? targetAngle : angles[Math.floor(Math.random() * angles.length)];
    button.append(createSilhouetteArt(object, Math.random() < .5 ? '#d52e75' : '#159cbe',angle));
    button.addEventListener('click',() => choose(button,object)); return button;
  }));
  el('targetShape').replaceChildren(createSilhouetteArt(target,'#fff',targetAngle,true));
  el('targetShape').setAttribute('aria-label',`Target silhouette: ${target.name}`);
  el('roundText').textContent = `Round ${round + 1} / ${TOTAL_ROUNDS}`;
  el('levelBadge').textContent = config.name; el('mistakeText').textContent = '0 misses'; el('feedback').textContent = '';
  remaining = config.seconds * 1000; updateHints(); updateProgress(); startClock();
  el('pauseBtn').focus({preventScroll:true});
}
function choose(button,object) {
  if (phase !== 'playing' || button.disabled) return;
  if (performance.now() >= deadline) { updateClock(); return; }
  if (object === target) {
    button.classList.add('correct'); completeRound(true);
  } else {
    button.classList.add('wrong'); button.disabled = true; misses++;
    el('mistakeText').textContent = `${misses} ${misses === 1 ? 'miss' : 'misses'}`;
    el('feedback').textContent = 'That shape does not match. -2 seconds.';
    deadline -= 2000; updateClock();
    if (phase === 'playing') el('pauseBtn').focus({preventScroll:true});
  }
}
function hint() {
  if (phase !== 'playing' || hints === 0 || el('hintBtn').disabled) return;
  if (performance.now() >= deadline) { updateClock(); return; }
  const button = [...el('objectCollage').children].find(item => item.title === target.name);
  button.classList.add('hinted'); hints--; updateHints(); el('feedback').textContent = 'Matching object highlighted.';
}
function completeRound(passed) {
  if (phase !== 'playing') return;
  stopClock(); phase = 'round-end'; updateHints();
  history.push({passed,object:target,misses}); updateProgress();
  el('roundResultTitle').textContent = passed ? 'Object Found!' : 'Time Is Up!';
  el('roundResultText').textContent = `${target.name}. ${passed ? 'Round passed!' : 'This was the matching object.'}`;
  el('roundResultArt').replaceChildren(createSilhouetteArt(target));
  el('nextRoundBtn').textContent = round === TOTAL_ROUNDS - 1 ? 'See Results' : 'Next Round \u2192';
  el('roundDialog').showModal();
}
function pause() {
  if (phase !== 'playing') return;
  updateClock(); if (phase !== 'playing') return;
  stopClock(); phase = 'paused'; updateHints(); el('pauseDialog').showModal();
}
function resume() {
  if (phase !== 'paused') return;
  el('pauseDialog').close(); phase = 'playing'; updateHints(); startClock(); el('pauseBtn').focus();
}
function changeLevel() {
  stopClock(); phase = 'levels';
  [el('pauseDialog'),el('roundDialog')].forEach(dialog => { if (dialog.open) dialog.close(); });
  show('levelScreen'); document.querySelector(`[data-level="${level}"]`).focus();
}
function results() {
  stopClock(); phase = 'results'; show('resultsScreen');
  const passed = history.filter(item => item.passed).length;
  const totalMisses = history.reduce((sum,item) => sum + item.misses,0);
  el('resultTitle').textContent = passed === TOTAL_ROUNDS ? 'All Objects Found!' : 'Quiz Complete!';
  el('resultScore').textContent = `${passed} / ${TOTAL_ROUNDS}`;
  el('accuracy').textContent = `${Math.round(passed / (TOTAL_ROUNDS + totalMisses) * 100)}%`;
  el('totalMisses').textContent = totalMisses; el('totalHints').textContent = INITIAL_HINTS - hints;
  el('resultMessage').textContent = passed === TOTAL_ROUNDS ? 'Great shape spotting!' : 'Play again to find every silhouette.';
  el('roundReview').replaceChildren(...history.map((item,i) => {
    const row = document.createElement('li'), art = document.createElement('span'), copy = document.createElement('span');
    art.className = 'review-art'; art.append(createSilhouetteArt(item.object)); copy.className = 'review-copy';
    copy.textContent = `Round ${i+1}: ${item.object.name} | ${item.passed ? 'Found' : 'Time up'} | ${item.misses} ${item.misses === 1 ? 'miss' : 'misses'}`;
    row.append(art,copy); return row;
  }));
  el('retryBtn').focus({preventScroll:true});
}
document.querySelectorAll('[data-level]').forEach(button => button.addEventListener('click', () => startQuiz(button.dataset.level)));
el('pauseBtn').addEventListener('click',pause); el('resumeBtn').addEventListener('click',resume);
el('quitBtn').addEventListener('click',changeLevel); el('changeLevelBtn').addEventListener('click',changeLevel);
el('hintBtn').addEventListener('click',hint); el('retryBtn').addEventListener('click',() => startQuiz(level));
el('nextRoundBtn').addEventListener('click',() => {
  if (phase !== 'round-end') return;
  el('roundDialog').close(); round++;
  if (round === TOTAL_ROUNDS) results(); else startRound();
});
el('pauseDialog').addEventListener('cancel',event => { event.preventDefault(); resume(); });
el('roundDialog').addEventListener('cancel',event => event.preventDefault());
document.addEventListener('visibilitychange',() => { if (document.hidden) pause(); });
document.addEventListener('keydown',event => { if (event.key === 'Escape' && phase === 'playing') pause(); });
['easyArt','hardArt','advancedArt','resultArt'].forEach((id,i) => el(id).append(createSilhouetteArt(SILHOUETTE_OBJECTS[[18,15,35,1][i]],i % 2 ? '#d52e75' : '#159cbe')));
if (window.lucide) window.lucide.createIcons();
