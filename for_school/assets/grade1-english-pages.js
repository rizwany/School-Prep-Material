(function () {
  'use strict';

  const TOPICS = {
    'listening-speaking': {
      title: 'Listening & Speaking',
      intro: 'Practice polite greetings, self-introduction, classroom instructions, and short oral answers.',
      focus: ['Greetings: Good morning, Assalam-o-Alaikum, Hello', 'Introducing yourself clearly', 'Talking about family, school, friends, pets, colors, and food', 'Following simple classroom instructions', 'Listening to short rhymes and stories'],
      examples: [
        ['Greeting', '"Good morning, teacher."'],
        ['Introduction', '"My name is Sara. I am six years old."'],
        ['Instruction', '"Please open your book."'],
        ['Question', '"What color is your bag?" "It is blue."']
      ],
      quick: ['Use a clear voice.', 'Look at the person who is speaking.', 'Answer in a full short sentence.', 'Say please and thank you.'],
      questions: [
        { type: 'select', text: 'Choose a polite morning greeting.', options: ['Good morning', 'Good night', 'Goodbye'], answer: 'Good morning' },
        { type: 'text', text: 'Complete: My name ___ Ali.', answer: 'is' },
        { type: 'select', text: 'Which sentence tells your name?', options: ['My name is Ayesha.', 'This is red.', 'The cat runs.'], answer: 'My name is Ayesha.' },
        { type: 'select', text: 'Teacher says: "Stand up." What should you do?', options: ['Stand up', 'Sleep', 'Close your eyes'], answer: 'Stand up' },
        { type: 'text', text: 'Complete the polite word: ___ open your book.', answer: 'please' },
        { type: 'radio', text: 'True or False: "Thank you" is a polite phrase.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Choose a question about color.', options: ['What color is it?', 'How old are you?', 'Where is the cat?'], answer: 'What color is it?' },
        { type: 'text', text: 'Complete: I ___ apples.', answer: 'like' },
        { type: 'select', text: 'Which is a classroom instruction?', options: ['Open your book', 'Red mango', 'Three cats'], answer: 'Open your book' },
        { type: 'text', text: 'Complete: Hello, how ___ you?', answer: 'are' }
      ]
    },
    'phonics-reading': {
      title: 'Phonics & Reading',
      intro: 'Learn alphabet letters, capital and small letters, letter sounds, beginning sounds, CVC words, sight words, and simple sentences.',
      focus: ['Alphabet recognition A-Z', 'Capital and small letters', 'Beginning sounds', 'Two-letter and three-letter words', 'CVC words such as cat, bat, pin, sun', 'Sight words: I, am, is, are, the, this, that'],
      examples: [
        ['Capital and small', 'A a, B b, C c'],
        ['Beginning sound', 'sun starts with s'],
        ['CVC word', 'c-a-t makes cat'],
        ['Sight sentence', 'This is a cat.']
      ],
      quick: ['Say the letter sound slowly.', 'Blend the sounds from left to right.', 'Read sight words by memory.', 'Point to each word while reading.'],
      questions: [
        { type: 'select', text: 'Which is the small letter for A?', options: ['a', 'b', 'd'], answer: 'a' },
        { type: 'select', text: 'Which word starts with /b/?', options: ['bat', 'cat', 'sun'], answer: 'bat' },
        { type: 'text', text: 'Complete the CVC word: c _ t', answer: 'a' },
        { type: 'select', text: 'Choose the sight word.', options: ['the', 'zqp', 'mip'], answer: 'the' },
        { type: 'radio', text: 'True or False: cat has three letters.', options: ['True', 'False'], answer: 'True' },
        { type: 'text', text: 'Write the beginning letter of sun.', answer: 's' },
        { type: 'select', text: 'Which is a simple sentence?', options: ['I am Sam.', 'blue red', 'cat bat sun'], answer: 'I am Sam.' },
        { type: 'text', text: 'Complete: p _ n', answer: 'i' },
        { type: 'select', text: 'Which word rhymes with cat?', options: ['bat', 'pin', 'dog'], answer: 'bat' },
        { type: 'text', text: 'Complete the sight sentence: This ___ a bag.', answer: 'is' }
      ]
    },
    vocabulary: {
      title: 'Vocabulary',
      intro: 'Build useful Grade 1 word banks for colors, numbers, fruits, vegetables, animals, body parts, family, classroom objects, days, and action words.',
      focus: ['Colors and numbers', 'Fruits and vegetables', 'Animals and body parts', 'Family members', 'Classroom objects', 'Days of the week', 'Common action words'],
      examples: [
        ['Color', 'red, blue, green'],
        ['Fruit', 'apple, mango, banana'],
        ['Animal', 'cat, dog, cow'],
        ['Action', 'run, jump, read']
      ],
      quick: ['Group words by topic.', 'Say each word aloud.', 'Match words to pictures.', 'Use new words in short sentences.'],
      questions: [
        { type: 'select', text: 'Which word is a color?', options: ['blue', 'apple', 'run'], answer: 'blue' },
        { type: 'select', text: 'Which word is a fruit?', options: ['mango', 'chair', 'jump'], answer: 'mango' },
        { type: 'text', text: 'Complete the animal word: c_t', answer: 'a' },
        { type: 'select', text: 'Which is a body part?', options: ['hand', 'Monday', 'pencil'], answer: 'hand' },
        { type: 'select', text: 'Which is a classroom object?', options: ['book', 'banana', 'cow'], answer: 'book' },
        { type: 'radio', text: 'True or False: Monday is a day of the week.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Which is an action word?', options: ['run', 'red', 'mother'], answer: 'run' },
        { type: 'text', text: 'Complete the family word: f_ther', answer: 'a' },
        { type: 'select', text: 'Which word names a vegetable?', options: ['carrot', 'desk', 'dog'], answer: 'carrot' },
        { type: 'text', text: 'Complete: I can ___ a book.', answer: 'read' }
      ]
    },
    grammar: {
      title: 'Grammar',
      intro: 'Practice early grammar: nouns, verbs, this/that, these/those, a/an, is/am/are, he/she/it, plurals, capital letters, and full stops.',
      focus: ['Naming words and action words', 'This/That and These/Those', 'A/An', 'Is/Am/Are', 'He/She/It', 'Singular and plural words', 'Capital letters and full stop'],
      examples: [
        ['Noun', 'The cat sleeps. Cat is a naming word.'],
        ['Verb', 'Ali runs. Runs is an action word.'],
        ['A/An', 'a dog, an apple'],
        ['Sentence', 'This is a book.']
      ],
      quick: ['A noun names a person, place, animal, or thing.', 'A verb shows action.', 'Use an before a vowel sound.', 'Begin a sentence with a capital letter and end with a full stop.'],
      questions: [
        { type: 'select', text: 'Which word is a noun?', options: ['cat', 'run', 'blue'], answer: 'cat' },
        { type: 'select', text: 'Which word is a verb?', options: ['jump', 'apple', 'chair'], answer: 'jump' },
        { type: 'select', text: 'Choose the correct phrase.', options: ['an apple', 'a apple', 'an dog'], answer: 'an apple' },
        { type: 'text', text: 'Complete: I ___ happy.', answer: 'am' },
        { type: 'select', text: 'Choose the correct word: ___ is my sister.', options: ['She', 'He', 'It'], answer: 'She' },
        { type: 'text', text: 'Write the plural of cat.', answer: 'cats' },
        { type: 'radio', text: 'True or False: A sentence starts with a capital letter.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Choose the correct sentence.', options: ['This is a pen.', 'this is a pen', 'This is a pen'], answer: 'This is a pen.' },
        { type: 'text', text: 'Complete: They ___ friends.', answer: 'are' },
        { type: 'select', text: 'Use for one nearby thing.', options: ['This', 'These', 'Those'], answer: 'This' }
      ]
    },
    writing: {
      title: 'Writing',
      intro: 'Practice tracing, writing letters, picture words, missing letters, and short sentences such as "My name is..." and "I like...".',
      focus: ['Tracing letters', 'Writing capital and small letters', 'Writing words from pictures', 'Completing missing letters', 'Writing simple sentences', 'My name is...', 'I like...', 'This is a...'],
      examples: [
        ['Letter pair', 'M m'],
        ['Missing letter', 'b _ g -> bag'],
        ['Picture word', 'cat'],
        ['Sentence frame', 'I like mangoes.']
      ],
      quick: ['Sit straight and hold the pencil gently.', 'Leave finger space between words.', 'Start with a capital letter.', 'End the sentence with a full stop.'],
      questions: [
        { type: 'text', text: 'Complete the word: b_g', answer: 'a' },
        { type: 'text', text: 'Write the small letter for B.', answer: 'b' },
        { type: 'select', text: 'Choose the correct sentence.', options: ['My name is Ali.', 'my name is Ali', 'My name is Ali'], answer: 'My name is Ali.' },
        { type: 'text', text: 'Complete: I like ___.', answer: 'apples', alt: ['mangoes', 'bananas', 'milk', 'cats', 'dogs'] },
        { type: 'text', text: 'Complete the word: p_n', answer: 'e' },
        { type: 'select', text: 'Which mark ends a sentence?', options: ['Full stop', 'Comma', 'Capital letter'], answer: 'Full stop' },
        { type: 'text', text: 'Write the capital letter for m.', answer: 'M' },
        { type: 'select', text: 'Choose a neat sentence frame.', options: ['This is a book.', 'Book this a is', 'this is a book'], answer: 'This is a book.' },
        { type: 'text', text: 'Complete: My name ___ Sara.', answer: 'is' },
        { type: 'radio', text: 'True or False: We leave spaces between words.', options: ['True', 'False'], answer: 'True' }
      ]
    },
    'literature-rhymes': {
      title: 'Literature & Rhymes',
      intro: 'Enjoy short poems, rhymes, moral stories, and picture stories while practicing simple comprehension.',
      focus: ['Short poems', 'Rhymes', 'Moral stories', 'Picture stories', 'Answering who, what, and where questions', 'Retelling a story in simple words'],
      examples: [
        ['Rhyme words', 'cat, bat, hat'],
        ['Story question', 'Who helped the bird?'],
        ['Moral', 'Be kind and helpful.'],
        ['Retelling', 'First, next, last']
      ],
      quick: ['Listen for rhyming words.', 'Look at pictures for clues.', 'Name the characters.', 'Tell what happened first, next, and last.'],
      questions: [
        { type: 'select', text: 'Which word rhymes with sun?', options: ['fun', 'cat', 'book'], answer: 'fun' },
        { type: 'select', text: 'Who is a character?', options: ['A boy in the story', 'The page number', 'A full stop'], answer: 'A boy in the story' },
        { type: 'text', text: 'Complete the rhyme pair: cat and ___', answer: 'bat', alt: ['hat', 'mat', 'rat'] },
        { type: 'select', text: 'What does a moral teach us?', options: ['A good lesson', 'Only a color', 'A letter sound'], answer: 'A good lesson' },
        { type: 'radio', text: 'True or False: Pictures can help us understand a story.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Choose a story order word.', options: ['First', 'Blue', 'Seven'], answer: 'First' },
        { type: 'text', text: 'Complete: Be kind and ___ others.', answer: 'help' },
        { type: 'select', text: 'Which is a question about a story?', options: ['Who is in the story?', 'Red blue green', 'A an the'], answer: 'Who is in the story?' },
        { type: 'text', text: 'Complete the rhyme pair: dog and ___', answer: 'log' },
        { type: 'select', text: 'A short poem with repeating sounds is often called a...', options: ['rhyme', 'number', 'table'], answer: 'rhyme' }
      ]
    }
  };

  function topic() {
    const cfg = window.ENGLISH_PAGE || {};
    return TOPICS[cfg.slug] || TOPICS['phonics-reading'];
  }

  function nextPrev(slug) {
    const keys = Object.keys(TOPICS);
    const i = keys.indexOf(slug);
    return {
      prev: TOPICS[keys[(i - 1 + keys.length) % keys.length]],
      prevSlug: keys[(i - 1 + keys.length) % keys.length],
      next: TOPICS[keys[(i + 1) % keys.length]],
      nextSlug: keys[(i + 1) % keys.length]
    };
  }

  function normalize(value) {
    return String(value || '').trim().toLowerCase().replace(/[.?!]+$/g, '');
  }

  function resultText(title, score, total) {
    return 'I scored ' + score + '/' + total + ' on the Grade 1 English ' + title + ' worksheet on LearnPad.';
  }

  function shareResult(title, score, total) {
    const text = resultText(title, score, total);
    const shareData = {
      title: 'LearnPad Grade 1 English Result',
      text: text,
      url: window.location.href
    };

    if (navigator.share) {
      navigator.share(shareData).catch(function () {});
      return;
    }

    const fallback = text + ' ' + window.location.href;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(fallback).then(function () {
        window.alert('Result copied. You can paste it into WhatsApp, Facebook, or any chat.');
      }).catch(function () {
        window.prompt('Copy your result:', fallback);
      });
    } else {
      window.prompt('Copy your result:', fallback);
    }
  }

  function isCorrect(q, value) {
    const accepted = [q.answer].concat(q.alt || []).map(normalize);
    return accepted.indexOf(normalize(value)) !== -1;
  }

  function questionInputHtml(q, i, prefix) {
    const id = prefix + i;
    if (q.type === 'select') {
      const cls = prefix === 'cvq' ? 'cv-select' : 'q-select';
      return '<select class="' + cls + '" id="' + id + '"><option value="">Choose...</option>' + q.options.map(function (o) {
        return '<option value="' + o + '">' + o + '</option>';
      }).join('') + '</select>';
    }
    if (q.type === 'radio') {
      const groupCls = prefix === 'cvq' ? 'cv-radio-group' : 'radio-group';
      const labelCls = prefix === 'cvq' ? 'cv-radio-label' : 'radio-label';
      return '<div class="' + groupCls + '">' + q.options.map(function (o) {
        return '<label class="' + labelCls + '"><input type="radio" name="' + id + '" value="' + o + '"> ' + o + '</label>';
      }).join('') + '</div>';
    }
    return '<input class="' + (prefix === 'cvq' ? 'cv-input' : 'q-input') + '" id="' + id + '" type="text" autocomplete="off">';
  }

  function getAnswer(q, i, prefix) {
    const id = prefix + i;
    if (q.type === 'radio') {
      const checked = document.querySelector('input[name="' + id + '"]:checked');
      return checked ? checked.value : '';
    }
    const input = document.getElementById(id);
    return input ? input.value : '';
  }

  function setupCompactMode(data) {
    const controls = document.querySelector('.controls');
    if (controls && !document.getElementById('compactViewBtn')) {
      controls.insertAdjacentHTML('beforeend', '<div class="controls-divider" aria-hidden="true"></div><button class="btn btn-neutral" id="compactViewBtn">Compact View</button>');
    }

    if (!document.getElementById('cvOverlay')) {
      document.body.insertAdjacentHTML('beforeend',
        '<div id="cvOverlay" class="cv-overlay hidden" role="dialog" aria-modal="true" aria-label="Compact worksheet mode">' +
          '<div class="cv-header"><button class="cv-exit" id="cvExitBtn" aria-label="Exit compact view">Exit</button><div class="cv-prog-text">Question <span id="cvQNum">1</span> of 10</div><div class="cv-score-chip" id="cvScoreChip">0 correct</div></div>' +
          '<div class="cv-progress-track"><div class="cv-progress-fill" id="cvProgressFill" style="width:0%"></div></div>' +
          '<div class="cv-body" id="cvQuestionSection"><div class="cv-card" id="cvCard"><div class="cv-q-label" id="cvQLabel">Question 1 of 10</div><div class="cv-question-text" id="cvQuestionText"></div><div id="cvInputArea"></div><div class="cv-feedback" id="cvFeedback"></div></div></div>' +
          '<div class="cv-body hidden" id="cvResultSection"><div class="cv-result-body"><div class="cv-result-score-big" id="cvResultScore">0/10</div><div class="cv-result-msg" id="cvResultMsg"></div><div class="cv-result-dots" id="cvResultDots"></div><div class="cv-result-btns"><button class="btn btn-primary btn-lg" id="cvPlayAgainBtn">Play Again</button><button class="btn btn-outline btn-lg" id="cvShareResultBtn">Share Results</button><button class="btn btn-outline btn-lg" id="cvExitResultBtn">Exit Compact View</button></div></div></div>' +
          '<div class="cv-footer" id="cvFooter"><div class="cv-ctas"><button class="cv-btn-skip" id="cvSkipBtn">Skip</button><button class="cv-btn-submit" id="cvSubmitBtn">Submit</button></div></div>' +
        '</div>');
    }

    let current = 0;
    let score = 0;
    let checkedCurrent = false;
    const answered = new Array(data.questions.length).fill(null);

    function showQuestion() {
      const q = data.questions[current];
      checkedCurrent = answered[current] !== null;
      document.getElementById('cvQuestionSection').classList.remove('hidden');
      document.getElementById('cvResultSection').classList.add('hidden');
      document.getElementById('cvFooter').classList.remove('hidden');
      document.getElementById('cvQNum').textContent = String(current + 1);
      document.getElementById('cvQLabel').textContent = 'Question ' + (current + 1) + ' of ' + data.questions.length;
      document.getElementById('cvQuestionText').innerHTML = q.text;
      document.getElementById('cvInputArea').innerHTML = questionInputHtml(q, current, 'cvq');
      document.getElementById('cvProgressFill').style.width = (current / data.questions.length * 100) + '%';
      document.getElementById('cvScoreChip').textContent = score + ' correct';
      document.getElementById('cvSubmitBtn').textContent = 'Submit';
      document.getElementById('cvSkipBtn').disabled = false;
      const feedback = document.getElementById('cvFeedback');
      feedback.className = 'cv-feedback';
      feedback.textContent = '';
      const card = document.getElementById('cvCard');
      card.classList.remove('cv-correct', 'cv-wrong');
      card.classList.add('cv-slide-in');
      setTimeout(function () { card.classList.remove('cv-slide-in'); }, 350);
    }

    function showResult() {
      document.getElementById('cvQuestionSection').classList.add('hidden');
      document.getElementById('cvResultSection').classList.remove('hidden');
      document.getElementById('cvFooter').classList.add('hidden');
      document.getElementById('cvProgressFill').style.width = '100%';
      document.getElementById('cvResultScore').textContent = score + '/' + data.questions.length;
      document.getElementById('cvResultMsg').textContent = score >= 8 ? 'Excellent work.' : score >= 5 ? 'Good practice. Review the guide and try again.' : 'Keep practicing. You are building the skill.';
      document.getElementById('cvResultDots').innerHTML = answered.map(function (ok) {
        return '<span class="cv-result-dot ' + (ok ? 'dot-correct' : 'dot-wrong') + '">' + (ok ? '&check;' : '&times;') + '</span>';
      }).join('');
    }

    function goNext() {
      current += 1;
      if (current >= data.questions.length) showResult();
      else showQuestion();
    }

    document.getElementById('compactViewBtn').addEventListener('click', function () {
      current = 0;
      score = 0;
      checkedCurrent = false;
      answered.fill(null);
      document.getElementById('cvOverlay').classList.remove('hidden');
      showQuestion();
    });
    document.getElementById('cvExitBtn').addEventListener('click', function () {
      document.getElementById('cvOverlay').classList.add('hidden');
    });
    document.getElementById('cvExitResultBtn').addEventListener('click', function () {
      document.getElementById('cvOverlay').classList.add('hidden');
    });
    document.getElementById('cvPlayAgainBtn').addEventListener('click', function () {
      current = 0;
      score = 0;
      checkedCurrent = false;
      answered.fill(null);
      showQuestion();
    });
    document.getElementById('cvShareResultBtn').addEventListener('click', function () {
      shareResult(data.title, score, data.questions.length);
    });
    document.getElementById('cvSkipBtn').addEventListener('click', function () {
      answered[current] = false;
      goNext();
    });
    document.getElementById('cvSubmitBtn').addEventListener('click', function () {
      if (checkedCurrent) {
        goNext();
        return;
      }
      const q = data.questions[current];
      const value = getAnswer(q, current, 'cvq');
      const feedback = document.getElementById('cvFeedback');
      const card = document.getElementById('cvCard');
      if (!normalize(value)) {
        feedback.className = 'cv-feedback show cv-fb-wrong';
        feedback.textContent = 'Please answer this question first.';
        return;
      }
      const correct = isCorrect(q, value);
      answered[current] = correct;
      if (correct) score += 1;
      checkedCurrent = true;
      card.classList.add(correct ? 'cv-correct' : 'cv-wrong');
      feedback.className = 'cv-feedback show ' + (correct ? 'cv-fb-correct' : 'cv-fb-wrong');
      feedback.textContent = correct ? 'Correct. Nice work.' : 'Not quite. Correct answer: ' + q.answer;
      document.getElementById('cvScoreChip').textContent = score + ' correct';
      document.getElementById('cvSubmitBtn').textContent = current === data.questions.length - 1 ? 'Finish' : 'Next';
      document.getElementById('cvSkipBtn').disabled = true;
    });
  }

  function renderHelp() {
    const cfg = window.ENGLISH_PAGE;
    const data = topic();
    const nav = nextPrev(cfg.slug);
    document.title = data.title + ' - Grade 1 English | LearnPad';
    document.querySelector('[data-title]').textContent = data.title;
    document.querySelector('[data-intro]').textContent = data.intro;
    document.querySelector('[data-worksheet-link]').href = 'english-grade1-' + cfg.slug + '-worksheet.html';
    document.querySelector('[data-worksheet-link-bottom]').href = 'english-grade1-' + cfg.slug + '-worksheet.html';
    document.querySelector('[data-current-topic]').textContent = data.title;

    document.querySelector('[data-focus]').innerHTML = data.focus.map(function (item) {
      return '<li>' + item + '</li>';
    }).join('');

    document.querySelector('[data-examples]').innerHTML = data.examples.map(function (item) {
      return '<div class="example-card"><div class="example-header">' + item[0] + '</div><div class="example-body"><div class="example-problem">' + item[1] + '</div></div></div>';
    }).join('');

    document.querySelector('[data-quick]').innerHTML = data.quick.map(function (item) {
      return '<div class="ref-item"><div class="ref-term">Remember</div><div class="ref-def">' + item + '</div></div>';
    }).join('');

    document.querySelector('[data-prev]').href = 'english-grade1-' + nav.prevSlug + '-help.html';
    document.querySelector('[data-prev]').textContent = '<- ' + nav.prev.title;
    document.querySelector('[data-next]').href = 'english-grade1-' + nav.nextSlug + '-help.html';
    document.querySelector('[data-next]').textContent = nav.next.title + ' ->';
  }

  function renderWorksheet() {
    const cfg = window.ENGLISH_PAGE;
    const data = topic();
    const nav = nextPrev(cfg.slug);
    document.title = data.title + ' Worksheet - Grade 1 English | LearnPad';
    document.querySelector('[data-title]').textContent = data.title;
    document.querySelectorAll('[data-help-link]').forEach(function (link) {
      link.href = 'english-grade1-' + cfg.slug + '-help.html';
    });
    const currentTopic = document.querySelector('[data-current-topic]');
    if (currentTopic) currentTopic.textContent = data.title;

    const list = document.getElementById('questionsList');
    list.innerHTML = data.questions.map(function (q, i) {
      const input = questionInputHtml(q, i, 'q');
      return '<li class="q-card" id="card' + i + '"><div class="q-meta"><span class="q-num">Q' + (i + 1) + '</span><span><span class="q-icon q-icon-correct">Correct</span><span class="q-icon q-icon-wrong">Try again</span></span></div><div class="q-text">' + q.text + '</div>' + input + '<div class="answer-reveal-chip" id="a' + i + '"></div></li>';
    }).join('');
    if (!document.getElementById('shareResultBtn')) {
      document.getElementById('scoreBanner').insertAdjacentHTML('beforeend', '<div class="post-submit visible" style="display:flex;margin-top:12px"><button class="btn btn-outline btn-lg" id="shareResultBtn">Share Results</button></div>');
    }
    setupCompactMode(data);

    document.getElementById('submitBtn').addEventListener('click', function () {
      let score = 0;
      data.questions.forEach(function (q, i) {
        const value = getAnswer(q, i, 'q');
        const correct = isCorrect(q, value);
        const card = document.getElementById('card' + i);
        const reveal = document.getElementById('a' + i);
        card.classList.remove('correct', 'wrong');
        card.classList.add(correct ? 'correct' : 'wrong');
        reveal.className = 'answer-reveal-chip visible ' + (correct ? 'was-correct' : 'was-wrong');
        reveal.textContent = correct ? 'Correct' : 'Answer: ' + q.answer;
        if (correct) score += 1;
      });
      document.getElementById('scoreBanner').classList.add('visible');
      document.getElementById('scoreNum').textContent = score + '/10';
      document.getElementById('scoreMsg').textContent = score >= 8 ? 'Excellent work.' : score >= 5 ? 'Good practice. Review the answers and try again.' : 'Keep practicing. Read the guide, then try once more.';
      document.getElementById('progressFill').style.width = (score * 10) + '%';
      document.getElementById('shareResultBtn').onclick = function () {
        shareResult(data.title, score, data.questions.length);
      };
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    document.getElementById('newWsBtn').addEventListener('click', function () { location.reload(); });
    document.getElementById('newWsBtnBottom').addEventListener('click', function () { location.reload(); });
    document.querySelector('[data-prev]').href = 'english-grade1-' + nav.prevSlug + '-worksheet.html';
    document.querySelector('[data-prev]').textContent = '<- ' + nav.prev.title;
    document.querySelector('[data-next]').href = 'english-grade1-' + nav.nextSlug + '-worksheet.html';
    document.querySelector('[data-next]').textContent = nav.next.title + ' ->';
  }

  window.Grade1EnglishPages = { renderHelp: renderHelp, renderWorksheet: renderWorksheet };
})();
