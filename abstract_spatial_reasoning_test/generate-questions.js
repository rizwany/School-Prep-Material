const fs = require('fs');
const path = require('path');

const categories = [
  ['shape_sequences', 'Shape Sequences', 'اشکال کی ترتیب', '◆'],
  ['alternating_patterns', 'Alternating Patterns', 'متبادل نمونے', '◐'],
  ['growing_patterns', 'Growing & Shrinking Patterns', 'بڑھتے اور گھٹتے نمونے', '▥'],
  ['number_patterns', 'Visual Number Patterns', 'بصری عددی نمونے', '🔢'],
  ['letter_patterns', 'Letter & Symbol Series', 'حروف اور علامات کی ترتیب', '🔤'],
  ['odd_one_out', 'Odd One Out', 'مختلف شکل کی پہچان', '⊘'],
  ['shape_analogies', 'Shape Analogies', 'اشکال میں مماثلت', '∷'],
  ['mental_rotation', 'Mental Rotation', 'ذہنی گردش', '↻'],
  ['mirror_images', 'Mirror Images', 'آئینے میں عکس', '↔'],
  ['symmetry', 'Symmetry', 'توازن', '◈'],
  ['spatial_directions', 'Spatial Directions', 'مکانی سمتیں', '🧭'],
  ['relative_position', 'Relative Position', 'باہمی مقام', '⌖'],
  ['matrix_reasoning', 'Pattern Matrices', 'نمونوں کے میٹرکس', '▦'],
  ['shape_counting', 'Shape Counting', 'اشکال کی گنتی', '△'],
  ['paper_folding', 'Paper Folding & Holes', 'کاغذ موڑنا اور سوراخ', '◫'],
  ['cube_reasoning', 'Cubes & Opposite Faces', 'مکعب اور مخالف سطحیں', '🎲'],
  ['nets_and_folding', 'Nets & 3D Folding', 'جال اور سہ جہتی تہہ', '✣'],
  ['transformations', 'Rule-Based Transformations', 'قاعدے کے مطابق تبدیلی', '⇢'],
  ['domino_patterns', 'Domino & Pair Patterns', 'ڈومینو اور جوڑی کے نمونے', '▣'],
  ['set_relations', 'Visual Set Relationships', 'بصری مجموعوں کے تعلقات', '◉']
].map(([id, en, ur, icon]) => ({ id, en, ur, icon }));

const E = [], U = [];
const diff = i => i < 8 ? 'easy' : i < 17 ? 'medium' : 'hard';
const rotate = (a, n) => a.slice(n).concat(a.slice(0, n));
const shuffled = (correct, wrong, seed) => {
  const all = [String(correct), ...wrong.map(String)];
  const shift = seed % 4;
  const options = rotate(all, shift);
  return { options, answer: options.indexOf(String(correct)) };
};
function add(cat, i, en, ur) {
  const id = `ASR-${String(E.length + 1).padStart(3, '0')}`;
  const base = { id, category: cat, difficulty: diff(i) };
  E.push({ ...base, ...en });
  U.push({ ...base, ...ur });
}
function pair(cat, i, visual, enPrompt, urPrompt, correct, wrong, enWhy, urWhy) {
  const pick = shuffled(correct, wrong, i + E.length);
  add(cat, i,
    { prompt: enPrompt, visual, options: pick.options, answer: pick.answer, explanation: enWhy },
    { prompt: urPrompt, visual, options: pick.options, answer: pick.answer, explanation: urWhy });
}
function pairBi(cat, i, enVisual, urVisual, enPrompt, urPrompt, enCorrect, enWrong, urCorrect, urWrong, enWhy, urWhy) {
  const seed = i + E.length, enPick = shuffled(enCorrect, enWrong, seed), urPick = shuffled(urCorrect, urWrong, seed);
  add(cat, i,
    { prompt: enPrompt, visual: enVisual, options: enPick.options, answer: enPick.answer, explanation: enWhy },
    { prompt: urPrompt, visual: urVisual, options: urPick.options, answer: urPick.answer, explanation: urWhy });
}

// 1. Shape sequences
for (let i = 0; i < 25; i++) {
  const shapes = rotate(['●', '▲', '■', '◆', '★'], i % 5);
  const step = Math.floor(i / 5) % 3 + 1, shown = 4 + Math.floor(i / 15);
  const seq = Array.from({ length: shown }, (_, k) => shapes[(k * step) % 5]);
  const correct = shapes[(shown * step) % 5];
  pair('shape_sequences', i, `${seq.join('  ')}  ?`, 'Which shape comes next?', 'اگلی شکل کون سی ہوگی؟', correct,
    shapes.filter(x => x !== correct).slice(0, 3), `The sequence moves ${step} place(s) through a repeating five-shape cycle.`, `ترتیب پانچ اشکال کے دہرائے جانے والے چکر میں ہر بار ${step} مقام آگے بڑھتی ہے۔`);
}

// 2. Alternating patterns
for (let i = 0; i < 25; i++) {
  const a = ['○', '□', '△', '◇', '☆'][i % 5], b = ['●', '■', '▲', '◆', '★'][Math.floor(i / 5)];
  const a2 = ['◐', '◒', '◑', '◓', '⊕'][i % 5];
  const seq = [a, b, a2, b, a, b, a2];
  pair('alternating_patterns', i, `${seq.join('  ')}  ?`, 'Two patterns are interleaved. What comes next?', 'دو نمونے باری باری آ رہے ہیں۔ اگلی علامت کیا ہوگی؟', b,
    [a, a2, ['+', '×', '✚'][i % 3]], 'Every second position contains the same filled shape; the next position is one of those even positions.', 'ہر دوسرے مقام پر ایک ہی بھری ہوئی شکل ہے؛ اگلا مقام بھی اسی سلسلے کا حصہ ہے۔');
}

// 3. Growing patterns
for (let i = 0; i < 25; i++) {
  const symbol = ['●', '▲', '■', '◆', '★'][i % 5], start = i % 3 + 1, inc = i % 2 + 1;
  const counts = [start, start + inc, start + inc * 2, start + inc * 3];
  const groups = counts.map(n => symbol.repeat(n)).join('   '), correct = symbol.repeat(start + inc * 4);
  pair('growing_patterns', i, `${groups}   ?`, 'Which group continues the growth rule?', 'کون سا گروہ بڑھنے کے قاعدے کو جاری رکھتا ہے؟', correct,
    [symbol.repeat(start + inc * 3), symbol.repeat(start + inc * 5), symbol.repeat(start + inc * 5 + 1)], `Each group gains ${inc} symbol(s).`, `ہر گروہ میں ${inc} علامت کا اضافہ ہوتا ہے۔`);
}

// 4. Visual number patterns
for (let i = 0; i < 25; i++) {
  const start = 2 + i, step = i % 5 + 2;
  const seq = Array.from({ length: 5 }, (_, k) => start + step * k), correct = start + step * 5;
  pair('number_patterns', i, `${seq.join('  →  ')}  →  ?`, 'Find the next number in the visual path.', 'بصری راستے میں اگلا عدد معلوم کریں۔', correct,
    [correct - 1, correct + 1, correct + step], `The path adds ${step} at every arrow.`, `ہر تیر پر ${step} کا اضافہ ہوتا ہے۔`);
}

// 5. Letter and symbol series
for (let i = 0; i < 25; i++) {
  const start = i % 13, step = Math.floor(i / 13) + 1;
  const letters = Array.from({ length: 5 }, (_, k) => String.fromCharCode(65 + start + k * step));
  const correct = String.fromCharCode(65 + start + 5 * step);
  pair('letter_patterns', i, `${letters.join('  ')}  ?`, 'Which letter continues the series?', 'کون سا حرف ترتیب کو جاری رکھتا ہے؟', correct,
    [String.fromCharCode(correct.charCodeAt(0) - 1), String.fromCharCode(correct.charCodeAt(0) + 1), String.fromCharCode(correct.charCodeAt(0) + step + 1)], `Move forward ${step} letter(s) each time.`, `ہر بار حروفِ تہجی میں ${step} حرف آگے بڑھیں۔`);
}

// 6. Odd one out
for (let i = 0; i < 25; i++) {
  const n = i + 2, value = i % 4 + 2;
  const same = [`${n}▲ = ${n * value}`, `${n + 1}▲ = ${(n + 1) * value}`, `${n + 2}▲ = ${(n + 2) * value}`];
  const odd = `${n + 3}▲ = ${(n + 3) * value + 1}`;
  pair('odd_one_out', i, [...same, odd].join('   |   '), 'Which panel breaks the common rule?', 'کون سا خانہ مشترک قاعدے کو توڑتا ہے؟', odd,
    same, `In three panels, each triangle is worth ${value}; only the selected panel does not follow that rule.`, `تین خانوں میں ہر مثلث کی قیمت ${value} ہے؛ صرف منتخب خانہ اس قاعدے پر عمل نہیں کرتا۔`);
}

// 7. Shape analogies
for (let i = 0; i < 25; i++) {
  const open = ['○', '□', '△', '◇', '☆'][i % 5], filled = ['●', '■', '▲', '◆', '★'][i % 5];
  const open2 = ['○', '□', '△', '◇', '☆'][(i + 2) % 5], filled2 = ['●', '■', '▲', '◆', '★'][(i + 2) % 5];
  const count = Math.floor(i / 5) + 1;
  pair('shape_analogies', i, `${open.repeat(count)} : ${filled.repeat(count)}  ∷  ${open2.repeat(count)} : ?`, 'Apply the same relationship to the second pair.', 'دوسری جوڑی پر بھی وہی تعلق لاگو کریں۔', filled2.repeat(count),
    [open2.repeat(count), filled.repeat(count), ['+', '×', '◎'][i % 3].repeat(count)], 'Every outline shape becomes filled while its form and count stay unchanged.', 'ہر خالی شکل بھری ہوئی بنتی ہے جبکہ اس کی ساخت اور تعداد نہیں بدلتی۔');
}

// 8. Mental rotation
for (let i = 0; i < 25; i++) {
  const arrows = ['↑', '→', '↓', '←'], start = i % 4, turns = i % 3 + 1;
  const count = Math.floor(i / 12) + 1, correct = arrows[(start + turns) % 4].repeat(count);
  pair('mental_rotation', i, `${arrows[start].repeat(count)}  ↻ ${turns * 90}°  =  ?`, `Rotate the arrow group ${turns * 90}° clockwise.`, `تیر کے گروہ کو گھڑی کی سمت ${turns * 90} درجے گھمائیں۔`, correct,
    arrows.filter(x => x.repeat(count) !== correct).slice(0, 3).map(x=>x.repeat(count)), `A ${turns * 90}° clockwise turn moves every arrow ${turns} quarter-turn(s).`, `گھڑی کی سمت ${turns * 90} درجے کی گردش ہر تیر کو ${turns} چوتھائی چکر گھماتی ہے۔`);
}

// 9. Mirror images
for (let i = 0; i < 25; i++) {
  const left = ['◀', '◁', '↙', '↖', '⊲'][i % 5], right = ['▶', '▷', '↘', '↗', '⊳'][i % 5];
  const count = Math.floor(i / 10) + 1, source = (i % 2 ? left : right).repeat(count), correct = (i % 2 ? right : left).repeat(count);
  const mirrorWrong = [source, '↑', '↓', '○'].filter((v, n, all) => v !== correct && all.indexOf(v) === n).slice(0, 3);
  pair('mirror_images', i, `${source}   │ mirror │   ?`, 'Choose the left-to-right mirror image.', 'دائیں بائیں آئینے والا عکس منتخب کریں۔', correct,
    mirrorWrong, 'A vertical mirror reverses left and right but not top and bottom.', 'عمودی آئینہ دائیں اور بائیں کو الٹتا ہے، اوپر اور نیچے کو نہیں۔');
}

// 10. Symmetry
const symItems = [
  ['○ (circle)', 0, 'infinitely many', 'لامحدود'], ['□ (square)', 4, '4', '4'], ['△ (equilateral triangle)', 3, '3', '3'],
  ['▭ (non-square rectangle)', 2, '2', '2'], ['◇ (non-square rhombus)', 2, '2', '2'], ['⬠ (regular pentagon)', 5, '5', '5'],
  ['⬡ (regular hexagon)', 6, '6', '6'], ['regular heptagon', 7, '7', '7'], ['regular octagon', 8, '8', '8'], ['⬭ (ellipse)', 2, '2', '2'],
  ['isosceles triangle', 1, '1', '1'], ['scalene triangle', 0, '0', '0'], ['semicircle', 1, '1', '1'], ['♥ (ideal heart)', 1, '1', '1'],
  ['★ (regular five-point star)', 5, '5', '5'], ['＋ (equal-armed plus)', 4, '4', '4'], ['X (equal diagonal arms)', 2, '2', '2'],
  ['kite', 1, '1', '1'], ['parallelogram', 0, '0', '0'], ['isosceles trapezoid', 1, '1', '1'], ['regular nonagon', 9, '9', '9'],
  ['regular decagon', 10, '10', '10'], ['↑ (up arrow)', 1, '1', '1'], ['upright crescent', 1, '1', '1'], ['unequal zigzag', 0, '0', '0']
];
for (let i = 0; i < 25; i++) {
  const [shape, numeric, label, urLabel] = symItems[i % symItems.length];
  const wrong = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'infinitely many'].filter(x => x !== label).slice(0, 3);
  pairBi('symmetry', i, shape, shape, 'How many lines of symmetry does this ideal shape have?', 'اس مثالی شکل میں توازن کی کتنی لکیریں ہیں؟', label,
    wrong, urLabel, wrong, `${shape} has ${label} line(s) of symmetry.`, `${shape} میں توازن کی لکیروں کی تعداد ${urLabel} ہے۔`);
}

// 11. Spatial directions
const dirs = [[0,1,'north','شمال'],[1,0,'east','مشرق'],[0,-1,'south','جنوب'],[-1,0,'west','مغرب']];
for (let i = 0; i < 25; i++) {
  const a = dirs[i % 4], b = dirs[Math.floor(i / 4) % 4], m = i + 1, n = i % 5 + 1;
  const x = a[0]*m + b[0]*n, y = a[1]*m + b[1]*n;
  const answer = x === 0 && y === 0 ? 'starting point' : `${Math.abs(x)} ${x < 0 ? 'west' : x > 0 ? 'east' : ''} ${Math.abs(y)} ${y < 0 ? 'south' : y > 0 ? 'north' : ''}`.replace(/0\s+(east|west|north|south)\s*/g,'').trim();
  const answerUr = x === 0 && y === 0 ? 'ابتدائی مقام' : `${Math.abs(x)} ${x < 0 ? 'مغرب' : x > 0 ? 'مشرق' : ''} ${Math.abs(y)} ${y < 0 ? 'جنوب' : y > 0 ? 'شمال' : ''}`.replace(/0\s+(مشرق|مغرب|شمال|جنوب)\s*/g,'').trim();
  const directionDistractors = ['starting point', `${m} north`, `${m} south`, `${n} east`, `${n} west`, `${m} east ${n} north`]
    .filter((v, index, all) => v !== answer && all.indexOf(v) === index).slice(0, 3);
  const p = shuffled(answer, directionDistractors, i + E.length);
  add('spatial_directions', i,
    { prompt: `Move ${m} step(s) ${a[2]}, then ${n} step(s) ${b[2]}. Where are you from the start?`, visual: 'N ↑   W ←  +  → E   ↓ S', options:p.options, answer:p.answer, explanation:`Combining both moves gives the displacement: ${answer}.` },
    { prompt: `${m} قدم ${a[3]}، پھر ${n} قدم ${b[3]} جائیں۔ آپ آغاز سے کہاں ہیں؟`, visual:'شمال ↑   مغرب ←  +  → مشرق   ↓ جنوب', options:p.options.map(v=>v===answer?answerUr:v==='starting point'?'ابتدائی مقام':v.replace('north','شمال').replace('south','جنوب').replace('east','مشرق').replace('west','مغرب')), answer:p.answer, explanation:`دونوں حرکتوں کو ملانے پر مقام ${answerUr} بنتا ہے۔` });
}

// 12. Relative position
for (let i = 0; i < 25; i++) {
  const names = [`P${i+1}`, `Q${i+1}`, `R${i+1}`], vertical = i % 2 === 0;
  const rel = vertical ? 'above' : 'left of', urRel = vertical ? 'اوپر' : 'بائیں';
  const opposite = vertical ? 'below' : 'right of', urOpp = vertical ? 'نیچے' : 'دائیں';
  const p = shuffled(`${names[0]} is ${rel} ${names[2]}`, [`${names[0]} is ${opposite} ${names[2]}`, `${names[0]} and ${names[2]} overlap`, 'Cannot be determined'], i + E.length);
  add('relative_position', i,
    { prompt:`${names[0]} is ${rel} ${names[1]}. ${names[1]} is ${rel} ${names[2]}. What must be true?`, visual:`${names[0]}  ${vertical?'↑':'←'}  ${names[1]}  ${vertical?'↑':'←'}  ${names[2]}`, options:p.options, answer:p.answer, explanation:`The same directional relation is transitive, so ${names[0]} is ${rel} ${names[2]}.`},
    { prompt:`${names[0]}، ${names[1]} کے ${urRel} ہے۔ ${names[1]}، ${names[2]} کے ${urRel} ہے۔ کیا لازماً درست ہے؟`, visual:`${names[0]}  ${vertical?'↑':'←'}  ${names[1]}  ${vertical?'↑':'←'}  ${names[2]}`, options:p.options.map(v=>v.replace(' is above ','، ').replace(' is below ','، ').replace(' is left of ','، ').replace(' is right of ','، ').replace(' and ',' اور ').replace(' overlap',' ایک جگہ ہیں').replace('Cannot be determined','معلوم نہیں کیا جا سکتا') + (v.includes(`is ${rel}`)?` کے ${urRel} ہے`:v.includes(`is ${opposite}`)?` کے ${urOpp} ہے`:'')), answer:p.answer, explanation:`ایک ہی سمتی تعلق آگے منتقل ہوتا ہے، اس لیے ${names[0]}، ${names[2]} کے ${urRel} ہے۔`});
}

// 13. Pattern matrices
for (let i = 0; i < 25; i++) {
  const pool=['○','△','□','◇','☆','⬡'], start=i%5, step=Math.floor(i/5)+1;
  const a=pool[start], b=pool[(start+step)%6], c=pool[(start+step*2)%6], correct=pool[(start+step*3)%6];
  pair('matrix_reasoning', i, `${a}   ${b}\n${c}   ?`, `Move ${step} place(s) through the repeating shape cycle in every cell. Complete the matrix.`, `ہر خانے میں دہرائے جانے والے شکلوں کے چکر میں ${step} مقام آگے بڑھیں۔ میٹرکس مکمل کریں۔`, correct,
    pool.filter(x=>x!==correct).slice(0,3), `Each cell advances ${step} place(s) in the same six-shape cycle.`, `ہر خانہ اسی چھ اشکال کے چکر میں ${step} مقام آگے بڑھتا ہے۔`);
}

// 14. Shape counting
for (let i = 0; i < 25; i++) {
  const rows = Math.floor(i / 5) + 2, cols = i % 5 + 2, correct = rows * cols;
  pairBi('shape_counting', i, `${rows} rows × ${cols} columns of separate squares`, `${rows} قطاریں × ${cols} کالم الگ مربع`, 'How many small squares are shown in this rectangular array?', 'اس مستطیل ترتیب میں کتنے چھوٹے مربع ہیں؟', correct,
    [correct - 1, correct + 1, correct + rows], correct, [correct - 1, correct + 1, correct + rows], `There are ${rows} × ${cols} = ${correct} separate squares.`, `${rows} × ${cols} = ${correct} الگ مربع ہیں۔`);
}

// 15. Paper folding
for (let i = 0; i < 25; i++) {
  const folds = Math.floor(i / 5) + 1, punches = i % 5 + 1, correct = punches * 2 ** folds;
  pairBi('paper_folding', i, `fold × ${folds}   • punch × ${punches}   → unfold`, `تہہ × ${folds}   • سوراخ × ${punches}   → کھولیں`, 'Each fold doubles every non-crease hole. How many holes appear after unfolding?', 'ہر تہہ کھولنے پر ہر غیر مرکزی سوراخ دوگنا ہوتا ہے۔ کھولنے کے بعد کتنے سوراخ ہوں گے؟', correct,
    [correct - punches, correct + punches, correct + punches * 2], correct, [correct - punches, correct + punches, correct + punches * 2], `${punches} punch(es) are copied across ${folds} folds: ${punches} × 2^${folds} = ${correct}.`, `${punches} سوراخ ${folds} تہوں پر نقل ہوتے ہیں: ${punches} × 2^${folds} = ${correct}۔`);
}

// 16. Cube reasoning
const cubeLabels = [
  ['A','B','C','D','E','F'], ['1','2','3','4','5','6'], ['P','Q','R','S','T','U'], ['●','▲','■','◆','★','⬡'], ['G','H','J','K','L','M']
];
for (let i = 0; i < 25; i++) {
  const faces = rotate(cubeLabels[Math.floor(i / 5)], i % 5), opposite = `${faces[0]} and ${faces[1]}`;
  const urOpposite = `${faces[0]} اور ${faces[1]}`;
  pairBi('cube_reasoning', i, `${faces[0]} ↔ ${faces[1]} (opposite faces)`, `${faces[0]} ↔ ${faces[1]} (مخالف سطحیں)`, `Which pair cannot share an edge if ${faces[0]} is opposite ${faces[1]}?`, `اگر ${faces[0]}، ${faces[1]} کے مخالف ہے تو کون سی جوڑی ایک کنارہ مشترک نہیں کر سکتی؟`, opposite,
    [`${faces[0]} and ${faces[2]}`, `${faces[1]} and ${faces[3]}`, `${faces[2]} and ${faces[4]}`], urOpposite,
    [`${faces[0]} اور ${faces[2]}`, `${faces[1]} اور ${faces[3]}`, `${faces[2]} اور ${faces[4]}`], 'Opposite faces never meet along an edge.', 'مخالف سطحیں کبھی ایک کنارے پر نہیں ملتیں۔');
}

// 17. Nets and folding
const solids = [
  ['cube','مکعب',6], ['triangular prism','تکونی منشور',5], ['square pyramid','مربع اہرام',5], ['tetrahedron','چار سطحی جسم',4], ['rectangular prism','مستطیل منشور',6],
  ['pentagonal prism','پنج ضلعی منشور',7], ['hexagonal prism','شش ضلعی منشور',8], ['octagonal prism','آٹھ ضلعی منشور',10], ['triangular pyramid','تکونی اہرام',4], ['pentagonal pyramid','پنج ضلعی اہرام',6],
  ['hexagonal pyramid','شش ضلعی اہرام',7], ['octagonal pyramid','آٹھ ضلعی اہرام',9], ['dodecahedron','بارہ سطحی جسم',12], ['icosahedron','بیس سطحی جسم',20], ['octahedron','آٹھ سطحی جسم',8],
  ['heptagonal prism','سات ضلعی منشور',9], ['nonagonal prism','نو ضلعی منشور',11], ['decagonal prism','دس ضلعی منشور',12], ['heptagonal pyramid','سات ضلعی اہرام',8], ['nonagonal pyramid','نو ضلعی اہرام',10],
  ['decagonal pyramid','دس ضلعی اہرام',11], ['triangular antiprism','تکونی ضد منشور',8], ['cuboctahedron','مکعبی آٹھ سطحی جسم',14], ['truncated tetrahedron','کٹا ہوا چار سطحی جسم',8], ['truncated cube','کٹا ہوا مکعب',14]
];
for (let i = 0; i < 25; i++) {
  const [solid, urSolid, faceCount] = solids[i], correct = `${faceCount} faces`;
  pairBi('nets_and_folding', i, `NET  →  ${solid}`, `جال  →  ${urSolid}`, `How many flat faces must a complete net of a ${solid} contain?`, `${urSolid} کے مکمل جال میں کتنی چپٹی سطحیں ہونی چاہئیں؟`, correct,
    [`${faceCount-1} faces`,`${faceCount+1} faces`,`${faceCount+2} faces`], `${faceCount} سطحیں`,
    [`${faceCount-1} سطحیں`,`${faceCount+1} سطحیں`,`${faceCount+2} سطحیں`], `A ${solid} has ${faceCount} faces, all of which appear in its net.`, `${urSolid} کی ${faceCount} سطحیں ہیں اور سب اس کے جال میں نظر آتی ہیں۔`);
}

// 18. Rule-based transformations
for (let i = 0; i < 25; i++) {
  const shapes = ['○','△','□','◇','☆'], a=shapes[i%5], b=shapes[Math.floor(i/5)], c=shapes[(i%5+Math.floor(i/5)+1)%5];
  const correct = `${c}${b}`;
  const transformWrong = shapes.flatMap(x=>shapes.map(y=>`${x}${y}`)).filter(x=>x!==correct).slice(i%10, i%10+3);
  pair('transformations', i, `${a}${b}  →  ${b}${a}\n${b}${c}  →  ?`, 'Infer and apply the transformation rule.', 'تبدیلی کا قاعدہ معلوم کر کے لاگو کریں۔', `${c}${b}`,
    transformWrong, 'The rule swaps the left and right symbols.', 'قاعدہ بائیں اور دائیں علامتوں کی جگہ بدلتا ہے۔');
}

// 19. Domino and pair patterns
for (let i = 0; i < 25; i++) {
  const a=i%6, b=(i*2+1)%7, delta=i%3+1, correct=`${(a+3*delta)%7}|${(b+3*delta)%7}`;
  const prior=[0,1,2].map(k=>`${(a+k*delta)%7}|${(b+k*delta)%7}`);
  pair('domino_patterns', i, `${prior.join('   ')}   ?`, 'Both halves follow the same step. Which domino comes next?', 'دونوں حصے ایک ہی قدم کے قاعدے پر چلتے ہیں۔ اگلا ڈومینو کون سا ہے؟', correct,
    [`${(a+3*delta)%7}|${(b+2*delta)%7}`,`${(a+2*delta)%7}|${(b+3*delta)%7}`,`${a}|${b}`], `Add ${delta} to both halves, wrapping after 6.`, `دونوں حصوں میں ${delta} جمع کریں اور 6 کے بعد دوبارہ 0 سے شروع کریں۔`);
}

// 20. Visual set relationships
const setItems = [
  ['squares','square','مربع'], ['triangles','triangle','مثلث'], ['stars','star','ستارے'], ['circles','circle','دائرے'], ['diamonds','diamond','ہیرے'],
  ['pentagons','pentagon','پنج ضلعی اشکال'], ['hexagons','hexagon','شش ضلعی اشکال'], ['arrows','arrow','تیر'], ['crescents','crescent','ہلال'], ['ovals','oval','بیضوی اشکال'],
  ['rectangles','rectangle','مستطیل'], ['cubes','cube','مکعب'], ['prisms','prism','منشور'], ['pyramids','pyramid','اہرام'], ['polygons','polygon','کثیر الاضلاع'],
  ['dots','dot','نقطے'], ['crosses','cross','صلیبی نشان'], ['spirals','spiral','مرغولے'], ['rings','ring','حلقے'], ['cones','cone','مخروط'],
  ['cylinders','cylinder','سلنڈر'], ['trapezoids','trapezoid','ذوزنقے'], ['kites','kite','پتنگ نما اشکال'], ['rhombuses','rhombus','معین'], ['semicircles','semicircle','نصف دائرے']
];
for (let i = 0; i < 25; i++) {
  const [item, singular, urItem]=setItems[i];
  pairBi('set_relations', i, `${item} ⊂ blue shapes ⊂ figures`, `${urItem} ⊂ نیلی اشکال ⊂ تمام اشکال`, `If every ${singular} is blue and every blue shape is a figure, which relation must be true?`, `اگر ہر ${urItem} نیلا ہے اور ہر نیلی شکل ایک شکل ہے تو کون سا تعلق لازماً درست ہے؟`, `All ${item} are figures`,
    [`All figures are ${item}`,`No ${item} are figures`,`Some ${item} are not blue`], `تمام ${urItem} اشکال ہیں`,
    [`تمام اشکال ${urItem} ہیں`,`کوئی ${urItem} شکل نہیں ہے`,`کچھ ${urItem} نیلے نہیں ہیں`], 'Membership passes through nested sets: the smallest set is contained in the largest.', 'رکنیت باہم شامل مجموعوں میں آگے منتقل ہوتی ہے؛ سب سے چھوٹا مجموعہ سب سے بڑے میں شامل ہے۔');
}

if (E.length !== 500 || U.length !== 500) throw new Error(`Expected 500 questions per language, got ${E.length}/${U.length}`);
const meta = lang => ({
  title: lang === 'en' ? 'Abstract & Spatial Reasoning Test' : 'تجریدی اور مکانی استدلال کا امتحان',
  description: lang === 'en'
    ? '500 objective puzzles covering visual patterns, sequences, transformations, spatial relationships, and closely related reasoning skills.'
    : 'بصری نمونوں، ترتیب، تبدیلیوں، مکانی تعلقات اور متعلقہ استدلالی مہارتوں پر 500 معروضی پہیلیاں۔',
  totalQuestions: 500,
  categories: categories.map(c => ({ id:c.id, label:lang==='en'?c.en:c.ur, icon:c.icon }))
});
const out = path.join(__dirname, 'assets');
fs.mkdirSync(out, { recursive:true });
fs.writeFileSync(path.join(out,'questions.json'), JSON.stringify({meta:meta('en'),questions:E}, null, 2)+'\n');
fs.writeFileSync(path.join(out,'questions-urdu.json'), JSON.stringify({meta:meta('ur'),questions:U}, null, 2)+'\n');
console.log(`Generated ${E.length} English and ${U.length} Urdu questions across ${categories.length} subtopics.`);
