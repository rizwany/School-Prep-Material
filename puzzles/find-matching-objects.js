'use strict';
const OBJECTS = [
  'Diary', 'Trophy', 'Backpack', 'Cap', 'Game controller', 'Boxing glove',
  'Fork and knife', 'Hammer', 'Wristwatch', 'Camera', 'Basketball',
  'Umbrella', 'Apple', 'Headphones', 'Watering can', 'Ice cream'
];
const LEVELS = {
  easy: { name: 'Easy', objects: 8, pairs: 1, seconds: 35 },
  hard: { name: 'Hard', objects: 10, pairs: 2, seconds: 35 },
  advanced: { name: 'Advanced', objects: 12, pairs: 3, seconds: 40 }
};
const TOTAL_ROUNDS = 6;
const el = id => document.getElementById(id);
let level = 'easy', round = 0, phase = 'levels', selected = null;
let pairsFound = 0, pairsNeeded = 1, misses = 0, hints = 2;
let history = [], clockId, mismatchId, deadline = 0, remaining = 0, locked = false;
function shuffle(items) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
function clearSelection() {
  clearTimeout(mismatchId);
  el('objectBoard').querySelectorAll('.selected,.wrong').forEach(button => {
    button.classList.remove('selected', 'wrong');
    button.setAttribute('aria-pressed', 'false');
  });
  selected = null; locked = false;
}
function stopClock() { clearInterval(clockId); }
function show(screen) {
  ['levelScreen','gameScreen','resultsScreen'].forEach(id => el(id).hidden = id !== screen);
}
function updateHints() {
  el('hintCount').textContent = hints;
  el('hintBtn').disabled = hints === 0 || phase !== 'playing';
  el('hintBtn').setAttribute('aria-label', `Hint: highlight a matching pair (${hints} remaining)`);
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
  el('timerText').textContent = `${String(Math.floor(seconds / 60)).padStart(2,'0')}:${String(seconds % 60).padStart(2,'0')}`;
  document.querySelector('.timer').classList.toggle('urgent', seconds <= 10);
  if (remaining === 0 && phase === 'playing') completeRound(false);
}
function startClock() {
  stopClock(); deadline = performance.now() + remaining;
  updateClock(); clockId = setInterval(updateClock, 100);
}
function startQuiz(selectedLevel) {
  stopClock(); clearSelection();
  level = selectedLevel; round = 0; history = []; hints = 2;
  show('gameScreen'); startRound();
}
function startRound() {
  clearSelection(); phase = 'playing'; pairsFound = 0; misses = 0;
  const config = LEVELS[level];
  pairsNeeded = config.pairs + (round >= 3 ? 1 : 0);
  const distinct = shuffle(OBJECTS.map((name, id) => ({name,id}))).slice(0, config.objects - pairsNeeded);
  const objects = shuffle([...distinct, ...distinct.slice(0,pairsNeeded)]);
  el('objectBoard').dataset.count = objects.length;
  el('objectBoard').style.setProperty('--rows', Math.ceil(objects.length / 3));
  el('objectBoard').style.setProperty('--desktop-rows', Math.ceil(objects.length / 4));
  el('objectBoard').replaceChildren(...objects.map(object => {
    const button = document.createElement('button');
    button.className = 'object-button'; button.dataset.object = object.id;
    button.setAttribute('aria-label', object.name); button.setAttribute('aria-pressed','false'); button.title = object.name;
    const art = document.createElement('span'); art.className = 'object-art'; art.setAttribute('aria-hidden','true');
    art.style.backgroundPosition = `${(object.id % 4) * 100 / 3}% ${Math.floor(object.id / 4) * 100 / 3}%`;
    button.append(art); button.addEventListener('click', () => selectObject(button));
    return button;
  }));
  el('roundText').textContent = `Round ${round + 1} / ${TOTAL_ROUNDS}`;
  el('levelBadge').textContent = config.name; el('pairCount').textContent = `0 / ${pairsNeeded}`;
  el('mistakeText').textContent = '0 misses'; el('feedback').textContent = '';
  remaining = config.seconds * 1000; updateProgress(); updateHints(); startClock();
  el('objectBoard').firstElementChild.focus({preventScroll:true});
}
function selectObject(button) {
  if (phase !== 'playing' || locked || button.disabled) return;
  if (performance.now() >= deadline) { updateClock(); return; }
  if (button === selected) { clearSelection(); return; }
  button.classList.add('selected'); button.setAttribute('aria-pressed','true');
  if (!selected) { selected = button; el('feedback').textContent = ''; return; }
  if (selected.dataset.object === button.dataset.object) {
    const name = button.title;
    [selected,button].forEach(item => {
      item.classList.remove('selected','hinted'); item.classList.add('matched'); item.disabled = true;
      item.setAttribute('aria-pressed','false'); item.setAttribute('aria-label',`${name}, matched`);
    });
    selected = null; pairsFound++;
    el('pairCount').textContent = `${pairsFound} / ${pairsNeeded}`;
    el('feedback').textContent = `${name} pair matched!`;
    if (pairsFound === pairsNeeded) completeRound(true);
    else el('objectBoard').querySelector('button:not(:disabled)').focus({preventScroll:true});
  } else {
    misses++; locked = true;
    selected.classList.add('wrong'); button.classList.add('wrong');
    el('mistakeText').textContent = `${misses} ${misses === 1 ? 'miss' : 'misses'}`;
    el('feedback').textContent = 'Those objects do not match. Try again.';
    mismatchId = setTimeout(clearSelection, 650);
  }
}
function hint() {
  if (phase !== 'playing' || hints === 0) return;
  if (performance.now() >= deadline) { updateClock(); return; }
  clearSelection();
  const buttons = [...el('objectBoard').querySelectorAll('button:not(:disabled)')];
  const first = buttons.find(button => buttons.some(other => other !== button && other.dataset.object === button.dataset.object));
  if (!first) return;
  el('objectBoard').querySelectorAll('.hinted').forEach(button => button.classList.remove('hinted'));
  buttons.filter(button => button.dataset.object === first.dataset.object).forEach(button => button.classList.add('hinted'));
  hints--; updateHints(); el('feedback').textContent = 'Matching objects highlighted.';
}
function completeRound(passed) {
  if (phase !== 'playing') return;
  stopClock(); clearSelection(); phase = 'round-end'; updateHints();
  history.push({passed,pairs:pairsFound,needed:pairsNeeded,misses}); updateProgress();
  el('roundResultTitle').textContent = passed ? 'All Pairs Found!' : 'Time Is Up!';
  el('roundResultText').textContent = `${pairsFound} / ${pairsNeeded} pairs matched. ${passed ? 'Round passed.' : 'Round not passed.'}`;
  el('nextRoundBtn').textContent = round === TOTAL_ROUNDS - 1 ? 'See Results' : 'Next Round \u2192';
  el('roundDialog').showModal();
}
function pause() {
  if (phase !== 'playing') return;
  updateClock(); if (phase !== 'playing') return;
  stopClock(); clearSelection(); phase = 'paused'; updateHints(); el('pauseDialog').showModal();
}
function resume() {
  if (phase !== 'paused') return;
  el('pauseDialog').close(); phase = 'playing'; updateHints(); startClock(); el('pauseBtn').focus();
}
function changeLevel() {
  stopClock(); clearSelection(); phase = 'levels';
  [el('pauseDialog'),el('roundDialog')].forEach(dialog => { if (dialog.open) dialog.close(); });
  show('levelScreen'); document.querySelector(`[data-level="${level}"]`).focus();
}
function results() {
  stopClock(); phase = 'results'; show('resultsScreen');
  const passed = history.filter(item => item.passed).length;
  el('resultTitle').textContent = passed === TOTAL_ROUNDS ? 'All Rounds Passed!' : 'Quiz Complete!';
  el('resultScore').textContent = `${passed} / ${TOTAL_ROUNDS}`;
  el('totalPairs').textContent = history.reduce((sum,item) => sum + item.pairs,0);
  el('totalMisses').textContent = history.reduce((sum,item) => sum + item.misses,0);
  el('totalHints').textContent = 2 - hints;
  el('resultMessage').textContent = passed === TOTAL_ROUNDS ? 'Great matching!' : 'Play again to pass every round.';
  el('roundReview').replaceChildren(...history.map((item,i) => {
    const row = document.createElement('li');
    row.textContent = `Round ${i+1}: ${item.passed ? 'Passed' : 'Time up'} | ${item.pairs}/${item.needed} pairs | ${item.misses} ${item.misses === 1 ? 'miss' : 'misses'}`;
    return row;
  }));
  el('retryBtn').focus({preventScroll:true});
}
document.querySelectorAll('[data-level]').forEach(button => button.addEventListener('click', () => startQuiz(button.dataset.level)));
el('pauseBtn').addEventListener('click',pause); el('resumeBtn').addEventListener('click',resume);
el('quitBtn').addEventListener('click',changeLevel); el('changeLevelBtn').addEventListener('click',changeLevel);
el('hintBtn').addEventListener('click',hint); el('retryBtn').addEventListener('click', () => startQuiz(level));
el('nextRoundBtn').addEventListener('click', () => {
  if (phase !== 'round-end') return;
  el('roundDialog').close(); round++;
  if (round === TOTAL_ROUNDS) results(); else startRound();
});
el('pauseDialog').addEventListener('cancel', event => { event.preventDefault(); resume(); });
el('roundDialog').addEventListener('cancel', event => event.preventDefault());
document.addEventListener('visibilitychange', () => { if (document.hidden) pause(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && phase === 'playing') pause(); });
if (window.lucide) window.lucide.createIcons();
