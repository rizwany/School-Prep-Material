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

  const TOPICS_GRADE2 = {
    'listening-speaking': {
      title: 'Listening & Speaking',
      intro: 'Practice daily conversation, polite words, simple questions, picture talk, and retelling short stories.',
      focus: ['Daily conversation', 'Asking and answering simple questions', 'Talking about likes and dislikes', 'Describing pictures', 'Retelling a short story', 'Using polite words: please, sorry, thank you, excuse me'],
      examples: [['Conversation', '"How are you?" "I am fine, thank you."'], ['Likes', '"I like mangoes." "I do not like onions."'], ['Picture talk', 'I can see a boy, a tree, and a red ball.'], ['Retelling', 'First the cat was hungry. Then it found milk.']],
      quick: ['Speak in complete short sentences.', 'Use polite words in daily talk.', 'Look carefully before describing a picture.', 'Retell a story with first, next, and last.'],
      questions: [
        { type: 'select', text: 'Choose the polite word.', options: ['please', 'shout', 'run'], answer: 'please' },
        { type: 'text', text: 'Complete: I ___ mangoes.', answer: 'like' },
        { type: 'select', text: 'Which is a simple question?', options: ['What is your name?', 'Red blue green', 'The cat'], answer: 'What is your name?' },
        { type: 'text', text: 'Complete: ___ me, may I come in?', answer: 'excuse' },
        { type: 'select', text: 'Which word helps retell a story?', options: ['First', 'Chair', 'Blue'], answer: 'First' },
        { type: 'radio', text: 'True or False: "Thank you" is polite.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Choose a picture description.', options: ['The girl is reading.', 'Reading girl the', 'Girl blue six'], answer: 'The girl is reading.' },
        { type: 'text', text: 'Complete: I am ___, thank you.', answer: 'fine' },
        { type: 'select', text: 'What do we say after making a mistake?', options: ['Sorry', 'Book', 'Cold'], answer: 'Sorry' },
        { type: 'text', text: 'Complete: I do not ___ loud noise.', answer: 'like' }
      ]
    },
    reading: {
      title: 'Reading',
      intro: 'Read short paragraphs and simple stories, answer questions, sequence events, and identify characters and setting.',
      focus: ['Short paragraphs', 'Simple story reading', 'Picture comprehension', 'Reading questions and answers', 'Sequencing events', 'Identifying characters and setting'],
      examples: [['Character', 'The boy in the story is Ali.'], ['Setting', 'The story happens in a park.'], ['Sequence', 'First, next, last'], ['Question', 'Who helped the bird?']],
      quick: ['Read the title first.', 'Look for who, where, and what happened.', 'Use pictures for clues.', 'Put events in order.'],
      questions: [
        { type: 'select', text: 'Who is a character?', options: ['The girl in the story', 'The page number', 'A full stop'], answer: 'The girl in the story' },
        { type: 'select', text: 'The place of a story is called the...', options: ['setting', 'question', 'letter'], answer: 'setting' },
        { type: 'text', text: 'Complete the sequence words: first, next, ___', answer: 'last' },
        { type: 'select', text: 'Which question asks about a person?', options: ['Who is in the story?', 'Where is the school?', 'What color is it?'], answer: 'Who is in the story?' },
        { type: 'radio', text: 'True or False: Pictures can help us understand a story.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Choose the event word.', options: ['Then', 'Pencil', 'Yellow'], answer: 'Then' },
        { type: 'text', text: 'Complete: A short story has a beginning, middle, and ___.', answer: 'end' },
        { type: 'select', text: 'Which is a reading answer?', options: ['The dog ran home.', 'Dog the ran', 'Blue three'], answer: 'The dog ran home.' },
        { type: 'text', text: 'Complete: The story happens ___ school.', answer: 'at' },
        { type: 'select', text: 'What should you do after reading a question?', options: ['Look back in the text', 'Close the book', 'Skip every word'], answer: 'Look back in the text' }
      ]
    },
    vocabulary: {
      title: 'Vocabulary',
      intro: 'Learn useful words about opposites, rhymes, weather, transport, places, professions, animals, young ones, and animal sounds.',
      focus: ['Opposite words', 'Rhyming words', 'Common objects', 'Weather words', 'Transport', 'Places around us', 'Professions', 'Animals and their young ones', 'Sounds of animals'],
      examples: [['Opposite', 'hot - cold'], ['Rhyme', 'light - night'], ['Transport', 'bus, car, train'], ['Animal sound', 'A cow moos.']],
      quick: ['Learn words in groups.', 'Match opposites.', 'Say rhyming words aloud.', 'Use new words in sentences.'],
      questions: [
        { type: 'select', text: 'Choose the opposite of hot.', options: ['cold', 'big', 'fast'], answer: 'cold' },
        { type: 'select', text: 'Which word rhymes with light?', options: ['night', 'book', 'car'], answer: 'night' },
        { type: 'select', text: 'Which is transport?', options: ['bus', 'teacher', 'cloudy'], answer: 'bus' },
        { type: 'text', text: 'Complete: A baby cat is a ___.', answer: 'kitten' },
        { type: 'select', text: 'Which is a weather word?', options: ['rainy', 'doctor', 'table'], answer: 'rainy' },
        { type: 'text', text: 'Complete: A cow says ___.', answer: 'moo', alt: ['moos'] },
        { type: 'select', text: 'Which is a profession?', options: ['doctor', 'park', 'puppy'], answer: 'doctor' },
        { type: 'radio', text: 'True or False: School is a place around us.', options: ['True', 'False'], answer: 'True' },
        { type: 'text', text: 'Write the opposite of big.', answer: 'small' },
        { type: 'select', text: 'Which is a common object?', options: ['chair', 'sunny', 'pilot'], answer: 'chair' }
      ]
    },
    grammar: {
      title: 'Grammar',
      intro: 'Practice nouns, verbs, pronouns, adjectives, articles, plurals, has/have, is/am/are, was/were, and punctuation.',
      focus: ['Nouns', 'Verbs', 'Pronouns: I, we, you, he, she, it, they', 'Adjectives/describing words', 'A/An/The', 'Singular/plural', 'Has/Have', 'Is/Am/Are', 'Was/Were introductory', 'Full stop, question mark, capital letters'],
      examples: [['Noun', 'school, mother, cat'], ['Verb', 'run, eat, read'], ['Adjective', 'big, red, happy'], ['Question mark', 'What is your name?']],
      quick: ['A noun names something.', 'A verb shows action.', 'An adjective describes a noun.', 'Use a question mark after a question.'],
      questions: [
        { type: 'select', text: 'Which word is a noun?', options: ['teacher', 'run', 'happy'], answer: 'teacher' },
        { type: 'select', text: 'Which word is a verb?', options: ['read', 'book', 'green'], answer: 'read' },
        { type: 'select', text: 'Choose the pronoun: Sara is kind. ___ helps me.', options: ['She', 'He', 'It'], answer: 'She' },
        { type: 'select', text: 'Choose the adjective.', options: ['big', 'jump', 'Ali'], answer: 'big' },
        { type: 'text', text: 'Complete: I ___ a pencil.', answer: 'have' },
        { type: 'text', text: 'Complete: He ___ a bag.', answer: 'has' },
        { type: 'select', text: 'Choose the correct article.', options: ['an orange', 'a orange', 'the orange an'], answer: 'an orange' },
        { type: 'text', text: 'Write the plural of box.', answer: 'boxes' },
        { type: 'select', text: 'Choose the correct sentence.', options: ['Where are you?', 'where are you.', 'Where are you.'], answer: 'Where are you?' },
        { type: 'text', text: 'Complete: We ___ at home yesterday.', answer: 'were' }
      ]
    },
    writing: {
      title: 'Writing',
      intro: 'Practice sentence making, picture description, blanks, rearranging words, short paragraphs, sick leave application, and dictation.',
      focus: ['Sentence making', 'Picture description', 'Fill in the blanks', 'Rearranging words to make sentences', 'Short paragraph: My School, My Mother, My Best Friend', 'Simple application: sick leave', 'Dictation practice'],
      examples: [['Sentence', 'My school is clean.'], ['Picture description', 'A boy is flying a kite.'], ['Rearrange', 'is / this / my / bag -> This is my bag.'], ['Application', 'I am sick. Please grant me leave.']],
      quick: ['Start sentences with capital letters.', 'Use finger spaces.', 'End with correct punctuation.', 'Read your sentence again.'],
      questions: [
        { type: 'select', text: 'Choose the correct sentence.', options: ['My school is big.', 'school big my is', 'my school is big'], answer: 'My school is big.' },
        { type: 'text', text: 'Complete: My best friend is ___.', answer: 'kind', alt: ['nice', 'good', 'helpful'] },
        { type: 'select', text: 'Rearrange: is / this / my / bag', options: ['This is my bag.', 'Bag my this is.', 'Is this bag my'], answer: 'This is my bag.' },
        { type: 'text', text: 'Complete: I am sick. Please grant me ___.', answer: 'leave' },
        { type: 'select', text: 'Which sentence describes a picture?', options: ['The boy is playing.', 'Playing boy the', 'Very yesterday'], answer: 'The boy is playing.' },
        { type: 'radio', text: 'True or False: A paragraph has sentences about one topic.', options: ['True', 'False'], answer: 'True' },
        { type: 'text', text: 'Complete: My mother ___ me.', answer: 'loves' },
        { type: 'select', text: 'Which title is for a short paragraph?', options: ['My School', 'The', 'Run Fast Blue'], answer: 'My School' },
        { type: 'text', text: 'Complete the dictation word: sch_ol', answer: 'o' },
        { type: 'select', text: 'Choose the ending mark for a sentence.', options: ['Full stop', 'Small letter', 'Space'], answer: 'Full stop' }
      ]
    },
    literature: {
      title: 'Literature',
      intro: 'Read short moral stories, poems, and simple dialogues aloud with expression.',
      focus: ['Short moral stories', 'Poems', 'Simple dialogues', 'Reading aloud with expression', 'Finding the moral', 'Answering questions about characters and events'],
      examples: [['Moral', 'Always tell the truth.'], ['Dialogue', 'Ali: Hello. Sara: Hello.'], ['Expression', 'Read happy lines happily.'], ['Poem', 'A short poem may rhyme.']],
      quick: ['Read slowly and clearly.', 'Change your voice for feelings.', 'Find the lesson in a moral story.', 'Notice who is speaking in a dialogue.'],
      questions: [
        { type: 'select', text: 'What does a moral story teach?', options: ['A lesson', 'Only numbers', 'A color'], answer: 'A lesson' },
        { type: 'select', text: 'Which is a dialogue?', options: ['Ali: Hello.', 'The cat ran.', 'Blue and red'], answer: 'Ali: Hello.' },
        { type: 'text', text: 'Complete: Always tell the ___.', answer: 'truth' },
        { type: 'select', text: 'How should you read aloud?', options: ['Clearly', 'Silently only', 'Without looking'], answer: 'Clearly' },
        { type: 'radio', text: 'True or False: Poems can have rhyming words.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Who speaks in a dialogue?', options: ['Characters', 'Only pages', 'Full stops'], answer: 'Characters' },
        { type: 'text', text: 'Complete: Be kind and ___ others.', answer: 'help' },
        { type: 'select', text: 'Which line shows expression?', options: ['Read a sad line softly.', 'Skip the story.', 'Hide the book.'], answer: 'Read a sad line softly.' },
        { type: 'text', text: 'A person in a story is a ___.', answer: 'character' },
        { type: 'select', text: 'Which is found in literature?', options: ['Poem', 'Only sums', 'Multiplication table'], answer: 'Poem' }
      ]
    }
  };

  const TOPICS_GRADE3 = {
    'listening-speaking': {
      title: 'Listening & Speaking',
      intro: 'Build confidence in spoken English through short dialogues, role play, descriptions, simple instructions, storytelling, and expressing feelings.',
      focus: ['Short dialogues with two speakers', 'Role play for classroom and daily-life situations', 'Describing people, places, and things with clear details', 'Giving simple step-by-step instructions', 'Storytelling with beginning, middle, and end', 'Expressing feelings such as happy, sad, excited, worried, and proud', 'Listening carefully before answering', 'Using complete sentences while speaking'],
      examples: [['Dialogue', 'Ali: May I borrow your pencil? Sara: Yes, you may.'], ['Role play', 'Act as a shopkeeper and customer buying a notebook.'], ['Description', 'My classroom is bright, clean, and full of colorful charts.'], ['Instruction', 'First wash your hands. Then open your lunch box.'], ['Feeling', 'I feel excited because today is sports day.']],
      quick: ['A good dialogue has clear speakers and polite words.', 'When describing, tell color, size, place, and use.', 'Instructions should be in the correct order.', 'A story should tell who, where, what happened, and how it ended.', 'Feelings become clearer when you explain the reason.'],
      questions: [
        { type: 'select', text: 'Which is a short dialogue?', options: ['Ali: Hello. Sara: Hello.', 'The green book', 'Running quickly'], answer: 'Ali: Hello. Sara: Hello.' },
        { type: 'select', text: 'Choose the best describing sentence.', options: ['The park is clean and green.', 'Park green clean the.', 'Because under book'], answer: 'The park is clean and green.' },
        { type: 'text', text: 'Complete: I feel happy ___ I won the race.', answer: 'because' },
        { type: 'select', text: 'Which word helps give instructions in order?', options: ['First', 'Happy', 'Table'], answer: 'First' },
        { type: 'text', text: 'Complete: Please ___ the door.', answer: 'open' },
        { type: 'radio', text: 'True or False: Role play means acting out a situation.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Which question helps describe a person?', options: ['What does she look like?', 'How many pencils?', 'Where is the comma?'], answer: 'What does she look like?' },
        { type: 'text', text: 'Complete: A story has a beginning, middle, and ___.', answer: 'end' },
        { type: 'select', text: 'Choose a feeling word.', options: ['worried', 'behind', 'pencil'], answer: 'worried' },
        { type: 'text', text: 'Complete the polite dialogue: May I ___ in?', answer: 'come' }
      ]
    },
    'reading-comprehension': {
      title: 'Reading Comprehension',
      intro: 'Read short stories and informational passages, then find the main idea, supporting details, characters, setting, moral, and answers to different question types.',
      focus: ['Short stories with characters and events', 'Informational passages with facts', 'Main idea of a paragraph or story', 'Supporting details that explain the main idea', 'Characters and setting', 'Moral of the story', 'True/false questions', 'Multiple-choice questions', 'Short answer questions', 'Using text evidence by looking back at the passage'],
      examples: [['Main idea', 'The whole paragraph is mostly about planting a tree.'], ['Supporting detail', 'Trees give shade and clean air.'], ['Character', 'The clever rabbit is a character.'], ['Setting', 'The story happens near a river.'], ['Moral', 'Think before you act.']],
      quick: ['The main idea tells what the passage is mostly about.', 'Supporting details give more information about the main idea.', 'Characters are the people or animals in a story.', 'Setting tells where and when the story happens.', 'For short answers, use words from the question and the passage.'],
      questions: [
        { type: 'select', text: 'What is the main idea?', options: ['What the passage is mostly about', 'One tiny spelling word', 'Only the last sentence'], answer: 'What the passage is mostly about' },
        { type: 'select', text: 'A supporting detail...', options: ['explains the main idea', 'is always the title', 'never appears in the passage'], answer: 'explains the main idea' },
        { type: 'text', text: 'The place and time of a story is the ___.', answer: 'setting' },
        { type: 'select', text: 'Who are characters?', options: ['People or animals in a story', 'Only punctuation marks', 'The page numbers'], answer: 'People or animals in a story' },
        { type: 'radio', text: 'True or False: A moral is the lesson of a story.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Which question asks for a short answer?', options: ['Why did the boy help?', 'Blue red yellow', 'Run fast now'], answer: 'Why did the boy help?' },
        { type: 'text', text: 'Complete: We look back at the ___ to find evidence.', answer: 'passage', alt: ['text', 'story'] },
        { type: 'select', text: 'Which is an informational passage topic?', options: ['How bees make honey', 'A fairy tricked a king', 'A talking pencil'], answer: 'How bees make honey' },
        { type: 'text', text: 'Complete: True/false questions can be answered with true or ___.', answer: 'false' },
        { type: 'select', text: 'What should you read before answering MCQs?', options: ['All answer choices', 'Only the first letter', 'Nothing'], answer: 'All answer choices' }
      ]
    },
    vocabulary: {
      title: 'Vocabulary',
      intro: 'Grow your word power with synonyms, antonyms, compound words, homophones, gender words, topic words, and dictionary alphabetical order.',
      focus: ['Synonyms: words with similar meanings', 'Antonyms: words with opposite meanings', 'Compound words made by joining two words', 'Homophones introduction: same sound, different meaning/spelling', 'Gender words such as king/queen and uncle/aunt', 'Words related to school, home, nature, health, and community', 'Dictionary alphabetical order by first, second, and third letters', 'Choosing the best word for a sentence'],
      examples: [['Synonym', 'big and large'], ['Antonym', 'early and late'], ['Compound word', 'rain + bow = rainbow'], ['Homophone', 'sun and son'], ['Alphabetical order', 'apple comes before banana.']],
      quick: ['A synonym has a similar meaning.', 'An antonym has the opposite meaning.', 'A compound word joins two smaller words.', 'Homophones sound alike but do not mean the same thing.', 'In a dictionary, words are arranged in alphabetical order.'],
      questions: [
        { type: 'select', text: 'Choose the synonym of big.', options: ['large', 'small', 'late'], answer: 'large' },
        { type: 'select', text: 'Choose the antonym of happy.', options: ['sad', 'glad', 'joyful'], answer: 'sad' },
        { type: 'text', text: 'Complete the compound word: rain + bow = ___.', answer: 'rainbow' },
        { type: 'select', text: 'Which pair is a homophone pair?', options: ['sun / son', 'big / large', 'hot / cold'], answer: 'sun / son' },
        { type: 'text', text: 'The gender word for queen is ___.', answer: 'king' },
        { type: 'select', text: 'Which word is related to health?', options: ['medicine', 'mountain', 'pencil'], answer: 'medicine' },
        { type: 'select', text: 'Which word comes first alphabetically?', options: ['apple', 'banana', 'cat'], answer: 'apple' },
        { type: 'radio', text: 'True or False: Classroom is a school-related word.', options: ['True', 'False'], answer: 'True' },
        { type: 'text', text: 'Write the antonym of clean.', answer: 'dirty' },
        { type: 'select', text: 'Which is a community word?', options: ['hospital', 'blanket', 'butterfly'], answer: 'hospital' }
      ]
    },
    grammar: {
      title: 'Grammar',
      intro: 'Practice Grade 3 grammar: common and proper nouns, pronouns, verbs, helping verbs, adjectives, adverbs, prepositions, conjunctions, tenses, and punctuation.',
      focus: ['Common nouns and proper nouns', 'Pronouns that replace nouns', 'Verbs and helping verbs', 'Adjectives that describe nouns', 'Adverbs introduction: how an action happens', 'Prepositions: in, on, under, behind, between', 'Conjunctions: and, but, because', 'Tenses introduction: present, past, future', 'Punctuation: full stop, question mark, comma, exclamation mark', 'Writing grammatically complete sentences'],
      examples: [['Proper noun', 'Lahore, Monday, Ali'], ['Helping verb', 'She is reading.'], ['Adverb', 'The boy ran quickly.'], ['Preposition', 'The ball is under the table.'], ['Conjunction', 'I was tired, but I finished my work.']],
      quick: ['A proper noun names a special person, place, or thing and starts with a capital letter.', 'A helping verb works with the main verb.', 'An adverb can tell how something happens.', 'A preposition tells position or place.', 'Use because to give a reason.'],
      questions: [
        { type: 'select', text: 'Which is a proper noun?', options: ['Pakistan', 'city', 'boy'], answer: 'Pakistan' },
        { type: 'select', text: 'Choose the pronoun: Ahmed is kind. ___ helps others.', options: ['He', 'She', 'They'], answer: 'He' },
        { type: 'text', text: 'Complete: She ___ reading a book.', answer: 'is' },
        { type: 'select', text: 'Choose the adjective.', options: ['beautiful', 'slowly', 'under'], answer: 'beautiful' },
        { type: 'select', text: 'Choose the adverb.', options: ['quickly', 'table', 'green'], answer: 'quickly' },
        { type: 'text', text: 'Complete: The cat is ___ the table.', answer: 'under', alt: ['on', 'in', 'behind'] },
        { type: 'select', text: 'Choose the conjunction.', options: ['because', 'behind', 'quickly'], answer: 'because' },
        { type: 'select', text: 'Which sentence is future tense?', options: ['I will play.', 'I played.', 'I play.'], answer: 'I will play.' },
        { type: 'text', text: 'Which punctuation mark ends an excited sentence?', answer: 'exclamation mark', alt: ['!'] },
        { type: 'radio', text: 'True or False: A question ends with a question mark.', options: ['True', 'False'], answer: 'True' }
      ]
    },
    writing: {
      title: 'Writing',
      intro: 'Develop writing skills through paragraphs, picture composition, story completion, informal letters, applications, creative prompts, dialogue completion, and 5-7 sentence writing.',
      focus: ['Paragraph writing with one main topic', 'Picture composition using visible details', 'Story completion with a sensible ending', 'Informal letter introduction', 'Application writing for simple school needs', 'Creative writing from prompts', 'Dialogue completion', 'Writing 5-7 sentences on familiar topics', 'Using capital letters and punctuation', 'Checking spelling and sentence order'],
      examples: [['Paragraph', 'My Garden: I have a small garden. It has roses and jasmine.'], ['Picture composition', 'A family is having a picnic under a tree.'], ['Story completion', 'At last, the lost puppy found its home.'], ['Informal letter', 'Dear Sara, I hope you are fine.'], ['Application', 'Please grant me leave for one day.']],
      quick: ['A paragraph has sentences about one topic.', 'A picture composition should mention people, place, actions, and objects.', 'A story ending should match the beginning.', 'A letter has greeting, body, and closing.', 'Read your writing once to find missing words or punctuation.'],
      questions: [
        { type: 'select', text: 'What should a paragraph have?', options: ['One main topic', 'Only random words', 'No sentences'], answer: 'One main topic' },
        { type: 'text', text: 'Complete the letter greeting: Dear ___.', answer: 'friend', alt: ['sara', 'ali', 'mother'] },
        { type: 'select', text: 'Choose a picture composition sentence.', options: ['The children are playing in the park.', 'Park playing children the.', 'Because quickly comma'], answer: 'The children are playing in the park.' },
        { type: 'text', text: 'Complete: Please grant me leave for one ___.', answer: 'day' },
        { type: 'select', text: 'Which is a good story ending?', options: ['Finally, everyone was safe.', 'Blue and under.', 'The'], answer: 'Finally, everyone was safe.' },
        { type: 'radio', text: 'True or False: Dialogue uses speakers and spoken lines.', options: ['True', 'False'], answer: 'True' },
        { type: 'text', text: 'Complete: I am writing to tell you about my ___.', answer: 'school', alt: ['friend', 'family', 'garden'] },
        { type: 'select', text: 'How many sentences are expected in this topic?', options: ['5-7 sentences', 'Only 1 word', '20 pages'], answer: '5-7 sentences' },
        { type: 'text', text: 'Complete: A sentence starts with a ___ letter.', answer: 'capital' },
        { type: 'select', text: 'Which helps creative writing?', options: ['A prompt', 'Skipping ideas', 'No punctuation'], answer: 'A prompt' }
      ]
    },
    literature: {
      title: 'Literature',
      intro: 'Read poems, short stories, folk tales, and moral lessons while answering character-based and meaning-based questions.',
      focus: ['Poems with rhythm, rhyme, and feeling', 'Short stories with characters and events', 'Folk tales from culture and tradition', 'Lessons with moral values', 'Character-based questions', 'Identifying the speaker or narrator', 'Finding the lesson or message', 'Reading aloud with expression', 'Connecting the story to real life'],
      examples: [['Poem', 'A poem may repeat sounds and create rhythm.'], ['Folk tale', 'A traditional story told for many years.'], ['Moral value', 'Honesty is better than lying.'], ['Character question', 'Why did the farmer help the bird?'], ['Expression', 'Read a joyful line in a cheerful voice.']],
      quick: ['Poems often use rhyme and rhythm.', 'A folk tale is a traditional story.', 'Moral values teach us how to behave well.', 'Character questions ask what a character did, felt, or learned.', 'Good readers change their voice to match the feeling.'],
      questions: [
        { type: 'select', text: 'What is a folk tale?', options: ['A traditional story', 'A punctuation mark', 'Only a school object'], answer: 'A traditional story' },
        { type: 'select', text: 'Poems often have...', options: ['rhyme and rhythm', 'only sums', 'no feeling'], answer: 'rhyme and rhythm' },
        { type: 'text', text: 'Complete: Honesty is a moral ___.', answer: 'value' },
        { type: 'select', text: 'Which is a character question?', options: ['Why did the girl help?', 'How many commas?', 'What is 3 + 2?'], answer: 'Why did the girl help?' },
        { type: 'radio', text: 'True or False: Stories can teach lessons.', options: ['True', 'False'], answer: 'True' },
        { type: 'text', text: 'A person or animal in a story is a ___.', answer: 'character' },
        { type: 'select', text: 'Which line shows expressive reading?', options: ['Read an excited line with energy.', 'Read every line flat.', 'Do not pause.'], answer: 'Read an excited line with energy.' },
        { type: 'text', text: 'Complete: The lesson of a story is the ___.', answer: 'moral' },
        { type: 'select', text: 'Which is literature?', options: ['Short story', 'Only a ruler', 'Addition table'], answer: 'Short story' },
        { type: 'text', text: 'Complete: A poem may have words that ___.', answer: 'rhyme' }
      ]
    }
  };

  const TOPICS_GRADE4 = {
    'listening-speaking': {
      title: 'Listening & Speaking',
      intro: 'Strengthen spoken English through group discussions, asking for information, giving directions, describing events, fluent reading aloud, and short presentations.',
      focus: ['Group discussion with turn-taking and respectful listening', 'Asking for information using clear question words', 'Giving directions with order words and place words', 'Describing events by telling when, where, who, what, and why', 'Reading aloud fluently with pauses and expression', 'Short presentations with a beginning, main points, and closing', 'Using polite phrases to agree, disagree, and ask again', 'Speaking loudly enough for the group to hear'],
      examples: [['Group discussion', 'I agree with Sara because trees keep the air clean.'], ['Information question', 'Could you tell me where the library is?'], ['Directions', 'Go straight, turn left, and stop near the office.'], ['Event description', 'Yesterday our class visited the zoo and saw many animals.'], ['Presentation', 'Good morning. Today I will talk about saving water.']],
      quick: ['In discussion, listen first and then speak.', 'Use who, what, where, when, why, and how to ask for information.', 'Directions should be short and in correct order.', 'A good event description includes time, place, people, and action.', 'Reading aloud improves when you pause at punctuation.'],
      questions: [
        { type: 'select', text: 'Which sentence is suitable for a group discussion?', options: ['I agree because plants are useful.', 'Blue quickly table.', 'Run the pencil.'], answer: 'I agree because plants are useful.' },
        { type: 'select', text: 'Choose a question for asking information.', options: ['Where is the science room?', 'The science room is big.', 'Science room big the'], answer: 'Where is the science room?' },
        { type: 'text', text: 'Complete the direction: Go straight and turn ___.', answer: 'left', alt: ['right'] },
        { type: 'select', text: 'Which detail belongs in an event description?', options: ['When it happened', 'Only the last letter', 'No action'], answer: 'When it happened' },
        { type: 'radio', text: 'True or False: Reading aloud fluently means reading clearly with good pace.', options: ['True', 'False'], answer: 'True' },
        { type: 'text', text: 'Complete: Good morning. Today I will ___ about trees.', answer: 'talk', alt: ['speak'] },
        { type: 'select', text: 'Which phrase politely asks someone to repeat?', options: ['Could you please repeat that?', 'Be quiet now!', 'I do not listen.'], answer: 'Could you please repeat that?' },
        { type: 'text', text: 'Complete: First introduce your topic, then give main ___.', answer: 'points' },
        { type: 'select', text: 'Which word helps give directions?', options: ['behind', 'beautiful', 'slowly'], answer: 'behind' },
        { type: 'text', text: 'Complete: We should take ___ when speaking in a group.', answer: 'turns' }
      ]
    },
    reading: {
      title: 'Reading',
      intro: 'Read fiction, non-fiction, tables, posters, and notices while practicing main idea, details, cause and effect, sequencing, prediction, inference, title, and theme.',
      focus: ['Fiction passages with characters, setting, and plot', 'Non-fiction passages with facts and information', 'Main idea and supporting details', 'Cause and effect relationships', 'Sequencing events in order', 'Making predictions from clues', 'Inference-based questions using evidence', 'Understanding title and theme', 'Reading tables, posters, and notices', 'Finding information quickly and accurately'],
      examples: [['Fiction', 'A story about a brave child helping a friend.'], ['Non-fiction', 'A passage explaining how rain is formed.'], ['Cause and effect', 'Cause: It rained. Effect: The match was cancelled.'], ['Inference', 'The boy shivered, so we infer he was cold.'], ['Notice', 'School will remain closed on Friday.']],
      quick: ['Fiction is imagined; non-fiction gives facts.', 'Cause tells why something happened; effect tells what happened.', 'Prediction means guessing what may happen next using clues.', 'Inference means understanding something not directly stated.', 'Tables and notices should be read carefully for dates, names, and numbers.'],
      questions: [
        { type: 'select', text: 'Which text is non-fiction?', options: ['A passage about planets', 'A fairy tale', 'A talking tree story'], answer: 'A passage about planets' },
        { type: 'select', text: 'What is an effect?', options: ['What happened because of a cause', 'The title only', 'A character name'], answer: 'What happened because of a cause' },
        { type: 'text', text: 'Complete: Main idea tells what the passage is mostly ___.', answer: 'about' },
        { type: 'select', text: 'Which word means putting events in order?', options: ['sequencing', 'punctuation', 'comparison'], answer: 'sequencing' },
        { type: 'radio', text: 'True or False: An inference uses clues from the text.', options: ['True', 'False'], answer: 'True' },
        { type: 'text', text: 'Complete: The boy forgot his umbrella, so he got ___.', answer: 'wet' },
        { type: 'select', text: 'What should you look for in a notice?', options: ['Important information', 'Only rhyming words', 'No dates'], answer: 'Important information' },
        { type: 'text', text: 'Complete: A theme is the message or big ___.', answer: 'idea' },
        { type: 'select', text: 'Which is a prediction?', options: ['I think the dog will find its home.', 'The dog is brown.', 'There are five dogs.'], answer: 'I think the dog will find its home.' },
        { type: 'select', text: 'A table is useful for reading...', options: ['organized information', 'only poems', 'only dialogue'], answer: 'organized information' }
      ]
    },
    vocabulary: {
      title: 'Vocabulary',
      intro: 'Build Grade 4 word power with synonyms, antonyms, prefixes, suffixes, compound words, homophones, similes, word families, context clues, and dictionary skills.',
      focus: ['Synonyms and antonyms for stronger word choice', 'Prefixes added before root words', 'Suffixes added after root words', 'Compound words made from two smaller words', 'Homophones with same sound but different meaning or spelling', 'Similes using like or as', 'Word families with related roots', 'Context clues from nearby words', 'Dictionary skills including guide words and meanings', 'Choosing precise words for sentences'],
      examples: [['Synonym', 'brave and courageous'], ['Antonym', 'ancient and modern'], ['Prefix', 'un + happy = unhappy'], ['Suffix', 'care + ful = careful'], ['Simile', 'as busy as a bee']],
      quick: ['A prefix changes meaning from the beginning of a word.', 'A suffix changes meaning or word form at the end.', 'Context clues help you guess an unknown word.', 'Homophones must be chosen by meaning, not sound.', 'A dictionary gives spelling, meaning, and sometimes pronunciation.'],
      questions: [
        { type: 'select', text: 'Choose the synonym of brave.', options: ['courageous', 'afraid', 'tiny'], answer: 'courageous' },
        { type: 'select', text: 'Choose the antonym of ancient.', options: ['modern', 'old', 'historic'], answer: 'modern' },
        { type: 'text', text: 'Add a prefix to happy to mean not happy.', answer: 'unhappy' },
        { type: 'select', text: 'Which word has a suffix?', options: ['careful', 'book', 'rain'], answer: 'careful' },
        { type: 'text', text: 'Complete the compound word: sun + flower = ___.', answer: 'sunflower' },
        { type: 'select', text: 'Which pair is homophones?', options: ['sea / see', 'hot / cold', 'big / large'], answer: 'sea / see' },
        { type: 'select', text: 'Choose the simile.', options: ['as light as a feather', 'light feather a', 'the feather is'], answer: 'as light as a feather' },
        { type: 'text', text: 'Context ___ help us understand unknown words.', answer: 'clues' },
        { type: 'radio', text: 'True or False: A dictionary can help find word meanings.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Which words are in the same word family?', options: ['play, player, playful', 'book, rain, chair', 'hot, cold, tall'], answer: 'play, player, playful' }
      ]
    },
    grammar: {
      title: 'Grammar',
      intro: 'Practice Grade 4 grammar: noun types, countable and uncountable nouns, pronouns, adjectives, comparison, verbs, helping verbs, tenses, prepositions, conjunctions, articles, subject-verb agreement, direct/indirect speech, punctuation, and capitalization.',
      focus: ['Types of nouns including common, proper, collective, and material nouns', 'Countable and uncountable nouns', 'Pronouns replacing nouns', 'Adjectives and degrees of comparison', 'Verbs and helping verbs', 'Simple present, simple past, and simple future tense', 'Prepositions showing place, time, and direction', 'Conjunctions joining words and ideas', 'Articles a, an, and the', 'Subject-verb agreement introduction', 'Direct and indirect speech introduction', 'Punctuation and capitalization'],
      examples: [['Collective noun', 'A team of players won the match.'], ['Uncountable noun', 'water, sugar, milk'], ['Comparison', 'tall, taller, tallest'], ['Subject-verb agreement', 'She writes. They write.'], ['Direct speech', 'Ali said, "I am ready."']],
      quick: ['Countable nouns can be counted; uncountable nouns usually cannot.', 'Use comparative degree for two and superlative for three or more.', 'The verb must agree with the subject.', 'Simple future often uses will.', 'Direct speech uses quotation marks around exact words.'],
      questions: [
        { type: 'select', text: 'Which is a collective noun?', options: ['team', 'Ali', 'quickly'], answer: 'team' },
        { type: 'select', text: 'Which noun is uncountable?', options: ['water', 'pencil', 'apple'], answer: 'water' },
        { type: 'text', text: 'Complete the comparison: tall, taller, ___.', answer: 'tallest' },
        { type: 'select', text: 'Choose the correct verb: She ___ neatly.', options: ['writes', 'write', 'writing'], answer: 'writes' },
        { type: 'text', text: 'Complete future tense: I ___ visit my aunt tomorrow.', answer: 'will' },
        { type: 'select', text: 'Choose the preposition: The book is on the table.', options: ['on', 'book', 'table'], answer: 'on' },
        { type: 'select', text: 'Choose the conjunction.', options: ['because', 'under', 'beautiful'], answer: 'because' },
        { type: 'text', text: 'Complete: ___ honest man helped us.', answer: 'an' },
        { type: 'radio', text: 'True or False: Direct speech uses quotation marks.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Choose the correctly capitalized sentence.', options: ['Sara lives in Karachi.', 'sara lives in karachi.', 'Sara lives in karachi'], answer: 'Sara lives in Karachi.' }
      ]
    },
    writing: {
      title: 'Writing',
      intro: 'Develop Grade 4 writing through paragraphs, stories, friendly letters, applications, picture composition, descriptive writing, invitations, messages, and diary entries.',
      focus: ['Paragraph writing with topic sentence, details, and closing sentence', 'Story writing with characters, setting, problem, and ending', 'Letter to a friend with greeting, body, and closing', 'Application to principal with clear request and reason', 'Picture composition using observed details', 'Descriptive writing using sensory details', 'Invitation card and message writing', 'Diary entry introduction with date and personal feelings', 'Using correct punctuation and capitalization', 'Checking sequence, spelling, and clarity'],
      examples: [['Paragraph', 'Topic: My Favorite Game. Add details and a closing sentence.'], ['Story', 'A lost kite, a helpful child, and a happy ending.'], ['Letter', 'Dear Ahmed, I hope you are well.'], ['Application', 'Respected Principal, kindly grant me leave.'], ['Diary', 'Monday, 5 May: Today I felt proud because...']],
      quick: ['A paragraph should stay on one topic.', 'A story needs a problem and a solution.', 'A friendly letter should sound warm and personal.', 'An application should be polite and clear.', 'A diary entry tells personal feelings and events.'],
      questions: [
        { type: 'select', text: 'What should a paragraph begin with?', options: ['Topic sentence', 'Random ending', 'Only punctuation'], answer: 'Topic sentence' },
        { type: 'select', text: 'A story usually needs...', options: ['characters and a problem', 'only a title', 'no ending'], answer: 'characters and a problem' },
        { type: 'text', text: 'Complete the friendly letter greeting: Dear ___.', answer: 'friend', alt: ['ahmed', 'sara', 'ali'] },
        { type: 'select', text: 'Who receives an application to principal?', options: ['The principal', 'A friend only', 'A story character'], answer: 'The principal' },
        { type: 'text', text: 'Complete: An invitation tells the date, time, and ___.', answer: 'place' },
        { type: 'select', text: 'Which sentence is descriptive?', options: ['The garden has bright red roses.', 'Garden roses the.', 'Because comma quickly'], answer: 'The garden has bright red roses.' },
        { type: 'radio', text: 'True or False: A diary entry can include feelings.', options: ['True', 'False'], answer: 'True' },
        { type: 'text', text: 'Complete: A story ending should solve the ___.', answer: 'problem' },
        { type: 'select', text: 'Which is a message opening?', options: ['Please tell Sara I will be late.', 'Late Sara tell please will.', 'Only the'], answer: 'Please tell Sara I will be late.' },
        { type: 'text', text: 'A picture composition describes what we ___.', answer: 'see' }
      ]
    },
    literature: {
      title: 'Literature',
      intro: 'Read poems, stories, dialogues, and moral lessons while learning to discuss characters and write simple character sketches.',
      focus: ['Poems with rhyme, rhythm, imagery, and feeling', 'Stories with plot, setting, conflict, and resolution', 'Dialogues with speakers and spoken lines', 'Moral lessons and values', 'Character sketch introduction', 'Identifying character traits from actions and words', 'Understanding theme or message', 'Reading aloud with expression', 'Answering character-based questions', 'Connecting literature to real-life behavior'],
      examples: [['Poem', 'The poet describes rain as silver drops.'], ['Dialogue', 'Teacher: Why are you late? Student: I missed the bus.'], ['Moral', 'Kindness makes the world better.'], ['Character sketch', 'Hina is helpful, brave, and honest.'], ['Trait evidence', 'He shared his food, so he is generous.']],
      quick: ['A character sketch tells what a character is like.', 'Traits can be found from what a character says and does.', 'A moral lesson teaches good behavior.', 'Dialogue shows conversation between speakers.', 'Poems often use descriptive language to create pictures in the mind.'],
      questions: [
        { type: 'select', text: 'What is a character sketch?', options: ['A description of a character', 'A math sum', 'A punctuation list'], answer: 'A description of a character' },
        { type: 'select', text: 'Which is a character trait?', options: ['honest', 'comma', 'table'], answer: 'honest' },
        { type: 'text', text: 'Complete: A dialogue has speakers and spoken ___.', answer: 'lines' },
        { type: 'select', text: 'Which sentence gives trait evidence?', options: ['He helped the old man, so he is kind.', 'Kind old the.', 'There are three commas.'], answer: 'He helped the old man, so he is kind.' },
        { type: 'radio', text: 'True or False: Poems can create pictures in our mind.', options: ['True', 'False'], answer: 'True' },
        { type: 'text', text: 'Complete: The lesson of a story is its ___.', answer: 'moral' },
        { type: 'select', text: 'Which is found in stories?', options: ['setting', 'only numbers', 'multiplication signs'], answer: 'setting' },
        { type: 'text', text: 'Complete: A generous person likes to ___.', answer: 'share' },
        { type: 'select', text: 'Which line is dialogue?', options: ['Ali said, "I am ready."', 'The river is long.', 'Bright red flowers'], answer: 'Ali said, "I am ready."' },
        { type: 'select', text: 'Theme means...', options: ['the message or big idea', 'only the page number', 'the spelling list'], answer: 'the message or big idea' }
      ]
    }
  };

  const TOPICS_GRADE5 = {
    'listening-speaking': {
      title: 'Listening & Speaking',
      intro: 'Practice confident spoken English through oral storytelling, debate, opinions, process descriptions, interview-style questions, and short speeches.',
      focus: ['Oral storytelling with characters, setting, problem, and ending', 'Classroom debate introduction with respectful agreement and disagreement', 'Expressing opinions with reasons and examples', 'Describing processes in clear steps', 'Asking and answering interview-style questions', 'Giving short speeches with opening, main points, and closing', 'Using eye contact, clear voice, and suitable pace', 'Listening actively and responding to what others say'],
      examples: [['Storytelling', 'First introduce the characters, then explain the problem, and end with the solution.'], ['Debate', 'I believe homework is useful because it helps us revise.'], ['Opinion', 'In my opinion, libraries are important because they build reading habits.'], ['Process', 'First boil water, then add tea leaves, and finally pour the tea.'], ['Interview', 'What inspired you to become a teacher?']],
      quick: ['A strong opinion includes a reason.', 'A debate should be polite and focused on ideas.', 'A process uses order words such as first, next, then, finally.', 'A short speech needs a greeting and a clear topic.', 'Interview answers should be complete, relevant, and polite.'],
      questions: [
        { type: 'select', text: 'Which sentence expresses an opinion?', options: ['I think reading daily is helpful.', 'The book is on the desk.', 'There are two pencils.'], answer: 'I think reading daily is helpful.' },
        { type: 'text', text: 'Complete: In a process, we use words like first, next, and ___.', answer: 'finally' },
        { type: 'select', text: 'Which is a debate phrase?', options: ['I respectfully disagree because...', 'Under the table', 'A blue pencil'], answer: 'I respectfully disagree because...' },
        { type: 'text', text: 'A short speech begins with a ___.', answer: 'greeting' },
        { type: 'radio', text: 'True or False: Oral storytelling should have a beginning, middle, and end.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Which is an interview question?', options: ['Why did you choose this profession?', 'Profession this why', 'Very quickly green'], answer: 'Why did you choose this profession?' },
        { type: 'text', text: 'Complete: I believe sports are important ___ they keep us healthy.', answer: 'because' },
        { type: 'select', text: 'What should speakers do in group speaking?', options: ['Listen actively', 'Interrupt always', 'Ignore others'], answer: 'Listen actively' },
        { type: 'text', text: 'Complete: A story problem is solved in the ___.', answer: 'ending', alt: ['end'] },
        { type: 'select', text: 'Which helps a short speech?', options: ['Clear main points', 'No topic', 'Mumbling'], answer: 'Clear main points' }
      ]
    },
    'reading-comprehension': {
      title: 'Reading Comprehension',
      intro: 'Read narratives, informational texts, poems, advertisements, notices, menus, and timetables while practicing main idea, theme, fact/opinion, cause/effect, inference, author purpose, and summaries.',
      focus: ['Narrative passages with plot, character, and setting', 'Informational texts that explain facts and ideas', 'Poems with central idea and feeling', 'Main idea and theme', 'Fact and opinion', 'Cause and effect', 'Inference using clues and evidence', 'Author’s purpose introduction: inform, entertain, persuade', 'Summarizing short texts in your own words', 'Reading advertisements, notices, menus, and timetables for specific information'],
      examples: [['Fact', 'The school opens at 8:00 a.m.'], ['Opinion', 'Science is the most exciting subject.'], ['Author purpose', 'An advertisement tries to persuade.'], ['Summary', 'The passage explains how plants need sunlight, water, and soil.'], ['Inference', 'The girl packed an umbrella, so it may rain.']],
      quick: ['A fact can be checked; an opinion tells what someone thinks or feels.', 'A summary includes only the most important ideas.', 'Authors may write to inform, entertain, or persuade.', 'Use evidence from the text for inference questions.', 'Functional texts such as menus and timetables require careful scanning.'],
      questions: [
        { type: 'select', text: 'Which sentence is a fact?', options: ['Water freezes at 0°C.', 'Mangoes are the best fruit.', 'This story is boring.'], answer: 'Water freezes at 0°C.' },
        { type: 'select', text: 'An advertisement usually tries to...', options: ['persuade', 'hide information', 'avoid readers'], answer: 'persuade' },
        { type: 'text', text: 'Complete: A summary tells the most important ___.', answer: 'ideas', alt: ['points'] },
        { type: 'select', text: 'Which text tells train times?', options: ['timetable', 'poem', 'fable'], answer: 'timetable' },
        { type: 'radio', text: 'True or False: Inference uses clues from the text.', options: ['True', 'False'], answer: 'True' },
        { type: 'text', text: 'Complete: Cause tells why something ___.', answer: 'happened' },
        { type: 'select', text: 'Which is an opinion?', options: ['Winter is the best season.', 'There are seven days in a week.', 'The notice says Friday.'], answer: 'Winter is the best season.' },
        { type: 'text', text: 'Authors may write to inform, entertain, or ___.', answer: 'persuade' },
        { type: 'select', text: 'Theme means...', options: ['the message or big idea', 'only the title', 'one spelling word'], answer: 'the message or big idea' },
        { type: 'select', text: 'What should you read carefully in a menu?', options: ['items and prices', 'only rhymes', 'only characters'], answer: 'items and prices' }
      ]
    },
    vocabulary: {
      title: 'Vocabulary',
      intro: 'Strengthen word choice with synonyms, antonyms, homophones, homonyms, prefixes, suffixes, idioms, proverbs, collocations, and contextual vocabulary.',
      focus: ['Synonyms for similar meanings', 'Antonyms for opposite meanings', 'Homophones with same sound and different spelling or meaning', 'Homonyms with same spelling or sound but different meanings', 'Prefixes and suffixes that change meaning or word form', 'Idioms introduction: phrases with non-literal meanings', 'Proverbs introduction: short wise sayings', 'Collocations: words that naturally go together', 'Contextual vocabulary using surrounding words', 'Choosing precise words for speaking and writing'],
      examples: [['Synonym', 'assist and help'], ['Antonym', 'expand and shrink'], ['Homophone', 'flour and flower'], ['Homonym', 'bat: an animal or sports equipment'], ['Idiom', 'break the ice means to make people comfortable.']],
      quick: ['Idioms usually do not mean exactly what the words say.', 'Proverbs teach advice or wisdom.', 'Collocations sound natural, such as make a decision or strong tea.', 'Context can show the meaning of an unfamiliar word.', 'Prefixes and suffixes help build related words.'],
      questions: [
        { type: 'select', text: 'Choose the synonym of assist.', options: ['help', 'harm', 'hide'], answer: 'help' },
        { type: 'select', text: 'Choose the antonym of expand.', options: ['shrink', 'grow', 'open'], answer: 'shrink' },
        { type: 'select', text: 'Which pair is homophones?', options: ['flour / flower', 'hot / cold', 'assist / help'], answer: 'flour / flower' },
        { type: 'text', text: 'The word bat can mean an animal or sports equipment. This is a ___.', answer: 'homonym' },
        { type: 'select', text: 'Which is an idiom?', options: ['break the ice', 'break the glass', 'cold water'], answer: 'break the ice' },
        { type: 'text', text: 'Complete the proverb: Honesty is the best ___.', answer: 'policy' },
        { type: 'select', text: 'Choose the natural collocation.', options: ['make a decision', 'do a decision', 'eat a decision'], answer: 'make a decision' },
        { type: 'text', text: 'The suffix in careful is ___.', answer: 'ful', alt: ['-ful'] },
        { type: 'radio', text: 'True or False: Context clues help guess word meaning.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Which word has a prefix?', options: ['rewrite', 'table', 'garden'], answer: 'rewrite' }
      ]
    },
    grammar: {
      title: 'Grammar',
      intro: 'Review and extend Grade 5 grammar: nouns, pronouns, verbs, modifiers, prepositions, conjunctions, interjections, articles, tenses, continuous tense, agreement, active/passive voice, direct/indirect speech, and punctuation.',
      focus: ['Nouns and types', 'Pronouns and types', 'Verbs and helping verbs', 'Adjectives and adverbs', 'Prepositions and conjunctions', 'Interjections that show sudden feeling', 'Articles a, an, and the', 'Simple present, past, and future tenses', 'Continuous tense introduction', 'Subject-verb agreement', 'Active and passive voice introduction', 'Direct and indirect speech basics', 'Punctuation: comma, apostrophe, quotation marks'],
      examples: [['Interjection', 'Wow! That is amazing.'], ['Continuous tense', 'She is reading a poem.'], ['Agreement', 'He plays. They play.'], ['Passive voice', 'The ball was kicked by Ali.'], ['Quotation marks', 'Sara said, "I am ready."']],
      quick: ['Continuous tense uses a helping verb plus -ing form.', 'A singular subject usually takes a singular verb.', 'Active voice focuses on the doer; passive voice focuses on the receiver.', 'Direct speech repeats exact words inside quotation marks.', 'Use apostrophes for possession and contractions.'],
      questions: [
        { type: 'select', text: 'Choose the interjection.', options: ['Wow!', 'under', 'quickly'], answer: 'Wow!' },
        { type: 'text', text: 'Complete continuous tense: She is ___ a book.', answer: 'reading' },
        { type: 'select', text: 'Choose the correct agreement.', options: ['He plays football.', 'He play football.', 'He playing football.'], answer: 'He plays football.' },
        { type: 'select', text: 'Which is passive voice?', options: ['The letter was written by Sara.', 'Sara wrote the letter.', 'Sara is writing.'], answer: 'The letter was written by Sara.' },
        { type: 'text', text: 'Direct speech uses quotation ___.', answer: 'marks' },
        { type: 'select', text: 'Choose the adverb.', options: ['silently', 'silent', 'silence'], answer: 'silently' },
        { type: 'text', text: 'Complete: I ___ visit Lahore tomorrow.', answer: 'will' },
        { type: 'radio', text: 'True or False: An apostrophe can show possession.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Choose the article: ___ apple a day.', options: ['An', 'A', 'The a'], answer: 'An' },
        { type: 'text', text: 'Complete: Ali said that he ___ happy.', answer: 'was' }
      ]
    },
    writing: {
      title: 'Writing',
      intro: 'Develop longer written responses through paragraphs, essay introductions, stories, formal and informal letters, applications, emails, summaries, picture-based writing, and dialogues.',
      focus: ['Paragraph writing with topic sentence, details, and conclusion', 'Essay writing introduction with introduction, body, and conclusion', 'Story writing with plot, conflict, and resolution', 'Formal and informal letter writing', 'Application writing with purpose and polite request', 'Email writing introduction with subject, greeting, message, and closing', 'Summary writing introduction using key points', 'Picture-based writing with observation and imagination', 'Dialogue writing with speakers and punctuation', 'Planning, drafting, revising, and proofreading'],
      examples: [['Essay', 'Introduction: Cleanliness is important for health and comfort.'], ['Formal letter', 'Respected Sir, I request leave for two days.'], ['Email', 'Subject: Homework Question'], ['Summary', 'The text explains why exercise is good for children.'], ['Dialogue', 'Ali: What are you reading? Sara: A storybook.']],
      quick: ['An essay is longer than a paragraph and has multiple parts.', 'Formal writing should be polite and clear.', 'A summary should not include every detail.', 'A dialogue needs speaker names and correct punctuation.', 'Always revise for missing words, spelling, and punctuation.'],
      questions: [
        { type: 'select', text: 'An essay usually has...', options: ['introduction, body, conclusion', 'only one word', 'no topic'], answer: 'introduction, body, conclusion' },
        { type: 'text', text: 'An email should have a subject, greeting, message, and ___.', answer: 'closing' },
        { type: 'select', text: 'Which is formal writing?', options: ['Respected Sir, kindly grant me leave.', 'Hey friend!', 'What a funny joke!'], answer: 'Respected Sir, kindly grant me leave.' },
        { type: 'text', text: 'A summary uses only key ___.', answer: 'points', alt: ['ideas'] },
        { type: 'select', text: 'Which is dialogue writing?', options: ['Ali: Where are you going?', 'The park is green.', 'Because carefully'], answer: 'Ali: Where are you going?' },
        { type: 'radio', text: 'True or False: Proofreading means checking your writing.', options: ['True', 'False'], answer: 'True' },
        { type: 'text', text: 'Complete: A story problem is called a ___.', answer: 'conflict' },
        { type: 'select', text: 'Picture-based writing begins by...', options: ['observing details', 'ignoring the picture', 'copying numbers'], answer: 'observing details' },
        { type: 'text', text: 'Complete: A paragraph begins with a topic ___.', answer: 'sentence' },
        { type: 'select', text: 'Which closing fits an informal letter?', options: ['Your friend, Ali', 'Respected Principal', 'Subject: Leave'], answer: 'Your friend, Ali' }
      ]
    },
    literature: {
      title: 'Literature',
      intro: 'Study poems, short stories, fables, and folk tales by identifying central idea, character, setting, moral, theme, and evidence from the text.',
      focus: ['Poems with central idea and expressive language', 'Short stories with plot and conflict', 'Fables and folk tales with lessons', 'Character and setting', 'Moral/theme-based questions', 'Character traits supported by evidence', 'Comparing characters and events', 'Understanding narrator or speaker', 'Reading literature aloud with feeling', 'Connecting lessons to real life'],
      examples: [['Central idea', 'The poem celebrates the beauty of nature.'], ['Fable', 'The hare and the tortoise teaches that slow and steady wins the race.'], ['Setting', 'The story takes place in a village near a forest.'], ['Character trait', 'The girl is brave because she enters the dark cave to help her brother.'], ['Theme', 'Kindness can change people.']],
      quick: ['A central idea tells what a poem or story is mainly about.', 'Fables often teach a moral through animals.', 'Setting includes place and sometimes time.', 'Use character actions as evidence for traits.', 'Theme is a message that can apply to real life.'],
      questions: [
        { type: 'select', text: 'What is the central idea?', options: ['What the poem or story is mainly about', 'Only the page number', 'A comma rule'], answer: 'What the poem or story is mainly about' },
        { type: 'text', text: 'A fable usually teaches a ___.', answer: 'moral' },
        { type: 'select', text: 'Which is a setting?', options: ['in a quiet village', 'brave and honest', 'because he ran'], answer: 'in a quiet village' },
        { type: 'select', text: 'Which sentence gives character evidence?', options: ['She shared her lunch, so she is generous.', 'Generous lunch she.', 'The comma is here.'], answer: 'She shared her lunch, so she is generous.' },
        { type: 'radio', text: 'True or False: Folk tales are traditional stories.', options: ['True', 'False'], answer: 'True' },
        { type: 'text', text: 'The person telling a story may be called the ___.', answer: 'narrator' },
        { type: 'select', text: 'Which is a theme?', options: ['Honesty is important.', 'The story has 12 lines.', 'The title is short.'], answer: 'Honesty is important.' },
        { type: 'text', text: 'Complete: A character trait tells what a character is ___.', answer: 'like' },
        { type: 'select', text: 'Which text can have rhythm and central idea?', options: ['poem', 'menu', 'timetable'], answer: 'poem' },
        { type: 'text', text: 'Complete: Slow and steady wins the ___.', answer: 'race' }
      ]
    }
  };

  const TOPICS_GRADE6 = {
    'listening-speaking': {
      title: 'Listening & Speaking',
      intro: 'Develop mature speaking and listening skills through discussions, reasoned opinions, role play, interviews, oral summaries, story narration, pronunciation, and intonation.',
      focus: ['Discussions on familiar topics such as school life, sports, books, health, and community', 'Giving opinions with clear reasons and examples', 'Role play for real-life situations such as interviews, visits, and problem-solving', 'Interviews with prepared questions and thoughtful answers', 'Oral summaries that include only main points', 'Story narration with sequence, expression, and voice control', 'Pronunciation practice for clear sounds and word stress', 'Intonation practice for questions, statements, surprise, and emphasis'],
      examples: [['Opinion', 'I think school gardens are useful because students learn responsibility.'], ['Interview', 'What challenge did you face, and how did you solve it?'], ['Oral summary', 'The passage explains why exercise improves health and mood.'], ['Intonation', 'Raise your voice slightly at the end of yes/no questions.'], ['Narration', 'At first the hero was afraid, but later he acted bravely.']],
      quick: ['A strong opinion is supported by because and an example.', 'An oral summary should be short and accurate.', 'Interviews need open-ended questions, not only yes/no questions.', 'Pronunciation is about clear sounds; intonation is about voice movement.', 'Good listeners respond to the speaker’s actual point.'],
      questions: [
        { type: 'select', text: 'Which is an opinion with a reason?', options: ['I prefer libraries because they are quiet.', 'The library has chairs.', 'There are books.'], answer: 'I prefer libraries because they are quiet.' },
        { type: 'text', text: 'An oral summary should include main ___.', answer: 'points', alt: ['ideas'] },
        { type: 'select', text: 'Which is an interview-style question?', options: ['How did you prepare for the competition?', 'Competition prepare how', 'Blue and green'], answer: 'How did you prepare for the competition?' },
        { type: 'text', text: 'Voice rising and falling is called ___.', answer: 'intonation' },
        { type: 'radio', text: 'True or False: Role play means acting out a real or imagined situation.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Which helps story narration?', options: ['sequence words', 'random order', 'no expression'], answer: 'sequence words' },
        { type: 'text', text: 'Complete: I agree ___ your point about clean water.', answer: 'with' },
        { type: 'select', text: 'Pronunciation practice improves...', options: ['clear speech sounds', 'only handwriting', 'only spelling lists'], answer: 'clear speech sounds' },
        { type: 'text', text: 'A discussion works best when speakers take ___.', answer: 'turns' },
        { type: 'select', text: 'Which is a familiar discussion topic?', options: ['How to keep our classroom clean', 'A list of commas only', 'Silent numbers'], answer: 'How to keep our classroom clean' }
      ]
    },
    reading: {
      title: 'Reading',
      intro: 'Read fiction, non-fiction, biographies, poems, informational articles, and functional texts while practicing skimming, scanning, inference, theme, character analysis, context clues, and summarizing.',
      focus: ['Fiction with plot, setting, conflict, and resolution', 'Non-fiction and informational articles with facts and explanations', 'Biographies about real people and their achievements', 'Poems with central idea, mood, imagery, and sound patterns', 'Skimming for general idea', 'Scanning for specific information', 'Inference using evidence and prior knowledge', 'Theme and message of a text', 'Character analysis using actions, words, and choices', 'Context clues for unfamiliar vocabulary', 'Summarizing with key points only', 'Reading charts, tables, forms, and notices accurately'],
      examples: [['Skimming', 'Quickly read headings and first sentences to get the general idea.'], ['Scanning', 'Look for a date, name, number, or keyword.'], ['Biography', 'A text about Abdul Sattar Edhi’s life and service.'], ['Character analysis', 'The character is determined because she keeps trying after failure.'], ['Context clue', 'The desert was arid, or very dry.']],
      quick: ['Skimming is fast reading for the main idea; scanning is fast searching for exact information.', 'A biography is about a real person’s life.', 'Character analysis must include evidence from the text.', 'Theme is the deeper message, not just the topic.', 'A good summary avoids minor details and personal opinions.'],
      questions: [
        { type: 'select', text: 'What is skimming?', options: ['Reading quickly for the general idea', 'Reading only numbers', 'Copying every word'], answer: 'Reading quickly for the general idea' },
        { type: 'select', text: 'What is scanning used for?', options: ['Finding specific information', 'Guessing randomly', 'Writing dialogue'], answer: 'Finding specific information' },
        { type: 'text', text: 'A text about a real person’s life is a ___.', answer: 'biography' },
        { type: 'select', text: 'Which sentence gives character evidence?', options: ['He practiced daily, so he was determined.', 'Determined daily he.', 'The chart has lines.'], answer: 'He practiced daily, so he was determined.' },
        { type: 'radio', text: 'True or False: Context clues help understand unknown words.', options: ['True', 'False'], answer: 'True' },
        { type: 'text', text: 'Complete: The deeper message of a text is its ___.', answer: 'theme' },
        { type: 'select', text: 'Which text is functional?', options: ['notice', 'fairy tale only', 'limerick only'], answer: 'notice' },
        { type: 'text', text: 'A summary should include key ___ only.', answer: 'points', alt: ['ideas'] },
        { type: 'select', text: 'Which is an inference?', options: ['She packed a coat, so it was probably cold.', 'She packed a coat.', 'The coat was blue.'], answer: 'She packed a coat, so it was probably cold.' },
        { type: 'select', text: 'A poem may use imagery to create...', options: ['pictures in the mind', 'only dates', 'forms and notices'], answer: 'pictures in the mind' }
      ]
    },
    vocabulary: {
      title: 'Vocabulary',
      intro: 'Expand vocabulary through synonyms, antonyms, prefixes, suffixes, idioms, proverbs, phrasal verbs, compound words, homophones, homonyms, contextual meanings, and formal/informal word choices.',
      focus: ['Synonyms and antonyms for precise word choice', 'Prefixes and suffixes that change meaning or grammar', 'Idioms with figurative meanings', 'Proverbs that express wisdom', 'Phrasal verbs introduction such as give up and look after', 'Compound words formed from smaller words', 'Homophones and homonyms', 'Word meanings in context', 'Formal vocabulary for school and official writing', 'Informal vocabulary for friendly conversation'],
      examples: [['Phrasal verb', 'look after means take care of.'], ['Formal/informal', 'assist is more formal than help.'], ['Idiom', 'once in a blue moon means rarely.'], ['Proverb', 'A stitch in time saves nine.'], ['Context', 'The crane lifted the box. Crane means machine here, not bird.']],
      quick: ['Phrasal verbs combine a verb with a small word and often have a special meaning.', 'Formal vocabulary is suitable for letters, applications, and speeches.', 'Context decides the correct meaning of homonyms.', 'Idioms should not be translated word by word.', 'Proverbs usually teach advice or life lessons.'],
      questions: [
        { type: 'select', text: 'What does look after mean?', options: ['take care of', 'look behind', 'throw away'], answer: 'take care of' },
        { type: 'select', text: 'Choose the formal word.', options: ['assist', 'kid', 'gonna'], answer: 'assist' },
        { type: 'text', text: 'Complete the idiom: once in a blue ___.', answer: 'moon' },
        { type: 'select', text: 'Which is a proverb?', options: ['A stitch in time saves nine.', 'The blue chair.', 'Run quickly.'], answer: 'A stitch in time saves nine.' },
        { type: 'text', text: 'The prefix in disagree is ___.', answer: 'dis', alt: ['dis-'] },
        { type: 'select', text: 'Which pair is homophones?', options: ['peace / piece', 'big / large', 'hot / cold'], answer: 'peace / piece' },
        { type: 'radio', text: 'True or False: A homonym can have more than one meaning.', options: ['True', 'False'], answer: 'True' },
        { type: 'text', text: 'Complete the compound word: note + book = ___.', answer: 'notebook' },
        { type: 'select', text: 'Which is informal vocabulary?', options: ['kid', 'child', 'student'], answer: 'kid' },
        { type: 'text', text: 'Context helps us choose the correct ___.', answer: 'meaning' }
      ]
    },
    grammar: {
      title: 'Grammar',
      intro: 'Review parts of speech and build control over noun phrases, verb forms, tenses, modals, agreement, active/passive voice, reported speech, sentence types, and punctuation.',
      focus: ['Parts of speech review', 'Noun phrases with modifiers', 'Verb forms and helping verbs', 'Present, past, and future tenses', 'Present continuous and past continuous', 'Present perfect introduction', 'Subject-verb agreement', 'Modals: can, could, may, might, should, must', 'Prepositions and conjunctions', 'Active and passive voice basics', 'Direct and indirect speech basics', 'Types of sentences: declarative, interrogative, imperative, exclamatory', 'Punctuation for clarity and meaning'],
      examples: [['Noun phrase', 'the tall boy with a red cap'], ['Present perfect', 'She has completed her work.'], ['Modal', 'You should respect your elders.'], ['Passive voice', 'The window was broken by the ball.'], ['Sentence type', 'Please close the door. is imperative.']],
      quick: ['A noun phrase is built around a noun and may include describing words.', 'Present perfect often uses has or have plus past participle.', 'Modals show ability, permission, possibility, advice, or necessity.', 'Passive voice focuses on the receiver of the action.', 'Different sentence types need different punctuation.'],
      questions: [
        { type: 'select', text: 'Choose the noun phrase.', options: ['the old wooden bridge', 'quickly ran', 'because and but'], answer: 'the old wooden bridge' },
        { type: 'text', text: 'Complete present perfect: She has ___ her homework.', answer: 'completed' },
        { type: 'select', text: 'Which modal gives advice?', options: ['should', 'table', 'because'], answer: 'should' },
        { type: 'select', text: 'Choose passive voice.', options: ['The cake was baked by mother.', 'Mother baked the cake.', 'Mother is baking.'], answer: 'The cake was baked by mother.' },
        { type: 'radio', text: 'True or False: "Close the window." is an imperative sentence.', options: ['True', 'False'], answer: 'True' },
        { type: 'text', text: 'Complete past continuous: They were ___ football.', answer: 'playing' },
        { type: 'select', text: 'Choose correct agreement.', options: ['The boys are ready.', 'The boys is ready.', 'The boys am ready.'], answer: 'The boys are ready.' },
        { type: 'text', text: 'Complete: Ali said that he ___ tired.', answer: 'was' },
        { type: 'select', text: 'Which punctuation ends an exclamatory sentence?', options: ['exclamation mark', 'comma', 'apostrophe'], answer: 'exclamation mark' },
        { type: 'text', text: 'Complete: May shows permission or ___.', answer: 'possibility' }
      ]
    },
    writing: {
      title: 'Writing',
      intro: 'Write organized paragraphs, essays, stories, letters, applications, emails, dialogues, summaries, descriptions, and notices with clear structure and accurate language.',
      focus: ['Paragraph writing with topic sentence and supporting details', 'Essay writing with introduction, body paragraphs, and conclusion', 'Story writing with plot, conflict, climax, and resolution', 'Formal letter and informal letter', 'Application writing for school situations', 'Email writing with subject, greeting, message, and closing', 'Dialogue writing with natural exchanges', 'Summary writing with main points only', 'Description of person, place, or event using sensory details', 'Notice writing with heading, date, purpose, and details', 'Planning, drafting, editing, and proofreading'],
      examples: [['Notice', 'NOTICE: Cleanliness Drive, Friday, 10 a.m., school ground.'], ['Description', 'The old library smelled of paper and polished wood.'], ['Essay', 'Each body paragraph explains one main point.'], ['Summary', 'The article explains three ways to save electricity.'], ['Email', 'Subject: Request for Project Details']],
      quick: ['A notice should be brief but complete.', 'Descriptions become stronger with sight, sound, smell, touch, and feeling.', 'A summary should not copy the whole text.', 'Formal writing uses polite and precise language.', 'Editing improves clarity, grammar, punctuation, and spelling.'],
      questions: [
        { type: 'select', text: 'What should a notice include?', options: ['heading, date, purpose, details', 'only a story ending', 'only greeting'], answer: 'heading, date, purpose, details' },
        { type: 'text', text: 'A summary includes main ___ only.', answer: 'points', alt: ['ideas'] },
        { type: 'select', text: 'Which is descriptive writing?', options: ['The market was noisy and colorful.', 'Market colorful noisy the.', 'Because and but.'], answer: 'The market was noisy and colorful.' },
        { type: 'text', text: 'An email begins with a subject and a ___.', answer: 'greeting' },
        { type: 'radio', text: 'True or False: A formal letter should be polite.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'A story conflict is...', options: ['the main problem', 'the title only', 'the last comma'], answer: 'the main problem' },
        { type: 'text', text: 'Complete: A paragraph has a topic sentence and supporting ___.', answer: 'details' },
        { type: 'select', text: 'Which belongs in dialogue writing?', options: ['speaker names', 'only prices', 'only dates'], answer: 'speaker names' },
        { type: 'text', text: 'The final part of an essay is the ___.', answer: 'conclusion' },
        { type: 'select', text: 'Proofreading checks...', options: ['spelling and punctuation', 'only page color', 'only pictures'], answer: 'spelling and punctuation' }
      ]
    },
    literature: {
      title: 'Literature',
      intro: 'Study poems, short stories, plays/dialogues, moral and social themes, character sketches, and central ideas with evidence-based responses.',
      focus: ['Poems with central idea, tone, imagery, and rhythm', 'Short stories with plot and conflict', 'Plays and dialogues with speakers, stage directions, and action', 'Moral and social themes such as honesty, courage, fairness, and cooperation', 'Character sketch using traits and evidence', 'Central idea of poem', 'Comparing characters and choices', 'Explaining theme with examples from the text', 'Reading dialogue with expression', 'Connecting literature to society and personal experience'],
      examples: [['Central idea', 'The poem shows that nature gives peace to the human heart.'], ['Play', 'Stage directions tell actors what to do.'], ['Social theme', 'The story shows why cooperation helps communities.'], ['Character sketch', 'Rida is thoughtful because she listens before making decisions.'], ['Evidence', 'He returned the lost wallet, so he is honest.']],
      quick: ['A play is written to be performed.', 'Stage directions are not spoken by characters.', 'A character sketch should include traits and proof.', 'A central idea is broader than one event.', 'Social themes connect stories to real problems and values.'],
      questions: [
        { type: 'select', text: 'What are stage directions for?', options: ['telling actors what to do', 'giving menu prices', 'marking spelling words'], answer: 'telling actors what to do' },
        { type: 'text', text: 'The main idea of a poem is its central ___.', answer: 'idea' },
        { type: 'select', text: 'Which is a social theme?', options: ['cooperation helps communities', 'there are ten pages', 'the title is short'], answer: 'cooperation helps communities' },
        { type: 'text', text: 'A character sketch needs traits and ___.', answer: 'evidence' },
        { type: 'radio', text: 'True or False: A play is written to be performed.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Which sentence supports honesty?', options: ['He returned the lost wallet.', 'The wallet was brown.', 'Wallet brown the.'], answer: 'He returned the lost wallet.' },
        { type: 'text', text: 'A dialogue is a conversation between ___.', answer: 'speakers', alt: ['characters'] },
        { type: 'select', text: 'Which belongs to poetry?', options: ['imagery and rhythm', 'only forms', 'only notices'], answer: 'imagery and rhythm' },
        { type: 'text', text: 'The problem in a story is often called the ___.', answer: 'conflict' },
        { type: 'select', text: 'Which is a moral theme?', options: ['Courage helps us face fear.', 'The notice is on Friday.', 'The table has rows.'], answer: 'Courage helps us face fear.' }
      ]
    }
  };

  const TOPICS_GRADE7 = {
    'listening-speaking': {
      title: 'Listening & Speaking',
      intro: 'Build confident oral communication through group discussion, presentations, debate basics, agreement and disagreement, follow-up questions, event retelling, and listening for key information.',
      focus: ['Group discussion with relevant contributions and active listening', 'Presentation skills: opening, body, visual cues, and closing', 'Debate basics: claim, reason, evidence, and rebuttal', 'Expressing agreement and disagreement politely', 'Asking follow-up questions to extend a conversation', 'Retelling news or events in correct sequence', 'Listening for key information such as names, places, dates, numbers, and reasons', 'Using clear pronunciation, suitable pace, eye contact, and confident posture'],
      examples: [['Agreement', 'I agree with your point because the evidence is strong.'], ['Disagreement', 'I see your point, but I think there is another reason.'], ['Follow-up', 'Can you explain why that happened?'], ['News retelling', 'First the storm began, then roads flooded, and finally rescue teams arrived.'], ['Debate claim', 'Students should read daily because it improves vocabulary.']],
      quick: ['A debate point should include a claim and a reason.', 'Follow-up questions begin from what the speaker already said.', 'When retelling news, include who, what, when, where, why, and how.', 'Key information is the most important information needed to understand the message.', 'Polite disagreement challenges the idea, not the person.'],
      questions: [
        { type: 'select', text: 'Which phrase shows polite disagreement?', options: ['I see your point, but...', 'You are wrong!', 'Stop speaking.'], answer: 'I see your point, but...' },
        { type: 'text', text: 'A debate point should include a claim and a ___.', answer: 'reason' },
        { type: 'select', text: 'Which is a follow-up question?', options: ['Why do you think that happened?', 'The event happened yesterday.', 'A blue notebook.'], answer: 'Why do you think that happened?' },
        { type: 'text', text: 'When retelling news, mention who, what, when, where, why, and ___.', answer: 'how' },
        { type: 'radio', text: 'True or False: Listening for key information means noticing important details.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Which belongs in a presentation?', options: ['opening, main points, closing', 'only whispers', 'no topic'], answer: 'opening, main points, closing' },
        { type: 'text', text: 'Complete: I agree ___ your argument about clean water.', answer: 'with' },
        { type: 'select', text: 'Which is a debate claim?', options: ['School libraries should stay open longer.', 'The library is near the office.', 'There are five chairs.'], answer: 'School libraries should stay open longer.' },
        { type: 'text', text: 'Clear speech needs good pronunciation and suitable ___.', answer: 'pace' },
        { type: 'select', text: 'Which detail is key information in an announcement?', options: ['date and time', 'speaker’s shoe color', 'wall paint'], answer: 'date and time' }
      ]
    },
    reading: {
      title: 'Reading',
      intro: 'Read literary, informational, newspaper-style, autobiographical, poetic, and drama texts while analyzing main idea, inference, tone, mood, comparison, fact/opinion, author purpose, and longer summaries.',
      focus: ['Literary texts with theme, characters, plot, and setting', 'Informational texts that explain facts and concepts', 'Newspaper-style passages with headline, lead, and key details', 'Autobiographical writing told by the writer about their own life', 'Poetry with imagery, rhythm, and speaker', 'Drama extracts with dialogue and stage directions', 'Main idea and inference', 'Tone and mood introduction', 'Compare and contrast across texts or characters', 'Fact vs opinion', 'Author’s purpose: inform, entertain, persuade, explain, or reflect', 'Summarizing longer texts with main points and no minor details'],
      examples: [['Tone', 'The author’s attitude may be serious, humorous, hopeful, or critical.'], ['Mood', 'A dark empty street may create a tense mood.'], ['Autobiography', 'I still remember my first day at school.'], ['Newspaper lead', 'The first paragraph answers who, what, when, where, and why.'], ['Compare/contrast', 'Both characters are brave, but one is patient while the other is impulsive.']],
      quick: ['Tone is the writer’s attitude; mood is the feeling created in the reader.', 'Autobiography uses first-person pronouns such as I and my.', 'Newspaper reports put the most important information first.', 'Compare means find similarities; contrast means find differences.', 'A longer summary may have several sentences but should still be concise.'],
      questions: [
        { type: 'select', text: 'Tone means...', options: ['the writer’s attitude', 'the story place', 'a punctuation mark'], answer: 'the writer’s attitude' },
        { type: 'select', text: 'Mood means...', options: ['the feeling created in the reader', 'the author’s address', 'only the title'], answer: 'the feeling created in the reader' },
        { type: 'text', text: 'A life story written by the person is an ___.', answer: 'autobiography' },
        { type: 'select', text: 'A newspaper lead usually gives...', options: ['key details first', 'only the ending', 'only rhymes'], answer: 'key details first' },
        { type: 'radio', text: 'True or False: Compare means finding similarities.', options: ['True', 'False'], answer: 'True' },
        { type: 'text', text: 'Complete: Contrast means finding ___.', answer: 'differences' },
        { type: 'select', text: 'Which is an opinion?', options: ['The poem is the best in the book.', 'The article has six paragraphs.', 'The notice says Monday.'], answer: 'The poem is the best in the book.' },
        { type: 'text', text: 'A drama extract often includes dialogue and stage ___.', answer: 'directions' },
        { type: 'select', text: 'Which is an inference?', options: ['The room was silent, so everyone was nervous.', 'The room was silent.', 'The room had a door.'], answer: 'The room was silent, so everyone was nervous.' },
        { type: 'text', text: 'A summary should avoid minor ___.', answer: 'details' }
      ]
    },
    vocabulary: {
      title: 'Vocabulary',
      intro: 'Extend vocabulary with advanced synonyms and antonyms, idioms, proverbs, phrasal verbs, roots, affixes, collocations, figurative language, contextual meanings, and formal/informal usage.',
      focus: ['Advanced synonyms and antonyms for precise expression', 'Idioms and proverbs used in speech and writing', 'Phrasal verbs such as carry out, turn down, and look into', 'Prefixes, suffixes, and root words', 'Collocations that sound natural in English', 'Figurative language: simile, metaphor, personification', 'Contextual meanings of words with more than one meaning', 'Formal and informal word choices', 'Using word parts to infer meaning', 'Choosing vocabulary to suit audience and purpose'],
      examples: [['Advanced synonym', 'brief and concise'], ['Phrasal verb', 'look into means investigate.'], ['Metaphor', 'Time is a thief.'], ['Personification', 'The wind whispered through the trees.'], ['Collocation', 'make progress, not do progress.']],
      quick: ['A metaphor compares without like or as.', 'Personification gives human actions to non-human things.', 'Phrasal verbs often have meanings different from the base verb.', 'Root words carry the main meaning.', 'Formal vocabulary is better for reports, applications, and speeches.'],
      questions: [
        { type: 'select', text: 'Choose a synonym of concise.', options: ['brief', 'lengthy', 'confused'], answer: 'brief' },
        { type: 'select', text: 'What does look into mean?', options: ['investigate', 'stare inside', 'ignore'], answer: 'investigate' },
        { type: 'select', text: 'Which is a metaphor?', options: ['Time is a thief.', 'as fast as wind', 'The bell rang.'], answer: 'Time is a thief.' },
        { type: 'text', text: 'Giving human qualities to non-human things is ___.', answer: 'personification' },
        { type: 'select', text: 'Choose the natural collocation.', options: ['make progress', 'do progress', 'cook progress'], answer: 'make progress' },
        { type: 'text', text: 'The root word in helpful is ___.', answer: 'help' },
        { type: 'radio', text: 'True or False: Idioms always mean exactly what each word says.', options: ['True', 'False'], answer: 'False' },
        { type: 'select', text: 'Which is more formal?', options: ['commence', 'start', 'kick off'], answer: 'commence' },
        { type: 'text', text: 'Complete the proverb: Actions speak louder than ___.', answer: 'words' },
        { type: 'select', text: 'Which is a simile?', options: ['as brave as a lion', 'The moon smiled.', 'He is a rock.'], answer: 'as brave as a lion' }
      ]
    },
    grammar: {
      title: 'Grammar',
      intro: 'Develop advanced sentence control through tenses, perfect forms, future forms, modals, conditionals, passive voice, reported speech, relative pronouns, clauses, phrases, sentence types, punctuation, and editing.',
      focus: ['Tenses: simple, continuous, and perfect', 'Present perfect and past perfect', 'Future forms using will, going to, and present continuous for arrangements', 'Modals for ability, permission, advice, duty, and possibility', 'Conditionals introduction with if clauses', 'Active and passive voice', 'Direct and indirect speech', 'Relative pronouns: who, which, that, whose, whom', 'Adjective clauses introduction', 'Adverb clauses introduction', 'Prepositional phrases', 'Sentence types and sentence variety', 'Punctuation and editing for accuracy'],
      examples: [['Present perfect', 'I have finished my project.'], ['Past perfect', 'She had left before the rain started.'], ['Conditional', 'If it rains, we will stay inside.'], ['Relative clause', 'The boy who won the race is my cousin.'], ['Adverb clause', 'Because he was tired, he slept early.']],
      quick: ['Present perfect connects past action to the present.', 'Past perfect shows an earlier past action.', 'A conditional sentence often has an if clause and a result clause.', 'Relative clauses add information about a noun.', 'Editing means checking grammar, punctuation, spelling, and clarity.'],
      questions: [
        { type: 'select', text: 'Choose present perfect.', options: ['I have completed it.', 'I complete it.', 'I completed it yesterday.'], answer: 'I have completed it.' },
        { type: 'text', text: 'Complete past perfect: She had ___ before I arrived.', answer: 'left' },
        { type: 'select', text: 'Choose a conditional sentence.', options: ['If it rains, we will wait.', 'It rains yesterday.', 'Rain the wait.'], answer: 'If it rains, we will wait.' },
        { type: 'text', text: 'The relative pronoun for people is often ___.', answer: 'who' },
        { type: 'select', text: 'Choose passive voice.', options: ['The match was won by our team.', 'Our team won the match.', 'Our team is winning.'], answer: 'The match was won by our team.' },
        { type: 'radio', text: 'True or False: Editing checks punctuation and grammar.', options: ['True', 'False'], answer: 'True' },
        { type: 'text', text: 'Complete: You ___ respect traffic rules.', answer: 'must', alt: ['should'] },
        { type: 'select', text: 'Which begins an adverb clause?', options: ['because', 'who', 'the'], answer: 'because' },
        { type: 'text', text: 'Complete indirect speech: Ali said that he ___ busy.', answer: 'was' },
        { type: 'select', text: 'Which is a prepositional phrase?', options: ['under the old bridge', 'quickly running', 'because he tried'], answer: 'under the old bridge' }
      ]
    },
    writing: {
      title: 'Writing',
      intro: 'Write coherent essays, letters, applications, emails, dialogues, stories, reports, summaries, reviews, and connected paragraphs using clear organization and connectors.',
      focus: ['Descriptive, narrative, and reflective essays', 'Formal and informal letters with correct tone', 'Applications for school purposes', 'Emails with subject line, greeting, body, and closing', 'Dialogue writing with natural speech and punctuation', 'Story writing with plot, conflict, climax, and resolution', 'Report writing introduction with facts and organized headings', 'Summary writing with key points only', 'Review writing introduction with opinion and reasons', 'Paragraph coherence and connectors such as however, therefore, moreover, first, and finally'],
      examples: [['Reflective essay', 'I learned that teamwork matters more than winning.'], ['Report', 'The science fair was held on Friday in the school hall.'], ['Review', 'The book is exciting because the plot moves quickly.'], ['Connector', 'The weather was bad; however, the team continued playing.'], ['Narrative', 'The story builds toward a climax before the problem is solved.']],
      quick: ['Coherence means ideas connect smoothly.', 'Reports should focus on facts, not imagination.', 'A review includes opinion plus reasons.', 'Reflective writing explains what you learned or felt.', 'Connectors help readers follow the relationship between ideas.'],
      questions: [
        { type: 'select', text: 'Which connector shows contrast?', options: ['however', 'therefore', 'first'], answer: 'however' },
        { type: 'text', text: 'A report should focus mainly on ___.', answer: 'facts' },
        { type: 'select', text: 'A review includes...', options: ['opinion with reasons', 'only dates', 'no judgment'], answer: 'opinion with reasons' },
        { type: 'text', text: 'Paragraph coherence means ideas are clearly ___.', answer: 'connected' },
        { type: 'radio', text: 'True or False: A reflective essay may explain what the writer learned.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Which belongs in an email?', options: ['subject line', 'stage direction only', 'price list only'], answer: 'subject line' },
        { type: 'text', text: 'The most exciting turning point of a story is the ___.', answer: 'climax' },
        { type: 'select', text: 'Which is formal tone?', options: ['I request your permission.', 'Hey, let me go.', 'Cool, bye!'], answer: 'I request your permission.' },
        { type: 'text', text: 'A summary should not include unnecessary ___.', answer: 'details' },
        { type: 'select', text: 'Which connector shows result?', options: ['therefore', 'meanwhile', 'although'], answer: 'therefore' }
      ]
    },
    literature: {
      title: 'Literature',
      intro: 'Study poems, short stories, and drama scenes by analyzing theme, poetic devices, character, plot sequence, moral issues, and social issues.',
      focus: ['Poems with theme and poetic devices', 'Poetic devices such as simile, metaphor, personification, imagery, and repetition', 'Short stories with conflict, climax, and resolution', 'Drama scenes with dialogue, stage directions, and conflict', 'Character analysis using traits, motives, and evidence', 'Plot sequence from exposition to resolution', 'Moral and social issues such as justice, courage, equality, and responsibility', 'Theme development across a text', 'Comparing characters’ choices', 'Explaining how language creates effect'],
      examples: [['Poetic device', 'The stars danced is personification.'], ['Theme', 'The story suggests that courage grows through action.'], ['Plot sequence', 'Exposition, rising action, climax, falling action, resolution.'], ['Character motive', 'He lied because he feared punishment.'], ['Social issue', 'The play explores fairness in the community.']],
      quick: ['Theme is supported by events, characters, and language.', 'Character analysis explains what a character is like and why.', 'Plot sequence helps track how conflict develops.', 'Drama is meant to be performed, so stage directions matter.', 'Poetic devices create images, feelings, and emphasis.'],
      questions: [
        { type: 'select', text: 'Which is personification?', options: ['The stars danced.', 'as cold as ice', 'He ran fast.'], answer: 'The stars danced.' },
        { type: 'text', text: 'The turning point of a plot is the ___.', answer: 'climax' },
        { type: 'select', text: 'Which is a social issue?', options: ['fairness in a community', 'the number of pages', 'a comma rule'], answer: 'fairness in a community' },
        { type: 'text', text: 'A character’s reason for acting is called ___.', answer: 'motive' },
        { type: 'radio', text: 'True or False: Stage directions help actors perform drama.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Which is a metaphor?', options: ['Hope is a light.', 'as bright as light', 'The light is on.'], answer: 'Hope is a light.' },
        { type: 'text', text: 'The final solution of a plot is the ___.', answer: 'resolution' },
        { type: 'select', text: 'Character analysis should use...', options: ['evidence from the text', 'random guesses', 'only the title'], answer: 'evidence from the text' },
        { type: 'text', text: 'A poem’s message is its ___.', answer: 'theme' },
        { type: 'select', text: 'Which is imagery?', options: ['golden sunlight warmed the quiet field', 'the field exists', 'there are two lines'], answer: 'golden sunlight warmed the quiet field' }
      ]
    }
  };

  const TOPICS_GRADE8 = {
    'listening-speaking': {
      title: 'Listening & Speaking',
      intro: 'Develop advanced oral communication through formal and informal discussions, speeches, debates, interviews, oral reports, argument analysis, polite opinions, and structured presentations.',
      focus: ['Formal discussions using respectful language and evidence', 'Informal discussions with natural but clear expression', 'Speeches with introduction, main arguments, examples, and conclusion', 'Debates with claim, evidence, counterargument, and rebuttal', 'Interviews with prepared and follow-up questions', 'Oral reports based on facts, observations, or research', 'Listening for argument and evidence', 'Expressing opinions politely and confidently', 'Giving presentations with clear structure and transitions', 'Using voice, posture, pace, and eye contact effectively'],
      examples: [['Formal opinion', 'I respectfully suggest that the proposal needs stronger evidence.'], ['Debate', 'My argument is that recycling should be compulsory because it reduces waste.'], ['Evidence', 'According to the survey, most students prefer digital notes.'], ['Oral report', 'This report presents the causes, effects, and possible solutions.'], ['Transition', 'Now that we have discussed the problem, let us examine the solution.']],
      quick: ['An argument is stronger when it includes evidence.', 'Formal speaking avoids slang and personal attacks.', 'A presentation should have a clear opening, organized body, and closing.', 'A debate requires listening carefully to the opposing side.', 'Follow-up questions should connect to the previous answer.'],
      questions: [
        { type: 'select', text: 'Which sentence is a formal opinion?', options: ['I respectfully disagree with this view.', 'No way, that is silly.', 'This one thing.'], answer: 'I respectfully disagree with this view.' },
        { type: 'text', text: 'An argument becomes stronger with ___.', answer: 'evidence' },
        { type: 'select', text: 'Which belongs in a structured presentation?', options: ['introduction, body, conclusion', 'only jokes', 'no order'], answer: 'introduction, body, conclusion' },
        { type: 'text', text: 'A debate reply to the opposite side is a ___.', answer: 'rebuttal' },
        { type: 'radio', text: 'True or False: Oral reports should be based on facts or observations.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Which is a follow-up interview question?', options: ['Can you give an example?', 'Your shirt is blue.', 'Table under.'], answer: 'Can you give an example?' },
        { type: 'text', text: 'Complete: In formal speech, avoid slang and personal ___.', answer: 'attacks' },
        { type: 'select', text: 'Which shows listening for evidence?', options: ['noticing facts used to support a claim', 'counting chairs', 'ignoring reasons'], answer: 'noticing facts used to support a claim' },
        { type: 'text', text: 'A speech should end with a strong ___.', answer: 'conclusion' },
        { type: 'select', text: 'Which transition is useful?', options: ['Furthermore', 'Blue', 'Table'], answer: 'Furthermore' }
      ]
    },
    reading: {
      title: 'Reading',
      intro: 'Read and analyze short stories, essays, articles, biographies, autobiographies, poems, drama, persuasive and informational texts, plus graphs, maps, tables, and advertisements.',
      focus: ['Short stories with plot, setting, conflict, theme, and character development', 'Essays and articles with thesis, arguments, and supporting details', 'Biographies and autobiographies', 'Poems with voice, mood, imagery, and devices', 'Drama with dialogue, stage directions, and conflict', 'Persuasive texts with claims and appeals', 'Informational texts with facts and explanations', 'Inference and deduction using evidence', 'Theme and central idea', 'Tone, mood, and purpose', 'Summarizing and paraphrasing', 'Reading graphs, maps, tables, and advertisements'],
      examples: [['Deduction', 'If the door is locked and lights are off, we may deduce nobody is home.'], ['Paraphrase', 'Restate an idea in your own words without changing meaning.'], ['Persuasive text', 'An advertisement uses language to influence readers.'], ['Tone', 'The writer’s tone may be sarcastic, hopeful, serious, or critical.'], ['Graph reading', 'Read labels, units, and trends before answering.']],
      quick: ['Inference uses clues; deduction uses logical reasoning from evidence.', 'Paraphrasing keeps meaning but changes wording.', 'Persuasive texts try to influence beliefs or actions.', 'Tone is the writer’s attitude; mood is the reader’s feeling.', 'Visual texts require careful reading of labels, symbols, and scales.'],
      questions: [
        { type: 'select', text: 'Paraphrasing means...', options: ['restating in your own words', 'copying every word', 'deleting the meaning'], answer: 'restating in your own words' },
        { type: 'text', text: 'A persuasive text tries to ___ the reader.', answer: 'influence', alt: ['persuade'] },
        { type: 'select', text: 'Which should you check first in a graph?', options: ['labels and units', 'only colors', 'author photo'], answer: 'labels and units' },
        { type: 'text', text: 'The writer’s attitude is called ___.', answer: 'tone' },
        { type: 'radio', text: 'True or False: Deduction uses logical reasoning from evidence.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Which is informational text?', options: ['an article about earthquakes', 'a fairy tale', 'a drama scene'], answer: 'an article about earthquakes' },
        { type: 'text', text: 'The central idea is the main ___ of a text.', answer: 'point', alt: ['idea'] },
        { type: 'select', text: 'A drama extract often includes...', options: ['stage directions', 'menu prices', 'graph labels only'], answer: 'stage directions' },
        { type: 'text', text: 'A biography is about a real person’s ___.', answer: 'life' },
        { type: 'select', text: 'Which is a mood word?', options: ['tense', 'comma', 'headline'], answer: 'tense' }
      ]
    },
    vocabulary: {
      title: 'Vocabulary',
      intro: 'Build precise vocabulary using idioms, phrases, proverbs, phrasal verbs, synonyms, antonyms, word formation, affixes, roots, figurative language, academic vocabulary, and context.',
      focus: ['Idioms and phrases with figurative meanings', 'Proverbs that express wisdom or advice', 'Phrasal verbs in academic and everyday contexts', 'Synonyms and antonyms for precise meaning', 'Word formation through prefixes, suffixes, and root words', 'Figurative language: simile, metaphor, personification, and more', 'Technical and academic vocabulary', 'Contextual vocabulary in passages', 'Choosing formal words for academic writing', 'Understanding word families and related forms'],
      examples: [['Academic vocabulary', 'analyze, evaluate, summarize, conclude'], ['Technical vocabulary', 'photosynthesis in science or ratio in mathematics'], ['Phrasal verb', 'carry out means perform or complete.'], ['Personification', 'The angry clouds marched across the sky.'], ['Word formation', 'predict, prediction, predictable.']],
      quick: ['Academic words appear often in school tasks and instructions.', 'Technical words belong to a specific subject or field.', 'Word formation helps you understand unfamiliar related words.', 'Phrasal verbs must be learned by meaning, not just by individual words.', 'Context tells which meaning fits best.'],
      questions: [
        { type: 'select', text: 'Which is academic vocabulary?', options: ['analyze', 'gonna', 'yummy'], answer: 'analyze' },
        { type: 'text', text: 'Carry out means to perform or ___.', answer: 'complete' },
        { type: 'select', text: 'Which is technical vocabulary?', options: ['photosynthesis', 'nice', 'happy'], answer: 'photosynthesis' },
        { type: 'text', text: 'Complete the word family: predict, prediction, ___.', answer: 'predictable' },
        { type: 'radio', text: 'True or False: Context can change which meaning of a word fits.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Which is personification?', options: ['The angry clouds marched.', 'as cold as ice', 'The cloud is gray.'], answer: 'The angry clouds marched.' },
        { type: 'text', text: 'A proverb gives advice or ___.', answer: 'wisdom' },
        { type: 'select', text: 'Choose the antonym of scarce.', options: ['abundant', 'rare', 'limited'], answer: 'abundant' },
        { type: 'text', text: 'The root in removable is ___.', answer: 'move' },
        { type: 'select', text: 'Which is a metaphor?', options: ['The classroom was a zoo.', 'as busy as a bee', 'The bell rang.'], answer: 'The classroom was a zoo.' }
      ]
    },
    grammar: {
      title: 'Grammar',
      intro: 'Master Grade 8 grammar through complete tense review, perfect continuous tenses, modals, semi-modals, conditionals, voice, speech, clauses, phrases, gerunds, infinitives, correction, and proofreading.',
      focus: ['Complete tense review', 'Perfect continuous tenses introduction', 'Modals and semi-modals such as have to, ought to, used to', 'Conditionals for real and imagined situations', 'Active and passive voice', 'Direct and indirect speech', 'Clauses and phrases', 'Relative clauses', 'Adverb clauses', 'Gerunds and infinitives introduction', 'Sentence correction', 'Punctuation and proofreading'],
      examples: [['Present perfect continuous', 'She has been studying for two hours.'], ['Semi-modal', 'You ought to apologize.'], ['Second conditional', 'If I had more time, I would join the club.'], ['Gerund', 'Swimming is good exercise.'], ['Infinitive', 'I want to learn French.']],
      quick: ['Perfect continuous tenses show duration up to a point in time.', 'Semi-modals behave like modals but may use to.', 'Conditionals connect a condition with a result.', 'A gerund is an -ing form used as a noun.', 'An infinitive often uses to plus base verb.'],
      questions: [
        { type: 'select', text: 'Choose present perfect continuous.', options: ['She has been reading.', 'She reads.', 'She read yesterday.'], answer: 'She has been reading.' },
        { type: 'text', text: 'Complete: You ought ___ respect your elders.', answer: 'to' },
        { type: 'select', text: 'Choose a conditional.', options: ['If I study, I will pass.', 'I study yesterday.', 'Study pass if.'], answer: 'If I study, I will pass.' },
        { type: 'text', text: 'In "Swimming is fun", swimming is a ___.', answer: 'gerund' },
        { type: 'select', text: 'Choose an infinitive.', options: ['to learn', 'learning', 'learned'], answer: 'to learn' },
        { type: 'radio', text: 'True or False: A phrase has no subject-verb combination.', options: ['True', 'False'], answer: 'True' },
        { type: 'text', text: 'Complete passive voice: The work was ___ by Ali.', answer: 'done' },
        { type: 'select', text: 'Which begins a relative clause?', options: ['who', 'because', 'although'], answer: 'who' },
        { type: 'text', text: 'Direct speech uses quotation ___.', answer: 'marks' },
        { type: 'select', text: 'Proofreading checks...', options: ['errors in grammar and punctuation', 'only page color', 'only font size'], answer: 'errors in grammar and punctuation' }
      ]
    },
    writing: {
      title: 'Writing',
      intro: 'Practice narrative, descriptive, argumentative, formal, informal, report, summary, story, dialogue, review, notice, advertisement, email, application, and letter writing with coherence and correct tone.',
      focus: ['Narrative essay with plot and reflection', 'Descriptive essay with sensory detail and imagery', 'Argumentative essay introduction with claim, reasons, evidence, and counterargument', 'Formal and informal letters', 'Applications for school or official purposes', 'Email writing with subject and suitable tone', 'Report writing with facts and headings', 'Summary writing with key ideas', 'Story writing with conflict and resolution', 'Dialogue writing with realistic speech', 'Review writing with opinion and support', 'Notice and advertisement writing', 'Paragraph coherence and connectors'],
      examples: [['Argumentative claim', 'School uniforms should be required because they reduce social pressure.'], ['Counterargument', 'Some may disagree because uniforms limit choice.'], ['Advertisement', 'Use persuasive words, key details, and a clear call to action.'], ['Review', 'This film is effective because the characters are believable.'], ['Coherence', 'Use however, therefore, moreover, for example, and in conclusion.']],
      quick: ['Argumentative writing needs evidence, not only opinion.', 'A review evaluates and explains reasons.', 'Advertisements should be brief, persuasive, and clear.', 'A report should be factual and organized.', 'Connectors guide readers through your ideas.'],
      questions: [
        { type: 'select', text: 'An argumentative essay needs...', options: ['claim, reasons, evidence', 'only a title', 'no opinion'], answer: 'claim, reasons, evidence' },
        { type: 'text', text: 'A counterargument shows the opposite ___.', answer: 'view', alt: ['opinion'] },
        { type: 'select', text: 'Which belongs in an advertisement?', options: ['call to action', 'stage directions only', 'private diary feelings'], answer: 'call to action' },
        { type: 'text', text: 'A review gives an opinion with ___.', answer: 'reasons' },
        { type: 'radio', text: 'True or False: Reports should be factual.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Which connector adds information?', options: ['moreover', 'however', 'although'], answer: 'moreover' },
        { type: 'text', text: 'A narrative essay tells a ___.', answer: 'story' },
        { type: 'select', text: 'Descriptive writing uses...', options: ['sensory details', 'only numbers', 'no adjectives'], answer: 'sensory details' },
        { type: 'text', text: 'A formal email should have a suitable ___.', answer: 'tone' },
        { type: 'select', text: 'Which is a dialogue feature?', options: ['speaker turns', 'graph labels', 'menu prices'], answer: 'speaker turns' }
      ]
    },
    literature: {
      title: 'Literature',
      intro: 'Analyze poems, short stories, and drama extracts through character sketches, theme analysis, literary devices, plot, and critical thinking questions.',
      focus: ['Poems with theme and poetic devices', 'Short stories with plot, conflict, and resolution', 'Drama extracts with dialogue, stage directions, and dramatic conflict', 'Character sketch using traits, motives, relationships, and evidence', 'Theme analysis supported by events and language', 'Literary devices: simile, metaphor, alliteration, personification', 'Critical thinking questions that require explanation, judgment, and evidence', 'Moral and social issues', 'How language creates mood and meaning', 'Comparing interpretations'],
      examples: [['Alliteration', 'wild winds whispered'], ['Theme analysis', 'The poem suggests that hope survives hardship.'], ['Critical question', 'Do you agree with the character’s decision? Give evidence.'], ['Character sketch', 'The old man is wise, patient, and compassionate.'], ['Dramatic conflict', 'Two characters want opposite outcomes.']],
      quick: ['Alliteration repeats beginning consonant sounds.', 'Theme analysis should mention evidence from the text.', 'Critical thinking questions often have more than one possible answer.', 'A character sketch should go beyond appearance.', 'Literary devices are used to create effect and meaning.'],
      questions: [
        { type: 'select', text: 'Which is alliteration?', options: ['wild winds whispered', 'as cold as ice', 'The moon smiled.'], answer: 'wild winds whispered' },
        { type: 'text', text: 'Theme analysis needs evidence from the ___.', answer: 'text' },
        { type: 'select', text: 'Which is a critical thinking question?', options: ['Do you agree with the character? Why?', 'How many pages?', 'What color is the cover?'], answer: 'Do you agree with the character? Why?' },
        { type: 'text', text: 'A character sketch describes traits, motives, and ___.', answer: 'evidence' },
        { type: 'radio', text: 'True or False: Literary devices help create meaning and effect.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Which is a metaphor?', options: ['Her voice was music.', 'as bright as day', 'The voice was loud.'], answer: 'Her voice was music.' },
        { type: 'text', text: 'A drama conflict happens when characters want opposite ___.', answer: 'outcomes' },
        { type: 'select', text: 'Which is personification?', options: ['The flowers danced in the breeze.', 'as tall as a tree', 'The tree is tall.'], answer: 'The flowers danced in the breeze.' },
        { type: 'text', text: 'The sequence of events in a story is the ___.', answer: 'plot' },
        { type: 'select', text: 'Which device uses like or as?', options: ['simile', 'metaphor', 'alliteration'], answer: 'simile' }
      ]
    }
  };

  const TOPICS_GRADE9 = {
    'oral-communication': {
      title: 'Oral Communication',
      intro: 'Practice Grade 9 oral communication through speeches, conversations, discussions, formal and informal speaking, evidence-based opinions, group discussion, presentations, pronunciation, and fluency.',
      focus: ['Listening to speeches, conversations, and discussions for main ideas and supporting details', 'Turn-taking in discussion without interrupting', 'Speaking confidently in formal and informal situations', 'Giving opinions supported by evidence', 'Group discussion with relevant examples and respectful responses', 'Presentation skills: opening, structure, transitions, evidence, and conclusion', 'Pronunciation, stress, rhythm, and fluency', 'Adjusting tone for audience and purpose', 'Responding to questions with clear and complete answers', 'Summarizing spoken information accurately'],
      examples: [['Evidence-based opinion', 'I believe public libraries are important because they provide free access to knowledge.'], ['Turn-taking', 'I would like to add to Ayesha’s point.'], ['Formal speaking', 'Respected teacher and classmates, today I will discuss...'], ['Listening detail', 'The speaker’s main reason was the rise in plastic waste.'], ['Presentation close', 'In conclusion, small daily actions can protect our environment.']],
      quick: ['A strong spoken answer includes a point, reason, and example.', 'Formal situations require polite and precise language.', 'Fluency means speaking smoothly, not necessarily speaking fast.', 'In discussion, build on what others say.', 'Presentations need a clear beginning, middle, and ending.'],
      questions: [
        { type: 'select', text: 'Which is an evidence-based opinion?', options: ['I support tree planting because it reduces heat.', 'Trees are green.', 'Plant tree now.'], answer: 'I support tree planting because it reduces heat.' },
        { type: 'text', text: 'In discussion, speakers should take ___.', answer: 'turns' },
        { type: 'select', text: 'Which phrase is suitable for formal speaking?', options: ['Respected teacher and classmates...', 'Hey, listen up!', 'Whatever, okay.'], answer: 'Respected teacher and classmates...' },
        { type: 'text', text: 'Speaking smoothly and clearly is called ___.', answer: 'fluency' },
        { type: 'radio', text: 'True or False: A good presentation has a conclusion.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Which is polite turn-taking?', options: ['May I add something?', 'Stop, I talk now.', 'Your point is useless.'], answer: 'May I add something?' },
        { type: 'text', text: 'An opinion is stronger when supported by ___.', answer: 'evidence' },
        { type: 'select', text: 'Which should you listen for in a speech?', options: ['main idea and key details', 'only the speaker’s shoes', 'wall color'], answer: 'main idea and key details' },
        { type: 'text', text: 'Complete: Pronunciation means saying words ___.', answer: 'clearly' },
        { type: 'select', text: 'Which is a presentation transition?', options: ['Furthermore', 'Pencil', 'Because table'], answer: 'Furthermore' },
        { type: 'text', text: 'A summary of a speech should be short and ___.', answer: 'accurate' },
        { type: 'select', text: 'Formal language is best for...', options: ['a class presentation', 'a private joke', 'slang chat only'], answer: 'a class presentation' }
      ]
    },
    'reading-comprehension': {
      title: 'Reading Comprehension',
      intro: 'Read textbook lessons, unseen passages, factual and narrative passages, persuasive texts, poems, articles, advertisements, timetables, maps, and charts while analyzing meaning and purpose.',
      focus: ['Textbook lessons and unseen comprehension passages', 'Factual passages, narrative passages, and persuasive texts', 'Poems, newspaper or magazine articles, advertisements, timetables, maps, and charts', 'Main idea and supporting details', 'Theme and central message', 'Inference from evidence', 'Author’s purpose: inform, persuade, entertain, explain, or reflect', 'Tone and mood', 'Summary and paraphrasing', 'Reading visual and functional texts accurately', 'Short answer and long answer comprehension responses', 'Using evidence from the text'],
      examples: [['Inference', 'The sky darkened and people opened umbrellas, so rain was likely.'], ['Author purpose', 'An advertisement is usually written to persuade.'], ['Paraphrase', 'Restate the meaning in your own words without changing the idea.'], ['Tone', 'The writer’s tone may be critical, hopeful, serious, or humorous.'], ['Chart reading', 'Read headings, labels, units, and trends before answering.']],
      quick: ['Unseen passages require careful reading and evidence-based answers.', 'Main idea is what the whole text is mostly about.', 'Tone is the writer’s attitude; mood is the feeling created.', 'Summary is shorter than the original and includes key points only.', 'Functional texts such as timetables and maps require scanning for exact information.'],
      questions: [
        { type: 'select', text: 'An advertisement is usually written to...', options: ['persuade', 'hide information', 'confuse readers'], answer: 'persuade' },
        { type: 'text', text: 'The writer’s attitude is called ___.', answer: 'tone' },
        { type: 'select', text: 'Which is an inference?', options: ['He carried an umbrella, so he expected rain.', 'He carried an umbrella.', 'The umbrella was black.'], answer: 'He carried an umbrella, so he expected rain.' },
        { type: 'text', text: 'Paraphrasing means writing the same idea in your own ___.', answer: 'words' },
        { type: 'radio', text: 'True or False: A summary should include every minor detail.', options: ['True', 'False'], answer: 'False' },
        { type: 'select', text: 'Which text is useful for bus timings?', options: ['timetable', 'poem', 'short story'], answer: 'timetable' },
        { type: 'text', text: 'The main idea tells what the text is mostly ___.', answer: 'about' },
        { type: 'select', text: 'Which should be checked in a map?', options: ['symbols and directions', 'only rhymes', 'only character traits'], answer: 'symbols and directions' },
        { type: 'text', text: 'Author’s purpose means why the author ___.', answer: 'wrote' },
        { type: 'select', text: 'Which is a factual passage topic?', options: ['causes of pollution', 'a magic bird', 'a talking pencil'], answer: 'causes of pollution' },
        { type: 'text', text: 'Theme means the message or central ___.', answer: 'idea' },
        { type: 'select', text: 'Which is an opinion?', options: ['This article is inspiring.', 'The article has five paragraphs.', 'The chart shows 40%.'], answer: 'This article is inspiring.' }
      ]
    },
    vocabulary: {
      title: 'Vocabulary',
      intro: 'Build Grade 9 vocabulary through synonyms, antonyms, idioms, proverbs, phrasal verbs, pair of words, affixes, word formation, contextual meaning, formal/informal vocabulary, and academic vocabulary.',
      focus: ['Synonyms and antonyms for precise expression', 'Idioms and proverbs in context', 'Phrasal verbs such as bring up, carry out, and put off', 'Pair of words often tested by boards and textbooks', 'Prefixes and suffixes', 'Word formation across noun, verb, adjective, and adverb forms', 'Contextual meaning in passages', 'Formal and informal vocabulary', 'Academic vocabulary used in exam questions', 'Choosing words according to audience, purpose, and genre'],
      examples: [['Pair of words', 'accept means receive; except means excluding.'], ['Word formation', 'decide, decision, decisive, decisively'], ['Phrasal verb', 'put off means postpone.'], ['Academic word', 'analyze means examine carefully.'], ['Context', 'The firm decision was final. Firm means strong here.']],
      quick: ['Pair of words require attention to spelling and meaning.', 'Context decides which meaning of a word is correct.', 'Formal vocabulary is better for letters, reports, and essays.', 'Academic vocabulary often appears in instructions such as analyze, compare, justify, and summarize.', 'Word formation helps expand vocabulary for writing.'],
      questions: [
        { type: 'select', text: 'Choose the correct meaning of put off.', options: ['postpone', 'wear', 'remove'], answer: 'postpone' },
        { type: 'text', text: 'Accept means receive; ___ means excluding.', answer: 'except' },
        { type: 'select', text: 'Choose the academic word.', options: ['analyze', 'kinda', 'yummy'], answer: 'analyze' },
        { type: 'text', text: 'Complete the word family: decide, decision, ___.', answer: 'decisive' },
        { type: 'select', text: 'Which is formal?', options: ['request', 'ask for', 'wanna'], answer: 'request' },
        { type: 'radio', text: 'True or False: Context can change the meaning of a word.', options: ['True', 'False'], answer: 'True' },
        { type: 'text', text: 'The prefix in incorrect is ___.', answer: 'in', alt: ['in-'] },
        { type: 'select', text: 'Choose the synonym of sufficient.', options: ['enough', 'little', 'empty'], answer: 'enough' },
        { type: 'text', text: 'Complete the proverb: Where there is a will, there is a ___.', answer: 'way' },
        { type: 'select', text: 'Which is an idiom?', options: ['spill the beans', 'spill the water', 'wash the plate'], answer: 'spill the beans' },
        { type: 'text', text: 'The suffix in development is ___.', answer: 'ment', alt: ['-ment'] },
        { type: 'select', text: 'Choose the antonym of expand.', options: ['contract', 'increase', 'extend'], answer: 'contract' }
      ]
    },
    grammar: {
      title: 'Grammar',
      intro: 'Review and apply Grade 9 grammar: parts of speech, complete tense review, voice, narration, modals, conditionals, articles, prepositions, conjunctions, clauses, phrases, agreement, correction, punctuation, and sentence transformation.',
      focus: ['Parts of speech revision', 'Tenses complete review', 'Active and passive voice', 'Direct and indirect speech', 'Modals for ability, advice, necessity, possibility, and permission', 'Conditionals', 'Articles a, an, the', 'Prepositions and conjunctions', 'Clauses and phrases', 'Subject-verb agreement', 'Sentence correction', 'Punctuation', 'Transformation of sentences', 'Common board-style grammar practice'],
      examples: [['Passive voice', 'Active: They solved the problem. Passive: The problem was solved by them.'], ['Indirect speech', 'He said that he was ready.'], ['Conditional', 'If you work hard, you will succeed.'], ['Transformation', 'Although he was tired, he continued. -> He was tired, but he continued.'], ['Agreement', 'The list of items is on the table.']],
      quick: ['In passive voice, the object of the active sentence becomes the subject.', 'Indirect speech often changes pronouns, tense, and time expressions.', 'Subject-verb agreement depends on the main subject, not nearby words.', 'Sentence transformation changes form while keeping meaning.', 'Editing questions test grammar, spelling, punctuation, and word choice.'],
      questions: [
        { type: 'select', text: 'Choose passive voice.', options: ['The problem was solved by them.', 'They solved the problem.', 'They are solving it.'], answer: 'The problem was solved by them.' },
        { type: 'text', text: 'Complete indirect speech: He said that he ___ ready.', answer: 'was' },
        { type: 'select', text: 'Choose correct agreement.', options: ['The list is on the table.', 'The list are on the table.', 'The list am there.'], answer: 'The list is on the table.' },
        { type: 'text', text: 'Complete: If you study, you ___ succeed.', answer: 'will' },
        { type: 'radio', text: 'True or False: Sentence transformation should keep the meaning.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Choose the modal of necessity.', options: ['must', 'may', 'can'], answer: 'must' },
        { type: 'text', text: 'Complete: She has ___ her homework.', answer: 'completed' },
        { type: 'select', text: 'Choose the article: ___ university.', options: ['a', 'an', 'the an'], answer: 'a' },
        { type: 'text', text: 'A group of words with subject and verb is a ___.', answer: 'clause' },
        { type: 'select', text: 'Which is a conjunction?', options: ['although', 'under', 'quickly'], answer: 'although' },
        { type: 'text', text: 'Punctuation marks include comma, full stop, and question ___.', answer: 'mark' },
        { type: 'select', text: 'Choose the corrected sentence.', options: ['Neither answer is correct.', 'Neither answer are correct.', 'Neither answer am correct.'], answer: 'Neither answer is correct.' }
      ]
    },
    writing: {
      title: 'Writing',
      intro: 'Practice Grade 9 writing for paragraphs, essays, stories, formal and informal letters, applications, emails, dialogues, reports, summaries, précis, comprehension answers, and translation where required.',
      focus: ['Paragraph writing with unity and coherence', 'Essay writing with outline, introduction, body, and conclusion', 'Story writing with plot, conflict, and resolution', 'Formal letter and informal letter', 'Application writing for school and official needs', 'Email writing with subject and appropriate tone', 'Dialogue writing with realistic exchanges', 'Report writing with factual organization', 'Summary writing and précis writing introduction', 'Comprehension answers with evidence', 'Translation practice where required by board/textbook', 'Essay outline writing and planning'],
      examples: [['Essay outline', 'Topic: Pollution. Points: causes, effects, solutions.'], ['Précis', 'A shortened version of a passage that keeps the central idea.'], ['Formal letter', 'Respected Sir, I am writing to request...'], ['Report', 'The event was held on Monday in the school hall.'], ['Comprehension answer', 'The writer believes this because the passage states...']],
      quick: ['An essay outline helps organize ideas before writing.', 'A précis is shorter than a summary and should preserve the central idea.', 'Formal writing requires polite tone and clear purpose.', 'Comprehension answers should directly answer the question and use text evidence.', 'Translation practice should preserve meaning, not word order only.'],
      questions: [
        { type: 'select', text: 'An essay outline is used to...', options: ['organize ideas before writing', 'decorate the page only', 'avoid planning'], answer: 'organize ideas before writing' },
        { type: 'text', text: 'A précis keeps the central ___.', answer: 'idea' },
        { type: 'select', text: 'Which is formal tone?', options: ['I am writing to request permission.', 'Hey, let me go.', 'Yo, send it.'], answer: 'I am writing to request permission.' },
        { type: 'text', text: 'A report should be based on ___.', answer: 'facts' },
        { type: 'radio', text: 'True or False: Comprehension answers should answer the question directly.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Which belongs in an email?', options: ['subject line', 'only stage directions', 'poem rhyme only'], answer: 'subject line' },
        { type: 'text', text: 'A story problem is called a ___.', answer: 'conflict' },
        { type: 'select', text: 'Which is an informal letter closing?', options: ['Your friend, Ali', 'Yours faithfully', 'Respected Principal'], answer: 'Your friend, Ali' },
        { type: 'text', text: 'Translation should preserve ___.', answer: 'meaning' },
        { type: 'select', text: 'Which helps paragraph coherence?', options: ['connectors', 'random order', 'unrelated details'], answer: 'connectors' },
        { type: 'text', text: 'Application writing should include a clear ___.', answer: 'request' },
        { type: 'select', text: 'A summary should include...', options: ['main points only', 'every example', 'new unrelated opinion'], answer: 'main points only' }
      ]
    },
    literature: {
      title: 'Literature',
      intro: 'Study textbook prose lessons, poems, central ideas, reference-to-context explanations, character analysis, theme questions, moral and social lessons, and short and long answers.',
      focus: ['Textbook prose lessons with setting, events, and message', 'Poems with central idea, tone, imagery, and poetic devices', 'Explanation with reference to context', 'Character analysis using traits, motives, actions, and evidence', 'Theme-based questions', 'Moral and social lessons', 'Short question answers that are precise and relevant', 'Long question answers with introduction, explanation, evidence, and conclusion', 'Quoting or referring to lines where needed', 'Connecting literature to life and society'],
      examples: [['Reference to context', 'Explain who said the line, when it was said, and what it means.'], ['Central idea', 'The poem shows the importance of courage in difficult times.'], ['Character analysis', 'The protagonist is selfless because he helps others despite danger.'], ['Theme', 'The lesson highlights social responsibility.'], ['Long answer', 'Begin with a clear point, explain it, support it, and conclude.']],
      quick: ['Reference-to-context answers need speaker, situation, meaning, and importance.', 'Central idea should state the main message, not just the title.', 'Character analysis must be supported with events from the text.', 'Short answers should be concise but complete.', 'Long answers need structure and evidence.'],
      questions: [
        { type: 'select', text: 'Reference to context should explain...', options: ['speaker, situation, meaning', 'only page number', 'only punctuation'], answer: 'speaker, situation, meaning' },
        { type: 'text', text: 'The main message of a poem is its central ___.', answer: 'idea' },
        { type: 'select', text: 'Which supports character analysis?', options: ['evidence from the lesson', 'random opinion', 'only the title'], answer: 'evidence from the lesson' },
        { type: 'text', text: 'A long answer should have explanation and ___.', answer: 'evidence' },
        { type: 'radio', text: 'True or False: Moral lessons can connect literature to real life.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Which is a theme-based answer?', options: ['The story shows that honesty requires courage.', 'The story has five pages.', 'The heading is short.'], answer: 'The story shows that honesty requires courage.' },
        { type: 'text', text: 'A precise short answer should be relevant and ___.', answer: 'complete' },
        { type: 'select', text: 'Which is a social lesson?', options: ['Respect and equality matter in society.', 'The poem has commas.', 'The map is large.'], answer: 'Respect and equality matter in society.' },
        { type: 'text', text: 'The main character may be called the ___.', answer: 'protagonist' },
        { type: 'select', text: 'In poetry, imagery creates...', options: ['pictures in the mind', 'timetable rows', 'grammar rules only'], answer: 'pictures in the mind' },
        { type: 'text', text: 'A character’s reason for acting is a ___.', answer: 'motive' },
        { type: 'select', text: 'Which belongs in a central idea answer?', options: ['main message of the poem', 'only poet’s name', 'only line number'], answer: 'main message of the poem' }
      ]
    }
  };

  const TOPICS_GRADE10 = {
    'oral-communication': {
      title: 'Oral Communication',
      intro: 'Strengthen senior-school communication through formal discussion, debate, presentation, role play, interview practice, listening for main points, and reasoned responses.',
      focus: ['Formal discussion with relevant evidence and respectful turn-taking', 'Debate and argument using claim, reason, evidence, counterargument, and rebuttal', 'Presentation with clear opening, organized points, transitions, and conclusion', 'Listening for main points and supporting examples', 'Responding to questions accurately and confidently', 'Role play for real-life formal and informal situations', 'Interview practice with prepared and follow-up questions', 'Expressing agreement and disagreement with reasons', 'Using fluent pronunciation, suitable tone, and audience awareness', 'Summarizing spoken arguments briefly'],
      examples: [['Formal discussion', 'I agree with this proposal because it solves the main problem.'], ['Debate rebuttal', 'However, this argument ignores the cost of implementation.'], ['Presentation', 'Today I will discuss the causes, effects, and solutions.'], ['Interview', 'What skills helped you overcome this challenge?'], ['Listening', 'The speaker’s main point was that technology should support learning.']],
      quick: ['A good argument needs evidence, not just opinion.', 'A rebuttal answers the opposite side.', 'A presentation should be structured and easy to follow.', 'When answering questions, respond directly before adding details.', 'Formal speech should be polite, clear, and precise.'],
      questions: [
        { type: 'select', text: 'Which is a debate rebuttal?', options: ['However, this ignores the evidence.', 'The chair is brown.', 'Good morning only.'], answer: 'However, this ignores the evidence.' },
        { type: 'text', text: 'An argument needs claim, reason, and ___.', answer: 'evidence' },
        { type: 'select', text: 'A presentation should have...', options: ['opening, body, conclusion', 'only jokes', 'no sequence'], answer: 'opening, body, conclusion' },
        { type: 'text', text: 'Listening for main points means identifying the key ___.', answer: 'ideas', alt: ['points'] },
        { type: 'radio', text: 'True or False: Formal disagreement should be polite.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Which is an interview question?', options: ['How did you prepare for the role?', 'Prepare role how', 'Blue quickly.'], answer: 'How did you prepare for the role?' },
        { type: 'text', text: 'A response to the opposite argument is called a ___.', answer: 'rebuttal' },
        { type: 'select', text: 'Which phrase expresses agreement with a reason?', options: ['I agree because the facts support it.', 'Whatever.', 'No, wrong.'], answer: 'I agree because the facts support it.' },
        { type: 'text', text: 'Role play means acting out a ___.', answer: 'situation' },
        { type: 'select', text: 'Which helps confident speaking?', options: ['clear voice and eye contact', 'mumbling', 'reading with no pauses'], answer: 'clear voice and eye contact' }
      ]
    },
    'reading-comprehension': {
      title: 'Reading Comprehension',
      intro: 'Practice board-style comprehension with textbook prose, unseen and literary passages, informational and persuasive texts, articles, advertisements, flowcharts, tables, maps, and poetry.',
      focus: ['Textbook prose and unseen passages', 'Literary and informational passages', 'Persuasive texts, newspaper and magazine articles', 'Advertisements, flowcharts, tables, and maps', 'Poetry comprehension', 'Inference and critical thinking', 'Tone, theme, and author’s viewpoint', 'Summary and paraphrase', 'Finding textual evidence', 'Answering short and extended comprehension questions'],
      examples: [['Author viewpoint', 'The writer clearly supports environmental protection.'], ['Tone', 'The tone may be serious, critical, admiring, or ironic.'], ['Flowchart', 'Follow arrows to understand process order.'], ['Paraphrase', 'Rewrite the idea in your own words while keeping meaning.'], ['Critical thinking', 'Evaluate whether the writer’s evidence is convincing.']],
      quick: ['Author viewpoint is the writer’s position or attitude toward the topic.', 'Critical thinking questions require judgment supported by evidence.', 'Flowcharts show steps or sequence.', 'A paraphrase changes wording but keeps meaning.', 'A summary keeps only the main points.'],
      questions: [
        { type: 'select', text: 'Author viewpoint means...', options: ['the writer’s position', 'the page number', 'only the title'], answer: 'the writer’s position' },
        { type: 'text', text: 'A flowchart shows steps or ___.', answer: 'sequence', alt: ['order'] },
        { type: 'select', text: 'Which is critical thinking?', options: ['Is the writer’s evidence convincing?', 'How many lines?', 'What is the page color?'], answer: 'Is the writer’s evidence convincing?' },
        { type: 'text', text: 'Paraphrase means restating in your own ___.', answer: 'words' },
        { type: 'radio', text: 'True or False: Summary includes only main points.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Which text is persuasive?', options: ['an advertisement asking readers to buy', 'a neutral timetable', 'a map key'], answer: 'an advertisement asking readers to buy' },
        { type: 'text', text: 'The feeling created for the reader is called ___.', answer: 'mood' },
        { type: 'select', text: 'Which should you check on a map?', options: ['symbols and directions', 'rhyme scheme only', 'character motive only'], answer: 'symbols and directions' },
        { type: 'text', text: 'Theme means the central ___.', answer: 'message', alt: ['idea'] },
        { type: 'select', text: 'Which is an inference?', options: ['He avoided eye contact, so he may be nervous.', 'He looked down.', 'He wore shoes.'], answer: 'He avoided eye contact, so he may be nervous.' }
      ]
    },
    vocabulary: {
      title: 'Vocabulary',
      intro: 'Prepare for senior vocabulary tasks through synonyms, antonyms, idioms, proverbs, phrasal verbs, pair of words, word formation, contextual meaning, denotation, connotation, and academic vocabulary.',
      focus: ['Synonyms and antonyms in context', 'Idioms and proverbs used in sentences', 'Phrasal verbs and their meanings', 'Pair of words with spelling and meaning differences', 'Word formation from root words', 'Contextual vocabulary in comprehension passages', 'Denotation and connotation introduction', 'Formal academic vocabulary for answers and essays', 'Using vocabulary precisely in board-style writing', 'Avoiding informal words in formal tasks'],
      examples: [['Denotation', 'Home denotes a place where one lives.'], ['Connotation', 'Home connotes warmth, safety, and family.'], ['Pair of words', 'principal and principle'], ['Phrasal verb', 'carry out means perform.'], ['Academic word', 'evaluate means judge carefully using criteria.']],
      quick: ['Denotation is the literal meaning; connotation is the feeling or association.', 'Pair of words must be practiced in sentences.', 'Academic vocabulary improves formal answers.', 'Context helps choose the correct meaning.', 'Idioms should be used carefully and correctly.'],
      questions: [
        { type: 'select', text: 'Denotation means...', options: ['literal meaning', 'emotional association', 'opposite word'], answer: 'literal meaning' },
        { type: 'text', text: 'Connotation means feeling or ___.', answer: 'association' },
        { type: 'select', text: 'Choose the correct pair word: The school ___ spoke.', options: ['principal', 'principle', 'printable'], answer: 'principal' },
        { type: 'text', text: 'Carry out means to ___.', answer: 'perform', alt: ['complete'] },
        { type: 'select', text: 'Which is academic vocabulary?', options: ['evaluate', 'kinda', 'cool'], answer: 'evaluate' },
        { type: 'radio', text: 'True or False: Context can help decide word meaning.', options: ['True', 'False'], answer: 'True' },
        { type: 'text', text: 'Complete the idiom: hit the ___ on the head.', answer: 'nail' },
        { type: 'select', text: 'Choose an antonym of reluctant.', options: ['eager', 'unwilling', 'hesitant'], answer: 'eager' },
        { type: 'text', text: 'The noun form of decide is ___.', answer: 'decision' },
        { type: 'select', text: 'Which is formal?', options: ['commence', 'start up', 'kick off'], answer: 'commence' }
      ]
    },
    grammar: {
      title: 'Grammar',
      intro: 'Revise and apply Grade 10 grammar: tenses, active/passive voice, direct/indirect speech, conditionals, modals, articles, prepositions, conjunctions, clauses, correction, transformation, agreement, punctuation, editing, and proofreading.',
      focus: ['Tenses revision and tense correction', 'Active and passive voice transformations', 'Direct and indirect speech transformations', 'Conditional sentences', 'Modals for possibility, permission, advice, and obligation', 'Articles, prepositions, and conjunctions', 'Clauses and phrases', 'Subject-verb agreement', 'Sentence correction and transformation', 'Punctuation accuracy', 'Editing and proofreading board-style passages', 'Grammar correction tests'],
      examples: [['Passive', 'Active: She wrote a letter. Passive: A letter was written by her.'], ['Indirect speech', 'He said that he had finished his work.'], ['Conditional', 'If he had worked harder, he would have succeeded.'], ['Transformation', 'Despite the rain, they played. -> Although it rained, they played.'], ['Agreement', 'Neither of the answers is correct.']],
      quick: ['Voice changes the focus of a sentence while keeping meaning.', 'Reported speech changes pronouns, tense, and time words when needed.', 'Conditionals show real, possible, or unreal situations.', 'Transformation changes structure without changing meaning.', 'Proofreading checks grammar, punctuation, spelling, and clarity.'],
      questions: [
        { type: 'select', text: 'Choose passive voice.', options: ['A letter was written by her.', 'She wrote a letter.', 'She is writing.'], answer: 'A letter was written by her.' },
        { type: 'text', text: 'Complete indirect speech: He said that he ___ finished.', answer: 'had' },
        { type: 'select', text: 'Choose correct agreement.', options: ['Neither answer is correct.', 'Neither answer are correct.', 'Neither answer were correct.'], answer: 'Neither answer is correct.' },
        { type: 'text', text: 'Complete: If I had time, I ___ help you.', answer: 'would' },
        { type: 'radio', text: 'True or False: Transformation should keep the meaning.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Which modal shows obligation?', options: ['must', 'might', 'could'], answer: 'must' },
        { type: 'text', text: 'A group of words with subject and verb is a ___.', answer: 'clause' },
        { type: 'select', text: 'Choose the article: ___ honest person.', options: ['an', 'a', 'the a'], answer: 'an' },
        { type: 'text', text: 'Editing checks grammar, spelling, punctuation, and ___.', answer: 'clarity' },
        { type: 'select', text: 'Which is a conjunction?', options: ['whereas', 'under', 'carefully'], answer: 'whereas' }
      ]
    },
    writing: {
      title: 'Writing',
      intro: 'Practice board-style Grade 10 writing: essays, paragraphs, stories, letters, applications, emails, reports, dialogues, summaries, précis, argumentative, descriptive, narrative writing, and translation where required.',
      focus: ['Essay writing with outline, thesis, body paragraphs, and conclusion', 'Paragraph writing with unity, coherence, and connectors', 'Story writing with plot, conflict, climax, and resolution', 'Formal and informal letters', 'Applications and emails with correct format', 'Report writing with facts and headings', 'Dialogue writing with natural exchange and punctuation', 'Summary and précis writing', 'Argumentative writing with claim, evidence, and counterargument', 'Descriptive and narrative writing', 'Translation practice where required', 'Board-style comprehension answers'],
      examples: [['Essay outline', 'Topic, thesis, three main points, examples, conclusion.'], ['Précis', 'A concise version of a passage retaining central idea and tone.'], ['Argumentative writing', 'Claim: Exams should test understanding, not memorization.'], ['Report', 'Include event, date, place, participants, and outcome.'], ['Formal email', 'Subject: Request for Extension']],
      quick: ['A précis is brief, clear, and faithful to the original.', 'Argumentative writing should include evidence and address opposing views.', 'Formal writing must use correct format and respectful tone.', 'A report should be factual, organized, and objective.', 'An essay outline saves time and improves structure.'],
      questions: [
        { type: 'select', text: 'A précis should be...', options: ['brief and faithful to the original', 'longer than the passage', 'full of personal opinions'], answer: 'brief and faithful to the original' },
        { type: 'text', text: 'An argumentative essay needs claim and ___.', answer: 'evidence' },
        { type: 'select', text: 'Which belongs in a report?', options: ['date, place, participants, outcome', 'only feelings', 'only rhymes'], answer: 'date, place, participants, outcome' },
        { type: 'text', text: 'A formal email should include a subject and ___.', answer: 'greeting' },
        { type: 'radio', text: 'True or False: An essay outline helps organize ideas.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Which is descriptive writing?', options: ['The narrow street was silent and misty.', 'Street narrow the.', 'Although and but.'], answer: 'The narrow street was silent and misty.' },
        { type: 'text', text: 'The turning point of a story is the ___.', answer: 'climax' },
        { type: 'select', text: 'Which is a formal letter closing?', options: ['Yours faithfully', 'Your friend', 'See ya'], answer: 'Yours faithfully' },
        { type: 'text', text: 'Translation should preserve meaning, not only word ___.', answer: 'order' },
        { type: 'select', text: 'Which helps paragraph coherence?', options: ['connectors', 'unrelated details', 'random tense shifts'], answer: 'connectors' }
      ]
    },
    literature: {
      title: 'Literature',
      intro: 'Study Grade 10 literature through prose lessons, poems, central idea, reference-to-context explanations, theme analysis, character analysis, literary devices, short answers, long answers, and critical appreciation.',
      focus: ['Prose lessons with theme, conflict, and message', 'Poems with central idea, imagery, tone, and poetic devices', 'Explanation with reference to context', 'Theme analysis supported by evidence', 'Character analysis with traits, motives, and development', 'Literary devices such as metaphor, simile, personification, imagery, alliteration, and symbolism', 'Short answers that are precise and relevant', 'Long answers with structure and textual support', 'Critical appreciation introduction', 'Moral and social lessons in literature'],
      examples: [['Reference to context', 'Identify the speaker, situation, meaning, and significance.'], ['Critical appreciation', 'Discuss the poem’s theme, language, imagery, tone, and effect.'], ['Theme analysis', 'The lesson criticizes selfishness and values sacrifice.'], ['Character analysis', 'The character changes from proud to humble.'], ['Literary device', 'The phrase sea of troubles is a metaphor.']],
      quick: ['Critical appreciation goes beyond summary and explains how the text works.', 'Reference-to-context answers need speaker, situation, meaning, and importance.', 'Theme analysis must use evidence from the text.', 'Central idea should be written in clear complete sentences.', 'Long answers need organization, examples, and conclusion.'],
      questions: [
        { type: 'select', text: 'Critical appreciation discusses...', options: ['theme, language, imagery, effect', 'only page numbers', 'only spelling'], answer: 'theme, language, imagery, effect' },
        { type: 'text', text: 'Reference to context includes speaker, situation, meaning, and ___.', answer: 'significance', alt: ['importance'] },
        { type: 'select', text: 'Which is a metaphor?', options: ['a sea of troubles', 'as brave as a lion', 'the door opened'], answer: 'a sea of troubles' },
        { type: 'text', text: 'The main idea of a poem is its central ___.', answer: 'idea' },
        { type: 'radio', text: 'True or False: Theme analysis should use textual evidence.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Which belongs in character analysis?', options: ['traits and motives', 'only line numbers', 'map symbols'], answer: 'traits and motives' },
        { type: 'text', text: 'A long answer should have structure and ___.', answer: 'evidence' },
        { type: 'select', text: 'Which device repeats beginning sounds?', options: ['alliteration', 'metaphor', 'theme'], answer: 'alliteration' },
        { type: 'text', text: 'A story lesson may be called a ___.', answer: 'moral' },
        { type: 'select', text: 'Which is a theme statement?', options: ['Greed destroys trust.', 'The poem has 14 lines.', 'The title is short.'], answer: 'Greed destroys trust.' }
      ]
    }
  };

  const TOPICS_BY_GRADE = { 1: TOPICS, 2: TOPICS_GRADE2, 3: TOPICS_GRADE3, 4: TOPICS_GRADE4, 5: TOPICS_GRADE5, 6: TOPICS_GRADE6, 7: TOPICS_GRADE7, 8: TOPICS_GRADE8, 9: TOPICS_GRADE9, 10: TOPICS_GRADE10 };

  function gradeNumber() {
    const cfg = window.ENGLISH_PAGE || {};
    return Number(cfg.grade || 1);
  }

  function gradeTopics() {
    return TOPICS_BY_GRADE[gradeNumber()] || TOPICS;
  }

  function pagePrefix() {
    return 'english-grade' + gradeNumber() + '-';
  }

  function topic() {
    const cfg = window.ENGLISH_PAGE || {};
    const topics = gradeTopics();
    return topics[cfg.slug] || topics[Object.keys(topics)[0]];
  }

  function nextPrev(slug) {
    const topics = gradeTopics();
    const keys = Object.keys(topics);
    const i = keys.indexOf(slug);
    return {
      prev: topics[keys[(i - 1 + keys.length) % keys.length]],
      prevSlug: keys[(i - 1 + keys.length) % keys.length],
      next: topics[keys[(i + 1) % keys.length]],
      nextSlug: keys[(i + 1) % keys.length]
    };
  }

  function normalize(value) {
    return String(value || '').trim().toLowerCase().replace(/[.?!]+$/g, '');
  }

  function resultText(title, score, total) {
    return 'I scored ' + score + '/' + total + ' on the Grade ' + gradeNumber() + ' English ' + title + ' worksheet on LearnPad.';
  }

  function shareResult(title, score, total) {
    const text = resultText(title, score, total);
    const shareData = {
      title: 'LearnPad Grade ' + gradeNumber() + ' English Result',
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

  function shuffleItems(items) {
    const copy = items.slice();
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = copy[i];
      copy[i] = copy[j];
      copy[j] = tmp;
    }
    return copy;
  }

  function extraQuestionPool(slug) {
    const pools = {
      'listening-speaking': [
        { type: 'select', text: 'Which phrase is polite in a discussion?', options: ['I would like to add...', 'Stop talking!', 'Your idea is bad.'], answer: 'I would like to add...' },
        { type: 'text', text: 'Complete: I agree ___ you because your reason is clear.', answer: 'with' },
        { type: 'select', text: 'Which question asks for information?', options: ['Could you explain that?', 'It is sunny.', 'The desk is brown.'], answer: 'Could you explain that?' },
        { type: 'text', text: 'Complete: First, next, then, ___.', answer: 'finally' },
        { type: 'radio', text: 'True or False: A speaker should listen to others before replying.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Which helps oral storytelling?', options: ['clear sequence', 'random words', 'no ending'], answer: 'clear sequence' },
        { type: 'text', text: 'Complete: My opinion is different ___ yours.', answer: 'from' },
        { type: 'select', text: 'Which belongs in a short presentation?', options: ['opening and closing', 'only whispering', 'no topic'], answer: 'opening and closing' },
        { type: 'text', text: 'Complete: A good interview answer is clear and ___.', answer: 'complete' },
        { type: 'select', text: 'Which sentence describes a process?', options: ['First wash the fruit, then cut it.', 'The fruit is red.', 'Fruit red the.'], answer: 'First wash the fruit, then cut it.' }
      ],
      reading: [
        { type: 'select', text: 'What is the main idea?', options: ['What the text is mostly about', 'Only one comma', 'The page number'], answer: 'What the text is mostly about' },
        { type: 'text', text: 'Complete: A detail supports the main ___.', answer: 'idea' },
        { type: 'select', text: 'Cause tells...', options: ['why something happened', 'only who spoke', 'the spelling rule'], answer: 'why something happened' },
        { type: 'select', text: 'Which is an inference?', options: ['He yawned, so he was tired.', 'He yawned.', 'He has a bag.'], answer: 'He yawned, so he was tired.' },
        { type: 'radio', text: 'True or False: A title can give a clue about the text.', options: ['True', 'False'], answer: 'True' },
        { type: 'text', text: 'Complete: A story character is a person or animal in the ___.', answer: 'story' },
        { type: 'select', text: 'Scanning helps find...', options: ['specific information', 'only the moral', 'only adjectives'], answer: 'specific information' },
        { type: 'text', text: 'Complete: A summary should be short and ___.', answer: 'clear' },
        { type: 'select', text: 'Which is non-fiction?', options: ['an article about rivers', 'a magic carpet story', 'a talking moon tale'], answer: 'an article about rivers' },
        { type: 'text', text: 'Complete: Theme means the message or big ___.', answer: 'idea' }
      ],
      'reading-comprehension': [
        { type: 'select', text: 'What does author purpose mean?', options: ['why the author wrote the text', 'the author’s handwriting', 'the page color'], answer: 'why the author wrote the text' },
        { type: 'text', text: 'Complete: A fact can be ___.', answer: 'checked', alt: ['proven'] },
        { type: 'select', text: 'Which is an opinion?', options: ['This poem is wonderful.', 'A week has seven days.', 'The notice says Monday.'], answer: 'This poem is wonderful.' },
        { type: 'text', text: 'Complete: Inform means to give ___.', answer: 'information' },
        { type: 'select', text: 'Which text may list food prices?', options: ['menu', 'biography', 'poem'], answer: 'menu' },
        { type: 'radio', text: 'True or False: A summary should include every tiny detail.', options: ['True', 'False'], answer: 'False' },
        { type: 'text', text: 'Complete: The lesson of a story is the ___.', answer: 'moral' },
        { type: 'select', text: 'Which is a supporting detail?', options: ['an example that explains the main idea', 'the author’s name only', 'the page number'], answer: 'an example that explains the main idea' },
        { type: 'select', text: 'What should you do for short answers?', options: ['use evidence from the text', 'guess without reading', 'copy the title only'], answer: 'use evidence from the text' },
        { type: 'text', text: 'Complete: Fiction is usually an imagined ___.', answer: 'story' }
      ],
      vocabulary: [
        { type: 'select', text: 'Choose a synonym of quick.', options: ['fast', 'slow', 'late'], answer: 'fast' },
        { type: 'select', text: 'Choose an antonym of empty.', options: ['full', 'blank', 'hollow'], answer: 'full' },
        { type: 'text', text: 'Complete the compound word: class + room = ___.', answer: 'classroom' },
        { type: 'select', text: 'Which pair is homophones?', options: ['right / write', 'small / tiny', 'open / close'], answer: 'right / write' },
        { type: 'text', text: 'The prefix in unhappy is ___.', answer: 'un', alt: ['un-'] },
        { type: 'select', text: 'Which is an idiom?', options: ['piece of cake', 'piece of bread', 'slice of mango'], answer: 'piece of cake' },
        { type: 'text', text: 'Complete the proverb: Better late than ___.', answer: 'never' },
        { type: 'select', text: 'Choose the natural collocation.', options: ['strong tea', 'powerful tea', 'heavy tea'], answer: 'strong tea' },
        { type: 'radio', text: 'True or False: Context can help find word meaning.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Which is formal?', options: ['request', 'ask for', 'wanna'], answer: 'request' },
        { type: 'text', text: 'The suffix in kindness is ___.', answer: 'ness', alt: ['-ness'] },
        { type: 'select', text: 'Which word comes first alphabetically?', options: ['ant', 'ball', 'cat'], answer: 'ant' }
      ],
      grammar: [
        { type: 'select', text: 'Choose the noun.', options: ['mountain', 'quickly', 'because'], answer: 'mountain' },
        { type: 'select', text: 'Choose the verb.', options: ['arrive', 'green', 'under'], answer: 'arrive' },
        { type: 'text', text: 'Complete: She ___ going to school.', answer: 'is' },
        { type: 'select', text: 'Choose the adjective.', options: ['brave', 'bravely', 'under'], answer: 'brave' },
        { type: 'select', text: 'Choose the adverb.', options: ['carefully', 'careful', 'care'], answer: 'carefully' },
        { type: 'text', text: 'Complete: They ___ playing yesterday.', answer: 'were' },
        { type: 'select', text: 'Choose correct subject-verb agreement.', options: ['The child runs.', 'The child run.', 'The child running.'], answer: 'The child runs.' },
        { type: 'radio', text: 'True or False: A question ends with a question mark.', options: ['True', 'False'], answer: 'True' },
        { type: 'text', text: 'Complete future tense: We ___ travel tomorrow.', answer: 'will' },
        { type: 'select', text: 'Choose the preposition.', options: ['between', 'happy', 'sing'], answer: 'between' },
        { type: 'select', text: 'Choose the conjunction.', options: ['although', 'behind', 'slowly'], answer: 'although' },
        { type: 'text', text: 'Complete: Ali said that he ___ ready.', answer: 'was' }
      ],
      writing: [
        { type: 'select', text: 'A paragraph should have...', options: ['one main topic', 'many unrelated ideas', 'no sentence'], answer: 'one main topic' },
        { type: 'text', text: 'Complete: A story has characters, setting, problem, and ___.', answer: 'solution', alt: ['ending'] },
        { type: 'select', text: 'Which is a formal opening?', options: ['Respected Sir,', 'Hey buddy,', 'Yo!'], answer: 'Respected Sir,' },
        { type: 'text', text: 'Complete: An email subject tells the main ___.', answer: 'topic' },
        { type: 'select', text: 'Which is a good summary habit?', options: ['include key points only', 'copy every word', 'add unrelated opinions'], answer: 'include key points only' },
        { type: 'radio', text: 'True or False: Dialogue writing should show who is speaking.', options: ['True', 'False'], answer: 'True' },
        { type: 'text', text: 'Complete: A notice should be brief and ___.', answer: 'clear' },
        { type: 'select', text: 'Which sentence describes a place?', options: ['The museum is quiet and spacious.', 'Museum quiet the.', 'Because quickly'], answer: 'The museum is quiet and spacious.' },
        { type: 'text', text: 'The last part of an essay is the ___.', answer: 'conclusion' },
        { type: 'select', text: 'Which should be checked during proofreading?', options: ['spelling and punctuation', 'only page color', 'only pictures'], answer: 'spelling and punctuation' }
      ],
      literature: [
        { type: 'select', text: 'What is a character sketch?', options: ['description of a character', 'list of prices', 'grammar rule only'], answer: 'description of a character' },
        { type: 'text', text: 'The central idea of a poem is its main ___.', answer: 'message', alt: ['idea'] },
        { type: 'select', text: 'Which is a moral theme?', options: ['Honesty is important.', 'The menu is long.', 'The table has columns.'], answer: 'Honesty is important.' },
        { type: 'radio', text: 'True or False: A play may include stage directions.', options: ['True', 'False'], answer: 'True' },
        { type: 'text', text: 'A conversation in a play is called ___.', answer: 'dialogue' },
        { type: 'select', text: 'Which shows evidence for bravery?', options: ['She entered the storm to rescue the child.', 'The storm was loud.', 'The child wore blue.'], answer: 'She entered the storm to rescue the child.' },
        { type: 'text', text: 'The problem in a story is the ___.', answer: 'conflict' },
        { type: 'select', text: 'Poems often use...', options: ['imagery and rhythm', 'forms and prices', 'only interviews'], answer: 'imagery and rhythm' },
        { type: 'text', text: 'A story lesson is also called a ___.', answer: 'moral' },
        { type: 'select', text: 'Which is a social theme?', options: ['fairness in a community', 'only a comma', 'a timetable row'], answer: 'fairness in a community' }
      ],
      'literature-rhymes': [
        { type: 'select', text: 'Which word rhymes with light?', options: ['bright', 'book', 'chair'], answer: 'bright' },
        { type: 'text', text: 'A poem can have rhythm and ___.', answer: 'rhyme' },
        { type: 'select', text: 'What does a story moral teach?', options: ['a lesson', 'a color', 'a number'], answer: 'a lesson' },
        { type: 'radio', text: 'True or False: Characters can be people or animals.', options: ['True', 'False'], answer: 'True' },
        { type: 'text', text: 'Complete: The place of a story is the ___.', answer: 'setting' },
        { type: 'select', text: 'Which is a story order word?', options: ['finally', 'green', 'under'], answer: 'finally' }
      ]
    };
    return pools[slug] || pools[slug === 'literature-rhymes' ? 'literature-rhymes' : 'reading'] || [];
  }

  function buildWorksheetQuestions(data, slug) {
    const seen = {};
    const pool = data.questions.concat(extraQuestionPool(slug)).filter(function (q) {
      const key = q.text + '|' + q.answer;
      if (seen[key]) return false;
      seen[key] = true;
      return true;
    });
    return shuffleItems(pool).slice(0, Math.min(10, pool.length));
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
    const prefix = pagePrefix();
    const grade = gradeNumber();
    document.title = data.title + ' - Grade ' + grade + ' English | LearnPad';
    document.querySelector('[data-title]').textContent = data.title;
    document.querySelector('[data-intro]').textContent = data.intro;
    document.querySelector('[data-worksheet-link]').href = prefix + cfg.slug + '-worksheet.html';
    document.querySelector('[data-worksheet-link-bottom]').href = prefix + cfg.slug + '-worksheet.html';
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

    document.querySelector('[data-prev]').href = prefix + nav.prevSlug + '-help.html';
    document.querySelector('[data-prev]').textContent = '<- ' + nav.prev.title;
    document.querySelector('[data-next]').href = prefix + nav.nextSlug + '-help.html';
    document.querySelector('[data-next]').textContent = nav.next.title + ' ->';
  }

  function renderWorksheet() {
    const cfg = window.ENGLISH_PAGE;
    const data = topic();
    const worksheetData = Object.assign({}, data, { questions: buildWorksheetQuestions(data, cfg.slug) });
    const nav = nextPrev(cfg.slug);
    const prefix = pagePrefix();
    const grade = gradeNumber();
    document.title = data.title + ' Worksheet - Grade ' + grade + ' English | LearnPad';
    document.querySelector('[data-title]').textContent = data.title;
    document.querySelectorAll('[data-help-link]').forEach(function (link) {
      link.href = prefix + cfg.slug + '-help.html';
    });
    const currentTopic = document.querySelector('[data-current-topic]');
    if (currentTopic) currentTopic.textContent = data.title;

    const list = document.getElementById('questionsList');
    list.innerHTML = worksheetData.questions.map(function (q, i) {
      const input = questionInputHtml(q, i, 'q');
      return '<li class="q-card" id="card' + i + '"><div class="q-meta"><span class="q-num">Q' + (i + 1) + '</span><span><span class="q-icon q-icon-correct">Correct</span><span class="q-icon q-icon-wrong">Try again</span></span></div><div class="q-text">' + q.text + '</div>' + input + '<div class="answer-reveal-chip" id="a' + i + '"></div></li>';
    }).join('');
    if (!document.getElementById('shareResultBtn')) {
      document.getElementById('scoreBanner').insertAdjacentHTML('beforeend', '<div class="post-submit visible" style="display:flex;margin-top:12px"><button class="btn btn-outline btn-lg" id="shareResultBtn">Share Results</button></div>');
    }
    setupCompactMode(worksheetData);

    document.getElementById('submitBtn').addEventListener('click', function () {
      let score = 0;
      worksheetData.questions.forEach(function (q, i) {
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
      document.getElementById('scoreNum').textContent = score + '/' + worksheetData.questions.length;
      document.getElementById('scoreMsg').textContent = score >= 8 ? 'Excellent work.' : score >= 5 ? 'Good practice. Review the answers and try again.' : 'Keep practicing. Read the guide, then try once more.';
      document.getElementById('progressFill').style.width = (score / worksheetData.questions.length * 100) + '%';
      document.getElementById('shareResultBtn').onclick = function () {
        shareResult(data.title, score, worksheetData.questions.length);
      };
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    document.getElementById('newWsBtn').addEventListener('click', function () { location.reload(); });
    document.getElementById('newWsBtnBottom').addEventListener('click', function () { location.reload(); });
    document.querySelector('[data-prev]').href = prefix + nav.prevSlug + '-worksheet.html';
    document.querySelector('[data-prev]').textContent = '<- ' + nav.prev.title;
    document.querySelector('[data-next]').href = prefix + nav.nextSlug + '-worksheet.html';
    document.querySelector('[data-next]').textContent = nav.next.title + ' ->';
  }

  function siteHeader() {
    return '<header class="site-header"><div class="header-inner"><a href="../index.html" class="logo-link"><img src="../logo.png" alt="LearnPad" class="logo-img" /></a><nav id="siteNav"><a href="../index.html">Home</a><a href="index.html">Worksheets</a><a href="../learnings/">Tech in Urdu</a><a href="contact.html">Contact</a></nav><button class="burger-btn" id="burgerBtn" aria-label="Toggle navigation menu" aria-expanded="false" aria-controls="siteNav"><span></span><span></span><span></span></button></div></header>';
  }

  function renderHelpShell() {
    const grade = gradeNumber();
    document.body.innerHTML = siteHeader() + '<div class="page-wrap"><nav class="breadcrumb"><a href="index.html">Home</a><span>&gt;</span><a href="index.html#grade-' + grade + '-english">Grade ' + grade + ' English</a><span>&gt;</span><span data-current-topic></span></nav><header class="hero"><div class="hero-badges"><span class="badge badge-solid">Grade ' + grade + '</span><span class="badge badge-outline">English</span></div><h1 data-title></h1><p class="hero-intro" data-intro></p><div class="hero-meta"><span class="meta-pill">Detailed guide</span><a data-worksheet-link class="btn btn-primary">Jump to Worksheet</a></div></header><section><p class="section-label">Section 1</p><h2 class="section-title">What to Practice</h2><div class="card"><ul data-focus></ul></div></section><hr><section><p class="section-label">Section 2</p><h2 class="section-title">Examples</h2><div data-examples></div></section><hr><section><p class="section-label">Section 3</p><h2 class="section-title">Quick Reference</h2><div class="card-tint"><div class="ref-grid" data-quick></div></div></section><div class="footer-cta"><h2>Ready to practice?</h2><p>Try 10 short questions with normal and compact mode.</p><a data-worksheet-link-bottom class="btn btn-white">Start Worksheet</a><a href="index.html#grade-' + grade + '-english" class="back-link">Back to Grade ' + grade + ' English topics</a></div><div class="topic-prev-next"><a data-prev></a><a data-next></a></div></div>';
    renderHelp();
  }

  function renderWorksheetShell() {
    const grade = gradeNumber();
    document.body.innerHTML = siteHeader() + '<div class="page-wrap"><div class="top-bar"><nav class="breadcrumb"><a href="index.html">Home</a><span>&gt;</span><a href="index.html#grade-' + grade + '-english">Grade ' + grade + ' English</a><span>&gt;</span><a data-help-link>Help Guide</a><span>&gt;</span><span>Worksheet</span></nav><a data-help-link class="btn btn-outline" style="padding:7px 18px;font-size:.82rem">View Help Guide</a></div><div class="ws-hero"><h1 data-title></h1><p>Grade ' + grade + ' &middot; English &middot; Worksheet</p></div><div class="controls"><button class="btn btn-neutral" id="newWsBtn">New Worksheet</button></div><hr class="section-divider"><div class="score-banner" id="scoreBanner"><div class="score-row"><div class="score-num" id="scoreNum">0/10</div><div class="score-msg" id="scoreMsg"></div></div><div class="progress-track"><div class="progress-fill" id="progressFill" style="width:0%"></div></div></div><ol class="questions-list" id="questionsList"></ol><div class="submit-area"><button class="btn btn-primary btn-full" id="submitBtn">Submit Worksheet</button><button class="btn btn-neutral btn-full" id="newWsBtnBottom">New Worksheet</button></div><div class="topic-prev-next"><a data-prev></a><a data-next></a></div></div>';
    renderWorksheet();
  }

  window.Grade1EnglishPages = { renderHelp: renderHelp, renderWorksheet: renderWorksheet, renderHelpShell: renderHelpShell, renderWorksheetShell: renderWorksheetShell };
})();
