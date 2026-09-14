'use strict';
const types = {
  'word-scramble': { title: 'Word Scramble', prompt: 'Which word uses all these letters?' },
  'odd-one-out': { title: 'Odd One Out', prompt: 'Which item does not belong?' },
  'missing-number': { title: 'Missing Number', prompt: 'Which number completes the sequence?' }
};
const requestedType = new URLSearchParams(location.search).get('type');
const type = Object.hasOwn(types, requestedType) ? requestedType : 'word-scramble';
const el = id => document.getElementById(id);
const shuffle = items => {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};
const integer = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
const words = {
  easy: ['APPLE','HOUSE','TRAIN','WATER','CHAIR','BREAD','MOUSE','PLANT','CLOUD','BEACH','TIGER','HORSE','MUSIC','CLOCK','GRAPE'],
  hard: ['ELEPHANT','MOUNTAIN','COMPUTER','UMBRELLA','SANDWICH','HOSPITAL','NOTEBOOK','TRIANGLE','CALENDAR','KEYBOARD','DINOSAUR','BUTTERFLY','TELESCOPE','CHOCOLATE','ASTRONAUT']
};
const groups = {
  easy: [
    [['Apple','Banana','Grape'],'Carrot','The other three are fruits.'],
    [['Cat','Dog','Horse'],'Sparrow','The other three are mammals.'],
    [['Red','Blue','Green'],'Circle','The other three are colors.'],
    [['Circle','Square','Triangle'],'Yellow','The other three are shapes.'],
    [['Car','Bus','Truck'],'Boat','The other three are road vehicles.'],
    [['Monday','Friday','Sunday'],'January','The other three are days of the week.'],
    [['Shirt','Coat','Sock'],'Spoon','The other three are clothing.'],
    [['Piano','Drum','Guitar'],'Camera','The other three are musical instruments.'],
    [['Spoon','Fork','Knife'],'Pillow','The other three are eating utensils.'],
    [['Rose','Tulip','Daisy'],'Oak','The other three are flowers.'],
    [['Winter','Summer','Spring'],'August','The other three are seasons.'],
    [['Eagle','Parrot','Owl'],'Rabbit','The other three are birds.']
  ],
  hard: [
    [['2','3','5'],'9','The other three are prime numbers.'],
    [['16','25','36'],'30','The other three are perfect squares.'],
    [['8','27','64'],'49','The other three are perfect cubes.'],
    [['12','18','24'],'28','The other three are multiples of 6.'],
    [['Mercury','Venus','Mars'],'Moon','The other three are planets.'],
    [['Iron','Copper','Gold'],'Oxygen','The other three are metals.'],
    [['Meter','Kilometer','Centimeter'],'Kilogram','The other three measure length.'],
    [['Triangle','Square','Pentagon'],'Sphere','The other three are flat polygons.'],
    [['Whale','Dolphin','Seal'],'Shark','The other three are mammals.'],
    [['Liter','Milliliter','Gallon'],'Second','The other three measure volume.'],
    [['Violin','Cello','Guitar'],'Flute','The other three are string instruments.'],
    [['Asia','Africa','Europe'],'Brazil','The other three are continents.']
  ]
};
let level = 'easy', questions = [], index = 0, score = 0, responses = [], answered = false;
document.title = `${types[type].title} | LearnPad`;
el('title').textContent = types[type].title;
function show(screen) {
  ['setup','game','results'].forEach(id => el(id).hidden = id !== screen);
}
function makeQuestions() {
  if (type === 'word-scramble') return shuffle(words[level]).slice(0,10).map(word => {
    let letters = shuffle([...word]).join('');
    if (letters === word) letters = word.slice(1) + word[0];
    const distractors = shuffle(words[level].filter(other => other !== word && other.length === word.length));
    const extra = shuffle(words[level].filter(other => other !== word && !distractors.includes(other)));
    return { visual: [...letters], answer: word, options: shuffle([word,...distractors,...extra].slice(0,4)), explanation: `The letters spell ${word}.` };
  });
  if (type === 'odd-one-out') return shuffle(groups[level]).slice(0,10).map(([members,answer,explanation]) => ({visual: [], answer, options: shuffle([...members,answer]), explanation}));
  return Array.from({length:10}, (_, i) => {
    const start = integer(1, level === 'hard' ? 12 : 15), step = integer(2,level === 'hard' ? 9 : 5);
    const mode = level === 'hard' ? i % 3 : i % 2;
    let sequence, explanation;
    if (mode === 0) {
      sequence = Array.from({length:5}, (_, n) => start + n * step);
      explanation = `Add ${step} each time.`;
    } else if (mode === 1 && level === 'easy') {
      sequence = Array.from({length:5}, (_, n) => start + (4-n) * step);
      explanation = `Subtract ${step} each time.`;
    } else if (mode === 1) {
      const factor = integer(2,3);
      sequence = Array.from({length:5}, (_, n) => start * factor ** n);
      explanation = `Multiply by ${factor} each time.`;
    } else {
      sequence = [start];
      for (let n=0;n<4;n++) sequence.push(sequence[n]+step+n);
      explanation = `Add ${step}, then ${step+1}, then ${step+2}, then ${step+3}.`;
    }
    const missing = integer(1,4), answer = sequence[missing];
    const options = shuffle([answer, answer+1, answer+step, Math.max(0,answer-step)]);
    sequence[missing] = '?';
    return {visual: sequence.map(String), answer: String(answer), options: options.map(String), explanation};
  });
}
function start(selectedLevel) {
  level = selectedLevel; questions = makeQuestions(); index = 0; score = 0; responses = [];
  show('game'); render();
}
function render() {
  answered = false;
  const question = questions[index];
  el('round').textContent = `${level === 'easy' ? 'Easy' : 'Hard'} | ${index+1} / 10`;
  el('score').textContent = `Score: ${score}`;
  el('progress').value = index;
  el('prompt').textContent = types[type].prompt;
  el('visual').replaceChildren(...question.visual.map(value => {
    const tile = document.createElement('span'); tile.className = 'tile'; tile.textContent = value; return tile;
  }));
  el('visual').hidden = !question.visual.length;
  el('answers').replaceChildren(...question.options.map(option => {
    const button = document.createElement('button'); button.textContent = option;
    button.addEventListener('click', () => answer(option)); return button;
  }));
  el('feedback').textContent = ''; el('next').hidden = true;
  el('next').textContent = index === 9 ? 'See Results' : 'Next Question \u2192';
}
function answer(selected) {
  if (answered) return;
  answered = true;
  const question = questions[index], correct = selected === question.answer;
  if (correct) score++;
  responses.push({question,selected,correct});
  [...el('answers').children].forEach(button => {
    button.disabled = true;
    if (button.textContent === question.answer) button.classList.add('correct');
    else if (button.textContent === selected) button.classList.add('wrong');
  });
  el('score').textContent = `Score: ${score}`; el('progress').value = index+1;
  el('feedback').textContent = `${correct ? 'Correct!' : `Correct answer: ${question.answer}.`} ${question.explanation}`;
  el('next').hidden = false; el('next').focus();
}
function finish() {
  show('results'); el('finalScore').textContent = `${score} / 10`;
  el('resultMessage').textContent = score >= 8 ? 'Great work!' : 'Keep practicing!';
  el('review').replaceChildren(...responses.map(({question,selected,correct}) => {
    const item = document.createElement('li');
    item.textContent = `${correct ? 'Correct' : 'Incorrect'}: ${question.visual.length ? question.visual.join(' ') : question.options.join(', ')}`;
    const detail = document.createElement('span');
    detail.textContent = `Your answer: ${selected}. Correct answer: ${question.answer}. ${question.explanation}`;
    item.append(detail); return item;
  }));
  el('retry').focus();
}
document.querySelectorAll('[data-level]').forEach(button => button.addEventListener('click',()=>start(button.dataset.level)));
el('next').addEventListener('click',()=>{ if (!answered) return; if (++index === questions.length) finish(); else render(); });
el('retry').addEventListener('click',()=>start(level));
['quit','change'].forEach(id => el(id).addEventListener('click',()=>{show('setup');document.querySelector('[data-level]').focus();}));
