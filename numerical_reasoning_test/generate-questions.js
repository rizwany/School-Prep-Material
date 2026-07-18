'use strict';
const fs = require('fs');
const path = require('path');

/* ═══════════════════════ helpers ═══════════════════════ */
function rnd(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
function pick(arr) { return arr[rnd(0, arr.length - 1)]; }
function gcd(a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { [a, b] = [b, a % b]; } return a || 1; }
function shuffle(a) { const arr = [...a]; for (let i = arr.length - 1; i > 0; i--) { const j = rnd(0, i);[arr[i], arr[j]] = [arr[j], arr[i]]; } return arr; }
function uniq(arr) { return [...new Set(arr)]; }

function buildOptions(correct, distractors) {
  const pool = uniq(distractors.filter(d => String(d) !== String(correct)));
  const chosen = shuffle(pool).slice(0, 3);
  while (chosen.length < 3) {
    const filler = typeof correct === 'number' ? correct + rnd(-9, 9) || correct + 7 : correct + '_x';
    if (String(filler) !== String(correct) && !chosen.includes(filler)) chosen.push(filler);
  }
  const options = shuffle([correct, ...chosen]).map(String);
  const answerIndex = options.indexOf(String(correct));
  return { options, answerIndex };
}

function numDistractors(correct, spread) {
  const s = spread || Math.max(2, Math.round(correct * 0.15));
  const out = [];
  let guard = 0;
  while (out.length < 6 && guard < 60) {
    guard++;
    const d = correct + pick([-1, 1]) * rnd(1, s);
    if (d >= 0 && d !== correct && !out.includes(d)) out.push(d);
  }
  return out;
}

/* ═══════════════════════ category meta ═══════════════════════ */
const CATEGORIES = [
  { id: 'percentages', en: 'Percentages', ur: 'فیصد (Percentages)', icon: '📊' },
  { id: 'ratios_proportions', en: 'Ratios & Proportions', ur: 'تناسب (Ratios & Proportions)', icon: '⚖️' },
  { id: 'averages_statistics', en: 'Averages & Statistics', ur: 'اوسط اور اعداد و شمار (Averages & Statistics)', icon: '📈' },
  { id: 'data_interpretation', en: 'Data Interpretation', ur: 'اعداد و شمار کی تشریح (Data Interpretation)', icon: '🗂️' },
  { id: 'graphs_charts', en: 'Graphs & Charts', ur: 'گراف اور چارٹس (Graphs & Charts)', icon: '📉' },
  { id: 'word_problems', en: 'Word Problems', ur: 'حساب کے سوالی مسائل (Word Problems)', icon: '📝' },
  { id: 'number_series', en: 'Number Series & Patterns', ur: 'عددی ترتیب اور نمونے (Number Series & Patterns)', icon: '🔢' },
  { id: 'fractions_decimals', en: 'Fractions & Decimals', ur: 'کسور اور اعشاریہ (Fractions & Decimals)', icon: '➗' },
  { id: 'interest_profit_loss', en: 'Interest, Profit & Loss', ur: 'سود، نفع اور نقصان (Interest, Profit & Loss)', icon: '💰' },
  { id: 'speed_time_distance', en: 'Speed, Time, Distance & Estimation', ur: 'رفتار، وقت، فاصلہ اور تخمینہ (Speed, Time, Distance & Estimation)', icon: '⏱️' },
];

const LEVELS_EN = [
  { min: 90, max: 100.01, label: 'Excellent', emoji: '🏆', desc: "You handle numerical data, percentages, and word problems with real confidence and accuracy. This is a strong, reliable skill for you." },
  { min: 75, max: 90, label: 'Strong', emoji: '💪', desc: "You solve most numerical reasoning problems correctly and efficiently. A little extra practice on trickier multi-step questions will sharpen this further." },
  { min: 60, max: 75, label: 'Good', emoji: '👍', desc: "You have a solid grasp of the fundamentals, but certain question types — like data interpretation or multi-step word problems — could use more practice." },
  { min: 45, max: 60, label: 'Developing', emoji: '🌱', desc: "Your results are mixed — strong in some areas, shaky in others. Focused practice on your weaker subtopics will help a lot." },
  { min: 30, max: 45, label: 'Needs Practice', emoji: '⚠️', desc: "Numerical reasoning tasks are currently challenging for you. Regular practice with percentages, ratios, and basic word problems will build confidence." },
  { min: 0, max: 30, label: 'Needs Foundational Review', emoji: '📚', desc: "This is a good starting point — going back over basic arithmetic, percentages, and fractions will build the foundation for stronger numerical reasoning." },
];

const LEVELS_UR = [
  { min: 90, max: 100.01, label: 'شاندار', emoji: '🏆', desc: 'آپ عددی اعداد و شمار، فیصد اور حسابی مسائل کو نہایت درستگی اور اعتماد کے ساتھ حل کرتے ہیں۔ یہ آپ کی ایک مضبوط اور قابلِ اعتماد صلاحیت ہے۔' },
  { min: 75, max: 90, label: 'مضبوط', emoji: '💪', desc: 'آپ زیادہ تر عددی استدلال کے سوالات درست اور تیزی سے حل کرتے ہیں۔ مشکل کثیر مرحلہ سوالات پر تھوڑی مزید مشق فائدہ مند ہوگی۔' },
  { min: 60, max: 75, label: 'اچھا', emoji: '👍', desc: 'آپ کو بنیادی باتوں پر اچھی گرفت حاصل ہے، لیکن کچھ اقسام کے سوالات — جیسے اعداد و شمار کی تشریح یا کثیر مرحلہ مسائل — پر مزید مشق کی ضرورت ہے۔' },
  { min: 45, max: 60, label: 'ترقی پذیر', emoji: '🌱', desc: 'آپ کے نتائج ملے جلے ہیں — کچھ شعبوں میں مضبوط اور کچھ میں کمزور۔ اپنے کمزور موضوعات پر توجہ مرکوز مشق آپ کی کافی مدد کرے گی۔' },
  { min: 30, max: 45, label: 'مشق کی ضرورت ہے', emoji: '⚠️', desc: 'عددی استدلال کے کام آپ کے لیے فی الحال مشکل ہیں۔ فیصد، تناسب اور بنیادی حسابی مسائل کی باقاعدہ مشق اعتماد پیدا کرے گی۔' },
  { min: 0, max: 30, label: 'بنیادی نظرِ ثانی درکار ہے', emoji: '📚', desc: 'یہ ایک اچھی ابتدا ہے — بنیادی حساب، فیصد اور کسور کا دوبارہ جائزہ لینے سے آپ کا عددی استدلال مزید مضبوط ہوگا۔' },
];

/* ═══════════════════════ per-category generators ═══════════════════════
   Each returns { en:{text,table?,chart?,options,answerIndex,explanation}, ur:{...} }
   All numeric answers are computed in code, so correctness is guaranteed. */

const GEN = {};

/* 1. PERCENTAGES */
GEN.percentages = [
  () => {
    const a = rnd(1, 19), b = rnd(1, 30);
    const X = a * 5, Y = b * 20;
    const ans = (X * Y) / 100;
    const { options, answerIndex } = buildOptions(ans, numDistractors(ans));
    return {
      en: { text: `What is ${X}% of ${Y}?`, options, answerIndex, explanation: `${X}% of ${Y} = (${X}/100) × ${Y} = ${ans}.` },
      ur: { text: `${Y} کا ${X}% کتنا ہے؟`, options, answerIndex, explanation: `(${X}/100) × ${Y} = ${ans}۔` },
    };
  },
  () => {
    const p = rnd(1, 19), q = rnd(1, 20);
    const percent = p * 5, Z = q * 20;
    const Y = (percent * Z) / 100;
    const { options, answerIndex } = buildOptions(percent, numDistractors(percent, 20).map(d => Math.max(1, d)));
    return {
      en: { text: `${Y} is what percent of ${Z}?`, options: options.map(o => o + '%'), answerIndex, explanation: `(${Y} ÷ ${Z}) × 100 = ${percent}%.` },
      ur: { text: `${Y}، ${Z} کا کتنا فیصد ہے؟`, options: options.map(o => o + '%'), answerIndex, explanation: `(${Y} ÷ ${Z}) × 100 = ${percent}%۔` },
    };
  },
  () => {
    const a = rnd(1, 25), b = rnd(1, 20);
    const P = a * 20, X = b * 5;
    const inc = (P * X) / 100;
    const ans = P + inc;
    const { options, answerIndex } = buildOptions(ans, numDistractors(ans));
    return {
      en: { text: `The price of a jacket is Rs. ${P}. It is increased by ${X}%. What is the new price?`, options: options.map(o => 'Rs. ' + o), answerIndex, explanation: `${X}% of ${P} = ${inc}, so the new price is ${P} + ${inc} = ${ans}.` },
      ur: { text: `ایک جیکٹ کی قیمت روپے ${P} ہے۔ اسے ${X}% بڑھایا جاتا ہے۔ نئی قیمت کیا ہوگی؟`, options: options.map(o => 'روپے ' + o), answerIndex, explanation: `${P} کا ${X}% = ${inc} ہے، اس لیے نئی قیمت ${P} + ${inc} = ${ans} ہوگی۔` },
    };
  },
  () => {
    const a = rnd(1, 25), b = rnd(1, 16);
    const P = a * 20, X = b * 5;
    const dec = (P * X) / 100;
    const ans = P - dec;
    const { options, answerIndex } = buildOptions(ans, numDistractors(ans));
    return {
      en: { text: `A backpack priced at Rs. ${P} is on sale with a ${X}% discount. What is the sale price?`, options: options.map(o => 'Rs. ' + o), answerIndex, explanation: `${X}% of ${P} = ${dec}, so the sale price is ${P} − ${dec} = ${ans}.` },
      ur: { text: `ایک بیگ کی قیمت روپے ${P} ہے اور اس پر ${X}% رعایت دی جا رہی ہے۔ فروخت کی قیمت کیا ہوگی؟`, options: options.map(o => 'روپے ' + o), answerIndex, explanation: `${P} کا ${X}% = ${dec} ہے، اس لیے فروخت کی قیمت ${P} − ${dec} = ${ans} ہوگی۔` },
    };
  },
  () => {
    const a = rnd(1, 15), b = rnd(1, 16);
    const N = a * 20, X = b * 5;
    const girls = (N * X) / 100;
    const boys = N - girls;
    const { options, answerIndex } = buildOptions(boys, numDistractors(boys, Math.max(3, Math.round(N * 0.1))));
    return {
      en: { text: `A class has ${N} students in total. ${X}% of the students are girls. How many boys are in the class?`, options, answerIndex, explanation: `Girls = ${X}% of ${N} = ${girls}, so boys = ${N} − ${girls} = ${boys}.` },
      ur: { text: `ایک جماعت میں کل ${N} طلبہ ہیں، جن میں سے ${X}% لڑکیاں ہیں۔ جماعت میں لڑکوں کی تعداد کتنی ہے؟`, options, answerIndex, explanation: `لڑکیاں = ${N} کا ${X}% = ${girls}، اس لیے لڑکے = ${N} − ${girls} = ${boys}۔` },
    };
  },
  () => {
    const a = rnd(1, 20), b = rnd(1, 20);
    const P = a * 20;
    const X = b * 5;
    const Q = P + (P * X) / 100;
    const { options, answerIndex } = buildOptions(X, numDistractors(X, 20).map(d => Math.max(1, d)));
    return {
      en: { text: `A shop's monthly sales rose from Rs. ${P} to Rs. ${Q}. What is the percentage increase?`, options: options.map(o => o + '%'), answerIndex, explanation: `Increase = ${Q} − ${P} = ${Q - P}; percentage = (${Q - P} ÷ ${P}) × 100 = ${X}%.` },
      ur: { text: `ایک دکان کی ماہانہ فروخت روپے ${P} سے بڑھ کر روپے ${Q} ہو گئی۔ فیصد اضافہ کتنا ہے؟`, options: options.map(o => o + '%'), answerIndex, explanation: `اضافہ = ${Q} − ${P} = ${Q - P}؛ فیصد = (${Q - P} ÷ ${P}) × 100 = ${X}%۔` },
    };
  },
];

/* 2. RATIOS & PROPORTIONS */
GEN.ratios_proportions = [
  () => {
    const pairs = [[2, 3], [3, 4], [4, 5], [2, 5], [3, 5], [5, 6], [1, 2], [3, 2], [4, 3], [5, 2], [5, 4], [7, 3]];
    const [A, B] = pick(pairs);
    const k = rnd(2, 14);
    const boys = A * k, girls = B * k;
    const { options, answerIndex } = buildOptions(girls, numDistractors(girls));
    return {
      en: { text: `In a school, the ratio of boys to girls is ${A}:${B}. If there are ${boys} boys, how many girls are there?`, options, answerIndex, explanation: `Each "part" = ${boys} ÷ ${A} = ${k}; girls = ${B} × ${k} = ${girls}.` },
      ur: { text: `ایک سکول میں لڑکوں اور لڑکیوں کا تناسب ${A}:${B} ہے۔ اگر لڑکوں کی تعداد ${boys} ہے، تو لڑکیوں کی تعداد کتنی ہوگی؟`, options, answerIndex, explanation: `ہر "حصہ" = ${boys} ÷ ${A} = ${k}؛ لڑکیاں = ${B} × ${k} = ${girls}۔` },
    };
  },
  () => {
    const pairs = [[2, 3], [3, 5], [1, 4], [2, 5], [3, 4], [4, 7], [1, 3], [5, 7], [2, 7]];
    const [A, B] = pick(pairs);
    const k = rnd(3, 30);
    const total = (A + B) * k;
    const smaller = Math.min(A, B) * k;
    const { options, answerIndex } = buildOptions(smaller, numDistractors(smaller));
    return {
      en: { text: `Rs. ${total} is divided between two friends in the ratio ${A}:${B}. What is the smaller share?`, options: options.map(o => 'Rs. ' + o), answerIndex, explanation: `Total parts = ${A} + ${B} = ${A + B}; each part = ${total} ÷ ${A + B} = ${k}; smaller share = ${Math.min(A, B)} × ${k} = ${smaller}.` },
      ur: { text: `روپے ${total} کو دو دوستوں کے درمیان ${A}:${B} کے تناسب میں تقسیم کیا جاتا ہے۔ چھوٹا حصہ کتنا ہوگا؟`, options: options.map(o => 'روپے ' + o), answerIndex, explanation: `کل حصے = ${A} + ${B} = ${A + B}؛ ہر حصہ = ${total} ÷ ${A + B} = ${k}؛ چھوٹا حصہ = ${Math.min(A, B)} × ${k} = ${smaller}۔` },
    };
  },
  () => {
    const combos = [[4, 12, 6], [6, 8, 12], [3, 20, 5], [5, 12, 10], [8, 6, 12], [10, 6, 4], [4, 15, 10], [6, 10, 15], [9, 8, 6], [12, 5, 15]];
    const [W1, D1, W2] = pick(combos);
    const D2 = (W1 * D1) / W2;
    const { options, answerIndex } = buildOptions(D2, numDistractors(D2, Math.max(2, Math.round(D2 * 0.4))));
    return {
      en: { text: `${W1} workers can finish building a wall in ${D1} days. Working at the same rate, how many days will ${W2} workers take to finish the same wall?`, options: options.map(o => o + ' days'), answerIndex, explanation: `Total work = ${W1} × ${D1} = ${W1 * D1} worker-days; days for ${W2} workers = ${W1 * D1} ÷ ${W2} = ${D2}.` },
      ur: { text: `${W1} مزدور ایک دیوار کو ${D1} دنوں میں مکمل کر سکتے ہیں۔ اسی رفتار سے ${W2} مزدور اسی دیوار کو کتنے دنوں میں مکمل کریں گے؟`, options: options.map(o => o + ' دن'), answerIndex, explanation: `کل کام = ${W1} × ${D1} = ${W1 * D1} مزدور-دن؛ ${W2} مزدوروں کے لیے دن = ${W1 * D1} ÷ ${W2} = ${D2}۔` },
    };
  },
  () => {
    const combos = [[2, 4, 10], [4, 5, 15], [3, 4, 12], [2, 3, 9], [6, 9, 15], [4, 10, 25], [3, 5, 10], [4, 6, 9], [5, 10, 16], [6, 8, 12], [2, 5, 15], [3, 8, 16]];
    const [C1, S1, S2] = pick(combos);
    const cups = (C1 / S1) * S2;
    const { options, answerIndex } = buildOptions(cups, numDistractors(cups, Math.max(2, Math.round(cups * 0.4))));
    return {
      en: { text: `A recipe needs ${C1} cups of flour to make ${S1} servings. How many cups of flour are needed to make ${S2} servings?`, options: options.map(o => o + ' cups'), answerIndex, explanation: `Flour per serving = ${C1} ÷ ${S1}; for ${S2} servings = (${C1}/${S1}) × ${S2} = ${cups}.` },
      ur: { text: `ایک ترکیب میں ${S1} افراد کے لیے ${C1} کپ آٹا درکار ہوتا ہے۔ ${S2} افراد کے لیے کتنے کپ آٹا درکار ہوگا؟`, options: options.map(o => o + ' کپ'), answerIndex, explanation: `ایک فرد کے لیے آٹا = ${C1} ÷ ${S1}؛ ${S2} افراد کے لیے = (${C1}/${S1}) × ${S2} = ${cups}۔` },
    };
  },
  () => {
    const g = rnd(2, 9);
    const a = rnd(2, 9), b = rnd(2, 9);
    if (a === b) return GEN.ratios_proportions[4]();
    const X = a * g, Y = b * g;
    const div = gcd(a, b);
    const ans = `${a / div}:${b / div}`;
    const distractors = [`${X}:${Y}`, `${a}:${b}`, `${a + 1}:${b}`, `${a}:${b + 1}`, `${b / div}:${a / div}`];
    const { options, answerIndex } = buildOptions(ans, distractors);
    return {
      en: { text: `Simplify the ratio ${X}:${Y} to its lowest terms.`, options, answerIndex, explanation: `The greatest common factor of ${X} and ${Y} is ${div * (X / X)}; dividing both terms by ${gcd(X, Y)} gives ${ans}.` },
      ur: { text: `تناسب ${X}:${Y} کو کم ترین شکل (lowest terms) میں لکھیں۔`, options, answerIndex, explanation: `${X} اور ${Y} کا سب سے بڑا مشترک عدد ${gcd(X, Y)} ہے؛ دونوں کو اس سے تقسیم کرنے پر ${ans} ملتا ہے۔` },
    };
  },
];

/* 3. AVERAGES & STATISTICS */
GEN.averages_statistics = [
  () => {
    const n = pick([4, 5]);
    let list, avg;
    for (let tries = 0; tries < 30; tries++) {
      list = Array.from({ length: n }, () => rnd(5, 95));
      const sum = list.reduce((s, v) => s + v, 0);
      if (sum % n === 0) { avg = sum / n; break; }
    }
    if (avg === undefined) { list[n - 1] += (n - (list.reduce((s, v) => s + v, 0) % n)) % n; avg = list.reduce((s, v) => s + v, 0) / n; }
    const sum = list.reduce((s, v) => s + v, 0);
    const { options, answerIndex } = buildOptions(avg, numDistractors(avg));
    return {
      en: { text: `Find the average (mean) of these numbers: ${list.join(', ')}.`, options, answerIndex, explanation: `Sum = ${sum}; average = ${sum} ÷ ${n} = ${avg}.` },
      ur: { text: `ان اعداد کی اوسط (mean) معلوم کریں: ${list.join('، ')}۔`, options, answerIndex, explanation: `مجموعہ = ${sum}؛ اوسط = ${sum} ÷ ${n} = ${avg}۔` },
    };
  },
  () => {
    const M = rnd(10, 60);
    let X, newAvg;
    for (let tries = 0; tries < 30; tries++) {
      X = rnd(5, 95);
      if ((5 * M + X) % 6 === 0) { newAvg = (5 * M + X) / 6; break; }
    }
    if (newAvg === undefined) { X = M; newAvg = M; }
    const { options, answerIndex } = buildOptions(newAvg, numDistractors(newAvg));
    return {
      en: { text: `The average of 5 numbers is ${M}. A sixth number, ${X}, is added to the set. What is the new average of all 6 numbers?`, options, answerIndex, explanation: `Sum of 6 numbers = (5 × ${M}) + ${X} = ${5 * M + X}; new average = ${5 * M + X} ÷ 6 = ${newAvg}.` },
      ur: { text: `5 اعداد کی اوسط ${M} ہے۔ اگر ان میں چھٹا عدد ${X} شامل کر دیا جائے تو تمام 6 اعداد کی نئی اوسط کیا ہوگی؟`, options, answerIndex, explanation: `6 اعداد کا مجموعہ = (5 × ${M}) + ${X} = ${5 * M + X}؛ نئی اوسط = ${5 * M + X} ÷ 6 = ${newAvg}۔` },
    };
  },
  () => {
    const n = pick([5, 7]);
    const list = Array.from({ length: n }, () => rnd(1, 99));
    const sorted = [...list].sort((a, b) => a - b);
    const median = sorted[(n - 1) / 2];
    const { options, answerIndex } = buildOptions(median, numDistractors(median));
    return {
      en: { text: `Find the median of this list of numbers: ${list.join(', ')}.`, options, answerIndex, explanation: `Sorted order: ${sorted.join(', ')}. The middle value is ${median}.` },
      ur: { text: `ان اعداد کی فہرست کا وسطیہ (median) معلوم کریں: ${list.join('، ')}۔`, options, answerIndex, explanation: `ترتیب شدہ فہرست: ${sorted.join('، ')}۔ درمیانی قدر ${median} ہے۔` },
    };
  },
  () => {
    const base = uniq(Array.from({ length: 6 }, () => rnd(1, 40)));
    while (base.length < 4) base.push(rnd(1, 40));
    const modeVal = pick(base.slice(0, 4));
    const list = shuffle([...base.slice(0, 5), modeVal, modeVal]);
    const { options, answerIndex } = buildOptions(modeVal, numDistractors(modeVal));
    return {
      en: { text: `Find the mode (the most frequent value) of this list: ${list.join(', ')}.`, options, answerIndex, explanation: `${modeVal} appears more times than any other value in the list.` },
      ur: { text: `اس فہرست کا موڈ (mode، یعنی سب سے زیادہ دہرایا جانے والا عدد) معلوم کریں: ${list.join('، ')}۔`, options, answerIndex, explanation: `${modeVal} اس فہرست میں کسی بھی دوسرے عدد سے زیادہ مرتبہ آیا ہے۔` },
    };
  },
  () => {
    let list, avg;
    for (let tries = 0; tries < 30; tries++) {
      list = Array.from({ length: 4 }, () => rnd(40, 100));
      const sum = list.reduce((s, v) => s + v, 0);
      if (sum % 4 === 0) { avg = sum / 4; break; }
    }
    if (avg === undefined) { list[3] += (4 - (list.reduce((s, v) => s + v, 0) % 4)) % 4; avg = list.reduce((s, v) => s + v, 0) / 4; }
    const sum = list.reduce((s, v) => s + v, 0);
    const { options, answerIndex } = buildOptions(avg, numDistractors(avg));
    return {
      en: { text: `A student scored the following marks in 4 subjects: ${list.join(', ')}. What is the average score?`, options, answerIndex, explanation: `Sum = ${sum}; average = ${sum} ÷ 4 = ${avg}.` },
      ur: { text: `ایک طالب علم نے 4 مضامین میں یہ نمبر حاصل کیے: ${list.join('، ')}۔ اوسط نمبر کیا ہے؟`, options, answerIndex, explanation: `مجموعہ = ${sum}؛ اوسط = ${sum} ÷ 4 = ${avg}۔` },
    };
  },
];

/* 4. DATA INTERPRETATION (table) & 5. GRAPHS & CHARTS (chart) — shared engine */
const THEMES = [
  {
    metricEn: 'kg of fruit sold', metricUr: 'فروخت شدہ پھل (کلوگرام)',
    subjectEn: 'fruit stall', subjectUr: 'پھلوں کے سٹال',
    cats: [
      { en: 'Apples', ur: 'سیب' }, { en: 'Bananas', ur: 'کیلے' },
      { en: 'Mangoes', ur: 'آم' }, { en: 'Oranges', ur: 'سنگترے' }, { en: 'Grapes', ur: 'انگور' },
    ],
  },
  {
    metricEn: 'books sold', metricUr: 'فروخت شدہ کتابیں',
    subjectEn: 'bookstore', subjectUr: 'کتابوں کی دکان',
    cats: [
      { en: 'Novels', ur: 'ناول' }, { en: 'Comics', ur: 'کامکس' },
      { en: 'Textbooks', ur: 'نصابی کتابیں' }, { en: 'Magazines', ur: 'رسائل' }, { en: 'Story Books', ur: 'کہانی کی کتابیں' },
    ],
  },
  {
    metricEn: 'mm of rainfall', metricUr: 'ملی میٹر بارش',
    subjectEn: 'weather station', subjectUr: 'موسمیاتی مرکز',
    cats: [
      { en: 'January', ur: 'جنوری' }, { en: 'February', ur: 'فروری' },
      { en: 'March', ur: 'مارچ' }, { en: 'April', ur: 'اپریل' }, { en: 'May', ur: 'مئی' },
    ],
  },
  {
    metricEn: 'students', metricUr: 'طلبہ',
    subjectEn: 'school', subjectUr: 'سکول',
    cats: [
      { en: 'Grade 6', ur: 'جماعت ۶' }, { en: 'Grade 7', ur: 'جماعت ۷' },
      { en: 'Grade 8', ur: 'جماعت ۸' }, { en: 'Grade 9', ur: 'جماعت ۹' }, { en: 'Grade 10', ur: 'جماعت ۱۰' },
    ],
  },
  {
    metricEn: 'runs scored', metricUr: 'اسکور کیے گئے رنز',
    subjectEn: 'cricket match', subjectUr: 'کرکٹ میچ',
    cats: [
      { en: 'Player A', ur: 'کھلاڑی الف' }, { en: 'Player B', ur: 'کھلاڑی ب' },
      { en: 'Player C', ur: 'کھلاڑی ج' }, { en: 'Player D', ur: 'کھلاڑی د' }, { en: 'Player E', ur: 'کھلاڑی ہ' },
    ],
  },
];

function buildDataQuestion(asChart) {
  const theme = pick(THEMES);
  const n = pick([4, 5]);
  const cats = shuffle(theme.cats).slice(0, n);
  const values = cats.map(() => rnd(10, 95));
  let total = values.reduce((s, v) => s + v, 0);
  const variant = rnd(0, 4);

  const catNamesEn = cats.map(c => c.en);
  const catNamesUr = cats.map(c => c.ur);

  let en, ur;

  if (variant === 0) {
    const maxVal = Math.max(...values);
    const idx = values.indexOf(maxVal);
    const ans = catNamesEn[idx], ansUr = catNamesUr[idx];
    const { options, answerIndex } = buildOptions(ans, catNamesEn);
    const optionsUr = options.map(o => catNamesUr[catNamesEn.indexOf(o)]);
    en = { text: `Which category had the highest number of ${theme.metricEn}?`, options, answerIndex, explanation: `${ans} has the highest value (${maxVal}).` };
    ur = { text: `کس زمرے میں سب سے زیادہ ${theme.metricUr} رہے؟`, options: optionsUr, answerIndex, explanation: `${ansUr} کی قدر (${maxVal}) سب سے زیادہ ہے۔` };
  } else if (variant === 1) {
    const i = rnd(0, n - 1); let j = rnd(0, n - 1); while (j === i) j = rnd(0, n - 1);
    const ans = values[i] + values[j];
    const { options, answerIndex } = buildOptions(ans, numDistractors(ans));
    en = { text: `What is the total number of ${theme.metricEn} for ${catNamesEn[i]} and ${catNamesEn[j]} combined?`, options, answerIndex, explanation: `${catNamesEn[i]} (${values[i]}) + ${catNamesEn[j]} (${values[j]}) = ${ans}.` };
    ur = { text: `${catNamesUr[i]} اور ${catNamesUr[j]} کے ${theme.metricUr} کا مجموعہ کتنا ہے؟`, options, answerIndex, explanation: `${catNamesUr[i]} (${values[i]}) + ${catNamesUr[j]} (${values[j]}) = ${ans}۔` };
  } else if (variant === 2) {
    const i = rnd(0, n - 1); let j = rnd(0, n - 1); while (j === i) j = rnd(0, n - 1);
    const ans = Math.abs(values[i] - values[j]);
    const { options, answerIndex } = buildOptions(ans, numDistractors(ans));
    en = { text: `What is the difference between the ${theme.metricEn} of ${catNamesEn[i]} and ${catNamesEn[j]}?`, options, answerIndex, explanation: `|${values[i]} − ${values[j]}| = ${ans}.` };
    ur = { text: `${catNamesUr[i]} اور ${catNamesUr[j]} کے ${theme.metricUr} میں کتنا فرق ہے؟`, options, answerIndex, explanation: `|${values[i]} − ${values[j]}| = ${ans}۔` };
  } else if (variant === 3) {
    const i = rnd(0, n - 1);
    const ans = Math.round((values[i] / total) * 100);
    const { options, answerIndex } = buildOptions(ans, numDistractors(ans, 15).map(d => Math.max(1, Math.min(99, d))));
    en = { text: `Approximately what percentage of the total ${theme.metricEn} does ${catNamesEn[i]} represent?`, options: options.map(o => o + '%'), answerIndex, explanation: `(${values[i]} ÷ ${total}) × 100 ≈ ${ans}%.` };
    ur = { text: `کل ${theme.metricUr} میں سے ${catNamesUr[i]} کا تناسب تقریباً کتنے فیصد ہے؟`, options: options.map(o => o + '%'), answerIndex, explanation: `(${values[i]} ÷ ${total}) × 100 ≈ ${ans}%۔` };
  } else {
    const rem = total % n;
    if (rem !== 0) { values[n - 1] += (n - rem); }
    total = values.reduce((s, v) => s + v, 0);
    const avg = total / n;
    const { options, answerIndex } = buildOptions(avg, numDistractors(avg));
    en = { text: `What is the average number of ${theme.metricEn} across all categories shown?`, options, answerIndex, explanation: `Total = ${total}; average = ${total} ÷ ${n} = ${avg}.` };
    ur = { text: `تمام زمروں میں دکھائے گئے ${theme.metricUr} کی اوسط کتنی ہے؟`, options, answerIndex, explanation: `مجموعہ = ${total}؛ اوسط = ${total} ÷ ${n} = ${avg}۔` };
  }

  const introEn = asChart
    ? `The bar chart below shows ${theme.metricEn} at a ${theme.subjectEn}.`
    : `The table below shows ${theme.metricEn} at a ${theme.subjectEn}.`;
  const introUr = asChart
    ? `درج ذیل بار چارٹ ایک ${theme.subjectUr} پر ${theme.metricUr} دکھاتا ہے۔`
    : `درج ذیل جدول ایک ${theme.subjectUr} پر ${theme.metricUr} دکھاتا ہے۔`;

  en.text = `${introEn} ${en.text}`;
  ur.text = `${introUr} ${ur.text}`;

  if (asChart) {
    en.chart = { labels: catNamesEn, values };
    ur.chart = { labels: catNamesUr, values };
  } else {
    en.table = { headers: ['Category', theme.metricEn.charAt(0).toUpperCase() + theme.metricEn.slice(1)], rows: catNamesEn.map((c, i) => [c, values[i]]) };
    ur.table = { headers: ['زمرہ', theme.metricUr], rows: catNamesUr.map((c, i) => [c, values[i]]) };
  }

  return { en, ur };
}

GEN.data_interpretation = [() => buildDataQuestion(false)];
GEN.graphs_charts = [() => buildDataQuestion(true)];

/* 6. WORD PROBLEMS */
GEN.word_problems = [
  () => {
    const age = rnd(6, 15), X = rnd(2, 10);
    const ans = age + X;
    const { options, answerIndex } = buildOptions(ans, numDistractors(ans, 5));
    return {
      en: { text: `Sana is ${X} years older than her brother Ali. If Ali is ${age} years old, how old is Sana?`, options: options.map(o => o + ' years'), answerIndex, explanation: `Sana's age = ${age} + ${X} = ${ans}.` },
      ur: { text: `ثناء اپنے بھائی علی سے ${X} سال بڑی ہے۔ اگر علی کی عمر ${age} سال ہے، تو ثناء کی عمر کتنی ہے؟`, options: options.map(o => o + ' سال'), answerIndex, explanation: `ثناء کی عمر = ${age} + ${X} = ${ans}۔` },
    };
  },
  () => {
    const combos = [[6, 3, 2], [4, 4, 2], [6, 6, 3], [8, 8, 4], [10, 10, 5], [12, 4, 3], [9, 18, 6], [6, 12, 4], [15, 10, 6], [12, 6, 4], [20, 5, 4]];
    const [d1, d2, D] = pick(combos);
    const { options, answerIndex } = buildOptions(D, numDistractors(D, Math.max(2, Math.round(D * 0.5))));
    return {
      en: { text: `Bilal can paint a fence in ${d1} days. Hamza can paint the same fence in ${d2} days. Working together, how many days will they take to paint it?`, options: options.map(o => o + ' days'), answerIndex, explanation: `Combined rate = 1/${d1} + 1/${d2}, so together they finish in ${D} days.` },
      ur: { text: `بلال ایک باڑ کو ${d1} دنوں میں پینٹ کر سکتا ہے۔ حمزہ وہی باڑ ${d2} دنوں میں پینٹ کر سکتا ہے۔ دونوں مل کر کام کریں تو باڑ پینٹ کرنے میں کتنے دن لگیں گے؟`, options: options.map(o => o + ' دن'), answerIndex, explanation: `مشترکہ رفتار = 1/${d1} + 1/${d2}، اس لیے دونوں مل کر ${D} دنوں میں کام مکمل کریں گے۔` },
    };
  },
  () => {
    const X = rnd(15, 60), Y = rnd(10, 40), Z = rnd(2, X - 3);
    const ans = X - Z;
    const { options, answerIndex } = buildOptions(ans, numDistractors(ans, 6));
    return {
      en: { text: `A basket contains ${X} apples and ${Y} oranges. If ${Z} apples are removed from the basket, how many apples are left?`, options, answerIndex, explanation: `${X} − ${Z} = ${ans}.` },
      ur: { text: `ایک ٹوکری میں ${X} سیب اور ${Y} سنگترے ہیں۔ اگر ٹوکری سے ${Z} سیب نکال لیے جائیں تو کتنے سیب باقی رہ جائیں گے؟`, options, answerIndex, explanation: `${X} − ${Z} = ${ans}۔` },
    };
  },
  () => {
    const M = rnd(500, 3000), S = rnd(100, Math.floor(M / 2)), T = rnd(50, Math.floor(M / 4));
    const ans = M - S - T;
    const { options, answerIndex } = buildOptions(ans, numDistractors(ans, Math.max(20, Math.round(ans * 0.2))));
    return {
      en: { text: `Ahmed has Rs. ${M}. He spends Rs. ${S} on books and Rs. ${T} on stationery. How much money does he have left?`, options: options.map(o => 'Rs. ' + o), answerIndex, explanation: `${M} − ${S} − ${T} = ${ans}.` },
      ur: { text: `احمد کے پاس روپے ${M} ہیں۔ وہ روپے ${S} کتابوں پر اور روپے ${T} سٹیشنری پر خرچ کرتا ہے۔ اس کے پاس کتنے پیسے باقی بچیں گے؟`, options: options.map(o => 'روپے ' + o), answerIndex, explanation: `${M} − ${S} − ${T} = ${ans}۔` },
    };
  },
  () => {
    const n = pick([3, 4, 5, 6, 8]);
    const perChild = rnd(3, 15);
    const total = n * perChild;
    const { options, answerIndex } = buildOptions(perChild, numDistractors(perChild, 5));
    return {
      en: { text: `${total} sweets are shared equally among ${n} children. How many sweets does each child get?`, options, answerIndex, explanation: `${total} ÷ ${n} = ${perChild}.` },
      ur: { text: `${total} ٹافیاں ${n} بچوں میں برابر تقسیم کی جاتی ہیں۔ ہر بچے کو کتنی ٹافیاں ملیں گی؟`, options, answerIndex, explanation: `${total} ÷ ${n} = ${perChild}۔` },
    };
  },
  () => {
    const n1 = rnd(15, 40), n2 = rnd(10, 35), n3 = pick([5, 6, 7]);
    const ans = (n1 + n2) * n3;
    const { options, answerIndex } = buildOptions(ans, numDistractors(ans, Math.max(10, Math.round(ans * 0.15))));
    return {
      en: { text: `A school bus carries ${n1} students on the morning trip and ${n2} students on the afternoon trip, ${n3} days a week. How many student-trips does it make in one week?`, options, answerIndex, explanation: `(${n1} + ${n2}) × ${n3} = ${ans}.` },
      ur: { text: `ایک سکول بس صبح کے سفر میں ${n1} طلبہ اور دوپہر کے سفر میں ${n2} طلبہ لے جاتی ہے، ہفتے میں ${n3} دن۔ ایک ہفتے میں کل طالب علم سفر کتنے ہوں گے؟`, options, answerIndex, explanation: `(${n1} + ${n2}) × ${n3} = ${ans}۔` },
    };
  },
];

/* 7. NUMBER SERIES & PATTERNS */
GEN.number_series = [
  () => {
    const a = rnd(1, 30), d = rnd(2, 12);
    const terms = [a, a + d, a + 2 * d, a + 3 * d];
    const ans = a + 4 * d;
    const { options, answerIndex } = buildOptions(ans, numDistractors(ans, d));
    return {
      en: { text: `Find the next number in the series: ${terms.join(', ')}, ?`, options, answerIndex, explanation: `Each term increases by ${d}: ${terms[3]} + ${d} = ${ans}.` },
      ur: { text: `اس ترتیب میں اگلا عدد معلوم کریں: ${terms.join('، ')}، ؟`, options, answerIndex, explanation: `ہر عدد میں ${d} کا اضافہ ہوتا ہے: ${terms[3]} + ${d} = ${ans}۔` },
    };
  },
  () => {
    const a = pick([1, 2, 3, 4, 5]), r = pick([2, 3]);
    const terms = [a, a * r, a * r * r, a * r * r * r];
    const ans = a * r * r * r * r;
    const { options, answerIndex } = buildOptions(ans, numDistractors(ans, Math.max(5, Math.round(ans * 0.3))));
    return {
      en: { text: `Find the next number in the series: ${terms.join(', ')}, ?`, options, answerIndex, explanation: `Each term is multiplied by ${r}: ${terms[3]} × ${r} = ${ans}.` },
      ur: { text: `اس ترتیب میں اگلا عدد معلوم کریں: ${terms.join('، ')}، ؟`, options, answerIndex, explanation: `ہر عدد کو ${r} سے ضرب دیا جاتا ہے: ${terms[3]} × ${r} = ${ans}۔` },
    };
  },
  () => {
    const start = rnd(1, 6);
    const terms = [0, 1, 2, 3].map(i => (start + i) * (start + i));
    const ans = (start + 4) * (start + 4);
    const { options, answerIndex } = buildOptions(ans, numDistractors(ans, Math.max(5, Math.round(ans * 0.25))));
    return {
      en: { text: `Find the next number in the series: ${terms.join(', ')}, ?`, options, answerIndex, explanation: `These are consecutive squares: ${start + 4}² = ${ans}.` },
      ur: { text: `اس ترتیب میں اگلا عدد معلوم کریں: ${terms.join('، ')}، ؟`, options, answerIndex, explanation: `یہ لگاتار مربع (squares) اعداد ہیں: ${start + 4}² = ${ans}۔` },
    };
  },
  () => {
    const a = rnd(1, 8), b = rnd(1, 10);
    const c = a + b, e = b + c, f = c + e;
    const terms = [a, b, c, e];
    const ans = f;
    const { options, answerIndex } = buildOptions(ans, numDistractors(ans, Math.max(4, Math.round(ans * 0.3))));
    return {
      en: { text: `Find the next number in the series: ${terms.join(', ')}, ?`, options, answerIndex, explanation: `Each term is the sum of the two terms before it: ${terms[2]} + ${terms[3]} = ${ans}.` },
      ur: { text: `اس ترتیب میں اگلا عدد معلوم کریں: ${terms.join('، ')}، ؟`, options, answerIndex, explanation: `ہر عدد اپنے سے پہلے دو اعداد کا مجموعہ ہے: ${terms[2]} + ${terms[3]} = ${ans}۔` },
    };
  },
  () => {
    const a = rnd(2, 10);
    const dir = pick(['double', 'halve']);
    let terms, ans, rule, ruleUr;
    if (dir === 'double') {
      terms = [a, a * 2, a * 4, a * 8];
      ans = a * 16;
      rule = `Each term is doubled: ${terms[3]} × 2 = ${ans}.`;
      ruleUr = `ہر عدد کو دوگنا کیا جاتا ہے: ${terms[3]} × 2 = ${ans}۔`;
    } else {
      const start = a * 16;
      terms = [start, start / 2, start / 4, start / 8];
      ans = start / 16;
      rule = `Each term is halved: ${terms[3]} ÷ 2 = ${ans}.`;
      ruleUr = `ہر عدد کو آدھا کیا جاتا ہے: ${terms[3]} ÷ 2 = ${ans}۔`;
    }
    const { options, answerIndex } = buildOptions(ans, numDistractors(ans, Math.max(4, Math.round(ans * 0.3))));
    return {
      en: { text: `Find the next number in the series: ${terms.join(', ')}, ?`, options, answerIndex, explanation: rule },
      ur: { text: `اس ترتیب میں اگلا عدد معلوم کریں: ${terms.join('، ')}، ؟`, options, answerIndex, explanation: ruleUr },
    };
  },
  () => {
    const a = rnd(60, 120), d = rnd(2, 10);
    const terms = [a, a - d, a - 2 * d, a - 3 * d];
    const ans = a - 4 * d;
    const { options, answerIndex } = buildOptions(ans, numDistractors(ans, d));
    return {
      en: { text: `Find the next number in the series: ${terms.join(', ')}, ?`, options, answerIndex, explanation: `Each term decreases by ${d}: ${terms[3]} − ${d} = ${ans}.` },
      ur: { text: `اس ترتیب میں اگلا عدد معلوم کریں: ${terms.join('، ')}، ؟`, options, answerIndex, explanation: `ہر عدد میں سے ${d} کم ہوتا ہے: ${terms[3]} − ${d} = ${ans}۔` },
    };
  },
];

/* 8. FRACTIONS & DECIMALS */
GEN.fractions_decimals = [
  () => {
    const b = pick([4, 5, 6, 7, 8, 9, 10, 12]);
    let a = rnd(1, b - 2), c = rnd(1, b - 2);
    while (a + c >= b) { a = rnd(1, b - 2); c = rnd(1, b - 2); }
    const div = gcd(a + c, b);
    const ans = div > 1 ? `${(a + c) / div}/${b / div}` : `${a + c}/${b}`;
    const distractors = [`${a + c}/${b}`, `${a + c + 1}/${b}`, `${a}/${b}`, `${c}/${b}`, `${a + c}/${b + 1}`];
    const { options, answerIndex } = buildOptions(ans, distractors);
    return {
      en: { text: `Add these fractions: ${a}/${b} + ${c}/${b} = ?`, options, answerIndex, explanation: `${a}/${b} + ${c}/${b} = ${a + c}/${b}, which simplifies to ${ans}.` },
      ur: { text: `یہ کسور جمع کریں: ${a}/${b} + ${c}/${b} = ؟`, options, answerIndex, explanation: `${a}/${b} + ${c}/${b} = ${a + c}/${b}, جو ${ans} کے برابر ہے۔` },
    };
  },
  () => {
    const b = pick([4, 5, 6, 7, 8, 9, 10, 12]);
    let a = rnd(3, b - 1), c = rnd(1, a - 1);
    const diff = a - c;
    const div = gcd(diff, b);
    const ans = div > 1 ? `${diff / div}/${b / div}` : `${diff}/${b}`;
    const distractors = [`${diff}/${b}`, `${diff + 1}/${b}`, `${a}/${b}`, `${c}/${b}`, `${diff}/${b - 1}`];
    const { options, answerIndex } = buildOptions(ans, distractors);
    return {
      en: { text: `Subtract these fractions: ${a}/${b} − ${c}/${b} = ?`, options, answerIndex, explanation: `${a}/${b} − ${c}/${b} = ${diff}/${b}, which simplifies to ${ans}.` },
      ur: { text: `یہ تفریق کریں: ${a}/${b} − ${c}/${b} = ؟`, options, answerIndex, explanation: `${a}/${b} − ${c}/${b} = ${diff}/${b}, جو ${ans} کے برابر ہے۔` },
    };
  },
  () => {
    const b = pick([2, 4, 5, 8, 10, 20, 25, 50]);
    const a = rnd(1, b - 1);
    const decimal = (a / b);
    const ans = Number.isInteger(decimal * 100) ? (decimal).toString() : decimal.toFixed(2);
    const distractors = numDistractors(Math.round(decimal * 100), 15).map(v => (v / 100).toString());
    const { options, answerIndex } = buildOptions(ans, distractors);
    return {
      en: { text: `Convert the fraction ${a}/${b} to a decimal.`, options, answerIndex, explanation: `${a} ÷ ${b} = ${ans}.` },
      ur: { text: `کسر ${a}/${b} کو اعشاریہ (decimal) میں تبدیل کریں۔`, options, answerIndex, explanation: `${a} ÷ ${b} = ${ans}۔` },
    };
  },
  () => {
    const denoms = shuffle([2, 3, 4, 5, 6, 8, 10, 12]).slice(0, 4);
    const fracs = denoms.map(d => { const n = rnd(1, d - 1); return { n, d, val: n / d, str: `${n}/${d}` }; });
    const maxVal = Math.max(...fracs.map(f => f.val));
    const winners = fracs.filter(f => f.val === maxVal);
    const ans = winners[0].str;
    const { options, answerIndex } = buildOptions(ans, fracs.map(f => f.str));
    return {
      en: { text: `Which of these fractions is the largest?`, options, answerIndex, explanation: `As decimals: ${fracs.map(f => `${f.str} = ${f.val.toFixed(2)}`).join(', ')}. ${ans} is the largest.` },
      ur: { text: `ان کسور میں سے کون سا سب سے بڑا ہے؟`, options, answerIndex, explanation: `اعشاریہ میں: ${fracs.map(f => `${f.str} = ${f.val.toFixed(2)}`).join('، ')}۔ ${ans} سب سے بڑا ہے۔` },
    };
  },
  () => {
    const b = pick([2, 3, 4, 5, 6, 8, 10]);
    const a = rnd(1, b - 1);
    const k = rnd(2, 12);
    const N = b * k;
    const ans = a * k;
    const { options, answerIndex } = buildOptions(ans, numDistractors(ans));
    return {
      en: { text: `What is ${a}/${b} of ${N}?`, options, answerIndex, explanation: `(${a}/${b}) × ${N} = ${ans}.` },
      ur: { text: `${N} کا ${a}/${b} کتنا ہے؟`, options, answerIndex, explanation: `(${a}/${b}) × ${N} = ${ans}۔` },
    };
  },
];

/* 9. INTEREST, PROFIT & LOSS */
GEN.interest_profit_loss = [
  () => {
    const P = pick([500, 800, 1000, 1200, 1500, 2000, 2500, 4000, 5000]);
    const R = pick([4, 5, 6, 8, 10, 12]);
    const T = pick([1, 2, 3, 4, 5]);
    const SI = (P * R * T) / 100;
    const { options, answerIndex } = buildOptions(SI, numDistractors(SI, Math.max(10, Math.round(SI * 0.25))));
    return {
      en: { text: `Find the simple interest on Rs. ${P} at ${R}% per annum for ${T} years.`, options: options.map(o => 'Rs. ' + o), answerIndex, explanation: `SI = (P × R × T) ÷ 100 = (${P} × ${R} × ${T}) ÷ 100 = ${SI}.` },
      ur: { text: `روپے ${P} پر ${R}% سالانہ شرح سود سے ${T} سال کا سادہ سود (simple interest) معلوم کریں۔`, options: options.map(o => 'روپے ' + o), answerIndex, explanation: `سادہ سود = (P × R × T) ÷ 100 = (${P} × ${R} × ${T}) ÷ 100 = ${SI}۔` },
    };
  },
  () => {
    const CP = pick([200, 400, 500, 600, 800, 1000, 1200, 1500, 2000]);
    const pct = pick([5, 10, 15, 20, 25, -5, -10, -15, -20, -25]);
    const SP = CP + (CP * pct) / 100;
    const label = pct >= 0 ? `${pct}% profit` : `${Math.abs(pct)}% loss`;
    const labelUr = pct >= 0 ? `${pct}% نفع` : `${Math.abs(pct)}% نقصان`;
    const distractorPcts = uniq([Math.abs(pct) + 5, Math.abs(pct) - 5, Math.abs(pct) + 10].filter(v => v > 0 && v !== Math.abs(pct)));
    const distractors = distractorPcts.map(v => pct >= 0 ? `${v}% profit` : `${v}% loss`);
    distractors.push(pct >= 0 ? `${Math.abs(pct)}% loss` : `${Math.abs(pct)}% profit`);
    const distractorsUr = distractorPcts.map(v => pct >= 0 ? `${v}% نفع` : `${v}% نقصان`);
    distractorsUr.push(pct >= 0 ? `${Math.abs(pct)}% نقصان` : `${Math.abs(pct)}% نفع`);
    const built = buildOptions(label, distractors);
    const map = {}; distractors.forEach((d, i) => map[d] = distractorsUr[i]); map[label] = labelUr;
    const optionsUr = built.options.map(o => map[o] || o);
    return {
      en: { text: `A shopkeeper buys an item for Rs. ${CP} and sells it for Rs. ${SP}. What is the profit or loss percentage?`, options: built.options, answerIndex: built.answerIndex, explanation: `SP − CP = ${SP} − ${CP} = ${SP - CP}; percentage = (${SP - CP} ÷ ${CP}) × 100 = ${label}.` },
      ur: { text: `ایک دکاندار روپے ${CP} میں چیز خریدتا ہے اور روپے ${SP} میں فروخت کرتا ہے۔ نفع یا نقصان کی فیصد کتنی ہے؟`, options: optionsUr, answerIndex: built.answerIndex, explanation: `SP − CP = ${SP} − ${CP} = ${SP - CP}؛ فیصد = (${SP - CP} ÷ ${CP}) × 100 = ${labelUr}۔` },
    };
  },
  () => {
    const CP = pick([300, 500, 600, 800, 1000, 1200]);
    const MP = CP + pick([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) * 20;
    const D = pick([5, 10, 15, 20, 25]);
    const SP = MP - (MP * D) / 100;
    const diff = SP - CP;
    const ans = diff >= 0 ? `Profit of Rs. ${diff}` : `Loss of Rs. ${Math.abs(diff)}`;
    const ansUr = diff >= 0 ? `روپے ${diff} کا نفع` : `روپے ${Math.abs(diff)} کا نقصان`;
    const distractors = [
      diff >= 0 ? `Loss of Rs. ${diff}` : `Profit of Rs. ${Math.abs(diff)}`,
      `Profit of Rs. ${Math.abs(diff) + 20}`,
      `Loss of Rs. ${Math.abs(diff) + 20}`,
    ];
    const distractorsUr = [
      diff >= 0 ? `روپے ${diff} کا نقصان` : `روپے ${Math.abs(diff)} کا نفع`,
      `روپے ${Math.abs(diff) + 20} کا نفع`,
      `روپے ${Math.abs(diff) + 20} کا نقصان`,
    ];
    const built = buildOptions(ans, distractors);
    const map = {}; distractors.forEach((d, i) => map[d] = distractorsUr[i]); map[ans] = ansUr;
    const optionsUr = built.options.map(o => map[o] || o);
    return {
      en: { text: `A shopkeeper buys an item for Rs. ${CP}. It is marked at Rs. ${MP} and sold at a ${D}% discount. Did the shopkeeper make a profit or a loss, and how much?`, options: built.options, answerIndex: built.answerIndex, explanation: `SP = ${MP} − ${D}% of ${MP} = ${SP}; SP − CP = ${SP} − ${CP} = ${diff >= 0 ? 'Profit of Rs. ' + diff : 'Loss of Rs. ' + Math.abs(diff)}.` },
      ur: { text: `ایک دکاندار روپے ${CP} میں چیز خریدتا ہے۔ اسے روپے ${MP} کا نشان لگا کر ${D}% رعایت پر فروخت کیا جاتا ہے۔ دکاندار کو نفع ہوا یا نقصان، اور کتنا؟`, options: optionsUr, answerIndex: built.answerIndex, explanation: `SP = ${MP} − ${MP} کا ${D}% = ${SP}؛ SP − CP = ${SP} − ${CP} = ${ansUr}۔` },
    };
  },
  () => {
    const validCombos = [];
    const Ps = [100, 200, 400, 500, 800, 1000, 1600, 2000];
    const Rs_ = [10, 20, 25, 50];
    for (const P of Ps) for (const R of Rs_) {
      const A = (P * (100 + R) * (100 + R)) / 10000;
      if (Number.isInteger(A)) validCombos.push([P, R, A]);
    }
    const [P, R, A] = pick(validCombos);
    const CI = A - P;
    const { options, answerIndex } = buildOptions(CI, numDistractors(CI, Math.max(5, Math.round(CI * 0.3))));
    return {
      en: { text: `Find the compound interest on Rs. ${P} at ${R}% per annum for 2 years, compounded annually.`, options: options.map(o => 'Rs. ' + o), answerIndex, explanation: `Amount = P × (1 + R/100)² = ${A}; CI = Amount − P = ${A} − ${P} = ${CI}.` },
      ur: { text: `روپے ${P} پر ${R}% سالانہ شرح سے 2 سال کا مرکب سود (compound interest) معلوم کریں (سالانہ بنیاد پر)۔`, options: options.map(o => 'روپے ' + o), answerIndex, explanation: `رقم = P × (1 + R/100)² = ${A}؛ مرکب سود = ${A} − ${P} = ${CI}۔` },
    };
  },
  () => {
    const n = pick([4, 5, 6, 8, 10]);
    const cpEach = pick([40, 50, 60, 80, 100]);
    const total = n * cpEach;
    const sp = cpEach + pick([5, 10, 15, 20]);
    const ans = n * sp - total;
    const { options, answerIndex } = buildOptions(ans, numDistractors(ans, Math.max(10, Math.round(ans * 0.3))));
    return {
      en: { text: `A trader bought ${n} items for a total of Rs. ${total}. He sold each item for Rs. ${sp}. What is his total profit?`, options: options.map(o => 'Rs. ' + o), answerIndex, explanation: `Total sale = ${n} × ${sp} = ${n * sp}; profit = ${n * sp} − ${total} = ${ans}.` },
      ur: { text: `ایک تاجر نے ${n} اشیاء کل روپے ${total} میں خریدیں۔ اس نے ہر شے روپے ${sp} میں فروخت کی۔ اس کا کل نفع کتنا ہوگا؟`, options: options.map(o => 'روپے ' + o), answerIndex, explanation: `کل فروخت = ${n} × ${sp} = ${n * sp}؛ نفع = ${n * sp} − ${total} = ${ans}۔` },
    };
  },
];

/* 10. SPEED, TIME, DISTANCE & ESTIMATION */
GEN.speed_time_distance = [
  () => {
    const S = pick([20, 30, 40, 50, 60, 70, 80, 90]);
    const T = pick([2, 3, 4, 5, 6]);
    const D = S * T;
    const { options, answerIndex } = buildOptions(S, numDistractors(S, 10));
    return {
      en: { text: `A car travels ${D} km in ${T} hours. What is its average speed?`, options: options.map(o => o + ' km/h'), answerIndex, explanation: `Speed = Distance ÷ Time = ${D} ÷ ${T} = ${S} km/h.` },
      ur: { text: `ایک گاڑی ${T} گھنٹوں میں ${D} کلومیٹر کا سفر طے کرتی ہے۔ اس کی اوسط رفتار کتنی ہے؟`, options: options.map(o => o + ' کلومیٹر/گھنٹہ'), answerIndex, explanation: `رفتار = فاصلہ ÷ وقت = ${D} ÷ ${T} = ${S} کلومیٹر/گھنٹہ۔` },
    };
  },
  () => {
    const S = pick([30, 40, 50, 60, 70, 80, 90, 100]);
    const T = pick([2, 3, 4, 5]);
    const ans = S * T;
    const { options, answerIndex } = buildOptions(ans, numDistractors(ans));
    return {
      en: { text: `A train travels at a constant speed of ${S} km/h. How far will it travel in ${T} hours?`, options: options.map(o => o + ' km'), answerIndex, explanation: `Distance = Speed × Time = ${S} × ${T} = ${ans} km.` },
      ur: { text: `ایک ٹرین ${S} کلومیٹر فی گھنٹہ کی مستقل رفتار سے سفر کرتی ہے۔ ${T} گھنٹوں میں وہ کتنا فاصلہ طے کرے گی؟`, options: options.map(o => o + ' کلومیٹر'), answerIndex, explanation: `فاصلہ = رفتار × وقت = ${S} × ${T} = ${ans} کلومیٹر۔` },
    };
  },
  () => {
    const S = pick([20, 30, 40, 50, 60]);
    const T = pick([2, 3, 4, 5, 6]);
    const D = S * T;
    const { options, answerIndex } = buildOptions(T, numDistractors(T, 2));
    return {
      en: { text: `Travelling at a speed of ${S} km/h, how long will it take to cover ${D} km?`, options: options.map(o => o + ' hours'), answerIndex, explanation: `Time = Distance ÷ Speed = ${D} ÷ ${S} = ${T} hours.` },
      ur: { text: `${S} کلومیٹر فی گھنٹہ کی رفتار سے ${D} کلومیٹر کا فاصلہ طے کرنے میں کتنا وقت لگے گا؟`, options: options.map(o => o + ' گھنٹے'), answerIndex, explanation: `وقت = فاصلہ ÷ رفتار = ${D} ÷ ${S} = ${T} گھنٹے۔` },
    };
  },
  () => {
    const unit = pick([10, 100, 1000]);
    let N;
    if (unit === 10) N = rnd(11, 989);
    else if (unit === 100) N = rnd(110, 9899);
    else N = rnd(1100, 98999);
    const ans = Math.round(N / unit) * unit;
    const distractors = [ans - unit, ans + unit, ans - 2 * unit].filter(v => v >= 0);
    const { options, answerIndex } = buildOptions(ans, distractors);
    return {
      en: { text: `Round ${N} to the nearest ${unit}.`, options, answerIndex, explanation: `${N} is closest to ${ans} among multiples of ${unit}.` },
      ur: { text: `${N} کو قریب ترین ${unit} تک round کریں۔`, options, answerIndex, explanation: `${unit} کے مضربوں میں سے ${N} کے قریب ترین عدد ${ans} ہے۔` },
    };
  },
  () => {
    const A = rnd(11, 489), B = rnd(11, 489);
    const rA = Math.round(A / 10) * 10, rB = Math.round(B / 10) * 10;
    const ans = rA + rB;
    const { options, answerIndex } = buildOptions(ans, numDistractors(ans, 20));
    return {
      en: { text: `Estimate the sum of ${A} and ${B} by first rounding each number to the nearest 10.`, options, answerIndex, explanation: `${A} ≈ ${rA}, ${B} ≈ ${rB}; ${rA} + ${rB} = ${ans}.` },
      ur: { text: `${A} اور ${B} کو پہلے قریب ترین 10 تک round کر کے ان کا مجموعی تخمینہ (estimate) لگائیں۔`, options, answerIndex, explanation: `${A} ≈ ${rA}, ${B} ≈ ${rB}؛ ${rA} + ${rB} = ${ans}۔` },
    };
  },
];

/* ═══════════════════════ generation loop ═══════════════════════ */
const TARGET_PER_CATEGORY = 50;
let enQuestions = [];
let urQuestions = [];
let idCounter = 1;

for (const cat of CATEGORIES) {
  const templates = GEN[cat.id];
  const seenEn = new Set();
  let produced = 0;
  let templateIdx = 0;
  let guard = 0;
  while (produced < TARGET_PER_CATEGORY && guard < TARGET_PER_CATEGORY * 40) {
    guard++;
    const tmpl = templates[templateIdx % templates.length];
    templateIdx++;
    const { en, ur } = tmpl();
    if (seenEn.has(en.text)) continue;
    seenEn.add(en.text);
    const id = idCounter++;
    enQuestions.push(Object.assign({ id, category: cat.id }, en));
    urQuestions.push(Object.assign({ id, category: cat.id }, ur));
    produced++;
  }
  if (produced < TARGET_PER_CATEGORY) {
    console.error(`WARNING: only produced ${produced}/${TARGET_PER_CATEGORY} for ${cat.id}`);
  }
}

/* ═══════════════════════ verification pass ═══════════════════════ */
let errors = 0;
for (const q of [...enQuestions, ...urQuestions]) {
  if (!Array.isArray(q.options) || q.options.length !== 4) { console.error('BAD OPTIONS COUNT', q.id, q.options); errors++; }
  if (q.answerIndex < 0 || q.answerIndex > 3) { console.error('BAD ANSWER INDEX', q.id); errors++; }
  const setLen = new Set(q.options).size;
  if (setLen !== 4) { console.error('DUPLICATE OPTIONS', q.id, q.options); errors++; }
}
console.log(`Generated ${enQuestions.length} EN questions, ${urQuestions.length} UR questions. Errors: ${errors}`);
for (const cat of CATEGORIES) {
  const c = enQuestions.filter(q => q.category === cat.id).length;
  console.log(`  ${cat.id}: ${c}`);
}

/* ═══════════════════════ write output ═══════════════════════ */
function buildBank(questions, lang) {
  return {
    meta: {
      title: lang === 'en' ? 'Numerical Reasoning Test' : 'عددی استدلال کا امتحان',
      description: lang === 'en'
        ? 'A skills-based test that evaluates your ability to handle data, graphs, percentages, ratios, and word problems across 10 areas of numerical reasoning. Each question has one correct answer.'
        : 'ایک مہارت پر مبنی امتحان جو یہ جانچتا ہے کہ آپ اعداد و شمار، گراف، فیصد، تناسب اور حسابی مسائل کو 10 مختلف شعبوں میں کس طرح حل کرتے ہیں۔ ہر سوال کا ایک درست جواب ہے۔',
      categories: CATEGORIES.map(c => ({ id: c.id, label: lang === 'en' ? c.en : c.ur, icon: c.icon })),
      levels: lang === 'en' ? LEVELS_EN : LEVELS_UR,
    },
    questions,
  };
}

const outDir = path.join(__dirname, 'assets');
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'questions.json'), JSON.stringify(buildBank(enQuestions, 'en'), null, 2), 'utf8');
fs.writeFileSync(path.join(outDir, 'questions-urdu.json'), JSON.stringify(buildBank(urQuestions, 'ur'), null, 2), 'utf8');
console.log('Written to', outDir);
