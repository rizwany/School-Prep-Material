(function () {
  'use strict';

  const TOPICS = {
    'myself-and-my-body': {
      title: 'Myself and My Body',
      titleUr: 'میں اور میرا جسم',
      intro: 'Learn body parts, sense organs, clean habits, good manners, and simple personal safety.',
      introUr: 'جسم کے حصے، حسی اعضاء، صفائی کی عادتیں، اچھے آداب اور بنیادی حفاظت سیکھیں۔',
      focus: ['Parts of the body: head, arm, hand, leg, foot', 'Sense organs: eyes, ears, nose, tongue, skin', 'Clean body habits: bath, brush, wash hands, trim nails', 'Good manners: please, thank you, sorry', 'Safe and unsafe touch introduction with trusted adults'],
      focusUr: ['جسم کے حصے: سر، بازو، ہاتھ، ٹانگ، پاؤں', 'حسی اعضاء: آنکھ، کان، ناک، زبان، جلد', 'صفائی: نہانا، دانت صاف کرنا، ہاتھ دھونا، ناخن کاٹنا', 'اچھے آداب: براہ کرم، شکریہ، معذرت', 'محفوظ اور غیر محفوظ لمس کے بارے میں بڑوں سے بات کرنا'],
      examples: [['Eyes', 'We see with our eyes.'], ['Ears', 'We hear with our ears.'], ['Nose', 'We smell with our nose.'], ['Clean habit', 'Wash hands before eating.']],
      examplesUr: [['آنکھیں', 'ہم آنکھوں سے دیکھتے ہیں۔'], ['کان', 'ہم کانوں سے سنتے ہیں۔'], ['ناک', 'ہم ناک سے سونگھتے ہیں۔'], ['صاف عادت', 'کھانے سے پہلے ہاتھ دھوئیں۔']],
      quick: ['Name the body part first.', 'Match each sense organ with one use.', 'Choose habits that keep the body clean.', 'Tell a trusted adult if any touch feels unsafe.'],
      quickUr: ['پہلے جسم کے حصے کا نام لیں۔', 'ہر حسی عضو کو اس کے کام سے ملائیں۔', 'وہ عادت چنیں جو جسم کو صاف رکھتی ہے۔', 'غیر محفوظ لمس پر کسی قابل اعتماد بڑے کو بتائیں۔'],
      questions: [
        { type: 'select', text: 'Which body part helps us see?', options: ['Eyes', 'Ears', 'Hands'], answer: 'Eyes' },
        { type: 'select', text: 'Which sense organ helps us hear?', options: ['Ears', 'Nose', 'Tongue'], answer: 'Ears' },
        { type: 'radio', text: 'True or False: We should wash hands before eating.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Which habit keeps teeth clean?', options: ['Brushing teeth', 'Skipping bath', 'Dirty nails'], answer: 'Brushing teeth' },
        { type: 'text', text: 'Complete: We smell with our ___.', answer: 'nose' },
        { type: 'select', text: 'Which word is a good manner?', options: ['Please', 'Push', 'Shout'], answer: 'Please' },
        { type: 'select', text: 'Which organ helps us taste food?', options: ['Tongue', 'Ear', 'Foot'], answer: 'Tongue' },
        { type: 'radio', text: 'True or False: Clean nails are a healthy habit.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'If touch feels unsafe, tell a...', options: ['trusted adult', 'toy', 'wall'], answer: 'trusted adult' },
        { type: 'text', text: 'Complete: We feel with our ___.', answer: 'skin' },
        { type: 'select', text: 'Which is a body part?', options: ['Head', 'Chair', 'Apple'], answer: 'Head' },
        { type: 'select', text: 'Which is a clean habit?', options: ['Taking a bath', 'Wearing dirty clothes', 'Not washing hands'], answer: 'Taking a bath' }
      ],
      questionsUr: [
        { type: 'select', text: 'ہم کس عضو سے دیکھتے ہیں؟', options: ['آنکھیں', 'کان', 'ہاتھ'], answer: 'آنکھیں' },
        { type: 'select', text: 'ہم کس عضو سے سنتے ہیں؟', options: ['کان', 'ناک', 'زبان'], answer: 'کان' },
        { type: 'radio', text: 'درست یا غلط: کھانے سے پہلے ہاتھ دھونے چاہئیں۔', options: ['درست', 'غلط'], answer: 'درست' },
        { type: 'select', text: 'دانت صاف رکھنے کی عادت کون سی ہے؟', options: ['دانت صاف کرنا', 'نہانا چھوڑنا', 'گندے ناخن'], answer: 'دانت صاف کرنا' },
        { type: 'text', text: 'خالی جگہ پر کریں: ہم ___ سے سونگھتے ہیں۔', answer: 'ناک' },
        { type: 'select', text: 'اچھا لفظ کون سا ہے؟', options: ['براہ کرم', 'دھکا', 'شور'], answer: 'براہ کرم' },
        { type: 'select', text: 'کھانے کا ذائقہ کس سے معلوم ہوتا ہے؟', options: ['زبان', 'کان', 'پاؤں'], answer: 'زبان' },
        { type: 'radio', text: 'درست یا غلط: صاف ناخن صحت مند عادت ہے۔', options: ['درست', 'غلط'], answer: 'درست' },
        { type: 'select', text: 'غیر محفوظ لمس محسوس ہو تو کس کو بتائیں؟', options: ['قابل اعتماد بڑا', 'کھلونا', 'دیوار'], answer: 'قابل اعتماد بڑا' },
        { type: 'text', text: 'خالی جگہ پر کریں: ہم ___ سے محسوس کرتے ہیں۔', answer: 'جلد' }
      ]
    },
    'living-and-non-living-things': {
      title: 'Living and Non-Living Things',
      titleUr: 'جاندار اور بے جان چیزیں',
      intro: 'Sort things by checking if they need food, water, and air, and if they grow.',
      introUr: 'چیزوں کو پہچانیں کہ کون سی خوراک، پانی، ہوا لیتی اور بڑھتی ہے۔',
      focus: ['Living things need food, water, and air', 'Living things grow and may move', 'Non-living things do not grow', 'Examples from home and school'],
      focusUr: ['جاندار چیزوں کو خوراک، پانی اور ہوا چاہیے', 'جاندار چیزیں بڑھتی ہیں', 'بے جان چیزیں نہیں بڑھتیں', 'گھر اور اسکول کی مثالیں'],
      examples: [['Living', 'cat, tree, bird'], ['Non-living', 'book, chair, pencil'], ['Need', 'A plant needs water.'], ['Grow', 'A baby grows into an adult.']],
      examplesUr: [['جاندار', 'بلی، درخت، پرندہ'], ['بے جان', 'کتاب، کرسی، پنسل'], ['ضرورت', 'پودے کو پانی چاہیے۔'], ['بڑھنا', 'بچہ بڑا ہوتا ہے۔']],
      quick: ['Ask: Does it grow?', 'Ask: Does it need food, water, or air?', 'Plants are living things too.', 'Toys and books are non-living.'],
      quickUr: ['پوچھیں: کیا یہ بڑھتا ہے؟', 'پوچھیں: کیا اسے خوراک، پانی یا ہوا چاہیے؟', 'پودے بھی جاندار ہیں۔', 'کھلونے اور کتابیں بے جان ہیں۔'],
      questions: [
        { type: 'select', text: 'Which is a living thing?', options: ['Dog', 'Chair', 'Pencil'], answer: 'Dog' },
        { type: 'select', text: 'Which is non-living?', options: ['Book', 'Tree', 'Bird'], answer: 'Book' },
        { type: 'radio', text: 'True or False: Living things grow.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'A plant needs...', options: ['water', 'plastic', 'a pencil'], answer: 'water' },
        { type: 'text', text: 'Complete: Living things need air, food, and ___.', answer: 'water' },
        { type: 'select', text: 'Which thing can grow?', options: ['Baby', 'Table', 'Bag'], answer: 'Baby' },
        { type: 'select', text: 'Which is found at school and is non-living?', options: ['Desk', 'Child', 'Plant'], answer: 'Desk' },
        { type: 'radio', text: 'True or False: A stone needs food.', options: ['True', 'False'], answer: 'False' },
        { type: 'select', text: 'Which is living?', options: ['Fish', 'Cup', 'Ball'], answer: 'Fish' },
        { type: 'text', text: 'Complete: A ___ is a living thing that has leaves.', answer: 'plant', alt: ['tree'] },
        { type: 'select', text: 'Which does not grow?', options: ['Pencil', 'Cat', 'Flower'], answer: 'Pencil' },
        { type: 'select', text: 'Which group has only living things?', options: ['cow, tree, bird', 'book, chair, pen', 'cat, table, ball'], answer: 'cow, tree, bird' }
      ],
      questionsUr: [
        { type: 'select', text: 'جاندار چیز کون سی ہے؟', options: ['کتا', 'کرسی', 'پنسل'], answer: 'کتا' },
        { type: 'select', text: 'بے جان چیز کون سی ہے؟', options: ['کتاب', 'درخت', 'پرندہ'], answer: 'کتاب' },
        { type: 'radio', text: 'درست یا غلط: جاندار چیزیں بڑھتی ہیں۔', options: ['درست', 'غلط'], answer: 'درست' },
        { type: 'select', text: 'پودے کو کس چیز کی ضرورت ہے؟', options: ['پانی', 'پلاسٹک', 'پنسل'], answer: 'پانی' },
        { type: 'text', text: 'خالی جگہ پر کریں: جاندار چیزوں کو ہوا، خوراک اور ___ چاہیے۔', answer: 'پانی' },
        { type: 'select', text: 'کون بڑھ سکتا ہے؟', options: ['بچہ', 'میز', 'بیگ'], answer: 'بچہ' },
        { type: 'select', text: 'اسکول کی بے جان چیز کون سی ہے؟', options: ['ڈیسک', 'بچہ', 'پودا'], answer: 'ڈیسک' },
        { type: 'radio', text: 'درست یا غلط: پتھر کو خوراک چاہیے۔', options: ['درست', 'غلط'], answer: 'غلط' },
        { type: 'select', text: 'جاندار کون سا ہے؟', options: ['مچھلی', 'کپ', 'گیند'], answer: 'مچھلی' },
        { type: 'text', text: 'خالی جگہ پر کریں: ___ پتوں والا جاندار ہے۔', answer: 'پودا', alt: ['درخت'] }
      ]
    },
    'animals-around-us': {
      title: 'Animals Around Us',
      titleUr: 'ہمارے آس پاس جانور',
      intro: 'Learn pet, wild, and farm animals, their babies, sounds, and homes.',
      introUr: 'پالتو، جنگلی اور فارم کے جانور، ان کے بچے، آوازیں اور گھر سیکھیں۔',
      focus: ['Pet animals live with people', 'Wild animals live in forests or natural places', 'Farm animals help people with food or work', 'Animals have babies, sounds, and homes'],
      focusUr: ['پالتو جانور انسانوں کے ساتھ رہتے ہیں', 'جنگلی جانور جنگل میں رہتے ہیں', 'فارم کے جانور خوراک یا کام میں مدد دیتے ہیں', 'جانوروں کے بچے، آوازیں اور گھر ہوتے ہیں'],
      examples: [['Pet', 'cat, dog, parrot'], ['Wild', 'lion, tiger, elephant'], ['Farm', 'cow, goat, hen'], ['Home', 'A bird lives in a nest.']],
      examplesUr: [['پالتو', 'بلی، کتا، طوطا'], ['جنگلی', 'شیر، چیتا، ہاتھی'], ['فارم', 'گائے، بکری، مرغی'], ['گھر', 'پرندہ گھونسلے میں رہتا ہے۔']],
      quick: ['Think where the animal lives.', 'Match baby names carefully.', 'Listen for animal sounds.', 'Some animals can belong to more than one group in real life, but worksheets use simple Grade 1 examples.'],
      quickUr: ['سوچیں جانور کہاں رہتا ہے۔', 'بچوں کے نام احتیاط سے ملائیں۔', 'جانوروں کی آوازیں یاد کریں۔', 'ورک شیٹ میں آسان جماعت 1 مثالیں استعمال ہوتی ہیں۔'],
      questions: [
        { type: 'select', text: 'Which is a pet animal?', options: ['Cat', 'Lion', 'Tiger'], answer: 'Cat' },
        { type: 'select', text: 'Which is a wild animal?', options: ['Lion', 'Cow', 'Hen'], answer: 'Lion' },
        { type: 'select', text: 'A baby cow is called a...', options: ['calf', 'kitten', 'chick'], answer: 'calf' },
        { type: 'select', text: 'A dog lives in a...', options: ['kennel', 'nest', 'web'], answer: 'kennel' },
        { type: 'text', text: 'Complete: A cat says ___.', answer: 'meow' },
        { type: 'select', text: 'Which animal gives us milk?', options: ['Cow', 'Lion', 'Fish'], answer: 'Cow' },
        { type: 'radio', text: 'True or False: A hen is a farm animal.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'A baby hen is called a...', options: ['chick', 'calf', 'cub'], answer: 'chick' },
        { type: 'select', text: 'Which animal home is a nest?', options: ['Bird', 'Dog', 'Cow'], answer: 'Bird' },
        { type: 'text', text: 'Complete: A lion is a ___ animal.', answer: 'wild' },
        { type: 'select', text: 'Which animal says moo?', options: ['Cow', 'Cat', 'Duck'], answer: 'Cow' },
        { type: 'select', text: 'Which is a farm animal?', options: ['Goat', 'Tiger', 'Bear'], answer: 'Goat' }
      ],
      questionsUr: [
        { type: 'select', text: 'پالتو جانور کون سا ہے؟', options: ['بلی', 'شیر', 'چیتا'], answer: 'بلی' },
        { type: 'select', text: 'جنگلی جانور کون سا ہے؟', options: ['شیر', 'گائے', 'مرغی'], answer: 'شیر' },
        { type: 'select', text: 'گائے کے بچے کو کیا کہتے ہیں؟', options: ['بچھڑا', 'بلی کا بچہ', 'چوزہ'], answer: 'بچھڑا' },
        { type: 'select', text: 'کتے کا گھر کیا کہلاتا ہے؟', options: ['کینل', 'گھونسلہ', 'جالا'], answer: 'کینل' },
        { type: 'text', text: 'خالی جگہ پر کریں: بلی ___ کرتی ہے۔', answer: 'میاؤں' },
        { type: 'select', text: 'کون سا جانور ہمیں دودھ دیتا ہے؟', options: ['گائے', 'شیر', 'مچھلی'], answer: 'گائے' },
        { type: 'radio', text: 'درست یا غلط: مرغی فارم کا جانور ہے۔', options: ['درست', 'غلط'], answer: 'درست' },
        { type: 'select', text: 'مرغی کے بچے کو کیا کہتے ہیں؟', options: ['چوزہ', 'بچھڑا', 'بچہ شیر'], answer: 'چوزہ' },
        { type: 'select', text: 'گھونسلہ کس کا گھر ہے؟', options: ['پرندہ', 'کتا', 'گائے'], answer: 'پرندہ' },
        { type: 'text', text: 'خالی جگہ پر کریں: شیر ___ جانور ہے۔', answer: 'جنگلی' }
      ]
    },
    'plants-around-us': {
      title: 'Plants Around Us',
      titleUr: 'ہمارے آس پاس پودے',
      intro: 'Learn plant parts, plant needs, and useful things we get from plants.',
      introUr: 'پودے کے حصے، پودوں کی ضرورتیں اور پودوں سے ملنے والی چیزیں سیکھیں۔',
      focus: ['Parts of a plant: root, stem, leaves, flower, fruit', 'Plants need water, sunlight, air, and soil', 'Plants give us food, wood, cotton, and shade', 'Plants make our world fresh and green'],
      focusUr: ['پودے کے حصے: جڑ، تنا، پتے، پھول، پھل', 'پودوں کو پانی، دھوپ، ہوا اور مٹی چاہیے', 'پودے ہمیں خوراک، لکڑی، کپاس اور سایہ دیتے ہیں', 'پودے ماحول کو سرسبز بناتے ہیں'],
      examples: [['Root', 'Holds the plant in soil.'], ['Stem', 'Carries water.'], ['Leaves', 'Make food for the plant.'], ['Need', 'Plants need sunlight.']],
      examplesUr: [['جڑ', 'پودے کو مٹی میں پکڑتی ہے۔'], ['تنا', 'پانی اوپر لے جاتا ہے۔'], ['پتے', 'پودے کے لیے خوراک بناتے ہیں۔'], ['ضرورت', 'پودوں کو دھوپ چاہیے۔']],
      quick: ['Look from bottom to top: root, stem, leaves, flower.', 'Remember: water + sunlight + air + soil.', 'Fruits and vegetables come from plants.', 'Do not pluck plants without need.'],
      quickUr: ['نیچے سے اوپر دیکھیں: جڑ، تنا، پتے، پھول۔', 'یاد رکھیں: پانی، دھوپ، ہوا، مٹی۔', 'پھل اور سبزیاں پودوں سے آتی ہیں۔', 'بلا ضرورت پودے نہ توڑیں۔'],
      questions: [
        { type: 'select', text: 'Which part holds a plant in the soil?', options: ['Root', 'Leaf', 'Flower'], answer: 'Root' },
        { type: 'select', text: 'Which part is usually green and makes food?', options: ['Leaf', 'Root', 'Fruit'], answer: 'Leaf' },
        { type: 'radio', text: 'True or False: Plants need sunlight.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Which thing comes from plants?', options: ['Cotton', 'Plastic bottle', 'Glass'], answer: 'Cotton' },
        { type: 'text', text: 'Complete: Plants need water, air, soil, and ___.', answer: 'sunlight' },
        { type: 'select', text: 'Which plant part can become fruit?', options: ['Flower', 'Chair', 'Stone'], answer: 'Flower' },
        { type: 'select', text: 'Which is a plant product?', options: ['Wood', 'Spoon made of metal', 'Toy car'], answer: 'Wood' },
        { type: 'radio', text: 'True or False: A plant is a living thing.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Which part carries water upward?', options: ['Stem', 'Flower', 'Fruit'], answer: 'Stem' },
        { type: 'text', text: 'Complete: We get fruits and vegetables from ___.', answer: 'plants' },
        { type: 'select', text: 'Which is NOT needed by a plant?', options: ['Candy', 'Water', 'Air'], answer: 'Candy' },
        { type: 'select', text: 'Which is a part of a plant?', options: ['Leaf', 'Shoe', 'Cup'], answer: 'Leaf' }
      ],
      questionsUr: [
        { type: 'select', text: 'پودے کو مٹی میں کون پکڑتا ہے؟', options: ['جڑ', 'پتا', 'پھول'], answer: 'جڑ' },
        { type: 'select', text: 'کون سا حصہ عموما سبز ہوتا ہے؟', options: ['پتا', 'جڑ', 'پھل'], answer: 'پتا' },
        { type: 'radio', text: 'درست یا غلط: پودوں کو دھوپ چاہیے۔', options: ['درست', 'غلط'], answer: 'درست' },
        { type: 'select', text: 'کون سی چیز پودوں سے ملتی ہے؟', options: ['کپاس', 'پلاسٹک بوتل', 'شیشہ'], answer: 'کپاس' },
        { type: 'text', text: 'خالی جگہ پر کریں: پودوں کو پانی، ہوا، مٹی اور ___ چاہیے۔', answer: 'دھوپ' },
        { type: 'select', text: 'کون سا حصہ پھل بن سکتا ہے؟', options: ['پھول', 'کرسی', 'پتھر'], answer: 'پھول' },
        { type: 'select', text: 'پودے سے ملنے والی چیز کون سی ہے؟', options: ['لکڑی', 'دھات کا چمچ', 'کھلونا کار'], answer: 'لکڑی' },
        { type: 'radio', text: 'درست یا غلط: پودا جاندار چیز ہے۔', options: ['درست', 'غلط'], answer: 'درست' },
        { type: 'select', text: 'کون سا حصہ پانی اوپر لے جاتا ہے؟', options: ['تنا', 'پھول', 'پھل'], answer: 'تنا' },
        { type: 'text', text: 'خالی جگہ پر کریں: ہمیں پھل اور سبزیاں ___ سے ملتی ہیں۔', answer: 'پودوں' }
      ]
    },
    'food-and-health': {
      title: 'Food and Health',
      titleUr: 'خوراک اور صحت',
      intro: 'Learn healthy food groups, clean water, hand washing, and good eating habits.',
      introUr: 'صحت مند خوراک، صاف پانی، ہاتھ دھونا اور اچھی کھانے کی عادتیں سیکھیں۔',
      focus: ['Healthy foods: fruits, vegetables, milk, eggs, meat, grains', 'Drink clean water', 'Wash hands before eating', 'Eat a balanced meal and avoid too much junk food'],
      focusUr: ['صحت مند خوراک: پھل، سبزیاں، دودھ، انڈے، گوشت، اناج', 'صاف پانی پئیں', 'کھانے سے پہلے ہاتھ دھوئیں', 'متوازن غذا کھائیں اور زیادہ جنک فوڈ سے بچیں'],
      examples: [['Fruit', 'apple, mango, banana'], ['Vegetable', 'carrot, potato, spinach'], ['Dairy', 'milk helps bones grow strong'], ['Clean habit', 'Use clean drinking water.']],
      examplesUr: [['پھل', 'سیب، آم، کیلا'], ['سبزی', 'گاجر، آلو، پالک'], ['دودھ', 'دودھ ہڈیاں مضبوط کرتا ہے۔'], ['صاف عادت', 'صاف پینے کا پانی استعمال کریں۔']],
      quick: ['Choose food that helps your body grow.', 'Wash fruits before eating.', 'Drink clean water.', 'Wash hands before meals.'],
      quickUr: ['ایسی خوراک چنیں جو جسم کو بڑھنے میں مدد دے۔', 'پھل کھانے سے پہلے دھوئیں۔', 'صاف پانی پئیں۔', 'کھانے سے پہلے ہاتھ دھوئیں۔'],
      questions: [
        { type: 'select', text: 'Which is a healthy food?', options: ['Apple', 'Candy only', 'Chips only'], answer: 'Apple' },
        { type: 'select', text: 'Which is a vegetable?', options: ['Carrot', 'Cake', 'Soda'], answer: 'Carrot' },
        { type: 'radio', text: 'True or False: We should drink clean water.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'What should we do before eating?', options: ['Wash hands', 'Play with mud', 'Skip water'], answer: 'Wash hands' },
        { type: 'text', text: 'Complete: Milk helps make bones ___.', answer: 'strong' },
        { type: 'select', text: 'Which is a fruit?', options: ['Banana', 'Pencil', 'Shoe'], answer: 'Banana' },
        { type: 'select', text: 'Which food is from grains?', options: ['Bread', 'Toy', 'Soap'], answer: 'Bread' },
        { type: 'radio', text: 'True or False: Too much junk food is healthy.', options: ['True', 'False'], answer: 'False' },
        { type: 'select', text: 'Which drink is best every day?', options: ['Clean water', 'Dirty water', 'Only soda'], answer: 'Clean water' },
        { type: 'text', text: 'Complete: Fruits and vegetables help us stay ___.', answer: 'healthy' },
        { type: 'select', text: 'Which is a good eating habit?', options: ['Eat slowly and chew', 'Eat with dirty hands', 'Drink dirty water'], answer: 'Eat slowly and chew' },
        { type: 'select', text: 'Which food gives protein?', options: ['Egg', 'Stone', 'Paper'], answer: 'Egg' }
      ],
      questionsUr: [
        { type: 'select', text: 'صحت مند غذا کون سی ہے؟', options: ['سیب', 'صرف ٹافی', 'صرف چپس'], answer: 'سیب' },
        { type: 'select', text: 'سبزی کون سی ہے؟', options: ['گاجر', 'کیک', 'سوڈا'], answer: 'گاجر' },
        { type: 'radio', text: 'درست یا غلط: ہمیں صاف پانی پینا چاہیے۔', options: ['درست', 'غلط'], answer: 'درست' },
        { type: 'select', text: 'کھانے سے پہلے کیا کرنا چاہیے؟', options: ['ہاتھ دھونا', 'مٹی سے کھیلنا', 'پانی چھوڑنا'], answer: 'ہاتھ دھونا' },
        { type: 'text', text: 'خالی جگہ پر کریں: دودھ ہڈیوں کو ___ بناتا ہے۔', answer: 'مضبوط' },
        { type: 'select', text: 'پھل کون سا ہے؟', options: ['کیلا', 'پنسل', 'جوتا'], answer: 'کیلا' },
        { type: 'select', text: 'اناج سے کیا بنتا ہے؟', options: ['روٹی', 'کھلونا', 'صابن'], answer: 'روٹی' },
        { type: 'radio', text: 'درست یا غلط: بہت زیادہ جنک فوڈ صحت مند ہے۔', options: ['درست', 'غلط'], answer: 'غلط' },
        { type: 'select', text: 'روزانہ بہترین مشروب کون سا ہے؟', options: ['صاف پانی', 'گندا پانی', 'صرف سوڈا'], answer: 'صاف پانی' },
        { type: 'text', text: 'خالی جگہ پر کریں: پھل اور سبزیاں ہمیں ___ رکھتی ہیں۔', answer: 'صحت مند' }
      ]
    },
    'weather-and-seasons': {
      title: 'Weather and Seasons',
      titleUr: 'موسم اور رتیں',
      intro: 'Identify sunny, rainy, cloudy, windy, hot, and cold weather, and choose suitable clothes.',
      introUr: 'دھوپ، بارش، بادل، ہوا، گرمی اور سردی کو پہچانیں اور مناسب کپڑے چنیں۔',
      focus: ['Weather can be sunny, rainy, cloudy, or windy', 'Weather can feel hot or cold', 'Wear clothes that match the weather', 'Basic seasons in Pakistan: summer, winter, spring, autumn, monsoon'],
      focusUr: ['موسم دھوپ، بارش، بادل یا ہوا والا ہو سکتا ہے', 'موسم گرم یا سرد محسوس ہوتا ہے', 'موسم کے مطابق کپڑے پہنیں', 'پاکستان کی بنیادی رتیں: گرمی، سردی، بہار، خزاں، مون سون'],
      examples: [['Sunny', 'Wear a cap in hot sun.'], ['Rainy', 'Use an umbrella.'], ['Cold', 'Wear a sweater.'], ['Windy', 'Leaves may move fast.']],
      examplesUr: [['دھوپ', 'گرمی میں ٹوپی پہنیں۔'], ['بارش', 'چھتری استعمال کریں۔'], ['سردی', 'سویٹر پہنیں۔'], ['ہوا', 'پتے تیزی سے ہلتے ہیں۔']],
      quick: ['Look at the sky.', 'Feel if the air is hot or cold.', 'Choose clothes for the weather.', 'Record daily weather with simple symbols.'],
      quickUr: ['آسمان کو دیکھیں۔', 'محسوس کریں ہوا گرم ہے یا ٹھنڈی۔', 'موسم کے مطابق کپڑے چنیں۔', 'روز کا موسم نشان سے لکھیں۔'],
      questions: [
        { type: 'select', text: 'What do we use on a rainy day?', options: ['Umbrella', 'Sunglasses only', 'Sandals only'], answer: 'Umbrella' },
        { type: 'select', text: 'What should we wear in cold weather?', options: ['Sweater', 'Thin vest', 'Swimsuit'], answer: 'Sweater' },
        { type: 'radio', text: 'True or False: Clouds can cover the sun.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Which symbol can show sunny weather?', options: ['Sun', 'Book', 'Spoon'], answer: 'Sun' },
        { type: 'text', text: 'Complete: Rain comes from ___.', answer: 'clouds' },
        { type: 'select', text: 'Which weather is very hot in Pakistan?', options: ['Summer', 'Winter', 'Night'], answer: 'Summer' },
        { type: 'select', text: 'What moves fast in windy weather?', options: ['Leaves', 'Books inside a bag', 'A wall'], answer: 'Leaves' },
        { type: 'radio', text: 'True or False: We wear raincoats in rain.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Which weather has many clouds?', options: ['Cloudy', 'Sunny', 'Dry'], answer: 'Cloudy' },
        { type: 'text', text: 'Complete: In winter, the weather is often ___.', answer: 'cold' },
        { type: 'select', text: 'Which item protects from sun?', options: ['Cap', 'Blanket only', 'Mittens only'], answer: 'Cap' },
        { type: 'select', text: 'Which is a season?', options: ['Spring', 'Pencil', 'Lunch'], answer: 'Spring' }
      ],
      questionsUr: [
        { type: 'select', text: 'بارش کے دن کیا استعمال کرتے ہیں؟', options: ['چھتری', 'صرف چشمہ', 'صرف چپل'], answer: 'چھتری' },
        { type: 'select', text: 'سردی میں کیا پہننا چاہیے؟', options: ['سویٹر', 'باریک بنیان', 'سوئمنگ سوٹ'], answer: 'سویٹر' },
        { type: 'radio', text: 'درست یا غلط: بادل سورج کو ڈھانپ سکتے ہیں۔', options: ['درست', 'غلط'], answer: 'درست' },
        { type: 'select', text: 'دھوپ والے موسم کا نشان کیا ہو سکتا ہے؟', options: ['سورج', 'کتاب', 'چمچ'], answer: 'سورج' },
        { type: 'text', text: 'خالی جگہ پر کریں: بارش ___ سے آتی ہے۔', answer: 'بادل' },
        { type: 'select', text: 'پاکستان میں کون سا موسم بہت گرم ہوتا ہے؟', options: ['گرمی', 'سردی', 'رات'], answer: 'گرمی' },
        { type: 'select', text: 'ہوا والے موسم میں کیا تیزی سے ہلتا ہے؟', options: ['پتے', 'بیگ میں کتابیں', 'دیوار'], answer: 'پتے' },
        { type: 'radio', text: 'درست یا غلط: بارش میں رین کوٹ پہنتے ہیں۔', options: ['درست', 'غلط'], answer: 'درست' },
        { type: 'select', text: 'بادل والا موسم کون سا ہے؟', options: ['ابر آلود', 'دھوپ', 'خشک'], answer: 'ابر آلود' },
        { type: 'text', text: 'خالی جگہ پر کریں: سردی میں موسم اکثر ___ ہوتا ہے۔', answer: 'سرد' }
      ]
    },
    safety: {
      title: 'Safety',
      titleUr: 'حفاظت',
      intro: 'Learn basic road, classroom, home, sharp-object, and traffic-light safety rules.',
      introUr: 'سڑک، جماعت، گھر، تیز چیزوں اور ٹریفک لائٹ کے بنیادی حفاظتی اصول سیکھیں۔',
      focus: ['Road safety: stop, look, and cross with an adult', 'Classroom safety: do not run or push', 'Home safety: keep away from fire and plugs', 'Avoid sharp objects', 'Traffic lights: red stop, yellow wait, green go'],
      focusUr: ['سڑک پر رکیں، دیکھیں اور بڑے کے ساتھ پار کریں', 'جماعت میں نہ بھاگیں اور نہ دھکا دیں', 'گھر میں آگ اور پلگ سے دور رہیں', 'تیز چیزوں سے بچیں', 'ٹریفک لائٹ: لال رکیں، پیلا انتظار، سبز چلیں'],
      examples: [['Red light', 'Stop.'], ['Green light', 'Go when safe.'], ['Sharp object', 'Do not play with a knife.'], ['Classroom', 'Walk slowly.']],
      examplesUr: [['لال بتی', 'رک جائیں۔'], ['سبز بتی', 'محفوظ ہو تو چلیں۔'], ['تیز چیز', 'چھری سے نہ کھیلیں۔'], ['جماعت', 'آہستہ چلیں۔']],
      quick: ['Stop before crossing the road.', 'Use zebra crossing with an adult.', 'Keep sharp objects away.', 'Ask an adult before touching switches or plugs.'],
      quickUr: ['سڑک پار کرنے سے پہلے رکیں۔', 'زیبرا کراسنگ بڑے کے ساتھ استعمال کریں۔', 'تیز چیزوں سے دور رہیں۔', 'سوئچ یا پلگ چھونے سے پہلے بڑے سے پوچھیں۔'],
      questions: [
        { type: 'select', text: 'What does red traffic light mean?', options: ['Stop', 'Run', 'Jump'], answer: 'Stop' },
        { type: 'select', text: 'What does green traffic light mean?', options: ['Go when safe', 'Sleep', 'Throw'], answer: 'Go when safe' },
        { type: 'radio', text: 'True or False: We should run across the road alone.', options: ['True', 'False'], answer: 'False' },
        { type: 'select', text: 'Which is a sharp object?', options: ['Knife', 'Pillow', 'Ball'], answer: 'Knife' },
        { type: 'text', text: 'Complete: Cross the road with an ___.', answer: 'adult' },
        { type: 'select', text: 'Which is a classroom safety rule?', options: ['Walk slowly', 'Push friends', 'Climb desks'], answer: 'Walk slowly' },
        { type: 'select', text: 'What should we avoid at home?', options: ['Playing with fire', 'Reading a book', 'Drinking clean water'], answer: 'Playing with fire' },
        { type: 'radio', text: 'True or False: Yellow light means wait.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Where should we cross the road?', options: ['Zebra crossing', 'Middle of fast road', 'Behind a bus'], answer: 'Zebra crossing' },
        { type: 'text', text: 'Complete: Do not touch electric ___.', answer: 'plugs', alt: ['switches', 'wires'] },
        { type: 'select', text: 'Which is safe?', options: ['Wear seat belt', 'Stand on a moving bus', 'Play on the road'], answer: 'Wear seat belt' },
        { type: 'select', text: 'Who can help you cross safely?', options: ['A trusted adult', 'A ball', 'A pencil'], answer: 'A trusted adult' }
      ],
      questionsUr: [
        { type: 'select', text: 'لال ٹریفک بتی کا مطلب کیا ہے؟', options: ['رک جائیں', 'بھاگیں', 'کودیں'], answer: 'رک جائیں' },
        { type: 'select', text: 'سبز ٹریفک بتی کا مطلب کیا ہے؟', options: ['محفوظ ہو تو چلیں', 'سو جائیں', 'پھینکیں'], answer: 'محفوظ ہو تو چلیں' },
        { type: 'radio', text: 'درست یا غلط: ہمیں اکیلے سڑک پر بھاگ کر پار کرنا چاہیے۔', options: ['درست', 'غلط'], answer: 'غلط' },
        { type: 'select', text: 'تیز چیز کون سی ہے؟', options: ['چھری', 'تکیہ', 'گیند'], answer: 'چھری' },
        { type: 'text', text: 'خالی جگہ پر کریں: سڑک کسی ___ کے ساتھ پار کریں۔', answer: 'بڑے' },
        { type: 'select', text: 'جماعت کا حفاظتی اصول کون سا ہے؟', options: ['آہستہ چلیں', 'دوستوں کو دھکا دیں', 'ڈیسک پر چڑھیں'], answer: 'آہستہ چلیں' },
        { type: 'select', text: 'گھر میں کس چیز سے بچنا چاہیے؟', options: ['آگ سے کھیلنا', 'کتاب پڑھنا', 'صاف پانی پینا'], answer: 'آگ سے کھیلنا' },
        { type: 'radio', text: 'درست یا غلط: پیلی بتی انتظار کا اشارہ ہے۔', options: ['درست', 'غلط'], answer: 'درست' },
        { type: 'select', text: 'سڑک کہاں سے پار کرنی چاہیے؟', options: ['زیبرا کراسنگ', 'تیز سڑک کے بیچ سے', 'بس کے پیچھے سے'], answer: 'زیبرا کراسنگ' },
        { type: 'text', text: 'خالی جگہ پر کریں: بجلی کے ___ کو نہ چھوئیں۔', answer: 'پلگ', alt: ['تار', 'سوئچ'] }
      ]
    }
  };

  const TOPICS_GRADE2 = {
    'human-body-and-health': {
      title: 'Human Body and Health',
      titleUr: 'انسانی جسم اور صحت',
      intro: 'Study body parts, sense organs, hygiene, exercise, rest, healthy food, junk food, and germs.',
      introUr: 'جسم کے حصے، حسی اعضاء، صفائی، ورزش، آرام، صحت مند خوراک، جنک فوڈ اور جراثیم سیکھیں۔',
      focus: ['Main body parts and their uses', 'Sense organs in more detail', 'Cleanliness and hygiene routine', 'Exercise and rest for a healthy body', 'Healthy food, junk food, and germs'],
      focusUr: ['جسم کے اہم حصے اور ان کے کام', 'حسی اعضاء کی مزید تفصیل', 'صفائی اور حفظان صحت کی روزمرہ عادتیں', 'صحت کے لیے ورزش اور آرام', 'صحت مند غذا، جنک فوڈ اور جراثیم'],
      examples: [['Eyes', 'Eyes help us see near and far objects.'], ['Hygiene', 'Brush teeth and wash hands daily.'], ['Exercise', 'Running and jumping make the body active.'], ['Germs', 'Germs are tiny and can make us sick.']],
      examplesUr: [['آنکھیں', 'آنکھیں قریب اور دور چیزیں دکھاتی ہیں۔'], ['صفائی', 'روز دانت صاف کریں اور ہاتھ دھوئیں۔'], ['ورزش', 'دوڑنا اور کودنا جسم کو فعال بناتا ہے۔'], ['جراثیم', 'جراثیم بہت چھوٹے ہوتے ہیں اور بیمار کر سکتے ہیں۔']],
      quick: ['Match each sense organ with its function.', 'Put hygiene steps in the correct order.', 'Choose healthy food more often than junk food.', 'Rest helps the body grow and recover.'],
      quickUr: ['ہر حسی عضو کو اس کے کام سے ملائیں۔', 'صفائی کے کام درست ترتیب میں رکھیں۔', 'جنک فوڈ کے بجائے صحت مند غذا زیادہ چنیں۔', 'آرام جسم کو بڑھنے اور تازہ ہونے میں مدد دیتا ہے۔'],
      questions: [
        { type: 'select', text: 'Which sense organ helps us smell?', options: ['Nose', 'Eyes', 'Skin'], answer: 'Nose' },
        { type: 'select', text: 'Which habit removes germs from hands?', options: ['Washing hands with soap', 'Touching dust', 'Skipping bath'], answer: 'Washing hands with soap' },
        { type: 'radio', text: 'True or False: Exercise keeps our body active.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Which is healthy food?', options: ['Vegetables', 'Only chips', 'Only candy'], answer: 'Vegetables' },
        { type: 'text', text: 'Complete: Tiny things that can make us sick are called ___.', answer: 'germs' },
        { type: 'select', text: 'Which organ helps us feel hot and cold?', options: ['Skin', 'Tongue', 'Ear'], answer: 'Skin' },
        { type: 'select', text: 'What should we do after playing outside?', options: ['Wash hands', 'Eat with dirty hands', 'Sleep in dirty clothes'], answer: 'Wash hands' },
        { type: 'radio', text: 'True or False: Rest is important for health.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Which is junk food?', options: ['Chips', 'Milk', 'Apple'], answer: 'Chips' },
        { type: 'text', text: 'Complete: We taste food with our ___.', answer: 'tongue' }
      ],
      questionsUr: [
        { type: 'select', text: 'ہم کس عضو سے سونگھتے ہیں؟', options: ['ناک', 'آنکھیں', 'جلد'], answer: 'ناک' },
        { type: 'select', text: 'ہاتھوں سے جراثیم دور کرنے والی عادت کون سی ہے؟', options: ['صابن سے ہاتھ دھونا', 'مٹی چھونا', 'نہانا چھوڑنا'], answer: 'صابن سے ہاتھ دھونا' },
        { type: 'radio', text: 'درست یا غلط: ورزش جسم کو فعال رکھتی ہے۔', options: ['درست', 'غلط'], answer: 'درست' },
        { type: 'select', text: 'صحت مند غذا کون سی ہے؟', options: ['سبزیاں', 'صرف چپس', 'صرف ٹافی'], answer: 'سبزیاں' },
        { type: 'text', text: 'خالی جگہ پر کریں: بیماری پھیلانے والی چھوٹی چیزیں ___ کہلاتی ہیں۔', answer: 'جراثیم' },
        { type: 'select', text: 'گرمی اور سردی کس عضو سے محسوس ہوتی ہے؟', options: ['جلد', 'زبان', 'کان'], answer: 'جلد' },
        { type: 'select', text: 'باہر کھیلنے کے بعد کیا کرنا چاہیے؟', options: ['ہاتھ دھونا', 'گندے ہاتھوں سے کھانا', 'گندے کپڑوں میں سونا'], answer: 'ہاتھ دھونا' },
        { type: 'radio', text: 'درست یا غلط: آرام صحت کے لیے ضروری ہے۔', options: ['درست', 'غلط'], answer: 'درست' },
        { type: 'select', text: 'جنک فوڈ کون سا ہے؟', options: ['چپس', 'دودھ', 'سیب'], answer: 'چپس' },
        { type: 'text', text: 'خالی جگہ پر کریں: ہم ___ سے ذائقہ چکھتے ہیں۔', answer: 'زبان' }
      ]
    },
    'living-things': {
      title: 'Living Things',
      titleUr: 'جاندار چیزیں',
      intro: 'Learn characteristics, needs, growth, and a simple life cycle idea for humans, animals, and plants.',
      introUr: 'جاندار چیزوں کی خصوصیات، ضرورتیں، بڑھنا اور آسان زندگی کا چکر سیکھیں۔',
      focus: ['Living things breathe, need food and water, and grow', 'Humans, animals, and plants are living things', 'Living things change as they grow', 'A life cycle shows stages of growth'],
      focusUr: ['جاندار سانس لیتے، خوراک اور پانی لیتے اور بڑھتے ہیں', 'انسان، جانور اور پودے جاندار ہیں', 'جاندار بڑھتے ہوئے بدلتے ہیں', 'زندگی کا چکر بڑھنے کے مرحلے دکھاتا ہے'],
      examples: [['Human growth', 'baby, child, adult'], ['Plant growth', 'seed, seedling, plant'], ['Need', 'Living things need air.'], ['Non-living', 'A chair does not grow.']],
      examplesUr: [['انسانی بڑھوتری', 'بچہ، لڑکا/لڑکی، بڑا'], ['پودے کی بڑھوتری', 'بیج، ننھا پودا، پودا'], ['ضرورت', 'جانداروں کو ہوا چاہیے۔'], ['بے جان', 'کرسی نہیں بڑھتی۔']],
      quick: ['Ask if it grows.', 'Ask if it needs air, food, and water.', 'Put growth stages in order.', 'Plants are living even though they do not walk.'],
      quickUr: ['پوچھیں کیا یہ بڑھتا ہے؟', 'پوچھیں کیا اسے ہوا، خوراک اور پانی چاہیے؟', 'بڑھنے کے مرحلے ترتیب سے رکھیں۔', 'پودے چلتے نہیں مگر جاندار ہیں۔'],
      questions: [
        { type: 'select', text: 'Living things need food, water, and...', options: ['air', 'plastic', 'paint'], answer: 'air' },
        { type: 'select', text: 'Which is a living thing?', options: ['Plant', 'Table', 'Toy car'], answer: 'Plant' },
        { type: 'radio', text: 'True or False: A stone grows.', options: ['True', 'False'], answer: 'False' },
        { type: 'select', text: 'Choose the correct plant growth order.', options: ['Seed, seedling, plant', 'Plant, seedling, seed', 'Leaf, stone, seed'], answer: 'Seed, seedling, plant' },
        { type: 'text', text: 'Complete: A baby grows into an ___.', answer: 'adult' },
        { type: 'select', text: 'Which does not need food?', options: ['Chair', 'Cat', 'Bird'], answer: 'Chair' },
        { type: 'radio', text: 'True or False: Plants are living things.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Which shows growth?', options: ['A seed becomes a plant', 'A pencil becomes hungry', 'A cup drinks water'], answer: 'A seed becomes a plant' },
        { type: 'text', text: 'Complete: Living things ___.', answer: 'grow', alt: ['breathe'] },
        { type: 'select', text: 'Which group has only living things?', options: ['fish, tree, child', 'book, bag, desk', 'cat, chair, pencil'], answer: 'fish, tree, child' }
      ],
      questionsUr: [
        { type: 'select', text: 'جانداروں کو خوراک، پانی اور ___ چاہیے۔', options: ['ہوا', 'پلاسٹک', 'رنگ'], answer: 'ہوا' },
        { type: 'select', text: 'جاندار چیز کون سی ہے؟', options: ['پودا', 'میز', 'کھلونا کار'], answer: 'پودا' },
        { type: 'radio', text: 'درست یا غلط: پتھر بڑھتا ہے۔', options: ['درست', 'غلط'], answer: 'غلط' },
        { type: 'select', text: 'پودے کی درست بڑھوتری چنیں۔', options: ['بیج، ننھا پودا، پودا', 'پودا، ننھا پودا، بیج', 'پتا، پتھر، بیج'], answer: 'بیج، ننھا پودا، پودا' },
        { type: 'text', text: 'خالی جگہ پر کریں: بچہ بڑا ہو کر ___ بنتا ہے۔', answer: 'بالغ', alt: ['بڑا'] },
        { type: 'select', text: 'کسے خوراک نہیں چاہیے؟', options: ['کرسی', 'بلی', 'پرندہ'], answer: 'کرسی' },
        { type: 'radio', text: 'درست یا غلط: پودے جاندار ہیں۔', options: ['درست', 'غلط'], answer: 'درست' },
        { type: 'select', text: 'بڑھوتری کون سی ہے؟', options: ['بیج پودا بنتا ہے', 'پنسل بھوکی ہوتی ہے', 'کپ پانی پیتا ہے'], answer: 'بیج پودا بنتا ہے' },
        { type: 'text', text: 'خالی جگہ پر کریں: جاندار چیزیں ___ ہیں۔', answer: 'بڑھتی', alt: ['سانس لیتی'] },
        { type: 'select', text: 'صرف جانداروں کا گروہ کون سا ہے؟', options: ['مچھلی، درخت، بچہ', 'کتاب، بیگ، میز', 'بلی، کرسی، پنسل'], answer: 'مچھلی، درخت، بچہ' }
      ]
    },
    animals: {
      title: 'Animals',
      titleUr: 'جانور',
      intro: 'Group animals by habitat, food, usefulness, and body covering.',
      introUr: 'جانوروں کو رہائش، خوراک، فائدے اور جسمانی ڈھانپ کے لحاظ سے پہچانیں۔',
      focus: ['Land animals, water animals, birds, and insects', 'Habitats where animals live', 'Food of animals: plants or meat', 'Useful animals', 'Body covering: fur, feathers, scales'],
      focusUr: ['زمینی جانور، آبی جانور، پرندے اور کیڑے', 'جانوروں کی رہائش گاہ', 'جانوروں کی خوراک: پودے یا گوشت', 'فائدہ مند جانور', 'جسم کا ڈھانپ: بال، پر، چھلکے'],
      examples: [['Land', 'lion, goat, horse'], ['Water', 'fish, whale'], ['Bird', 'sparrow, hen'], ['Covering', 'Birds have feathers.']],
      examplesUr: [['زمین', 'شیر، بکری، گھوڑا'], ['پانی', 'مچھلی، وہیل'], ['پرندہ', 'چڑیا، مرغی'], ['ڈھانپ', 'پرندوں کے پر ہوتے ہیں۔']],
      quick: ['Look where the animal lives.', 'Look at body covering.', 'Herbivores eat plants.', 'Carnivores eat meat.'],
      quickUr: ['دیکھیں جانور کہاں رہتا ہے۔', 'جسم کا ڈھانپ دیکھیں۔', 'سبزی خور پودے کھاتے ہیں۔', 'گوشت خور گوشت کھاتے ہیں۔'],
      questions: [
        { type: 'select', text: 'Which animal lives in water?', options: ['Fish', 'Goat', 'Lion'], answer: 'Fish' },
        { type: 'select', text: 'Which animal has feathers?', options: ['Bird', 'Snake', 'Cow'], answer: 'Bird' },
        { type: 'radio', text: 'True or False: Insects have six legs.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'A cow mainly eats...', options: ['plants', 'meat', 'stones'], answer: 'plants' },
        { type: 'text', text: 'Complete: Fish have ___.', answer: 'scales' },
        { type: 'select', text: 'Which is a land animal?', options: ['Horse', 'Fish', 'Dolphin'], answer: 'Horse' },
        { type: 'select', text: 'Which animal gives us eggs?', options: ['Hen', 'Tiger', 'Frog'], answer: 'Hen' },
        { type: 'radio', text: 'True or False: A lion is a carnivore.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Which animal covering is fur?', options: ['Rabbit', 'Fish', 'Parrot'], answer: 'Rabbit' },
        { type: 'text', text: 'Complete: Birds live in a ___.', answer: 'nest' }
      ],
      questionsUr: [
        { type: 'select', text: 'کون سا جانور پانی میں رہتا ہے؟', options: ['مچھلی', 'بکری', 'شیر'], answer: 'مچھلی' },
        { type: 'select', text: 'کس جانور کے پر ہوتے ہیں؟', options: ['پرندہ', 'سانپ', 'گائے'], answer: 'پرندہ' },
        { type: 'radio', text: 'درست یا غلط: کیڑوں کی چھ ٹانگیں ہوتی ہیں۔', options: ['درست', 'غلط'], answer: 'درست' },
        { type: 'select', text: 'گائے عموما کیا کھاتی ہے؟', options: ['پودے', 'گوشت', 'پتھر'], answer: 'پودے' },
        { type: 'text', text: 'خالی جگہ پر کریں: مچھلی کے ___ ہوتے ہیں۔', answer: 'چھلکے' },
        { type: 'select', text: 'زمینی جانور کون سا ہے؟', options: ['گھوڑا', 'مچھلی', 'ڈولفن'], answer: 'گھوڑا' },
        { type: 'select', text: 'کون سا جانور انڈے دیتا ہے؟', options: ['مرغی', 'چیتا', 'مینڈک'], answer: 'مرغی' },
        { type: 'radio', text: 'درست یا غلط: شیر گوشت خور ہے۔', options: ['درست', 'غلط'], answer: 'درست' },
        { type: 'select', text: 'کس جانور کے جسم پر بال ہوتے ہیں؟', options: ['خرگوش', 'مچھلی', 'طوطا'], answer: 'خرگوش' },
        { type: 'text', text: 'خالی جگہ پر کریں: پرندے ___ میں رہتے ہیں۔', answer: 'گھونسلے' }
      ]
    },
    plants: {
      title: 'Plants',
      titleUr: 'پودے',
      intro: 'Learn plant parts, needs, seed germination, trees, herbs, shrubs, and plant uses.',
      introUr: 'پودے کے حصے، ضرورتیں، بیج کا اگنا، درخت، جڑی بوٹیاں، جھاڑیاں اور استعمال سیکھیں۔',
      focus: ['Roots, stem, leaves, flowers, fruits, and seeds', 'Plants need water, air, soil, and sunlight', 'Seeds can germinate into seedlings', 'Trees, herbs, and shrubs', 'Uses of plants'],
      focusUr: ['جڑ، تنا، پتے، پھول، پھل اور بیج', 'پودوں کو پانی، ہوا، مٹی اور دھوپ چاہیے', 'بیج اگ کر ننھا پودا بنتا ہے', 'درخت، جڑی بوٹیاں اور جھاڑیاں', 'پودوں کے استعمال'],
      examples: [['Seed', 'A seed can grow into a plant.'], ['Tree', 'A mango plant is a tree.'], ['Herb', 'Mint is a herb.'], ['Use', 'We get wood from trees.']],
      examplesUr: [['بیج', 'بیج پودا بن سکتا ہے۔'], ['درخت', 'آم کا پودا درخت ہے۔'], ['جڑی بوٹی', 'پودینہ جڑی بوٹی ہے۔'], ['استعمال', 'درختوں سے لکڑی ملتی ہے۔']],
      quick: ['Put seed growth in order.', 'Label root, stem, leaf, and flower.', 'Shrubs are smaller than trees.', 'Plants give food, wood, cotton, and shade.'],
      quickUr: ['بیج کی بڑھوتری ترتیب سے رکھیں۔', 'جڑ، تنا، پتا اور پھول کے نام لکھیں۔', 'جھاڑیاں درختوں سے چھوٹی ہوتی ہیں۔', 'پودے خوراک، لکڑی، کپاس اور سایہ دیتے ہیں۔'],
      questions: [
        { type: 'select', text: 'What grows into a new plant?', options: ['Seed', 'Stone', 'Glass'], answer: 'Seed' },
        { type: 'select', text: 'Which part takes water from soil?', options: ['Root', 'Flower', 'Fruit'], answer: 'Root' },
        { type: 'radio', text: 'True or False: Plants need sunlight.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Which is a herb?', options: ['Mint', 'Mango tree', 'Chair'], answer: 'Mint' },
        { type: 'text', text: 'Complete: A young plant is called a ___.', answer: 'seedling' },
        { type: 'select', text: 'Which plant is a tree?', options: ['Mango', 'Grass', 'Mint'], answer: 'Mango' },
        { type: 'select', text: 'Which plant part makes food?', options: ['Leaves', 'Roots', 'Seeds'], answer: 'Leaves' },
        { type: 'radio', text: 'True or False: Cotton comes from plants.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Which is needed for germination?', options: ['Water', 'Plastic', 'Smoke'], answer: 'Water' },
        { type: 'text', text: 'Complete: Plants give us ___.', answer: 'food', alt: ['wood', 'shade', 'cotton'] }
      ],
      questionsUr: [
        { type: 'select', text: 'نیا پودا کس سے بنتا ہے؟', options: ['بیج', 'پتھر', 'شیشہ'], answer: 'بیج' },
        { type: 'select', text: 'مٹی سے پانی کون لیتا ہے؟', options: ['جڑ', 'پھول', 'پھل'], answer: 'جڑ' },
        { type: 'radio', text: 'درست یا غلط: پودوں کو دھوپ چاہیے۔', options: ['درست', 'غلط'], answer: 'درست' },
        { type: 'select', text: 'جڑی بوٹی کون سی ہے؟', options: ['پودینہ', 'آم کا درخت', 'کرسی'], answer: 'پودینہ' },
        { type: 'text', text: 'خالی جگہ پر کریں: ننھے پودے کو ___ کہتے ہیں۔', answer: 'نومولود پودا', alt: ['ننھا پودا'] },
        { type: 'select', text: 'درخت کون سا ہے؟', options: ['آم', 'گھاس', 'پودینہ'], answer: 'آم' },
        { type: 'select', text: 'خوراک کون سا حصہ بناتا ہے؟', options: ['پتے', 'جڑیں', 'بیج'], answer: 'پتے' },
        { type: 'radio', text: 'درست یا غلط: کپاس پودوں سے ملتی ہے۔', options: ['درست', 'غلط'], answer: 'درست' },
        { type: 'select', text: 'بیج اگنے کے لیے کیا چاہیے؟', options: ['پانی', 'پلاسٹک', 'دھواں'], answer: 'پانی' },
        { type: 'text', text: 'خالی جگہ پر کریں: پودے ہمیں ___ دیتے ہیں۔', answer: 'خوراک', alt: ['لکڑی', 'سایہ', 'کپاس'] }
      ]
    },
    'materials-around-us': {
      title: 'Materials Around Us',
      titleUr: 'ہمارے آس پاس مواد',
      intro: 'Sort objects by material and properties such as hard, soft, rough, smooth, transparent, and opaque.',
      introUr: 'چیزوں کو مواد اور خصوصیات جیسے سخت، نرم، کھردرا، ہموار، شفاف اور غیر شفاف سے پہچانیں۔',
      focus: ['Hard and soft things', 'Rough and smooth things', 'Transparent and opaque materials', 'Uses of wood, plastic, metal, glass, and paper'],
      focusUr: ['سخت اور نرم چیزیں', 'کھردری اور ہموار چیزیں', 'شفاف اور غیر شفاف مواد', 'لکڑی، پلاسٹک، دھات، شیشہ اور کاغذ کے استعمال'],
      examples: [['Hard', 'stone, metal spoon'], ['Soft', 'cotton, pillow'], ['Transparent', 'clear glass'], ['Opaque', 'wooden door']],
      examplesUr: [['سخت', 'پتھر، دھات کا چمچ'], ['نرم', 'روئی، تکیہ'], ['شفاف', 'صاف شیشہ'], ['غیر شفاف', 'لکڑی کا دروازہ']],
      quick: ['Touch safely to feel hard or soft.', 'Look through it to test transparent.', 'Paper is useful for books.', 'Metal is strong and often shiny.'],
      quickUr: ['محفوظ طریقے سے چھو کر سخت یا نرم پہچانیں۔', 'دیکھیں کیا اس کے پار نظر آتا ہے۔', 'کاغذ کتابوں کے لیے مفید ہے۔', 'دھات مضبوط اور اکثر چمکدار ہوتی ہے۔'],
      questions: [
        { type: 'select', text: 'Which material is transparent?', options: ['Clear glass', 'Wood', 'Stone'], answer: 'Clear glass' },
        { type: 'select', text: 'Which object is soft?', options: ['Pillow', 'Brick', 'Metal spoon'], answer: 'Pillow' },
        { type: 'radio', text: 'True or False: Wood is opaque.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Which material is used to make books?', options: ['Paper', 'Iron', 'Glass'], answer: 'Paper' },
        { type: 'text', text: 'Complete: A stone is ___.', answer: 'hard' },
        { type: 'select', text: 'Which feels smooth?', options: ['Glass', 'Sandpaper', 'Rough rock'], answer: 'Glass' },
        { type: 'select', text: 'Which material is often shiny and strong?', options: ['Metal', 'Cotton', 'Paper'], answer: 'Metal' },
        { type: 'radio', text: 'True or False: We can see clearly through opaque things.', options: ['True', 'False'], answer: 'False' },
        { type: 'select', text: 'Which is made of plastic?', options: ['Plastic bottle', 'Wooden table', 'Paper book'], answer: 'Plastic bottle' },
        { type: 'text', text: 'Complete: A rough surface does not feel ___.', answer: 'smooth' }
      ],
      questionsUr: [
        { type: 'select', text: 'شفاف مواد کون سا ہے؟', options: ['صاف شیشہ', 'لکڑی', 'پتھر'], answer: 'صاف شیشہ' },
        { type: 'select', text: 'نرم چیز کون سی ہے؟', options: ['تکیہ', 'اینٹ', 'دھات کا چمچ'], answer: 'تکیہ' },
        { type: 'radio', text: 'درست یا غلط: لکڑی غیر شفاف ہے۔', options: ['درست', 'غلط'], answer: 'درست' },
        { type: 'select', text: 'کتابیں بنانے کے لیے کون سا مواد استعمال ہوتا ہے؟', options: ['کاغذ', 'لوہا', 'شیشہ'], answer: 'کاغذ' },
        { type: 'text', text: 'خالی جگہ پر کریں: پتھر ___ ہوتا ہے۔', answer: 'سخت' },
        { type: 'select', text: 'ہموار چیز کون سی محسوس ہوتی ہے؟', options: ['شیشہ', 'ریگ مال', 'کھردرا پتھر'], answer: 'شیشہ' },
        { type: 'select', text: 'کون سا مواد عموما چمکدار اور مضبوط ہوتا ہے؟', options: ['دھات', 'روئی', 'کاغذ'], answer: 'دھات' },
        { type: 'radio', text: 'درست یا غلط: غیر شفاف چیز کے پار صاف نظر آتا ہے۔', options: ['درست', 'غلط'], answer: 'غلط' },
        { type: 'select', text: 'پلاسٹک سے بنی چیز کون سی ہے؟', options: ['پلاسٹک بوتل', 'لکڑی کی میز', 'کاغذی کتاب'], answer: 'پلاسٹک بوتل' },
        { type: 'text', text: 'خالی جگہ پر کریں: کھردری سطح ___ نہیں ہوتی۔', answer: 'ہموار' }
      ]
    },
    'water-and-air': {
      title: 'Water and Air',
      titleUr: 'پانی اور ہوا',
      intro: 'Learn uses and sources of water, clean water habits, uses of air, and moving air or wind.',
      introUr: 'پانی کے استعمال اور ذرائع، صاف پانی کی عادتیں، ہوا کے استعمال اور چلتی ہوا سیکھیں۔',
      focus: ['Uses of water: drinking, cooking, washing, growing plants', 'Sources of water: rain, rivers, wells, taps', 'Clean and dirty water', 'Uses of air for breathing and drying', 'Moving air is wind'],
      focusUr: ['پانی کے استعمال: پینا، پکانا، دھونا، پودے اگانا', 'پانی کے ذرائع: بارش، دریا، کنویں، نل', 'صاف اور گندا پانی', 'سانس لینے اور خشک کرنے کے لیے ہوا', 'چلتی ہوا کو ہوا/آندھی کہتے ہیں'],
      examples: [['Water use', 'We drink water.'], ['Source', 'Rain gives water.'], ['Air', 'We breathe air.'], ['Wind', 'Wind moves leaves.']],
      examplesUr: [['پانی کا استعمال', 'ہم پانی پیتے ہیں۔'], ['ذریعہ', 'بارش پانی دیتی ہے۔'], ['ہوا', 'ہم ہوا میں سانس لیتے ہیں۔'], ['چلتی ہوا', 'ہوا پتے ہلاتی ہے۔']],
      quick: ['Use clean water for drinking.', 'Do not waste water.', 'Plants and animals need water.', 'Air is around us though we cannot see it.'],
      quickUr: ['پینے کے لیے صاف پانی استعمال کریں۔', 'پانی ضائع نہ کریں۔', 'پودوں اور جانوروں کو پانی چاہیے۔', 'ہوا ہمارے آس پاس ہے مگر نظر نہیں آتی۔'],
      questions: [
        { type: 'select', text: 'Which is a source of water?', options: ['Rain', 'Chair', 'Pencil'], answer: 'Rain' },
        { type: 'select', text: 'Which is a use of water?', options: ['Drinking', 'Making smoke', 'Breaking glass'], answer: 'Drinking' },
        { type: 'radio', text: 'True or False: We need air to breathe.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Moving air is called...', options: ['wind', 'soil', 'stone'], answer: 'wind' },
        { type: 'text', text: 'Complete: We should drink ___ water.', answer: 'clean' },
        { type: 'select', text: 'Which thing needs water?', options: ['Plant', 'Plastic toy', 'Stone'], answer: 'Plant' },
        { type: 'radio', text: 'True or False: Dirty water can make us sick.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Which activity uses air?', options: ['Flying a kite', 'Closing a book', 'Holding a stone'], answer: 'Flying a kite' },
        { type: 'select', text: 'Which is NOT a water source?', options: ['Shoe', 'River', 'Well'], answer: 'Shoe' },
        { type: 'text', text: 'Complete: Do not ___ water.', answer: 'waste' }
      ],
      questionsUr: [
        { type: 'select', text: 'پانی کا ذریعہ کون سا ہے؟', options: ['بارش', 'کرسی', 'پنسل'], answer: 'بارش' },
        { type: 'select', text: 'پانی کا استعمال کون سا ہے؟', options: ['پینا', 'دھواں بنانا', 'شیشہ توڑنا'], answer: 'پینا' },
        { type: 'radio', text: 'درست یا غلط: سانس لینے کے لیے ہوا چاہیے۔', options: ['درست', 'غلط'], answer: 'درست' },
        { type: 'select', text: 'چلتی ہوا کو کیا کہتے ہیں؟', options: ['ہوا', 'مٹی', 'پتھر'], answer: 'ہوا' },
        { type: 'text', text: 'خالی جگہ پر کریں: ہمیں ___ پانی پینا چاہیے۔', answer: 'صاف' },
        { type: 'select', text: 'کس چیز کو پانی چاہیے؟', options: ['پودا', 'پلاسٹک کھلونا', 'پتھر'], answer: 'پودا' },
        { type: 'radio', text: 'درست یا غلط: گندا پانی بیمار کر سکتا ہے۔', options: ['درست', 'غلط'], answer: 'درست' },
        { type: 'select', text: 'ہوا کا استعمال کس میں ہوتا ہے؟', options: ['پتنگ اڑانا', 'کتاب بند کرنا', 'پتھر پکڑنا'], answer: 'پتنگ اڑانا' },
        { type: 'select', text: 'پانی کا ذریعہ کون سا نہیں ہے؟', options: ['جوتا', 'دریا', 'کنواں'], answer: 'جوتا' },
        { type: 'text', text: 'خالی جگہ پر کریں: پانی ___ نہیں کرنا چاہیے۔', answer: 'ضائع' }
      ]
    },
    'earth-sky-and-weather': {
      title: 'Earth, Sky, and Weather',
      titleUr: 'زمین، آسمان اور موسم',
      intro: 'Identify the sun, moon, stars, day and night, weather conditions, and seasonal changes.',
      introUr: 'سورج، چاند، ستارے، دن رات، موسم اور موسمی تبدیلیاں پہچانیں۔',
      focus: ['Sun, moon, and stars in the sky', 'Day and night', 'Weather: sunny, rainy, cloudy, windy', 'Seasonal changes and suitable clothing'],
      focusUr: ['آسمان میں سورج، چاند اور ستارے', 'دن اور رات', 'موسم: دھوپ، بارش، بادل، ہوا', 'موسمی تبدیلیاں اور مناسب لباس'],
      examples: [['Day', 'We see the sun in the day.'], ['Night', 'We see the moon and stars at night.'], ['Rainy', 'Use an umbrella.'], ['Winter', 'Wear warm clothes.']],
      examplesUr: [['دن', 'ہم دن میں سورج دیکھتے ہیں۔'], ['رات', 'ہم رات کو چاند اور ستارے دیکھتے ہیں۔'], ['بارش', 'چھتری استعمال کریں۔'], ['سردی', 'گرم کپڑے پہنیں۔']],
      quick: ['Day is bright because of the sun.', 'Night is dark.', 'Weather can change daily.', 'Seasons change over months.'],
      quickUr: ['دن سورج کی وجہ سے روشن ہوتا ہے۔', 'رات تاریک ہوتی ہے۔', 'موسم روز بدل سکتا ہے۔', 'رتیں مہینوں میں بدلتی ہیں۔'],
      questions: [
        { type: 'select', text: 'What do we usually see in the day?', options: ['Sun', 'Only stars', 'Torch'], answer: 'Sun' },
        { type: 'select', text: 'What do we see at night?', options: ['Moon', 'Class board', 'Lunch box'], answer: 'Moon' },
        { type: 'radio', text: 'True or False: Stars are seen better at night.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Which weather has rain?', options: ['Rainy', 'Sunny', 'Dry'], answer: 'Rainy' },
        { type: 'text', text: 'Complete: Day is bright because of the ___.', answer: 'sun' },
        { type: 'select', text: 'Which clothes are good in winter?', options: ['Warm clothes', 'Thin summer clothes', 'Swimwear only'], answer: 'Warm clothes' },
        { type: 'select', text: 'Which object is in the sky?', options: ['Star', 'Desk', 'Shoe'], answer: 'Star' },
        { type: 'radio', text: 'True or False: Weather is always the same.', options: ['True', 'False'], answer: 'False' },
        { type: 'select', text: 'What can move leaves?', options: ['Wind', 'Book', 'Cup'], answer: 'Wind' },
        { type: 'text', text: 'Complete: The moon is usually seen at ___.', answer: 'night' }
      ],
      questionsUr: [
        { type: 'select', text: 'دن میں عموما کیا دیکھتے ہیں؟', options: ['سورج', 'صرف ستارے', 'ٹارچ'], answer: 'سورج' },
        { type: 'select', text: 'رات کو کیا دیکھتے ہیں؟', options: ['چاند', 'کلاس بورڈ', 'لنچ باکس'], answer: 'چاند' },
        { type: 'radio', text: 'درست یا غلط: ستارے رات کو بہتر نظر آتے ہیں۔', options: ['درست', 'غلط'], answer: 'درست' },
        { type: 'select', text: 'بارش والا موسم کون سا ہے؟', options: ['برسات', 'دھوپ', 'خشک'], answer: 'برسات' },
        { type: 'text', text: 'خالی جگہ پر کریں: دن ___ کی وجہ سے روشن ہوتا ہے۔', answer: 'سورج' },
        { type: 'select', text: 'سردی میں کون سے کپڑے بہتر ہیں؟', options: ['گرم کپڑے', 'باریک گرمی کے کپڑے', 'صرف سوئمنگ لباس'], answer: 'گرم کپڑے' },
        { type: 'select', text: 'آسمان میں کون سی چیز ہے؟', options: ['ستارہ', 'ڈیسک', 'جوتا'], answer: 'ستارہ' },
        { type: 'radio', text: 'درست یا غلط: موسم ہمیشہ ایک جیسا رہتا ہے۔', options: ['درست', 'غلط'], answer: 'غلط' },
        { type: 'select', text: 'پتے کون ہلا سکتی ہے؟', options: ['ہوا', 'کتاب', 'کپ'], answer: 'ہوا' },
        { type: 'text', text: 'خالی جگہ پر کریں: چاند عموما ___ کو نظر آتا ہے۔', answer: 'رات' }
      ]
    }
  };

  const TOPICS_GRADE3 = {
    'human-body': {
      title: 'Human Body',
      titleUr: 'انسانی جسم',
      intro: 'Learn basic body systems, bones, muscles, teeth, balanced diet, cleanliness, and disease prevention.',
      introUr: 'جسمانی نظام، ہڈیاں، عضلات، دانت، متوازن غذا، صفائی اور بیماری سے بچاؤ سیکھیں۔',
      focus: ['Body systems introduction: digesting, breathing, moving', 'Bones support the body and muscles help movement', 'Teeth types and dental care', 'Balanced diet with different food groups', 'Cleanliness helps prevent disease'],
      focusUr: ['جسمانی نظام: ہضم، سانس، حرکت', 'ہڈیاں جسم کو سہارا دیتی ہیں اور عضلات حرکت دیتے ہیں', 'دانتوں کی اقسام اور دیکھ بھال', 'مختلف غذاؤں والی متوازن خوراک', 'صفائی بیماری سے بچاتی ہے'],
      examples: [['Bones', 'Bones make a hard frame called a skeleton.'], ['Muscles', 'Muscles help us run, write, and chew.'], ['Dental care', 'Brush teeth twice daily.'], ['Balanced diet', 'Eat grains, fruits, vegetables, milk, and proteins.']],
      examplesUr: [['ہڈیاں', 'ہڈیاں جسم کا سخت ڈھانچہ بناتی ہیں۔'], ['عضلات', 'عضلات دوڑنے، لکھنے اور چبانے میں مدد دیتے ہیں۔'], ['دانتوں کی دیکھ بھال', 'دن میں دو بار دانت صاف کریں۔'], ['متوازن غذا', 'اناج، پھل، سبزیاں، دودھ اور پروٹین کھائیں۔']],
      quick: ['Match each body part with its job.', 'Choose good dental habits.', 'A balanced plate has more than one food group.', 'Clean hands help stop germs.'],
      quickUr: ['ہر جسمانی حصے کو اس کے کام سے ملائیں۔', 'اچھی دانتوں والی عادتیں چنیں۔', 'متوازن پلیٹ میں ایک سے زیادہ غذائی گروہ ہوتے ہیں۔', 'صاف ہاتھ جراثیم روکنے میں مدد دیتے ہیں۔'],
      questions: [
        { type: 'select', text: 'What supports the body?', options: ['Bones', 'Hair', 'Skin only'], answer: 'Bones' },
        { type: 'select', text: 'What helps bones move?', options: ['Muscles', 'Teeth', 'Nails'], answer: 'Muscles' },
        { type: 'radio', text: 'True or False: Brushing teeth is good dental care.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Which is part of a balanced diet?', options: ['Fruits and vegetables', 'Only candy', 'Only chips'], answer: 'Fruits and vegetables' },
        { type: 'text', text: 'Complete: The hard frame of bones is called a ___.', answer: 'skeleton' },
        { type: 'select', text: 'Which teeth help cut food?', options: ['Front teeth', 'Hair', 'Fingers'], answer: 'Front teeth' },
        { type: 'radio', text: 'True or False: Cleanliness helps prevent disease.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Which habit is bad for teeth?', options: ['Eating too much candy', 'Brushing teeth', 'Rinsing mouth'], answer: 'Eating too much candy' },
        { type: 'text', text: 'Complete: We breathe with our ___.', answer: 'lungs' },
        { type: 'select', text: 'Which keeps the body healthy?', options: ['Exercise and rest', 'No sleep', 'Dirty hands'], answer: 'Exercise and rest' }
      ],
      questionsUr: [
        { type: 'select', text: 'جسم کو سہارا کون دیتا ہے؟', options: ['ہڈیاں', 'بال', 'صرف جلد'], answer: 'ہڈیاں' },
        { type: 'select', text: 'ہڈیوں کو حرکت دینے میں کیا مدد دیتا ہے؟', options: ['عضلات', 'دانت', 'ناخن'], answer: 'عضلات' },
        { type: 'radio', text: 'درست یا غلط: دانت صاف کرنا اچھی عادت ہے۔', options: ['درست', 'غلط'], answer: 'درست' },
        { type: 'select', text: 'متوازن غذا کا حصہ کیا ہے؟', options: ['پھل اور سبزیاں', 'صرف ٹافی', 'صرف چپس'], answer: 'پھل اور سبزیاں' },
        { type: 'text', text: 'خالی جگہ پر کریں: ہڈیوں کے ڈھانچے کو ___ کہتے ہیں۔', answer: 'ڈھانچہ' },
        { type: 'select', text: 'کھانا کاٹنے میں کون سے دانت مدد دیتے ہیں؟', options: ['سامنے کے دانت', 'بال', 'انگلیاں'], answer: 'سامنے کے دانت' },
        { type: 'radio', text: 'درست یا غلط: صفائی بیماری سے بچاتی ہے۔', options: ['درست', 'غلط'], answer: 'درست' },
        { type: 'select', text: 'دانتوں کے لیے بری عادت کون سی ہے؟', options: ['زیادہ ٹافی کھانا', 'دانت صاف کرنا', 'کلی کرنا'], answer: 'زیادہ ٹافی کھانا' },
        { type: 'text', text: 'خالی جگہ پر کریں: ہم ___ سے سانس لیتے ہیں۔', answer: 'پھیپھڑوں' },
        { type: 'select', text: 'جسم کو صحت مند کیا رکھتا ہے؟', options: ['ورزش اور آرام', 'نیند نہ کرنا', 'گندے ہاتھ'], answer: 'ورزش اور آرام' }
      ]
    },
    animals: {
      title: 'Animals',
      titleUr: 'جانور',
      intro: 'Classify animals by food, backbone, movement, adaptation, and simple life cycles.',
      introUr: 'جانوروں کو خوراک، ریڑھ کی ہڈی، حرکت، موافقت اور زندگی کے چکر سے پہچانیں۔',
      focus: ['Herbivores, carnivores, and omnivores', 'Vertebrates and invertebrates introduction', 'Animal movement: walk, swim, fly, crawl, hop', 'Adaptation introduction', 'Life cycles of butterfly, frog, and chicken'],
      focusUr: ['سبزی خور، گوشت خور اور ہمہ خور', 'ریڑھ والے اور بے ریڑھ جانور', 'جانوروں کی حرکت: چلنا، تیرنا، اڑنا، رینگنا، کودنا', 'موافقت کا تعارف', 'تتلی، مینڈک اور مرغی کا زندگی چکر'],
      examples: [['Herbivore', 'A cow eats plants.'], ['Carnivore', 'A lion eats meat.'], ['Omnivore', 'A bear can eat plants and meat.'], ['Life cycle', 'Egg, caterpillar, pupa, butterfly.']],
      examplesUr: [['سبزی خور', 'گائے پودے کھاتی ہے۔'], ['گوشت خور', 'شیر گوشت کھاتا ہے۔'], ['ہمہ خور', 'ریچھ پودے اور گوشت دونوں کھا سکتا ہے۔'], ['زندگی چکر', 'انڈا، سنڈی، پیوپا، تتلی۔']],
      quick: ['Look at what the animal eats.', 'Animals with backbones are vertebrates.', 'Life cycles have stages.', 'Body parts help animals live in their habitat.'],
      quickUr: ['دیکھیں جانور کیا کھاتا ہے۔', 'ریڑھ کی ہڈی والے جانور vertebrates ہیں۔', 'زندگی کے چکر میں مرحلے ہوتے ہیں۔', 'جسمانی حصے جانور کو رہائش میں مدد دیتے ہیں۔'],
      questions: [
        { type: 'select', text: 'A cow is a...', options: ['herbivore', 'carnivore', 'machine'], answer: 'herbivore' },
        { type: 'select', text: 'A lion is a...', options: ['carnivore', 'herbivore', 'plant'], answer: 'carnivore' },
        { type: 'radio', text: 'True or False: Animals with backbones are vertebrates.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Which animal can fly?', options: ['Bird', 'Fish', 'Goat'], answer: 'Bird' },
        { type: 'text', text: 'Complete: A butterfly starts life as an ___.', answer: 'egg' },
        { type: 'select', text: 'Which is an invertebrate?', options: ['Butterfly', 'Dog', 'Hen'], answer: 'Butterfly' },
        { type: 'radio', text: 'True or False: A frog life cycle includes tadpole.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Which animal is an omnivore?', options: ['Bear', 'Cow', 'Lion only'], answer: 'Bear' },
        { type: 'text', text: 'Complete: Fish move by ___.', answer: 'swimming', alt: ['swim'] },
        { type: 'select', text: 'A camel stores fat in its hump. This is an...', options: ['adaptation', 'toy', 'sound'], answer: 'adaptation' }
      ],
      questionsUr: [
        { type: 'select', text: 'گائے کیا ہے؟', options: ['سبزی خور', 'گوشت خور', 'مشین'], answer: 'سبزی خور' },
        { type: 'select', text: 'شیر کیا ہے؟', options: ['گوشت خور', 'سبزی خور', 'پودا'], answer: 'گوشت خور' },
        { type: 'radio', text: 'درست یا غلط: ریڑھ کی ہڈی والے جانور vertebrates ہیں۔', options: ['درست', 'غلط'], answer: 'درست' },
        { type: 'select', text: 'کون سا جانور اڑ سکتا ہے؟', options: ['پرندہ', 'مچھلی', 'بکری'], answer: 'پرندہ' },
        { type: 'text', text: 'خالی جگہ پر کریں: تتلی کی زندگی ___ سے شروع ہوتی ہے۔', answer: 'انڈے' },
        { type: 'select', text: 'بے ریڑھ جانور کون سا ہے؟', options: ['تتلی', 'کتا', 'مرغی'], answer: 'تتلی' },
        { type: 'radio', text: 'درست یا غلط: مینڈک کے زندگی چکر میں ٹیڈپول شامل ہے۔', options: ['درست', 'غلط'], answer: 'درست' },
        { type: 'select', text: 'ہمہ خور جانور کون سا ہے؟', options: ['ریچھ', 'گائے', 'صرف شیر'], answer: 'ریچھ' },
        { type: 'text', text: 'خالی جگہ پر کریں: مچھلی ___ کر حرکت کرتی ہے۔', answer: 'تیر' },
        { type: 'select', text: 'اونٹ کے کوہان میں چربی ذخیرہ ہونا کیا ہے؟', options: ['موافقت', 'کھلونا', 'آواز'], answer: 'موافقت' }
      ]
    },
    plants: {
      title: 'Plants',
      titleUr: 'پودے',
      intro: 'Study plant parts and functions, germination, flowering and non-flowering plants, life cycles, food, and medicine.',
      introUr: 'پودوں کے حصے اور کام، بیج کا اگنا، پھول دار اور بے پھول پودے، زندگی چکر، خوراک اور دوا سیکھیں۔',
      focus: ['Roots absorb water and hold the plant', 'Stem carries water and supports the plant', 'Leaves make food', 'Seed germination and plant life cycle', 'Plants as food and medicine'],
      focusUr: ['جڑیں پانی جذب کرتی اور پودا پکڑتی ہیں', 'تنا پانی لے جاتا اور سہارا دیتا ہے', 'پتے خوراک بناتے ہیں', 'بیج کا اگنا اور پودے کا زندگی چکر', 'پودے خوراک اور دوا کے طور پر'],
      examples: [['Root', 'Absorbs water from soil.'], ['Leaf', 'Makes food for the plant.'], ['Germination', 'A seed starts to grow.'], ['Medicine', 'Some plants are used to make medicine.']],
      examplesUr: [['جڑ', 'مٹی سے پانی جذب کرتی ہے۔'], ['پتا', 'پودے کے لیے خوراک بناتا ہے۔'], ['اگنا', 'بیج بڑھنا شروع کرتا ہے۔'], ['دوا', 'کچھ پودے دوا بنانے میں استعمال ہوتے ہیں۔']],
      quick: ['Learn each plant part with its job.', 'Life cycle order: seed, seedling, adult plant.', 'Flowering plants make flowers.', 'Plants give fruits, grains, vegetables, herbs, and medicines.'],
      quickUr: ['ہر پودے کے حصے کا کام یاد کریں۔', 'زندگی چکر: بیج، ننھا پودا، بڑا پودا۔', 'پھول دار پودے پھول بناتے ہیں۔', 'پودے پھل، اناج، سبزیاں، جڑی بوٹیاں اور دوائیں دیتے ہیں۔'],
      questions: [
        { type: 'select', text: 'Which part absorbs water?', options: ['Roots', 'Flower', 'Fruit'], answer: 'Roots' },
        { type: 'select', text: 'Which part makes food?', options: ['Leaves', 'Roots', 'Seeds'], answer: 'Leaves' },
        { type: 'radio', text: 'True or False: Germination means a seed starts to grow.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Choose the plant life cycle order.', options: ['Seed, seedling, adult plant', 'Adult plant, seedling, seed', 'Fruit, stone, chair'], answer: 'Seed, seedling, adult plant' },
        { type: 'text', text: 'Complete: The stem carries ___.', answer: 'water' },
        { type: 'select', text: 'Which is a flowering plant?', options: ['Rose', 'Fern', 'Moss'], answer: 'Rose' },
        { type: 'radio', text: 'True or False: Some plants are used as medicine.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Which plant part becomes fruit after flowering?', options: ['Flower', 'Root', 'Stem'], answer: 'Flower' },
        { type: 'text', text: 'Complete: Plants need sunlight to make ___.', answer: 'food' },
        { type: 'select', text: 'Which food comes from plants?', options: ['Wheat', 'Plastic', 'Glass'], answer: 'Wheat' }
      ],
      questionsUr: [
        { type: 'select', text: 'پانی کون سا حصہ جذب کرتا ہے؟', options: ['جڑیں', 'پھول', 'پھل'], answer: 'جڑیں' },
        { type: 'select', text: 'خوراک کون سا حصہ بناتا ہے؟', options: ['پتے', 'جڑیں', 'بیج'], answer: 'پتے' },
        { type: 'radio', text: 'درست یا غلط: germination کا مطلب بیج کا اگنا ہے۔', options: ['درست', 'غلط'], answer: 'درست' },
        { type: 'select', text: 'پودے کا درست زندگی چکر چنیں۔', options: ['بیج، ننھا پودا، بڑا پودا', 'بڑا پودا، ننھا پودا، بیج', 'پھل، پتھر، کرسی'], answer: 'بیج، ننھا پودا، بڑا پودا' },
        { type: 'text', text: 'خالی جگہ پر کریں: تنا ___ لے جاتا ہے۔', answer: 'پانی' },
        { type: 'select', text: 'پھول دار پودا کون سا ہے؟', options: ['گلاب', 'فرن', 'کائی'], answer: 'گلاب' },
        { type: 'radio', text: 'درست یا غلط: کچھ پودے دوا کے طور پر استعمال ہوتے ہیں۔', options: ['درست', 'غلط'], answer: 'درست' },
        { type: 'select', text: 'پھول کے بعد کون سا حصہ پھل بن سکتا ہے؟', options: ['پھول', 'جڑ', 'تنا'], answer: 'پھول' },
        { type: 'text', text: 'خالی جگہ پر کریں: پودے دھوپ سے ___ بناتے ہیں۔', answer: 'خوراک' },
        { type: 'select', text: 'کون سی غذا پودوں سے آتی ہے؟', options: ['گندم', 'پلاسٹک', 'شیشہ'], answer: 'گندم' }
      ]
    },
    'matter-and-materials': {
      title: 'Matter and Materials',
      titleUr: 'مادہ اور مواد',
      intro: 'Classify solids, liquids, and gases, and observe material properties, changes, melting, freezing, and mixing.',
      introUr: 'ٹھوس، مائع اور گیس، مواد کی خصوصیات، تبدیلیاں، پگھلنا، جمنا اور ملانا سیکھیں۔',
      focus: ['Solids keep their shape', 'Liquids flow and take container shape', 'Gases spread and fill space', 'Materials can change by melting or freezing', 'Some materials mix and some do not'],
      focusUr: ['ٹھوس اپنی شکل رکھتے ہیں', 'مائع بہتے ہیں اور برتن کی شکل لیتے ہیں', 'گیس پھیلتی ہے', 'مواد پگھلنے یا جمنے سے بدل سکتا ہے', 'کچھ چیزیں ملتی ہیں اور کچھ نہیں'],
      examples: [['Solid', 'ice, stone, pencil'], ['Liquid', 'water, milk, oil'], ['Gas', 'air, steam'], ['Melting', 'Ice melts into water.']],
      examplesUr: [['ٹھوس', 'برف، پتھر، پنسل'], ['مائع', 'پانی، دودھ، تیل'], ['گیس', 'ہوا، بھاپ'], ['پگھلنا', 'برف پانی بن جاتی ہے۔']],
      quick: ['Ask if it keeps shape.', 'Ask if it flows.', 'Heating can melt some solids.', 'Cooling can freeze some liquids.'],
      quickUr: ['پوچھیں کیا یہ شکل برقرار رکھتا ہے؟', 'پوچھیں کیا یہ بہتا ہے؟', 'گرمی کچھ ٹھوس چیزیں پگھلا سکتی ہے۔', 'ٹھنڈک کچھ مائع جما سکتی ہے۔'],
      questions: [
        { type: 'select', text: 'Which is a solid?', options: ['Stone', 'Water', 'Air'], answer: 'Stone' },
        { type: 'select', text: 'Which is a liquid?', options: ['Milk', 'Pencil', 'Air'], answer: 'Milk' },
        { type: 'radio', text: 'True or False: Air is a gas.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'What happens when ice melts?', options: ['It becomes water', 'It becomes wood', 'It disappears forever'], answer: 'It becomes water' },
        { type: 'text', text: 'Complete: Water becomes ice by ___.', answer: 'freezing' },
        { type: 'select', text: 'Which state flows?', options: ['Liquid', 'Solid', 'Brick'], answer: 'Liquid' },
        { type: 'radio', text: 'True or False: A solid usually keeps its shape.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Which material property describes glass?', options: ['Transparent', 'Soft like cotton', 'Magnetic always'], answer: 'Transparent' },
        { type: 'text', text: 'Complete: Steam is a ___.', answer: 'gas' },
        { type: 'select', text: 'Which can mix with water?', options: ['Salt', 'Stone', 'Plastic toy'], answer: 'Salt' }
      ],
      questionsUr: [
        { type: 'select', text: 'ٹھوس کون سا ہے؟', options: ['پتھر', 'پانی', 'ہوا'], answer: 'پتھر' },
        { type: 'select', text: 'مائع کون سا ہے؟', options: ['دودھ', 'پنسل', 'ہوا'], answer: 'دودھ' },
        { type: 'radio', text: 'درست یا غلط: ہوا گیس ہے۔', options: ['درست', 'غلط'], answer: 'درست' },
        { type: 'select', text: 'برف پگھل کر کیا بنتی ہے؟', options: ['پانی', 'لکڑی', 'ہمیشہ غائب'], answer: 'پانی' },
        { type: 'text', text: 'خالی جگہ پر کریں: پانی ___ سے برف بنتا ہے۔', answer: 'جمنے' },
        { type: 'select', text: 'کون سی حالت بہتی ہے؟', options: ['مائع', 'ٹھوس', 'اینٹ'], answer: 'مائع' },
        { type: 'radio', text: 'درست یا غلط: ٹھوس چیز عموما اپنی شکل رکھتی ہے۔', options: ['درست', 'غلط'], answer: 'درست' },
        { type: 'select', text: 'شیشہ کی خاصیت کیا ہے؟', options: ['شفاف', 'روئی جیسا نرم', 'ہمیشہ مقناطیسی'], answer: 'شفاف' },
        { type: 'text', text: 'خالی جگہ پر کریں: بھاپ ایک ___ ہے۔', answer: 'گیس' },
        { type: 'select', text: 'پانی میں کیا مل سکتا ہے؟', options: ['نمک', 'پتھر', 'پلاسٹک کھلونا'], answer: 'نمک' }
      ]
    },
    'force-and-movement': {
      title: 'Force and Movement',
      titleUr: 'قوت اور حرکت',
      intro: 'Learn push, pull, speed, direction, and simple machines such as wheel, lever, and pulley.',
      introUr: 'دھکا، کھینچنا، رفتار، سمت اور سادہ مشینیں جیسے پہیہ، لیور اور چرخی سیکھیں۔',
      focus: ['Push and pull are forces', 'Objects can move fast or slow', 'Movement has direction', 'Simple machines make work easier', 'Wheel, lever, and pulley examples'],
      focusUr: ['دھکا اور کھینچنا قوتیں ہیں', 'چیزیں تیز یا آہستہ حرکت کر سکتی ہیں', 'حرکت کی سمت ہوتی ہے', 'سادہ مشینیں کام آسان کرتی ہیں', 'پہیہ، لیور اور چرخی کی مثالیں'],
      examples: [['Push', 'Push a door to open it.'], ['Pull', 'Pull a drawer.'], ['Wheel', 'A wheel helps a bicycle move.'], ['Pulley', 'A pulley can lift a bucket.']],
      examplesUr: [['دھکا', 'دروازہ کھولنے کے لیے دھکا دیں۔'], ['کھینچنا', 'دراز کھینچیں۔'], ['پہیہ', 'پہیہ سائیکل کو حرکت دیتا ہے۔'], ['چرخی', 'چرخی بالٹی اٹھا سکتی ہے۔']],
      quick: ['A push moves something away.', 'A pull moves something toward you.', 'Compare fast and slow movement.', 'Name simple machines in daily life.'],
      quickUr: ['دھکا چیز کو دور حرکت دیتا ہے۔', 'کھینچنا چیز کو اپنی طرف لاتا ہے۔', 'تیز اور آہستہ حرکت کا موازنہ کریں۔', 'روزمرہ کی سادہ مشینوں کے نام لیں۔'],
      questions: [
        { type: 'select', text: 'Opening a drawer is usually a...', options: ['pull', 'shadow', 'sound'], answer: 'pull' },
        { type: 'select', text: 'Kicking a ball is a...', options: ['push', 'taste', 'smell'], answer: 'push' },
        { type: 'radio', text: 'True or False: A wheel is a simple machine.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Which moves faster?', options: ['Car', 'Snail', 'Turtle'], answer: 'Car' },
        { type: 'text', text: 'Complete: A pulley helps to ___ things.', answer: 'lift' },
        { type: 'select', text: 'Which simple machine is on a bicycle?', options: ['Wheel', 'Moon', 'Cloud'], answer: 'Wheel' },
        { type: 'radio', text: 'True or False: Movement can have direction.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'A seesaw is an example of a...', options: ['lever', 'gas', 'plant'], answer: 'lever' },
        { type: 'text', text: 'Complete: Push and pull are ___.', answer: 'forces' },
        { type: 'select', text: 'Which word tells movement?', options: ['forward', 'sweet', 'green'], answer: 'forward' }
      ],
      questionsUr: [
        { type: 'select', text: 'دراز کھولنا عموما کیا ہے؟', options: ['کھینچنا', 'سایہ', 'آواز'], answer: 'کھینچنا' },
        { type: 'select', text: 'گیند کو کک کرنا کیا ہے؟', options: ['دھکا', 'ذائقہ', 'خوشبو'], answer: 'دھکا' },
        { type: 'radio', text: 'درست یا غلط: پہیہ سادہ مشین ہے۔', options: ['درست', 'غلط'], answer: 'درست' },
        { type: 'select', text: 'کون تیز چلتا ہے؟', options: ['کار', 'گھونگا', 'کچھوا'], answer: 'کار' },
        { type: 'text', text: 'خالی جگہ پر کریں: چرخی چیزیں ___ میں مدد دیتی ہے۔', answer: 'اٹھانے' },
        { type: 'select', text: 'سائیکل میں کون سی سادہ مشین ہے؟', options: ['پہیہ', 'چاند', 'بادل'], answer: 'پہیہ' },
        { type: 'radio', text: 'درست یا غلط: حرکت کی سمت ہو سکتی ہے۔', options: ['درست', 'غلط'], answer: 'درست' },
        { type: 'select', text: 'سی سا کس کی مثال ہے؟', options: ['لیور', 'گیس', 'پودا'], answer: 'لیور' },
        { type: 'text', text: 'خالی جگہ پر کریں: دھکا اور کھینچنا ___ ہیں۔', answer: 'قوتیں' },
        { type: 'select', text: 'حرکت بتانے والا لفظ کون سا ہے؟', options: ['آگے', 'میٹھا', 'سبز'], answer: 'آگے' }
      ]
    },
    'light-sound-and-heat': {
      title: 'Light, Sound, and Heat',
      titleUr: 'روشنی، آواز اور حرارت',
      intro: 'Identify light sources, shadows, sound sources, loud and soft sounds, and heat from sun, fire, and electricity.',
      introUr: 'روشنی کے ذرائع، سائے، آواز کے ذرائع، تیز اور ہلکی آوازیں، اور سورج، آگ اور بجلی سے حرارت سیکھیں۔',
      focus: ['Natural and artificial light sources', 'Shadows form when light is blocked', 'Sources of sound', 'Loud and soft sounds', 'Heat from sun, fire, and electricity'],
      focusUr: ['قدرتی اور مصنوعی روشنی کے ذرائع', 'روشنی رکنے سے سایہ بنتا ہے', 'آواز کے ذرائع', 'تیز اور ہلکی آوازیں', 'سورج، آگ اور بجلی سے حرارت'],
      examples: [['Natural light', 'The sun gives natural light.'], ['Artificial light', 'A bulb gives artificial light.'], ['Shadow', 'A shadow forms behind an object.'], ['Sound', 'A drum makes sound.']],
      examplesUr: [['قدرتی روشنی', 'سورج قدرتی روشنی دیتا ہے۔'], ['مصنوعی روشنی', 'بلب مصنوعی روشنی دیتا ہے۔'], ['سایہ', 'چیز کے پیچھے سایہ بنتا ہے۔'], ['آواز', 'ڈھول آواز بناتا ہے۔']],
      quick: ['Classify light sources as natural or artificial.', 'Use a torch to observe shadows safely.', 'Sound comes from vibrating things.', 'Heat can be useful but fire is dangerous.'],
      quickUr: ['روشنی کے ذرائع کو قدرتی یا مصنوعی میں بانٹیں۔', 'ٹارچ سے محفوظ طریقے سے سایہ دیکھیں۔', 'آواز ہلتی چیزوں سے بنتی ہے۔', 'حرارت مفید ہے مگر آگ خطرناک ہے۔'],
      questions: [
        { type: 'select', text: 'Which is a natural light source?', options: ['Sun', 'Bulb', 'Torch'], answer: 'Sun' },
        { type: 'select', text: 'Which is artificial light?', options: ['Bulb', 'Sun', 'Star'], answer: 'Bulb' },
        { type: 'radio', text: 'True or False: A shadow forms when light is blocked.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Which makes sound?', options: ['Drum', 'Silent stone', 'Empty shadow'], answer: 'Drum' },
        { type: 'text', text: 'Complete: The sun gives light and ___.', answer: 'heat' },
        { type: 'select', text: 'Which sound is loud?', options: ['Thunder', 'Whisper', 'Soft tap'], answer: 'Thunder' },
        { type: 'radio', text: 'True or False: Fire can give heat.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'A whisper is a ___ sound.', options: ['soft', 'loud', 'hot'], answer: 'soft' },
        { type: 'text', text: 'Complete: A torch gives ___.', answer: 'light' },
        { type: 'select', text: 'Which should children avoid touching?', options: ['Fire', 'Pencil', 'Book'], answer: 'Fire' }
      ],
      questionsUr: [
        { type: 'select', text: 'قدرتی روشنی کا ذریعہ کون سا ہے؟', options: ['سورج', 'بلب', 'ٹارچ'], answer: 'سورج' },
        { type: 'select', text: 'مصنوعی روشنی کون سی ہے؟', options: ['بلب', 'سورج', 'ستارہ'], answer: 'بلب' },
        { type: 'radio', text: 'درست یا غلط: روشنی رکنے سے سایہ بنتا ہے۔', options: ['درست', 'غلط'], answer: 'درست' },
        { type: 'select', text: 'آواز کون بناتا ہے؟', options: ['ڈھول', 'خاموش پتھر', 'خالی سایہ'], answer: 'ڈھول' },
        { type: 'text', text: 'خالی جگہ پر کریں: سورج روشنی اور ___ دیتا ہے۔', answer: 'حرارت' },
        { type: 'select', text: 'تیز آواز کون سی ہے؟', options: ['گرج', 'سرگوشی', 'ہلکی دستک'], answer: 'گرج' },
        { type: 'radio', text: 'درست یا غلط: آگ حرارت دیتی ہے۔', options: ['درست', 'غلط'], answer: 'درست' },
        { type: 'select', text: 'سرگوشی ___ آواز ہے۔', options: ['ہلکی', 'تیز', 'گرم'], answer: 'ہلکی' },
        { type: 'text', text: 'خالی جگہ پر کریں: ٹارچ ___ دیتی ہے۔', answer: 'روشنی' },
        { type: 'select', text: 'بچوں کو کس چیز کو چھونے سے بچنا چاہیے؟', options: ['آگ', 'پنسل', 'کتاب'], answer: 'آگ' }
      ]
    },
    'earth-and-environment': {
      title: 'Earth and Environment',
      titleUr: 'زمین اور ماحول',
      intro: 'Learn land, water, air, soil, natural resources, pollution, and ways to care for the environment.',
      introUr: 'زمین، پانی، ہوا، مٹی، قدرتی وسائل، آلودگی اور ماحول کی حفاظت سیکھیں۔',
      focus: ['Earth has land, water, and air', 'Soil helps plants grow', 'Natural resources include water, air, soil, plants, and minerals', 'Pollution makes land, water, or air dirty', 'We can care for the environment'],
      focusUr: ['زمین پر خشکی، پانی اور ہوا ہے', 'مٹی پودوں کو اگنے میں مدد دیتی ہے', 'قدرتی وسائل: پانی، ہوا، مٹی، پودے، معدنیات', 'آلودگی زمین، پانی یا ہوا کو گندا کرتی ہے', 'ہم ماحول کی دیکھ بھال کر سکتے ہیں'],
      examples: [['Soil', 'Plants grow in soil.'], ['Water resource', 'Rivers give water.'], ['Pollution', 'Smoke makes air dirty.'], ['Care', 'Plant trees and do not litter.']],
      examplesUr: [['مٹی', 'پودے مٹی میں اگتے ہیں۔'], ['پانی کا وسیلہ', 'دریا پانی دیتے ہیں۔'], ['آلودگی', 'دھواں ہوا کو گندا کرتا ہے۔'], ['دیکھ بھال', 'درخت لگائیں اور کچرا نہ پھینکیں۔']],
      quick: ['Match natural resources with their uses.', 'Pollution harms living things.', 'Use dustbins.', 'Save water and plant trees.'],
      quickUr: ['قدرتی وسائل کو ان کے استعمال سے ملائیں۔', 'آلودگی جانداروں کو نقصان دیتی ہے۔', 'کوڑے دان استعمال کریں۔', 'پانی بچائیں اور درخت لگائیں۔'],
      questions: [
        { type: 'select', text: 'Which helps plants grow?', options: ['Soil', 'Plastic', 'Smoke'], answer: 'Soil' },
        { type: 'select', text: 'Which is a natural resource?', options: ['Water', 'Toy car', 'Plastic wrapper'], answer: 'Water' },
        { type: 'radio', text: 'True or False: Smoke can pollute air.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Where should we throw litter?', options: ['Dustbin', 'River', 'Road'], answer: 'Dustbin' },
        { type: 'text', text: 'Complete: Dirty water is water ___.', answer: 'pollution' },
        { type: 'select', text: 'Which is good for the environment?', options: ['Planting trees', 'Wasting water', 'Throwing trash'], answer: 'Planting trees' },
        { type: 'radio', text: 'True or False: Soil is a natural resource.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Which can pollute land?', options: ['Litter', 'Flowers', 'Clean soil'], answer: 'Litter' },
        { type: 'text', text: 'Complete: Earth has land, water, and ___.', answer: 'air' },
        { type: 'select', text: 'Which action saves water?', options: ['Turn off tap', 'Leave tap open', 'Throw water away'], answer: 'Turn off tap' }
      ],
      questionsUr: [
        { type: 'select', text: 'پودوں کو اگنے میں کیا مدد دیتا ہے؟', options: ['مٹی', 'پلاسٹک', 'دھواں'], answer: 'مٹی' },
        { type: 'select', text: 'قدرتی وسیلہ کون سا ہے؟', options: ['پانی', 'کھلونا کار', 'پلاسٹک ریپر'], answer: 'پانی' },
        { type: 'radio', text: 'درست یا غلط: دھواں ہوا کو آلودہ کر سکتا ہے۔', options: ['درست', 'غلط'], answer: 'درست' },
        { type: 'select', text: 'کچرا کہاں ڈالنا چاہیے؟', options: ['کوڑے دان', 'دریا', 'سڑک'], answer: 'کوڑے دان' },
        { type: 'text', text: 'خالی جگہ پر کریں: گندا پانی پانی کی ___ ہے۔', answer: 'آلودگی' },
        { type: 'select', text: 'ماحول کے لیے اچھا کام کون سا ہے؟', options: ['درخت لگانا', 'پانی ضائع کرنا', 'کچرا پھینکنا'], answer: 'درخت لگانا' },
        { type: 'radio', text: 'درست یا غلط: مٹی قدرتی وسیلہ ہے۔', options: ['درست', 'غلط'], answer: 'درست' },
        { type: 'select', text: 'زمین کو کیا آلودہ کر سکتا ہے؟', options: ['کچرا', 'پھول', 'صاف مٹی'], answer: 'کچرا' },
        { type: 'text', text: 'خالی جگہ پر کریں: زمین پر خشکی، پانی اور ___ ہے۔', answer: 'ہوا' },
        { type: 'select', text: 'کون سا کام پانی بچاتا ہے؟', options: ['نل بند کرنا', 'نل کھلا چھوڑنا', 'پانی پھینکنا'], answer: 'نل بند کرنا' }
      ]
    }
  };

  const TOPICS_GRADE4 = {
    'scientific-enquiry': {
      title: 'Scientific Enquiry',
      titleUr: 'سائنسی تحقیق',
      intro: 'Learn how scientists observe, ask questions, predict, test, record results, and work safely.',
      introUr: 'مشاہدہ، سوال، پیش گوئی، تجربہ، نتائج لکھنا اور سائنسی کام میں حفاظت سیکھیں۔',
      focus: ['Science is a way to learn about the world', 'Observation uses senses and tools', 'Questions and predictions guide experiments', 'Simple experiments should be fair and safe', 'Results are recorded in words, numbers, or tables'],
      focusUr: ['سائنس دنیا کو سمجھنے کا طریقہ ہے', 'مشاہدہ حواس اور اوزار سے ہوتا ہے', 'سوال اور پیش گوئی تجربے کو رہنمائی دیتے ہیں', 'سادہ تجربے منصفانہ اور محفوظ ہونے چاہئیں', 'نتائج الفاظ، نمبروں یا جدول میں لکھے جاتے ہیں'],
      examples: [['Observation', 'The leaf is green and smooth.'], ['Prediction', 'I think the ice will melt in sunlight.'], ['Result', 'The ice melted after 10 minutes.'], ['Safety', 'Do not taste unknown materials.']],
      examplesUr: [['مشاہدہ', 'پتا سبز اور ہموار ہے۔'], ['پیش گوئی', 'میرا خیال ہے دھوپ میں برف پگھلے گی۔'], ['نتیجہ', 'برف 10 منٹ بعد پگھل گئی۔'], ['حفاظت', 'نامعلوم چیز نہ چکھیں۔']],
      quick: ['Write what you see, not only what you guess.', 'Change one thing at a time in a fair test.', 'Record results clearly.', 'Follow safety instructions.'],
      quickUr: ['جو دیکھیں وہ لکھیں، صرف اندازہ نہیں۔', 'منصفانہ تجربے میں ایک وقت میں ایک چیز بدلیں۔', 'نتائج صاف لکھیں۔', 'حفاظتی ہدایات پر عمل کریں۔'],
      questions: [
        { type: 'select', text: 'Which is an observation?', options: ['The water is warm', 'Maybe it is magic', 'I hope it rains'], answer: 'The water is warm' },
        { type: 'select', text: 'A prediction tells what you think will...', options: ['happen', 'eat', 'sleep'], answer: 'happen' },
        { type: 'radio', text: 'True or False: Safety is important during science activities.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Which tool can measure temperature?', options: ['Thermometer', 'Ruler', 'Spoon'], answer: 'Thermometer' },
        { type: 'text', text: 'Complete: Scientists record ___.', answer: 'results' },
        { type: 'select', text: 'Which is a science question?', options: ['Which soil holds more water?', 'Where is my shoe?', 'Do I like cake?'], answer: 'Which soil holds more water?' },
        { type: 'radio', text: 'True or False: A fair test changes many things at once.', options: ['True', 'False'], answer: 'False' },
        { type: 'select', text: 'What should you wear to protect your eyes?', options: ['Safety goggles', 'Sandals', 'Scarf only'], answer: 'Safety goggles' },
        { type: 'text', text: 'Complete: A guess based on thinking is a ___.', answer: 'prediction' },
        { type: 'select', text: 'Which should you NOT do in an experiment?', options: ['Taste unknown chemicals', 'Listen to teacher', 'Record results'], answer: 'Taste unknown chemicals' }
      ],
      questionsUr: [
        { type: 'select', text: 'مشاہدہ کون سا ہے؟', options: ['پانی گرم ہے', 'شاید یہ جادو ہے', 'کاش بارش ہو'], answer: 'پانی گرم ہے' },
        { type: 'select', text: 'پیش گوئی بتاتی ہے کہ آپ کے خیال میں کیا ___ گا۔', options: ['ہو', 'کھا', 'سو'], answer: 'ہو' },
        { type: 'radio', text: 'درست یا غلط: سائنسی سرگرمی میں حفاظت ضروری ہے۔', options: ['درست', 'غلط'], answer: 'درست' },
        { type: 'select', text: 'درجہ حرارت ناپنے کا آلہ کون سا ہے؟', options: ['تھرما میٹر', 'فٹہ', 'چمچ'], answer: 'تھرما میٹر' },
        { type: 'text', text: 'خالی جگہ پر کریں: سائنس دان ___ لکھتے ہیں۔', answer: 'نتائج' },
        { type: 'select', text: 'سائنسی سوال کون سا ہے؟', options: ['کون سی مٹی زیادہ پانی رکھتی ہے؟', 'میرا جوتا کہاں ہے؟', 'کیا مجھے کیک پسند ہے؟'], answer: 'کون سی مٹی زیادہ پانی رکھتی ہے؟' },
        { type: 'radio', text: 'درست یا غلط: منصفانہ تجربہ ایک ساتھ بہت چیزیں بدلتا ہے۔', options: ['درست', 'غلط'], answer: 'غلط' },
        { type: 'select', text: 'آنکھوں کی حفاظت کے لیے کیا پہنیں؟', options: ['حفاظتی چشمہ', 'چپل', 'صرف دوپٹہ'], answer: 'حفاظتی چشمہ' },
        { type: 'text', text: 'خالی جگہ پر کریں: سوچ پر مبنی اندازہ ___ ہے۔', answer: 'پیش گوئی' },
        { type: 'select', text: 'تجربے میں کیا نہیں کرنا چاہیے؟', options: ['نامعلوم کیمیکل چکھنا', 'استاد کی بات سننا', 'نتائج لکھنا'], answer: 'نامعلوم کیمیکل چکھنا' }
      ]
    },
    'living-things-and-their-environment': {
      title: 'Living Things and Their Environment',
      titleUr: 'جاندار اور ان کا ماحول',
      intro: 'Classify living things, study habitats, food chains, and adaptations.',
      introUr: 'جانداروں کی درجہ بندی، رہائش گاہیں، غذائی زنجیریں اور موافقت سیکھیں۔',
      focus: ['Living things grow, need food, water, and air', 'Animals and plants can be classified', 'Habitats provide shelter, food, and water', 'Food chains show who eats what', 'Adaptations help living things survive'],
      focusUr: ['جاندار بڑھتے اور خوراک، پانی، ہوا لیتے ہیں', 'جانوروں اور پودوں کی درجہ بندی ہو سکتی ہے', 'رہائش گاہ خوراک، پانی اور پناہ دیتی ہے', 'غذائی زنجیر بتاتی ہے کون کس کو کھاتا ہے', 'موافقت جاندار کو زندہ رہنے میں مدد دیتی ہے'],
      examples: [['Habitat', 'A pond is a habitat for frogs.'], ['Food chain', 'Grass -> grasshopper -> frog'], ['Adaptation', 'Fish have gills to breathe in water.'], ['Classification', 'Birds have feathers.']],
      examplesUr: [['رہائش گاہ', 'تالاب مینڈک کی رہائش گاہ ہے۔'], ['غذائی زنجیر', 'گھاس -> ٹڈا -> مینڈک'], ['موافقت', 'مچھلی پانی میں سانس کے لیے گلپھڑے رکھتی ہے۔'], ['درجہ بندی', 'پرندوں کے پر ہوتے ہیں۔']],
      quick: ['Start food chains with plants.', 'Match each animal to its habitat.', 'Look for body parts that help survival.', 'Classify by features.'],
      quickUr: ['غذائی زنجیر پودوں سے شروع کریں۔', 'ہر جانور کو اس کی رہائش سے ملائیں۔', 'ایسے جسمانی حصے دیکھیں جو بقا میں مدد دیں۔', 'خصوصیات سے درجہ بندی کریں۔'],
      questions: [
        { type: 'select', text: 'A place where an animal lives is its...', options: ['habitat', 'machine', 'shadow'], answer: 'habitat' },
        { type: 'select', text: 'Which food chain is correct?', options: ['Grass -> rabbit -> fox', 'Fox -> grass -> rabbit', 'Stone -> fox -> grass'], answer: 'Grass -> rabbit -> fox' },
        { type: 'radio', text: 'True or False: Plants often start food chains.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Fish have gills as an...', options: ['adaptation', 'instrument', 'weather'], answer: 'adaptation' },
        { type: 'text', text: 'Complete: A desert is a ___.', answer: 'habitat' },
        { type: 'select', text: 'Which animal lives in a pond?', options: ['Frog', 'Camel', 'Eagle'], answer: 'Frog' },
        { type: 'radio', text: 'True or False: Adaptations help living things survive.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Birds are often recognized by...', options: ['feathers', 'scales only', 'roots'], answer: 'feathers' },
        { type: 'text', text: 'Complete: Food chains show who eats ___.', answer: 'what' },
        { type: 'select', text: 'Which is a plant classification group?', options: ['Flowering plants', 'Running animals', 'Loud sounds'], answer: 'Flowering plants' }
      ],
      questionsUr: [
        { type: 'select', text: 'جانور جہاں رہتا ہے اسے کیا کہتے ہیں؟', options: ['رہائش گاہ', 'مشین', 'سایہ'], answer: 'رہائش گاہ' },
        { type: 'select', text: 'درست غذائی زنجیر کون سی ہے؟', options: ['گھاس -> خرگوش -> لومڑی', 'لومڑی -> گھاس -> خرگوش', 'پتھر -> لومڑی -> گھاس'], answer: 'گھاس -> خرگوش -> لومڑی' },
        { type: 'radio', text: 'درست یا غلط: غذائی زنجیر اکثر پودوں سے شروع ہوتی ہے۔', options: ['درست', 'غلط'], answer: 'درست' },
        { type: 'select', text: 'مچھلی کے گلپھڑے کیا ہیں؟', options: ['موافقت', 'آلہ', 'موسم'], answer: 'موافقت' },
        { type: 'text', text: 'خالی جگہ پر کریں: صحرا ایک ___ ہے۔', answer: 'رہائش گاہ' },
        { type: 'select', text: 'تالاب میں کون رہتا ہے؟', options: ['مینڈک', 'اونٹ', 'عقاب'], answer: 'مینڈک' },
        { type: 'radio', text: 'درست یا غلط: موافقت جانداروں کو زندہ رہنے میں مدد دیتی ہے۔', options: ['درست', 'غلط'], answer: 'درست' },
        { type: 'select', text: 'پرندے عموما کس سے پہچانے جاتے ہیں؟', options: ['پر', 'صرف چھلکے', 'جڑیں'], answer: 'پر' },
        { type: 'text', text: 'خالی جگہ پر کریں: غذائی زنجیر بتاتی ہے کون کیا ___ ہے۔', answer: 'کھاتا' },
        { type: 'select', text: 'پودوں کی درجہ بندی کا گروہ کون سا ہے؟', options: ['پھول دار پودے', 'دوڑتے جانور', 'تیز آوازیں'], answer: 'پھول دار پودے' }
      ]
    },
    'human-body-and-health': {
      title: 'Human Body and Health',
      titleUr: 'انسانی جسم اور صحت',
      intro: 'Learn digestion, breathing, healthy diet, communicable diseases, hygiene, and first aid basics.',
      introUr: 'ہضم، سانس، صحت مند غذا، متعدی بیماریاں، صفائی اور ابتدائی طبی امداد سیکھیں۔',
      focus: ['Digestive system introduction', 'Respiratory system introduction', 'Healthy diet and food groups', 'Communicable diseases can spread', 'Personal hygiene and first aid basics'],
      focusUr: ['نظام ہضم کا تعارف', 'نظام تنفس کا تعارف', 'صحت مند غذا اور غذائی گروہ', 'متعدی بیماریاں پھیل سکتی ہیں', 'ذاتی صفائی اور ابتدائی طبی امداد'],
      examples: [['Digestive system', 'Stomach helps digest food.'], ['Respiratory system', 'Lungs help us breathe.'], ['Hygiene', 'Wash hands to reduce germs.'], ['First aid', 'Clean a small cut and tell an adult.']],
      examplesUr: [['نظام ہضم', 'معدہ خوراک ہضم کرنے میں مدد دیتا ہے۔'], ['نظام تنفس', 'پھیپھڑے سانس لینے میں مدد دیتے ہیں۔'], ['صفائی', 'ہاتھ دھونے سے جراثیم کم ہوتے ہیں۔'], ['ابتدائی طبی امداد', 'چھوٹا زخم صاف کریں اور بڑے کو بتائیں۔']],
      quick: ['Follow food from mouth to stomach.', 'Breathing brings air into lungs.', 'Cover coughs to stop disease spread.', 'First aid is immediate help before proper treatment.'],
      quickUr: ['خوراک کا راستہ منہ سے معدے تک سمجھیں۔', 'سانس ہوا کو پھیپھڑوں میں لاتا ہے۔', 'کھانسی ڈھانپیں تاکہ بیماری نہ پھیلے۔', 'ابتدائی طبی امداد علاج سے پہلے فوری مدد ہے۔'],
      questions: [
        { type: 'select', text: 'Which organ helps digest food?', options: ['Stomach', 'Lung', 'Ear'], answer: 'Stomach' },
        { type: 'select', text: 'Which organ helps breathing?', options: ['Lungs', 'Teeth', 'Hair'], answer: 'Lungs' },
        { type: 'radio', text: 'True or False: Washing hands helps stop germs.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Which is a healthy diet choice?', options: ['Balanced meal', 'Only sweets', 'Only chips'], answer: 'Balanced meal' },
        { type: 'text', text: 'Complete: Diseases that spread are called ___ diseases.', answer: 'communicable' },
        { type: 'select', text: 'Where does digestion begin?', options: ['Mouth', 'Foot', 'Ear'], answer: 'Mouth' },
        { type: 'radio', text: 'True or False: First aid is quick help after an injury.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'What should you do for a small cut?', options: ['Clean it and tell an adult', 'Rub dirt on it', 'Hide it'], answer: 'Clean it and tell an adult' },
        { type: 'text', text: 'Complete: We breathe in ___.', answer: 'air' },
        { type: 'select', text: 'Which habit prevents disease?', options: ['Cover coughs', 'Share dirty cups', 'Never wash hands'], answer: 'Cover coughs' }
      ],
      questionsUr: [
        { type: 'select', text: 'خوراک ہضم کرنے میں کون مدد دیتا ہے؟', options: ['معدہ', 'پھیپھڑا', 'کان'], answer: 'معدہ' },
        { type: 'select', text: 'سانس لینے میں کون مدد دیتا ہے؟', options: ['پھیپھڑے', 'دانت', 'بال'], answer: 'پھیپھڑے' },
        { type: 'radio', text: 'درست یا غلط: ہاتھ دھونے سے جراثیم رکنے میں مدد ملتی ہے۔', options: ['درست', 'غلط'], answer: 'درست' },
        { type: 'select', text: 'صحت مند غذا کون سی ہے؟', options: ['متوازن کھانا', 'صرف مٹھائی', 'صرف چپس'], answer: 'متوازن کھانا' },
        { type: 'text', text: 'خالی جگہ پر کریں: پھیلنے والی بیماریاں ___ بیماریاں کہلاتی ہیں۔', answer: 'متعدی' },
        { type: 'select', text: 'ہضم کہاں شروع ہوتا ہے؟', options: ['منہ', 'پاؤں', 'کان'], answer: 'منہ' },
        { type: 'radio', text: 'درست یا غلط: ابتدائی طبی امداد چوٹ کے بعد فوری مدد ہے۔', options: ['درست', 'غلط'], answer: 'درست' },
        { type: 'select', text: 'چھوٹے زخم کے لیے کیا کریں؟', options: ['صاف کریں اور بڑے کو بتائیں', 'مٹی لگائیں', 'چھپائیں'], answer: 'صاف کریں اور بڑے کو بتائیں' },
        { type: 'text', text: 'خالی جگہ پر کریں: ہم ___ سانس میں لیتے ہیں۔', answer: 'ہوا' },
        { type: 'select', text: 'کون سی عادت بیماری روکتی ہے؟', options: ['کھانسی ڈھانپنا', 'گندے کپ بانٹنا', 'کبھی ہاتھ نہ دھونا'], answer: 'کھانسی ڈھانپنا' }
      ]
    },
    plants: {
      title: 'Plants',
      titleUr: 'پودے',
      intro: 'Study plant functions, photosynthesis, pollination, seed dispersal, and crops in Pakistan.',
      introUr: 'پودوں کے کام، ضیائی تالیف، زیرگی، بیجوں کا پھیلاؤ اور پاکستان کی فصلیں سیکھیں۔',
      focus: ['Roots, stem, leaves, flowers, fruits, and seeds', 'Photosynthesis introduction: plants make food using sunlight', 'Pollination introduction', 'Seed dispersal by wind, water, animals, or bursting', 'Important crops in Pakistan'],
      focusUr: ['جڑ، تنا، پتے، پھول، پھل اور بیج', 'ضیائی تالیف: پودے دھوپ سے خوراک بناتے ہیں', 'زیرگی کا تعارف', 'بیج ہوا، پانی، جانور یا پھٹنے سے پھیلتے ہیں', 'پاکستان کی اہم فصلیں'],
      examples: [['Photosynthesis', 'Leaves make food using sunlight.'], ['Pollination', 'Pollen moves from one flower to another.'], ['Wind dispersal', 'Light seeds can fly in wind.'], ['Crop', 'Wheat and rice are crops in Pakistan.']],
      examplesUr: [['ضیائی تالیف', 'پتے دھوپ سے خوراک بناتے ہیں۔'], ['زیرگی', 'زردانہ ایک پھول سے دوسرے تک جاتا ہے۔'], ['ہوا سے پھیلاؤ', 'ہلکے بیج ہوا میں اڑ سکتے ہیں۔'], ['فصل', 'گندم اور چاول پاکستان کی فصلیں ہیں۔']],
      quick: ['Leaves are food factories.', 'Flowers help make seeds.', 'Seeds travel in different ways.', 'Crops are plants grown for food or use.'],
      quickUr: ['پتے خوراک بنانے کی جگہ ہیں۔', 'پھول بیج بنانے میں مدد دیتے ہیں۔', 'بیج مختلف طریقوں سے سفر کرتے ہیں۔', 'فصلیں خوراک یا استعمال کے لیے اگائی جاتی ہیں۔'],
      questions: [
        { type: 'select', text: 'Plants make food mainly in their...', options: ['leaves', 'roots', 'seeds only'], answer: 'leaves' },
        { type: 'select', text: 'Photosynthesis uses sunlight to make...', options: ['food', 'plastic', 'sound'], answer: 'food' },
        { type: 'radio', text: 'True or False: Flowers can help plants make seeds.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Which is a seed dispersal method?', options: ['Wind', 'Telephone', 'Paint'], answer: 'Wind' },
        { type: 'text', text: 'Complete: Wheat is a ___.', answer: 'crop' },
        { type: 'select', text: 'Which crop is common in Pakistan?', options: ['Rice', 'Snow tree', 'Plastic plant'], answer: 'Rice' },
        { type: 'radio', text: 'True or False: Roots absorb water.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Pollen movement between flowers is called...', options: ['pollination', 'freezing', 'friction'], answer: 'pollination' },
        { type: 'text', text: 'Complete: Seed dispersal means seeds ___.', answer: 'spread', alt: ['move'] },
        { type: 'select', text: 'Which part supports the plant?', options: ['Stem', 'Flower only', 'Fruit only'], answer: 'Stem' }
      ],
      questionsUr: [
        { type: 'select', text: 'پودے خوراک زیادہ تر کہاں بناتے ہیں؟', options: ['پتے', 'جڑیں', 'صرف بیج'], answer: 'پتے' },
        { type: 'select', text: 'ضیائی تالیف دھوپ سے کیا بناتی ہے؟', options: ['خوراک', 'پلاسٹک', 'آواز'], answer: 'خوراک' },
        { type: 'radio', text: 'درست یا غلط: پھول بیج بنانے میں مدد دیتے ہیں۔', options: ['درست', 'غلط'], answer: 'درست' },
        { type: 'select', text: 'بیج پھیلانے کا طریقہ کون سا ہے؟', options: ['ہوا', 'ٹیلی فون', 'رنگ'], answer: 'ہوا' },
        { type: 'text', text: 'خالی جگہ پر کریں: گندم ایک ___ ہے۔', answer: 'فصل' },
        { type: 'select', text: 'پاکستان کی عام فصل کون سی ہے؟', options: ['چاول', 'برف کا درخت', 'پلاسٹک پودا'], answer: 'چاول' },
        { type: 'radio', text: 'درست یا غلط: جڑیں پانی جذب کرتی ہیں۔', options: ['درست', 'غلط'], answer: 'درست' },
        { type: 'select', text: 'پھولوں کے درمیان زردانہ جانا کیا کہلاتا ہے؟', options: ['زیرگی', 'جمنا', 'رگڑ'], answer: 'زیرگی' },
        { type: 'text', text: 'خالی جگہ پر کریں: بیجوں کا پھیلاؤ یعنی بیج ___ ہیں۔', answer: 'پھیلتے' },
        { type: 'select', text: 'پودے کو سہارا کون دیتا ہے؟', options: ['تنا', 'صرف پھول', 'صرف پھل'], answer: 'تنا' }
      ]
    },
    'matter-and-materials': {
      title: 'Matter and Materials',
      titleUr: 'مادہ اور مواد',
      intro: 'Learn states of matter, properties, changes of state, reversible and irreversible changes, and solubility.',
      introUr: 'مادہ کی حالتیں، خصوصیات، حالت کی تبدیلی، reversible/irreversible تبدیلیاں اور حل پذیری سیکھیں۔',
      focus: ['States of matter: solid, liquid, gas', 'Properties of solids, liquids, and gases', 'Changes of state: melting, freezing, evaporation, condensation', 'Reversible and irreversible changes', 'Soluble and insoluble materials'],
      focusUr: ['مادہ کی حالتیں: ٹھوس، مائع، گیس', 'ٹھوس، مائع اور گیس کی خصوصیات', 'حالت کی تبدیلی: پگھلنا، جمنا، بخارات، تکثیف', 'واپس ہونے والی اور نہ ہونے والی تبدیلیاں', 'حل پذیر اور غیر حل پذیر مواد'],
      examples: [['Melting', 'Ice changes to water.'], ['Freezing', 'Water changes to ice.'], ['Soluble', 'Salt dissolves in water.'], ['Irreversible', 'Burning paper cannot be easily reversed.']],
      examplesUr: [['پگھلنا', 'برف پانی بنتی ہے۔'], ['جمنا', 'پانی برف بنتا ہے۔'], ['حل پذیر', 'نمک پانی میں حل ہوتا ہے۔'], ['ناقابل واپسی', 'کاغذ جلنے کے بعد واپس نہیں آتا۔']],
      quick: ['Classify by shape and flow.', 'Some changes can be reversed.', 'Burning and cooking are often irreversible.', 'Test solubility by stirring safely.'],
      quickUr: ['شکل اور بہاؤ سے درجہ بندی کریں۔', 'کچھ تبدیلیاں واپس ہو سکتی ہیں۔', 'جلنا اور پکنا عموما واپس نہیں ہوتے۔', 'محفوظ طریقے سے ہلا کر حل پذیری دیکھیں۔'],
      questions: [
        { type: 'select', text: 'Which state has fixed shape?', options: ['Solid', 'Liquid', 'Gas'], answer: 'Solid' },
        { type: 'select', text: 'Which material dissolves in water?', options: ['Salt', 'Sand', 'Stone'], answer: 'Salt' },
        { type: 'radio', text: 'True or False: Melting ice is reversible.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Water vapor cooling into drops is...', options: ['condensation', 'burning', 'friction'], answer: 'condensation' },
        { type: 'text', text: 'Complete: Liquid water becomes gas by ___.', answer: 'evaporation' },
        { type: 'select', text: 'Which is irreversible?', options: ['Burning paper', 'Melting ice', 'Freezing water'], answer: 'Burning paper' },
        { type: 'radio', text: 'True or False: Sand is insoluble in water.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Which state spreads to fill space?', options: ['Gas', 'Solid', 'Ice'], answer: 'Gas' },
        { type: 'text', text: 'Complete: Water freezes into ___.', answer: 'ice' },
        { type: 'select', text: 'Which is a liquid?', options: ['Milk', 'Brick', 'Air'], answer: 'Milk' }
      ],
      questionsUr: [
        { type: 'select', text: 'کون سی حالت کی شکل مقرر ہوتی ہے؟', options: ['ٹھوس', 'مائع', 'گیس'], answer: 'ٹھوس' },
        { type: 'select', text: 'کون سا مواد پانی میں حل ہوتا ہے؟', options: ['نمک', 'ریت', 'پتھر'], answer: 'نمک' },
        { type: 'radio', text: 'درست یا غلط: برف کا پگھلنا واپس ہو سکتا ہے۔', options: ['درست', 'غلط'], answer: 'درست' },
        { type: 'select', text: 'بھاپ ٹھنڈی ہو کر قطرے بنے تو اسے کیا کہتے ہیں؟', options: ['تکثیف', 'جلنا', 'رگڑ'], answer: 'تکثیف' },
        { type: 'text', text: 'خالی جگہ پر کریں: مائع پانی گیس ___ سے بنتا ہے۔', answer: 'بخارات' },
        { type: 'select', text: 'ناقابل واپسی تبدیلی کون سی ہے؟', options: ['کاغذ جلنا', 'برف پگھلنا', 'پانی جمنا'], answer: 'کاغذ جلنا' },
        { type: 'radio', text: 'درست یا غلط: ریت پانی میں حل نہیں ہوتی۔', options: ['درست', 'غلط'], answer: 'درست' },
        { type: 'select', text: 'کون سی حالت جگہ بھرنے کو پھیلتی ہے؟', options: ['گیس', 'ٹھوس', 'برف'], answer: 'گیس' },
        { type: 'text', text: 'خالی جگہ پر کریں: پانی جم کر ___ بنتا ہے۔', answer: 'برف' },
        { type: 'select', text: 'مائع کون سا ہے؟', options: ['دودھ', 'اینٹ', 'ہوا'], answer: 'دودھ' }
      ]
    },
    'force-and-machines': {
      title: 'Force and Machines',
      titleUr: 'قوت اور مشینیں',
      intro: 'Learn force, push, pull, friction, gravity, simple machines, and daily uses of machines.',
      introUr: 'قوت، دھکا، کھینچنا، رگڑ، کشش ثقل، سادہ مشینیں اور روزمرہ استعمال سیکھیں۔',
      focus: ['Force can change motion or shape', 'Push and pull are forces', 'Friction slows movement', 'Gravity pulls objects toward Earth', 'Simple machines make work easier'],
      focusUr: ['قوت حرکت یا شکل بدل سکتی ہے', 'دھکا اور کھینچنا قوتیں ہیں', 'رگڑ حرکت کو سست کرتی ہے', 'کشش ثقل چیزوں کو زمین کی طرف کھینچتی ہے', 'سادہ مشینیں کام آسان کرتی ہیں'],
      examples: [['Friction', 'Rough ground slows a rolling ball.'], ['Gravity', 'A dropped pencil falls down.'], ['Lever', 'A seesaw is a lever.'], ['Pulley', 'A pulley helps lift a bucket.']],
      examplesUr: [['رگڑ', 'کھردری زمین گیند کو سست کرتی ہے۔'], ['کشش ثقل', 'گرائی گئی پنسل نیچے گرتی ہے۔'], ['لیور', 'سی سا لیور ہے۔'], ['چرخی', 'چرخی بالٹی اٹھانے میں مدد دیتی ہے۔']],
      quick: ['Identify push or pull first.', 'Friction is greater on rough surfaces.', 'Gravity pulls downward.', 'Match machines with their jobs.'],
      quickUr: ['پہلے دھکا یا کھینچنا پہچانیں۔', 'کھردری سطح پر رگڑ زیادہ ہوتی ہے۔', 'کشش ثقل نیچے کھینچتی ہے۔', 'مشینوں کو ان کے کام سے ملائیں۔'],
      questions: [
        { type: 'select', text: 'Which force pulls objects toward Earth?', options: ['Gravity', 'Light', 'Sound'], answer: 'Gravity' },
        { type: 'select', text: 'What slows a sliding object?', options: ['Friction', 'Color', 'Taste'], answer: 'Friction' },
        { type: 'radio', text: 'True or False: Push and pull are forces.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Which is a simple machine?', options: ['Lever', 'Cloud', 'Water drop'], answer: 'Lever' },
        { type: 'text', text: 'Complete: A pulley helps ___ objects.', answer: 'lift' },
        { type: 'select', text: 'Which surface has more friction?', options: ['Rough surface', 'Smooth ice', 'Polished glass'], answer: 'Rough surface' },
        { type: 'radio', text: 'True or False: Machines can make work easier.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'A wheelbarrow uses a...', options: ['wheel', 'star', 'leaf'], answer: 'wheel' },
        { type: 'text', text: 'Complete: A force can change an object’s ___.', answer: 'motion', alt: ['shape'] },
        { type: 'select', text: 'Opening a door can need a...', options: ['push or pull', 'shadow', 'season'], answer: 'push or pull' }
      ],
      questionsUr: [
        { type: 'select', text: 'چیزوں کو زمین کی طرف کون کھینچتا ہے؟', options: ['کشش ثقل', 'روشنی', 'آواز'], answer: 'کشش ثقل' },
        { type: 'select', text: 'پھسلتی چیز کو کیا سست کرتا ہے؟', options: ['رگڑ', 'رنگ', 'ذائقہ'], answer: 'رگڑ' },
        { type: 'radio', text: 'درست یا غلط: دھکا اور کھینچنا قوتیں ہیں۔', options: ['درست', 'غلط'], answer: 'درست' },
        { type: 'select', text: 'سادہ مشین کون سی ہے؟', options: ['لیور', 'بادل', 'پانی کا قطرہ'], answer: 'لیور' },
        { type: 'text', text: 'خالی جگہ پر کریں: چرخی چیزیں ___ میں مدد دیتی ہے۔', answer: 'اٹھانے' },
        { type: 'select', text: 'کس سطح پر رگڑ زیادہ ہے؟', options: ['کھردری سطح', 'ہموار برف', 'چمکدار شیشہ'], answer: 'کھردری سطح' },
        { type: 'radio', text: 'درست یا غلط: مشینیں کام آسان کر سکتی ہیں۔', options: ['درست', 'غلط'], answer: 'درست' },
        { type: 'select', text: 'وہیل بیرو میں کیا استعمال ہوتا ہے؟', options: ['پہیہ', 'ستارہ', 'پتا'], answer: 'پہیہ' },
        { type: 'text', text: 'خالی جگہ پر کریں: قوت چیز کی ___ بدل سکتی ہے۔', answer: 'حرکت', alt: ['شکل'] },
        { type: 'select', text: 'دروازہ کھولنے کے لیے کیا چاہیے؟', options: ['دھکا یا کھینچنا', 'سایہ', 'موسم'], answer: 'دھکا یا کھینچنا' }
      ]
    },
    'light-heat-and-sound': {
      title: 'Light, Heat, and Sound',
      titleUr: 'روشنی، حرارت اور آواز',
      intro: 'Study light sources, reflection, transparent/translucent/opaque materials, heat transfer, sound, and vibration.',
      introUr: 'روشنی کے ذرائع، انعکاس، شفاف/نیم شفاف/غیر شفاف مواد، حرارت کی منتقلی، آواز اور ارتعاش سیکھیں۔',
      focus: ['Sources of light', 'Reflection introduction', 'Transparent, translucent, and opaque materials', 'Heat transfer introduction', 'Sound is made by vibration'],
      focusUr: ['روشنی کے ذرائع', 'انعکاس کا تعارف', 'شفاف، نیم شفاف اور غیر شفاف مواد', 'حرارت کی منتقلی کا تعارف', 'آواز ارتعاش سے بنتی ہے'],
      examples: [['Reflection', 'A mirror reflects light.'], ['Transparent', 'Clear glass lets light pass.'], ['Translucent', 'Frosted glass lets some light pass.'], ['Vibration', 'A drum skin vibrates to make sound.']],
      examplesUr: [['انعکاس', 'آئینہ روشنی منعکس کرتا ہے۔'], ['شفاف', 'صاف شیشہ روشنی گزار دیتا ہے۔'], ['نیم شفاف', 'دھندلا شیشہ کچھ روشنی گزرنے دیتا ہے۔'], ['ارتعاش', 'ڈھول کی جھلی ہل کر آواز بناتی ہے۔']],
      quick: ['Light bounces during reflection.', 'Classify materials by how much light passes.', 'Heat moves from warmer to cooler objects.', 'Feel sound vibrations safely.'],
      quickUr: ['انعکاس میں روشنی ٹکراتی اور واپس آتی ہے۔', 'مواد کو روشنی گزرنے کے حساب سے بانٹیں۔', 'حرارت گرم سے ٹھنڈی چیز کی طرف جاتی ہے۔', 'آواز کی ارتعاش محفوظ طریقے سے محسوس کریں۔'],
      questions: [
        { type: 'select', text: 'Which object reflects light well?', options: ['Mirror', 'Black cloth', 'Soil'], answer: 'Mirror' },
        { type: 'select', text: 'Clear glass is...', options: ['transparent', 'opaque', 'magnetic'], answer: 'transparent' },
        { type: 'radio', text: 'True or False: Sound is made by vibration.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Which material is opaque?', options: ['Wood', 'Clear glass', 'Clean water'], answer: 'Wood' },
        { type: 'text', text: 'Complete: Heat moves from warmer to ___ objects.', answer: 'cooler' },
        { type: 'select', text: 'Frosted glass is...', options: ['translucent', 'fully transparent', 'a gas'], answer: 'translucent' },
        { type: 'radio', text: 'True or False: The sun is a source of light and heat.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Which makes sound by vibrating?', options: ['Guitar string', 'Silent stone', 'Shadow'], answer: 'Guitar string' },
        { type: 'text', text: 'Complete: A torch is a source of ___.', answer: 'light' },
        { type: 'select', text: 'Which blocks most light?', options: ['Opaque material', 'Transparent glass', 'Air'], answer: 'Opaque material' }
      ],
      questionsUr: [
        { type: 'select', text: 'کون سی چیز روشنی اچھی منعکس کرتی ہے؟', options: ['آئینہ', 'کالا کپڑا', 'مٹی'], answer: 'آئینہ' },
        { type: 'select', text: 'صاف شیشہ کیا ہے؟', options: ['شفاف', 'غیر شفاف', 'مقناطیسی'], answer: 'شفاف' },
        { type: 'radio', text: 'درست یا غلط: آواز ارتعاش سے بنتی ہے۔', options: ['درست', 'غلط'], answer: 'درست' },
        { type: 'select', text: 'غیر شفاف مواد کون سا ہے؟', options: ['لکڑی', 'صاف شیشہ', 'صاف پانی'], answer: 'لکڑی' },
        { type: 'text', text: 'خالی جگہ پر کریں: حرارت گرم چیز سے ___ چیز کی طرف جاتی ہے۔', answer: 'ٹھنڈی' },
        { type: 'select', text: 'دھندلا شیشہ کیا ہے؟', options: ['نیم شفاف', 'مکمل شفاف', 'گیس'], answer: 'نیم شفاف' },
        { type: 'radio', text: 'درست یا غلط: سورج روشنی اور حرارت کا ذریعہ ہے۔', options: ['درست', 'غلط'], answer: 'درست' },
        { type: 'select', text: 'کون ارتعاش سے آواز بناتا ہے؟', options: ['گٹار کی تار', 'خاموش پتھر', 'سایہ'], answer: 'گٹار کی تار' },
        { type: 'text', text: 'خالی جگہ پر کریں: ٹارچ ___ کا ذریعہ ہے۔', answer: 'روشنی' },
        { type: 'select', text: 'زیادہ روشنی کون روکتا ہے؟', options: ['غیر شفاف مواد', 'شفاف شیشہ', 'ہوا'], answer: 'غیر شفاف مواد' }
      ]
    },
    'earth-and-space': {
      title: 'Earth and Space',
      titleUr: 'زمین اور خلا',
      intro: 'Learn Earth, sun, moon, rotation, day/night, revolution, seasons, soil, rocks, and the water cycle.',
      introUr: 'زمین، سورج، چاند، گردش، دن رات، انقلاب، موسم، مٹی، چٹانیں اور آبی چکر سیکھیں۔',
      focus: ['Earth, sun, and moon', 'Earth rotation causes day and night', 'Earth revolution around the sun relates to seasons', 'Soil and rocks', 'Water cycle introduction'],
      focusUr: ['زمین، سورج اور چاند', 'زمین کی گردش دن رات بناتی ہے', 'زمین کا سورج کے گرد چکر موسموں سے تعلق رکھتا ہے', 'مٹی اور چٹانیں', 'آبی چکر کا تعارف'],
      examples: [['Rotation', 'Earth spins on its axis.'], ['Day/night', 'The side facing the sun has day.'], ['Water cycle', 'Evaporation, condensation, precipitation.'], ['Rock', 'Rocks are hard natural materials.']],
      examplesUr: [['گردش', 'زمین اپنے محور پر گھومتی ہے۔'], ['دن/رات', 'سورج کی طرف والا حصہ دن ہوتا ہے۔'], ['آبی چکر', 'بخارات، تکثیف، بارش۔'], ['چٹان', 'چٹان سخت قدرتی مواد ہے۔']],
      quick: ['Rotation means spinning.', 'Revolution means moving around another object.', 'Water cycle repeats.', 'Observe soil color and texture.'],
      quickUr: ['گردش کا مطلب گھومنا ہے۔', 'انقلاب کا مطلب کسی چیز کے گرد چکر ہے۔', 'آبی چکر بار بار ہوتا ہے۔', 'مٹی کا رنگ اور بناوٹ دیکھیں۔'],
      questions: [
        { type: 'select', text: 'Earth spinning on its axis is called...', options: ['rotation', 'melting', 'pollution'], answer: 'rotation' },
        { type: 'select', text: 'What causes day and night?', options: ['Earth rotation', 'Burning paper', 'Friction'], answer: 'Earth rotation' },
        { type: 'radio', text: 'True or False: Earth moves around the sun.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Rain is part of the...', options: ['water cycle', 'food chain', 'digestive system'], answer: 'water cycle' },
        { type: 'text', text: 'Complete: Water vapor cooling into clouds is ___.', answer: 'condensation' },
        { type: 'select', text: 'Which is a natural hard material?', options: ['Rock', 'Plastic toy', 'Paper bag'], answer: 'Rock' },
        { type: 'radio', text: 'True or False: The moon gives its own strong light like the sun.', options: ['True', 'False'], answer: 'False' },
        { type: 'select', text: 'Water changing to vapor is...', options: ['evaporation', 'freezing only', 'reflection'], answer: 'evaporation' },
        { type: 'text', text: 'Complete: Soil helps plants ___.', answer: 'grow' },
        { type: 'select', text: 'Earth’s revolution is linked with...', options: ['seasons', 'teeth', 'sound only'], answer: 'seasons' }
      ],
      questionsUr: [
        { type: 'select', text: 'زمین کا محور پر گھومنا کیا کہلاتا ہے؟', options: ['گردش', 'پگھلنا', 'آلودگی'], answer: 'گردش' },
        { type: 'select', text: 'دن اور رات کس سے بنتے ہیں؟', options: ['زمین کی گردش', 'کاغذ جلنا', 'رگڑ'], answer: 'زمین کی گردش' },
        { type: 'radio', text: 'درست یا غلط: زمین سورج کے گرد حرکت کرتی ہے۔', options: ['درست', 'غلط'], answer: 'درست' },
        { type: 'select', text: 'بارش کس کا حصہ ہے؟', options: ['آبی چکر', 'غذائی زنجیر', 'نظام ہضم'], answer: 'آبی چکر' },
        { type: 'text', text: 'خالی جگہ پر کریں: بھاپ ٹھنڈی ہو کر بادل بنے تو ___ ہے۔', answer: 'تکثیف' },
        { type: 'select', text: 'قدرتی سخت مواد کون سا ہے؟', options: ['چٹان', 'پلاسٹک کھلونا', 'کاغذی تھیلا'], answer: 'چٹان' },
        { type: 'radio', text: 'درست یا غلط: چاند سورج کی طرح اپنی تیز روشنی دیتا ہے۔', options: ['درست', 'غلط'], answer: 'غلط' },
        { type: 'select', text: 'پانی کا بھاپ بننا کیا ہے؟', options: ['بخارات', 'صرف جمنا', 'انعکاس'], answer: 'بخارات' },
        { type: 'text', text: 'خالی جگہ پر کریں: مٹی پودوں کو ___ میں مدد دیتی ہے۔', answer: 'اگنے' },
        { type: 'select', text: 'زمین کا سورج کے گرد چکر کس سے متعلق ہے؟', options: ['موسم', 'دانت', 'صرف آواز'], answer: 'موسم' }
      ]
    },
    environment: {
      title: 'Environment',
      titleUr: 'ماحول',
      intro: 'Learn natural resources, pollution, water conservation, tree planting, and waste management.',
      introUr: 'قدرتی وسائل، آلودگی، پانی بچانا، درخت لگانا اور کچرے کا انتظام سیکھیں۔',
      focus: ['Natural resources include air, water, soil, forests, and minerals', 'Pollution harms air, water, and land', 'Water conservation saves clean water', 'Planting trees helps the environment', 'Waste management includes reducing, reusing, and recycling'],
      focusUr: ['قدرتی وسائل: ہوا، پانی، مٹی، جنگلات، معدنیات', 'آلودگی ہوا، پانی اور زمین کو نقصان دیتی ہے', 'پانی بچانا صاف پانی محفوظ کرتا ہے', 'درخت لگانا ماحول کی مدد کرتا ہے', 'کچرے کا انتظام: کم استعمال، دوبارہ استعمال، ری سائیکل'],
      examples: [['Conservation', 'Turn off the tap while brushing.'], ['Pollution', 'Trash in rivers pollutes water.'], ['Reuse', 'Use a jar again for storage.'], ['Recycle', 'Recycle paper when possible.']],
      examplesUr: [['بچت', 'دانت صاف کرتے وقت نل بند کریں۔'], ['آلودگی', 'دریا میں کچرا پانی آلودہ کرتا ہے۔'], ['دوبارہ استعمال', 'جار کو دوبارہ ذخیرہ کے لیے استعمال کریں۔'], ['ری سائیکل', 'ممکن ہو تو کاغذ ری سائیکل کریں۔']],
      quick: ['Name the resource being used.', 'Match pollution with its effect.', 'Save water daily.', 'Sort waste into reuse or recycle where possible.'],
      quickUr: ['استعمال ہونے والے وسیلے کا نام لیں۔', 'آلودگی کو اس کے اثر سے ملائیں۔', 'روز پانی بچائیں۔', 'کچرے کو ممکن ہو تو دوبارہ استعمال یا ری سائیکل میں بانٹیں۔'],
      questions: [
        { type: 'select', text: 'Which is a natural resource?', options: ['Water', 'Plastic wrapper', 'Broken toy'], answer: 'Water' },
        { type: 'select', text: 'Which action saves water?', options: ['Turn off tap', 'Leave tap running', 'Waste water'], answer: 'Turn off tap' },
        { type: 'radio', text: 'True or False: Planting trees helps the environment.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Trash in a river causes...', options: ['water pollution', 'healthy water', 'more fish food only'], answer: 'water pollution' },
        { type: 'text', text: 'Complete: Use again means ___.', answer: 'reuse' },
        { type: 'select', text: 'Which is waste management?', options: ['Recycle paper', 'Throw trash on road', 'Waste water'], answer: 'Recycle paper' },
        { type: 'radio', text: 'True or False: Smoke can pollute air.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Which resource do forests provide?', options: ['Trees', 'Plastic', 'Smoke'], answer: 'Trees' },
        { type: 'text', text: 'Complete: Reduce, reuse, and ___.', answer: 'recycle' },
        { type: 'select', text: 'Which is a clean environment habit?', options: ['Use dustbin', 'Burn plastic', 'Litter in park'], answer: 'Use dustbin' }
      ],
      questionsUr: [
        { type: 'select', text: 'قدرتی وسیلہ کون سا ہے؟', options: ['پانی', 'پلاسٹک ریپر', 'ٹوٹا کھلونا'], answer: 'پانی' },
        { type: 'select', text: 'کون سا کام پانی بچاتا ہے؟', options: ['نل بند کرنا', 'نل کھلا چھوڑنا', 'پانی ضائع کرنا'], answer: 'نل بند کرنا' },
        { type: 'radio', text: 'درست یا غلط: درخت لگانا ماحول کی مدد کرتا ہے۔', options: ['درست', 'غلط'], answer: 'درست' },
        { type: 'select', text: 'دریا میں کچرا کس کا سبب بنتا ہے؟', options: ['پانی کی آلودگی', 'صحت مند پانی', 'صرف مچھلی کی خوراک'], answer: 'پانی کی آلودگی' },
        { type: 'text', text: 'خالی جگہ پر کریں: دوبارہ استعمال کو ___ کہتے ہیں۔', answer: 'reuse', alt: ['دوبارہ استعمال'] },
        { type: 'select', text: 'کچرے کا انتظام کون سا ہے؟', options: ['کاغذ ری سائیکل کرنا', 'سڑک پر کچرا پھینکنا', 'پانی ضائع کرنا'], answer: 'کاغذ ری سائیکل کرنا' },
        { type: 'radio', text: 'درست یا غلط: دھواں ہوا کو آلودہ کر سکتا ہے۔', options: ['درست', 'غلط'], answer: 'درست' },
        { type: 'select', text: 'جنگلات کون سا وسیلہ دیتے ہیں؟', options: ['درخت', 'پلاسٹک', 'دھواں'], answer: 'درخت' },
        { type: 'text', text: 'خالی جگہ پر کریں: Reduce, reuse اور ___.', answer: 'recycle', alt: ['ری سائیکل'] },
        { type: 'select', text: 'صاف ماحول کی عادت کون سی ہے؟', options: ['کوڑے دان استعمال کرنا', 'پلاسٹک جلانا', 'پارک میں کچرا پھینکنا'], answer: 'کوڑے دان استعمال کرنا' }
      ]
    }
  };

  const TOPICS_GRADE5 = {
    'scientific-enquiry-and-skills': {
      title: 'Scientific Enquiry and Skills',
      titleUr: 'سائنسی تحقیق اور مہارتیں',
      intro: 'Practice observation, measurement, fair testing, variables, data recording, conclusions, and science safety.',
      introUr: 'مشاہدہ، پیمائش، منصفانہ تجربہ، متغیرات، ڈیٹا لکھنا، نتیجہ نکالنا اور حفاظت سیکھیں۔',
      focus: ['Observation and measurement', 'Fair testing and variables', 'Recording data in tables', 'Drawing conclusions from evidence', 'Science safety rules'],
      focusUr: ['مشاہدہ اور پیمائش', 'منصفانہ تجربہ اور متغیرات', 'جدول میں ڈیٹا لکھنا', 'ثبوت سے نتیجہ نکالنا', 'سائنسی حفاظت کے اصول'],
      examples: [['Fair test', 'Change only the amount of water for each plant.'], ['Variable', 'The thing you change in an experiment.'], ['Data', 'Record height in centimeters.'], ['Conclusion', 'Use results to answer the question.']],
      examplesUr: [['منصفانہ تجربہ', 'ہر پودے کے لیے صرف پانی کی مقدار بدلیں۔'], ['متغیر', 'تجربے میں بدلی جانے والی چیز۔'], ['ڈیٹا', 'لمبائی سینٹی میٹر میں لکھیں۔'], ['نتیجہ', 'نتائج سے سوال کا جواب دیں۔']],
      quick: ['Measure carefully with correct units.', 'Change one variable at a time.', 'Record data neatly.', 'Wear safety equipment when needed.'],
      quickUr: ['درست اکائی کے ساتھ احتیاط سے پیمائش کریں۔', 'ایک وقت میں ایک متغیر بدلیں۔', 'ڈیٹا صاف لکھیں۔', 'ضرورت پر حفاظتی سامان پہنیں۔'],
      questions: [
        { type: 'select', text: 'In a fair test, how many variables should you change?', options: ['One', 'Many', 'None ever'], answer: 'One' },
        { type: 'select', text: 'Which tool measures length?', options: ['Ruler', 'Clock', 'Thermometer'], answer: 'Ruler' },
        { type: 'radio', text: 'True or False: Data can be recorded in a table.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'The thing you change is called a...', options: ['variable', 'conclusion', 'shadow'], answer: 'variable' },
        { type: 'text', text: 'Complete: A conclusion is based on ___.', answer: 'evidence', alt: ['results'] },
        { type: 'select', text: 'Which is a safe action?', options: ['Wear goggles', 'Taste chemicals', 'Run in lab'], answer: 'Wear goggles' },
        { type: 'radio', text: 'True or False: Observations should be clear and honest.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Which unit can measure mass?', options: ['grams', 'liters only', 'minutes only'], answer: 'grams' },
        { type: 'text', text: 'Complete: A fair test is also called a ___ test.', answer: 'controlled' },
        { type: 'select', text: 'What comes after recording results?', options: ['Draw a conclusion', 'Hide the data', 'Change all answers'], answer: 'Draw a conclusion' }
      ],
      questionsUr: [
        { type: 'select', text: 'منصفانہ تجربے میں کتنے متغیر بدلنے چاہئیں؟', options: ['ایک', 'بہت سے', 'کبھی نہیں'], answer: 'ایک' },
        { type: 'select', text: 'لمبائی ناپنے کا آلہ کون سا ہے؟', options: ['فٹہ', 'گھڑی', 'تھرما میٹر'], answer: 'فٹہ' },
        { type: 'radio', text: 'درست یا غلط: ڈیٹا جدول میں لکھا جا سکتا ہے۔', options: ['درست', 'غلط'], answer: 'درست' },
        { type: 'select', text: 'بدلی جانے والی چیز کیا کہلاتی ہے؟', options: ['متغیر', 'نتیجہ', 'سایہ'], answer: 'متغیر' },
        { type: 'text', text: 'خالی جگہ پر کریں: نتیجہ ___ پر مبنی ہوتا ہے۔', answer: 'ثبوت', alt: ['نتائج'] },
        { type: 'select', text: 'محفوظ عمل کون سا ہے؟', options: ['حفاظتی چشمہ پہننا', 'کیمیکل چکھنا', 'لیب میں دوڑنا'], answer: 'حفاظتی چشمہ پہننا' },
        { type: 'radio', text: 'درست یا غلط: مشاہدات صاف اور ایماندار ہونے چاہئیں۔', options: ['درست', 'غلط'], answer: 'درست' },
        { type: 'select', text: 'وزن/کمیت کس اکائی میں ناپ سکتے ہیں؟', options: ['گرام', 'صرف لیٹر', 'صرف منٹ'], answer: 'گرام' },
        { type: 'text', text: 'خالی جگہ پر کریں: منصفانہ تجربہ ___ تجربہ بھی کہلاتا ہے۔', answer: 'کنٹرولڈ' },
        { type: 'select', text: 'نتائج لکھنے کے بعد کیا کرتے ہیں؟', options: ['نتیجہ نکالتے ہیں', 'ڈیٹا چھپاتے ہیں', 'سب جواب بدلتے ہیں'], answer: 'نتیجہ نکالتے ہیں' }
      ]
    },
    'classification-of-living-organisms': {
      title: 'Classification of Living Organisms',
      titleUr: 'جانداروں کی درجہ بندی',
      intro: 'Learn why living organisms are classified, vertebrates, invertebrates, plant groups, and microorganisms.',
      introUr: 'جانداروں کی درجہ بندی، ریڑھ والے/بے ریڑھ جانور، پودوں کے گروہ اور خرد جاندار سیکھیں۔',
      focus: ['Classification helps organize living things', 'Vertebrates have backbones', 'Invertebrates do not have backbones', 'Plant groups can be compared by seeds and flowers', 'Microorganisms can be useful or harmful'],
      focusUr: ['درجہ بندی جانداروں کو منظم کرتی ہے', 'ریڑھ والے جانوروں میں backbone ہوتی ہے', 'بے ریڑھ جانوروں میں backbone نہیں ہوتی', 'پودوں کو بیج اور پھول سے بانٹا جا سکتا ہے', 'خرد جاندار مفید یا نقصان دہ ہو سکتے ہیں'],
      examples: [['Vertebrate', 'fish, bird, cat'], ['Invertebrate', 'worm, butterfly, snail'], ['Microorganism', 'bacteria and fungi'], ['Useful microorganism', 'Some help make yogurt.']],
      examplesUr: [['ریڑھ والا', 'مچھلی، پرندہ، بلی'], ['بے ریڑھ', 'کیڑا، تتلی، گھونگا'], ['خرد جاندار', 'بیکٹیریا اور فنجائی'], ['مفید خرد جاندار', 'کچھ دہی بنانے میں مدد دیتے ہیں۔']],
      quick: ['Look for backbone first.', 'Use common features to group organisms.', 'Microorganisms are too small to see clearly with eyes.', 'Some microorganisms cause disease.'],
      quickUr: ['پہلے ریڑھ کی ہڈی دیکھیں۔', 'مشترک خصوصیات سے گروہ بنائیں۔', 'خرد جاندار آنکھ سے صاف نظر نہیں آتے۔', 'کچھ خرد جاندار بیماری بناتے ہیں۔'],
      questions: [
        { type: 'select', text: 'An animal with a backbone is a...', options: ['vertebrate', 'microorganism', 'moss'], answer: 'vertebrate' },
        { type: 'select', text: 'Which is an invertebrate?', options: ['Butterfly', 'Cat', 'Fish'], answer: 'Butterfly' },
        { type: 'radio', text: 'True or False: Classification groups living things by features.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Which can be a microorganism?', options: ['Bacteria', 'Horse', 'Tree'], answer: 'Bacteria' },
        { type: 'text', text: 'Complete: Vertebrates have a ___.', answer: 'backbone' },
        { type: 'select', text: 'Which organism can help make yogurt?', options: ['Useful bacteria', 'Lion', 'Rose'], answer: 'Useful bacteria' },
        { type: 'radio', text: 'True or False: All microorganisms are harmful.', options: ['True', 'False'], answer: 'False' },
        { type: 'select', text: 'Which is a vertebrate?', options: ['Frog', 'Worm', 'Snail'], answer: 'Frog' },
        { type: 'text', text: 'Complete: Plants can be grouped by seeds and ___.', answer: 'flowers' },
        { type: 'select', text: 'Why classify organisms?', options: ['To study them easily', 'To confuse learners', 'To make them disappear'], answer: 'To study them easily' }
      ],
      questionsUr: [
        { type: 'select', text: 'ریڑھ کی ہڈی والا جانور کیا کہلاتا ہے؟', options: ['vertebrate', 'خرد جاندار', 'کائی'], answer: 'vertebrate' },
        { type: 'select', text: 'بے ریڑھ جانور کون سا ہے؟', options: ['تتلی', 'بلی', 'مچھلی'], answer: 'تتلی' },
        { type: 'radio', text: 'درست یا غلط: درجہ بندی خصوصیات کے مطابق گروہ بناتی ہے۔', options: ['درست', 'غلط'], answer: 'درست' },
        { type: 'select', text: 'خرد جاندار کون ہو سکتا ہے؟', options: ['بیکٹیریا', 'گھوڑا', 'درخت'], answer: 'بیکٹیریا' },
        { type: 'text', text: 'خالی جگہ پر کریں: vertebrates میں ___ ہوتی ہے۔', answer: 'ریڑھ کی ہڈی' },
        { type: 'select', text: 'دہی بنانے میں کیا مدد دے سکتا ہے؟', options: ['مفید بیکٹیریا', 'شیر', 'گلاب'], answer: 'مفید بیکٹیریا' },
        { type: 'radio', text: 'درست یا غلط: تمام خرد جاندار نقصان دہ ہوتے ہیں۔', options: ['درست', 'غلط'], answer: 'غلط' },
        { type: 'select', text: 'ریڑھ والا جانور کون سا ہے؟', options: ['مینڈک', 'کیڑا', 'گھونگا'], answer: 'مینڈک' },
        { type: 'text', text: 'خالی جگہ پر کریں: پودوں کو بیج اور ___ سے بانٹا جا سکتا ہے۔', answer: 'پھول' },
        { type: 'select', text: 'جانداروں کی درجہ بندی کیوں کرتے ہیں؟', options: ['آسانی سے پڑھنے کے لیے', 'الجھن کے لیے', 'غائب کرنے کے لیے'], answer: 'آسانی سے پڑھنے کے لیے' }
      ]
    },
    'human-body-systems': {
      title: 'Human Body Systems',
      titleUr: 'انسانی جسم کے نظام',
      intro: 'Study digestive, respiratory, circulatory, skeletal, and muscular systems, balanced diet, and disease prevention.',
      introUr: 'نظام ہضم، تنفس، دوران خون، ڈھانچہ، عضلات، متوازن غذا اور بیماری سے بچاؤ سیکھیں۔',
      focus: ['Digestive system breaks food into useful parts', 'Respiratory system brings oxygen', 'Circulatory system moves blood', 'Skeletal and muscular systems support movement', 'Balanced diet and disease prevention'],
      focusUr: ['نظام ہضم خوراک کو مفید حصوں میں بدلتا ہے', 'نظام تنفس آکسیجن لاتا ہے', 'نظام دوران خون خون کو حرکت دیتا ہے', 'ہڈیاں اور عضلات حرکت میں مدد دیتے ہیں', 'متوازن غذا اور بیماری سے بچاؤ'],
      examples: [['Digestive', 'Stomach helps digest food.'], ['Respiratory', 'Lungs exchange gases.'], ['Circulatory', 'Heart pumps blood.'], ['Prevention', 'Vaccination and hygiene help prevent disease.']],
      examplesUr: [['ہضم', 'معدہ خوراک ہضم کرتا ہے۔'], ['تنفس', 'پھیپھڑے گیسوں کا تبادلہ کرتے ہیں۔'], ['دوران خون', 'دل خون پمپ کرتا ہے۔'], ['بچاؤ', 'ویکسین اور صفائی بیماری سے بچاتے ہیں۔']],
      quick: ['Match each system with its job.', 'Food nutrients help the body grow and repair.', 'Exercise strengthens muscles and heart.', 'Hygiene reduces disease spread.'],
      quickUr: ['ہر نظام کو اس کے کام سے ملائیں۔', 'غذائی اجزا جسم کو بڑھنے اور مرمت میں مدد دیتے ہیں۔', 'ورزش عضلات اور دل کو مضبوط کرتی ہے۔', 'صفائی بیماری پھیلنے کو کم کرتی ہے۔'],
      questions: [
        { type: 'select', text: 'Which organ pumps blood?', options: ['Heart', 'Stomach', 'Ear'], answer: 'Heart' },
        { type: 'select', text: 'Which system helps us breathe?', options: ['Respiratory system', 'Digestive system', 'Skeletal system only'], answer: 'Respiratory system' },
        { type: 'radio', text: 'True or False: Bones protect and support the body.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Which organ digests food?', options: ['Stomach', 'Lung', 'Skin'], answer: 'Stomach' },
        { type: 'text', text: 'Complete: The heart pumps ___.', answer: 'blood' },
        { type: 'select', text: 'Which nutrient helps build muscles?', options: ['Protein', 'Smoke', 'Plastic'], answer: 'Protein' },
        { type: 'radio', text: 'True or False: Washing hands helps prevent disease.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Which system includes bones?', options: ['Skeletal system', 'Respiratory system', 'Digestive system'], answer: 'Skeletal system' },
        { type: 'text', text: 'Complete: Lungs take in ___.', answer: 'oxygen', alt: ['air'] },
        { type: 'select', text: 'Which is disease prevention?', options: ['Vaccination', 'Dirty food', 'No sleep'], answer: 'Vaccination' }
      ],
      questionsUr: [
        { type: 'select', text: 'خون کون پمپ کرتا ہے؟', options: ['دل', 'معدہ', 'کان'], answer: 'دل' },
        { type: 'select', text: 'سانس لینے میں کون سا نظام مدد دیتا ہے؟', options: ['نظام تنفس', 'نظام ہضم', 'صرف ہڈیوں کا نظام'], answer: 'نظام تنفس' },
        { type: 'radio', text: 'درست یا غلط: ہڈیاں جسم کو سہارا اور حفاظت دیتی ہیں۔', options: ['درست', 'غلط'], answer: 'درست' },
        { type: 'select', text: 'خوراک کون سا عضو ہضم کرتا ہے؟', options: ['معدہ', 'پھیپھڑا', 'جلد'], answer: 'معدہ' },
        { type: 'text', text: 'خالی جگہ پر کریں: دل ___ پمپ کرتا ہے۔', answer: 'خون' },
        { type: 'select', text: 'عضلات بنانے میں کون سا غذائی جز مدد دیتا ہے؟', options: ['پروٹین', 'دھواں', 'پلاسٹک'], answer: 'پروٹین' },
        { type: 'radio', text: 'درست یا غلط: ہاتھ دھونے سے بیماری سے بچاؤ ہوتا ہے۔', options: ['درست', 'غلط'], answer: 'درست' },
        { type: 'select', text: 'ہڈیاں کس نظام میں شامل ہیں؟', options: ['سکلیٹل نظام', 'نظام تنفس', 'نظام ہضم'], answer: 'سکلیٹل نظام' },
        { type: 'text', text: 'خالی جگہ پر کریں: پھیپھڑے ___ لیتے ہیں۔', answer: 'آکسیجن', alt: ['ہوا'] },
        { type: 'select', text: 'بیماری سے بچاؤ کون سا ہے؟', options: ['ویکسین', 'گندی خوراک', 'نیند نہ کرنا'], answer: 'ویکسین' }
      ]
    },
    'plants-and-food-production': {
      title: 'Plants and Food Production',
      titleUr: 'پودے اور خوراک کی پیداوار',
      intro: 'Study photosynthesis, flower parts, pollination, fertilization, seed formation, dispersal, and agriculture in Pakistan.',
      introUr: 'ضیائی تالیف، پھول کے حصے، زیرگی، بارآوری، بیج بننا، بیج پھیلنا اور پاکستان کی زراعت سیکھیں۔',
      focus: ['Photosynthesis in words', 'Parts of a flower', 'Pollination and fertilization introduction', 'Seed formation and dispersal', 'Agriculture in Pakistan'],
      focusUr: ['ضیائی تالیف الفاظ میں', 'پھول کے حصے', 'زیرگی اور بارآوری کا تعارف', 'بیج بننا اور پھیلنا', 'پاکستان کی زراعت'],
      examples: [['Photosynthesis', 'Carbon dioxide + water + sunlight -> food + oxygen.'], ['Pollination', 'Pollen moves to stigma.'], ['Seed dispersal', 'Seeds spread by wind, water, animals, or bursting.'], ['Agriculture', 'Wheat, rice, cotton, and sugarcane are grown in Pakistan.']],
      examplesUr: [['ضیائی تالیف', 'کاربن ڈائی آکسائیڈ + پانی + دھوپ -> خوراک + آکسیجن'], ['زیرگی', 'زردانہ stigma تک جاتا ہے۔'], ['بیج پھیلنا', 'بیج ہوا، پانی، جانور یا پھٹنے سے پھیلتے ہیں۔'], ['زراعت', 'پاکستان میں گندم، چاول، کپاس اور گنا اگتے ہیں۔']],
      quick: ['Leaves make food using sunlight.', 'Flowers help plants reproduce.', 'Seeds must spread to reduce crowding.', 'Crops are plants grown by farmers.'],
      quickUr: ['پتے دھوپ سے خوراک بناتے ہیں۔', 'پھول پودوں کی افزائش میں مدد دیتے ہیں۔', 'بیج پھیلتے ہیں تاکہ رش کم ہو۔', 'فصلیں کسان اگاتے ہیں۔'],
      questions: [
        { type: 'select', text: 'Photosynthesis makes food and releases...', options: ['oxygen', 'plastic', 'smoke'], answer: 'oxygen' },
        { type: 'select', text: 'Pollen moves during...', options: ['pollination', 'freezing', 'friction'], answer: 'pollination' },
        { type: 'radio', text: 'True or False: Flowers help in seed formation.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Which is a crop in Pakistan?', options: ['Wheat', 'Snow pine only', 'Plastic flower'], answer: 'Wheat' },
        { type: 'text', text: 'Complete: Leaves use sunlight to make ___.', answer: 'food' },
        { type: 'select', text: 'Which helps seeds spread?', options: ['Wind', 'Cement wall', 'Closed box only'], answer: 'Wind' },
        { type: 'radio', text: 'True or False: Farmers grow crops for food and use.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Which flower part receives pollen?', options: ['Stigma', 'Root', 'Stem'], answer: 'Stigma' },
        { type: 'text', text: 'Complete: Seed dispersal means seeds ___.', answer: 'spread' },
        { type: 'select', text: 'Which crop gives fiber?', options: ['Cotton', 'Rice only', 'Mango only'], answer: 'Cotton' }
      ],
      questionsUr: [
        { type: 'select', text: 'ضیائی تالیف خوراک بناتی اور کیا خارج کرتی ہے؟', options: ['آکسیجن', 'پلاسٹک', 'دھواں'], answer: 'آکسیجن' },
        { type: 'select', text: 'زردانہ کس عمل میں منتقل ہوتا ہے؟', options: ['زیرگی', 'جمنا', 'رگڑ'], answer: 'زیرگی' },
        { type: 'radio', text: 'درست یا غلط: پھول بیج بننے میں مدد دیتے ہیں۔', options: ['درست', 'غلط'], answer: 'درست' },
        { type: 'select', text: 'پاکستان کی فصل کون سی ہے؟', options: ['گندم', 'صرف برفانی درخت', 'پلاسٹک پھول'], answer: 'گندم' },
        { type: 'text', text: 'خالی جگہ پر کریں: پتے دھوپ سے ___ بناتے ہیں۔', answer: 'خوراک' },
        { type: 'select', text: 'بیج پھیلانے میں کیا مدد دیتا ہے؟', options: ['ہوا', 'سیمنٹ دیوار', 'صرف بند ڈبہ'], answer: 'ہوا' },
        { type: 'radio', text: 'درست یا غلط: کسان خوراک اور استعمال کے لیے فصلیں اگاتے ہیں۔', options: ['درست', 'غلط'], answer: 'درست' },
        { type: 'select', text: 'پھول کا کون سا حصہ زردانہ لیتا ہے؟', options: ['stigma', 'جڑ', 'تنا'], answer: 'stigma' },
        { type: 'text', text: 'خالی جگہ پر کریں: بیجوں کا پھیلاؤ یعنی بیج ___ ہیں۔', answer: 'پھیلتے' },
        { type: 'select', text: 'کون سی فصل ریشہ دیتی ہے؟', options: ['کپاس', 'صرف چاول', 'صرف آم'], answer: 'کپاس' }
      ]
    },
    matter: {
      title: 'Matter',
      titleUr: 'مادہ',
      intro: 'Learn atoms, molecules, elements, compounds, mixtures, solutions, separation methods, and physical/chemical changes.',
      introUr: 'ایٹم، مالیکیول، عنصر، مرکب، آمیزہ، محلول، علیحدگی کے طریقے اور جسمانی/کیمیائی تبدیلیاں سیکھیں۔',
      focus: ['Atoms and molecules introduction', 'Elements and compounds introduction', 'Mixtures and solutions', 'Filtration, evaporation, sieving, magnetic separation', 'Physical and chemical changes introduction'],
      focusUr: ['ایٹم اور مالیکیول کا تعارف', 'عنصر اور مرکب کا تعارف', 'آمیزہ اور محلول', 'فلٹریشن، تبخیر، چھاننا، مقناطیسی علیحدگی', 'جسمانی اور کیمیائی تبدیلی کا تعارف'],
      examples: [['Mixture', 'Sand and salt mixed together.'], ['Solution', 'Salt dissolved in water.'], ['Filtration', 'Separates insoluble solids from liquid.'], ['Magnetic separation', 'Magnet removes iron filings.']],
      examplesUr: [['آمیزہ', 'ریت اور نمک ملے ہوئے۔'], ['محلول', 'نمک پانی میں حل ہو گیا۔'], ['فلٹریشن', 'غیر حل پذیر ٹھوس کو مائع سے الگ کرتی ہے۔'], ['مقناطیسی علیحدگی', 'مقناطیس لوہے کے برادے نکالتا ہے۔']],
      quick: ['Mixtures can often be separated.', 'Solutions are mixtures where a substance dissolves.', 'Choose separation method by property.', 'Chemical changes make new substances.'],
      quickUr: ['آمیزے اکثر الگ کیے جا سکتے ہیں۔', 'محلول ایسا آمیزہ ہے جس میں چیز حل ہو۔', 'خاصیت کے مطابق علیحدگی کا طریقہ چنیں۔', 'کیمیائی تبدیلی نئی چیز بناتی ہے۔'],
      questions: [
        { type: 'select', text: 'Salt dissolved in water is a...', options: ['solution', 'magnet', 'gas only'], answer: 'solution' },
        { type: 'select', text: 'Which method separates sand from water?', options: ['Filtration', 'Magnet', 'Freezing only'], answer: 'Filtration' },
        { type: 'radio', text: 'True or False: A magnet can separate iron filings.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Which method separates flour lumps by size?', options: ['Sieving', 'Burning', 'Breathing'], answer: 'Sieving' },
        { type: 'text', text: 'Complete: Tiny particles of matter are called ___.', answer: 'atoms' },
        { type: 'select', text: 'Which is a mixture?', options: ['Sand and salt', 'Pure gold element', 'One oxygen atom only'], answer: 'Sand and salt' },
        { type: 'radio', text: 'True or False: Burning paper is a chemical change.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Evaporation can separate...', options: ['salt from salt water', 'iron from sand only', 'stones from rice only'], answer: 'salt from salt water' },
        { type: 'text', text: 'Complete: Physical changes usually do not make a new ___.', answer: 'substance' },
        { type: 'select', text: 'Which is a compound?', options: ['Water', 'Iron element', 'Sand mixture'], answer: 'Water' }
      ],
      questionsUr: [
        { type: 'select', text: 'نمک پانی میں حل ہو تو کیا بنتا ہے؟', options: ['محلول', 'مقناطیس', 'صرف گیس'], answer: 'محلول' },
        { type: 'select', text: 'ریت کو پانی سے کیسے الگ کریں؟', options: ['فلٹریشن', 'مقناطیس', 'صرف جمنا'], answer: 'فلٹریشن' },
        { type: 'radio', text: 'درست یا غلط: مقناطیس لوہے کے برادے الگ کر سکتا ہے۔', options: ['درست', 'غلط'], answer: 'درست' },
        { type: 'select', text: 'آٹے کے ڈلے سائز سے الگ کرنے کا طریقہ؟', options: ['چھاننا', 'جلانا', 'سانس لینا'], answer: 'چھاننا' },
        { type: 'text', text: 'خالی جگہ پر کریں: مادہ کے چھوٹے ذرات ___ ہیں۔', answer: 'ایٹم' },
        { type: 'select', text: 'آمیزہ کون سا ہے؟', options: ['ریت اور نمک', 'خالص سونا', 'صرف ایک آکسیجن ایٹم'], answer: 'ریت اور نمک' },
        { type: 'radio', text: 'درست یا غلط: کاغذ جلنا کیمیائی تبدیلی ہے۔', options: ['درست', 'غلط'], answer: 'درست' },
        { type: 'select', text: 'تبخیر کس کو الگ کر سکتی ہے؟', options: ['نمکین پانی سے نمک', 'صرف ریت سے لوہا', 'صرف چاول سے پتھر'], answer: 'نمکین پانی سے نمک' },
        { type: 'text', text: 'خالی جگہ پر کریں: جسمانی تبدیلی عموما نئی ___ نہیں بناتی۔', answer: 'چیز', alt: ['مادہ'] },
        { type: 'select', text: 'مرکب کون سا ہے؟', options: ['پانی', 'لوہا عنصر', 'ریت آمیزہ'], answer: 'پانی' }
      ]
    },
    energy: {
      title: 'Energy',
      titleUr: 'توانائی',
      intro: 'Learn forms of energy, light, heat, sound, electrical energy, renewable and non-renewable energy.',
      introUr: 'توانائی کی اقسام، روشنی، حرارت، آواز، بجلی، قابل تجدید اور ناقابل تجدید توانائی سیکھیں۔',
      focus: ['Forms of energy', 'Light, heat, sound, and electrical energy', 'Energy sources', 'Renewable and non-renewable energy introduction', 'Energy transformations'],
      focusUr: ['توانائی کی اقسام', 'روشنی، حرارت، آواز اور برقی توانائی', 'توانائی کے ذرائع', 'قابل تجدید اور ناقابل تجدید توانائی', 'توانائی کی تبدیلیاں'],
      examples: [['Light energy', 'A bulb gives light.'], ['Heat energy', 'A stove gives heat.'], ['Sound energy', 'A speaker gives sound.'], ['Renewable', 'Solar and wind energy are renewable.']],
      examplesUr: [['روشنی', 'بلب روشنی دیتا ہے۔'], ['حرارت', 'چولہا حرارت دیتا ہے۔'], ['آواز', 'اسپیکر آواز دیتا ہے۔'], ['قابل تجدید', 'شمسی اور ہوا کی توانائی قابل تجدید ہے۔']],
      quick: ['Match energy form with its source.', 'Renewable sources can be replaced naturally.', 'Non-renewable fuels can run out.', 'Energy can change form.'],
      quickUr: ['توانائی کی قسم کو اس کے ذریعہ سے ملائیں۔', 'قابل تجدید ذرائع قدرتی طور پر دوبارہ ملتے ہیں۔', 'ناقابل تجدید ایندھن ختم ہو سکتے ہیں۔', 'توانائی شکل بدل سکتی ہے۔'],
      questions: [
        { type: 'select', text: 'Which is renewable energy?', options: ['Solar energy', 'Coal', 'Petrol'], answer: 'Solar energy' },
        { type: 'select', text: 'A ringing bell gives...', options: ['sound energy', 'soil', 'water cycle'], answer: 'sound energy' },
        { type: 'radio', text: 'True or False: Wind energy is renewable.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Which gives heat energy?', options: ['Fire', 'Ice only', 'Shadow'], answer: 'Fire' },
        { type: 'text', text: 'Complete: A battery stores ___ energy.', answer: 'chemical' },
        { type: 'select', text: 'Which is non-renewable?', options: ['Coal', 'Sunlight', 'Wind'], answer: 'Coal' },
        { type: 'radio', text: 'True or False: A bulb changes electrical energy to light.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Which source gives light energy naturally?', options: ['Sun', 'Plastic bag', 'Stone'], answer: 'Sun' },
        { type: 'text', text: 'Complete: Energy can change from one ___ to another.', answer: 'form' },
        { type: 'select', text: 'Which uses electrical energy?', options: ['Fan', 'Rock', 'Soil'], answer: 'Fan' }
      ],
      questionsUr: [
        { type: 'select', text: 'قابل تجدید توانائی کون سی ہے؟', options: ['شمسی توانائی', 'کوئلہ', 'پیٹرول'], answer: 'شمسی توانائی' },
        { type: 'select', text: 'بجتی گھنٹی کیا دیتی ہے؟', options: ['آواز کی توانائی', 'مٹی', 'آبی چکر'], answer: 'آواز کی توانائی' },
        { type: 'radio', text: 'درست یا غلط: ہوا کی توانائی قابل تجدید ہے۔', options: ['درست', 'غلط'], answer: 'درست' },
        { type: 'select', text: 'حرارت کون دیتا ہے؟', options: ['آگ', 'صرف برف', 'سایہ'], answer: 'آگ' },
        { type: 'text', text: 'خالی جگہ پر کریں: بیٹری ___ توانائی ذخیرہ کرتی ہے۔', answer: 'کیمیائی' },
        { type: 'select', text: 'ناقابل تجدید کون سا ہے؟', options: ['کوئلہ', 'دھوپ', 'ہوا'], answer: 'کوئلہ' },
        { type: 'radio', text: 'درست یا غلط: بلب بجلی کو روشنی میں بدلتا ہے۔', options: ['درست', 'غلط'], answer: 'درست' },
        { type: 'select', text: 'قدرتی روشنی کا ذریعہ کون سا ہے؟', options: ['سورج', 'پلاسٹک بیگ', 'پتھر'], answer: 'سورج' },
        { type: 'text', text: 'خالی جگہ پر کریں: توانائی ایک ___ سے دوسری میں بدل سکتی ہے۔', answer: 'شکل' },
        { type: 'select', text: 'بجلی استعمال کرنے والی چیز کون سی ہے؟', options: ['پنکھا', 'چٹان', 'مٹی'], answer: 'پنکھا' }
      ]
    },
    'electricity-and-magnetism': {
      title: 'Electricity and Magnetism',
      titleUr: 'بجلی اور مقناطیسیت',
      intro: 'Learn simple circuits, conductors, insulators, electricity safety, magnets, and magnetic materials.',
      introUr: 'سادہ سرکٹ، موصل، غیر موصل، بجلی کی حفاظت، مقناطیس اور مقناطیسی مواد سیکھیں۔',
      focus: ['Simple electric circuit', 'Conductors and insulators', 'Uses and safety of electricity', 'Magnets and magnetic forces', 'Magnetic and non-magnetic materials'],
      focusUr: ['سادہ برقی سرکٹ', 'موصل اور غیر موصل', 'بجلی کے استعمال اور حفاظت', 'مقناطیس اور مقناطیسی قوت', 'مقناطیسی اور غیر مقناطیسی مواد'],
      examples: [['Circuit', 'Battery, wire, bulb, and switch.'], ['Conductor', 'Copper wire conducts electricity.'], ['Insulator', 'Plastic covers wires.'], ['Magnetic', 'Iron is attracted to a magnet.']],
      examplesUr: [['سرکٹ', 'بیٹری، تار، بلب اور سوئچ۔'], ['موصل', 'تانبے کی تار بجلی گزارتی ہے۔'], ['غیر موصل', 'پلاسٹک تار کو ڈھانپتا ہے۔'], ['مقناطیسی', 'لوہا مقناطیس کی طرف کھنچتا ہے۔']],
      quick: ['A circuit must be complete for bulb to light.', 'Metals often conduct electricity.', 'Plastic and rubber are insulators.', 'Magnets attract iron and steel.'],
      quickUr: ['بلب جلانے کے لیے سرکٹ مکمل ہونا چاہیے۔', 'دھاتیں عموما بجلی گزارتی ہیں۔', 'پلاسٹک اور ربڑ غیر موصل ہیں۔', 'مقناطیس لوہے اور اسٹیل کو کھینچتا ہے۔'],
      questions: [
        { type: 'select', text: 'Which material is a conductor?', options: ['Copper', 'Plastic', 'Rubber'], answer: 'Copper' },
        { type: 'select', text: 'Which is an insulator?', options: ['Plastic', 'Iron', 'Copper'], answer: 'Plastic' },
        { type: 'radio', text: 'True or False: A complete circuit lets current flow.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Which is attracted by a magnet?', options: ['Iron nail', 'Wood', 'Paper'], answer: 'Iron nail' },
        { type: 'text', text: 'Complete: A simple circuit needs a battery, wires, and a ___.', answer: 'bulb' },
        { type: 'select', text: 'Which is electrical safety?', options: ['Do not touch wet switches', 'Put fingers in socket', 'Use broken wires'], answer: 'Do not touch wet switches' },
        { type: 'radio', text: 'True or False: Rubber can help insulate wires.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Which material is non-magnetic?', options: ['Wood', 'Steel pin', 'Iron nail'], answer: 'Wood' },
        { type: 'text', text: 'Complete: A switch opens or closes a ___.', answer: 'circuit' },
        { type: 'select', text: 'Which pole pairs attract?', options: ['North and South', 'North and North', 'South and South'], answer: 'North and South' }
      ],
      questionsUr: [
        { type: 'select', text: 'موصل مواد کون سا ہے؟', options: ['تانبا', 'پلاسٹک', 'ربڑ'], answer: 'تانبا' },
        { type: 'select', text: 'غیر موصل کون سا ہے؟', options: ['پلاسٹک', 'لوہا', 'تانبا'], answer: 'پلاسٹک' },
        { type: 'radio', text: 'درست یا غلط: مکمل سرکٹ میں کرنٹ بہتا ہے۔', options: ['درست', 'غلط'], answer: 'درست' },
        { type: 'select', text: 'مقناطیس کس کو کھینچتا ہے؟', options: ['لوہے کی کیل', 'لکڑی', 'کاغذ'], answer: 'لوہے کی کیل' },
        { type: 'text', text: 'خالی جگہ پر کریں: سادہ سرکٹ کو بیٹری، تار اور ___ چاہیے۔', answer: 'بلب' },
        { type: 'select', text: 'بجلی کی حفاظت کون سی ہے؟', options: ['گیلے سوئچ نہ چھونا', 'ساکٹ میں انگلی ڈالنا', 'ٹوٹی تار استعمال کرنا'], answer: 'گیلے سوئچ نہ چھونا' },
        { type: 'radio', text: 'درست یا غلط: ربڑ تاروں کو غیر موصل بنا سکتا ہے۔', options: ['درست', 'غلط'], answer: 'درست' },
        { type: 'select', text: 'غیر مقناطیسی مواد کون سا ہے؟', options: ['لکڑی', 'اسٹیل پن', 'لوہے کی کیل'], answer: 'لکڑی' },
        { type: 'text', text: 'خالی جگہ پر کریں: سوئچ ___ کو کھولتا یا بند کرتا ہے۔', answer: 'سرکٹ' },
        { type: 'select', text: 'کون سے poles ایک دوسرے کو کھینچتے ہیں؟', options: ['North اور South', 'North اور North', 'South اور South'], answer: 'North اور South' }
      ]
    },
    'earth-and-space': {
      title: 'Earth and Space',
      titleUr: 'زمین اور خلا',
      intro: 'Study the solar system, planets, moon phases, water cycle, weather, climate, and natural disasters.',
      introUr: 'نظام شمسی، سیارے، چاند کے phases، آبی چکر، موسم، آب و ہوا اور قدرتی آفات سیکھیں۔',
      focus: ['Solar system and planets', 'Moon phases introduction', 'Water cycle', 'Weather and climate introduction', 'Natural disasters introduction'],
      focusUr: ['نظام شمسی اور سیارے', 'چاند کے مراحل کا تعارف', 'آبی چکر', 'موسم اور آب و ہوا کا تعارف', 'قدرتی آفات کا تعارف'],
      examples: [['Solar system', 'The sun is at the center.'], ['Planet', 'Earth is a planet.'], ['Moon phase', 'The moon appears to change shape.'], ['Water cycle', 'Evaporation, condensation, precipitation.']],
      examplesUr: [['نظام شمسی', 'سورج مرکز میں ہے۔'], ['سیارہ', 'زمین ایک سیارہ ہے۔'], ['چاند کا phase', 'چاند کی شکل بدلتی نظر آتی ہے۔'], ['آبی چکر', 'بخارات، تکثیف، بارش۔']],
      quick: ['Remember planet order from the sun.', 'Weather changes day to day.', 'Climate describes long-term weather pattern.', 'Natural disasters need safety planning.'],
      quickUr: ['سورج سے سیاروں کی ترتیب یاد کریں۔', 'موسم روز بدل سکتا ہے۔', 'آب و ہوا طویل مدت کا موسم ہے۔', 'قدرتی آفات کے لیے حفاظتی منصوبہ چاہیے۔'],
      questions: [
        { type: 'select', text: 'Which star is at the center of our solar system?', options: ['Sun', 'Moon', 'Earth'], answer: 'Sun' },
        { type: 'select', text: 'Earth is a...', options: ['planet', 'star', 'comet only'], answer: 'planet' },
        { type: 'radio', text: 'True or False: The moon appears in phases.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Which is part of the water cycle?', options: ['Evaporation', 'Digestion', 'Friction'], answer: 'Evaporation' },
        { type: 'text', text: 'Complete: Long-term weather pattern is called ___.', answer: 'climate' },
        { type: 'select', text: 'Which is a natural disaster?', options: ['Earthquake', 'Pencil', 'Notebook'], answer: 'Earthquake' },
        { type: 'radio', text: 'True or False: Weather and climate mean exactly the same thing.', options: ['True', 'False'], answer: 'False' },
        { type: 'select', text: 'Which planet do we live on?', options: ['Earth', 'Mars only', 'Jupiter'], answer: 'Earth' },
        { type: 'text', text: 'Complete: Rainfall in the water cycle is ___.', answer: 'precipitation' },
        { type: 'select', text: 'Which planet is closest to the sun?', options: ['Mercury', 'Neptune', 'Saturn'], answer: 'Mercury' }
      ],
      questionsUr: [
        { type: 'select', text: 'ہمارے نظام شمسی کے مرکز میں کون سا ستارہ ہے؟', options: ['سورج', 'چاند', 'زمین'], answer: 'سورج' },
        { type: 'select', text: 'زمین کیا ہے؟', options: ['سیارہ', 'ستارہ', 'صرف دمدار ستارہ'], answer: 'سیارہ' },
        { type: 'radio', text: 'درست یا غلط: چاند phases میں نظر آتا ہے۔', options: ['درست', 'غلط'], answer: 'درست' },
        { type: 'select', text: 'آبی چکر کا حصہ کون سا ہے؟', options: ['بخارات', 'ہضم', 'رگڑ'], answer: 'بخارات' },
        { type: 'text', text: 'خالی جگہ پر کریں: طویل مدت کا موسم ___ کہلاتا ہے۔', answer: 'آب و ہوا' },
        { type: 'select', text: 'قدرتی آفت کون سی ہے؟', options: ['زلزلہ', 'پنسل', 'کاپی'], answer: 'زلزلہ' },
        { type: 'radio', text: 'درست یا غلط: موسم اور آب و ہوا بالکل ایک ہی ہیں۔', options: ['درست', 'غلط'], answer: 'غلط' },
        { type: 'select', text: 'ہم کس سیارے پر رہتے ہیں؟', options: ['زمین', 'صرف مریخ', 'مشتری'], answer: 'زمین' },
        { type: 'text', text: 'خالی جگہ پر کریں: آبی چکر میں بارش ___ ہے۔', answer: 'precipitation', alt: ['بارش'] },
        { type: 'select', text: 'سورج کے سب سے قریب کون سا سیارہ ہے؟', options: ['Mercury', 'Neptune', 'Saturn'], answer: 'Mercury' }
      ]
    },
    'environment-and-conservation': {
      title: 'Environment and Conservation',
      titleUr: 'ماحول اور تحفظ',
      intro: 'Learn ecosystems, food chains, food webs, pollution, deforestation, conservation, and human impact.',
      introUr: 'ماحولی نظام، غذائی زنجیر، food web، آلودگی، جنگلات کی کٹائی، تحفظ اور انسانی اثرات سیکھیں۔',
      focus: ['Ecosystems contain living and non-living parts', 'Food chains and food webs introduction', 'Pollution and deforestation', 'Conservation of resources', 'Human impact on environment'],
      focusUr: ['ماحولی نظام میں جاندار اور بے جان حصے ہوتے ہیں', 'غذائی زنجیر اور food web کا تعارف', 'آلودگی اور جنگلات کی کٹائی', 'وسائل کا تحفظ', 'ماحول پر انسانی اثرات'],
      examples: [['Ecosystem', 'A pond has water, plants, fish, frogs, and insects.'], ['Food web', 'Many connected food chains.'], ['Deforestation', 'Cutting many trees.'], ['Conservation', 'Use resources wisely.']],
      examplesUr: [['ماحولی نظام', 'تالاب میں پانی، پودے، مچھلی، مینڈک اور کیڑے ہوتے ہیں۔'], ['Food web', 'کئی جڑی ہوئی غذائی زنجیریں۔'], ['جنگلات کی کٹائی', 'بہت سے درخت کاٹنا۔'], ['تحفظ', 'وسائل سمجھداری سے استعمال کریں۔']],
      quick: ['Identify producers and consumers.', 'Food webs are more complex than chains.', 'Reduce pollution with better habits.', 'Conservation protects resources for the future.'],
      quickUr: ['پیدا کرنے والے اور صارف پہچانیں۔', 'Food web زنجیر سے زیادہ پیچیدہ ہے۔', 'اچھی عادتوں سے آلودگی کم کریں۔', 'تحفظ وسائل کو مستقبل کے لیے بچاتا ہے۔'],
      questions: [
        { type: 'select', text: 'A food web is made of many connected...', options: ['food chains', 'circuits', 'bones'], answer: 'food chains' },
        { type: 'select', text: 'Cutting many trees is called...', options: ['deforestation', 'condensation', 'pollination'], answer: 'deforestation' },
        { type: 'radio', text: 'True or False: Plants are producers in many food chains.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Which action conserves resources?', options: ['Reuse paper', 'Waste water', 'Burn plastic'], answer: 'Reuse paper' },
        { type: 'text', text: 'Complete: Dirty air, water, or land is ___.', answer: 'pollution' },
        { type: 'select', text: 'Which is part of an ecosystem?', options: ['Living and non-living things', 'Only toys', 'Only books'], answer: 'Living and non-living things' },
        { type: 'radio', text: 'True or False: Humans can harm or help the environment.', options: ['True', 'False'], answer: 'True' },
        { type: 'select', text: 'Which is a pollution solution?', options: ['Use dustbins', 'Throw trash in rivers', 'Cut all trees'], answer: 'Use dustbins' },
        { type: 'text', text: 'Complete: Conservation means using resources ___.', answer: 'wisely' },
        { type: 'select', text: 'Which protects soil and air?', options: ['Planting trees', 'Burning trash', 'Wasting paper'], answer: 'Planting trees' }
      ],
      questionsUr: [
        { type: 'select', text: 'Food web کئی جڑی ہوئی کس چیز سے بنتا ہے؟', options: ['غذائی زنجیروں', 'سرکٹ', 'ہڈیوں'], answer: 'غذائی زنجیروں' },
        { type: 'select', text: 'بہت درخت کاٹنا کیا کہلاتا ہے؟', options: ['deforestation', 'تکثیف', 'زیرگی'], answer: 'deforestation' },
        { type: 'radio', text: 'درست یا غلط: پودے بہت سی غذائی زنجیروں میں producers ہیں۔', options: ['درست', 'غلط'], answer: 'درست' },
        { type: 'select', text: 'کون سا عمل وسائل بچاتا ہے؟', options: ['کاغذ دوبارہ استعمال کرنا', 'پانی ضائع کرنا', 'پلاسٹک جلانا'], answer: 'کاغذ دوبارہ استعمال کرنا' },
        { type: 'text', text: 'خالی جگہ پر کریں: گندی ہوا، پانی یا زمین ___ ہے۔', answer: 'آلودگی' },
        { type: 'select', text: 'ماحولی نظام کا حصہ کیا ہے؟', options: ['جاندار اور بے جان چیزیں', 'صرف کھلونے', 'صرف کتابیں'], answer: 'جاندار اور بے جان چیزیں' },
        { type: 'radio', text: 'درست یا غلط: انسان ماحول کو نقصان یا مدد دے سکتے ہیں۔', options: ['درست', 'غلط'], answer: 'درست' },
        { type: 'select', text: 'آلودگی کا حل کون سا ہے؟', options: ['کوڑے دان استعمال کرنا', 'دریا میں کچرا پھینکنا', 'سب درخت کاٹنا'], answer: 'کوڑے دان استعمال کرنا' },
        { type: 'text', text: 'خالی جگہ پر کریں: تحفظ کا مطلب وسائل ___ سے استعمال کرنا ہے۔', answer: 'سمجھداری' },
        { type: 'select', text: 'مٹی اور ہوا کی حفاظت کون کرتا ہے؟', options: ['درخت لگانا', 'کچرا جلانا', 'کاغذ ضائع کرنا'], answer: 'درخت لگانا' }
      ]
    }
  };

  const TOPICS_GRADE6 = {
    "scientific-investigation": {
      "title": "Scientific Investigation",
      "titleUr": "سائنسی تحقیق",
      "intro": "Learn the scientific method, observations, hypotheses, variables, fair tests, measurement units, data tables, graphs, and lab safety.",
      "introUr": "سائنسی طریقہ، مشاہدہ، مفروضہ، متغیرات، منصفانہ تجربہ، پیمائش کی اکائیاں، ڈیٹا، گراف اور لیب کی حفاظت سیکھیں۔",
      "focus": [
        "Scientific method steps",
        "Observation and hypothesis",
        "Independent, dependent, and controlled variables",
        "Fair testing and accurate measurement",
        "Tables, graphs, conclusions, and safety"
      ],
      "focusUr": [
        "سائنسی طریقے کے مراحل",
        "مشاہدہ اور مفروضہ",
        "آزاد، تابع اور قابو شدہ متغیرات",
        "منصفانہ تجربہ اور درست پیمائش",
        "جدول، گراف، نتیجہ اور حفاظت"
      ],
      "examples": [
        [
          "Hypothesis",
          "Plants with more light may grow taller."
        ],
        [
          "Independent variable",
          "The thing changed on purpose."
        ],
        [
          "Dependent variable",
          "The result that is measured."
        ],
        [
          "Bar graph",
          "Shows data using bars."
        ]
      ],
      "examplesUr": [
        [
          "مفروضہ",
          "زیادہ روشنی والے پودے شاید لمبے بڑھیں۔"
        ],
        [
          "آزاد متغیر",
          "وہ چیز جسے جان بوجھ کر بدلا جائے۔"
        ],
        [
          "تابع متغیر",
          "وہ نتیجہ جسے ناپا جائے۔"
        ],
        [
          "بار گراف",
          "ڈیٹا کو سلاخوں سے دکھاتا ہے۔"
        ]
      ],
      "quick": [
        "Change one variable at a time.",
        "Use correct units such as cm, g, mL, or seconds.",
        "Record results neatly before drawing conclusions.",
        "Follow safety rules during every activity."
      ],
      "quickUr": [
        "ایک وقت میں ایک متغیر بدلیں۔",
        "cm، g، mL یا seconds جیسی درست اکائیاں استعمال کریں۔",
        "نتیجہ نکالنے سے پہلے نتائج صاف لکھیں۔",
        "ہر سرگرمی میں حفاظتی اصول اپنائیں۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "The scientific method usually begins with...",
          "answer": "A question",
          "options": [
            "A question",
            "A conclusion",
            "A final mark"
          ]
        },
        {
          "type": "select",
          "text": "A possible answer to a science question is a...",
          "answer": "hypothesis",
          "options": [
            "hypothesis",
            "graph",
            "meter ruler"
          ]
        },
        {
          "type": "select",
          "text": "The variable changed on purpose is the...",
          "answer": "independent variable",
          "options": [
            "independent variable",
            "dependent variable",
            "safety rule"
          ]
        },
        {
          "type": "select",
          "text": "The result measured in an experiment is the...",
          "answer": "dependent variable",
          "options": [
            "dependent variable",
            "control tray",
            "title"
          ]
        },
        {
          "type": "radio",
          "text": "True or False: A fair test changes only one main variable.",
          "answer": "True",
          "options": [
            "True",
            "False"
          ]
        },
        {
          "type": "select",
          "text": "Which unit can measure length?",
          "answer": "centimeter",
          "options": [
            "centimeter",
            "gram only",
            "liter only"
          ]
        },
        {
          "type": "select",
          "text": "Which display is best for comparing categories?",
          "answer": "Bar graph",
          "options": [
            "Bar graph",
            "Paragraph only",
            "Safety goggles"
          ]
        },
        {
          "type": "text",
          "text": "Complete: Data can be recorded in a ___.",
          "answer": "table",
          "alt": [
            "chart"
          ]
        },
        {
          "type": "select",
          "text": "Which is a safe lab habit?",
          "answer": "Wear goggles when needed",
          "options": [
            "Wear goggles when needed",
            "Taste unknown chemicals",
            "Run with glassware"
          ]
        },
        {
          "type": "text",
          "text": "Complete: A conclusion should be based on ___.",
          "answer": "evidence",
          "alt": [
            "results",
            "data"
          ]
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "سائنسی طریقہ عموماً کس سے شروع ہوتا ہے؟",
          "answer": "سوال",
          "options": [
            "سوال",
            "نتیجہ",
            "آخری نمبر"
          ]
        },
        {
          "type": "select",
          "text": "سائنس کے سوال کا ممکنہ جواب کیا کہلاتا ہے؟",
          "answer": "مفروضہ",
          "options": [
            "مفروضہ",
            "گراف",
            "فٹہ"
          ]
        },
        {
          "type": "select",
          "text": "جسے جان بوجھ کر بدلا جائے وہ کیا ہے؟",
          "answer": "آزاد متغیر",
          "options": [
            "آزاد متغیر",
            "تابع متغیر",
            "حفاظتی اصول"
          ]
        },
        {
          "type": "select",
          "text": "تجربے میں ناپا جانے والا نتیجہ کیا ہے؟",
          "answer": "تابع متغیر",
          "options": [
            "تابع متغیر",
            "کنٹرول ٹرے",
            "عنوان"
          ]
        },
        {
          "type": "radio",
          "text": "درست یا غلط: منصفانہ تجربے میں صرف ایک اہم متغیر بدلا جاتا ہے۔",
          "answer": "درست",
          "options": [
            "درست",
            "غلط"
          ]
        },
        {
          "type": "select",
          "text": "لمبائی ناپنے کی اکائی کون سی ہے؟",
          "answer": "سینٹی میٹر",
          "options": [
            "سینٹی میٹر",
            "صرف گرام",
            "صرف لیٹر"
          ]
        },
        {
          "type": "select",
          "text": "اقسام کا موازنہ دکھانے کے لیے کیا بہتر ہے؟",
          "answer": "بار گراف",
          "options": [
            "بار گراف",
            "صرف پیراگراف",
            "حفاظتی چشمہ"
          ]
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: ڈیٹا ___ میں لکھا جا سکتا ہے۔",
          "answer": "جدول",
          "alt": [
            "چارٹ"
          ]
        },
        {
          "type": "select",
          "text": "لیب کی محفوظ عادت کون سی ہے؟",
          "answer": "ضرورت پر چشمہ پہننا",
          "options": [
            "ضرورت پر چشمہ پہننا",
            "نامعلوم کیمیکل چکھنا",
            "شیشے کے سامان کے ساتھ دوڑنا"
          ]
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: نتیجہ ___ پر مبنی ہونا چاہیے۔",
          "answer": "ثبوت",
          "alt": [
            "نتائج",
            "ڈیٹا"
          ]
        }
      ]
    },
    "cells-and-living-organisms": {
      "title": "Cells and Living Organisms",
      "titleUr": "خلیات اور جاندار",
      "intro": "Study cells as the basic unit of life, plant and animal cells, cell parts, unicellular and multicellular organisms, and microscopes.",
      "introUr": "خلیہ زندگی کی بنیادی اکائی ہے۔ پودوں اور جانوروں کے خلیات، خلیے کے حصے، یک خلوی اور کثیر خلوی جاندار، اور خوردبین سیکھیں۔",
      "focus": [
        "Cell as the basic unit of life",
        "Plant and animal cell similarities and differences",
        "Nucleus, cytoplasm, cell membrane, and cell wall",
        "Unicellular and multicellular organisms",
        "Microscope use and care"
      ],
      "focusUr": [
        "خلیہ زندگی کی بنیادی اکائی",
        "پودوں اور جانوروں کے خلیات کا موازنہ",
        "مرکزہ، سائٹوپلازم، خلیاتی جھلی اور دیوار",
        "یک خلوی اور کثیر خلوی جاندار",
        "خوردبین کا استعمال اور حفاظت"
      ],
      "examples": [
        [
          "Nucleus",
          "Controls many cell activities."
        ],
        [
          "Cell membrane",
          "Controls what enters and leaves."
        ],
        [
          "Cell wall",
          "Found in plant cells."
        ],
        [
          "Microscope",
          "Makes tiny things look larger."
        ]
      ],
      "examplesUr": [
        [
          "مرکزہ",
          "خلیے کی بہت سی سرگرمیوں کو قابو کرتا ہے۔"
        ],
        [
          "خلیاتی جھلی",
          "اندر باہر جانے والی چیزوں کو قابو کرتی ہے۔"
        ],
        [
          "خلیاتی دیوار",
          "پودے کے خلیے میں ہوتی ہے۔"
        ],
        [
          "خوردبین",
          "چھوٹی چیزوں کو بڑا دکھاتی ہے۔"
        ]
      ],
      "quick": [
        "Plant cells have a cell wall; animal cells do not.",
        "Both plant and animal cells have nucleus, cytoplasm, and cell membrane.",
        "Unicellular organisms have one cell.",
        "Handle microscope lenses carefully."
      ],
      "quickUr": [
        "پودے کے خلیے میں دیوار ہوتی ہے؛ جانور کے خلیے میں نہیں۔",
        "دونوں خلیات میں مرکزہ، سائٹوپلازم اور جھلی ہوتی ہے۔",
        "یک خلوی جاندار میں ایک خلیہ ہوتا ہے۔",
        "خوردبین کے عدسے احتیاط سے استعمال کریں۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "The basic unit of life is the...",
          "answer": "cell",
          "options": [
            "cell",
            "planet",
            "rock"
          ]
        },
        {
          "type": "select",
          "text": "Which part controls many cell activities?",
          "answer": "Nucleus",
          "options": [
            "Nucleus",
            "Cell wall",
            "Soil"
          ]
        },
        {
          "type": "select",
          "text": "Which part is found in plant cells but not animal cells?",
          "answer": "Cell wall",
          "options": [
            "Cell wall",
            "Cell membrane",
            "Cytoplasm"
          ]
        },
        {
          "type": "radio",
          "text": "True or False: A microscope helps us see tiny objects.",
          "answer": "True",
          "options": [
            "True",
            "False"
          ]
        },
        {
          "type": "select",
          "text": "An organism made of one cell is...",
          "answer": "unicellular",
          "options": [
            "unicellular",
            "multicellular",
            "magnetic"
          ]
        },
        {
          "type": "select",
          "text": "Humans are...",
          "answer": "multicellular",
          "options": [
            "multicellular",
            "unicellular",
            "non-living"
          ]
        },
        {
          "type": "text",
          "text": "Complete: The jelly-like material in a cell is ___.",
          "answer": "cytoplasm"
        },
        {
          "type": "select",
          "text": "Which part controls what enters and leaves the cell?",
          "answer": "Cell membrane",
          "options": [
            "Cell membrane",
            "Leaf",
            "Lens"
          ]
        },
        {
          "type": "radio",
          "text": "True or False: Animal cells have a cell wall.",
          "answer": "False",
          "options": [
            "True",
            "False"
          ]
        },
        {
          "type": "text",
          "text": "Complete: A microscope has lenses that ___ objects.",
          "answer": "magnify",
          "alt": [
            "enlarge"
          ]
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "زندگی کی بنیادی اکائی کیا ہے؟",
          "answer": "خلیہ",
          "options": [
            "خلیہ",
            "سیارہ",
            "چٹان"
          ]
        },
        {
          "type": "select",
          "text": "خلیے کی بہت سی سرگرمیوں کو کون قابو کرتا ہے؟",
          "answer": "مرکزہ",
          "options": [
            "مرکزہ",
            "خلیاتی دیوار",
            "مٹی"
          ]
        },
        {
          "type": "select",
          "text": "کون سا حصہ پودے کے خلیے میں ہوتا ہے مگر جانور کے خلیے میں نہیں؟",
          "answer": "خلیاتی دیوار",
          "options": [
            "خلیاتی دیوار",
            "خلیاتی جھلی",
            "سائٹوپلازم"
          ]
        },
        {
          "type": "radio",
          "text": "درست یا غلط: خوردبین چھوٹی چیزیں دیکھنے میں مدد دیتی ہے۔",
          "answer": "درست",
          "options": [
            "درست",
            "غلط"
          ]
        },
        {
          "type": "select",
          "text": "ایک خلیے والے جاندار کو کیا کہتے ہیں؟",
          "answer": "یک خلوی",
          "options": [
            "یک خلوی",
            "کثیر خلوی",
            "مقناطیسی"
          ]
        },
        {
          "type": "select",
          "text": "انسان کیا ہیں؟",
          "answer": "کثیر خلوی",
          "options": [
            "کثیر خلوی",
            "یک خلوی",
            "بے جان"
          ]
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: خلیے کا جیلی نما مادہ ___ ہے۔",
          "answer": "سائٹوپلازم"
        },
        {
          "type": "select",
          "text": "خلیے میں چیزوں کے داخل اور خارج ہونے کو کون قابو کرتا ہے؟",
          "answer": "خلیاتی جھلی",
          "options": [
            "خلیاتی جھلی",
            "پتا",
            "عدسہ"
          ]
        },
        {
          "type": "radio",
          "text": "درست یا غلط: جانور کے خلیے میں خلیاتی دیوار ہوتی ہے۔",
          "answer": "غلط",
          "options": [
            "درست",
            "غلط"
          ]
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: خوردبین کے عدسے چیزوں کو ___ دکھاتے ہیں۔",
          "answer": "بڑا",
          "alt": [
            "بڑا کرتے ہیں"
          ]
        }
      ]
    },
    "human-body-systems": {
      "title": "Human Body Systems",
      "titleUr": "انسانی جسم کے نظام",
      "intro": "Review digestive, respiratory, circulatory, excretory, and nervous systems, plus health, hygiene, and disease prevention.",
      "introUr": "نظام ہضم، تنفس، دوران خون، اخراج، اعصابی نظام، صحت، صفائی اور بیماری سے بچاؤ کا مطالعہ کریں۔",
      "focus": [
        "Digestive system breaks down food",
        "Respiratory system exchanges gases",
        "Circulatory system transports blood",
        "Excretory system removes wastes",
        "Nervous system controls body responses"
      ],
      "focusUr": [
        "نظام ہضم خوراک توڑتا ہے",
        "نظام تنفس گیسوں کا تبادلہ کرتا ہے",
        "نظام دوران خون خون پہنچاتا ہے",
        "نظام اخراج فاضل مادے نکالتا ہے",
        "اعصابی نظام جسم کے ردعمل قابو کرتا ہے"
      ],
      "examples": [
        [
          "Stomach",
          "Helps digest food."
        ],
        [
          "Lungs",
          "Take in oxygen."
        ],
        [
          "Heart",
          "Pumps blood."
        ],
        [
          "Kidneys",
          "Help remove waste from blood."
        ]
      ],
      "examplesUr": [
        [
          "معدہ",
          "خوراک ہضم کرنے میں مدد دیتا ہے۔"
        ],
        [
          "پھیپھڑے",
          "آکسیجن لیتے ہیں۔"
        ],
        [
          "دل",
          "خون پمپ کرتا ہے۔"
        ],
        [
          "گردے",
          "خون سے فاضل مادے نکالنے میں مدد کرتے ہیں۔"
        ]
      ],
      "quick": [
        "Each system has organs with special jobs.",
        "Healthy food, exercise, rest, and hygiene support body systems.",
        "Vaccination and clean habits reduce disease spread.",
        "The brain and nerves send messages."
      ],
      "quickUr": [
        "ہر نظام میں خاص کام کرنے والے اعضا ہوتے ہیں۔",
        "صحت مند غذا، ورزش، آرام اور صفائی جسم کو سہارا دیتے ہیں۔",
        "ویکسین اور صاف عادات بیماری کم کرتی ہیں۔",
        "دماغ اور اعصاب پیغام بھیجتے ہیں۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "Which organ pumps blood?",
          "answer": "Heart",
          "options": [
            "Heart",
            "Stomach",
            "Brain only"
          ]
        },
        {
          "type": "select",
          "text": "Which system helps breathing?",
          "answer": "Respiratory system",
          "options": [
            "Respiratory system",
            "Excretory system",
            "Skeletal system"
          ]
        },
        {
          "type": "select",
          "text": "Kidneys belong mainly to the...",
          "answer": "excretory system",
          "options": [
            "excretory system",
            "digestive system",
            "sound system"
          ]
        },
        {
          "type": "radio",
          "text": "True or False: The nervous system includes the brain.",
          "answer": "True",
          "options": [
            "True",
            "False"
          ]
        },
        {
          "type": "text",
          "text": "Complete: Lungs take in ___.",
          "answer": "oxygen"
        },
        {
          "type": "select",
          "text": "Which organ helps digest food?",
          "answer": "Stomach",
          "options": [
            "Stomach",
            "Ear",
            "Bone"
          ]
        },
        {
          "type": "radio",
          "text": "True or False: Washing hands helps prevent disease.",
          "answer": "True",
          "options": [
            "True",
            "False"
          ]
        },
        {
          "type": "select",
          "text": "Blood carries oxygen and nutrients through the...",
          "answer": "circulatory system",
          "options": [
            "circulatory system",
            "water cycle",
            "food web"
          ]
        },
        {
          "type": "text",
          "text": "Complete: The brain sends messages through ___.",
          "answer": "nerves"
        },
        {
          "type": "select",
          "text": "Which habit supports health?",
          "answer": "Exercise and rest",
          "options": [
            "Exercise and rest",
            "No sleep",
            "Dirty hands"
          ]
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "خون کون سا عضو پمپ کرتا ہے؟",
          "answer": "دل",
          "options": [
            "دل",
            "معدہ",
            "صرف دماغ"
          ]
        },
        {
          "type": "select",
          "text": "سانس لینے میں کون سا نظام مدد دیتا ہے؟",
          "answer": "نظام تنفس",
          "options": [
            "نظام تنفس",
            "نظام اخراج",
            "ہڈیوں کا نظام"
          ]
        },
        {
          "type": "select",
          "text": "گردے زیادہ تر کس نظام کا حصہ ہیں؟",
          "answer": "نظام اخراج",
          "options": [
            "نظام اخراج",
            "نظام ہضم",
            "آواز کا نظام"
          ]
        },
        {
          "type": "radio",
          "text": "درست یا غلط: اعصابی نظام میں دماغ شامل ہے۔",
          "answer": "درست",
          "options": [
            "درست",
            "غلط"
          ]
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: پھیپھڑے ___ لیتے ہیں۔",
          "answer": "آکسیجن"
        },
        {
          "type": "select",
          "text": "خوراک ہضم کرنے میں کون سا عضو مدد دیتا ہے؟",
          "answer": "معدہ",
          "options": [
            "معدہ",
            "کان",
            "ہڈی"
          ]
        },
        {
          "type": "radio",
          "text": "درست یا غلط: ہاتھ دھونا بیماری سے بچاتا ہے۔",
          "answer": "درست",
          "options": [
            "درست",
            "غلط"
          ]
        },
        {
          "type": "select",
          "text": "خون آکسیجن اور غذائی اجزا کس نظام سے پہنچاتا ہے؟",
          "answer": "نظام دوران خون",
          "options": [
            "نظام دوران خون",
            "آبی چکر",
            "غذائی جال"
          ]
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: دماغ ___ کے ذریعے پیغام بھیجتا ہے۔",
          "answer": "اعصاب"
        },
        {
          "type": "select",
          "text": "صحت کے لیے کون سی عادت اچھی ہے؟",
          "answer": "ورزش اور آرام",
          "options": [
            "ورزش اور آرام",
            "نیند نہ لینا",
            "گندے ہاتھ"
          ]
        }
      ]
    },
    "plants": {
      "title": "Plants",
      "titleUr": "پودے",
      "intro": "Learn photosynthesis, plant respiration, transport of water and food, reproduction, seed germination, and the importance of plants.",
      "introUr": "ضیائی تالیف، پودوں کی تنفس، پانی اور غذا کی ترسیل، تولید، بیج کا اگنا اور پودوں کی اہمیت سیکھیں۔",
      "focus": [
        "Photosynthesis makes food using light",
        "Plants also respire to release energy",
        "Roots absorb water and minerals",
        "Stems transport materials",
        "Flowers help reproduction and seed formation"
      ],
      "focusUr": [
        "ضیائی تالیف روشنی سے غذا بناتی ہے",
        "پودے توانائی کے لیے تنفس بھی کرتے ہیں",
        "جڑیں پانی اور نمکیات جذب کرتی ہیں",
        "تنا مادے پہنچاتا ہے",
        "پھول تولید اور بیج بنانے میں مدد دیتے ہیں"
      ],
      "examples": [
        [
          "Photosynthesis inputs",
          "Carbon dioxide, water, and sunlight."
        ],
        [
          "Output",
          "Food and oxygen."
        ],
        [
          "Roots",
          "Absorb water."
        ],
        [
          "Germination",
          "A seed begins to grow."
        ]
      ],
      "examplesUr": [
        [
          "ضیائی تالیف کے اجزا",
          "کاربن ڈائی آکسائیڈ، پانی اور دھوپ۔"
        ],
        [
          "پیداوار",
          "خوراک اور آکسیجن۔"
        ],
        [
          "جڑیں",
          "پانی جذب کرتی ہیں۔"
        ],
        [
          "اگاؤ",
          "بیج بڑھنا شروع کرتا ہے۔"
        ]
      ],
      "quick": [
        "Leaves are main food-making parts.",
        "Xylem carries water upward.",
        "Seeds need water, air, and suitable warmth to germinate.",
        "Plants provide food, oxygen, wood, shade, and habitat."
      ],
      "quickUr": [
        "پتے خوراک بنانے کا اہم حصہ ہیں۔",
        "زائلم پانی اوپر لے جاتا ہے۔",
        "بیج کو اگنے کے لیے پانی، ہوا اور مناسب حرارت چاہیے۔",
        "پودے خوراک، آکسیجن، لکڑی، سایہ اور رہائش دیتے ہیں۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "Photosynthesis mainly happens in...",
          "answer": "leaves",
          "options": [
            "leaves",
            "rocks",
            "clouds"
          ]
        },
        {
          "type": "select",
          "text": "Which gas do plants take in for photosynthesis?",
          "answer": "Carbon dioxide",
          "options": [
            "Carbon dioxide",
            "Nitrogen only",
            "Smoke"
          ]
        },
        {
          "type": "select",
          "text": "Which gas is released during photosynthesis?",
          "answer": "Oxygen",
          "options": [
            "Oxygen",
            "Helium",
            "Dust"
          ]
        },
        {
          "type": "radio",
          "text": "True or False: Roots absorb water from soil.",
          "answer": "True",
          "options": [
            "True",
            "False"
          ]
        },
        {
          "type": "text",
          "text": "Complete: A seed begins to grow during ___.",
          "answer": "germination"
        },
        {
          "type": "select",
          "text": "Which part transports water in a plant?",
          "answer": "Stem",
          "options": [
            "Stem",
            "Flower only",
            "Fruit only"
          ]
        },
        {
          "type": "radio",
          "text": "True or False: Plants respire.",
          "answer": "True",
          "options": [
            "True",
            "False"
          ]
        },
        {
          "type": "select",
          "text": "What do seeds need to germinate?",
          "answer": "Water, air, and warmth",
          "options": [
            "Water, air, and warmth",
            "Only darkness",
            "Plastic"
          ]
        },
        {
          "type": "text",
          "text": "Complete: Plants give us food and ___.",
          "answer": "oxygen"
        },
        {
          "type": "select",
          "text": "Which plant part helps reproduction?",
          "answer": "Flower",
          "options": [
            "Flower",
            "Root hair only",
            "Bark only"
          ]
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "ضیائی تالیف زیادہ تر کہاں ہوتی ہے؟",
          "answer": "پتوں میں",
          "options": [
            "پتوں میں",
            "چٹانوں میں",
            "بادلوں میں"
          ]
        },
        {
          "type": "select",
          "text": "پودے ضیائی تالیف کے لیے کون سی گیس لیتے ہیں؟",
          "answer": "کاربن ڈائی آکسائیڈ",
          "options": [
            "کاربن ڈائی آکسائیڈ",
            "صرف نائٹروجن",
            "دھواں"
          ]
        },
        {
          "type": "select",
          "text": "ضیائی تالیف میں کون سی گیس خارج ہوتی ہے؟",
          "answer": "آکسیجن",
          "options": [
            "آکسیجن",
            "ہیلیم",
            "گرد"
          ]
        },
        {
          "type": "radio",
          "text": "درست یا غلط: جڑیں مٹی سے پانی جذب کرتی ہیں۔",
          "answer": "درست",
          "options": [
            "درست",
            "غلط"
          ]
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: بیج کا بڑھنا ___ کہلاتا ہے۔",
          "answer": "اگاؤ",
          "alt": [
            "germination"
          ]
        },
        {
          "type": "select",
          "text": "پودے میں پانی کون سا حصہ پہنچاتا ہے؟",
          "answer": "تنا",
          "options": [
            "تنا",
            "صرف پھول",
            "صرف پھل"
          ]
        },
        {
          "type": "radio",
          "text": "درست یا غلط: پودے تنفس کرتے ہیں۔",
          "answer": "درست",
          "options": [
            "درست",
            "غلط"
          ]
        },
        {
          "type": "select",
          "text": "بیج کو اگنے کے لیے کیا چاہیے؟",
          "answer": "پانی، ہوا اور حرارت",
          "options": [
            "پانی، ہوا اور حرارت",
            "صرف اندھیرا",
            "پلاسٹک"
          ]
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: پودے ہمیں خوراک اور ___ دیتے ہیں۔",
          "answer": "آکسیجن"
        },
        {
          "type": "select",
          "text": "تولید میں کون سا حصہ مدد دیتا ہے؟",
          "answer": "پھول",
          "options": [
            "پھول",
            "صرف جڑ کا بال",
            "صرف چھال"
          ]
        }
      ]
    },
    "ecosystems-and-environment": {
      "title": "Ecosystems and Environment",
      "titleUr": "ماحولیاتی نظام اور ماحول",
      "intro": "Explore habitats, ecosystems, producers, consumers, decomposers, food chains, food webs, adaptations, pollution, and conservation.",
      "introUr": "رہائش گاہ، ماحولیاتی نظام، پیدا کرنے والے، صارف، تجزیہ کار، غذائی زنجیر، غذائی جال، مطابقت، آلودگی اور تحفظ سیکھیں۔",
      "focus": [
        "Habitats provide shelter, food, and conditions",
        "Producers make food",
        "Consumers eat plants or animals",
        "Decomposers recycle nutrients",
        "Pollution harms ecosystems"
      ],
      "focusUr": [
        "رہائش گاہ خوراک، پناہ اور حالات دیتی ہے",
        "پیدا کرنے والے خوراک بناتے ہیں",
        "صارف پودے یا جانور کھاتے ہیں",
        "تجزیہ کار غذائی اجزا واپس کرتے ہیں",
        "آلودگی نظام کو نقصان دیتی ہے"
      ],
      "examples": [
        [
          "Producer",
          "Green plant."
        ],
        [
          "Consumer",
          "Rabbit or hawk."
        ],
        [
          "Decomposer",
          "Fungus breaks dead matter."
        ],
        [
          "Adaptation",
          "Camel stores fat in hump."
        ]
      ],
      "examplesUr": [
        [
          "پیدا کرنے والا",
          "سبز پودا۔"
        ],
        [
          "صارف",
          "خرگوش یا باز۔"
        ],
        [
          "تجزیہ کار",
          "فنجائی مردہ مادہ توڑتی ہے۔"
        ],
        [
          "مطابقت",
          "اونٹ کوہان میں چربی محفوظ کرتا ہے۔"
        ]
      ],
      "quick": [
        "Food chains show one path of energy.",
        "Food webs show many connected paths.",
        "Adaptations help organisms survive.",
        "Conservation means protecting resources."
      ],
      "quickUr": [
        "غذائی زنجیر توانائی کا ایک راستہ دکھاتی ہے۔",
        "غذائی جال کئی جڑے راستے دکھاتا ہے۔",
        "مطابقت جاندار کو زندہ رہنے میں مدد دیتی ہے۔",
        "تحفظ وسائل بچانا ہے۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "Which is a producer?",
          "answer": "Grass",
          "options": [
            "Grass",
            "Tiger",
            "Mushroom only"
          ]
        },
        {
          "type": "select",
          "text": "A rabbit that eats grass is a...",
          "answer": "consumer",
          "options": [
            "consumer",
            "producer",
            "rock"
          ]
        },
        {
          "type": "select",
          "text": "Which organism can decompose dead matter?",
          "answer": "Fungus",
          "options": [
            "Fungus",
            "Eagle",
            "Sun"
          ]
        },
        {
          "type": "radio",
          "text": "True or False: A food web has connected food chains.",
          "answer": "True",
          "options": [
            "True",
            "False"
          ]
        },
        {
          "type": "text",
          "text": "Complete: The place where an organism lives is its ___.",
          "answer": "habitat"
        },
        {
          "type": "select",
          "text": "Which is pollution?",
          "answer": "Dirty smoke in air",
          "options": [
            "Dirty smoke in air",
            "Clean water",
            "Planting trees"
          ]
        },
        {
          "type": "radio",
          "text": "True or False: Adaptations help organisms survive.",
          "answer": "True",
          "options": [
            "True",
            "False"
          ]
        },
        {
          "type": "select",
          "text": "Which action conserves the environment?",
          "answer": "Recycle paper",
          "options": [
            "Recycle paper",
            "Throw trash in rivers",
            "Waste water"
          ]
        },
        {
          "type": "text",
          "text": "Complete: Food chains show flow of ___.",
          "answer": "energy"
        },
        {
          "type": "select",
          "text": "Which is an adaptation for desert life?",
          "answer": "Camel hump",
          "options": [
            "Camel hump",
            "Fish gills only",
            "Bird nest only"
          ]
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "پیدا کرنے والا کون ہے؟",
          "answer": "گھاس",
          "options": [
            "گھاس",
            "شیر",
            "صرف مشروم"
          ]
        },
        {
          "type": "select",
          "text": "گھاس کھانے والا خرگوش کیا ہے؟",
          "answer": "صارف",
          "options": [
            "صارف",
            "پیدا کرنے والا",
            "چٹان"
          ]
        },
        {
          "type": "select",
          "text": "مردہ مادہ کون توڑ سکتا ہے؟",
          "answer": "فنجائی",
          "options": [
            "فنجائی",
            "عقاب",
            "سورج"
          ]
        },
        {
          "type": "radio",
          "text": "درست یا غلط: غذائی جال میں جڑی ہوئی غذائی زنجیریں ہوتی ہیں۔",
          "answer": "درست",
          "options": [
            "درست",
            "غلط"
          ]
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: جاندار جہاں رہتا ہے وہ اس کی ___ ہے۔",
          "answer": "رہائش گاہ"
        },
        {
          "type": "select",
          "text": "آلودگی کون سی ہے؟",
          "answer": "ہوا میں گندا دھواں",
          "options": [
            "ہوا میں گندا دھواں",
            "صاف پانی",
            "درخت لگانا"
          ]
        },
        {
          "type": "radio",
          "text": "درست یا غلط: مطابقت جاندار کو زندہ رہنے میں مدد دیتی ہے۔",
          "answer": "درست",
          "options": [
            "درست",
            "غلط"
          ]
        },
        {
          "type": "select",
          "text": "ماحول کے تحفظ کا عمل کون سا ہے؟",
          "answer": "کاغذ ری سائیکل کرنا",
          "options": [
            "کاغذ ری سائیکل کرنا",
            "دریا میں کچرا پھینکنا",
            "پانی ضائع کرنا"
          ]
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: غذائی زنجیر ___ کے بہاؤ کو دکھاتی ہے۔",
          "answer": "توانائی"
        },
        {
          "type": "select",
          "text": "صحرا کے لیے مطابقت کون سی ہے؟",
          "answer": "اونٹ کا کوہان",
          "options": [
            "اونٹ کا کوہان",
            "صرف مچھلی کے گلپھڑے",
            "صرف پرندے کا گھونسلا"
          ]
        }
      ]
    },
    "matter-and-its-properties": {
      "title": "Matter and Its Properties",
      "titleUr": "مادہ اور اس کی خصوصیات",
      "intro": "Understand particle theory, states of matter, changes of state, elements, compounds, mixtures, solutions, solubility, and separation techniques.",
      "introUr": "ذراتی نظریہ، مادے کی حالتیں، حالت کی تبدیلی، عناصر، مرکبات، آمیزے، محلول، حل پذیری اور علیحدگی کے طریقے سیکھیں۔",
      "focus": [
        "Particles make up matter",
        "Solids, liquids, and gases have different particle arrangements",
        "Melting, freezing, evaporation, and condensation",
        "Elements, compounds, mixtures, and solutions",
        "Filtration, evaporation, sieving, and magnetic separation"
      ],
      "focusUr": [
        "مادہ ذرات سے بنا ہے",
        "ٹھوس، مائع اور گیس میں ذرات کی ترتیب مختلف ہوتی ہے",
        "پگھلنا، جمنا، بخارات اور تکثیف",
        "عناصر، مرکبات، آمیزے اور محلول",
        "چھاننا، بخارات، چھلنی اور مقناطیسی علیحدگی"
      ],
      "examples": [
        [
          "Solid",
          "Particles are packed closely."
        ],
        [
          "Gas",
          "Particles are far apart."
        ],
        [
          "Solution",
          "Salt dissolved in water."
        ],
        [
          "Filtration",
          "Separates insoluble solid from liquid."
        ]
      ],
      "examplesUr": [
        [
          "ٹھوس",
          "ذرات بہت قریب ہوتے ہیں۔"
        ],
        [
          "گیس",
          "ذرات دور دور ہوتے ہیں۔"
        ],
        [
          "محلول",
          "پانی میں نمک حل ہونا۔"
        ],
        [
          "چھاننا",
          "غیر حل پذیر ٹھوس کو مائع سے جدا کرتا ہے۔"
        ]
      ],
      "quick": [
        "Matter has mass and occupies space.",
        "Temperature changes can change state.",
        "A mixture can often be separated physically.",
        "Solubility means how much solute dissolves."
      ],
      "quickUr": [
        "مادہ کمیت رکھتا اور جگہ گھیرتا ہے۔",
        "درجہ حرارت بدلنے سے حالت بدل سکتی ہے۔",
        "آمیزہ اکثر جسمانی طریقے سے جدا ہو سکتا ہے۔",
        "حل پذیری کا مطلب ہے کتنا مادہ حل ہوتا ہے۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "Matter is made of tiny...",
          "answer": "particles",
          "options": [
            "particles",
            "planets",
            "leaves"
          ]
        },
        {
          "type": "select",
          "text": "Particles are packed closest in a...",
          "answer": "solid",
          "options": [
            "solid",
            "gas",
            "cloud"
          ]
        },
        {
          "type": "select",
          "text": "Changing liquid water to vapor is...",
          "answer": "evaporation",
          "options": [
            "evaporation",
            "freezing",
            "sieving"
          ]
        },
        {
          "type": "radio",
          "text": "True or False: A mixture can contain more than one substance.",
          "answer": "True",
          "options": [
            "True",
            "False"
          ]
        },
        {
          "type": "text",
          "text": "Complete: Salt dissolved in water is a ___.",
          "answer": "solution"
        },
        {
          "type": "select",
          "text": "Which method separates sand from water?",
          "answer": "Filtration",
          "options": [
            "Filtration",
            "Magnet",
            "Freezing only"
          ]
        },
        {
          "type": "select",
          "text": "Which method can separate iron filings?",
          "answer": "Magnetic separation",
          "options": [
            "Magnetic separation",
            "Evaporation",
            "Condensation"
          ]
        },
        {
          "type": "radio",
          "text": "True or False: Gas particles are usually far apart.",
          "answer": "True",
          "options": [
            "True",
            "False"
          ]
        },
        {
          "type": "text",
          "text": "Complete: Ice changing to water is ___.",
          "answer": "melting"
        },
        {
          "type": "select",
          "text": "Which is an element?",
          "answer": "Oxygen",
          "options": [
            "Oxygen",
            "Salt water",
            "Air mixture"
          ]
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "مادہ چھوٹے ___ سے بنا ہے۔",
          "answer": "ذرات",
          "options": [
            "ذرات",
            "سیاروں",
            "پتوں"
          ]
        },
        {
          "type": "select",
          "text": "ذرات کس حالت میں سب سے قریب ہوتے ہیں؟",
          "answer": "ٹھوس",
          "options": [
            "ٹھوس",
            "گیس",
            "بادل"
          ]
        },
        {
          "type": "select",
          "text": "مائع پانی کا بخارات بننا کیا ہے؟",
          "answer": "بخارات",
          "options": [
            "بخارات",
            "جمنا",
            "چھلنی"
          ]
        },
        {
          "type": "radio",
          "text": "درست یا غلط: آمیزے میں ایک سے زیادہ مادے ہو سکتے ہیں۔",
          "answer": "درست",
          "options": [
            "درست",
            "غلط"
          ]
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: پانی میں حل نمک ___ ہے۔",
          "answer": "محلول"
        },
        {
          "type": "select",
          "text": "ریت کو پانی سے جدا کرنے کا طریقہ کون سا ہے؟",
          "answer": "چھاننا",
          "options": [
            "چھاننا",
            "مقناطیس",
            "صرف جمنا"
          ]
        },
        {
          "type": "select",
          "text": "لوہے کے برادے کو جدا کرنے کا طریقہ کون سا ہے؟",
          "answer": "مقناطیسی علیحدگی",
          "options": [
            "مقناطیسی علیحدگی",
            "بخارات",
            "تکثیف"
          ]
        },
        {
          "type": "radio",
          "text": "درست یا غلط: گیس کے ذرات عموماً دور دور ہوتے ہیں۔",
          "answer": "درست",
          "options": [
            "درست",
            "غلط"
          ]
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: برف کا پانی بننا ___ ہے۔",
          "answer": "پگھلنا"
        },
        {
          "type": "select",
          "text": "عنصر کون سا ہے؟",
          "answer": "آکسیجن",
          "options": [
            "آکسیجن",
            "نمکین پانی",
            "ہوا کا آمیزہ"
          ]
        }
      ]
    },
    "forces-and-motion": {
      "title": "Forces and Motion",
      "titleUr": "قوتیں اور حرکت",
      "intro": "Learn types of force, contact and non-contact forces, friction, gravity, speed, and simple motion graphs.",
      "introUr": "قوت کی اقسام، لمس اور غیر لمس قوتیں، رگڑ، کشش ثقل، رفتار اور سادہ حرکتی گراف سیکھیں۔",
      "focus": [
        "Forces can push, pull, start, stop, or change motion",
        "Contact forces need touching",
        "Non-contact forces act at a distance",
        "Friction opposes motion",
        "Speed compares distance and time"
      ],
      "focusUr": [
        "قوت دھکیل، کھینچ، شروع، روک یا حرکت بدل سکتی ہے",
        "لمس قوت میں چھونا ضروری ہے",
        "غیر لمس قوت دور سے اثر کرتی ہے",
        "رگڑ حرکت کی مخالفت کرتی ہے",
        "رفتار فاصلے اور وقت کا موازنہ ہے"
      ],
      "examples": [
        [
          "Friction",
          "Slows a sliding book."
        ],
        [
          "Gravity",
          "Pulls objects toward Earth."
        ],
        [
          "Speed",
          "distance divided by time."
        ],
        [
          "Magnetic force",
          "Acts without touching."
        ]
      ],
      "examplesUr": [
        [
          "رگڑ",
          "سرکتی کتاب کو آہستہ کرتی ہے۔"
        ],
        [
          "کشش ثقل",
          "چیزوں کو زمین کی طرف کھینچتی ہے۔"
        ],
        [
          "رفتار",
          "فاصلہ تقسیم وقت۔"
        ],
        [
          "مقناطیسی قوت",
          "بغیر چھوئے اثر کرتی ہے۔"
        ]
      ],
      "quick": [
        "More force can change motion more.",
        "Smooth surfaces usually have less friction.",
        "Gravity is a non-contact force.",
        "Use the same units when calculating speed."
      ],
      "quickUr": [
        "زیادہ قوت حرکت کو زیادہ بدل سکتی ہے۔",
        "ہموار سطح پر عموماً رگڑ کم ہوتی ہے۔",
        "کشش ثقل غیر لمس قوت ہے۔",
        "رفتار نکالتے وقت ایک جیسی اکائیاں استعمال کریں۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "A push or pull is a...",
          "answer": "force",
          "options": [
            "force",
            "cell",
            "solution"
          ]
        },
        {
          "type": "select",
          "text": "Which force pulls objects toward Earth?",
          "answer": "Gravity",
          "options": [
            "Gravity",
            "Friction only",
            "Sound"
          ]
        },
        {
          "type": "select",
          "text": "Friction usually...",
          "answer": "opposes motion",
          "options": [
            "opposes motion",
            "makes cells",
            "creates sunlight"
          ]
        },
        {
          "type": "radio",
          "text": "True or False: Magnetic force can act without touching.",
          "answer": "True",
          "options": [
            "True",
            "False"
          ]
        },
        {
          "type": "text",
          "text": "Complete: Speed = distance divided by ___.",
          "answer": "time"
        },
        {
          "type": "select",
          "text": "Which is a contact force?",
          "answer": "Friction",
          "options": [
            "Friction",
            "Gravity",
            "Magnetic force"
          ]
        },
        {
          "type": "radio",
          "text": "True or False: A force can change direction of motion.",
          "answer": "True",
          "options": [
            "True",
            "False"
          ]
        },
        {
          "type": "select",
          "text": "A distance-time graph can show...",
          "answer": "motion",
          "options": [
            "motion",
            "cell wall",
            "weather only"
          ]
        },
        {
          "type": "text",
          "text": "Complete: A rough surface has more ___.",
          "answer": "friction"
        },
        {
          "type": "select",
          "text": "If a bike travels farther in the same time, its speed is...",
          "answer": "greater",
          "options": [
            "greater",
            "zero",
            "unchanged always"
          ]
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "دھکیل یا کھینچ کیا ہے؟",
          "answer": "قوت",
          "options": [
            "قوت",
            "خلیہ",
            "محلول"
          ]
        },
        {
          "type": "select",
          "text": "چیزوں کو زمین کی طرف کون کھینچتا ہے؟",
          "answer": "کشش ثقل",
          "options": [
            "کشش ثقل",
            "صرف رگڑ",
            "آواز"
          ]
        },
        {
          "type": "select",
          "text": "رگڑ عموماً کیا کرتی ہے؟",
          "answer": "حرکت کی مخالفت",
          "options": [
            "حرکت کی مخالفت",
            "خلیات بنانا",
            "دھوپ بنانا"
          ]
        },
        {
          "type": "radio",
          "text": "درست یا غلط: مقناطیسی قوت بغیر چھوئے اثر کر سکتی ہے۔",
          "answer": "درست",
          "options": [
            "درست",
            "غلط"
          ]
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: رفتار = فاصلہ تقسیم ___.",
          "answer": "وقت"
        },
        {
          "type": "select",
          "text": "لمس قوت کون سی ہے؟",
          "answer": "رگڑ",
          "options": [
            "رگڑ",
            "کشش ثقل",
            "مقناطیسی قوت"
          ]
        },
        {
          "type": "radio",
          "text": "درست یا غلط: قوت حرکت کی سمت بدل سکتی ہے۔",
          "answer": "درست",
          "options": [
            "درست",
            "غلط"
          ]
        },
        {
          "type": "select",
          "text": "فاصلہ-وقت گراف کیا دکھا سکتا ہے؟",
          "answer": "حرکت",
          "options": [
            "حرکت",
            "خلیاتی دیوار",
            "صرف موسم"
          ]
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: کھردری سطح میں ___ زیادہ ہوتی ہے۔",
          "answer": "رگڑ"
        },
        {
          "type": "select",
          "text": "اگر سائیکل اتنے ہی وقت میں زیادہ فاصلہ طے کرے تو رفتار...",
          "answer": "زیادہ ہوگی",
          "options": [
            "زیادہ ہوگی",
            "صفر ہوگی",
            "ہمیشہ وہی رہے گی"
          ]
        }
      ]
    },
    "energy": {
      "title": "Energy",
      "titleUr": "توانائی",
      "intro": "Study forms of energy, energy transfer, heat transfer by conduction, convection and radiation, light, sound, and conservation of energy.",
      "introUr": "توانائی کی اقسام، توانائی کی منتقلی، حرارت کی ترسیل، حمل اور اشعاع، روشنی، آواز اور توانائی کے تحفظ کا تعارف سیکھیں۔",
      "focus": [
        "Energy enables work and change",
        "Energy can transfer and transform",
        "Heat transfers by conduction, convection, and radiation",
        "Light travels from sources",
        "Sound is made by vibrations"
      ],
      "focusUr": [
        "توانائی کام اور تبدیلی ممکن بناتی ہے",
        "توانائی منتقل اور تبدیل ہو سکتی ہے",
        "حرارت ترسیل، حمل اور اشعاع سے منتقل ہوتی ہے",
        "روشنی منبع سے سفر کرتی ہے",
        "آواز ارتعاش سے بنتی ہے"
      ],
      "examples": [
        [
          "Conduction",
          "Heat through a metal spoon."
        ],
        [
          "Convection",
          "Warm air rises."
        ],
        [
          "Radiation",
          "Heat from the sun."
        ],
        [
          "Sound",
          "Vibrating string makes sound."
        ]
      ],
      "examplesUr": [
        [
          "ترسیل",
          "دھاتی چمچ میں حرارت۔"
        ],
        [
          "حمل",
          "گرم ہوا اوپر جاتی ہے۔"
        ],
        [
          "اشعاع",
          "سورج سے حرارت۔"
        ],
        [
          "آواز",
          "لرزتی تار آواز بناتی ہے۔"
        ]
      ],
      "quick": [
        "Energy is not created or destroyed in simple examples; it changes form.",
        "Black surfaces absorb more heat.",
        "Sound needs a medium to travel.",
        "Light can be reflected."
      ],
      "quickUr": [
        "سادہ مثالوں میں توانائی ختم یا پیدا نہیں ہوتی؛ شکل بدلتی ہے۔",
        "سیاہ سطحیں زیادہ حرارت جذب کرتی ہیں۔",
        "آواز کو سفر کے لیے واسطہ چاہیے۔",
        "روشنی منعکس ہو سکتی ہے۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "Sound is produced by...",
          "answer": "vibrations",
          "options": [
            "vibrations",
            "still air only",
            "soil"
          ]
        },
        {
          "type": "select",
          "text": "Heat from the sun reaches us mainly by...",
          "answer": "radiation",
          "options": [
            "radiation",
            "sieving",
            "filtration"
          ]
        },
        {
          "type": "select",
          "text": "Heat moving through a metal rod is...",
          "answer": "conduction",
          "options": [
            "conduction",
            "convection",
            "pollination"
          ]
        },
        {
          "type": "radio",
          "text": "True or False: Warm air rises in convection.",
          "answer": "True",
          "options": [
            "True",
            "False"
          ]
        },
        {
          "type": "text",
          "text": "Complete: Energy can change from one ___ to another.",
          "answer": "form"
        },
        {
          "type": "select",
          "text": "Which is a source of light?",
          "answer": "Bulb",
          "options": [
            "Bulb",
            "Book",
            "Stone"
          ]
        },
        {
          "type": "radio",
          "text": "True or False: Sound can travel through air.",
          "answer": "True",
          "options": [
            "True",
            "False"
          ]
        },
        {
          "type": "select",
          "text": "Which energy is in moving objects?",
          "answer": "Kinetic energy",
          "options": [
            "Kinetic energy",
            "Chemical only",
            "No energy"
          ]
        },
        {
          "type": "text",
          "text": "Complete: Heat is a form of ___.",
          "answer": "energy"
        },
        {
          "type": "select",
          "text": "Which surface usually absorbs more heat?",
          "answer": "Black surface",
          "options": [
            "Black surface",
            "Shiny white surface",
            "Mirror only"
          ]
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "آواز کس سے بنتی ہے؟",
          "answer": "ارتعاش",
          "options": [
            "ارتعاش",
            "صرف ساکن ہوا",
            "مٹی"
          ]
        },
        {
          "type": "select",
          "text": "سورج کی حرارت ہم تک زیادہ تر کس سے آتی ہے؟",
          "answer": "اشعاع",
          "options": [
            "اشعاع",
            "چھلنی",
            "چھاننا"
          ]
        },
        {
          "type": "select",
          "text": "دھاتی راڈ میں حرارت کا جانا کیا ہے؟",
          "answer": "ترسیل",
          "options": [
            "ترسیل",
            "حمل",
            "زیرگی"
          ]
        },
        {
          "type": "radio",
          "text": "درست یا غلط: حمل میں گرم ہوا اوپر جاتی ہے۔",
          "answer": "درست",
          "options": [
            "درست",
            "غلط"
          ]
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: توانائی ایک ___ سے دوسری میں بدل سکتی ہے۔",
          "answer": "شکل"
        },
        {
          "type": "select",
          "text": "روشنی کا منبع کون سا ہے؟",
          "answer": "بلب",
          "options": [
            "بلب",
            "کتاب",
            "پتھر"
          ]
        },
        {
          "type": "radio",
          "text": "درست یا غلط: آواز ہوا میں سفر کر سکتی ہے۔",
          "answer": "درست",
          "options": [
            "درست",
            "غلط"
          ]
        },
        {
          "type": "select",
          "text": "حرکت کرتی چیزوں میں کون سی توانائی ہوتی ہے؟",
          "answer": "حرکی توانائی",
          "options": [
            "حرکی توانائی",
            "صرف کیمیائی",
            "کوئی توانائی نہیں"
          ]
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: حرارت ___ کی ایک قسم ہے۔",
          "answer": "توانائی"
        },
        {
          "type": "select",
          "text": "کون سی سطح عموماً زیادہ حرارت جذب کرتی ہے؟",
          "answer": "سیاہ سطح",
          "options": [
            "سیاہ سطح",
            "چمکدار سفید سطح",
            "صرف آئینہ"
          ]
        }
      ]
    },
    "electricity-and-magnetism": {
      "title": "Electricity and Magnetism",
      "titleUr": "بجلی اور مقناطیسیت",
      "intro": "Learn electric circuits, series and parallel circuits, conductors, insulators, electrical safety, magnets, magnetic fields, and electromagnets.",
      "introUr": "برقی سرکٹ، سلسلہ وار اور متوازی سرکٹ، موصل، غیر موصل، بجلی کی حفاظت، مقناطیس، مقناطیسی میدان اور برقی مقناطیس سیکھیں۔",
      "focus": [
        "A complete circuit lets current flow",
        "Series circuits have one path",
        "Parallel circuits have more than one path",
        "Conductors and insulators have different uses",
        "Electric current can make an electromagnet"
      ],
      "focusUr": [
        "مکمل سرکٹ میں کرنٹ بہتا ہے",
        "سلسلہ وار سرکٹ میں ایک راستہ ہوتا ہے",
        "متوازی سرکٹ میں ایک سے زیادہ راستے ہوتے ہیں",
        "موصل اور غیر موصل کے الگ استعمال ہیں",
        "برقی کرنٹ برقی مقناطیس بنا سکتا ہے"
      ],
      "examples": [
        [
          "Conductor",
          "Copper wire lets current pass."
        ],
        [
          "Insulator",
          "Plastic covering protects wires."
        ],
        [
          "Series circuit",
          "One path for current."
        ],
        [
          "Electromagnet",
          "A coil with current acts like a magnet."
        ]
      ],
      "examplesUr": [
        [
          "موصل",
          "تانبے کی تار کرنٹ گزارتی ہے۔"
        ],
        [
          "غیر موصل",
          "پلاسٹک تار کو محفوظ ڈھانپتا ہے۔"
        ],
        [
          "سلسلہ وار سرکٹ",
          "کرنٹ کا ایک راستہ۔"
        ],
        [
          "برقی مقناطیس",
          "کرنٹ والی کوائل مقناطیس جیسا کام کرتی ہے۔"
        ]
      ],
      "quick": [
        "Never touch switches with wet hands.",
        "A switch opens or closes a circuit.",
        "Like magnetic poles repel; unlike poles attract.",
        "Iron and steel are magnetic materials."
      ],
      "quickUr": [
        "گیلے ہاتھوں سے سوئچ نہ چھوئیں۔",
        "سوئچ سرکٹ کھولتا یا بند کرتا ہے۔",
        "ایک جیسے قطب دھکیلتے، مختلف قطب کھینچتے ہیں۔",
        "لوہا اور اسٹیل مقناطیسی مواد ہیں۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "A complete circuit allows...",
          "answer": "current to flow",
          "options": [
            "current to flow",
            "plants to germinate",
            "rocks to melt always"
          ]
        },
        {
          "type": "select",
          "text": "Which material is a conductor?",
          "answer": "Copper",
          "options": [
            "Copper",
            "Rubber",
            "Plastic"
          ]
        },
        {
          "type": "select",
          "text": "Which is an insulator?",
          "answer": "Plastic",
          "options": [
            "Plastic",
            "Iron",
            "Steel"
          ]
        },
        {
          "type": "radio",
          "text": "True or False: A series circuit has one path.",
          "answer": "True",
          "options": [
            "True",
            "False"
          ]
        },
        {
          "type": "text",
          "text": "Complete: A switch opens or closes a ___.",
          "answer": "circuit"
        },
        {
          "type": "select",
          "text": "Opposite magnetic poles...",
          "answer": "attract",
          "options": [
            "attract",
            "always repel",
            "become wood"
          ]
        },
        {
          "type": "radio",
          "text": "True or False: Wet hands near electricity are dangerous.",
          "answer": "True",
          "options": [
            "True",
            "False"
          ]
        },
        {
          "type": "select",
          "text": "An electromagnet needs...",
          "answer": "electric current",
          "options": [
            "electric current",
            "only sunlight",
            "only soil"
          ]
        },
        {
          "type": "text",
          "text": "Complete: Iron is a ___ material.",
          "answer": "magnetic"
        },
        {
          "type": "select",
          "text": "A parallel circuit has...",
          "answer": "more than one path",
          "options": [
            "more than one path",
            "no wire ever",
            "only one path"
          ]
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "مکمل سرکٹ میں کیا بہتا ہے؟",
          "answer": "کرنٹ",
          "options": [
            "کرنٹ",
            "پودے",
            "ہمیشہ پگھلی چٹان"
          ]
        },
        {
          "type": "select",
          "text": "موصل مواد کون سا ہے؟",
          "answer": "تانبا",
          "options": [
            "تانبا",
            "ربڑ",
            "پلاسٹک"
          ]
        },
        {
          "type": "select",
          "text": "غیر موصل کون سا ہے؟",
          "answer": "پلاسٹک",
          "options": [
            "پلاسٹک",
            "لوہا",
            "اسٹیل"
          ]
        },
        {
          "type": "radio",
          "text": "درست یا غلط: سلسلہ وار سرکٹ میں ایک راستہ ہوتا ہے۔",
          "answer": "درست",
          "options": [
            "درست",
            "غلط"
          ]
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: سوئچ ___ کھولتا یا بند کرتا ہے۔",
          "answer": "سرکٹ"
        },
        {
          "type": "select",
          "text": "مختلف مقناطیسی قطب کیا کرتے ہیں؟",
          "answer": "کھینچتے ہیں",
          "options": [
            "کھینچتے ہیں",
            "ہمیشہ دھکیلتے ہیں",
            "لکڑی بن جاتے ہیں"
          ]
        },
        {
          "type": "radio",
          "text": "درست یا غلط: بجلی کے قریب گیلے ہاتھ خطرناک ہیں۔",
          "answer": "درست",
          "options": [
            "درست",
            "غلط"
          ]
        },
        {
          "type": "select",
          "text": "برقی مقناطیس کو کیا چاہیے؟",
          "answer": "برقی کرنٹ",
          "options": [
            "برقی کرنٹ",
            "صرف دھوپ",
            "صرف مٹی"
          ]
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: لوہا ___ مواد ہے۔",
          "answer": "مقناطیسی"
        },
        {
          "type": "select",
          "text": "متوازی سرکٹ میں کیا ہوتا ہے؟",
          "answer": "ایک سے زیادہ راستے",
          "options": [
            "ایک سے زیادہ راستے",
            "کبھی تار نہیں",
            "صرف ایک راستہ"
          ]
        }
      ]
    },
    "earth-and-space": {
      "title": "Earth and Space",
      "titleUr": "زمین اور خلا",
      "intro": "Study Earth structure, rocks, minerals, soil formation, weathering, erosion, the solar system, and Earth movements.",
      "introUr": "زمین کی ساخت، چٹانیں، معدنیات، مٹی بننا، موسم زدگی، کٹاؤ، نظام شمسی اور زمین کی حرکات سیکھیں۔",
      "focus": [
        "Earth has crust, mantle, outer core, and inner core",
        "Rocks are made of minerals",
        "Soil forms from weathered rocks and organic matter",
        "Weathering breaks rocks; erosion moves particles",
        "Earth rotation and revolution cause day/night and seasons"
      ],
      "focusUr": [
        "زمین میں پرت، مینٹل، بیرونی مرکزہ اور اندرونی مرکزہ ہیں",
        "چٹانیں معدنیات سے بنتی ہیں",
        "مٹی ٹوٹی چٹانوں اور نامیاتی مادے سے بنتی ہے",
        "موسم زدگی چٹان توڑتی ہے؛ کٹاؤ ذرات لے جاتا ہے",
        "زمین کی گردش اور چکر دن رات اور موسم بناتے ہیں"
      ],
      "examples": [
        [
          "Crust",
          "Thin outer layer of Earth."
        ],
        [
          "Mineral",
          "A natural non-living solid."
        ],
        [
          "Weathering",
          "Breaking rocks into smaller pieces."
        ],
        [
          "Rotation",
          "Earth spins on its axis."
        ]
      ],
      "examplesUr": [
        [
          "پرت",
          "زمین کی پتلی بیرونی تہہ۔"
        ],
        [
          "معدن",
          "قدرتی بے جان ٹھوس۔"
        ],
        [
          "موسم زدگی",
          "چٹان کا چھوٹے ٹکڑوں میں ٹوٹنا۔"
        ],
        [
          "گردش",
          "زمین کا اپنے محور پر گھومنا۔"
        ]
      ],
      "quick": [
        "Day and night happen because Earth rotates.",
        "Seasons relate to Earth revolution and tilt.",
        "Water, wind, and temperature can weather rocks.",
        "Soil supports plant growth."
      ],
      "quickUr": [
        "دن رات زمین کی گردش سے ہوتے ہیں۔",
        "موسم زمین کے چکر اور جھکاؤ سے متعلق ہیں۔",
        "پانی، ہوا اور درجہ حرارت چٹانیں توڑ سکتے ہیں۔",
        "مٹی پودوں کی بڑھوتری میں مدد دیتی ہے۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "The outer layer of Earth is the...",
          "answer": "crust",
          "options": [
            "crust",
            "inner core",
            "atmosphere only"
          ]
        },
        {
          "type": "select",
          "text": "Rocks are made of...",
          "answer": "minerals",
          "options": [
            "minerals",
            "cells only",
            "clouds"
          ]
        },
        {
          "type": "select",
          "text": "Breaking rocks into smaller pieces is...",
          "answer": "weathering",
          "options": [
            "weathering",
            "digestion",
            "photosynthesis"
          ]
        },
        {
          "type": "radio",
          "text": "True or False: Erosion moves rock and soil particles.",
          "answer": "True",
          "options": [
            "True",
            "False"
          ]
        },
        {
          "type": "text",
          "text": "Complete: Earth spins on its ___.",
          "answer": "axis"
        },
        {
          "type": "select",
          "text": "Earth rotation causes...",
          "answer": "day and night",
          "options": [
            "day and night",
            "cell division only",
            "magnetism only"
          ]
        },
        {
          "type": "radio",
          "text": "True or False: Soil can form from weathered rock.",
          "answer": "True",
          "options": [
            "True",
            "False"
          ]
        },
        {
          "type": "select",
          "text": "Which is in the solar system?",
          "answer": "Planets",
          "options": [
            "Planets",
            "Only soil",
            "Only bacteria"
          ]
        },
        {
          "type": "text",
          "text": "Complete: Earth moving around the Sun is ___.",
          "answer": "revolution"
        },
        {
          "type": "select",
          "text": "Which layer is very hot and central?",
          "answer": "Core",
          "options": [
            "Core",
            "Crust",
            "Cloud"
          ]
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "زمین کی بیرونی تہہ کیا ہے؟",
          "answer": "پرت",
          "options": [
            "پرت",
            "اندرونی مرکزہ",
            "صرف فضا"
          ]
        },
        {
          "type": "select",
          "text": "چٹانیں کس سے بنتی ہیں؟",
          "answer": "معدنیات",
          "options": [
            "معدنیات",
            "صرف خلیات",
            "بادل"
          ]
        },
        {
          "type": "select",
          "text": "چٹانوں کا چھوٹے ٹکڑوں میں ٹوٹنا کیا ہے؟",
          "answer": "موسم زدگی",
          "options": [
            "موسم زدگی",
            "ہضم",
            "ضیائی تالیف"
          ]
        },
        {
          "type": "radio",
          "text": "درست یا غلط: کٹاؤ چٹان اور مٹی کے ذرات منتقل کرتا ہے۔",
          "answer": "درست",
          "options": [
            "درست",
            "غلط"
          ]
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: زمین اپنے ___ پر گھومتی ہے۔",
          "answer": "محور"
        },
        {
          "type": "select",
          "text": "زمین کی گردش سے کیا ہوتا ہے؟",
          "answer": "دن اور رات",
          "options": [
            "دن اور رات",
            "صرف خلیاتی تقسیم",
            "صرف مقناطیسیت"
          ]
        },
        {
          "type": "radio",
          "text": "درست یا غلط: مٹی ٹوٹی ہوئی چٹان سے بن سکتی ہے۔",
          "answer": "درست",
          "options": [
            "درست",
            "غلط"
          ]
        },
        {
          "type": "select",
          "text": "نظام شمسی میں کیا شامل ہے؟",
          "answer": "سیارے",
          "options": [
            "سیارے",
            "صرف مٹی",
            "صرف بیکٹیریا"
          ]
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: زمین کا سورج کے گرد حرکت کرنا ___ ہے۔",
          "answer": "چکر",
          "alt": [
            "revolution"
          ]
        },
        {
          "type": "select",
          "text": "کون سی تہہ بہت گرم اور مرکزی ہے؟",
          "answer": "مرکزہ",
          "options": [
            "مرکزہ",
            "پرت",
            "بادل"
          ]
        }
      ]
    }
  };

  const TOPICS_GRADE7 = {
    "scientific-enquiry": {
      "title": "Scientific Enquiry",
      "titleUr": "سائنسی تحقیق",
      "intro": "Plan investigations, identify variables and controls, measure accurately, present data, interpret graphs, write conclusions, and judge reliability.",
      "introUr": "تحقیقات کی منصوبہ بندی، متغیرات اور کنٹرول، درست پیمائش، ڈیٹا پیش کرنا، گراف سمجھنا، نتیجہ لکھنا اور نتائج کی اعتمادیت جانچنا سیکھیں۔",
      "focus": [
        "Planning a clear investigation question",
        "Independent, dependent, and controlled variables",
        "Accurate measurement and repeated readings",
        "Tables, line graphs, and graph interpretation",
        "Evidence-based conclusions and reliability"
      ],
      "focusUr": [
        "واضح تحقیقی سوال بنانا",
        "آزاد، تابع اور قابو شدہ متغیرات",
        "درست پیمائش اور بار بار ریڈنگ لینا",
        "جدول، لائن گراف اور گراف کی تشریح",
        "ثبوت پر مبنی نتیجہ اور اعتمادیت"
      ],
      "examples": [
        [
          "Investigation plan",
          "Question, hypothesis, variables, method, results table, safety."
        ],
        [
          "Line graph",
          "Shows how one variable changes with another."
        ],
        [
          "Reliable result",
          "Similar readings when repeated."
        ],
        [
          "Conclusion",
          "Uses data to answer the question."
        ]
      ],
      "examplesUr": [
        [
          "تحقیقی منصوبہ",
          "سوال، مفروضہ، متغیرات، طریقہ، نتائج کا جدول، حفاظت۔"
        ],
        [
          "لائن گراف",
          "دکھاتا ہے کہ ایک متغیر دوسرے کے ساتھ کیسے بدلتا ہے۔"
        ],
        [
          "قابل اعتماد نتیجہ",
          "دہرائی گئی ریڈنگز ملتی جلتی ہوں۔"
        ],
        [
          "نتیجہ",
          "ڈیٹا سے سوال کا جواب دیتا ہے۔"
        ]
      ],
      "quick": [
        "Change only one independent variable.",
        "Keep control variables the same.",
        "Repeat readings to improve reliability.",
        "A good conclusion mentions evidence from results."
      ],
      "quickUr": [
        "صرف ایک آزاد متغیر بدلیں۔",
        "قابو شدہ متغیرات ایک جیسے رکھیں۔",
        "اعتمادیت کے لیے ریڈنگز دہرائیں۔",
        "اچھا نتیجہ نتائج سے ثبوت شامل کرتا ہے۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "The variable changed on purpose is the...",
          "options": [
            "independent variable",
            "dependent variable",
            "control variable"
          ],
          "answer": "independent variable"
        },
        {
          "type": "select",
          "text": "The variable measured as the result is the...",
          "options": [
            "dependent variable",
            "independent variable",
            "safety rule"
          ],
          "answer": "dependent variable"
        },
        {
          "type": "select",
          "text": "Which graph often shows change over time?",
          "options": [
            "Line graph",
            "Food web",
            "Circuit diagram"
          ],
          "answer": "Line graph"
        },
        {
          "type": "radio",
          "text": "True or False: Repeating readings can improve reliability.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: A fair test keeps control variables the ___.",
          "answer": "same"
        },
        {
          "type": "select",
          "text": "Which belongs in an experiment plan?",
          "options": [
            "Method and safety",
            "Only a title",
            "Only a drawing"
          ],
          "answer": "Method and safety"
        },
        {
          "type": "select",
          "text": "Accurate measurement needs a suitable...",
          "options": [
            "instrument",
            "guess",
            "story"
          ],
          "answer": "instrument"
        },
        {
          "type": "radio",
          "text": "True or False: A conclusion should ignore the results.",
          "options": [
            "True",
            "False"
          ],
          "answer": "False"
        },
        {
          "type": "text",
          "text": "Complete: A hypothesis is a testable ___.",
          "answer": "prediction"
        },
        {
          "type": "select",
          "text": "Which is evidence?",
          "options": [
            "Recorded data",
            "A random guess",
            "A decoration"
          ],
          "answer": "Recorded data"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "جسے جان بوجھ کر بدلا جائے وہ کیا ہے؟",
          "options": [
            "آزاد متغیر",
            "تابع متغیر",
            "قابو شدہ متغیر"
          ],
          "answer": "آزاد متغیر"
        },
        {
          "type": "select",
          "text": "جسے نتیجے کے طور پر ناپا جائے وہ کیا ہے؟",
          "options": [
            "تابع متغیر",
            "آزاد متغیر",
            "حفاظتی اصول"
          ],
          "answer": "تابع متغیر"
        },
        {
          "type": "select",
          "text": "وقت کے ساتھ تبدیلی دکھانے کے لیے کون سا گراف مناسب ہے؟",
          "options": [
            "لائن گراف",
            "غذائی جال",
            "سرکٹ ڈایاگرام"
          ],
          "answer": "لائن گراف"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: ریڈنگز دہرانے سے اعتمادیت بہتر ہو سکتی ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: منصفانہ تجربے میں قابو شدہ متغیرات ___ رکھے جاتے ہیں۔",
          "answer": "ایک جیسے"
        },
        {
          "type": "select",
          "text": "تجربے کے منصوبے میں کیا شامل ہوتا ہے؟",
          "options": [
            "طریقہ اور حفاظت",
            "صرف عنوان",
            "صرف تصویر"
          ],
          "answer": "طریقہ اور حفاظت"
        },
        {
          "type": "select",
          "text": "درست پیمائش کے لیے مناسب کیا چاہیے؟",
          "options": [
            "آلہ",
            "اندازہ",
            "کہانی"
          ],
          "answer": "آلہ"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: نتیجے میں نتائج کو نظر انداز کرنا چاہیے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "غلط"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: مفروضہ قابل آزمائش ___ ہے۔",
          "answer": "پیش گوئی"
        },
        {
          "type": "select",
          "text": "ثبوت کون سا ہے؟",
          "options": [
            "لکھا ہوا ڈیٹا",
            "بے ترتیب اندازہ",
            "سجاوٹ"
          ],
          "answer": "لکھا ہوا ڈیٹا"
        }
      ]
    },
    "cells-tissues-and-organs": {
      "title": "Cells, Tissues, and Organs",
      "titleUr": "خلیات، بافتیں اور اعضا",
      "intro": "Understand cell structure, specialized cells, tissues, organs, organ systems, and the levels of organization from cell to organism.",
      "introUr": "خلیے کی ساخت، مخصوص خلیات، بافتیں، اعضا، عضوی نظام اور خلیے سے جاندار تک تنظیم کی سطحیں سیکھیں۔",
      "focus": [
        "Cell parts and their jobs",
        "Specialized cells are adapted for functions",
        "Similar cells form tissues",
        "Tissues form organs",
        "Organs work together in organ systems"
      ],
      "focusUr": [
        "خلیے کے حصے اور کام",
        "مخصوص خلیات خاص کام کے لیے موزوں ہوتے ہیں",
        "ملتے جلتے خلیات بافت بناتے ہیں",
        "بافتیں اعضا بناتی ہیں",
        "اعضا مل کر نظام بناتے ہیں"
      ],
      "examples": [
        [
          "Red blood cell",
          "Carries oxygen."
        ],
        [
          "Root hair cell",
          "Absorbs water and minerals."
        ],
        [
          "Tissue",
          "Muscle tissue contracts."
        ],
        [
          "Organ system",
          "Digestive system breaks down food."
        ]
      ],
      "examplesUr": [
        [
          "سرخ خون کا خلیہ",
          "آکسیجن لے جاتا ہے۔"
        ],
        [
          "جڑ کا بال دار خلیہ",
          "پانی اور نمکیات جذب کرتا ہے۔"
        ],
        [
          "بافت",
          "عضلاتی بافت سکڑتی ہے۔"
        ],
        [
          "عضوی نظام",
          "نظام ہضم خوراک توڑتا ہے۔"
        ]
      ],
      "quick": [
        "Organization order: cell, tissue, organ, organ system, organism.",
        "Structure matches function in specialized cells.",
        "Organs usually contain more than one tissue.",
        "Systems work together to keep organisms alive."
      ],
      "quickUr": [
        "ترتیب: خلیہ، بافت، عضو، عضوی نظام، جاندار۔",
        "مخصوص خلیات کی ساخت ان کے کام کے مطابق ہوتی ہے۔",
        "اعضا عموماً ایک سے زیادہ بافتوں پر مشتمل ہوتے ہیں۔",
        "نظام مل کر جاندار کو زندہ رکھتے ہیں۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "The correct order is...",
          "options": [
            "cell, tissue, organ, system",
            "organ, cell, tissue, system",
            "system, organ, tissue, cell"
          ],
          "answer": "cell, tissue, organ, system"
        },
        {
          "type": "select",
          "text": "A group of similar cells forms a...",
          "options": [
            "tissue",
            "planet",
            "mixture"
          ],
          "answer": "tissue"
        },
        {
          "type": "select",
          "text": "Which cell carries oxygen?",
          "options": [
            "Red blood cell",
            "Root hair cell",
            "Nerve cell only"
          ],
          "answer": "Red blood cell"
        },
        {
          "type": "radio",
          "text": "True or False: Organs can contain different tissues.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Organs working together make an organ ___.",
          "answer": "system"
        },
        {
          "type": "select",
          "text": "Which is an organ?",
          "options": [
            "Heart",
            "Red blood cell",
            "Cytoplasm"
          ],
          "answer": "Heart"
        },
        {
          "type": "select",
          "text": "Root hair cells absorb...",
          "options": [
            "water and minerals",
            "sound waves",
            "light only"
          ],
          "answer": "water and minerals"
        },
        {
          "type": "radio",
          "text": "True or False: Specialized cells have shapes suited to jobs.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: The basic unit of life is the ___.",
          "answer": "cell"
        },
        {
          "type": "select",
          "text": "Which level is the whole living thing?",
          "options": [
            "Organism",
            "Tissue",
            "Cell membrane"
          ],
          "answer": "Organism"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "درست ترتیب کون سی ہے؟",
          "options": [
            "خلیہ، بافت، عضو، نظام",
            "عضو، خلیہ، بافت، نظام",
            "نظام، عضو، بافت، خلیہ"
          ],
          "answer": "خلیہ، بافت، عضو، نظام"
        },
        {
          "type": "select",
          "text": "ملتے جلتے خلیات کا گروہ کیا بناتا ہے؟",
          "options": [
            "بافت",
            "سیارہ",
            "آمیزہ"
          ],
          "answer": "بافت"
        },
        {
          "type": "select",
          "text": "آکسیجن کون سا خلیہ لے جاتا ہے؟",
          "options": [
            "سرخ خون کا خلیہ",
            "جڑ کا خلیہ",
            "صرف عصبی خلیہ"
          ],
          "answer": "سرخ خون کا خلیہ"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: اعضا میں مختلف بافتیں ہو سکتی ہیں۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: مل کر کام کرنے والے اعضا عضوی ___ بناتے ہیں۔",
          "answer": "نظام"
        },
        {
          "type": "select",
          "text": "عضو کون سا ہے؟",
          "options": [
            "دل",
            "سرخ خون کا خلیہ",
            "سائٹوپلازم"
          ],
          "answer": "دل"
        },
        {
          "type": "select",
          "text": "جڑ کے بال دار خلیات کیا جذب کرتے ہیں؟",
          "options": [
            "پانی اور نمکیات",
            "آواز کی لہریں",
            "صرف روشنی"
          ],
          "answer": "پانی اور نمکیات"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: مخصوص خلیات کی شکل ان کے کام کے مطابق ہوتی ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: زندگی کی بنیادی اکائی ___ ہے۔",
          "answer": "خلیہ"
        },
        {
          "type": "select",
          "text": "مکمل جاندار کون سی سطح ہے؟",
          "options": [
            "جاندار",
            "بافت",
            "خلیاتی جھلی"
          ],
          "answer": "جاندار"
        }
      ]
    },
    "nutrition-and-digestion": {
      "title": "Nutrition and Digestion",
      "titleUr": "غذائیت اور ہضم",
      "intro": "Study nutrients, balanced diet, malnutrition, digestive organs, enzymes, teeth, digestion, and introductory food tests.",
      "introUr": "غذائی اجزا، متوازن غذا، غذائی کمی، ہاضم اعضا، خامرے، دانت، ہضم اور ابتدائی غذائی ٹیسٹ سیکھیں۔",
      "focus": [
        "Main nutrients and their functions",
        "Balanced diet and malnutrition",
        "Digestive organs and their jobs",
        "Enzymes help break down food",
        "Teeth support mechanical digestion"
      ],
      "focusUr": [
        "اہم غذائی اجزا اور کام",
        "متوازن غذا اور غذائی کمی",
        "ہاضم اعضا اور کام",
        "خامرے خوراک توڑنے میں مدد کرتے ہیں",
        "دانت میکانکی ہضم میں مدد دیتے ہیں"
      ],
      "examples": [
        [
          "Carbohydrates",
          "Main energy source."
        ],
        [
          "Protein",
          "Growth and repair."
        ],
        [
          "Enzyme",
          "Speeds food breakdown."
        ],
        [
          "Molars",
          "Grind food."
        ]
      ],
      "examplesUr": [
        [
          "کاربوہائیڈریٹس",
          "توانائی کا اہم ذریعہ۔"
        ],
        [
          "پروٹین",
          "بڑھوتری اور مرمت۔"
        ],
        [
          "خامرہ",
          "خوراک ٹوٹنے کا عمل تیز کرتا ہے۔"
        ],
        [
          "داڑھیں",
          "خوراک پیستی ہیں۔"
        ]
      ],
      "quick": [
        "A balanced diet has nutrients in suitable amounts.",
        "Digestion starts in the mouth.",
        "Small intestine absorbs digested food.",
        "Food tests identify starch, sugar, protein, or fat."
      ],
      "quickUr": [
        "متوازن غذا میں اجزا مناسب مقدار میں ہوتے ہیں۔",
        "ہضم منہ سے شروع ہوتا ہے۔",
        "چھوٹی آنت ہضم شدہ غذا جذب کرتی ہے۔",
        "غذائی ٹیسٹ نشاستہ، شکر، پروٹین یا چربی پہچانتے ہیں۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "Which nutrient helps growth and repair?",
          "options": [
            "Protein",
            "Water only",
            "Fiber only"
          ],
          "answer": "Protein"
        },
        {
          "type": "select",
          "text": "Which nutrient is a main energy source?",
          "options": [
            "Carbohydrate",
            "Mineral only",
            "Vitamin C only"
          ],
          "answer": "Carbohydrate"
        },
        {
          "type": "select",
          "text": "Where does digestion begin?",
          "options": [
            "Mouth",
            "Large intestine",
            "Heart"
          ],
          "answer": "Mouth"
        },
        {
          "type": "radio",
          "text": "True or False: Enzymes help break down food.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: A balanced diet contains nutrients in suitable ___.",
          "answer": "amounts"
        },
        {
          "type": "select",
          "text": "Which teeth grind food?",
          "options": [
            "Molars",
            "Canines only",
            "Incisors only"
          ],
          "answer": "Molars"
        },
        {
          "type": "select",
          "text": "Which organ absorbs most digested food?",
          "options": [
            "Small intestine",
            "Lung",
            "Kidney"
          ],
          "answer": "Small intestine"
        },
        {
          "type": "radio",
          "text": "True or False: Malnutrition can happen from too little or unbalanced food.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Iodine test is commonly used for ___.",
          "answer": "starch"
        },
        {
          "type": "select",
          "text": "Which is a digestive organ?",
          "options": [
            "Stomach",
            "Brain",
            "Ear"
          ],
          "answer": "Stomach"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "کون سا غذائی جز بڑھوتری اور مرمت میں مدد دیتا ہے؟",
          "options": [
            "پروٹین",
            "صرف پانی",
            "صرف فائبر"
          ],
          "answer": "پروٹین"
        },
        {
          "type": "select",
          "text": "توانائی کا اہم ذریعہ کون سا ہے؟",
          "options": [
            "کاربوہائیڈریٹ",
            "صرف معدنیات",
            "صرف وٹامن سی"
          ],
          "answer": "کاربوہائیڈریٹ"
        },
        {
          "type": "select",
          "text": "ہضم کہاں شروع ہوتا ہے؟",
          "options": [
            "منہ",
            "بڑی آنت",
            "دل"
          ],
          "answer": "منہ"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: خامرے خوراک توڑنے میں مدد دیتے ہیں۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: متوازن غذا میں غذائی اجزا مناسب ___ میں ہوتے ہیں۔",
          "answer": "مقدار"
        },
        {
          "type": "select",
          "text": "خوراک پیسنے والے دانت کون سے ہیں؟",
          "options": [
            "داڑھیں",
            "صرف نوکیلے دانت",
            "صرف سامنے کے دانت"
          ],
          "answer": "داڑھیں"
        },
        {
          "type": "select",
          "text": "زیادہ تر ہضم شدہ غذا کون جذب کرتا ہے؟",
          "options": [
            "چھوٹی آنت",
            "پھیپھڑا",
            "گردہ"
          ],
          "answer": "چھوٹی آنت"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: غذائی کمی کم یا غیر متوازن غذا سے ہو سکتی ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: آیوڈین ٹیسٹ عموماً ___ کے لیے ہوتا ہے۔",
          "answer": "نشاستہ"
        },
        {
          "type": "select",
          "text": "ہاضم عضو کون سا ہے؟",
          "options": [
            "معدہ",
            "دماغ",
            "کان"
          ],
          "answer": "معدہ"
        }
      ]
    },
    "respiration-and-circulation": {
      "title": "Respiration and Circulation",
      "titleUr": "تنفس اور دوران خون",
      "intro": "Compare breathing and respiration, learn aerobic respiration, respiratory organs, blood circulation, heart structure, and effects of exercise.",
      "introUr": "سانس لینے اور تنفس کا فرق، ہوائی تنفس، تنفسی اعضا، خون کی گردش، دل کی ساخت اور ورزش کے اثرات سیکھیں۔",
      "focus": [
        "Breathing moves air in and out",
        "Respiration releases energy in cells",
        "Aerobic respiration uses glucose and oxygen",
        "Blood transports oxygen, nutrients, and wastes",
        "Exercise increases breathing and pulse rate"
      ],
      "focusUr": [
        "سانس لینا ہوا اندر باہر کرتا ہے",
        "تنفس خلیات میں توانائی خارج کرتا ہے",
        "ہوائی تنفس گلوکوز اور آکسیجن استعمال کرتا ہے",
        "خون آکسیجن، غذائی اجزا اور فاضل مادے لے جاتا ہے",
        "ورزش سانس اور نبض کی رفتار بڑھاتی ہے"
      ],
      "examples": [
        [
          "Word equation",
          "glucose + oxygen -> carbon dioxide + water + energy"
        ],
        [
          "Lungs",
          "Gas exchange organ."
        ],
        [
          "Heart",
          "Pumps blood."
        ],
        [
          "Pulse",
          "Shows heartbeat rate."
        ]
      ],
      "examplesUr": [
        [
          "لفظی مساوات",
          "گلوکوز + آکسیجن -> کاربن ڈائی آکسائیڈ + پانی + توانائی"
        ],
        [
          "پھیپھڑے",
          "گیسوں کے تبادلے کا عضو۔"
        ],
        [
          "دل",
          "خون پمپ کرتا ہے۔"
        ],
        [
          "نبض",
          "دل کی دھڑکن کی رفتار دکھاتی ہے۔"
        ]
      ],
      "quick": [
        "Breathing is physical; respiration is chemical.",
        "Cells need oxygen to release energy aerobically.",
        "Arteries usually carry blood away from the heart.",
        "Pulse rate rises during exercise."
      ],
      "quickUr": [
        "سانس لینا جسمانی عمل ہے؛ تنفس کیمیائی عمل ہے۔",
        "خلیات کو توانائی کے لیے آکسیجن چاہیے۔",
        "شریانیں عموماً خون دل سے دور لے جاتی ہیں۔",
        "ورزش میں نبض بڑھتی ہے۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "Respiration releases...",
          "options": [
            "energy",
            "soil",
            "magnetic poles"
          ],
          "answer": "energy"
        },
        {
          "type": "select",
          "text": "Aerobic respiration uses glucose and...",
          "options": [
            "oxygen",
            "nitrogen only",
            "sand"
          ],
          "answer": "oxygen"
        },
        {
          "type": "select",
          "text": "Which organ pumps blood?",
          "options": [
            "Heart",
            "Lung",
            "Stomach"
          ],
          "answer": "Heart"
        },
        {
          "type": "radio",
          "text": "True or False: Breathing and respiration mean exactly the same thing.",
          "options": [
            "True",
            "False"
          ],
          "answer": "False"
        },
        {
          "type": "text",
          "text": "Complete: Glucose + oxygen makes carbon dioxide, water, and ___.",
          "answer": "energy"
        },
        {
          "type": "select",
          "text": "Gas exchange happens mainly in the...",
          "options": [
            "lungs",
            "teeth",
            "bones"
          ],
          "answer": "lungs"
        },
        {
          "type": "select",
          "text": "Pulse rate usually increases during...",
          "options": [
            "exercise",
            "sleep only",
            "reading only always"
          ],
          "answer": "exercise"
        },
        {
          "type": "radio",
          "text": "True or False: Blood can transport oxygen.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: The heart has chambers that help pump ___.",
          "answer": "blood"
        },
        {
          "type": "select",
          "text": "Which gas is breathed out in higher amount after respiration?",
          "options": [
            "Carbon dioxide",
            "Oxygen only",
            "Helium"
          ],
          "answer": "Carbon dioxide"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "تنفس کیا خارج کرتا ہے؟",
          "options": [
            "توانائی",
            "مٹی",
            "مقناطیسی قطب"
          ],
          "answer": "توانائی"
        },
        {
          "type": "select",
          "text": "ہوائی تنفس گلوکوز اور کیا استعمال کرتا ہے؟",
          "options": [
            "آکسیجن",
            "صرف نائٹروجن",
            "ریت"
          ],
          "answer": "آکسیجن"
        },
        {
          "type": "select",
          "text": "خون کون سا عضو پمپ کرتا ہے؟",
          "options": [
            "دل",
            "پھیپھڑا",
            "معدہ"
          ],
          "answer": "دل"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: سانس لینا اور تنفس بالکل ایک ہی ہیں۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "غلط"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: گلوکوز + آکسیجن سے کاربن ڈائی آکسائیڈ، پانی اور ___ بنتی ہے۔",
          "answer": "توانائی"
        },
        {
          "type": "select",
          "text": "گیسوں کا تبادلہ زیادہ تر کہاں ہوتا ہے؟",
          "options": [
            "پھیپھڑوں میں",
            "دانتوں میں",
            "ہڈیوں میں"
          ],
          "answer": "پھیپھڑوں میں"
        },
        {
          "type": "select",
          "text": "نبض کی رفتار عموماً کس دوران بڑھتی ہے؟",
          "options": [
            "ورزش",
            "صرف نیند",
            "ہمیشہ صرف پڑھائی"
          ],
          "answer": "ورزش"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: خون آکسیجن لے جا سکتا ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: دل کے خانے ___ پمپ کرنے میں مدد دیتے ہیں۔",
          "answer": "خون"
        },
        {
          "type": "select",
          "text": "تنفس کے بعد کون سی گیس نسبتاً زیادہ خارج ہوتی ہے؟",
          "options": [
            "کاربن ڈائی آکسائیڈ",
            "صرف آکسیجن",
            "ہیلیم"
          ],
          "answer": "کاربن ڈائی آکسائیڈ"
        }
      ]
    },
    "reproduction-and-growth": {
      "title": "Reproduction and Growth",
      "titleUr": "تولید اور بڑھوتری",
      "intro": "Learn plant reproduction, flower structure, pollination, fertilization, seed and fruit formation, and age-appropriate human growth changes.",
      "introUr": "پودوں کی تولید، پھول کی ساخت، زیرگی، بارآوری، بیج اور پھل بننا، اور انسانی بڑھوتری کی مناسب تبدیلیاں سیکھیں۔",
      "focus": [
        "Flowers contain reproductive parts",
        "Pollination transfers pollen",
        "Fertilization forms seeds",
        "Fruits protect and disperse seeds",
        "Growth includes physical and emotional changes"
      ],
      "focusUr": [
        "پھول میں تولیدی حصے ہوتے ہیں",
        "زیرگی میں زر دانہ منتقل ہوتا ہے",
        "بارآوری سے بیج بنتے ہیں",
        "پھل بیج کی حفاظت اور پھیلاؤ کرتے ہیں",
        "بڑھوتری میں جسمانی اور جذباتی تبدیلیاں ہوتی ہیں"
      ],
      "examples": [
        [
          "Stamen",
          "Male part that makes pollen."
        ],
        [
          "Carpel",
          "Female part with ovary."
        ],
        [
          "Pollination",
          "Pollen reaches stigma."
        ],
        [
          "Seed",
          "Can grow into a new plant."
        ]
      ],
      "examplesUr": [
        [
          "زردان",
          "نر حصہ جو زر دانہ بناتا ہے۔"
        ],
        [
          "مادگی حصہ",
          "بیضہ دانی والا حصہ۔"
        ],
        [
          "زیرگی",
          "زر دانہ stigma تک پہنچتا ہے۔"
        ],
        [
          "بیج",
          "نیا پودا بن سکتا ہے۔"
        ]
      ],
      "quick": [
        "Insects and wind can help pollination.",
        "Fertilization happens after pollen reaches the ovule.",
        "Seeds need suitable conditions to germinate.",
        "Puberty changes happen at different times for different people."
      ],
      "quickUr": [
        "کیڑے اور ہوا زیرگی میں مدد کر سکتے ہیں۔",
        "بارآوری زر دانہ کے ovule تک پہنچنے کے بعد ہوتی ہے۔",
        "بیج کو اگنے کے لیے مناسب حالات چاہییں۔",
        "بلوغت کی تبدیلیاں ہر فرد میں مختلف وقت پر آتی ہیں۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "The male flower part that makes pollen is the...",
          "options": [
            "stamen",
            "root",
            "leaf vein"
          ],
          "answer": "stamen"
        },
        {
          "type": "select",
          "text": "Pollen landing on stigma is...",
          "options": [
            "pollination",
            "digestion",
            "erosion"
          ],
          "answer": "pollination"
        },
        {
          "type": "select",
          "text": "After fertilization, ovules become...",
          "options": [
            "seeds",
            "clouds",
            "teeth"
          ],
          "answer": "seeds"
        },
        {
          "type": "radio",
          "text": "True or False: Fruits can help protect seeds.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: A seed grows into a new plant during ___.",
          "answer": "germination"
        },
        {
          "type": "select",
          "text": "Which can help pollination?",
          "options": [
            "Insects",
            "Plastic bags only",
            "Broken glass"
          ],
          "answer": "Insects"
        },
        {
          "type": "radio",
          "text": "True or False: Growth changes happen at exactly the same age for everyone.",
          "options": [
            "True",
            "False"
          ],
          "answer": "False"
        },
        {
          "type": "select",
          "text": "The female flower part includes the...",
          "options": [
            "ovary",
            "stem only",
            "root hair"
          ],
          "answer": "ovary"
        },
        {
          "type": "text",
          "text": "Complete: Fertilization helps form ___.",
          "answer": "seeds"
        },
        {
          "type": "select",
          "text": "Which is a safe statement about puberty?",
          "options": [
            "Changes are normal and should be discussed respectfully",
            "Everyone changes identically",
            "It is a plant disease"
          ],
          "answer": "Changes are normal and should be discussed respectfully"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "زر دانہ بنانے والا نر حصہ کیا ہے؟",
          "options": [
            "زردان",
            "جڑ",
            "پتے کی رگ"
          ],
          "answer": "زردان"
        },
        {
          "type": "select",
          "text": "زر دانہ کا stigma پر پہنچنا کیا ہے؟",
          "options": [
            "زیرگی",
            "ہضم",
            "کٹاؤ"
          ],
          "answer": "زیرگی"
        },
        {
          "type": "select",
          "text": "بارآوری کے بعد ovules کیا بنتے ہیں؟",
          "options": [
            "بیج",
            "بادل",
            "دانت"
          ],
          "answer": "بیج"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: پھل بیج کی حفاظت کر سکتے ہیں۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: بیج کا نیا پودا بننا ___ کہلاتا ہے۔",
          "answer": "اگاؤ"
        },
        {
          "type": "select",
          "text": "زیرگی میں کون مدد دے سکتا ہے؟",
          "options": [
            "کیڑے",
            "صرف پلاسٹک بیگ",
            "ٹوٹا شیشہ"
          ],
          "answer": "کیڑے"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: بڑھوتری کی تبدیلیاں ہر فرد میں عین ایک عمر پر ہوتی ہیں۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "غلط"
        },
        {
          "type": "select",
          "text": "مادگی حصے میں کیا شامل ہوتا ہے؟",
          "options": [
            "بیضہ دانی",
            "صرف تنا",
            "جڑ کا بال"
          ],
          "answer": "بیضہ دانی"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: بارآوری ___ بنانے میں مدد دیتی ہے۔",
          "answer": "بیج"
        },
        {
          "type": "select",
          "text": "بلوغت کے بارے میں محفوظ بات کون سی ہے؟",
          "options": [
            "تبدیلیاں معمول ہیں اور احترام سے بات کرنی چاہیے",
            "سب بالکل ایک جیسے بدلتے ہیں",
            "یہ پودے کی بیماری ہے"
          ],
          "answer": "تبدیلیاں معمول ہیں اور احترام سے بات کرنی چاہیے"
        }
      ]
    },
    "ecology-and-environment": {
      "title": "Ecology and Environment",
      "titleUr": "ماحولیات اور ماحول",
      "intro": "Explore ecosystems, food chains and webs, energy flow, interdependence, adaptations, pollution, and climate change introduction.",
      "introUr": "ماحولیاتی نظام، غذائی زنجیر اور جال، توانائی کا بہاؤ، باہمی انحصار، مطابقت، آلودگی اور موسمیاتی تبدیلی کا تعارف سیکھیں۔",
      "focus": [
        "Ecosystem parts interact",
        "Food chains show energy flow",
        "Food webs show feeding relationships",
        "Organisms depend on each other",
        "Pollution and climate change affect habitats"
      ],
      "focusUr": [
        "ماحولیاتی حصے باہم اثر کرتے ہیں",
        "غذائی زنجیر توانائی کا بہاؤ دکھاتی ہے",
        "غذائی جال خوراکی تعلقات دکھاتا ہے",
        "جاندار ایک دوسرے پر انحصار کرتے ہیں",
        "آلودگی اور موسمیاتی تبدیلی رہائش گاہوں کو متاثر کرتی ہے"
      ],
      "examples": [
        [
          "Producer",
          "Green plant."
        ],
        [
          "Consumer",
          "Animal that eats plants or animals."
        ],
        [
          "Adaptation",
          "Thick fur in cold habitats."
        ],
        [
          "Climate change",
          "Long-term change in climate patterns."
        ]
      ],
      "examplesUr": [
        [
          "پیدا کرنے والا",
          "سبز پودا۔"
        ],
        [
          "صارف",
          "پودے یا جانور کھانے والا جانور۔"
        ],
        [
          "مطابقت",
          "سرد علاقوں میں موٹی کھال۔"
        ],
        [
          "موسمیاتی تبدیلی",
          "آب و ہوا کے طویل مدتی نمونوں میں تبدیلی۔"
        ]
      ],
      "quick": [
        "Arrows in food chains show energy direction.",
        "Removing one species can affect many others.",
        "Adaptations can be structural or behavioral.",
        "Reducing waste and saving energy help the environment."
      ],
      "quickUr": [
        "غذائی زنجیر کے تیر توانائی کی سمت دکھاتے ہیں۔",
        "ایک نوع ختم کرنے سے کئی متاثر ہو سکتے ہیں۔",
        "مطابقت ساختی یا رویے کی ہو سکتی ہے۔",
        "کچرا کم کرنا اور توانائی بچانا ماحول کے لیے اچھا ہے۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "In a food chain, arrows show flow of...",
          "options": [
            "energy",
            "water pipes",
            "sound only"
          ],
          "answer": "energy"
        },
        {
          "type": "select",
          "text": "Which is a producer?",
          "options": [
            "Grass",
            "Rabbit",
            "Fox"
          ],
          "answer": "Grass"
        },
        {
          "type": "select",
          "text": "A food web is made of many connected...",
          "options": [
            "food chains",
            "circuits",
            "rocks"
          ],
          "answer": "food chains"
        },
        {
          "type": "radio",
          "text": "True or False: Organisms in an ecosystem can depend on each other.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Long-term climate pattern change is climate ___.",
          "answer": "change"
        },
        {
          "type": "select",
          "text": "Which is pollution?",
          "options": [
            "Oil in water",
            "Clean forest",
            "Planting trees"
          ],
          "answer": "Oil in water"
        },
        {
          "type": "select",
          "text": "Thick fur in a cold habitat is an...",
          "options": [
            "adaptation",
            "enzyme",
            "indicator"
          ],
          "answer": "adaptation"
        },
        {
          "type": "radio",
          "text": "True or False: Removing predators can affect prey numbers.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: A place where an organism lives is a ___.",
          "answer": "habitat"
        },
        {
          "type": "select",
          "text": "Which action helps conservation?",
          "options": [
            "Reduce waste",
            "Burn plastic",
            "Waste electricity"
          ],
          "answer": "Reduce waste"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "غذائی زنجیر میں تیر کس کا بہاؤ دکھاتے ہیں؟",
          "options": [
            "توانائی",
            "پانی کے پائپ",
            "صرف آواز"
          ],
          "answer": "توانائی"
        },
        {
          "type": "select",
          "text": "پیدا کرنے والا کون ہے؟",
          "options": [
            "گھاس",
            "خرگوش",
            "لومڑی"
          ],
          "answer": "گھاس"
        },
        {
          "type": "select",
          "text": "غذائی جال کس سے بنتا ہے؟",
          "options": [
            "جڑی ہوئی غذائی زنجیروں سے",
            "سرکٹ سے",
            "چٹانوں سے"
          ],
          "answer": "جڑی ہوئی غذائی زنجیروں سے"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: ماحولیاتی نظام میں جاندار ایک دوسرے پر انحصار کر سکتے ہیں۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: آب و ہوا کے طویل مدتی نمونے کی تبدیلی موسمیاتی ___ ہے۔",
          "answer": "تبدیلی"
        },
        {
          "type": "select",
          "text": "آلودگی کون سی ہے؟",
          "options": [
            "پانی میں تیل",
            "صاف جنگل",
            "درخت لگانا"
          ],
          "answer": "پانی میں تیل"
        },
        {
          "type": "select",
          "text": "سرد رہائش میں موٹی کھال کیا ہے؟",
          "options": [
            "مطابقت",
            "خامرہ",
            "اشارہ گر"
          ],
          "answer": "مطابقت"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: شکاری کم ہونے سے شکار جانوروں کی تعداد متاثر ہو سکتی ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: جاندار جہاں رہتا ہے وہ ___ ہے۔",
          "answer": "رہائش گاہ"
        },
        {
          "type": "select",
          "text": "تحفظ میں کون سا عمل مدد دیتا ہے؟",
          "options": [
            "کچرا کم کرنا",
            "پلاسٹک جلانا",
            "بجلی ضائع کرنا"
          ],
          "answer": "کچرا کم کرنا"
        }
      ]
    },
    "atoms-elements-compounds-and-mixtures": {
      "title": "Atoms, Elements, Compounds, and Mixtures",
      "titleUr": "ایٹم، عناصر، مرکبات اور آمیزے",
      "intro": "Learn introductory atomic structure, elements, compounds, mixtures, symbols of common elements, chemical formulas, and separation methods.",
      "introUr": "ایٹم کی بنیادی ساخت، عناصر، مرکبات، آمیزے، عام عناصر کی علامات، کیمیائی فارمولے اور علیحدگی کے طریقے سیکھیں۔",
      "focus": [
        "Atoms are tiny particles of matter",
        "Elements contain one kind of atom",
        "Compounds contain chemically joined elements",
        "Mixtures are physically combined substances",
        "Symbols and formulas represent substances"
      ],
      "focusUr": [
        "ایٹم مادے کے بہت چھوٹے ذرات ہیں",
        "عنصر میں ایک قسم کے ایٹم ہوتے ہیں",
        "مرکب میں عناصر کیمیائی طور پر جڑے ہوتے ہیں",
        "آمیزے میں مادے جسمانی طور پر ملے ہوتے ہیں",
        "علامات اور فارمولے مادوں کو ظاہر کرتے ہیں"
      ],
      "examples": [
        [
          "Element",
          "Oxygen, symbol O."
        ],
        [
          "Compound",
          "Water, formula H2O."
        ],
        [
          "Mixture",
          "Air or salt water."
        ],
        [
          "Separation",
          "Filtration separates sand from water."
        ]
      ],
      "examplesUr": [
        [
          "عنصر",
          "آکسیجن، علامت O۔"
        ],
        [
          "مرکب",
          "پانی، فارمولا H2O۔"
        ],
        [
          "آمیزہ",
          "ہوا یا نمکین پانی۔"
        ],
        [
          "علیحدگی",
          "چھاننا ریت کو پانی سے جدا کرتا ہے۔"
        ]
      ],
      "quick": [
        "Chemical symbols begin with a capital letter.",
        "A formula shows elements and atom numbers in a compound.",
        "Mixtures can often be separated physically.",
        "Compounds have new properties different from their elements."
      ],
      "quickUr": [
        "کیمیائی علامت بڑے حرف سے شروع ہوتی ہے۔",
        "فارمولا مرکب میں عناصر اور ایٹموں کی تعداد دکھاتا ہے۔",
        "آمیزے عموماً جسمانی طریقے سے جدا ہو سکتے ہیں۔",
        "مرکبات کی خصوصیات عناصر سے مختلف ہو سکتی ہیں۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "A substance made of one kind of atom is an...",
          "options": [
            "element",
            "mixture",
            "solution only"
          ],
          "answer": "element"
        },
        {
          "type": "select",
          "text": "Water, H2O, is a...",
          "options": [
            "compound",
            "element",
            "symbol only"
          ],
          "answer": "compound"
        },
        {
          "type": "select",
          "text": "Air is best described as a...",
          "options": [
            "mixture",
            "single atom",
            "pure element"
          ],
          "answer": "mixture"
        },
        {
          "type": "radio",
          "text": "True or False: Chemical symbols usually begin with a capital letter.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Oxygen has the symbol ___.",
          "answer": "O"
        },
        {
          "type": "select",
          "text": "Which formula represents water?",
          "options": [
            "H2O",
            "CO2 only",
            "NaCl only"
          ],
          "answer": "H2O"
        },
        {
          "type": "select",
          "text": "Which method separates sand from water?",
          "options": [
            "Filtration",
            "Magnetism only",
            "Freezing only"
          ],
          "answer": "Filtration"
        },
        {
          "type": "radio",
          "text": "True or False: A compound is chemically joined.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Sodium chloride formula is ___.",
          "answer": "NaCl"
        },
        {
          "type": "select",
          "text": "Which is an element?",
          "options": [
            "Iron",
            "Salt water",
            "Air"
          ],
          "answer": "Iron"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "ایک قسم کے ایٹموں سے بنا مادہ کیا ہے؟",
          "options": [
            "عنصر",
            "آمیزہ",
            "صرف محلول"
          ],
          "answer": "عنصر"
        },
        {
          "type": "select",
          "text": "پانی H2O کیا ہے؟",
          "options": [
            "مرکب",
            "عنصر",
            "صرف علامت"
          ],
          "answer": "مرکب"
        },
        {
          "type": "select",
          "text": "ہوا کو کیا کہا جا سکتا ہے؟",
          "options": [
            "آمیزہ",
            "ایک ایٹم",
            "خالص عنصر"
          ],
          "answer": "آمیزہ"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: کیمیائی علامات عموماً بڑے حرف سے شروع ہوتی ہیں۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: آکسیجن کی علامت ___ ہے۔",
          "answer": "O"
        },
        {
          "type": "select",
          "text": "پانی کا فارمولا کون سا ہے؟",
          "options": [
            "H2O",
            "صرف CO2",
            "صرف NaCl"
          ],
          "answer": "H2O"
        },
        {
          "type": "select",
          "text": "ریت کو پانی سے جدا کرنے کا طریقہ کون سا ہے؟",
          "options": [
            "چھاننا",
            "صرف مقناطیسیت",
            "صرف جمنا"
          ],
          "answer": "چھاننا"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: مرکب کیمیائی طور پر جڑا ہوتا ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: سوڈیم کلورائیڈ کا فارمولا ___ ہے۔",
          "answer": "NaCl"
        },
        {
          "type": "select",
          "text": "عنصر کون سا ہے؟",
          "options": [
            "لوہا",
            "نمکین پانی",
            "ہوا"
          ],
          "answer": "لوہا"
        }
      ]
    },
    "acids-bases-and-salts-introduction": {
      "title": "Acids, Bases, and Salts Introduction",
      "titleUr": "تیزاب، اساس اور نمکیات کا تعارف",
      "intro": "Identify common acids and bases, indicators, the pH scale, neutralization, salts, and daily-life uses.",
      "introUr": "عام تیزاب اور اساس، اشاریے، pH پیمانہ، تعدیل، نمکیات اور روزمرہ استعمالات سیکھیں۔",
      "focus": [
        "Common acids and bases around us",
        "Indicators show acid/base behavior",
        "pH scale introduction",
        "Neutralization forms salt and water",
        "Safe handling of household chemicals"
      ],
      "focusUr": [
        "آس پاس عام تیزاب اور اساس",
        "اشاریے تیزابی یا اساسی خاصیت دکھاتے ہیں",
        "pH پیمانے کا تعارف",
        "تعدیل سے نمک اور پانی بنتے ہیں",
        "گھریلو کیمیکلز کا محفوظ استعمال"
      ],
      "examples": [
        [
          "Acid",
          "Lemon juice."
        ],
        [
          "Base",
          "Soap solution."
        ],
        [
          "Indicator",
          "Litmus paper."
        ],
        [
          "Neutralization",
          "Acid + base -> salt + water."
        ]
      ],
      "examplesUr": [
        [
          "تیزاب",
          "لیموں کا رس۔"
        ],
        [
          "اساس",
          "صابن کا محلول۔"
        ],
        [
          "اشاریہ",
          "لٹمس کاغذ۔"
        ],
        [
          "تعدیل",
          "تیزاب + اساس -> نمک + پانی۔"
        ]
      ],
      "quick": [
        "Acids often have pH below 7.",
        "Bases often have pH above 7.",
        "Neutral substances are near pH 7.",
        "Never taste unknown chemicals."
      ],
      "quickUr": [
        "تیزاب کا pH عموماً 7 سے کم ہوتا ہے۔",
        "اساس کا pH عموماً 7 سے زیادہ ہوتا ہے۔",
        "غیر جانبدار مادہ pH 7 کے قریب ہوتا ہے۔",
        "نامعلوم کیمیکل کبھی نہ چکھیں۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "Lemon juice is commonly...",
          "options": [
            "acidic",
            "strongly magnetic",
            "a metal"
          ],
          "answer": "acidic"
        },
        {
          "type": "select",
          "text": "Soap solution is commonly...",
          "options": [
            "basic",
            "a planet",
            "a gas only"
          ],
          "answer": "basic"
        },
        {
          "type": "select",
          "text": "Which paper can test acid/base?",
          "options": [
            "Litmus paper",
            "Graph paper only",
            "Sandpaper"
          ],
          "answer": "Litmus paper"
        },
        {
          "type": "radio",
          "text": "True or False: Neutralization can form salt and water.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Neutral pH is about ___.",
          "answer": "7",
          "alt": [
            "seven"
          ]
        },
        {
          "type": "select",
          "text": "An acid usually has pH...",
          "options": [
            "below 7",
            "exactly 14 always",
            "above 12 always"
          ],
          "answer": "below 7"
        },
        {
          "type": "select",
          "text": "A base usually has pH...",
          "options": [
            "above 7",
            "below 1 always",
            "zero always"
          ],
          "answer": "above 7"
        },
        {
          "type": "radio",
          "text": "True or False: Unknown chemicals are safe to taste in class.",
          "options": [
            "True",
            "False"
          ],
          "answer": "False"
        },
        {
          "type": "text",
          "text": "Complete: Acid + base is called ___.",
          "answer": "neutralization"
        },
        {
          "type": "select",
          "text": "Which is a daily-life salt?",
          "options": [
            "Table salt",
            "Pure light",
            "Sound wave"
          ],
          "answer": "Table salt"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "لیموں کا رس عموماً کیا ہوتا ہے؟",
          "options": [
            "تیزابی",
            "بہت مقناطیسی",
            "دھات"
          ],
          "answer": "تیزابی"
        },
        {
          "type": "select",
          "text": "صابن کا محلول عموماً کیا ہوتا ہے؟",
          "options": [
            "اساسی",
            "سیارہ",
            "صرف گیس"
          ],
          "answer": "اساسی"
        },
        {
          "type": "select",
          "text": "تیزاب/اساس جانچنے کے لیے کون سا کاغذ استعمال ہو سکتا ہے؟",
          "options": [
            "لٹمس کاغذ",
            "صرف گراف کاغذ",
            "ریگ مال"
          ],
          "answer": "لٹمس کاغذ"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: تعدیل سے نمک اور پانی بن سکتے ہیں۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: غیر جانبدار pH تقریباً ___ ہے۔",
          "answer": "7",
          "alt": [
            "سات"
          ]
        },
        {
          "type": "select",
          "text": "تیزاب کا pH عموماً...",
          "options": [
            "7 سے کم",
            "ہمیشہ 14",
            "ہمیشہ 12 سے زیادہ"
          ],
          "answer": "7 سے کم"
        },
        {
          "type": "select",
          "text": "اساس کا pH عموماً...",
          "options": [
            "7 سے زیادہ",
            "ہمیشہ 1 سے کم",
            "ہمیشہ صفر"
          ],
          "answer": "7 سے زیادہ"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: نامعلوم کیمیکل کلاس میں چکھنا محفوظ ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "غلط"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: تیزاب + اساس کا عمل ___ کہلاتا ہے۔",
          "answer": "تعدیل"
        },
        {
          "type": "select",
          "text": "روزمرہ کا نمک کون سا ہے؟",
          "options": [
            "کھانے کا نمک",
            "خالص روشنی",
            "آواز کی لہر"
          ],
          "answer": "کھانے کا نمک"
        }
      ]
    },
    "force-pressure-and-motion": {
      "title": "Force, Pressure, and Motion",
      "titleUr": "قوت، دباؤ اور حرکت",
      "intro": "Learn force and effects, balanced and unbalanced forces, pressure, speed, distance-time graphs, and simple machines.",
      "introUr": "قوت اور اثرات، متوازن اور غیر متوازن قوتیں، دباؤ، رفتار، فاصلہ-وقت گراف اور سادہ مشینیں سیکھیں۔",
      "focus": [
        "Forces can change speed, direction, or shape",
        "Balanced forces do not change motion",
        "Unbalanced forces change motion",
        "Pressure depends on force and area",
        "Distance-time graphs show motion"
      ],
      "focusUr": [
        "قوت رفتار، سمت یا شکل بدل سکتی ہے",
        "متوازن قوتیں حرکت نہیں بدلتی",
        "غیر متوازن قوتیں حرکت بدلتی ہیں",
        "دباؤ قوت اور رقبے پر منحصر ہے",
        "فاصلہ-وقت گراف حرکت دکھاتا ہے"
      ],
      "examples": [
        [
          "Pressure",
          "force divided by area."
        ],
        [
          "Speed",
          "distance divided by time."
        ],
        [
          "Balanced forces",
          "Equal pushes in opposite directions."
        ],
        [
          "Lever",
          "A simple machine."
        ]
      ],
      "examplesUr": [
        [
          "دباؤ",
          "قوت تقسیم رقبہ۔"
        ],
        [
          "رفتار",
          "فاصلہ تقسیم وقت۔"
        ],
        [
          "متوازن قوتیں",
          "مخالف سمتوں میں برابر دھکیل۔"
        ],
        [
          "لیور",
          "ایک سادہ مشین۔"
        ]
      ],
      "quick": [
        "Smaller area gives larger pressure for same force.",
        "Steeper distance-time graph means greater speed.",
        "Simple machines make work easier.",
        "Unbalanced force causes acceleration."
      ],
      "quickUr": [
        "اسی قوت کے لیے کم رقبہ زیادہ دباؤ دیتا ہے۔",
        "زیادہ ڈھلوان فاصلہ-وقت گراف زیادہ رفتار دکھاتا ہے۔",
        "سادہ مشینیں کام آسان کرتی ہیں۔",
        "غیر متوازن قوت تعجیل پیدا کرتی ہے۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "Pressure = force divided by...",
          "options": [
            "area",
            "time",
            "temperature"
          ],
          "answer": "area"
        },
        {
          "type": "select",
          "text": "Speed = distance divided by...",
          "options": [
            "time",
            "area",
            "mass only"
          ],
          "answer": "time"
        },
        {
          "type": "select",
          "text": "Balanced forces are...",
          "options": [
            "equal and opposite",
            "always zero objects",
            "only magnetic"
          ],
          "answer": "equal and opposite"
        },
        {
          "type": "radio",
          "text": "True or False: Unbalanced forces can change motion.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: A steeper distance-time graph shows greater ___.",
          "answer": "speed"
        },
        {
          "type": "select",
          "text": "Which is a simple machine?",
          "options": [
            "Lever",
            "Cell",
            "Acid"
          ],
          "answer": "Lever"
        },
        {
          "type": "select",
          "text": "Sharp knives cut well because pressure is...",
          "options": [
            "high on small area",
            "zero",
            "only from light"
          ],
          "answer": "high on small area"
        },
        {
          "type": "radio",
          "text": "True or False: Force can change an object shape.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Force is measured in ___.",
          "answer": "newtons",
          "alt": [
            "N"
          ]
        },
        {
          "type": "select",
          "text": "Which graph uses distance and time?",
          "options": [
            "Distance-time graph",
            "Food web",
            "pH chart only"
          ],
          "answer": "Distance-time graph"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "دباؤ = قوت تقسیم...",
          "options": [
            "رقبہ",
            "وقت",
            "درجہ حرارت"
          ],
          "answer": "رقبہ"
        },
        {
          "type": "select",
          "text": "رفتار = فاصلہ تقسیم...",
          "options": [
            "وقت",
            "رقبہ",
            "صرف کمیت"
          ],
          "answer": "وقت"
        },
        {
          "type": "select",
          "text": "متوازن قوتیں کیا ہوتی ہیں؟",
          "options": [
            "برابر اور مخالف",
            "ہمیشہ صفر چیزیں",
            "صرف مقناطیسی"
          ],
          "answer": "برابر اور مخالف"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: غیر متوازن قوتیں حرکت بدل سکتی ہیں۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: زیادہ ڈھلوان فاصلہ-وقت گراف زیادہ ___ دکھاتا ہے۔",
          "answer": "رفتار"
        },
        {
          "type": "select",
          "text": "سادہ مشین کون سی ہے؟",
          "options": [
            "لیور",
            "خلیہ",
            "تیزاب"
          ],
          "answer": "لیور"
        },
        {
          "type": "select",
          "text": "تیز چھری اچھا کاٹتی ہے کیونکہ دباؤ...",
          "options": [
            "کم رقبے پر زیادہ ہوتا ہے",
            "صفر ہوتا ہے",
            "صرف روشنی سے ہوتا ہے"
          ],
          "answer": "کم رقبے پر زیادہ ہوتا ہے"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: قوت چیز کی شکل بدل سکتی ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: قوت ___ میں ناپی جاتی ہے۔",
          "answer": "نیوٹن",
          "alt": [
            "N"
          ]
        },
        {
          "type": "select",
          "text": "کون سا گراف فاصلہ اور وقت استعمال کرتا ہے؟",
          "options": [
            "فاصلہ-وقت گراف",
            "غذائی جال",
            "صرف pH چارٹ"
          ],
          "answer": "فاصلہ-وقت گراف"
        }
      ]
    },
    "heat-light-and-sound": {
      "title": "Heat, Light, and Sound",
      "titleUr": "حرارت، روشنی اور آواز",
      "intro": "Study heat transfer, expansion and contraction, reflection of light, refraction introduction, sound waves, pitch, and loudness.",
      "introUr": "حرارت کی منتقلی، پھیلاؤ اور سکڑاؤ، روشنی کا انعکاس، انعطاف کا تعارف، صوتی لہریں، pitch اور loudness سیکھیں۔",
      "focus": [
        "Heat transfers by conduction, convection, and radiation",
        "Materials expand when heated and contract when cooled",
        "Reflection is bouncing of light",
        "Refraction is bending of light",
        "Sound pitch and loudness depend on vibrations"
      ],
      "focusUr": [
        "حرارت ترسیل، حمل اور اشعاع سے منتقل ہوتی ہے",
        "گرم کرنے سے مادے پھیلتے اور ٹھنڈا کرنے سے سکڑتے ہیں",
        "انعکاس روشنی کا واپس اچھلنا ہے",
        "انعطاف روشنی کا مڑنا ہے",
        "آواز کی pitch اور loudness ارتعاش پر منحصر ہیں"
      ],
      "examples": [
        [
          "Reflection",
          "Light bounces from a mirror."
        ],
        [
          "Refraction",
          "A straw looks bent in water."
        ],
        [
          "Pitch",
          "High pitch means higher frequency."
        ],
        [
          "Expansion",
          "Metal bridge gaps allow expansion."
        ]
      ],
      "examplesUr": [
        [
          "انعکاس",
          "روشنی آئینے سے واپس آتی ہے۔"
        ],
        [
          "انعطاف",
          "پانی میں تنکا مڑا ہوا لگتا ہے۔"
        ],
        [
          "Pitch",
          "زیادہ pitch یعنی زیادہ frequency۔"
        ],
        [
          "پھیلاؤ",
          "پل میں خلا پھیلاؤ کے لیے ہوتا ہے۔"
        ]
      ],
      "quick": [
        "Shiny surfaces reflect more light.",
        "Sound is produced by vibrations.",
        "Louder sounds usually have larger vibrations.",
        "Heat can travel through solids by conduction."
      ],
      "quickUr": [
        "چمکدار سطحیں زیادہ روشنی منعکس کرتی ہیں۔",
        "آواز ارتعاش سے بنتی ہے۔",
        "زیادہ بلند آواز میں ارتعاش بڑا ہوتا ہے۔",
        "حرارت ٹھوس میں ترسیل سے سفر کرتی ہے۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "Heat transfer through a metal spoon is...",
          "options": [
            "conduction",
            "refraction",
            "pollination"
          ],
          "answer": "conduction"
        },
        {
          "type": "select",
          "text": "Light bouncing from a mirror is...",
          "options": [
            "reflection",
            "digestion",
            "neutralization"
          ],
          "answer": "reflection"
        },
        {
          "type": "select",
          "text": "Light bending when entering water is...",
          "options": [
            "refraction",
            "friction",
            "erosion"
          ],
          "answer": "refraction"
        },
        {
          "type": "radio",
          "text": "True or False: Sound is made by vibrations.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Higher frequency gives higher ___.",
          "answer": "pitch"
        },
        {
          "type": "select",
          "text": "Warm air rising is an example of...",
          "options": [
            "convection",
            "filtration",
            "magnetism"
          ],
          "answer": "convection"
        },
        {
          "type": "select",
          "text": "Most materials expand when...",
          "options": [
            "heated",
            "named",
            "colored blue"
          ],
          "answer": "heated"
        },
        {
          "type": "radio",
          "text": "True or False: Louder sound often has larger vibration amplitude.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Heat from the Sun reaches Earth by ___.",
          "answer": "radiation"
        },
        {
          "type": "select",
          "text": "Which surface reflects light well?",
          "options": [
            "Mirror",
            "Black cloth",
            "Soil"
          ],
          "answer": "Mirror"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "دھاتی چمچ میں حرارت کی منتقلی کیا ہے؟",
          "options": [
            "ترسیل",
            "انعطاف",
            "زیرگی"
          ],
          "answer": "ترسیل"
        },
        {
          "type": "select",
          "text": "آئینے سے روشنی کا واپس آنا کیا ہے؟",
          "options": [
            "انعکاس",
            "ہضم",
            "تعدیل"
          ],
          "answer": "انعکاس"
        },
        {
          "type": "select",
          "text": "پانی میں داخل ہوتے وقت روشنی کا مڑنا کیا ہے؟",
          "options": [
            "انعطاف",
            "رگڑ",
            "کٹاؤ"
          ],
          "answer": "انعطاف"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: آواز ارتعاش سے بنتی ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: زیادہ frequency سے زیادہ ___ بنتی ہے۔",
          "answer": "pitch"
        },
        {
          "type": "select",
          "text": "گرم ہوا کا اوپر جانا کس کی مثال ہے؟",
          "options": [
            "حمل",
            "چھاننا",
            "مقناطیسیت"
          ],
          "answer": "حمل"
        },
        {
          "type": "select",
          "text": "زیادہ تر مادے کب پھیلتے ہیں؟",
          "options": [
            "گرم کرنے پر",
            "نام رکھنے پر",
            "نیلا رنگنے پر"
          ],
          "answer": "گرم کرنے پر"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: زیادہ بلند آواز میں ارتعاش کا amplitude عموماً بڑا ہوتا ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: سورج کی حرارت زمین تک ___ سے پہنچتی ہے۔",
          "answer": "اشعاع"
        },
        {
          "type": "select",
          "text": "کون سی سطح روشنی اچھی منعکس کرتی ہے؟",
          "options": [
            "آئینہ",
            "کالا کپڑا",
            "مٹی"
          ],
          "answer": "آئینہ"
        }
      ]
    },
    "electricity-and-magnetism": {
      "title": "Electricity and Magnetism",
      "titleUr": "بجلی اور مقناطیسیت",
      "intro": "Learn electric charge, current, circuits, series and parallel circuits, resistance introduction, magnets, and electromagnets.",
      "introUr": "برقی چارج، کرنٹ، سرکٹ، سلسلہ وار اور متوازی سرکٹ، مزاحمت کا تعارف، مقناطیس اور برقی مقناطیس سیکھیں۔",
      "focus": [
        "Electric charge introduction",
        "Current flows in complete circuits",
        "Series and parallel circuit comparison",
        "Resistance affects current",
        "Electromagnets use current to make magnetism"
      ],
      "focusUr": [
        "برقی چارج کا تعارف",
        "مکمل سرکٹ میں کرنٹ بہتا ہے",
        "سلسلہ وار اور متوازی سرکٹ کا موازنہ",
        "مزاحمت کرنٹ پر اثر ڈالتی ہے",
        "برقی مقناطیس کرنٹ سے مقناطیسیت بناتا ہے"
      ],
      "examples": [
        [
          "Series circuit",
          "One path for current."
        ],
        [
          "Parallel circuit",
          "More than one path."
        ],
        [
          "Resistance",
          "Opposes current."
        ],
        [
          "Electromagnet",
          "Coil of wire with current."
        ]
      ],
      "examplesUr": [
        [
          "سلسلہ وار سرکٹ",
          "کرنٹ کا ایک راستہ۔"
        ],
        [
          "متوازی سرکٹ",
          "ایک سے زیادہ راستے۔"
        ],
        [
          "مزاحمت",
          "کرنٹ کی مخالفت کرتی ہے۔"
        ],
        [
          "برقی مقناطیس",
          "کرنٹ والی تار کی کوائل۔"
        ]
      ],
      "quick": [
        "A circuit needs a complete path.",
        "Bulbs in parallel can keep working if one branch opens.",
        "Adding more resistance reduces current.",
        "More coil turns can make an electromagnet stronger."
      ],
      "quickUr": [
        "سرکٹ کو مکمل راستہ چاہیے۔",
        "متوازی سرکٹ میں ایک شاخ بند ہو تو دوسری چل سکتی ہے۔",
        "زیادہ مزاحمت کرنٹ کم کرتی ہے۔",
        "زیادہ کوائل چکر برقی مقناطیس کو مضبوط کر سکتے ہیں۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "Electric current flows in a...",
          "options": [
            "complete circuit",
            "broken circuit only",
            "dry notebook"
          ],
          "answer": "complete circuit"
        },
        {
          "type": "select",
          "text": "A series circuit has...",
          "options": [
            "one path",
            "many independent paths",
            "no components"
          ],
          "answer": "one path"
        },
        {
          "type": "select",
          "text": "A parallel circuit has...",
          "options": [
            "more than one path",
            "one path only",
            "no battery"
          ],
          "answer": "more than one path"
        },
        {
          "type": "radio",
          "text": "True or False: Resistance opposes current.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: A current-carrying coil can make an ___.",
          "answer": "electromagnet"
        },
        {
          "type": "select",
          "text": "Which material is often magnetic?",
          "options": [
            "Iron",
            "Plastic",
            "Paper"
          ],
          "answer": "Iron"
        },
        {
          "type": "select",
          "text": "Which can increase electromagnet strength?",
          "options": [
            "More coil turns",
            "No battery",
            "Plastic core only"
          ],
          "answer": "More coil turns"
        },
        {
          "type": "radio",
          "text": "True or False: Like magnetic poles repel.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Current is the flow of electric ___.",
          "answer": "charge"
        },
        {
          "type": "select",
          "text": "Which is safer?",
          "options": [
            "Do not touch wet switches",
            "Use broken wires",
            "Put metal in sockets"
          ],
          "answer": "Do not touch wet switches"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "برقی کرنٹ کس میں بہتا ہے؟",
          "options": [
            "مکمل سرکٹ",
            "صرف ٹوٹے سرکٹ",
            "خشک کاپی"
          ],
          "answer": "مکمل سرکٹ"
        },
        {
          "type": "select",
          "text": "سلسلہ وار سرکٹ میں کیا ہوتا ہے؟",
          "options": [
            "ایک راستہ",
            "کئی آزاد راستے",
            "کوئی جز نہیں"
          ],
          "answer": "ایک راستہ"
        },
        {
          "type": "select",
          "text": "متوازی سرکٹ میں کیا ہوتا ہے؟",
          "options": [
            "ایک سے زیادہ راستے",
            "صرف ایک راستہ",
            "بیٹری نہیں"
          ],
          "answer": "ایک سے زیادہ راستے"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: مزاحمت کرنٹ کی مخالفت کرتی ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: کرنٹ والی کوائل ___ بنا سکتی ہے۔",
          "answer": "برقی مقناطیس"
        },
        {
          "type": "select",
          "text": "کون سا مواد عموماً مقناطیسی ہے؟",
          "options": [
            "لوہا",
            "پلاسٹک",
            "کاغذ"
          ],
          "answer": "لوہا"
        },
        {
          "type": "select",
          "text": "برقی مقناطیس کو کیا مضبوط کر سکتا ہے؟",
          "options": [
            "زیادہ کوائل چکر",
            "بیٹری نہ ہونا",
            "صرف پلاسٹک کور"
          ],
          "answer": "زیادہ کوائل چکر"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: ایک جیسے مقناطیسی قطب دھکیلتے ہیں۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: کرنٹ برقی ___ کا بہاؤ ہے۔",
          "answer": "چارج"
        },
        {
          "type": "select",
          "text": "محفوظ عمل کون سا ہے؟",
          "options": [
            "گیلے سوئچ نہ چھونا",
            "ٹوٹی تار استعمال کرنا",
            "ساکٹ میں دھات ڈالنا"
          ],
          "answer": "گیلے سوئچ نہ چھونا"
        }
      ]
    },
    "earth-and-space": {
      "title": "Earth and Space",
      "titleUr": "زمین اور خلا",
      "intro": "Study Earth structure, plate movement introduction, earthquakes, volcanoes, weather, climate, solar and lunar eclipses, and space exploration.",
      "introUr": "زمین کی ساخت، پلیٹ حرکت، زلزلے، آتش فشاں، موسم، آب و ہوا، سورج اور چاند گرہن، اور خلائی تحقیق سیکھیں۔",
      "focus": [
        "Earth layers and plate movement",
        "Earthquakes and volcanoes",
        "Weather versus climate",
        "Solar and lunar eclipses",
        "Space exploration introduction"
      ],
      "focusUr": [
        "زمین کی تہیں اور پلیٹ حرکت",
        "زلزلے اور آتش فشاں",
        "موسم اور آب و ہوا کا فرق",
        "سورج اور چاند گرہن",
        "خلائی تحقیق کا تعارف"
      ],
      "examples": [
        [
          "Earthquake",
          "Sudden shaking caused by movement in Earth crust."
        ],
        [
          "Volcano",
          "Opening where lava can erupt."
        ],
        [
          "Solar eclipse",
          "Moon blocks sunlight from reaching Earth."
        ],
        [
          "Lunar eclipse",
          "Earth shadow falls on Moon."
        ]
      ],
      "examplesUr": [
        [
          "زلزلہ",
          "زمین کی پرت کی حرکت سے اچانک لرزش۔"
        ],
        [
          "آتش فشاں",
          "وہ راستہ جہاں سے لاوا نکل سکتا ہے۔"
        ],
        [
          "سورج گرہن",
          "چاند سورج کی روشنی زمین تک پہنچنے سے روکتا ہے۔"
        ],
        [
          "چاند گرہن",
          "زمین کا سایہ چاند پر پڑتا ہے۔"
        ]
      ],
      "quick": [
        "Weather changes daily; climate is long-term pattern.",
        "Plate boundaries can have earthquakes and volcanoes.",
        "Eclipses need Sun, Earth, and Moon alignment.",
        "Space exploration uses satellites, probes, and spacecraft."
      ],
      "quickUr": [
        "موسم روز بدلتا ہے؛ آب و ہوا طویل مدتی نمونہ ہے۔",
        "پلیٹ سرحدوں پر زلزلے اور آتش فشاں ہو سکتے ہیں۔",
        "گرہن کے لیے سورج، زمین اور چاند کی سیدھ چاہیے۔",
        "خلائی تحقیق سیٹلائٹ، پروب اور خلائی جہاز استعمال کرتی ہے۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "Long-term weather pattern is...",
          "options": [
            "climate",
            "daily weather",
            "lava"
          ],
          "answer": "climate"
        },
        {
          "type": "select",
          "text": "A solar eclipse happens when...",
          "options": [
            "Moon blocks sunlight",
            "Earth shadow falls on Moon",
            "rain freezes"
          ],
          "answer": "Moon blocks sunlight"
        },
        {
          "type": "select",
          "text": "A lunar eclipse happens when...",
          "options": [
            "Earth shadow falls on Moon",
            "Moon blocks the Sun",
            "wind blows"
          ],
          "answer": "Earth shadow falls on Moon"
        },
        {
          "type": "radio",
          "text": "True or False: Plate movement can cause earthquakes.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: An opening where lava erupts is a ___.",
          "answer": "volcano"
        },
        {
          "type": "select",
          "text": "Daily temperature and rain describe...",
          "options": [
            "weather",
            "climate only",
            "core only"
          ],
          "answer": "weather"
        },
        {
          "type": "select",
          "text": "Which tool helps space exploration?",
          "options": [
            "Satellite",
            "Toothbrush",
            "Food test paper"
          ],
          "answer": "Satellite"
        },
        {
          "type": "radio",
          "text": "True or False: Weather and climate are exactly the same.",
          "options": [
            "True",
            "False"
          ],
          "answer": "False"
        },
        {
          "type": "text",
          "text": "Complete: Earthquakes are sudden shaking of the ___.",
          "answer": "ground",
          "alt": [
            "Earth"
          ]
        },
        {
          "type": "select",
          "text": "Which Earth layer is outermost?",
          "options": [
            "Crust",
            "Core",
            "Mantle only"
          ],
          "answer": "Crust"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "طویل مدتی موسمی نمونہ کیا ہے؟",
          "options": [
            "آب و ہوا",
            "روز کا موسم",
            "لاوا"
          ],
          "answer": "آب و ہوا"
        },
        {
          "type": "select",
          "text": "سورج گرہن کب ہوتا ہے؟",
          "options": [
            "چاند سورج کی روشنی روکے",
            "زمین کا سایہ چاند پر پڑے",
            "بارش جم جائے"
          ],
          "answer": "چاند سورج کی روشنی روکے"
        },
        {
          "type": "select",
          "text": "چاند گرہن کب ہوتا ہے؟",
          "options": [
            "زمین کا سایہ چاند پر پڑے",
            "چاند سورج کو روکے",
            "ہوا چلے"
          ],
          "answer": "زمین کا سایہ چاند پر پڑے"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: پلیٹ حرکت زلزلے کا سبب بن سکتی ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: لاوا نکلنے کا راستہ ___ ہے۔",
          "answer": "آتش فشاں"
        },
        {
          "type": "select",
          "text": "روز کا درجہ حرارت اور بارش کیا بیان کرتے ہیں؟",
          "options": [
            "موسم",
            "صرف آب و ہوا",
            "صرف مرکزہ"
          ],
          "answer": "موسم"
        },
        {
          "type": "select",
          "text": "خلائی تحقیق میں کون سا آلہ مدد دیتا ہے؟",
          "options": [
            "سیٹلائٹ",
            "ٹوتھ برش",
            "غذائی ٹیسٹ کاغذ"
          ],
          "answer": "سیٹلائٹ"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: موسم اور آب و ہوا بالکل ایک ہی ہیں۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "غلط"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: زلزلہ ___ کی اچانک لرزش ہے۔",
          "answer": "زمین"
        },
        {
          "type": "select",
          "text": "زمین کی سب سے بیرونی تہہ کون سی ہے؟",
          "options": [
            "پرت",
            "مرکزہ",
            "صرف مینٹل"
          ],
          "answer": "پرت"
        }
      ]
    }
  };

  const TOPICS_GRADE8 = {
    "scientific-investigation-and-practical-skills": {
      "title": "Scientific Investigation and Practical Skills",
      "titleUr": "سائنسی تحقیق اور عملی مہارتیں",
      "intro": "Design experiments, control variables, measure accurately, analyze data, interpret graphs, write scientific explanations, and use lab apparatus safely.",
      "introUr": "تجربات بنانا، متغیرات قابو کرنا، درست پیمائش، ڈیٹا کا تجزیہ، گراف کی تشریح، سائنسی وضاحت اور لیب کے آلات کا محفوظ استعمال سیکھیں۔",
      "focus": [
        "Designing fair experiments",
        "Variables, controls, error, and accuracy",
        "Choosing suitable apparatus and units",
        "Tables, graphs, and data analysis",
        "Scientific explanations supported by evidence"
      ],
      "focusUr": [
        "منصفانہ تجربہ بنانا",
        "متغیرات، کنٹرول، غلطی اور درستگی",
        "مناسب آلات اور اکائیاں چننا",
        "جدول، گراف اور ڈیٹا کا تجزیہ",
        "ثبوت سے سائنسی وضاحت لکھنا"
      ],
      "examples": [
        [
          "Control variable",
          "A condition kept the same."
        ],
        [
          "Accuracy",
          "How close a measurement is to the true value."
        ],
        [
          "Line graph",
          "Shows continuous change."
        ],
        [
          "Apparatus",
          "Thermometer, beaker, measuring cylinder."
        ]
      ],
      "examplesUr": [
        [
          "قابو شدہ متغیر",
          "وہ حالت جو ایک جیسی رکھی جائے۔"
        ],
        [
          "درستگی",
          "پیمائش کا اصل قدر کے قریب ہونا۔"
        ],
        [
          "لائن گراف",
          "مسلسل تبدیلی دکھاتا ہے۔"
        ],
        [
          "آلات",
          "تھرمامیٹر، بیکر، ناپنے والا سلنڈر۔"
        ]
      ],
      "quick": [
        "Plan method, variables, safety, and results table before starting.",
        "Repeat readings and calculate an average when suitable.",
        "Plot independent variable on the x-axis.",
        "Explain patterns using science vocabulary."
      ],
      "quickUr": [
        "شروع کرنے سے پہلے طریقہ، متغیرات، حفاظت اور نتائج کا جدول بنائیں۔",
        "مناسب ہو تو ریڈنگز دہرائیں اور اوسط نکالیں۔",
        "آزاد متغیر x-axis پر لگائیں۔",
        "نمونوں کی وضاحت سائنسی الفاظ سے کریں۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "The variable kept the same is a...",
          "options": [
            "control variable",
            "dependent variable",
            "random guess"
          ],
          "answer": "control variable"
        },
        {
          "type": "select",
          "text": "Accuracy means a measurement is close to the...",
          "options": [
            "true value",
            "largest value",
            "oldest value"
          ],
          "answer": "true value"
        },
        {
          "type": "select",
          "text": "Which apparatus measures temperature?",
          "options": [
            "Thermometer",
            "Measuring cylinder",
            "Stopwatch"
          ],
          "answer": "Thermometer"
        },
        {
          "type": "radio",
          "text": "True or False: Repeating readings can help spot errors.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: The independent variable usually goes on the ___ axis.",
          "answer": "x",
          "alt": [
            "x-axis"
          ]
        },
        {
          "type": "select",
          "text": "Which graph often shows continuous change?",
          "options": [
            "Line graph",
            "Food chain",
            "Circuit symbol"
          ],
          "answer": "Line graph"
        },
        {
          "type": "select",
          "text": "Which belongs in a full experiment plan?",
          "options": [
            "Risk assessment",
            "Only a color title",
            "A poem only"
          ],
          "answer": "Risk assessment"
        },
        {
          "type": "radio",
          "text": "True or False: A conclusion should use evidence from results.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: An average can be calculated from repeated ___.",
          "answer": "readings"
        },
        {
          "type": "select",
          "text": "Which is safer in a lab?",
          "options": [
            "Wear goggles when required",
            "Taste chemicals",
            "Run with apparatus"
          ],
          "answer": "Wear goggles when required"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "ایک جیسا رکھا جانے والا متغیر کیا ہے؟",
          "options": [
            "قابو شدہ متغیر",
            "تابع متغیر",
            "بے ترتیب اندازہ"
          ],
          "answer": "قابو شدہ متغیر"
        },
        {
          "type": "select",
          "text": "درستگی کا مطلب پیمائش کا کس کے قریب ہونا ہے؟",
          "options": [
            "اصل قدر",
            "سب سے بڑی قدر",
            "سب سے پرانی قدر"
          ],
          "answer": "اصل قدر"
        },
        {
          "type": "select",
          "text": "درجہ حرارت کون سا آلہ ناپتا ہے؟",
          "options": [
            "تھرمامیٹر",
            "ناپنے والا سلنڈر",
            "اسٹاپ واچ"
          ],
          "answer": "تھرمامیٹر"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: ریڈنگز دہرانے سے غلطی پہچاننے میں مدد مل سکتی ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: آزاد متغیر عموماً ___ محور پر لگتا ہے۔",
          "answer": "x",
          "alt": [
            "x-axis"
          ]
        },
        {
          "type": "select",
          "text": "مسلسل تبدیلی دکھانے کے لیے کون سا گراف مناسب ہے؟",
          "options": [
            "لائن گراف",
            "غذائی زنجیر",
            "سرکٹ علامت"
          ],
          "answer": "لائن گراف"
        },
        {
          "type": "select",
          "text": "مکمل تجرباتی منصوبے میں کیا شامل ہو سکتا ہے؟",
          "options": [
            "خطرات کا جائزہ",
            "صرف رنگین عنوان",
            "صرف نظم"
          ],
          "answer": "خطرات کا جائزہ"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: نتیجہ نتائج کے ثبوت سے لکھنا چاہیے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: اوسط دہرائی گئی ___ سے نکالی جا سکتی ہے۔",
          "answer": "ریڈنگز"
        },
        {
          "type": "select",
          "text": "لیب میں محفوظ عمل کون سا ہے؟",
          "options": [
            "ضرورت پر چشمہ پہننا",
            "کیمیکل چکھنا",
            "آلات کے ساتھ دوڑنا"
          ],
          "answer": "ضرورت پر چشمہ پہننا"
        }
      ]
    },
    "cells-and-biotechnology": {
      "title": "Cells and Biotechnology",
      "titleUr": "خلیات اور حیاتی ٹیکنالوجی",
      "intro": "Revise cell structure and learn DNA, genes, heredity, microorganisms, useful and harmful microbes, and biotechnology in medicine and food.",
      "introUr": "خلیے کی ساخت دہرائیں اور DNA، genes، وراثت، خرد جاندار، مفید و نقصان دہ microbes، اور طب و خوراک میں حیاتی ٹیکنالوجی سیکھیں۔",
      "focus": [
        "Cell parts and functions",
        "DNA and genes as hereditary material",
        "Microorganisms in disease, food, and industry",
        "Biotechnology uses living organisms or cells",
        "Vaccines, insulin, and food applications"
      ],
      "focusUr": [
        "خلیے کے حصے اور کام",
        "DNA اور genes وراثتی مادہ ہیں",
        "خرد جاندار بیماری، خوراک اور صنعت میں",
        "حیاتی ٹیکنالوجی خلیات یا جاندار استعمال کرتی ہے",
        "ویکسین، انسولین اور خوراکی استعمال"
      ],
      "examples": [
        [
          "DNA",
          "Carries instructions for traits."
        ],
        [
          "Gene",
          "A section of DNA."
        ],
        [
          "Useful microbe",
          "Yeast helps bread rise."
        ],
        [
          "Biotechnology",
          "Bacteria can help produce insulin."
        ]
      ],
      "examplesUr": [
        [
          "DNA",
          "خصوصیات کی ہدایات رکھتا ہے۔"
        ],
        [
          "Gene",
          "DNA کا ایک حصہ۔"
        ],
        [
          "مفید خرد جاندار",
          "خمیر روٹی پھلانے میں مدد دیتا ہے۔"
        ],
        [
          "حیاتی ٹیکنالوجی",
          "بیکٹیریا انسولین بنانے میں مدد دے سکتے ہیں۔"
        ]
      ],
      "quick": [
        "DNA is found in cells and carries inherited information.",
        "Microorganisms can be helpful or harmful.",
        "Biotechnology supports vaccines, medicines, and food production.",
        "Heredity means traits passing from parents to offspring."
      ],
      "quickUr": [
        "DNA خلیات میں ہوتا ہے اور وراثتی معلومات رکھتا ہے۔",
        "خرد جاندار مفید یا نقصان دہ ہو سکتے ہیں۔",
        "حیاتی ٹیکنالوجی ویکسین، ادویات اور خوراک میں مدد دیتی ہے۔",
        "وراثت کا مطلب خصوصیات کا والدین سے اولاد تک جانا ہے۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "DNA carries...",
          "options": [
            "hereditary information",
            "electric current",
            "soil only"
          ],
          "answer": "hereditary information"
        },
        {
          "type": "select",
          "text": "A gene is a section of...",
          "options": [
            "DNA",
            "plastic",
            "water"
          ],
          "answer": "DNA"
        },
        {
          "type": "select",
          "text": "Which microbe helps bread rise?",
          "options": [
            "Yeast",
            "Mosquito",
            "Fish"
          ],
          "answer": "Yeast"
        },
        {
          "type": "radio",
          "text": "True or False: All microorganisms are harmful.",
          "options": [
            "True",
            "False"
          ],
          "answer": "False"
        },
        {
          "type": "text",
          "text": "Complete: Traits passing from parents to offspring is ___.",
          "answer": "heredity"
        },
        {
          "type": "select",
          "text": "Biotechnology can use bacteria to produce...",
          "options": [
            "insulin",
            "sunlight",
            "rocks"
          ],
          "answer": "insulin"
        },
        {
          "type": "select",
          "text": "Which is a biotechnology use?",
          "options": [
            "Vaccine production",
            "Breaking a ruler",
            "Painting a wall"
          ],
          "answer": "Vaccine production"
        },
        {
          "type": "radio",
          "text": "True or False: Some bacteria are useful in food science.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: A harmful microorganism that causes disease is a ___.",
          "answer": "pathogen"
        },
        {
          "type": "select",
          "text": "Which cell part controls many activities?",
          "options": [
            "Nucleus",
            "Cell wall only",
            "Vacuole only"
          ],
          "answer": "Nucleus"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "DNA کیا رکھتا ہے؟",
          "options": [
            "وراثتی معلومات",
            "برقی کرنٹ",
            "صرف مٹی"
          ],
          "answer": "وراثتی معلومات"
        },
        {
          "type": "select",
          "text": "Gene کس کا حصہ ہے؟",
          "options": [
            "DNA",
            "پلاسٹک",
            "پانی"
          ],
          "answer": "DNA"
        },
        {
          "type": "select",
          "text": "روٹی پھلانے میں کون سا microbe مدد دیتا ہے؟",
          "options": [
            "خمیر",
            "مچھر",
            "مچھلی"
          ],
          "answer": "خمیر"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: تمام خرد جاندار نقصان دہ ہوتے ہیں۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "غلط"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: خصوصیات کا والدین سے اولاد میں جانا ___ ہے۔",
          "answer": "وراثت"
        },
        {
          "type": "select",
          "text": "حیاتی ٹیکنالوجی بیکٹیریا سے کیا بنوا سکتی ہے؟",
          "options": [
            "انسولین",
            "دھوپ",
            "چٹانیں"
          ],
          "answer": "انسولین"
        },
        {
          "type": "select",
          "text": "حیاتی ٹیکنالوجی کا استعمال کون سا ہے؟",
          "options": [
            "ویکسین بنانا",
            "فٹہ توڑنا",
            "دیوار رنگنا"
          ],
          "answer": "ویکسین بنانا"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: کچھ بیکٹیریا خوراکی سائنس میں مفید ہیں۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: بیماری پیدا کرنے والا نقصان دہ خرد جاندار ___ ہے۔",
          "answer": "pathogen",
          "alt": [
            "جراثیم"
          ]
        },
        {
          "type": "select",
          "text": "خلیے کی بہت سی سرگرمیاں کون قابو کرتا ہے؟",
          "options": [
            "مرکزہ",
            "صرف خلیاتی دیوار",
            "صرف vacuole"
          ],
          "answer": "مرکزہ"
        }
      ]
    },
    "human-body-systems": {
      "title": "Human Body Systems",
      "titleUr": "انسانی جسم کے نظام",
      "intro": "Study the nervous system, endocrine system introduction, age-appropriate reproductive system, immune system, diseases, immunity, and vaccination.",
      "introUr": "اعصابی نظام، endocrine نظام کا تعارف، مناسب انداز میں تولیدی نظام، مدافعتی نظام، بیماری، immunity اور vaccination سیکھیں۔",
      "focus": [
        "Nervous system sends fast electrical messages",
        "Endocrine glands release hormones",
        "Immune system defends against pathogens",
        "Vaccination prepares immunity",
        "Body systems coordinate to maintain health"
      ],
      "focusUr": [
        "اعصابی نظام تیز برقی پیغامات بھیجتا ہے",
        "غدود hormones خارج کرتے ہیں",
        "مدافعتی نظام pathogens سے دفاع کرتا ہے",
        "vaccination immunity کو تیار کرتی ہے",
        "جسمانی نظام صحت برقرار رکھنے کو مل کر کام کرتے ہیں"
      ],
      "examples": [
        [
          "Brain",
          "Control center of nervous system."
        ],
        [
          "Hormone",
          "Chemical messenger."
        ],
        [
          "White blood cell",
          "Helps fight infection."
        ],
        [
          "Vaccine",
          "Trains immune response safely."
        ]
      ],
      "examplesUr": [
        [
          "دماغ",
          "اعصابی نظام کا کنٹرول مرکز۔"
        ],
        [
          "Hormone",
          "کیمیائی پیغام رساں۔"
        ],
        [
          "سفید خون کا خلیہ",
          "انفیکشن سے لڑنے میں مدد دیتا ہے۔"
        ],
        [
          "ویکسین",
          "مدافعتی ردعمل محفوظ طریقے سے تیار کرتی ہے۔"
        ]
      ],
      "quick": [
        "Nerves carry messages between body and brain.",
        "Hormones act more slowly but can last longer.",
        "Immunity can remember some pathogens.",
        "Vaccination helps prevent serious disease."
      ],
      "quickUr": [
        "اعصاب جسم اور دماغ کے درمیان پیغام لے جاتے ہیں۔",
        "Hormones آہستہ مگر دیرپا اثر کر سکتے ہیں۔",
        "Immunity کچھ pathogens کو یاد رکھ سکتی ہے۔",
        "Vaccination سنگین بیماری سے بچانے میں مدد دیتی ہے۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "The control center of the nervous system is the...",
          "options": [
            "brain",
            "stomach",
            "kidney"
          ],
          "answer": "brain"
        },
        {
          "type": "select",
          "text": "Chemical messengers from endocrine glands are...",
          "options": [
            "hormones",
            "enzymes only",
            "antibiotics"
          ],
          "answer": "hormones"
        },
        {
          "type": "select",
          "text": "Which cells help fight infection?",
          "options": [
            "White blood cells",
            "Red blood cells only",
            "Root hair cells"
          ],
          "answer": "White blood cells"
        },
        {
          "type": "radio",
          "text": "True or False: Vaccines can help prepare the immune system.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Disease-causing microbes are called ___.",
          "answer": "pathogens"
        },
        {
          "type": "select",
          "text": "Which system sends messages through nerves?",
          "options": [
            "Nervous system",
            "Digestive system only",
            "Skeletal system only"
          ],
          "answer": "Nervous system"
        },
        {
          "type": "select",
          "text": "Immunity means the body can...",
          "options": [
            "defend against disease",
            "make rocks",
            "stop all weather"
          ],
          "answer": "defend against disease"
        },
        {
          "type": "radio",
          "text": "True or False: Body systems work separately with no coordination.",
          "options": [
            "True",
            "False"
          ],
          "answer": "False"
        },
        {
          "type": "text",
          "text": "Complete: A vaccine helps prevent some serious ___.",
          "answer": "diseases"
        },
        {
          "type": "select",
          "text": "Which organ is part of the reproductive system?",
          "options": [
            "Ovary or testis",
            "Tooth only",
            "Ear only"
          ],
          "answer": "Ovary or testis"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "اعصابی نظام کا کنٹرول مرکز کیا ہے؟",
          "options": [
            "دماغ",
            "معدہ",
            "گردہ"
          ],
          "answer": "دماغ"
        },
        {
          "type": "select",
          "text": "endocrine غدود کے کیمیائی پیغام رساں کیا ہیں؟",
          "options": [
            "hormones",
            "صرف enzymes",
            "antibiotics"
          ],
          "answer": "hormones"
        },
        {
          "type": "select",
          "text": "انفیکشن سے لڑنے میں کون سے خلیات مدد دیتے ہیں؟",
          "options": [
            "سفید خون کے خلیات",
            "صرف سرخ خون کے خلیات",
            "جڑ کے خلیات"
          ],
          "answer": "سفید خون کے خلیات"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: ویکسین مدافعتی نظام کو تیار کرنے میں مدد دیتی ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: بیماری پیدا کرنے والے microbes ___ کہلاتے ہیں۔",
          "answer": "pathogens",
          "alt": [
            "جراثیم"
          ]
        },
        {
          "type": "select",
          "text": "اعصاب کے ذریعے پیغام کون سا نظام بھیجتا ہے؟",
          "options": [
            "اعصابی نظام",
            "صرف نظام ہضم",
            "صرف ہڈیوں کا نظام"
          ],
          "answer": "اعصابی نظام"
        },
        {
          "type": "select",
          "text": "Immunity کا مطلب جسم کا کیا کرنا ہے؟",
          "options": [
            "بیماری سے دفاع",
            "چٹان بنانا",
            "تمام موسم روکنا"
          ],
          "answer": "بیماری سے دفاع"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: جسمانی نظام بغیر رابطے کے الگ الگ کام کرتے ہیں۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "غلط"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: ویکسین کچھ سنگین ___ سے بچاتی ہے۔",
          "answer": "بیماریوں"
        },
        {
          "type": "select",
          "text": "تولیدی نظام کا حصہ کون سا عضو ہے؟",
          "options": [
            "ovary یا testis",
            "صرف دانت",
            "صرف کان"
          ],
          "answer": "ovary یا testis"
        }
      ]
    },
    "health-and-disease": {
      "title": "Health and Disease",
      "titleUr": "صحت اور بیماری",
      "intro": "Learn communicable and non-communicable diseases, pathogens, immunity, antibiotics, vaccines, lifestyle diseases, first aid, and safety.",
      "introUr": "متعدی اور غیر متعدی بیماریاں، pathogens، immunity، antibiotics، vaccines، طرز زندگی کی بیماریاں، ابتدائی طبی امداد اور حفاظت سیکھیں۔",
      "focus": [
        "Communicable diseases can spread between people",
        "Non-communicable diseases do not spread by infection",
        "Pathogens include bacteria, viruses, fungi, and parasites",
        "Antibiotics act against bacteria, not viruses",
        "First aid gives immediate help before medical care"
      ],
      "focusUr": [
        "متعدی بیماریاں لوگوں میں پھیل سکتی ہیں",
        "غیر متعدی بیماریاں انفیکشن سے نہیں پھیلتیں",
        "pathogens میں bacteria، viruses، fungi اور parasites شامل ہیں",
        "antibiotics bacteria کے خلاف کام کرتے ہیں، viruses کے نہیں",
        "first aid طبی مدد سے پہلے فوری مدد ہے"
      ],
      "examples": [
        [
          "Communicable",
          "Flu can spread."
        ],
        [
          "Non-communicable",
          "Diabetes is not caught by touch."
        ],
        [
          "Antibiotic",
          "Used for some bacterial infections."
        ],
        [
          "First aid",
          "Clean a small cut and cover it."
        ]
      ],
      "examplesUr": [
        [
          "متعدی",
          "فلو پھیل سکتا ہے۔"
        ],
        [
          "غیر متعدی",
          "ذیابیطس چھونے سے نہیں لگتی۔"
        ],
        [
          "Antibiotic",
          "کچھ bacterial infection کے لیے استعمال۔"
        ],
        [
          "First aid",
          "چھوٹا زخم صاف کر کے ڈھانپنا۔"
        ]
      ],
      "quick": [
        "Wash hands to reduce infection spread.",
        "Complete medicines as prescribed by a doctor.",
        "Healthy diet and exercise reduce lifestyle disease risk.",
        "First aid should be calm and safe."
      ],
      "quickUr": [
        "انفیکشن کم کرنے کے لیے ہاتھ دھوئیں۔",
        "ڈاکٹر کے مشورے کے مطابق دوا مکمل کریں۔",
        "صحت مند غذا اور ورزش lifestyle disease کا خطرہ کم کرتی ہیں۔",
        "first aid پرسکون اور محفوظ ہونی چاہیے۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "A disease that can spread is...",
          "options": [
            "communicable",
            "non-communicable",
            "inherited only"
          ],
          "answer": "communicable"
        },
        {
          "type": "select",
          "text": "Which is a pathogen?",
          "options": [
            "Virus",
            "Vitamin",
            "Bandage"
          ],
          "answer": "Virus"
        },
        {
          "type": "select",
          "text": "Antibiotics work against many...",
          "options": [
            "bacteria",
            "viruses only",
            "rocks"
          ],
          "answer": "bacteria"
        },
        {
          "type": "radio",
          "text": "True or False: Vaccines can help prevent some diseases.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Immediate help after injury is first ___.",
          "answer": "aid"
        },
        {
          "type": "select",
          "text": "Which is non-communicable?",
          "options": [
            "Diabetes",
            "Flu",
            "Measles"
          ],
          "answer": "Diabetes"
        },
        {
          "type": "select",
          "text": "Which habit reduces disease spread?",
          "options": [
            "Washing hands",
            "Sharing dirty cups",
            "Ignoring wounds"
          ],
          "answer": "Washing hands"
        },
        {
          "type": "radio",
          "text": "True or False: Antibiotics should be used only as advised by a doctor.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Germs that cause disease are ___.",
          "answer": "pathogens"
        },
        {
          "type": "select",
          "text": "Which is a lifestyle health habit?",
          "options": [
            "Regular exercise",
            "No sleep",
            "Too much junk food"
          ],
          "answer": "Regular exercise"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "جو بیماری پھیل سکتی ہے وہ کیا ہے؟",
          "options": [
            "متعدی",
            "غیر متعدی",
            "صرف وراثتی"
          ],
          "answer": "متعدی"
        },
        {
          "type": "select",
          "text": "Pathogen کون سا ہے؟",
          "options": [
            "Virus",
            "Vitamin",
            "Bandage"
          ],
          "answer": "Virus"
        },
        {
          "type": "select",
          "text": "Antibiotics عموماً کس کے خلاف کام کرتے ہیں؟",
          "options": [
            "bacteria",
            "صرف viruses",
            "چٹانیں"
          ],
          "answer": "bacteria"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: ویکسین کچھ بیماریوں سے بچا سکتی ہیں۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: چوٹ کے بعد فوری مدد first ___ ہے۔",
          "answer": "aid"
        },
        {
          "type": "select",
          "text": "غیر متعدی بیماری کون سی ہے؟",
          "options": [
            "ذیابیطس",
            "فلو",
            "خسرہ"
          ],
          "answer": "ذیابیطس"
        },
        {
          "type": "select",
          "text": "بیماری پھیلنے کو کون سی عادت کم کرتی ہے؟",
          "options": [
            "ہاتھ دھونا",
            "گندے کپ شیئر کرنا",
            "زخم نظر انداز کرنا"
          ],
          "answer": "ہاتھ دھونا"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: antibiotics صرف ڈاکٹر کے مشورے سے استعمال ہونے چاہییں۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: بیماری پیدا کرنے والے جراثیم ___ ہیں۔",
          "answer": "pathogens",
          "alt": [
            "جراثیم"
          ]
        },
        {
          "type": "select",
          "text": "صحت مند طرز زندگی کی عادت کون سی ہے؟",
          "options": [
            "باقاعدہ ورزش",
            "نیند نہ لینا",
            "بہت زیادہ junk food"
          ],
          "answer": "باقاعدہ ورزش"
        }
      ]
    },
    "genetics-and-variation": {
      "title": "Genetics and Variation",
      "titleUr": "جینیات اور تغیر",
      "intro": "Study heredity, inherited and acquired traits, variation, basic genetic terms, and why variation matters in populations.",
      "introUr": "وراثت، inherited اور acquired traits، variation، بنیادی genetic اصطلاحات اور آبادی میں variation کی اہمیت سیکھیں۔",
      "focus": [
        "Heredity passes traits from parents to offspring",
        "Inherited traits come from genes",
        "Acquired traits develop during life",
        "Variation means differences among individuals",
        "Variation helps populations adapt"
      ],
      "focusUr": [
        "وراثت خصوصیات والدین سے اولاد کو دیتی ہے",
        "inherited traits genes سے آتے ہیں",
        "acquired traits زندگی میں بنتے ہیں",
        "variation افراد کے فرق کو کہتے ہیں",
        "variation آبادی کو adapt کرنے میں مدد دیتا ہے"
      ],
      "examples": [
        [
          "Inherited trait",
          "Natural eye color."
        ],
        [
          "Acquired trait",
          "A learned skill like cycling."
        ],
        [
          "Variation",
          "Different heights in a class."
        ],
        [
          "Gene",
          "Unit of heredity."
        ]
      ],
      "examplesUr": [
        [
          "وراثتی خصوصیت",
          "قدرتی آنکھ کا رنگ۔"
        ],
        [
          "حاصل کردہ خصوصیت",
          "سائیکل چلانا جیسی سیکھی مہارت۔"
        ],
        [
          "تغیر",
          "کلاس میں مختلف قد۔"
        ],
        [
          "Gene",
          "وراثت کی اکائی۔"
        ]
      ],
      "quick": [
        "Not every difference is inherited.",
        "Environment can affect many traits.",
        "Variation can be continuous or discontinuous.",
        "Genetic vocabulary includes gene, trait, heredity, and variation."
      ],
      "quickUr": [
        "ہر فرق وراثتی نہیں ہوتا۔",
        "ماحول بہت سی خصوصیات پر اثر ڈال سکتا ہے۔",
        "variation مسلسل یا غیر مسلسل ہو سکتا ہے۔",
        "genetic الفاظ میں gene، trait، heredity اور variation شامل ہیں۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "Traits passed from parents are...",
          "options": [
            "inherited traits",
            "acquired traits only",
            "weather traits"
          ],
          "answer": "inherited traits"
        },
        {
          "type": "select",
          "text": "A learned skill is usually...",
          "options": [
            "acquired",
            "always inherited",
            "a pathogen"
          ],
          "answer": "acquired"
        },
        {
          "type": "select",
          "text": "Differences among individuals are called...",
          "options": [
            "variation",
            "neutralization",
            "pressure"
          ],
          "answer": "variation"
        },
        {
          "type": "radio",
          "text": "True or False: Genes are linked with heredity.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: The passing of traits is ___.",
          "answer": "heredity"
        },
        {
          "type": "select",
          "text": "Which is likely inherited?",
          "options": [
            "Natural eye color",
            "A haircut",
            "A pencil mark"
          ],
          "answer": "Natural eye color"
        },
        {
          "type": "select",
          "text": "Which is acquired?",
          "options": [
            "Reading skill",
            "Blood group",
            "Natural hair color"
          ],
          "answer": "Reading skill"
        },
        {
          "type": "radio",
          "text": "True or False: Environment can affect some traits.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: A characteristic is also called a ___.",
          "answer": "trait"
        },
        {
          "type": "select",
          "text": "Why is variation useful?",
          "options": [
            "It helps populations survive changes",
            "It removes all organisms",
            "It stops heredity"
          ],
          "answer": "It helps populations survive changes"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "والدین سے منتقل خصوصیات کیا ہیں؟",
          "options": [
            "وراثتی خصوصیات",
            "صرف حاصل کردہ خصوصیات",
            "موسمی خصوصیات"
          ],
          "answer": "وراثتی خصوصیات"
        },
        {
          "type": "select",
          "text": "سیکھی ہوئی مہارت عموماً کیا ہے؟",
          "options": [
            "حاصل کردہ",
            "ہمیشہ وراثتی",
            "pathogen"
          ],
          "answer": "حاصل کردہ"
        },
        {
          "type": "select",
          "text": "افراد کے فرق کو کیا کہتے ہیں؟",
          "options": [
            "تغیر",
            "تعدیل",
            "دباؤ"
          ],
          "answer": "تغیر"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: genes کا تعلق وراثت سے ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: خصوصیات کا منتقل ہونا ___ ہے۔",
          "answer": "وراثت"
        },
        {
          "type": "select",
          "text": "کون سی خصوصیت غالباً وراثتی ہے؟",
          "options": [
            "قدرتی آنکھ کا رنگ",
            "بال کٹوانا",
            "پنسل کا نشان"
          ],
          "answer": "قدرتی آنکھ کا رنگ"
        },
        {
          "type": "select",
          "text": "حاصل کردہ خصوصیت کون سی ہے؟",
          "options": [
            "پڑھنے کی مہارت",
            "خون کا گروپ",
            "قدرتی بالوں کا رنگ"
          ],
          "answer": "پڑھنے کی مہارت"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: ماحول کچھ خصوصیات پر اثر ڈال سکتا ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: characteristic کو ___ بھی کہتے ہیں۔",
          "answer": "trait",
          "alt": [
            "خصوصیت"
          ]
        },
        {
          "type": "select",
          "text": "تغیر کیوں مفید ہے؟",
          "options": [
            "آبادی کو تبدیلیوں میں زندہ رہنے میں مدد دیتا ہے",
            "تمام جاندار ختم کرتا ہے",
            "وراثت روکتا ہے"
          ],
          "answer": "آبادی کو تبدیلیوں میں زندہ رہنے میں مدد دیتا ہے"
        }
      ]
    },
    "ecosystems-and-environmental-issues": {
      "title": "Ecosystems and Environmental Issues",
      "titleUr": "ماحولیاتی نظام اور ماحولیاتی مسائل",
      "intro": "Explore ecosystem balance, biodiversity, conservation, pollution, global warming, renewable resources, and sustainable living.",
      "introUr": "ماحولیاتی توازن، biodiversity، conservation، pollution، global warming، renewable resources اور sustainable living سیکھیں۔",
      "focus": [
        "Balanced ecosystems depend on many relationships",
        "Biodiversity means variety of life",
        "Conservation protects species and habitats",
        "Pollution and global warming disturb ecosystems",
        "Sustainable living uses resources wisely"
      ],
      "focusUr": [
        "متوازن ماحولیاتی نظام کئی تعلقات پر منحصر ہے",
        "biodiversity زندگی کی قسموں کی کثرت ہے",
        "conservation انواع اور habitats بچاتا ہے",
        "pollution اور global warming نظام کو خراب کرتے ہیں",
        "sustainable living وسائل سمجھداری سے استعمال کرتی ہے"
      ],
      "examples": [
        [
          "Biodiversity",
          "Many plant and animal species in a forest."
        ],
        [
          "Renewable resource",
          "Solar energy."
        ],
        [
          "Carbon footprint",
          "Total greenhouse gases from activities."
        ],
        [
          "Conservation",
          "Protecting wetlands."
        ]
      ],
      "examplesUr": [
        [
          "Biodiversity",
          "جنگل میں پودوں اور جانوروں کی کئی انواع۔"
        ],
        [
          "Renewable resource",
          "شمسی توانائی۔"
        ],
        [
          "Carbon footprint",
          "سرگرمیوں سے greenhouse gases کی کل مقدار۔"
        ],
        [
          "Conservation",
          "wetlands کی حفاظت۔"
        ]
      ],
      "quick": [
        "High biodiversity can make ecosystems more stable.",
        "Renewable resources can be replaced naturally.",
        "Reduce, reuse, and recycle support sustainability.",
        "Global warming is linked to increased greenhouse gases."
      ],
      "quickUr": [
        "زیادہ biodiversity نظام کو زیادہ مستحکم بنا سکتی ہے۔",
        "renewable resources قدرتی طور پر دوبارہ بن سکتے ہیں۔",
        "reduce, reuse, recycle پائیداری میں مدد دیتے ہیں۔",
        "global warming greenhouse gases کے اضافے سے جڑی ہے۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "Biodiversity means variety of...",
          "options": [
            "life",
            "plastic",
            "machines only"
          ],
          "answer": "life"
        },
        {
          "type": "select",
          "text": "Which is renewable?",
          "options": [
            "Solar energy",
            "Coal",
            "Petrol"
          ],
          "answer": "Solar energy"
        },
        {
          "type": "select",
          "text": "Global warming is linked to increased...",
          "options": [
            "greenhouse gases",
            "clean water only",
            "soil minerals only"
          ],
          "answer": "greenhouse gases"
        },
        {
          "type": "radio",
          "text": "True or False: Conservation protects habitats.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Reduce, reuse, and ___ support sustainability.",
          "answer": "recycle"
        },
        {
          "type": "select",
          "text": "Which action lowers carbon footprint?",
          "options": [
            "Saving electricity",
            "Wasting fuel",
            "Burning plastic"
          ],
          "answer": "Saving electricity"
        },
        {
          "type": "select",
          "text": "Which is pollution?",
          "options": [
            "Factory smoke",
            "Planting trees",
            "Clean air"
          ],
          "answer": "Factory smoke"
        },
        {
          "type": "radio",
          "text": "True or False: Sustainable living uses resources wisely.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: A balanced ecosystem has stable relationships among ___.",
          "answer": "organisms"
        },
        {
          "type": "select",
          "text": "Which plan supports conservation?",
          "options": [
            "Protect native species",
            "Destroy habitats",
            "Waste water"
          ],
          "answer": "Protect native species"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "Biodiversity کا مطلب کس کی کثرت ہے؟",
          "options": [
            "زندگی",
            "پلاسٹک",
            "صرف مشینیں"
          ],
          "answer": "زندگی"
        },
        {
          "type": "select",
          "text": "renewable کون سا ہے؟",
          "options": [
            "شمسی توانائی",
            "کوئلہ",
            "پیٹرول"
          ],
          "answer": "شمسی توانائی"
        },
        {
          "type": "select",
          "text": "Global warming کس کے اضافے سے جڑی ہے؟",
          "options": [
            "greenhouse gases",
            "صرف صاف پانی",
            "صرف معدنیات"
          ],
          "answer": "greenhouse gases"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: conservation habitats کی حفاظت کرتی ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Reduce, reuse اور ___ sustainability میں مدد دیتے ہیں۔",
          "answer": "recycle",
          "alt": [
            "ری سائیکل"
          ]
        },
        {
          "type": "select",
          "text": "carbon footprint کون سا عمل کم کرتا ہے؟",
          "options": [
            "بجلی بچانا",
            "ایندھن ضائع کرنا",
            "پلاسٹک جلانا"
          ],
          "answer": "بجلی بچانا"
        },
        {
          "type": "select",
          "text": "آلودگی کون سی ہے؟",
          "options": [
            "فیکٹری کا دھواں",
            "درخت لگانا",
            "صاف ہوا"
          ],
          "answer": "فیکٹری کا دھواں"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: sustainable living وسائل سمجھداری سے استعمال کرتی ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: متوازن ماحولیاتی نظام میں ___ کے تعلقات مستحکم ہوتے ہیں۔",
          "answer": "جانداروں"
        },
        {
          "type": "select",
          "text": "conservation میں کون سا منصوبہ مدد دیتا ہے؟",
          "options": [
            "مقامی انواع کی حفاظت",
            "habitats تباہ کرنا",
            "پانی ضائع کرنا"
          ],
          "answer": "مقامی انواع کی حفاظت"
        }
      ]
    },
    "chemical-reactions": {
      "title": "Chemical Reactions",
      "titleUr": "کیمیائی تعاملات",
      "intro": "Learn physical and chemical changes, chemical reactions, reactants and products, word equations, oxidation, combustion, and acids, bases, and salts revision.",
      "introUr": "جسمانی اور کیمیائی تبدیلیاں، کیمیائی تعاملات، reactants اور products، word equations، oxidation، combustion، اور acids, bases, salts دہرائیں۔",
      "focus": [
        "Chemical reactions make new substances",
        "Reactants change into products",
        "Word equations summarize reactions",
        "Combustion is burning in oxygen",
        "Oxidation involves reaction with oxygen"
      ],
      "focusUr": [
        "کیمیائی تعامل نئے مادے بناتا ہے",
        "reactants products میں بدلتے ہیں",
        "word equations تعامل کو خلاصہ کرتی ہیں",
        "combustion آکسیجن میں جلنا ہے",
        "oxidation آکسیجن سے تعامل ہے"
      ],
      "examples": [
        [
          "Physical change",
          "Melting ice."
        ],
        [
          "Chemical change",
          "Rusting iron."
        ],
        [
          "Reactants",
          "Starting substances."
        ],
        [
          "Products",
          "New substances formed."
        ]
      ],
      "examplesUr": [
        [
          "جسمانی تبدیلی",
          "برف کا پگھلنا۔"
        ],
        [
          "کیمیائی تبدیلی",
          "لوہے کو زنگ لگنا۔"
        ],
        [
          "Reactants",
          "شروع کے مادے۔"
        ],
        [
          "Products",
          "بننے والے نئے مادے۔"
        ]
      ],
      "quick": [
        "Chemical changes are often hard to reverse.",
        "Signs include gas, color change, heat, or precipitate.",
        "Combustion needs fuel, oxygen, and heat.",
        "Neutralization is acid plus base."
      ],
      "quickUr": [
        "کیمیائی تبدیلیاں عموماً مشکل سے واپس ہوتی ہیں۔",
        "علامات میں گیس، رنگ بدلنا، حرارت یا رسوب شامل ہیں۔",
        "combustion کو ایندھن، آکسیجن اور حرارت چاہیے۔",
        "neutralization تیزاب + اساس ہے۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "Starting substances in a reaction are...",
          "options": [
            "reactants",
            "products",
            "indicators only"
          ],
          "answer": "reactants"
        },
        {
          "type": "select",
          "text": "New substances formed are...",
          "options": [
            "products",
            "reactants",
            "variables"
          ],
          "answer": "products"
        },
        {
          "type": "select",
          "text": "Burning in oxygen is...",
          "options": [
            "combustion",
            "filtration",
            "refraction"
          ],
          "answer": "combustion"
        },
        {
          "type": "radio",
          "text": "True or False: Rusting is a chemical change.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Acid + base is called ___.",
          "answer": "neutralization"
        },
        {
          "type": "select",
          "text": "Which is a physical change?",
          "options": [
            "Melting ice",
            "Burning wood",
            "Rusting iron"
          ],
          "answer": "Melting ice"
        },
        {
          "type": "select",
          "text": "Which is a sign of chemical reaction?",
          "options": [
            "Gas produced",
            "Only shape folded",
            "Paper cut only"
          ],
          "answer": "Gas produced"
        },
        {
          "type": "radio",
          "text": "True or False: A word equation names reactants and products.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Oxidation often involves reaction with ___.",
          "answer": "oxygen"
        },
        {
          "type": "select",
          "text": "Which gas supports combustion?",
          "options": [
            "Oxygen",
            "Helium",
            "Carbon dioxide only"
          ],
          "answer": "Oxygen"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "تعامل کے شروع کے مادے کیا ہیں؟",
          "options": [
            "reactants",
            "products",
            "صرف indicators"
          ],
          "answer": "reactants"
        },
        {
          "type": "select",
          "text": "بننے والے نئے مادے کیا ہیں؟",
          "options": [
            "products",
            "reactants",
            "متغیرات"
          ],
          "answer": "products"
        },
        {
          "type": "select",
          "text": "آکسیجن میں جلنا کیا ہے؟",
          "options": [
            "combustion",
            "filtration",
            "refraction"
          ],
          "answer": "combustion"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: زنگ لگنا کیمیائی تبدیلی ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: acid + base کو ___ کہتے ہیں۔",
          "answer": "neutralization",
          "alt": [
            "تعدیل"
          ]
        },
        {
          "type": "select",
          "text": "جسمانی تبدیلی کون سی ہے؟",
          "options": [
            "برف کا پگھلنا",
            "لکڑی کا جلنا",
            "لوہے کو زنگ لگنا"
          ],
          "answer": "برف کا پگھلنا"
        },
        {
          "type": "select",
          "text": "کیمیائی تعامل کی علامت کون سی ہے؟",
          "options": [
            "گیس بننا",
            "صرف شکل موڑنا",
            "صرف کاغذ کاٹنا"
          ],
          "answer": "گیس بننا"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: word equation reactants اور products کے نام دیتی ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: oxidation عموماً ___ سے تعامل ہے۔",
          "answer": "آکسیجن"
        },
        {
          "type": "select",
          "text": "combustion میں کون سی گیس مدد دیتی ہے؟",
          "options": [
            "آکسیجن",
            "ہیلیم",
            "صرف کاربن ڈائی آکسائیڈ"
          ],
          "answer": "آکسیجن"
        }
      ]
    },
    "periodic-table-introduction": {
      "title": "Periodic Table Introduction",
      "titleUr": "دوری جدول کا تعارف",
      "intro": "Learn elements and symbols, atomic number, metals and non-metals, groups and periods, common elements, and their uses.",
      "introUr": "عناصر اور علامات، atomic number، metals اور non-metals، groups اور periods، عام عناصر اور استعمالات سیکھیں۔",
      "focus": [
        "Elements are organized in the periodic table",
        "Atomic number identifies an element",
        "Metals and non-metals have different properties",
        "Groups are vertical columns",
        "Periods are horizontal rows"
      ],
      "focusUr": [
        "عناصر periodic table میں منظم ہیں",
        "atomic number عنصر کی شناخت کرتا ہے",
        "metals اور non-metals کی خصوصیات مختلف ہیں",
        "groups عمودی columns ہیں",
        "periods افقی rows ہیں"
      ],
      "examples": [
        [
          "H",
          "Hydrogen."
        ],
        [
          "O",
          "Oxygen."
        ],
        [
          "Fe",
          "Iron."
        ],
        [
          "Cu",
          "Copper used in wires."
        ]
      ],
      "examplesUr": [
        [
          "H",
          "Hydrogen۔"
        ],
        [
          "O",
          "Oxygen۔"
        ],
        [
          "Fe",
          "Iron۔"
        ],
        [
          "Cu",
          "Copper تاروں میں استعمال۔"
        ]
      ],
      "quick": [
        "Element symbols use one or two letters.",
        "The first letter is always capital.",
        "Metals often conduct heat and electricity.",
        "Non-metals can be gases or brittle solids."
      ],
      "quickUr": [
        "عنصر کی علامت ایک یا دو حروف پر مشتمل ہوتی ہے۔",
        "پہلا حرف ہمیشہ capital ہوتا ہے۔",
        "metals عموماً حرارت اور بجلی گزارتے ہیں۔",
        "non-metals گیس یا brittle solids ہو سکتے ہیں۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "Vertical columns in the periodic table are...",
          "options": [
            "groups",
            "periods",
            "equations"
          ],
          "answer": "groups"
        },
        {
          "type": "select",
          "text": "Horizontal rows are...",
          "options": [
            "periods",
            "groups",
            "genes"
          ],
          "answer": "periods"
        },
        {
          "type": "select",
          "text": "The symbol O stands for...",
          "options": [
            "Oxygen",
            "Gold",
            "Iron"
          ],
          "answer": "Oxygen"
        },
        {
          "type": "radio",
          "text": "True or False: The first letter of a chemical symbol is capital.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Atomic number identifies an ___.",
          "answer": "element"
        },
        {
          "type": "select",
          "text": "Which is a metal?",
          "options": [
            "Iron",
            "Oxygen",
            "Sulfur"
          ],
          "answer": "Iron"
        },
        {
          "type": "select",
          "text": "Which metal is commonly used in wires?",
          "options": [
            "Copper",
            "Helium",
            "Carbon"
          ],
          "answer": "Copper"
        },
        {
          "type": "radio",
          "text": "True or False: Metals often conduct electricity.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Sodium has the symbol ___.",
          "answer": "Na"
        },
        {
          "type": "select",
          "text": "Which is a non-metal?",
          "options": [
            "Oxygen",
            "Copper",
            "Aluminium"
          ],
          "answer": "Oxygen"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "periodic table کے عمودی columns کیا ہیں؟",
          "options": [
            "groups",
            "periods",
            "equations"
          ],
          "answer": "groups"
        },
        {
          "type": "select",
          "text": "افقی rows کیا ہیں؟",
          "options": [
            "periods",
            "groups",
            "genes"
          ],
          "answer": "periods"
        },
        {
          "type": "select",
          "text": "علامت O کس کے لیے ہے؟",
          "options": [
            "Oxygen",
            "Gold",
            "Iron"
          ],
          "answer": "Oxygen"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: chemical symbol کا پہلا حرف capital ہوتا ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: atomic number عنصر کی ___ کرتا ہے۔",
          "answer": "شناخت"
        },
        {
          "type": "select",
          "text": "metal کون سا ہے؟",
          "options": [
            "Iron",
            "Oxygen",
            "Sulfur"
          ],
          "answer": "Iron"
        },
        {
          "type": "select",
          "text": "تاروں میں عام استعمال ہونے والی دھات کون سی ہے؟",
          "options": [
            "Copper",
            "Helium",
            "Carbon"
          ],
          "answer": "Copper"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: metals عموماً بجلی گزارتے ہیں۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Sodium کی علامت ___ ہے۔",
          "answer": "Na"
        },
        {
          "type": "select",
          "text": "non-metal کون سا ہے؟",
          "options": [
            "Oxygen",
            "Copper",
            "Aluminium"
          ],
          "answer": "Oxygen"
        }
      ]
    },
    "force-and-pressure": {
      "title": "Force and Pressure",
      "titleUr": "قوت اور دباؤ",
      "intro": "Study force, pressure in solids, liquids and gases, atmospheric pressure, floating and sinking, density, and applications of pressure.",
      "introUr": "قوت، ٹھوس، مائع اور گیس میں دباؤ، atmospheric pressure، تیرنا اور ڈوبنا، density، اور دباؤ کے استعمالات سیکھیں۔",
      "focus": [
        "Pressure is force per unit area",
        "Liquids and gases exert pressure",
        "Atmospheric pressure is air pressure",
        "Density affects floating and sinking",
        "Pressure applications appear in daily life"
      ],
      "focusUr": [
        "دباؤ فی اکائی رقبہ قوت ہے",
        "مائع اور گیس دباؤ ڈالتے ہیں",
        "atmospheric pressure ہوا کا دباؤ ہے",
        "density تیرنے اور ڈوبنے پر اثر کرتی ہے",
        "دباؤ کے استعمال روزمرہ میں ہیں"
      ],
      "examples": [
        [
          "Pressure formula",
          "pressure = force / area."
        ],
        [
          "Atmospheric pressure",
          "Air pressing on surfaces."
        ],
        [
          "Floating",
          "Less dense objects may float."
        ],
        [
          "Sharp pin",
          "Small area gives high pressure."
        ]
      ],
      "examplesUr": [
        [
          "دباؤ فارمولا",
          "pressure = force / area۔"
        ],
        [
          "فضائی دباؤ",
          "ہوا کا سطحوں پر دباؤ۔"
        ],
        [
          "تیرنا",
          "کم density والی چیز تیر سکتی ہے۔"
        ],
        [
          "نوکیلی پن",
          "کم رقبہ زیادہ دباؤ دیتا ہے۔"
        ]
      ],
      "quick": [
        "Greater force increases pressure.",
        "Greater area decreases pressure.",
        "Pressure in liquids increases with depth.",
        "Objects float when upthrust can balance weight."
      ],
      "quickUr": [
        "زیادہ قوت دباؤ بڑھاتی ہے۔",
        "زیادہ رقبہ دباؤ کم کرتا ہے۔",
        "مائع میں گہرائی کے ساتھ دباؤ بڑھتا ہے۔",
        "چیز تب تیرتی ہے جب upthrust وزن کو balance کرے۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "Pressure = force divided by...",
          "options": [
            "area",
            "time",
            "volume only"
          ],
          "answer": "area"
        },
        {
          "type": "select",
          "text": "Air pressure is also called...",
          "options": [
            "atmospheric pressure",
            "genetic pressure",
            "sound pressure only"
          ],
          "answer": "atmospheric pressure"
        },
        {
          "type": "select",
          "text": "Pressure in a liquid increases with...",
          "options": [
            "depth",
            "brightness",
            "color only"
          ],
          "answer": "depth"
        },
        {
          "type": "radio",
          "text": "True or False: Smaller area can increase pressure.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Density is mass divided by ___.",
          "answer": "volume"
        },
        {
          "type": "select",
          "text": "Which may float better?",
          "options": [
            "Less dense object",
            "Always the heaviest object",
            "Only hot object"
          ],
          "answer": "Less dense object"
        },
        {
          "type": "select",
          "text": "Why are snowshoes wide?",
          "options": [
            "They reduce pressure",
            "They increase density",
            "They make electricity"
          ],
          "answer": "They reduce pressure"
        },
        {
          "type": "radio",
          "text": "True or False: Gases can exert pressure.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: A sharp pin has high pressure because area is ___.",
          "answer": "small"
        },
        {
          "type": "select",
          "text": "Which force balances weight when floating?",
          "options": [
            "Upthrust",
            "Friction only",
            "Sound"
          ],
          "answer": "Upthrust"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "Pressure = force تقسیم...",
          "options": [
            "area",
            "time",
            "صرف volume"
          ],
          "answer": "area"
        },
        {
          "type": "select",
          "text": "ہوا کا دباؤ کیا کہلاتا ہے؟",
          "options": [
            "atmospheric pressure",
            "genetic pressure",
            "صرف sound pressure"
          ],
          "answer": "atmospheric pressure"
        },
        {
          "type": "select",
          "text": "مائع میں دباؤ کس کے ساتھ بڑھتا ہے؟",
          "options": [
            "گہرائی",
            "چمک",
            "صرف رنگ"
          ],
          "answer": "گہرائی"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: کم رقبہ دباؤ بڑھا سکتا ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Density = mass تقسیم ___.",
          "answer": "volume"
        },
        {
          "type": "select",
          "text": "کون سی چیز بہتر تیر سکتی ہے؟",
          "options": [
            "کم density والی",
            "ہمیشہ سب سے بھاری",
            "صرف گرم چیز"
          ],
          "answer": "کم density والی"
        },
        {
          "type": "select",
          "text": "snowshoes چوڑے کیوں ہوتے ہیں؟",
          "options": [
            "دباؤ کم کرتے ہیں",
            "density بڑھاتے ہیں",
            "بجلی بناتے ہیں"
          ],
          "answer": "دباؤ کم کرتے ہیں"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: گیسیں دباؤ ڈال سکتی ہیں۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: نوکیلی پن میں دباؤ زیادہ ہے کیونکہ رقبہ ___ ہے۔",
          "answer": "کم"
        },
        {
          "type": "select",
          "text": "تیرتے وقت وزن کو کون سی قوت balance کرتی ہے؟",
          "options": [
            "Upthrust",
            "صرف رگڑ",
            "آواز"
          ],
          "answer": "Upthrust"
        }
      ]
    },
    "energy-and-machines": {
      "title": "Energy and Machines",
      "titleUr": "توانائی اور مشینیں",
      "intro": "Learn work and energy, simple machines, efficiency, renewable energy, fossil fuels, and energy conservation.",
      "introUr": "کام اور توانائی، سادہ مشینیں، efficiency، renewable energy، fossil fuels اور energy conservation سیکھیں۔",
      "focus": [
        "Work is done when force moves an object",
        "Energy is the ability to do work",
        "Simple machines make work easier",
        "Efficiency compares useful output to input",
        "Renewable energy and conservation reduce environmental impact"
      ],
      "focusUr": [
        "جب قوت چیز کو حرکت دے تو کام ہوتا ہے",
        "توانائی کام کرنے کی صلاحیت ہے",
        "سادہ مشینیں کام آسان کرتی ہیں",
        "efficiency useful output کا input سے موازنہ ہے",
        "renewable energy اور conservation ماحولیاتی اثر کم کرتے ہیں"
      ],
      "examples": [
        [
          "Lever",
          "A crowbar."
        ],
        [
          "Pulley",
          "Lifts a load with a rope."
        ],
        [
          "Renewable",
          "Solar or wind energy."
        ],
        [
          "Fossil fuel",
          "Coal, oil, natural gas."
        ]
      ],
      "examplesUr": [
        [
          "Lever",
          "crowbar۔"
        ],
        [
          "Pulley",
          "رسی سے وزن اٹھاتی ہے۔"
        ],
        [
          "Renewable",
          "شمسی یا ہوا کی توانائی۔"
        ],
        [
          "Fossil fuel",
          "کوئلہ، تیل، قدرتی گیس۔"
        ]
      ],
      "quick": [
        "Machines do not create energy; they transfer or transform it.",
        "No machine is 100% efficient in real life.",
        "Fossil fuels are non-renewable.",
        "Saving energy lowers cost and pollution."
      ],
      "quickUr": [
        "مشینیں توانائی پیدا نہیں کرتیں؛ منتقل یا تبدیل کرتی ہیں۔",
        "حقیقی زندگی میں کوئی مشین 100% efficient نہیں۔",
        "fossil fuels non-renewable ہیں۔",
        "توانائی بچانا خرچ اور آلودگی کم کرتا ہے۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "Energy is the ability to do...",
          "options": [
            "work",
            "nothing",
            "only sound"
          ],
          "answer": "work"
        },
        {
          "type": "select",
          "text": "A pulley is a...",
          "options": [
            "simple machine",
            "microbe",
            "gene"
          ],
          "answer": "simple machine"
        },
        {
          "type": "select",
          "text": "Which is renewable energy?",
          "options": [
            "Wind energy",
            "Coal",
            "Petrol"
          ],
          "answer": "Wind energy"
        },
        {
          "type": "radio",
          "text": "True or False: Fossil fuels are non-renewable.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Efficiency compares useful output with energy ___.",
          "answer": "input"
        },
        {
          "type": "select",
          "text": "Which is a fossil fuel?",
          "options": [
            "Coal",
            "Sunlight",
            "Wind"
          ],
          "answer": "Coal"
        },
        {
          "type": "select",
          "text": "Which saves energy?",
          "options": [
            "Switching off unused lights",
            "Leaving fans on",
            "Wasting fuel"
          ],
          "answer": "Switching off unused lights"
        },
        {
          "type": "radio",
          "text": "True or False: Simple machines can make work easier.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Work is done when force moves an ___.",
          "answer": "object"
        },
        {
          "type": "select",
          "text": "Which is a lever?",
          "options": [
            "Crowbar",
            "Battery",
            "Vaccine"
          ],
          "answer": "Crowbar"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "توانائی کس کی صلاحیت ہے؟",
          "options": [
            "کام کرنے کی",
            "کچھ نہ کرنے کی",
            "صرف آواز کی"
          ],
          "answer": "کام کرنے کی"
        },
        {
          "type": "select",
          "text": "pulley کیا ہے؟",
          "options": [
            "سادہ مشین",
            "microbe",
            "gene"
          ],
          "answer": "سادہ مشین"
        },
        {
          "type": "select",
          "text": "renewable energy کون سی ہے؟",
          "options": [
            "ہوا کی توانائی",
            "کوئلہ",
            "پیٹرول"
          ],
          "answer": "ہوا کی توانائی"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: fossil fuels non-renewable ہیں۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: efficiency useful output کا energy ___ سے موازنہ ہے۔",
          "answer": "input"
        },
        {
          "type": "select",
          "text": "fossil fuel کون سا ہے؟",
          "options": [
            "کوئلہ",
            "دھوپ",
            "ہوا"
          ],
          "answer": "کوئلہ"
        },
        {
          "type": "select",
          "text": "توانائی کون سا عمل بچاتا ہے؟",
          "options": [
            "غیر ضروری lights بند کرنا",
            "پنکھے چلتے چھوڑنا",
            "ایندھن ضائع کرنا"
          ],
          "answer": "غیر ضروری lights بند کرنا"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: سادہ مشینیں کام آسان کر سکتی ہیں۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: کام تب ہوتا ہے جب قوت ___ کو حرکت دے۔",
          "answer": "چیز"
        },
        {
          "type": "select",
          "text": "lever کون سا ہے؟",
          "options": [
            "Crowbar",
            "Battery",
            "Vaccine"
          ],
          "answer": "Crowbar"
        }
      ]
    },
    "waves-light-and-sound": {
      "title": "Waves, Light, and Sound",
      "titleUr": "لہریں، روشنی اور آواز",
      "intro": "Study waves, reflection and refraction, lenses, the human eye, sound waves, echo, and noise pollution.",
      "introUr": "لہریں، reflection اور refraction، lenses، انسانی آنکھ، sound waves، echo اور noise pollution سیکھیں۔",
      "focus": [
        "Waves transfer energy",
        "Reflection is bouncing back of waves",
        "Refraction is bending when speed changes",
        "Lenses bend light to form images",
        "Sound waves can echo and noise pollution harms health"
      ],
      "focusUr": [
        "لہریں توانائی منتقل کرتی ہیں",
        "reflection لہروں کا واپس آنا ہے",
        "refraction رفتار بدلنے پر مڑنا ہے",
        "lenses روشنی موڑ کر تصویر بناتے ہیں",
        "آواز echo بنا سکتی ہے اور noise pollution صحت کو نقصان دیتی ہے"
      ],
      "examples": [
        [
          "Reflection",
          "Mirror image."
        ],
        [
          "Refraction",
          "Pencil looks bent in water."
        ],
        [
          "Convex lens",
          "Can focus light."
        ],
        [
          "Echo",
          "Reflected sound heard again."
        ]
      ],
      "examplesUr": [
        [
          "Reflection",
          "آئینے کی تصویر۔"
        ],
        [
          "Refraction",
          "پانی میں پنسل مڑی لگتی ہے۔"
        ],
        [
          "Convex lens",
          "روشنی focus کر سکتا ہے۔"
        ],
        [
          "Echo",
          "منعکس آواز دوبارہ سنائی دیتی ہے۔"
        ]
      ],
      "quick": [
        "Light travels in straight lines in uniform medium.",
        "The eye lens focuses light on the retina.",
        "Sound needs a medium to travel.",
        "Noise pollution can damage hearing and concentration."
      ],
      "quickUr": [
        "یکساں medium میں روشنی سیدھی سفر کرتی ہے۔",
        "آنکھ کا lens روشنی retina پر focus کرتا ہے۔",
        "آواز کو سفر کے لیے medium چاہیے۔",
        "noise pollution سماعت اور توجہ کو نقصان دے سکتی ہے۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "Waves transfer...",
          "options": [
            "energy",
            "genes",
            "salt only"
          ],
          "answer": "energy"
        },
        {
          "type": "select",
          "text": "Bouncing back of light is...",
          "options": [
            "reflection",
            "digestion",
            "combustion"
          ],
          "answer": "reflection"
        },
        {
          "type": "select",
          "text": "Bending of light is...",
          "options": [
            "refraction",
            "pollination",
            "vaccination"
          ],
          "answer": "refraction"
        },
        {
          "type": "radio",
          "text": "True or False: An echo is reflected sound.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: The eye lens focuses light on the ___.",
          "answer": "retina"
        },
        {
          "type": "select",
          "text": "Which lens can focus parallel light rays?",
          "options": [
            "Convex lens",
            "Flat paper",
            "Opaque brick"
          ],
          "answer": "Convex lens"
        },
        {
          "type": "select",
          "text": "Noise pollution can harm...",
          "options": [
            "hearing",
            "soil only",
            "genes only"
          ],
          "answer": "hearing"
        },
        {
          "type": "radio",
          "text": "True or False: Sound can travel through a vacuum easily.",
          "options": [
            "True",
            "False"
          ],
          "answer": "False"
        },
        {
          "type": "text",
          "text": "Complete: Sound waves are made by ___.",
          "answer": "vibrations"
        },
        {
          "type": "select",
          "text": "Which helps reduce noise pollution?",
          "options": [
            "Use horns less",
            "Play loud speakers all night",
            "Shout near hospitals"
          ],
          "answer": "Use horns less"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "لہریں کیا منتقل کرتی ہیں؟",
          "options": [
            "توانائی",
            "genes",
            "صرف نمک"
          ],
          "answer": "توانائی"
        },
        {
          "type": "select",
          "text": "روشنی کا واپس آنا کیا ہے؟",
          "options": [
            "reflection",
            "digestion",
            "combustion"
          ],
          "answer": "reflection"
        },
        {
          "type": "select",
          "text": "روشنی کا مڑنا کیا ہے؟",
          "options": [
            "refraction",
            "pollination",
            "vaccination"
          ],
          "answer": "refraction"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: echo منعکس آواز ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: آنکھ کا lens روشنی ___ پر focus کرتا ہے۔",
          "answer": "retina"
        },
        {
          "type": "select",
          "text": "کون سا lens parallel rays کو focus کر سکتا ہے؟",
          "options": [
            "Convex lens",
            "سادہ کاغذ",
            "opaque اینٹ"
          ],
          "answer": "Convex lens"
        },
        {
          "type": "select",
          "text": "noise pollution کس کو نقصان دے سکتی ہے؟",
          "options": [
            "سماعت",
            "صرف مٹی",
            "صرف genes"
          ],
          "answer": "سماعت"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: آواز vacuum میں آسانی سے سفر کرتی ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "غلط"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: sound waves ___ سے بنتی ہیں۔",
          "answer": "ارتعاش"
        },
        {
          "type": "select",
          "text": "noise pollution کم کرنے میں کیا مدد دیتا ہے؟",
          "options": [
            "horn کم استعمال کرنا",
            "رات بھر loud speaker چلانا",
            "ہسپتال کے پاس شور کرنا"
          ],
          "answer": "horn کم استعمال کرنا"
        }
      ]
    },
    "electricity": {
      "title": "Electricity",
      "titleUr": "بجلی",
      "intro": "Learn current, voltage, resistance, Ohm’s law introduction, series and parallel circuits, electrical power, household electricity, and safety.",
      "introUr": "current، voltage، resistance، Ohm’s law، series اور parallel circuits، electrical power، household electricity اور safety سیکھیں۔",
      "focus": [
        "Current is flow of charge",
        "Voltage provides energy to charges",
        "Resistance opposes current",
        "Ohm’s law links voltage, current, and resistance",
        "Electrical safety prevents shocks and fires"
      ],
      "focusUr": [
        "current چارج کا بہاؤ ہے",
        "voltage charges کو توانائی دیتا ہے",
        "resistance current کی مخالفت کرتی ہے",
        "Ohm’s law voltage، current اور resistance کو جوڑتا ہے",
        "electrical safety جھٹکوں اور آگ سے بچاتی ہے"
      ],
      "examples": [
        [
          "Ohm’s law",
          "V = I x R."
        ],
        [
          "Series circuit",
          "One path."
        ],
        [
          "Parallel circuit",
          "More than one path."
        ],
        [
          "Power",
          "Energy transferred per second."
        ]
      ],
      "examplesUr": [
        [
          "Ohm’s law",
          "V = I x R۔"
        ],
        [
          "Series circuit",
          "ایک راستہ۔"
        ],
        [
          "Parallel circuit",
          "ایک سے زیادہ راستے۔"
        ],
        [
          "Power",
          "فی سیکنڈ منتقل توانائی۔"
        ]
      ],
      "quick": [
        "Do not overload sockets.",
        "Use insulated wires and dry hands.",
        "In series, adding bulbs can make them dimmer.",
        "In parallel, components have separate branches."
      ],
      "quickUr": [
        "sockets پر زیادہ بوجھ نہ ڈالیں۔",
        "insulated wires اور خشک ہاتھ استعمال کریں۔",
        "series میں bulbs بڑھانے سے روشنی کم ہو سکتی ہے۔",
        "parallel میں components الگ branches میں ہوتے ہیں۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "Current is flow of...",
          "options": [
            "charge",
            "water only",
            "sound only"
          ],
          "answer": "charge"
        },
        {
          "type": "select",
          "text": "Ohm’s law is...",
          "options": [
            "V = I x R",
            "F = m only",
            "pH = 7 always"
          ],
          "answer": "V = I x R"
        },
        {
          "type": "select",
          "text": "Resistance...",
          "options": [
            "opposes current",
            "makes genes",
            "stops gravity"
          ],
          "answer": "opposes current"
        },
        {
          "type": "radio",
          "text": "True or False: Parallel circuits have separate branches.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Voltage is measured in ___.",
          "answer": "volts",
          "alt": [
            "V"
          ]
        },
        {
          "type": "select",
          "text": "Which is safer?",
          "options": [
            "Dry hands near switches",
            "Wet hands near switches",
            "Broken plugs"
          ],
          "answer": "Dry hands near switches"
        },
        {
          "type": "select",
          "text": "Electrical power is energy transferred per...",
          "options": [
            "second",
            "year only",
            "kilogram"
          ],
          "answer": "second"
        },
        {
          "type": "radio",
          "text": "True or False: Overloading sockets can be dangerous.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Current is measured in ___.",
          "answer": "amperes",
          "alt": [
            "amps",
            "A"
          ]
        },
        {
          "type": "select",
          "text": "A series circuit has...",
          "options": [
            "one path",
            "many separate branches",
            "no wires"
          ],
          "answer": "one path"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "Current کس کا بہاؤ ہے؟",
          "options": [
            "charge",
            "صرف پانی",
            "صرف آواز"
          ],
          "answer": "charge"
        },
        {
          "type": "select",
          "text": "Ohm’s law کیا ہے؟",
          "options": [
            "V = I x R",
            "صرف F = m",
            "pH ہمیشہ 7"
          ],
          "answer": "V = I x R"
        },
        {
          "type": "select",
          "text": "Resistance کیا کرتی ہے؟",
          "options": [
            "current کی مخالفت",
            "genes بناتی ہے",
            "gravity روکتی ہے"
          ],
          "answer": "current کی مخالفت"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: parallel circuits میں الگ branches ہوتی ہیں۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Voltage ___ میں ناپی جاتی ہے۔",
          "answer": "volts",
          "alt": [
            "V"
          ]
        },
        {
          "type": "select",
          "text": "محفوظ عمل کون سا ہے؟",
          "options": [
            "switches کے پاس خشک ہاتھ",
            "switches کے پاس گیلے ہاتھ",
            "ٹوٹے plugs"
          ],
          "answer": "switches کے پاس خشک ہاتھ"
        },
        {
          "type": "select",
          "text": "Electrical power فی کیا منتقل توانائی ہے؟",
          "options": [
            "second",
            "صرف سال",
            "kilogram"
          ],
          "answer": "second"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: sockets overload کرنا خطرناک ہو سکتا ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Current ___ میں ناپا جاتا ہے۔",
          "answer": "amperes",
          "alt": [
            "amps",
            "A"
          ]
        },
        {
          "type": "select",
          "text": "series circuit میں کیا ہوتا ہے؟",
          "options": [
            "ایک راستہ",
            "کئی الگ branches",
            "تار نہیں"
          ],
          "answer": "ایک راستہ"
        }
      ]
    },
    "earth-and-space-science": {
      "title": "Earth and Space Science",
      "titleUr": "زمین اور خلائی سائنس",
      "intro": "Study Earth structure, rocks and minerals, weathering and erosion, natural disasters, space technology, satellites, and Pakistan’s space applications.",
      "introUr": "زمین کی ساخت، چٹانیں اور معدنیات، weathering اور erosion، natural disasters، space technology، satellites اور پاکستان میں space applications سیکھیں۔",
      "focus": [
        "Earth layers, rocks, and minerals",
        "Weathering breaks rocks and erosion moves material",
        "Natural disasters require preparation",
        "Satellites collect and transmit information",
        "Space technology supports communication, weather, mapping, and agriculture"
      ],
      "focusUr": [
        "زمین کی تہیں، چٹانیں اور معدنیات",
        "weathering چٹانیں توڑتی اور erosion مادہ منتقل کرتا ہے",
        "natural disasters کے لیے تیاری چاہیے",
        "satellites معلومات جمع اور منتقل کرتے ہیں",
        "space technology communication، weather، mapping اور agriculture میں مدد دیتی ہے"
      ],
      "examples": [
        [
          "Rock cycle",
          "Igneous, sedimentary, metamorphic changes."
        ],
        [
          "Satellite",
          "Used for weather forecasts and communication."
        ],
        [
          "Erosion",
          "River carries soil away."
        ],
        [
          "Disaster plan",
          "Safe route and emergency kit."
        ]
      ],
      "examplesUr": [
        [
          "Rock cycle",
          "igneous، sedimentary، metamorphic تبدیلیاں۔"
        ],
        [
          "Satellite",
          "weather forecast اور communication میں استعمال۔"
        ],
        [
          "Erosion",
          "دریا مٹی بہا لے جاتا ہے۔"
        ],
        [
          "Disaster plan",
          "محفوظ راستہ اور emergency kit۔"
        ]
      ],
      "quick": [
        "Minerals are natural substances in rocks.",
        "Weathering happens before erosion in many cases.",
        "Satellites orbit Earth.",
        "Disaster safety includes preparation, response, and recovery."
      ],
      "quickUr": [
        "معدنیات چٹانوں میں قدرتی مادے ہیں۔",
        "اکثر weathering کے بعد erosion ہوتا ہے۔",
        "satellites زمین کے گرد چکر لگاتے ہیں۔",
        "disaster safety میں تیاری، response اور recovery شامل ہیں۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "Satellites move in orbit around...",
          "options": [
            "Earth",
            "only classroom",
            "only oceans"
          ],
          "answer": "Earth"
        },
        {
          "type": "select",
          "text": "Breaking rocks into pieces is...",
          "options": [
            "weathering",
            "digestion",
            "vaccination"
          ],
          "answer": "weathering"
        },
        {
          "type": "select",
          "text": "Moving soil by water or wind is...",
          "options": [
            "erosion",
            "combustion",
            "reflection"
          ],
          "answer": "erosion"
        },
        {
          "type": "radio",
          "text": "True or False: Satellites can help weather forecasting.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: A disaster safety plan should include an emergency ___.",
          "answer": "kit"
        },
        {
          "type": "select",
          "text": "Which is a natural disaster?",
          "options": [
            "Earthquake",
            "Notebook",
            "Bulb"
          ],
          "answer": "Earthquake"
        },
        {
          "type": "select",
          "text": "Which is a rock type?",
          "options": [
            "Sedimentary",
            "Communicable",
            "Renewable only"
          ],
          "answer": "Sedimentary"
        },
        {
          "type": "radio",
          "text": "True or False: Minerals are found in rocks.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Space technology can support communication and ___.",
          "answer": "mapping"
        },
        {
          "type": "select",
          "text": "Which application can help farmers?",
          "options": [
            "Satellite crop monitoring",
            "Broken wire",
            "Noise pollution"
          ],
          "answer": "Satellite crop monitoring"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "Satellites کس کے گرد orbit کرتے ہیں؟",
          "options": [
            "زمین",
            "صرف classroom",
            "صرف oceans"
          ],
          "answer": "زمین"
        },
        {
          "type": "select",
          "text": "چٹانوں کا ٹکڑوں میں ٹوٹنا کیا ہے؟",
          "options": [
            "weathering",
            "digestion",
            "vaccination"
          ],
          "answer": "weathering"
        },
        {
          "type": "select",
          "text": "پانی یا ہوا سے مٹی کا منتقل ہونا کیا ہے؟",
          "options": [
            "erosion",
            "combustion",
            "reflection"
          ],
          "answer": "erosion"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: satellites weather forecasting میں مدد دے سکتے ہیں۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: disaster safety plan میں emergency ___ ہونی چاہیے۔",
          "answer": "kit"
        },
        {
          "type": "select",
          "text": "natural disaster کون سی ہے؟",
          "options": [
            "زلزلہ",
            "کاپی",
            "بلب"
          ],
          "answer": "زلزلہ"
        },
        {
          "type": "select",
          "text": "چٹان کی قسم کون سی ہے؟",
          "options": [
            "Sedimentary",
            "Communicable",
            "صرف Renewable"
          ],
          "answer": "Sedimentary"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: معدنیات چٹانوں میں پائی جاتی ہیں۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: space technology communication اور ___ میں مدد دے سکتی ہے۔",
          "answer": "mapping"
        },
        {
          "type": "select",
          "text": "کون سی application کسانوں کی مدد کر سکتی ہے؟",
          "options": [
            "Satellite crop monitoring",
            "ٹوٹی تار",
            "noise pollution"
          ],
          "answer": "Satellite crop monitoring"
        }
      ]
    }
  };

  const TOPICS_GRADE9 = {
    "biology-introduction-to-biology": {
      "title": "Biology: Introduction to Biology",
      "titleUr": "حیاتیات: حیاتیات کا تعارف",
      "intro": "Study biology, its branches, links with other sciences, careers, Muslim scientists, biological contributions, and levels of organization.",
      "introUr": "حیاتیات، اس کی شاخیں، دوسرے علوم سے تعلق، careers، مسلمان سائنس دان، حیاتیاتی خدمات اور حیاتیاتی تنظیم کی سطحیں سیکھیں۔",
      "focus": [
        "Biology is the study of living organisms",
        "Branches include botany, zoology, microbiology, genetics, and ecology",
        "Biology connects with chemistry, physics, mathematics, and geography",
        "Biology careers include medicine, agriculture, research, biotechnology, and teaching",
        "Levels of organization move from atom to biosphere"
      ],
      "focusUr": [
        "حیاتیات جانداروں کا مطالعہ ہے",
        "شاخوں میں botany، zoology، microbiology، genetics اور ecology شامل ہیں",
        "حیاتیات chemistry، physics، mathematics اور geography سے جڑی ہے",
        "careers میں medicine، agriculture، research، biotechnology اور teaching شامل ہیں",
        "تنظیم کی سطحیں atom سے biosphere تک جاتی ہیں"
      ],
      "examples": [
        [
          "Botany",
          "Study of plants."
        ],
        [
          "Zoology",
          "Study of animals."
        ],
        [
          "Genetics",
          "Study of heredity."
        ],
        [
          "Organization",
          "cell -> tissue -> organ -> organ system -> organism."
        ]
      ],
      "examplesUr": [
        [
          "Botany",
          "پودوں کا مطالعہ۔"
        ],
        [
          "Zoology",
          "جانوروں کا مطالعہ۔"
        ],
        [
          "Genetics",
          "وراثت کا مطالعہ۔"
        ],
        [
          "تنظیم",
          "cell -> tissue -> organ -> organ system -> organism۔"
        ]
      ],
      "quick": [
        "Use branch names to match study areas.",
        "Biophysics applies physics to living systems.",
        "Biochemistry studies chemicals in living things.",
        "Remember organization from smaller to larger levels."
      ],
      "quickUr": [
        "شاخوں کے نام کو مطالعے کے شعبے سے ملائیں۔",
        "Biophysics زندہ نظاموں پر physics لاگو کرتی ہے۔",
        "Biochemistry جانداروں کے کیمیائی مادے پڑھتی ہے۔",
        "تنظیم کی سطحیں چھوٹی سے بڑی یاد رکھیں۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "Biology is the study of...",
          "options": [
            "living organisms",
            "only rocks",
            "only stars"
          ],
          "answer": "living organisms"
        },
        {
          "type": "select",
          "text": "Botany is the study of...",
          "options": [
            "plants",
            "animals",
            "weather"
          ],
          "answer": "plants"
        },
        {
          "type": "select",
          "text": "Zoology is the study of...",
          "options": [
            "animals",
            "chemicals only",
            "maps"
          ],
          "answer": "animals"
        },
        {
          "type": "radio",
          "text": "True or False: Genetics studies heredity.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: The study of microorganisms is ___.",
          "answer": "microbiology"
        },
        {
          "type": "select",
          "text": "Which field links biology and chemistry?",
          "options": [
            "Biochemistry",
            "Geology",
            "Astronomy"
          ],
          "answer": "Biochemistry"
        },
        {
          "type": "select",
          "text": "Which is a biology career?",
          "options": [
            "Medicine",
            "Road construction only",
            "Tailoring only"
          ],
          "answer": "Medicine"
        },
        {
          "type": "radio",
          "text": "True or False: A tissue is made of similar cells.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Cell, tissue, organ, system, ___.",
          "answer": "organism"
        },
        {
          "type": "select",
          "text": "The largest level listed here is...",
          "options": [
            "biosphere",
            "cell",
            "atom"
          ],
          "answer": "biosphere"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "حیاتیات کس کا مطالعہ ہے؟",
          "options": [
            "جانداروں کا",
            "صرف چٹانوں کا",
            "صرف ستاروں کا"
          ],
          "answer": "جانداروں کا"
        },
        {
          "type": "select",
          "text": "Botany کس کا مطالعہ ہے؟",
          "options": [
            "پودوں کا",
            "جانوروں کا",
            "موسم کا"
          ],
          "answer": "پودوں کا"
        },
        {
          "type": "select",
          "text": "Zoology کس کا مطالعہ ہے؟",
          "options": [
            "جانوروں کا",
            "صرف chemicals کا",
            "نقشوں کا"
          ],
          "answer": "جانوروں کا"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Genetics وراثت کا مطالعہ کرتی ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: microorganisms کا مطالعہ ___ ہے۔",
          "answer": "microbiology"
        },
        {
          "type": "select",
          "text": "حیاتیات اور chemistry کو کون سا شعبہ جوڑتا ہے؟",
          "options": [
            "Biochemistry",
            "Geology",
            "Astronomy"
          ],
          "answer": "Biochemistry"
        },
        {
          "type": "select",
          "text": "حیاتیات کا career کون سا ہے؟",
          "options": [
            "Medicine",
            "صرف road construction",
            "صرف tailoring"
          ],
          "answer": "Medicine"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: tissue ملتے جلتے cells سے بنتا ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Cell, tissue, organ, system, ___.",
          "answer": "organism"
        },
        {
          "type": "select",
          "text": "یہاں سب سے بڑی سطح کون سی ہے؟",
          "options": [
            "biosphere",
            "cell",
            "atom"
          ],
          "answer": "biosphere"
        }
      ]
    },
    "biology-solving-a-biological-problem": {
      "title": "Biology: Solving a Biological Problem",
      "titleUr": "حیاتیات: حیاتیاتی مسئلہ حل کرنا",
      "intro": "Learn the biological method: observation, hypothesis, deduction, experiment, theory, law, data organization, and interpretation.",
      "introUr": "biological method کے مراحل، observation، hypothesis، deduction، experiment، theory، law، data organization اور interpretation سیکھیں۔",
      "focus": [
        "Observation identifies a biological problem",
        "Hypothesis gives a testable explanation",
        "Deduction predicts expected results",
        "Experiment tests the hypothesis under controlled conditions",
        "Data is organized in tables, graphs, and charts"
      ],
      "focusUr": [
        "Observation حیاتیاتی مسئلہ پہچانتا ہے",
        "Hypothesis قابل آزمائش وضاحت دیتی ہے",
        "Deduction متوقع نتیجہ بتاتی ہے",
        "Experiment قابو شدہ حالات میں hypothesis کو جانچتا ہے",
        "Data جدول، گراف اور چارٹ میں منظم کیا جاتا ہے"
      ],
      "examples": [
        [
          "Observation",
          "Some plants near a window grow taller."
        ],
        [
          "Hypothesis",
          "More light increases plant growth."
        ],
        [
          "Deduction",
          "If light helps, plants in more light will be taller."
        ],
        [
          "Experiment",
          "Compare plant growth under different light levels."
        ]
      ],
      "examplesUr": [
        [
          "Observation",
          "کھڑکی کے پاس کچھ پودے زیادہ لمبے ہیں۔"
        ],
        [
          "Hypothesis",
          "زیادہ روشنی پودے کی بڑھوتری بڑھاتی ہے۔"
        ],
        [
          "Deduction",
          "اگر روشنی مدد دے تو زیادہ روشنی والے پودے لمبے ہوں گے۔"
        ],
        [
          "Experiment",
          "مختلف روشنی میں پودوں کی بڑھوتری کا موازنہ۔"
        ]
      ],
      "quick": [
        "A good hypothesis can be tested.",
        "Keep variables controlled for fair testing.",
        "A theory is strongly supported by evidence.",
        "A law describes a consistent natural relationship."
      ],
      "quickUr": [
        "اچھا hypothesis قابل آزمائش ہوتا ہے۔",
        "fair test کے لیے variables قابو رکھیں۔",
        "theory مضبوط evidence سے supported ہوتی ہے۔",
        "law فطرت کا مستقل تعلق بیان کرتا ہے۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "The first step is often...",
          "options": [
            "observation",
            "law",
            "publication only"
          ],
          "answer": "observation"
        },
        {
          "type": "select",
          "text": "A testable explanation is a...",
          "options": [
            "hypothesis",
            "table",
            "career"
          ],
          "answer": "hypothesis"
        },
        {
          "type": "select",
          "text": "A logical expected result is a...",
          "options": [
            "deduction",
            "kingdom",
            "branch"
          ],
          "answer": "deduction"
        },
        {
          "type": "radio",
          "text": "True or False: An experiment tests a hypothesis.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Data can be organized in tables and ___.",
          "answer": "graphs"
        },
        {
          "type": "select",
          "text": "Which is a controlled condition?",
          "options": [
            "Same soil for all plants",
            "Different pot sizes and water",
            "No record keeping"
          ],
          "answer": "Same soil for all plants"
        },
        {
          "type": "select",
          "text": "A theory is supported by...",
          "options": [
            "evidence",
            "guessing only",
            "decoration"
          ],
          "answer": "evidence"
        },
        {
          "type": "radio",
          "text": "True or False: A hypothesis should be impossible to test.",
          "options": [
            "True",
            "False"
          ],
          "answer": "False"
        },
        {
          "type": "text",
          "text": "Complete: A biological problem is solved using the biological ___.",
          "answer": "method"
        },
        {
          "type": "select",
          "text": "Which is a deduction?",
          "options": [
            "If light helps growth, then lit plants grow taller",
            "Plants are green only",
            "A notebook is blue"
          ],
          "answer": "If light helps growth, then lit plants grow taller"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "اکثر پہلا مرحلہ کیا ہے؟",
          "options": [
            "observation",
            "law",
            "صرف publication"
          ],
          "answer": "observation"
        },
        {
          "type": "select",
          "text": "قابل آزمائش وضاحت کیا ہے؟",
          "options": [
            "hypothesis",
            "table",
            "career"
          ],
          "answer": "hypothesis"
        },
        {
          "type": "select",
          "text": "منطقی متوقع نتیجہ کیا ہے؟",
          "options": [
            "deduction",
            "kingdom",
            "branch"
          ],
          "answer": "deduction"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: experiment hypothesis کو test کرتا ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Data کو tables اور ___ میں منظم کیا جا سکتا ہے۔",
          "answer": "graphs"
        },
        {
          "type": "select",
          "text": "controlled condition کون سی ہے؟",
          "options": [
            "تمام پودوں کے لیے ایک جیسی مٹی",
            "مختلف pots اور پانی",
            "record نہ رکھنا"
          ],
          "answer": "تمام پودوں کے لیے ایک جیسی مٹی"
        },
        {
          "type": "select",
          "text": "Theory کس سے supported ہوتی ہے؟",
          "options": [
            "evidence",
            "صرف guessing",
            "decoration"
          ],
          "answer": "evidence"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: hypothesis ایسا ہو جسے test نہ کیا جا سکے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "غلط"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Biological problem کو biological ___ سے حل کیا جاتا ہے۔",
          "answer": "method"
        },
        {
          "type": "select",
          "text": "Deduction کون سی ہے؟",
          "options": [
            "اگر روشنی growth میں مدد دے تو روشن پودے لمبے ہوں گے",
            "پودے سبز ہیں",
            "کاپی نیلی ہے"
          ],
          "answer": "اگر روشنی growth میں مدد دے تو روشن پودے لمبے ہوں گے"
        }
      ]
    },
    "biology-biodiversity": {
      "title": "Biology: Biodiversity",
      "titleUr": "حیاتیات: حیاتیاتی تنوع",
      "intro": "Study classification, taxonomy, five kingdom classification, binomial nomenclature, biodiversity conservation, and endangered species in Pakistan.",
      "introUr": "classification، taxonomy، five kingdom classification، binomial nomenclature، biodiversity conservation اور Pakistan کی endangered species سیکھیں۔",
      "focus": [
        "Biodiversity is variety of life",
        "Taxonomy names and classifies organisms",
        "Five kingdoms: Monera, Protista, Fungi, Plantae, Animalia",
        "Binomial nomenclature gives two-part scientific names",
        "Conservation protects biodiversity and endangered species"
      ],
      "focusUr": [
        "Biodiversity زندگی کی قسموں کی کثرت ہے",
        "Taxonomy جانداروں کو نام اور درجہ دیتی ہے",
        "Five kingdoms: Monera, Protista, Fungi, Plantae, Animalia",
        "Binomial nomenclature دو حصوں والا scientific name دیتی ہے",
        "Conservation biodiversity اور endangered species کو بچاتی ہے"
      ],
      "examples": [
        [
          "Binomial name",
          "Homo sapiens."
        ],
        [
          "Kingdom Plantae",
          "Multicellular photosynthetic organisms."
        ],
        [
          "Endangered species",
          "Indus dolphin."
        ],
        [
          "Taxon",
          "A group in classification."
        ]
      ],
      "examplesUr": [
        [
          "Binomial name",
          "Homo sapiens۔"
        ],
        [
          "Kingdom Plantae",
          "کثیر خلوی photosynthetic organisms۔"
        ],
        [
          "Endangered species",
          "Indus dolphin۔"
        ],
        [
          "Taxon",
          "classification میں ایک group۔"
        ]
      ],
      "quick": [
        "Scientific names use genus and species.",
        "Genus starts with capital letter; species is lowercase.",
        "Classification helps study organisms easily.",
        "Habitat protection supports biodiversity."
      ],
      "quickUr": [
        "Scientific names genus اور species استعمال کرتے ہیں۔",
        "Genus capital سے شروع، species lowercase ہوتی ہے۔",
        "Classification جانداروں کو آسانی سے پڑھنے میں مدد دیتی ہے۔",
        "Habitat protection biodiversity میں مدد دیتی ہے۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "Biodiversity means variety of...",
          "options": [
            "life",
            "machines",
            "roads"
          ],
          "answer": "life"
        },
        {
          "type": "select",
          "text": "Taxonomy deals with...",
          "options": [
            "naming and classification",
            "only weather",
            "only electricity"
          ],
          "answer": "naming and classification"
        },
        {
          "type": "select",
          "text": "Which is a kingdom?",
          "options": [
            "Fungi",
            "Mitosis",
            "Enzyme"
          ],
          "answer": "Fungi"
        },
        {
          "type": "radio",
          "text": "True or False: Binomial nomenclature uses two name parts.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: The scientific name of humans is Homo ___.",
          "answer": "sapiens"
        },
        {
          "type": "select",
          "text": "Which species is endangered in Pakistan?",
          "options": [
            "Indus dolphin",
            "House cat only",
            "Wheat plant only"
          ],
          "answer": "Indus dolphin"
        },
        {
          "type": "select",
          "text": "Which kingdom includes plants?",
          "options": [
            "Plantae",
            "Monera only",
            "Animalia only"
          ],
          "answer": "Plantae"
        },
        {
          "type": "radio",
          "text": "True or False: Conservation protects biodiversity.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: The first part of a binomial name is the ___.",
          "answer": "genus"
        },
        {
          "type": "select",
          "text": "Which is a conservation action?",
          "options": [
            "Protect habitats",
            "Destroy wetlands",
            "Overhunt animals"
          ],
          "answer": "Protect habitats"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "Biodiversity کا مطلب کس کی کثرت ہے؟",
          "options": [
            "زندگی",
            "مشینوں",
            "سڑکوں"
          ],
          "answer": "زندگی"
        },
        {
          "type": "select",
          "text": "Taxonomy کس سے متعلق ہے؟",
          "options": [
            "نام دینے اور classification",
            "صرف weather",
            "صرف electricity"
          ],
          "answer": "نام دینے اور classification"
        },
        {
          "type": "select",
          "text": "Kingdom کون سی ہے؟",
          "options": [
            "Fungi",
            "Mitosis",
            "Enzyme"
          ],
          "answer": "Fungi"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Binomial nomenclature دو حصوں والا نام استعمال کرتی ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: انسان کا scientific name Homo ___ ہے۔",
          "answer": "sapiens"
        },
        {
          "type": "select",
          "text": "Pakistan میں endangered species کون سی ہے؟",
          "options": [
            "Indus dolphin",
            "صرف house cat",
            "صرف wheat plant"
          ],
          "answer": "Indus dolphin"
        },
        {
          "type": "select",
          "text": "پودوں والی kingdom کون سی ہے؟",
          "options": [
            "Plantae",
            "صرف Monera",
            "صرف Animalia"
          ],
          "answer": "Plantae"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Conservation biodiversity کو بچاتی ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: binomial name کا پہلا حصہ ___ ہے۔",
          "answer": "genus"
        },
        {
          "type": "select",
          "text": "Conservation action کون سا ہے؟",
          "options": [
            "habitats کی حفاظت",
            "wetlands تباہ کرنا",
            "جانوروں کا زیادہ شکار"
          ],
          "answer": "habitats کی حفاظت"
        }
      ]
    },
    "biology-cells-and-tissues": {
      "title": "Biology: Cells and Tissues",
      "titleUr": "حیاتیات: خلیات اور بافتیں",
      "intro": "Learn cell theory, microscopy, plant and animal cells, organelles, prokaryotic and eukaryotic cells, and tissues in plants and animals.",
      "introUr": "cell theory، microscopy، plant اور animal cells، organelles، prokaryotic اور eukaryotic cells، اور پودوں و جانوروں کی tissues سیکھیں۔",
      "focus": [
        "Cell theory explains basic ideas about cells",
        "Microscopes magnify cells",
        "Plant and animal cells share some organelles but differ in cell wall and chloroplasts",
        "Prokaryotic cells lack a true nucleus",
        "Tissues are groups of similar cells performing a function"
      ],
      "focusUr": [
        "Cell theory cells کے بنیادی اصول بتاتی ہے",
        "Microscopes cells کو بڑا دکھاتے ہیں",
        "Plant اور animal cells میں کچھ organelles مشترک مگر cell wall/chloroplasts مختلف ہیں",
        "Prokaryotic cells میں true nucleus نہیں ہوتا",
        "Tissues ملتے جلتے cells کا functional group ہیں"
      ],
      "examples": [
        [
          "Nucleus",
          "Controls cell activities."
        ],
        [
          "Mitochondria",
          "Site of aerobic respiration."
        ],
        [
          "Chloroplast",
          "Site of photosynthesis."
        ],
        [
          "Xylem tissue",
          "Transports water in plants."
        ]
      ],
      "examplesUr": [
        [
          "Nucleus",
          "cell activities کو control کرتا ہے۔"
        ],
        [
          "Mitochondria",
          "aerobic respiration کی جگہ۔"
        ],
        [
          "Chloroplast",
          "photosynthesis کی جگہ۔"
        ],
        [
          "Xylem tissue",
          "plants میں water transport کرتا ہے۔"
        ]
      ],
      "quick": [
        "Animal cells do not have a cell wall.",
        "Plant cells usually have chloroplasts and a large vacuole.",
        "Eukaryotic cells have a true nucleus.",
        "Structure of tissue relates to function."
      ],
      "quickUr": [
        "Animal cells میں cell wall نہیں ہوتی۔",
        "Plant cells میں عموماً chloroplasts اور large vacuole ہوتے ہیں۔",
        "Eukaryotic cells میں true nucleus ہوتا ہے۔",
        "Tissue کی structure اس کے function سے جڑی ہے۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "The cell organelle that controls activities is the...",
          "options": [
            "nucleus",
            "cell wall",
            "vacuole only"
          ],
          "answer": "nucleus"
        },
        {
          "type": "select",
          "text": "Photosynthesis occurs in...",
          "options": [
            "chloroplasts",
            "mitochondria only",
            "ribosomes only"
          ],
          "answer": "chloroplasts"
        },
        {
          "type": "select",
          "text": "Aerobic respiration mainly occurs in...",
          "options": [
            "mitochondria",
            "cell wall",
            "chlorophyll only"
          ],
          "answer": "mitochondria"
        },
        {
          "type": "radio",
          "text": "True or False: Prokaryotic cells have a true nucleus.",
          "options": [
            "True",
            "False"
          ],
          "answer": "False"
        },
        {
          "type": "text",
          "text": "Complete: A group of similar cells is a ___.",
          "answer": "tissue"
        },
        {
          "type": "select",
          "text": "Which is present in plant cells but not animal cells?",
          "options": [
            "Cell wall",
            "Cell membrane",
            "Cytoplasm"
          ],
          "answer": "Cell wall"
        },
        {
          "type": "select",
          "text": "Which instrument magnifies cells?",
          "options": [
            "Microscope",
            "Barometer",
            "Voltmeter"
          ],
          "answer": "Microscope"
        },
        {
          "type": "radio",
          "text": "True or False: Eukaryotic cells have a true nucleus.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Xylem transports ___.",
          "answer": "water"
        },
        {
          "type": "select",
          "text": "Which is an animal tissue?",
          "options": [
            "Muscle tissue",
            "Xylem only",
            "Phloem only"
          ],
          "answer": "Muscle tissue"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "cell activities کو کون سا organelle control کرتا ہے؟",
          "options": [
            "nucleus",
            "cell wall",
            "صرف vacuole"
          ],
          "answer": "nucleus"
        },
        {
          "type": "select",
          "text": "Photosynthesis کہاں ہوتی ہے؟",
          "options": [
            "chloroplasts",
            "صرف mitochondria",
            "صرف ribosomes"
          ],
          "answer": "chloroplasts"
        },
        {
          "type": "select",
          "text": "Aerobic respiration زیادہ تر کہاں ہوتی ہے؟",
          "options": [
            "mitochondria",
            "cell wall",
            "صرف chlorophyll"
          ],
          "answer": "mitochondria"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Prokaryotic cells میں true nucleus ہوتا ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "غلط"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: ملتے جلتے cells کا group ___ ہے۔",
          "answer": "tissue"
        },
        {
          "type": "select",
          "text": "Plant cell میں موجود مگر animal cell میں غیر موجود کیا ہے؟",
          "options": [
            "Cell wall",
            "Cell membrane",
            "Cytoplasm"
          ],
          "answer": "Cell wall"
        },
        {
          "type": "select",
          "text": "cells کو بڑا دکھانے والا آلہ کون سا ہے؟",
          "options": [
            "Microscope",
            "Barometer",
            "Voltmeter"
          ],
          "answer": "Microscope"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Eukaryotic cells میں true nucleus ہوتا ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Xylem ___ transport کرتا ہے۔",
          "answer": "water"
        },
        {
          "type": "select",
          "text": "Animal tissue کون سی ہے؟",
          "options": [
            "Muscle tissue",
            "صرف Xylem",
            "صرف Phloem"
          ],
          "answer": "Muscle tissue"
        }
      ]
    },
    "biology-cell-cycle": {
      "title": "Biology: Cell Cycle",
      "titleUr": "حیاتیات: خلیاتی چکر",
      "intro": "Study chromosomes, mitosis, meiosis introduction, importance of cell division, and cancer introduction.",
      "introUr": "chromosomes، mitosis، meiosis کا تعارف، cell division کی اہمیت اور cancer کا تعارف سیکھیں۔",
      "focus": [
        "Cell cycle includes growth, DNA copying, and division",
        "Chromosomes carry genetic information",
        "Mitosis forms genetically identical body cells",
        "Meiosis forms gametes with half chromosome number",
        "Uncontrolled cell division can lead to cancer"
      ],
      "focusUr": [
        "Cell cycle میں growth، DNA copying اور division شامل ہیں",
        "Chromosomes genetic information رکھتے ہیں",
        "Mitosis identical body cells بناتی ہے",
        "Meiosis half chromosome number والے gametes بناتی ہے",
        "Uncontrolled cell division cancer کا سبب بن سکتی ہے"
      ],
      "examples": [
        [
          "Mitosis",
          "Growth and repair."
        ],
        [
          "Meiosis",
          "Formation of gametes."
        ],
        [
          "Chromosome",
          "DNA and protein structure."
        ],
        [
          "Cancer",
          "Uncontrolled cell division."
        ]
      ],
      "examplesUr": [
        [
          "Mitosis",
          "growth اور repair۔"
        ],
        [
          "Meiosis",
          "gametes کی formation۔"
        ],
        [
          "Chromosome",
          "DNA اور protein structure۔"
        ],
        [
          "Cancer",
          "uncontrolled cell division۔"
        ]
      ],
      "quick": [
        "Mitosis keeps chromosome number the same.",
        "Meiosis reduces chromosome number by half.",
        "Cell division supports growth, repair, and reproduction.",
        "Cancer starts when cell cycle control fails."
      ],
      "quickUr": [
        "Mitosis chromosome number same رکھتی ہے۔",
        "Meiosis chromosome number half کرتی ہے۔",
        "Cell division growth، repair اور reproduction میں مدد دیتی ہے۔",
        "Cancer تب شروع ہوتا ہے جب cell cycle control fail ہو۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "Chromosomes carry...",
          "options": [
            "genetic information",
            "oxygen only",
            "digestive juice"
          ],
          "answer": "genetic information"
        },
        {
          "type": "select",
          "text": "Mitosis produces...",
          "options": [
            "identical body cells",
            "only gametes",
            "only enzymes"
          ],
          "answer": "identical body cells"
        },
        {
          "type": "select",
          "text": "Meiosis produces...",
          "options": [
            "gametes",
            "xylem",
            "enzymes only"
          ],
          "answer": "gametes"
        },
        {
          "type": "radio",
          "text": "True or False: Mitosis helps growth and repair.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Uncontrolled cell division may lead to ___.",
          "answer": "cancer"
        },
        {
          "type": "select",
          "text": "Meiosis changes chromosome number to...",
          "options": [
            "half",
            "double always",
            "zero"
          ],
          "answer": "half"
        },
        {
          "type": "select",
          "text": "Which stage copies DNA before division?",
          "options": [
            "Interphase",
            "Cytokinesis only",
            "Anaphase only"
          ],
          "answer": "Interphase"
        },
        {
          "type": "radio",
          "text": "True or False: Cell division is important for wound healing.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Mitosis keeps chromosome number the ___.",
          "answer": "same"
        },
        {
          "type": "select",
          "text": "Which is linked to sexual reproduction?",
          "options": [
            "Meiosis",
            "Only mitosis",
            "Osmosis"
          ],
          "answer": "Meiosis"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "Chromosomes کیا رکھتے ہیں؟",
          "options": [
            "genetic information",
            "صرف oxygen",
            "digestive juice"
          ],
          "answer": "genetic information"
        },
        {
          "type": "select",
          "text": "Mitosis کیا بناتی ہے؟",
          "options": [
            "identical body cells",
            "صرف gametes",
            "صرف enzymes"
          ],
          "answer": "identical body cells"
        },
        {
          "type": "select",
          "text": "Meiosis کیا بناتی ہے؟",
          "options": [
            "gametes",
            "xylem",
            "صرف enzymes"
          ],
          "answer": "gametes"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Mitosis growth اور repair میں مدد دیتی ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: uncontrolled cell division ___ کا سبب بن سکتی ہے۔",
          "answer": "cancer"
        },
        {
          "type": "select",
          "text": "Meiosis chromosome number کو کیا کرتی ہے؟",
          "options": [
            "half",
            "ہمیشہ double",
            "zero"
          ],
          "answer": "half"
        },
        {
          "type": "select",
          "text": "division سے پہلے DNA کس stage میں copy ہوتا ہے؟",
          "options": [
            "Interphase",
            "صرف Cytokinesis",
            "صرف Anaphase"
          ],
          "answer": "Interphase"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Cell division زخم بھرنے کے لیے اہم ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Mitosis chromosome number ___ رکھتی ہے۔",
          "answer": "same"
        },
        {
          "type": "select",
          "text": "sexual reproduction سے کیا متعلق ہے؟",
          "options": [
            "Meiosis",
            "صرف mitosis",
            "Osmosis"
          ],
          "answer": "Meiosis"
        }
      ]
    },
    "biology-enzymes": {
      "title": "Biology: Enzymes",
      "titleUr": "حیاتیات: خامرے",
      "intro": "Learn enzyme structure and function, lock and key model, factors affecting enzymes, and uses of enzymes.",
      "introUr": "enzyme کی ساخت اور function، lock and key model، enzymes پر اثر انداز عوامل اور uses سیکھیں۔",
      "focus": [
        "Enzymes are biological catalysts",
        "Active site binds a specific substrate",
        "Lock and key model explains specificity",
        "Temperature and pH affect enzyme activity",
        "Enzymes are used in digestion, industry, detergents, and food processing"
      ],
      "focusUr": [
        "Enzymes biological catalysts ہیں",
        "Active site مخصوص substrate سے bind کرتا ہے",
        "Lock and key model specificity سمجھاتا ہے",
        "Temperature اور pH enzyme activity کو متاثر کرتے ہیں",
        "Enzymes digestion، industry، detergents اور food processing میں استعمال ہوتے ہیں"
      ],
      "examples": [
        [
          "Amylase",
          "Breaks starch into sugars."
        ],
        [
          "Protease",
          "Breaks proteins."
        ],
        [
          "Optimum pH",
          "Best pH for enzyme activity."
        ],
        [
          "Denaturation",
          "Active site shape changes."
        ]
      ],
      "examplesUr": [
        [
          "Amylase",
          "starch کو sugars میں توڑتا ہے۔"
        ],
        [
          "Protease",
          "proteins توڑتا ہے۔"
        ],
        [
          "Optimum pH",
          "enzyme activity کے لیے best pH۔"
        ],
        [
          "Denaturation",
          "active site کی shape بدل جاتی ہے۔"
        ]
      ],
      "quick": [
        "Enzymes speed reactions without being used up.",
        "High temperature can denature enzymes.",
        "Each enzyme works best at an optimum pH and temperature.",
        "Substrate fits the active site."
      ],
      "quickUr": [
        "Enzymes reactions تیز کرتے ہیں مگر خود ختم نہیں ہوتے۔",
        "High temperature enzymes کو denature کر سکتا ہے۔",
        "ہر enzyme optimum pH اور temperature پر best کام کرتا ہے۔",
        "Substrate active site میں fit ہوتا ہے۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "Enzymes are biological...",
          "options": [
            "catalysts",
            "fuels",
            "cells only"
          ],
          "answer": "catalysts"
        },
        {
          "type": "select",
          "text": "The substrate binds to the...",
          "options": [
            "active site",
            "cell wall",
            "xylem"
          ],
          "answer": "active site"
        },
        {
          "type": "select",
          "text": "High temperature can cause...",
          "options": [
            "denaturation",
            "classification",
            "pollination"
          ],
          "answer": "denaturation"
        },
        {
          "type": "radio",
          "text": "True or False: Enzymes are specific for substrates.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: The lock and key model explains enzyme ___.",
          "answer": "specificity"
        },
        {
          "type": "select",
          "text": "Which enzyme digests starch?",
          "options": [
            "Amylase",
            "Lipase only",
            "Pepsin only"
          ],
          "answer": "Amylase"
        },
        {
          "type": "select",
          "text": "Which factor affects enzymes?",
          "options": [
            "pH",
            "Kingdom name",
            "Binomial spelling only"
          ],
          "answer": "pH"
        },
        {
          "type": "radio",
          "text": "True or False: Enzymes are used up completely in reactions.",
          "options": [
            "True",
            "False"
          ],
          "answer": "False"
        },
        {
          "type": "text",
          "text": "Complete: The best temperature is called optimum ___.",
          "answer": "temperature"
        },
        {
          "type": "select",
          "text": "Which is an enzyme use?",
          "options": [
            "Detergents",
            "Making rocks",
            "Writing laws only"
          ],
          "answer": "Detergents"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "Enzymes biological کیا ہیں؟",
          "options": [
            "catalysts",
            "fuels",
            "صرف cells"
          ],
          "answer": "catalysts"
        },
        {
          "type": "select",
          "text": "Substrate کس سے bind کرتا ہے؟",
          "options": [
            "active site",
            "cell wall",
            "xylem"
          ],
          "answer": "active site"
        },
        {
          "type": "select",
          "text": "High temperature کیا کر سکتا ہے؟",
          "options": [
            "denaturation",
            "classification",
            "pollination"
          ],
          "answer": "denaturation"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Enzymes substrates کے لیے specific ہوتے ہیں۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: lock and key model enzyme ___ سمجھاتا ہے۔",
          "answer": "specificity"
        },
        {
          "type": "select",
          "text": "Starch کو کون سا enzyme digest کرتا ہے؟",
          "options": [
            "Amylase",
            "صرف Lipase",
            "صرف Pepsin"
          ],
          "answer": "Amylase"
        },
        {
          "type": "select",
          "text": "Enzymes پر کون سا factor اثر کرتا ہے؟",
          "options": [
            "pH",
            "Kingdom name",
            "صرف binomial spelling"
          ],
          "answer": "pH"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Enzymes reactions میں مکمل ختم ہو جاتے ہیں۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "غلط"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: best temperature کو optimum ___ کہتے ہیں۔",
          "answer": "temperature"
        },
        {
          "type": "select",
          "text": "Enzyme کا use کون سا ہے؟",
          "options": [
            "Detergents",
            "چٹانیں بنانا",
            "صرف laws لکھنا"
          ],
          "answer": "Detergents"
        }
      ]
    },
    "biology-bioenergetics": {
      "title": "Biology: Bioenergetics",
      "titleUr": "حیاتیات: حیاتی توانائی",
      "intro": "Study photosynthesis, respiration, ATP, aerobic and anaerobic respiration, chlorophyll, and factors affecting photosynthesis.",
      "introUr": "photosynthesis، respiration، ATP، aerobic اور anaerobic respiration، chlorophyll اور photosynthesis پر اثر انداز عوامل سیکھیں۔",
      "focus": [
        "Photosynthesis converts light energy into chemical energy",
        "Chlorophyll absorbs light",
        "Respiration releases energy from glucose",
        "ATP is an energy carrier in cells",
        "Light, carbon dioxide, temperature, and chlorophyll affect photosynthesis"
      ],
      "focusUr": [
        "Photosynthesis light energy کو chemical energy میں بدلتی ہے",
        "Chlorophyll روشنی absorb کرتا ہے",
        "Respiration glucose سے energy release کرتی ہے",
        "ATP cells میں energy carrier ہے",
        "light، carbon dioxide، temperature اور chlorophyll photosynthesis کو متاثر کرتے ہیں"
      ],
      "examples": [
        [
          "Photosynthesis",
          "carbon dioxide + water -> glucose + oxygen."
        ],
        [
          "Aerobic respiration",
          "glucose + oxygen -> carbon dioxide + water + energy."
        ],
        [
          "Anaerobic respiration",
          "Energy release without oxygen."
        ],
        [
          "ATP",
          "Cell energy currency."
        ]
      ],
      "examplesUr": [
        [
          "Photosynthesis",
          "carbon dioxide + water -> glucose + oxygen۔"
        ],
        [
          "Aerobic respiration",
          "glucose + oxygen -> carbon dioxide + water + energy۔"
        ],
        [
          "Anaerobic respiration",
          "oxygen کے بغیر energy release۔"
        ],
        [
          "ATP",
          "cell energy currency۔"
        ]
      ],
      "quick": [
        "Photosynthesis stores energy; respiration releases energy.",
        "Plants respire all the time.",
        "Photosynthesis needs light and chlorophyll.",
        "Anaerobic respiration releases less energy than aerobic respiration."
      ],
      "quickUr": [
        "Photosynthesis energy store کرتی ہے؛ respiration energy release کرتی ہے۔",
        "Plants ہر وقت respire کرتے ہیں۔",
        "Photosynthesis کو light اور chlorophyll چاہیے۔",
        "Anaerobic respiration aerobic سے کم energy دیتی ہے۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "Photosynthesis occurs in...",
          "options": [
            "chloroplasts",
            "mitochondria only",
            "nucleus only"
          ],
          "answer": "chloroplasts"
        },
        {
          "type": "select",
          "text": "Chlorophyll absorbs...",
          "options": [
            "light",
            "sound",
            "blood"
          ],
          "answer": "light"
        },
        {
          "type": "select",
          "text": "Aerobic respiration needs glucose and...",
          "options": [
            "oxygen",
            "nitrogen only",
            "chlorophyll"
          ],
          "answer": "oxygen"
        },
        {
          "type": "radio",
          "text": "True or False: ATP carries usable energy in cells.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Photosynthesis produces glucose and ___.",
          "answer": "oxygen"
        },
        {
          "type": "select",
          "text": "Respiration releases...",
          "options": [
            "energy",
            "binomial names",
            "kingdoms"
          ],
          "answer": "energy"
        },
        {
          "type": "select",
          "text": "Which affects photosynthesis?",
          "options": [
            "Light intensity",
            "Shoe size",
            "Heart valves"
          ],
          "answer": "Light intensity"
        },
        {
          "type": "radio",
          "text": "True or False: Plants respire only at night.",
          "options": [
            "True",
            "False"
          ],
          "answer": "False"
        },
        {
          "type": "text",
          "text": "Complete: Anaerobic respiration happens without ___.",
          "answer": "oxygen"
        },
        {
          "type": "select",
          "text": "Which process stores light energy in glucose?",
          "options": [
            "Photosynthesis",
            "Mitosis",
            "Digestion only"
          ],
          "answer": "Photosynthesis"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "Photosynthesis کہاں ہوتی ہے؟",
          "options": [
            "chloroplasts",
            "صرف mitochondria",
            "صرف nucleus"
          ],
          "answer": "chloroplasts"
        },
        {
          "type": "select",
          "text": "Chlorophyll کیا absorb کرتا ہے؟",
          "options": [
            "light",
            "sound",
            "blood"
          ],
          "answer": "light"
        },
        {
          "type": "select",
          "text": "Aerobic respiration کو glucose اور کیا چاہیے؟",
          "options": [
            "oxygen",
            "صرف nitrogen",
            "chlorophyll"
          ],
          "answer": "oxygen"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: ATP cells میں usable energy carry کرتا ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Photosynthesis glucose اور ___ بناتی ہے۔",
          "answer": "oxygen"
        },
        {
          "type": "select",
          "text": "Respiration کیا release کرتی ہے؟",
          "options": [
            "energy",
            "binomial names",
            "kingdoms"
          ],
          "answer": "energy"
        },
        {
          "type": "select",
          "text": "Photosynthesis پر کیا اثر کرتا ہے؟",
          "options": [
            "Light intensity",
            "shoe size",
            "heart valves"
          ],
          "answer": "Light intensity"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Plants صرف رات کو respire کرتے ہیں۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "غلط"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Anaerobic respiration ___ کے بغیر ہوتی ہے۔",
          "answer": "oxygen"
        },
        {
          "type": "select",
          "text": "کون سا process light energy کو glucose میں store کرتا ہے؟",
          "options": [
            "Photosynthesis",
            "Mitosis",
            "صرف Digestion"
          ],
          "answer": "Photosynthesis"
        }
      ]
    },
    "biology-nutrition": {
      "title": "Biology: Nutrition",
      "titleUr": "حیاتیات: غذائیت",
      "intro": "Learn autotrophic and heterotrophic nutrition, human digestive system, digestive enzymes, balanced diet, malnutrition, and nutrition disorders.",
      "introUr": "autotrophic اور heterotrophic nutrition، human digestive system، digestive enzymes، balanced diet، malnutrition اور nutrition disorders سیکھیں۔",
      "focus": [
        "Autotrophs make their own food",
        "Heterotrophs obtain food from other organisms",
        "Human digestion breaks food into absorbable molecules",
        "Digestive enzymes act on carbohydrates, proteins, and fats",
        "Balanced diet prevents deficiency and malnutrition disorders"
      ],
      "focusUr": [
        "Autotrophs اپنی خوراک خود بناتے ہیں",
        "Heterotrophs دوسرے organisms سے خوراک لیتے ہیں",
        "Human digestion خوراک کو absorbable molecules میں توڑتا ہے",
        "Digestive enzymes carbohydrates، proteins اور fats پر عمل کرتے ہیں",
        "Balanced diet deficiency اور malnutrition disorders سے بچاتی ہے"
      ],
      "examples": [
        [
          "Autotroph",
          "Green plant."
        ],
        [
          "Amylase",
          "Digests starch."
        ],
        [
          "Protease",
          "Digests protein."
        ],
        [
          "Balanced diet",
          "Proper amounts of nutrients, fiber, and water."
        ]
      ],
      "examplesUr": [
        [
          "Autotroph",
          "سبز پودا۔"
        ],
        [
          "Amylase",
          "starch digest کرتا ہے۔"
        ],
        [
          "Protease",
          "protein digest کرتا ہے۔"
        ],
        [
          "Balanced diet",
          "nutrients، fiber اور water کی مناسب مقدار۔"
        ]
      ],
      "quick": [
        "Digestion starts in the mouth.",
        "Small intestine absorbs digested food.",
        "Bile helps emulsify fats.",
        "Deficiency diseases result from lack of specific nutrients."
      ],
      "quickUr": [
        "Digestion منہ سے شروع ہوتی ہے۔",
        "Small intestine digested food absorb کرتی ہے۔",
        "Bile fats کو emulsify کرنے میں مدد دیتی ہے۔",
        "Deficiency diseases specific nutrients کی کمی سے ہوتی ہیں۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "Autotrophs...",
          "options": [
            "make their own food",
            "only eat meat",
            "cannot use light"
          ],
          "answer": "make their own food"
        },
        {
          "type": "select",
          "text": "Humans are...",
          "options": [
            "heterotrophs",
            "autotrophs",
            "decomposers only"
          ],
          "answer": "heterotrophs"
        },
        {
          "type": "select",
          "text": "Digestion starts in the...",
          "options": [
            "mouth",
            "large intestine",
            "heart"
          ],
          "answer": "mouth"
        },
        {
          "type": "radio",
          "text": "True or False: Small intestine absorbs digested food.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Lack of nutrients can cause ___.",
          "answer": "malnutrition"
        },
        {
          "type": "select",
          "text": "Which enzyme digests starch?",
          "options": [
            "Amylase",
            "Lipase only",
            "Protease only"
          ],
          "answer": "Amylase"
        },
        {
          "type": "select",
          "text": "Bile helps digest fats by...",
          "options": [
            "emulsification",
            "mitosis",
            "classification"
          ],
          "answer": "emulsification"
        },
        {
          "type": "radio",
          "text": "True or False: A balanced diet includes nutrients in proper amounts.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Vitamin C deficiency causes ___.",
          "answer": "scurvy"
        },
        {
          "type": "select",
          "text": "Which organ stores bile?",
          "options": [
            "Gall bladder",
            "Lung",
            "Heart"
          ],
          "answer": "Gall bladder"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "Autotrophs کیا کرتے ہیں؟",
          "options": [
            "اپنی خوراک خود بناتے ہیں",
            "صرف گوشت کھاتے ہیں",
            "light استعمال نہیں کر سکتے"
          ],
          "answer": "اپنی خوراک خود بناتے ہیں"
        },
        {
          "type": "select",
          "text": "انسان کیا ہیں؟",
          "options": [
            "heterotrophs",
            "autotrophs",
            "صرف decomposers"
          ],
          "answer": "heterotrophs"
        },
        {
          "type": "select",
          "text": "Digestion کہاں شروع ہوتی ہے؟",
          "options": [
            "mouth",
            "large intestine",
            "heart"
          ],
          "answer": "mouth"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Small intestine digested food absorb کرتی ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: nutrients کی کمی ___ کا سبب بن سکتی ہے۔",
          "answer": "malnutrition"
        },
        {
          "type": "select",
          "text": "Starch کو کون سا enzyme digest کرتا ہے؟",
          "options": [
            "Amylase",
            "صرف Lipase",
            "صرف Protease"
          ],
          "answer": "Amylase"
        },
        {
          "type": "select",
          "text": "Bile fats کو کس عمل سے digest کرنے میں مدد دیتی ہے؟",
          "options": [
            "emulsification",
            "mitosis",
            "classification"
          ],
          "answer": "emulsification"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: balanced diet میں nutrients proper amounts میں ہوتے ہیں۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Vitamin C deficiency سے ___ ہوتا ہے۔",
          "answer": "scurvy"
        },
        {
          "type": "select",
          "text": "Bile کون سا organ store کرتا ہے؟",
          "options": [
            "Gall bladder",
            "Lung",
            "Heart"
          ],
          "answer": "Gall bladder"
        }
      ]
    },
    "biology-transport": {
      "title": "Biology: Transport",
      "titleUr": "حیاتیات: نقل و حمل",
      "intro": "Study transport in plants, xylem, phloem, transpiration, human circulatory system, blood components, heart, and blood vessels.",
      "introUr": "plants میں transport، xylem، phloem، transpiration، human circulatory system، blood components، heart اور blood vessels سیکھیں۔",
      "focus": [
        "Xylem transports water and minerals upward",
        "Phloem transports prepared food",
        "Transpiration is water loss from aerial parts of plants",
        "Blood transports oxygen, nutrients, wastes, and hormones",
        "Heart and blood vessels maintain circulation"
      ],
      "focusUr": [
        "Xylem water اور minerals اوپر لے جاتا ہے",
        "Phloem prepared food transport کرتا ہے",
        "Transpiration plants کے aerial parts سے water loss ہے",
        "Blood oxygen، nutrients، wastes اور hormones transport کرتا ہے",
        "Heart اور blood vessels circulation برقرار رکھتے ہیں"
      ],
      "examples": [
        [
          "Xylem",
          "Water transport."
        ],
        [
          "Phloem",
          "Food transport."
        ],
        [
          "Red blood cells",
          "Carry oxygen."
        ],
        [
          "Artery",
          "Carries blood away from heart."
        ]
      ],
      "examplesUr": [
        [
          "Xylem",
          "water transport۔"
        ],
        [
          "Phloem",
          "food transport۔"
        ],
        [
          "Red blood cells",
          "oxygen carry کرتے ہیں۔"
        ],
        [
          "Artery",
          "blood کو heart سے دور لے جاتی ہے۔"
        ]
      ],
      "quick": [
        "Transpiration pull helps water rise in xylem.",
        "Plasma is liquid part of blood.",
        "Platelets help clotting.",
        "Veins carry blood toward the heart."
      ],
      "quickUr": [
        "Transpiration pull xylem میں water اوپر لانے میں مدد دیتا ہے۔",
        "Plasma blood کا liquid part ہے۔",
        "Platelets clotting میں مدد دیتے ہیں۔",
        "Veins blood کو heart کی طرف لے جاتی ہیں۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "Xylem transports...",
          "options": [
            "water and minerals",
            "prepared food only",
            "blood"
          ],
          "answer": "water and minerals"
        },
        {
          "type": "select",
          "text": "Phloem transports...",
          "options": [
            "prepared food",
            "oxygen only",
            "urine"
          ],
          "answer": "prepared food"
        },
        {
          "type": "select",
          "text": "Water loss from leaves is...",
          "options": [
            "transpiration",
            "digestion",
            "mitosis"
          ],
          "answer": "transpiration"
        },
        {
          "type": "radio",
          "text": "True or False: Red blood cells carry oxygen.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: The heart pumps ___.",
          "answer": "blood"
        },
        {
          "type": "select",
          "text": "Platelets help in...",
          "options": [
            "blood clotting",
            "photosynthesis",
            "transpiration"
          ],
          "answer": "blood clotting"
        },
        {
          "type": "select",
          "text": "Arteries usually carry blood...",
          "options": [
            "away from heart",
            "toward heart only",
            "inside xylem"
          ],
          "answer": "away from heart"
        },
        {
          "type": "radio",
          "text": "True or False: Plasma is the liquid part of blood.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Veins carry blood toward the ___.",
          "answer": "heart"
        },
        {
          "type": "select",
          "text": "Which chamber receives blood from body?",
          "options": [
            "Right atrium",
            "Left ventricle only",
            "Aorta"
          ],
          "answer": "Right atrium"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "Xylem کیا transport کرتا ہے؟",
          "options": [
            "water and minerals",
            "صرف prepared food",
            "blood"
          ],
          "answer": "water and minerals"
        },
        {
          "type": "select",
          "text": "Phloem کیا transport کرتا ہے؟",
          "options": [
            "prepared food",
            "صرف oxygen",
            "urine"
          ],
          "answer": "prepared food"
        },
        {
          "type": "select",
          "text": "Leaves سے water loss کیا ہے؟",
          "options": [
            "transpiration",
            "digestion",
            "mitosis"
          ],
          "answer": "transpiration"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Red blood cells oxygen carry کرتے ہیں۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Heart ___ pump کرتا ہے۔",
          "answer": "blood"
        },
        {
          "type": "select",
          "text": "Platelets کس میں مدد دیتے ہیں؟",
          "options": [
            "blood clotting",
            "photosynthesis",
            "transpiration"
          ],
          "answer": "blood clotting"
        },
        {
          "type": "select",
          "text": "Arteries عموماً blood کہاں لے جاتی ہیں؟",
          "options": [
            "heart سے دور",
            "صرف heart کی طرف",
            "xylem کے اندر"
          ],
          "answer": "heart سے دور"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Plasma blood کا liquid part ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Veins blood کو ___ کی طرف لے جاتی ہیں۔",
          "answer": "heart"
        },
        {
          "type": "select",
          "text": "Body سے blood کون سا chamber receive کرتا ہے؟",
          "options": [
            "Right atrium",
            "صرف Left ventricle",
            "Aorta"
          ],
          "answer": "Right atrium"
        }
      ]
    },
    "chemistry-fundamentals-of-chemistry": {
      "title": "Chemistry: Fundamentals of Chemistry",
      "titleUr": "کیمیا: کیمیا کے بنیادی اصول",
      "intro": "Study chemistry and its branches, matter, elements, compounds, mixtures, atomic and molecular mass, mole introduction, and chemical formulae.",
      "introUr": "کیمیا اور اس کی شاخیں، مادہ، elements، compounds، mixtures، atomic اور molecular mass، mole کا تعارف اور chemical formulae سیکھیں۔",
      "focus": [
        "Chemistry studies composition, properties, and changes of matter",
        "Matter is anything with mass and volume",
        "Elements, compounds, and mixtures differ in composition",
        "Atomic and molecular mass are relative masses",
        "Mole connects particles with measurable mass"
      ],
      "focusUr": [
        "کیمیا مادے کی composition، properties اور changes پڑھتی ہے",
        "مادہ وہ ہے جس کی mass اور volume ہو",
        "elements، compounds اور mixtures composition میں مختلف ہیں",
        "atomic اور molecular mass relative masses ہیں",
        "mole particles کو measurable mass سے جوڑتا ہے"
      ],
      "examples": [
        [
          "Element",
          "Oxygen, iron, carbon."
        ],
        [
          "Compound",
          "Water, sodium chloride."
        ],
        [
          "Mixture",
          "Air, salt water."
        ],
        [
          "Molecular mass",
          "Sum of atomic masses in a formula."
        ]
      ],
      "examplesUr": [
        [
          "Element",
          "oxygen، iron، carbon۔"
        ],
        [
          "Compound",
          "water، sodium chloride۔"
        ],
        [
          "Mixture",
          "air، salt water۔"
        ],
        [
          "Molecular mass",
          "formula میں atomic masses کا مجموعہ۔"
        ]
      ],
      "quick": [
        "Pure substances have fixed composition.",
        "Mixtures can often be separated physically.",
        "Use formula subscripts when finding molecular mass.",
        "One mole contains Avogadro number of particles."
      ],
      "quickUr": [
        "Pure substances کی composition fixed ہوتی ہے۔",
        "Mixtures عموماً physical methods سے separate ہو سکتے ہیں۔",
        "Molecular mass نکالتے وقت formula subscripts استعمال کریں۔",
        "ایک mole میں Avogadro number particles ہوتے ہیں۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "Chemistry is the study of...",
          "options": [
            "matter and its changes",
            "only living things",
            "only planets"
          ],
          "answer": "matter and its changes"
        },
        {
          "type": "select",
          "text": "Anything that has mass and occupies space is...",
          "options": [
            "matter",
            "energy only",
            "light only"
          ],
          "answer": "matter"
        },
        {
          "type": "select",
          "text": "Which is an element?",
          "options": [
            "Oxygen",
            "Water",
            "Air"
          ],
          "answer": "Oxygen"
        },
        {
          "type": "radio",
          "text": "True or False: A compound has elements chemically combined.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Water has the formula ___.",
          "answer": "H2O"
        },
        {
          "type": "select",
          "text": "Which is a mixture?",
          "options": [
            "Air",
            "Copper",
            "Pure oxygen"
          ],
          "answer": "Air"
        },
        {
          "type": "select",
          "text": "Molecular mass is found by adding...",
          "options": [
            "atomic masses",
            "boiling points",
            "colors"
          ],
          "answer": "atomic masses"
        },
        {
          "type": "radio",
          "text": "True or False: Mixtures always have fixed composition.",
          "options": [
            "True",
            "False"
          ],
          "answer": "False"
        },
        {
          "type": "text",
          "text": "Complete: One mole contains Avogadro number of ___.",
          "answer": "particles"
        },
        {
          "type": "select",
          "text": "Which branch studies carbon compounds?",
          "options": [
            "Organic chemistry",
            "Nuclear physics",
            "Ecology"
          ],
          "answer": "Organic chemistry"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "کیمیا کس کا مطالعہ ہے؟",
          "options": [
            "matter اور اس کی changes",
            "صرف living things",
            "صرف planets"
          ],
          "answer": "matter اور اس کی changes"
        },
        {
          "type": "select",
          "text": "جس چیز کی mass ہو اور space گھیرے وہ کیا ہے؟",
          "options": [
            "matter",
            "صرف energy",
            "صرف light"
          ],
          "answer": "matter"
        },
        {
          "type": "select",
          "text": "Element کون سا ہے؟",
          "options": [
            "Oxygen",
            "Water",
            "Air"
          ],
          "answer": "Oxygen"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Compound میں elements chemically combined ہوتے ہیں۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Water کا formula ___ ہے۔",
          "answer": "H2O"
        },
        {
          "type": "select",
          "text": "Mixture کون سا ہے؟",
          "options": [
            "Air",
            "Copper",
            "Pure oxygen"
          ],
          "answer": "Air"
        },
        {
          "type": "select",
          "text": "Molecular mass کس کو add کر کے ملتا ہے؟",
          "options": [
            "atomic masses",
            "boiling points",
            "colors"
          ],
          "answer": "atomic masses"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Mixtures کی composition ہمیشہ fixed ہوتی ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "غلط"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: ایک mole میں Avogadro number of ___ ہوتے ہیں۔",
          "answer": "particles"
        },
        {
          "type": "select",
          "text": "Carbon compounds کون سی branch پڑھتی ہے؟",
          "options": [
            "Organic chemistry",
            "Nuclear physics",
            "Ecology"
          ],
          "answer": "Organic chemistry"
        }
      ]
    },
    "chemistry-structure-of-atoms": {
      "title": "Chemistry: Structure of Atoms",
      "titleUr": "کیمیا: ایٹم کی ساخت",
      "intro": "Learn subatomic particles, atomic number, mass number, isotopes, electronic configuration, shells, and subshells introduction.",
      "introUr": "subatomic particles، atomic number، mass number، isotopes، electronic configuration، shells اور subshells کا تعارف سیکھیں۔",
      "focus": [
        "Atoms contain protons, neutrons, and electrons",
        "Atomic number equals number of protons",
        "Mass number equals protons plus neutrons",
        "Isotopes have same atomic number but different mass numbers",
        "Electronic configuration shows electron arrangement"
      ],
      "focusUr": [
        "Atoms میں protons، neutrons اور electrons ہوتے ہیں",
        "Atomic number protons کی تعداد ہے",
        "Mass number protons plus neutrons ہے",
        "Isotopes کا atomic number same مگر mass number different ہوتا ہے",
        "Electronic configuration electron arrangement دکھاتی ہے"
      ],
      "examples": [
        [
          "Proton",
          "Positive particle in nucleus."
        ],
        [
          "Electron",
          "Negative particle outside nucleus."
        ],
        [
          "Neutron",
          "Neutral particle in nucleus."
        ],
        [
          "Isotopes",
          "Carbon-12 and carbon-14."
        ]
      ],
      "examplesUr": [
        [
          "Proton",
          "nucleus میں positive particle۔"
        ],
        [
          "Electron",
          "nucleus کے باہر negative particle۔"
        ],
        [
          "Neutron",
          "nucleus میں neutral particle۔"
        ],
        [
          "Isotopes",
          "carbon-12 اور carbon-14۔"
        ]
      ],
      "quick": [
        "Protons identify the element.",
        "Neutrons = mass number - atomic number.",
        "Neutral atom has protons equal electrons.",
        "Shells fill in order for basic configurations."
      ],
      "quickUr": [
        "Protons element کی شناخت کرتے ہیں۔",
        "Neutrons = mass number - atomic number۔",
        "Neutral atom میں protons electrons کے برابر ہوتے ہیں۔",
        "Basic configurations میں shells ترتیب سے fill ہوتے ہیں۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "Atomic number equals number of...",
          "options": [
            "protons",
            "neutrons only",
            "shells"
          ],
          "answer": "protons"
        },
        {
          "type": "select",
          "text": "Mass number equals...",
          "options": [
            "protons + neutrons",
            "electrons only",
            "protons - neutrons"
          ],
          "answer": "protons + neutrons"
        },
        {
          "type": "select",
          "text": "Which particle is negative?",
          "options": [
            "Electron",
            "Proton",
            "Neutron"
          ],
          "answer": "Electron"
        },
        {
          "type": "radio",
          "text": "True or False: Isotopes have same atomic number.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Neutrons = mass number - ___ number.",
          "answer": "atomic"
        },
        {
          "type": "select",
          "text": "Which particle is positive?",
          "options": [
            "Proton",
            "Electron",
            "Neutron"
          ],
          "answer": "Proton"
        },
        {
          "type": "select",
          "text": "A neutral atom has equal protons and...",
          "options": [
            "electrons",
            "neutrons",
            "isotopes"
          ],
          "answer": "electrons"
        },
        {
          "type": "radio",
          "text": "True or False: Electrons are found outside the nucleus.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Carbon-12 and carbon-14 are ___.",
          "answer": "isotopes"
        },
        {
          "type": "select",
          "text": "Electronic configuration shows arrangement of...",
          "options": [
            "electrons",
            "protons only",
            "nuclei only"
          ],
          "answer": "electrons"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "Atomic number کس کے برابر ہے؟",
          "options": [
            "protons",
            "صرف neutrons",
            "shells"
          ],
          "answer": "protons"
        },
        {
          "type": "select",
          "text": "Mass number کس کے برابر ہے؟",
          "options": [
            "protons + neutrons",
            "صرف electrons",
            "protons - neutrons"
          ],
          "answer": "protons + neutrons"
        },
        {
          "type": "select",
          "text": "Negative particle کون سا ہے؟",
          "options": [
            "Electron",
            "Proton",
            "Neutron"
          ],
          "answer": "Electron"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Isotopes کا atomic number same ہوتا ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Neutrons = mass number - ___ number.",
          "answer": "atomic"
        },
        {
          "type": "select",
          "text": "Positive particle کون سا ہے؟",
          "options": [
            "Proton",
            "Electron",
            "Neutron"
          ],
          "answer": "Proton"
        },
        {
          "type": "select",
          "text": "Neutral atom میں protons کس کے برابر ہوتے ہیں؟",
          "options": [
            "electrons",
            "neutrons",
            "isotopes"
          ],
          "answer": "electrons"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Electrons nucleus کے باہر ہوتے ہیں۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Carbon-12 اور carbon-14 ___ ہیں۔",
          "answer": "isotopes"
        },
        {
          "type": "select",
          "text": "Electronic configuration کس کی arrangement دکھاتی ہے؟",
          "options": [
            "electrons",
            "صرف protons",
            "صرف nuclei"
          ],
          "answer": "electrons"
        }
      ]
    },
    "chemistry-periodic-table-and-periodicity": {
      "title": "Chemistry: Periodic Table and Periodicity",
      "titleUr": "کیمیا: دوری جدول اور دوریت",
      "intro": "Study periodic table history, groups and periods, metals, non-metals, metalloids, periodic trends introduction, and valency.",
      "introUr": "periodic table کی history، groups اور periods، metals، non-metals، metalloids، periodic trends اور valency سیکھیں۔",
      "focus": [
        "Periodic table arranges elements by atomic number",
        "Groups are vertical columns and periods are horizontal rows",
        "Metals, non-metals, and metalloids have different properties",
        "Periodic trends repeat across the table",
        "Valency shows combining capacity"
      ],
      "focusUr": [
        "Periodic table elements کو atomic number کے حساب سے arrange کرتی ہے",
        "Groups vertical columns اور periods horizontal rows ہیں",
        "Metals، non-metals اور metalloids کی properties مختلف ہیں",
        "Periodic trends table میں repeat ہوتے ہیں",
        "Valency combining capacity دکھاتی ہے"
      ],
      "examples": [
        [
          "Group",
          "Vertical column."
        ],
        [
          "Period",
          "Horizontal row."
        ],
        [
          "Metalloid",
          "Silicon."
        ],
        [
          "Valency",
          "Sodium commonly has valency 1."
        ]
      ],
      "examplesUr": [
        [
          "Group",
          "vertical column۔"
        ],
        [
          "Period",
          "horizontal row۔"
        ],
        [
          "Metalloid",
          "silicon۔"
        ],
        [
          "Valency",
          "sodium کی valency عموماً 1۔"
        ]
      ],
      "quick": [
        "Elements in same group have similar valence electrons.",
        "Metals are usually shiny and conductive.",
        "Non-metals are often poor conductors.",
        "Valency helps write chemical formulae."
      ],
      "quickUr": [
        "Same group کے elements میں valence electrons ملتے جلتے ہوتے ہیں۔",
        "Metals عموماً shiny اور conductive ہوتے ہیں۔",
        "Non-metals عموماً poor conductors ہوتے ہیں۔",
        "Valency chemical formulae لکھنے میں مدد دیتی ہے۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "Modern periodic table is arranged by...",
          "options": [
            "atomic number",
            "alphabet only",
            "color only"
          ],
          "answer": "atomic number"
        },
        {
          "type": "select",
          "text": "Vertical columns are...",
          "options": [
            "groups",
            "periods",
            "isotopes"
          ],
          "answer": "groups"
        },
        {
          "type": "select",
          "text": "Horizontal rows are...",
          "options": [
            "periods",
            "groups",
            "bonds"
          ],
          "answer": "periods"
        },
        {
          "type": "radio",
          "text": "True or False: Silicon is a metalloid.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Valency means combining ___.",
          "answer": "capacity"
        },
        {
          "type": "select",
          "text": "Which is a metal?",
          "options": [
            "Sodium",
            "Oxygen",
            "Chlorine"
          ],
          "answer": "Sodium"
        },
        {
          "type": "select",
          "text": "Which is a non-metal?",
          "options": [
            "Sulfur",
            "Iron",
            "Copper"
          ],
          "answer": "Sulfur"
        },
        {
          "type": "radio",
          "text": "True or False: Elements in the same group can have similar properties.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Sodium often has valency ___.",
          "answer": "1",
          "alt": [
            "one"
          ]
        },
        {
          "type": "select",
          "text": "Which trend belongs to periodicity?",
          "options": [
            "Repeating properties",
            "Random names",
            "Only boiling water"
          ],
          "answer": "Repeating properties"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "Modern periodic table کس کے حساب سے arranged ہے؟",
          "options": [
            "atomic number",
            "صرف alphabet",
            "صرف color"
          ],
          "answer": "atomic number"
        },
        {
          "type": "select",
          "text": "Vertical columns کیا ہیں؟",
          "options": [
            "groups",
            "periods",
            "isotopes"
          ],
          "answer": "groups"
        },
        {
          "type": "select",
          "text": "Horizontal rows کیا ہیں؟",
          "options": [
            "periods",
            "groups",
            "bonds"
          ],
          "answer": "periods"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Silicon ایک metalloid ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Valency کا مطلب combining ___.",
          "answer": "capacity"
        },
        {
          "type": "select",
          "text": "Metal کون سا ہے؟",
          "options": [
            "Sodium",
            "Oxygen",
            "Chlorine"
          ],
          "answer": "Sodium"
        },
        {
          "type": "select",
          "text": "Non-metal کون سا ہے؟",
          "options": [
            "Sulfur",
            "Iron",
            "Copper"
          ],
          "answer": "Sulfur"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Same group کے elements کی properties ملتی جلتی ہو سکتی ہیں۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Sodium کی valency عموماً ___ ہے۔",
          "answer": "1",
          "alt": [
            "one"
          ]
        },
        {
          "type": "select",
          "text": "Periodicity سے متعلق trend کون سا ہے؟",
          "options": [
            "Repeating properties",
            "Random names",
            "صرف boiling water"
          ],
          "answer": "Repeating properties"
        }
      ]
    },
    "chemistry-chemical-bonding": {
      "title": "Chemistry: Chemical Bonding",
      "titleUr": "کیمیا: کیمیائی بندش",
      "intro": "Learn ionic, covalent, and metallic bonding introduction, Lewis dot structures, and properties of ionic and covalent compounds.",
      "introUr": "ionic، covalent اور metallic bonding کا تعارف، Lewis dot structures، اور ionic/covalent compounds کی properties سیکھیں۔",
      "focus": [
        "Ionic bonds form by electron transfer",
        "Covalent bonds form by electron sharing",
        "Metallic bonding occurs among metal atoms",
        "Lewis dot structures show valence electrons",
        "Bond type affects melting point, conductivity, and solubility"
      ],
      "focusUr": [
        "Ionic bonds electron transfer سے بنتے ہیں",
        "Covalent bonds electron sharing سے بنتے ہیں",
        "Metallic bonding metal atoms میں ہوتی ہے",
        "Lewis dot structures valence electrons دکھاتے ہیں",
        "Bond type melting point، conductivity اور solubility پر اثر کرتا ہے"
      ],
      "examples": [
        [
          "Ionic",
          "NaCl."
        ],
        [
          "Covalent",
          "H2O or CH4."
        ],
        [
          "Lewis dots",
          "Dots around symbol show valence electrons."
        ],
        [
          "Metallic",
          "Copper metal."
        ]
      ],
      "examplesUr": [
        [
          "Ionic",
          "NaCl۔"
        ],
        [
          "Covalent",
          "H2O یا CH4۔"
        ],
        [
          "Lewis dots",
          "symbol کے گرد dots valence electrons دکھاتے ہیں۔"
        ],
        [
          "Metallic",
          "copper metal۔"
        ]
      ],
      "quick": [
        "Metals tend to lose electrons.",
        "Non-metals tend to gain or share electrons.",
        "Ionic compounds often conduct when molten or dissolved.",
        "Covalent compounds usually have lower melting points than ionic compounds."
      ],
      "quickUr": [
        "Metals عموماً electrons lose کرتے ہیں۔",
        "Non-metals electrons gain یا share کرتے ہیں۔",
        "Ionic compounds molten/dissolved حالت میں conduct کرتے ہیں۔",
        "Covalent compounds کے melting points عموماً ionic سے کم ہوتے ہیں۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "Ionic bonding involves electron...",
          "options": [
            "transfer",
            "sharing only",
            "evaporation"
          ],
          "answer": "transfer"
        },
        {
          "type": "select",
          "text": "Covalent bonding involves electron...",
          "options": [
            "sharing",
            "transfer only",
            "melting"
          ],
          "answer": "sharing"
        },
        {
          "type": "select",
          "text": "NaCl has mainly...",
          "options": [
            "ionic bonding",
            "covalent bonding only",
            "no bond"
          ],
          "answer": "ionic bonding"
        },
        {
          "type": "radio",
          "text": "True or False: Lewis dot structures show valence electrons.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Metals tend to ___ electrons.",
          "answer": "lose"
        },
        {
          "type": "select",
          "text": "Which compound is covalent?",
          "options": [
            "CH4",
            "NaCl",
            "MgO"
          ],
          "answer": "CH4"
        },
        {
          "type": "select",
          "text": "Ionic compounds conduct electricity when...",
          "options": [
            "molten or dissolved",
            "always solid",
            "dry crystals only"
          ],
          "answer": "molten or dissolved"
        },
        {
          "type": "radio",
          "text": "True or False: Covalent bonds are formed by sharing electrons.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Non-metals can share electrons to complete their ___.",
          "answer": "shells"
        },
        {
          "type": "select",
          "text": "Metallic bonding is found in...",
          "options": [
            "copper",
            "water",
            "carbon dioxide"
          ],
          "answer": "copper"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "Ionic bonding میں electron کیا ہوتا ہے؟",
          "options": [
            "transfer",
            "صرف sharing",
            "evaporation"
          ],
          "answer": "transfer"
        },
        {
          "type": "select",
          "text": "Covalent bonding میں electron کیا ہوتا ہے؟",
          "options": [
            "sharing",
            "صرف transfer",
            "melting"
          ],
          "answer": "sharing"
        },
        {
          "type": "select",
          "text": "NaCl میں زیادہ تر کون سی bonding ہے؟",
          "options": [
            "ionic bonding",
            "صرف covalent bonding",
            "کوئی bond نہیں"
          ],
          "answer": "ionic bonding"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Lewis dot structures valence electrons دکھاتے ہیں۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Metals electrons ___ کرتے ہیں۔",
          "answer": "lose"
        },
        {
          "type": "select",
          "text": "Covalent compound کون سا ہے؟",
          "options": [
            "CH4",
            "NaCl",
            "MgO"
          ],
          "answer": "CH4"
        },
        {
          "type": "select",
          "text": "Ionic compounds کب electricity conduct کرتے ہیں؟",
          "options": [
            "molten یا dissolved",
            "ہمیشہ solid",
            "صرف dry crystals"
          ],
          "answer": "molten یا dissolved"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Covalent bonds electrons share کرنے سے بنتے ہیں۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Non-metals shells مکمل کرنے کے لیے electrons ___ کر سکتے ہیں۔",
          "answer": "share"
        },
        {
          "type": "select",
          "text": "Metallic bonding کس میں ہوتی ہے؟",
          "options": [
            "copper",
            "water",
            "carbon dioxide"
          ],
          "answer": "copper"
        }
      ]
    },
    "chemistry-physical-states-of-matter": {
      "title": "Chemistry: Physical States of Matter",
      "titleUr": "کیمیا: مادے کی طبعی حالتیں",
      "intro": "Study solids, liquids, gases, kinetic molecular theory, gas laws introduction, diffusion, evaporation, boiling, and melting points.",
      "introUr": "solid، liquid، gas، kinetic molecular theory، gas laws کا تعارف، diffusion، evaporation، boiling اور melting points سیکھیں۔",
      "focus": [
        "Solids, liquids, and gases differ in particle arrangement and movement",
        "Kinetic molecular theory explains particle motion",
        "Diffusion is spreading of particles",
        "Evaporation occurs from liquid surface",
        "Boiling and melting points are characteristic temperatures"
      ],
      "focusUr": [
        "Solids، liquids اور gases particle arrangement/movement میں مختلف ہیں",
        "Kinetic molecular theory particle motion سمجھاتی ہے",
        "Diffusion particles کے پھیلنے کا عمل ہے",
        "Evaporation liquid surface سے ہوتا ہے",
        "Boiling اور melting points characteristic temperatures ہیں"
      ],
      "examples": [
        [
          "Solid",
          "Fixed shape and volume."
        ],
        [
          "Liquid",
          "Fixed volume but no fixed shape."
        ],
        [
          "Gas",
          "No fixed shape or volume."
        ],
        [
          "Diffusion",
          "Perfume smell spreading in air."
        ]
      ],
      "examplesUr": [
        [
          "Solid",
          "fixed shape and volume۔"
        ],
        [
          "Liquid",
          "fixed volume مگر fixed shape نہیں۔"
        ],
        [
          "Gas",
          "fixed shape یا volume نہیں۔"
        ],
        [
          "Diffusion",
          "perfume smell کا air میں پھیلنا۔"
        ]
      ],
      "quick": [
        "Particles move faster at higher temperature.",
        "Gas particles are far apart.",
        "Evaporation can happen below boiling point.",
        "Diffusion is faster in gases than liquids."
      ],
      "quickUr": [
        "Higher temperature پر particles تیز move کرتے ہیں۔",
        "Gas particles دور دور ہوتے ہیں۔",
        "Evaporation boiling point سے نیچے بھی ہو سکتی ہے۔",
        "Diffusion gases میں liquids سے تیز ہے۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "Particles are closest in...",
          "options": [
            "solid",
            "gas",
            "plasma only"
          ],
          "answer": "solid"
        },
        {
          "type": "select",
          "text": "A liquid has fixed...",
          "options": [
            "volume",
            "shape",
            "mass number only"
          ],
          "answer": "volume"
        },
        {
          "type": "select",
          "text": "Spreading of perfume smell is...",
          "options": [
            "diffusion",
            "electrolysis",
            "bonding"
          ],
          "answer": "diffusion"
        },
        {
          "type": "radio",
          "text": "True or False: Evaporation occurs only at boiling point.",
          "options": [
            "True",
            "False"
          ],
          "answer": "False"
        },
        {
          "type": "text",
          "text": "Complete: Gas particles are far ___.",
          "answer": "apart"
        },
        {
          "type": "select",
          "text": "Boiling occurs throughout the...",
          "options": [
            "liquid",
            "solid only",
            "surface only always"
          ],
          "answer": "liquid"
        },
        {
          "type": "select",
          "text": "Kinetic molecular theory describes particle...",
          "options": [
            "motion",
            "valency only",
            "atomic number only"
          ],
          "answer": "motion"
        },
        {
          "type": "radio",
          "text": "True or False: Heating usually increases particle kinetic energy.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Melting changes solid into ___.",
          "answer": "liquid"
        },
        {
          "type": "select",
          "text": "Which state has no fixed shape or volume?",
          "options": [
            "Gas",
            "Solid",
            "Liquid"
          ],
          "answer": "Gas"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "Particles کس حالت میں سب سے قریب ہوتے ہیں؟",
          "options": [
            "solid",
            "gas",
            "صرف plasma"
          ],
          "answer": "solid"
        },
        {
          "type": "select",
          "text": "Liquid کا fixed کیا ہوتا ہے؟",
          "options": [
            "volume",
            "shape",
            "صرف mass number"
          ],
          "answer": "volume"
        },
        {
          "type": "select",
          "text": "Perfume smell کا پھیلنا کیا ہے؟",
          "options": [
            "diffusion",
            "electrolysis",
            "bonding"
          ],
          "answer": "diffusion"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Evaporation صرف boiling point پر ہوتی ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "غلط"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Gas particles far ___ ہوتے ہیں۔",
          "answer": "apart"
        },
        {
          "type": "select",
          "text": "Boiling کہاں ہوتی ہے؟",
          "options": [
            "liquid کے throughout",
            "صرف solid",
            "ہمیشہ صرف surface"
          ],
          "answer": "liquid کے throughout"
        },
        {
          "type": "select",
          "text": "Kinetic molecular theory particle کیا describe کرتی ہے؟",
          "options": [
            "motion",
            "صرف valency",
            "صرف atomic number"
          ],
          "answer": "motion"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Heating عموماً particle kinetic energy بڑھاتی ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Melting solid کو ___ میں بدلتی ہے۔",
          "answer": "liquid"
        },
        {
          "type": "select",
          "text": "کس state کی fixed shape یا volume نہیں؟",
          "options": [
            "Gas",
            "Solid",
            "Liquid"
          ],
          "answer": "Gas"
        }
      ]
    },
    "chemistry-solutions": {
      "title": "Chemistry: Solutions",
      "titleUr": "کیمیا: محلول",
      "intro": "Learn solute, solvent, types of solutions, concentration, solubility, saturated and unsaturated solutions, and crystallization.",
      "introUr": "solute، solvent، solution کی اقسام، concentration، solubility، saturated/unsaturated solutions اور crystallization سیکھیں۔",
      "focus": [
        "Solute dissolves in solvent",
        "Solution is a homogeneous mixture",
        "Concentration tells amount of solute in solution",
        "Solubility depends on solute, solvent, and temperature",
        "Crystallization separates dissolved solid from solution"
      ],
      "focusUr": [
        "Solute solvent میں dissolve ہوتا ہے",
        "Solution homogeneous mixture ہے",
        "Concentration solution میں solute کی مقدار بتاتی ہے",
        "Solubility solute، solvent اور temperature پر منحصر ہے",
        "Crystallization dissolved solid کو solution سے separate کرتی ہے"
      ],
      "examples": [
        [
          "Solute",
          "Salt in salt water."
        ],
        [
          "Solvent",
          "Water in salt water."
        ],
        [
          "Saturated",
          "No more solute dissolves at that temperature."
        ],
        [
          "Crystallization",
          "Making salt crystals from solution."
        ]
      ],
      "examplesUr": [
        [
          "Solute",
          "salt water میں salt۔"
        ],
        [
          "Solvent",
          "salt water میں water۔"
        ],
        [
          "Saturated",
          "اس temperature پر مزید solute dissolve نہ ہو۔"
        ],
        [
          "Crystallization",
          "solution سے salt crystals بنانا۔"
        ]
      ],
      "quick": [
        "Dilute solution has less solute per volume.",
        "Concentrated solution has more solute per volume.",
        "Heating often increases solubility of solids.",
        "Solubility graphs show how much dissolves at different temperatures."
      ],
      "quickUr": [
        "Dilute solution میں per volume کم solute ہوتا ہے۔",
        "Concentrated solution میں per volume زیادہ solute ہوتا ہے۔",
        "Heating عموماً solids کی solubility بڑھاتی ہے۔",
        "Solubility graphs مختلف temperatures پر dissolve مقدار دکھاتے ہیں۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "The substance dissolved is the...",
          "options": [
            "solute",
            "solvent",
            "crystal only"
          ],
          "answer": "solute"
        },
        {
          "type": "select",
          "text": "The dissolving medium is the...",
          "options": [
            "solvent",
            "solute",
            "precipitate only"
          ],
          "answer": "solvent"
        },
        {
          "type": "select",
          "text": "A solution is a homogeneous...",
          "options": [
            "mixture",
            "element",
            "atom"
          ],
          "answer": "mixture"
        },
        {
          "type": "radio",
          "text": "True or False: Saturated solution cannot dissolve more solute at that temperature.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Salt water has salt as the ___.",
          "answer": "solute"
        },
        {
          "type": "select",
          "text": "More solute per volume means more...",
          "options": [
            "concentrated",
            "dilute",
            "insoluble always"
          ],
          "answer": "concentrated"
        },
        {
          "type": "select",
          "text": "Crystallization separates a dissolved...",
          "options": [
            "solid",
            "gas only",
            "electron"
          ],
          "answer": "solid"
        },
        {
          "type": "radio",
          "text": "True or False: Solubility can change with temperature.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Water is often called a universal ___.",
          "answer": "solvent"
        },
        {
          "type": "select",
          "text": "Which is unsaturated?",
          "options": [
            "Can dissolve more solute",
            "Cannot dissolve any more",
            "Has no solvent"
          ],
          "answer": "Can dissolve more solute"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "Dissolved substance کیا ہے؟",
          "options": [
            "solute",
            "solvent",
            "صرف crystal"
          ],
          "answer": "solute"
        },
        {
          "type": "select",
          "text": "Dissolving medium کیا ہے؟",
          "options": [
            "solvent",
            "solute",
            "صرف precipitate"
          ],
          "answer": "solvent"
        },
        {
          "type": "select",
          "text": "Solution homogeneous کیا ہے؟",
          "options": [
            "mixture",
            "element",
            "atom"
          ],
          "answer": "mixture"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Saturated solution اس temperature پر مزید solute dissolve نہیں کر سکتا۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Salt water میں salt ___ ہے۔",
          "answer": "solute"
        },
        {
          "type": "select",
          "text": "Per volume زیادہ solute کا مطلب زیادہ...",
          "options": [
            "concentrated",
            "dilute",
            "ہمیشہ insoluble"
          ],
          "answer": "concentrated"
        },
        {
          "type": "select",
          "text": "Crystallization dissolved کیا separate کرتی ہے؟",
          "options": [
            "solid",
            "صرف gas",
            "electron"
          ],
          "answer": "solid"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Solubility temperature سے بدل سکتی ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Water کو often universal ___ کہتے ہیں۔",
          "answer": "solvent"
        },
        {
          "type": "select",
          "text": "Unsaturated کون سا ہے؟",
          "options": [
            "مزید solute dissolve کر سکتا ہے",
            "مزید کچھ dissolve نہیں کر سکتا",
            "solvent نہیں ہے"
          ],
          "answer": "مزید solute dissolve کر سکتا ہے"
        }
      ]
    },
    "chemistry-electrochemistry": {
      "title": "Chemistry: Electrochemistry",
      "titleUr": "کیمیا: برق کیمیا",
      "intro": "Study oxidation, reduction, electrolytes, non-electrolytes, electrolysis, uses of electrolysis, and corrosion.",
      "introUr": "oxidation، reduction، electrolytes، non-electrolytes، electrolysis، electrolysis کے uses اور corrosion سیکھیں۔",
      "focus": [
        "Oxidation and reduction involve electron transfer",
        "Electrolytes conduct electricity in molten or aqueous state",
        "Non-electrolytes do not form conducting ions",
        "Electrolysis uses electricity to decompose compounds",
        "Corrosion is slow damage of metals by environment"
      ],
      "focusUr": [
        "Oxidation اور reduction electron transfer سے متعلق ہیں",
        "Electrolytes molten یا aqueous state میں electricity conduct کرتے ہیں",
        "Non-electrolytes conducting ions نہیں بناتے",
        "Electrolysis electricity سے compounds decompose کرتی ہے",
        "Corrosion ماحول سے metals کا slow damage ہے"
      ],
      "examples": [
        [
          "Oxidation",
          "Loss of electrons."
        ],
        [
          "Reduction",
          "Gain of electrons."
        ],
        [
          "Electrolyte",
          "Salt solution."
        ],
        [
          "Corrosion",
          "Rusting of iron."
        ]
      ],
      "examplesUr": [
        [
          "Oxidation",
          "electrons کا loss۔"
        ],
        [
          "Reduction",
          "electrons کا gain۔"
        ],
        [
          "Electrolyte",
          "salt solution۔"
        ],
        [
          "Corrosion",
          "iron کا rusting۔"
        ]
      ],
      "quick": [
        "OIL RIG: Oxidation Is Loss, Reduction Is Gain.",
        "Ions carry charge in electrolytes.",
        "Electrolysis can be used for electroplating.",
        "Painting or oiling can reduce corrosion."
      ],
      "quickUr": [
        "OIL RIG: Oxidation Is Loss, Reduction Is Gain۔",
        "Electrolytes میں ions charge carry کرتے ہیں۔",
        "Electrolysis electroplating میں استعمال ہو سکتی ہے۔",
        "Painting یا oiling corrosion کم کر سکتی ہے۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "Oxidation is loss of...",
          "options": [
            "electrons",
            "protons only",
            "neutrons only"
          ],
          "answer": "electrons"
        },
        {
          "type": "select",
          "text": "Reduction is gain of...",
          "options": [
            "electrons",
            "mass only",
            "heat only"
          ],
          "answer": "electrons"
        },
        {
          "type": "select",
          "text": "A substance that conducts in solution is an...",
          "options": [
            "electrolyte",
            "isotope",
            "alloy only"
          ],
          "answer": "electrolyte"
        },
        {
          "type": "radio",
          "text": "True or False: Electrolysis uses electricity.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Rusting of iron is a type of ___.",
          "answer": "corrosion"
        },
        {
          "type": "select",
          "text": "Which can prevent corrosion?",
          "options": [
            "Painting metal",
            "Scratching paint",
            "Adding salt water"
          ],
          "answer": "Painting metal"
        },
        {
          "type": "select",
          "text": "Electrolysis can be used for...",
          "options": [
            "electroplating",
            "photosynthesis",
            "digestion"
          ],
          "answer": "electroplating"
        },
        {
          "type": "radio",
          "text": "True or False: Non-electrolytes conduct electricity strongly in water.",
          "options": [
            "True",
            "False"
          ],
          "answer": "False"
        },
        {
          "type": "text",
          "text": "Complete: Ions carry electric ___.",
          "answer": "charge"
        },
        {
          "type": "select",
          "text": "Which is an electrolyte?",
          "options": [
            "Salt solution",
            "Sugar solution only",
            "Pure oil"
          ],
          "answer": "Salt solution"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "Oxidation کس کا loss ہے؟",
          "options": [
            "electrons",
            "صرف protons",
            "صرف neutrons"
          ],
          "answer": "electrons"
        },
        {
          "type": "select",
          "text": "Reduction کس کا gain ہے؟",
          "options": [
            "electrons",
            "صرف mass",
            "صرف heat"
          ],
          "answer": "electrons"
        },
        {
          "type": "select",
          "text": "Solution میں conduct کرنے والا substance کیا ہے؟",
          "options": [
            "electrolyte",
            "isotope",
            "صرف alloy"
          ],
          "answer": "electrolyte"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Electrolysis electricity استعمال کرتی ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Iron کا rusting ایک قسم کی ___ ہے۔",
          "answer": "corrosion"
        },
        {
          "type": "select",
          "text": "Corrosion کو کیا روک سکتا ہے؟",
          "options": [
            "metal paint کرنا",
            "paint scratch کرنا",
            "salt water ڈالنا"
          ],
          "answer": "metal paint کرنا"
        },
        {
          "type": "select",
          "text": "Electrolysis کس کے لیے استعمال ہو سکتی ہے؟",
          "options": [
            "electroplating",
            "photosynthesis",
            "digestion"
          ],
          "answer": "electroplating"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Non-electrolytes water میں strongly conduct کرتے ہیں۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "غلط"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Ions electric ___ carry کرتے ہیں۔",
          "answer": "charge"
        },
        {
          "type": "select",
          "text": "Electrolyte کون سا ہے؟",
          "options": [
            "Salt solution",
            "صرف sugar solution",
            "Pure oil"
          ],
          "answer": "Salt solution"
        }
      ]
    },
    "chemistry-chemical-reactivity": {
      "title": "Chemistry: Chemical Reactivity",
      "titleUr": "کیمیا: کیمیائی تعامل پذیری",
      "intro": "Learn metals and non-metals, reactivity series, reactions of metals with water, oxygen and acids, displacement reactions, and noble gases.",
      "introUr": "metals اور non-metals، reactivity series، metals کے water، oxygen اور acids سے reactions، displacement reactions اور noble gases سیکھیں۔",
      "focus": [
        "Reactivity series orders metals by reactivity",
        "Reactive metals react more vigorously with water, oxygen, or acids",
        "More reactive metals displace less reactive metals from compounds",
        "Non-metals have different reactivity patterns",
        "Noble gases are very unreactive"
      ],
      "focusUr": [
        "Reactivity series metals کو reactivity کے حساب سے order کرتی ہے",
        "Reactive metals water، oxygen یا acids سے زیادہ تیزی سے react کرتے ہیں",
        "زیادہ reactive metals کم reactive metals کو compounds سے displace کرتے ہیں",
        "Non-metals کی reactivity patterns مختلف ہیں",
        "Noble gases بہت unreactive ہیں"
      ],
      "examples": [
        [
          "Potassium",
          "Very reactive metal."
        ],
        [
          "Gold",
          "Low reactivity metal."
        ],
        [
          "Displacement",
          "Zinc displaces copper from copper sulfate."
        ],
        [
          "Noble gas",
          "Neon or argon."
        ]
      ],
      "examplesUr": [
        [
          "Potassium",
          "بہت reactive metal۔"
        ],
        [
          "Gold",
          "low reactivity metal۔"
        ],
        [
          "Displacement",
          "zinc copper sulfate سے copper displace کرتا ہے۔"
        ],
        [
          "Noble gas",
          "neon یا argon۔"
        ]
      ],
      "quick": [
        "Use the reactivity series to predict reactions.",
        "Hydrogen gas may form when metals react with acids.",
        "Metal oxides form when metals react with oxygen.",
        "Noble gases have full outer shells."
      ],
      "quickUr": [
        "Reactivity series سے reactions predict کریں۔",
        "Metals acids سے react کریں تو hydrogen gas بن سکتی ہے۔",
        "Metals oxygen سے react کریں تو metal oxides بنتے ہیں۔",
        "Noble gases کے outer shells full ہوتے ہیں۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "The reactivity series orders...",
          "options": [
            "metals",
            "noble gases only",
            "solutions by color"
          ],
          "answer": "metals"
        },
        {
          "type": "select",
          "text": "A very reactive metal is...",
          "options": [
            "potassium",
            "gold",
            "copper only"
          ],
          "answer": "potassium"
        },
        {
          "type": "select",
          "text": "A low reactivity metal is...",
          "options": [
            "gold",
            "sodium",
            "potassium"
          ],
          "answer": "gold"
        },
        {
          "type": "radio",
          "text": "True or False: More reactive metals can displace less reactive metals.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Metals reacting with acids often produce ___ gas.",
          "answer": "hydrogen"
        },
        {
          "type": "select",
          "text": "Metal + oxygen forms...",
          "options": [
            "metal oxide",
            "water only",
            "salt only always"
          ],
          "answer": "metal oxide"
        },
        {
          "type": "select",
          "text": "Which is a noble gas?",
          "options": [
            "Argon",
            "Sodium",
            "Chlorine"
          ],
          "answer": "Argon"
        },
        {
          "type": "radio",
          "text": "True or False: Noble gases are usually very reactive.",
          "options": [
            "True",
            "False"
          ],
          "answer": "False"
        },
        {
          "type": "text",
          "text": "Complete: Zinc can displace copper from copper ___.",
          "answer": "sulfate"
        },
        {
          "type": "select",
          "text": "Which helps predict displacement?",
          "options": [
            "Reactivity series",
            "Boiling point only",
            "Color chart only"
          ],
          "answer": "Reactivity series"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "Reactivity series کس کو order کرتی ہے؟",
          "options": [
            "metals",
            "صرف noble gases",
            "solutions by color"
          ],
          "answer": "metals"
        },
        {
          "type": "select",
          "text": "بہت reactive metal کون سا ہے؟",
          "options": [
            "potassium",
            "gold",
            "صرف copper"
          ],
          "answer": "potassium"
        },
        {
          "type": "select",
          "text": "low reactivity metal کون سا ہے؟",
          "options": [
            "gold",
            "sodium",
            "potassium"
          ],
          "answer": "gold"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: زیادہ reactive metals کم reactive metals کو displace کر سکتے ہیں۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Metals acids سے react کر کے اکثر ___ gas بناتے ہیں۔",
          "answer": "hydrogen"
        },
        {
          "type": "select",
          "text": "Metal + oxygen کیا بناتا ہے؟",
          "options": [
            "metal oxide",
            "صرف water",
            "ہمیشہ صرف salt"
          ],
          "answer": "metal oxide"
        },
        {
          "type": "select",
          "text": "Noble gas کون سی ہے؟",
          "options": [
            "Argon",
            "Sodium",
            "Chlorine"
          ],
          "answer": "Argon"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Noble gases عموماً بہت reactive ہوتے ہیں۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "غلط"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Zinc copper ___ سے copper displace کر سکتا ہے۔",
          "answer": "sulfate"
        },
        {
          "type": "select",
          "text": "Displacement predict کرنے میں کیا مدد دیتا ہے؟",
          "options": [
            "Reactivity series",
            "صرف boiling point",
            "صرف color chart"
          ],
          "answer": "Reactivity series"
        }
      ]
    },
    "physics-physical-quantities-and-measurement": {
      "title": "Physics: Physical Quantities and Measurement",
      "titleUr": "طبیعیات: طبعی مقداریں اور پیمائش",
      "intro": "Study base and derived quantities, SI units, scientific notation, measuring instruments, vernier calipers, screw gauge, and significant figures.",
      "introUr": "base اور derived quantities، SI units، scientific notation، measuring instruments، vernier calipers، screw gauge اور significant figures سیکھیں۔",
      "focus": [
        "Base quantities are independent physical quantities",
        "Derived quantities are made from base quantities",
        "SI units give standard measurement language",
        "Vernier calipers and screw gauge measure small lengths accurately",
        "Significant figures show meaningful digits in a measurement"
      ],
      "focusUr": [
        "Base quantities آزاد physical quantities ہیں",
        "Derived quantities base quantities سے بنتی ہیں",
        "SI units standard measurement language دیتے ہیں",
        "Vernier calipers اور screw gauge چھوٹی lengths accurately ناپتے ہیں",
        "Significant figures measurement کے meaningful digits دکھاتے ہیں"
      ],
      "examples": [
        [
          "Base quantity",
          "Length, mass, time."
        ],
        [
          "Derived quantity",
          "Speed = distance/time."
        ],
        [
          "SI unit",
          "Meter, kilogram, second."
        ],
        [
          "Scientific notation",
          "3000 = 3.0 x 10^3."
        ]
      ],
      "examplesUr": [
        [
          "Base quantity",
          "length، mass، time۔"
        ],
        [
          "Derived quantity",
          "speed = distance/time۔"
        ],
        [
          "SI unit",
          "meter، kilogram، second۔"
        ],
        [
          "Scientific notation",
          "3000 = 3.0 x 10^3۔"
        ]
      ],
      "quick": [
        "Always write number with unit.",
        "Check zero error in instruments.",
        "Use scientific notation for very large or small values.",
        "Do not claim more significant figures than the instrument allows."
      ],
      "quickUr": [
        "Number کے ساتھ unit لازمی لکھیں۔",
        "Instruments میں zero error check کریں۔",
        "بہت بڑی یا چھوٹی values کے لیے scientific notation استعمال کریں۔",
        "Instrument سے زیادہ significant figures نہ لکھیں۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "Which is a base quantity?",
          "options": [
            "length",
            "speed",
            "density"
          ],
          "answer": "length"
        },
        {
          "type": "select",
          "text": "SI unit of mass is...",
          "options": [
            "kilogram",
            "meter",
            "second"
          ],
          "answer": "kilogram"
        },
        {
          "type": "select",
          "text": "Speed is a...",
          "options": [
            "derived quantity",
            "base quantity",
            "unitless quantity always"
          ],
          "answer": "derived quantity"
        },
        {
          "type": "radio",
          "text": "True or False: Scientific notation is useful for very large values.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: SI unit of time is ___.",
          "answer": "second",
          "alt": [
            "s"
          ]
        },
        {
          "type": "select",
          "text": "Which instrument measures very small diameter?",
          "options": [
            "Screw gauge",
            "Spring balance",
            "Stopwatch"
          ],
          "answer": "Screw gauge"
        },
        {
          "type": "select",
          "text": "Vernier calipers measure...",
          "options": [
            "length or diameter",
            "temperature only",
            "electric current only"
          ],
          "answer": "length or diameter"
        },
        {
          "type": "radio",
          "text": "True or False: Significant figures include meaningful digits.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: 5000 can be written as 5 x 10^___.",
          "answer": "3"
        },
        {
          "type": "select",
          "text": "Which is a derived unit?",
          "options": [
            "m/s",
            "kg",
            "s"
          ],
          "answer": "m/s"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "Base quantity کون سی ہے؟",
          "options": [
            "length",
            "speed",
            "density"
          ],
          "answer": "length"
        },
        {
          "type": "select",
          "text": "Mass کی SI unit کیا ہے؟",
          "options": [
            "kilogram",
            "meter",
            "second"
          ],
          "answer": "kilogram"
        },
        {
          "type": "select",
          "text": "Speed کیا ہے؟",
          "options": [
            "derived quantity",
            "base quantity",
            "ہمیشہ unitless"
          ],
          "answer": "derived quantity"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Scientific notation بہت بڑی values کے لیے مفید ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Time کی SI unit ___ ہے۔",
          "answer": "second",
          "alt": [
            "s"
          ]
        },
        {
          "type": "select",
          "text": "بہت چھوٹا diameter کون سا instrument ناپتا ہے؟",
          "options": [
            "Screw gauge",
            "Spring balance",
            "Stopwatch"
          ],
          "answer": "Screw gauge"
        },
        {
          "type": "select",
          "text": "Vernier calipers کیا ناپتے ہیں؟",
          "options": [
            "length یا diameter",
            "صرف temperature",
            "صرف electric current"
          ],
          "answer": "length یا diameter"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Significant figures meaningful digits ہوتے ہیں۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: 5000 کو 5 x 10^___ لکھ سکتے ہیں۔",
          "answer": "3"
        },
        {
          "type": "select",
          "text": "Derived unit کون سی ہے؟",
          "options": [
            "m/s",
            "kg",
            "s"
          ],
          "answer": "m/s"
        }
      ]
    },
    "physics-kinematics": {
      "title": "Physics: Kinematics",
      "titleUr": "طبیعیات: حرکیات",
      "intro": "Learn rest and motion, distance and displacement, speed and velocity, acceleration, distance-time graphs, velocity-time graphs, and equations of motion.",
      "introUr": "rest اور motion، distance اور displacement، speed اور velocity، acceleration، distance-time graphs، velocity-time graphs اور equations of motion سیکھیں۔",
      "focus": [
        "Rest and motion depend on reference point",
        "Distance is scalar; displacement is vector",
        "Speed is distance per time; velocity is displacement per time",
        "Acceleration is rate of change of velocity",
        "Motion graphs describe speed, velocity, acceleration, and distance"
      ],
      "focusUr": [
        "Rest اور motion reference point پر depend کرتے ہیں",
        "Distance scalar ہے؛ displacement vector ہے",
        "Speed distance/time ہے؛ velocity displacement/time ہے",
        "Acceleration velocity کی change rate ہے",
        "Motion graphs speed، velocity، acceleration اور distance بتاتے ہیں"
      ],
      "examples": [
        [
          "Speed",
          "distance/time."
        ],
        [
          "Velocity",
          "speed with direction."
        ],
        [
          "Acceleration",
          "change in velocity/time."
        ],
        [
          "Distance-time graph",
          "Slope shows speed."
        ]
      ],
      "examplesUr": [
        [
          "Speed",
          "distance/time۔"
        ],
        [
          "Velocity",
          "direction کے ساتھ speed۔"
        ],
        [
          "Acceleration",
          "change in velocity/time۔"
        ],
        [
          "Distance-time graph",
          "slope speed دکھاتا ہے۔"
        ]
      ],
      "quick": [
        "Use consistent units before calculations.",
        "Straight horizontal distance-time graph means rest.",
        "Area under velocity-time graph gives displacement.",
        "Slope of velocity-time graph gives acceleration."
      ],
      "quickUr": [
        "Calculations سے پہلے units consistent کریں۔",
        "Horizontal distance-time graph rest دکھاتا ہے۔",
        "Velocity-time graph کے نیچے area displacement دیتا ہے۔",
        "Velocity-time graph کی slope acceleration دیتی ہے۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "Distance is a...",
          "options": [
            "scalar",
            "vector",
            "force"
          ],
          "answer": "scalar"
        },
        {
          "type": "select",
          "text": "Displacement is a...",
          "options": [
            "vector",
            "scalar only",
            "unit"
          ],
          "answer": "vector"
        },
        {
          "type": "select",
          "text": "Speed = distance divided by...",
          "options": [
            "time",
            "mass",
            "force"
          ],
          "answer": "time"
        },
        {
          "type": "radio",
          "text": "True or False: Velocity includes direction.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Acceleration is change in velocity divided by ___.",
          "answer": "time"
        },
        {
          "type": "select",
          "text": "Slope of distance-time graph gives...",
          "options": [
            "speed",
            "mass",
            "weight"
          ],
          "answer": "speed"
        },
        {
          "type": "select",
          "text": "Area under velocity-time graph gives...",
          "options": [
            "displacement",
            "temperature",
            "pressure"
          ],
          "answer": "displacement"
        },
        {
          "type": "radio",
          "text": "True or False: A body at rest changes position relative to reference point.",
          "options": [
            "True",
            "False"
          ],
          "answer": "False"
        },
        {
          "type": "text",
          "text": "Complete: SI unit of velocity is ___.",
          "answer": "m/s"
        },
        {
          "type": "select",
          "text": "Which equation is valid for uniform acceleration?",
          "options": [
            "v = u + at",
            "F = qV only",
            "P = IV only"
          ],
          "answer": "v = u + at"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "Distance کیا ہے؟",
          "options": [
            "scalar",
            "vector",
            "force"
          ],
          "answer": "scalar"
        },
        {
          "type": "select",
          "text": "Displacement کیا ہے؟",
          "options": [
            "vector",
            "صرف scalar",
            "unit"
          ],
          "answer": "vector"
        },
        {
          "type": "select",
          "text": "Speed = distance تقسیم...",
          "options": [
            "time",
            "mass",
            "force"
          ],
          "answer": "time"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Velocity میں direction شامل ہوتی ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Acceleration = change in velocity تقسیم ___.",
          "answer": "time"
        },
        {
          "type": "select",
          "text": "Distance-time graph کی slope کیا دیتی ہے؟",
          "options": [
            "speed",
            "mass",
            "weight"
          ],
          "answer": "speed"
        },
        {
          "type": "select",
          "text": "Velocity-time graph کے نیچے area کیا دیتا ہے؟",
          "options": [
            "displacement",
            "temperature",
            "pressure"
          ],
          "answer": "displacement"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Rest والی body reference point کے لحاظ سے position بدلتی ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "غلط"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Velocity کی SI unit ___ ہے۔",
          "answer": "m/s"
        },
        {
          "type": "select",
          "text": "Uniform acceleration کے لیے کون سی equation درست ہے؟",
          "options": [
            "v = u + at",
            "صرف F = qV",
            "صرف P = IV"
          ],
          "answer": "v = u + at"
        }
      ]
    },
    "physics-dynamics": {
      "title": "Physics: Dynamics",
      "titleUr": "طبیعیات: حرکی قوتیں",
      "intro": "Study force, Newton’s laws of motion, momentum, friction, tension, weight, and law of conservation of momentum.",
      "introUr": "force، Newton’s laws of motion، momentum، friction، tension، weight اور law of conservation of momentum سیکھیں۔",
      "focus": [
        "Force changes motion or shape",
        "Newton’s first law explains inertia",
        "Newton’s second law links force, mass, and acceleration",
        "Newton’s third law states action-reaction pairs",
        "Momentum is conserved in an isolated system"
      ],
      "focusUr": [
        "Force motion یا shape بدلتی ہے",
        "Newton’s first law inertia سمجھاتا ہے",
        "Newton’s second law force، mass اور acceleration کو جوڑتا ہے",
        "Newton’s third law action-reaction pairs بتاتا ہے",
        "Isolated system میں momentum conserved رہتا ہے"
      ],
      "examples": [
        [
          "Force",
          "F = ma."
        ],
        [
          "Momentum",
          "p = mv."
        ],
        [
          "Weight",
          "W = mg."
        ],
        [
          "Friction",
          "Opposes relative motion."
        ]
      ],
      "examplesUr": [
        [
          "Force",
          "F = ma۔"
        ],
        [
          "Momentum",
          "p = mv۔"
        ],
        [
          "Weight",
          "W = mg۔"
        ],
        [
          "Friction",
          "relative motion کی مخالفت کرتی ہے۔"
        ]
      ],
      "quick": [
        "Draw forces with arrows.",
        "Weight is a force due to gravity.",
        "Friction acts opposite motion or tendency of motion.",
        "Momentum before collision equals momentum after collision if no external force acts."
      ],
      "quickUr": [
        "Forces arrows سے draw کریں۔",
        "Weight gravity کی وجہ سے force ہے۔",
        "Friction motion یا tendency کے opposite act کرتی ہے۔",
        "External force نہ ہو تو collision سے پہلے momentum بعد کے برابر ہے۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "Newton’s second law is...",
          "options": [
            "F = ma",
            "p = mv only",
            "W = VIt only"
          ],
          "answer": "F = ma"
        },
        {
          "type": "select",
          "text": "Momentum = mass x...",
          "options": [
            "velocity",
            "temperature",
            "area"
          ],
          "answer": "velocity"
        },
        {
          "type": "select",
          "text": "Weight is force due to...",
          "options": [
            "gravity",
            "friction only",
            "tension only"
          ],
          "answer": "gravity"
        },
        {
          "type": "radio",
          "text": "True or False: Friction opposes motion.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Momentum is represented by symbol ___.",
          "answer": "p"
        },
        {
          "type": "select",
          "text": "Newton’s first law is related to...",
          "options": [
            "inertia",
            "heat",
            "density only"
          ],
          "answer": "inertia"
        },
        {
          "type": "select",
          "text": "Action and reaction are described by Newton’s...",
          "options": [
            "third law",
            "first law only",
            "zeroth law"
          ],
          "answer": "third law"
        },
        {
          "type": "radio",
          "text": "True or False: Momentum is conserved in an isolated system.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: SI unit of force is ___.",
          "answer": "newton",
          "alt": [
            "N"
          ]
        },
        {
          "type": "select",
          "text": "Tension acts in a...",
          "options": [
            "string or rope",
            "liquid only",
            "gas only"
          ],
          "answer": "string or rope"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "Newton’s second law کیا ہے؟",
          "options": [
            "F = ma",
            "صرف p = mv",
            "صرف W = VIt"
          ],
          "answer": "F = ma"
        },
        {
          "type": "select",
          "text": "Momentum = mass x...",
          "options": [
            "velocity",
            "temperature",
            "area"
          ],
          "answer": "velocity"
        },
        {
          "type": "select",
          "text": "Weight کس کی وجہ سے force ہے؟",
          "options": [
            "gravity",
            "صرف friction",
            "صرف tension"
          ],
          "answer": "gravity"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Friction motion کی مخالفت کرتی ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Momentum کا symbol ___ ہے۔",
          "answer": "p"
        },
        {
          "type": "select",
          "text": "Newton’s first law کس سے متعلق ہے؟",
          "options": [
            "inertia",
            "heat",
            "صرف density"
          ],
          "answer": "inertia"
        },
        {
          "type": "select",
          "text": "Action and reaction Newton کے کس law میں ہیں؟",
          "options": [
            "third law",
            "صرف first law",
            "zeroth law"
          ],
          "answer": "third law"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Isolated system میں momentum conserved رہتا ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Force کی SI unit ___ ہے۔",
          "answer": "newton",
          "alt": [
            "N"
          ]
        },
        {
          "type": "select",
          "text": "Tension کس میں act کرتی ہے؟",
          "options": [
            "string یا rope",
            "صرف liquid",
            "صرف gas"
          ],
          "answer": "string یا rope"
        }
      ]
    },
    "physics-turning-effect-of-forces": {
      "title": "Physics: Turning Effect of Forces",
      "titleUr": "طبیعیات: قوتوں کا گردشی اثر",
      "intro": "Learn moment of force, principle of moments, centre of mass, equilibrium, and stability.",
      "introUr": "moment of force، principle of moments، centre of mass، equilibrium اور stability سیکھیں۔",
      "focus": [
        "Moment of force is turning effect",
        "Moment equals force times perpendicular distance",
        "Principle of moments applies in equilibrium",
        "Centre of mass is balance point",
        "Stability depends on base area and centre of mass height"
      ],
      "focusUr": [
        "Moment of force turning effect ہے",
        "Moment = force x perpendicular distance",
        "Equilibrium میں principle of moments apply ہوتا ہے",
        "Centre of mass balance point ہے",
        "Stability base area اور centre of mass height پر depend کرتی ہے"
      ],
      "examples": [
        [
          "Moment",
          "force x moment arm."
        ],
        [
          "Equilibrium",
          "Clockwise moments equal anticlockwise moments."
        ],
        [
          "Stable object",
          "Wide base and low centre of mass."
        ],
        [
          "Unstable",
          "High centre of mass and narrow base."
        ]
      ],
      "examplesUr": [
        [
          "Moment",
          "force x moment arm۔"
        ],
        [
          "Equilibrium",
          "clockwise moments = anticlockwise moments۔"
        ],
        [
          "Stable object",
          "wide base اور low centre of mass۔"
        ],
        [
          "Unstable",
          "high centre of mass اور narrow base۔"
        ]
      ],
      "quick": [
        "Use perpendicular distance from pivot.",
        "Unit of moment is newton meter.",
        "An object is in equilibrium if resultant force and resultant moment are zero.",
        "Lower centre of mass improves stability."
      ],
      "quickUr": [
        "Pivot سے perpendicular distance استعمال کریں۔",
        "Moment کی unit newton meter ہے۔",
        "Object equilibrium میں ہے اگر resultant force اور resultant moment zero ہوں۔",
        "Lower centre of mass stability بہتر کرتا ہے۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "Moment = force x...",
          "options": [
            "perpendicular distance",
            "time",
            "mass only"
          ],
          "answer": "perpendicular distance"
        },
        {
          "type": "select",
          "text": "Unit of moment is...",
          "options": [
            "N m",
            "kg",
            "m/s"
          ],
          "answer": "N m"
        },
        {
          "type": "select",
          "text": "The balance point is called...",
          "options": [
            "centre of mass",
            "velocity",
            "pressure"
          ],
          "answer": "centre of mass"
        },
        {
          "type": "radio",
          "text": "True or False: Wider base usually increases stability.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: In equilibrium, clockwise moments equal ___ moments.",
          "answer": "anticlockwise"
        },
        {
          "type": "select",
          "text": "Moment is the turning effect of a...",
          "options": [
            "force",
            "temperature",
            "density"
          ],
          "answer": "force"
        },
        {
          "type": "select",
          "text": "Lower centre of mass makes an object more...",
          "options": [
            "stable",
            "radioactive",
            "hot"
          ],
          "answer": "stable"
        },
        {
          "type": "radio",
          "text": "True or False: Distance for moment is measured from the pivot.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: The fixed turning point is called a ___.",
          "answer": "pivot"
        },
        {
          "type": "select",
          "text": "Which condition helps equilibrium?",
          "options": [
            "Resultant moment is zero",
            "Only temperature rises",
            "No unit is used"
          ],
          "answer": "Resultant moment is zero"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "Moment = force x...",
          "options": [
            "perpendicular distance",
            "time",
            "صرف mass"
          ],
          "answer": "perpendicular distance"
        },
        {
          "type": "select",
          "text": "Moment کی unit کیا ہے؟",
          "options": [
            "N m",
            "kg",
            "m/s"
          ],
          "answer": "N m"
        },
        {
          "type": "select",
          "text": "Balance point کو کیا کہتے ہیں؟",
          "options": [
            "centre of mass",
            "velocity",
            "pressure"
          ],
          "answer": "centre of mass"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Wider base عموماً stability بڑھاتا ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Equilibrium میں clockwise moments ___ moments کے برابر ہوتے ہیں۔",
          "answer": "anticlockwise"
        },
        {
          "type": "select",
          "text": "Moment کس کا turning effect ہے؟",
          "options": [
            "force",
            "temperature",
            "density"
          ],
          "answer": "force"
        },
        {
          "type": "select",
          "text": "Lower centre of mass object کو زیادہ کیا بناتا ہے؟",
          "options": [
            "stable",
            "radioactive",
            "hot"
          ],
          "answer": "stable"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Moment کے لیے distance pivot سے ناپا جاتا ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Fixed turning point کو ___ کہتے ہیں۔",
          "answer": "pivot"
        },
        {
          "type": "select",
          "text": "Equilibrium میں کون سی condition مدد دیتی ہے؟",
          "options": [
            "Resultant moment zero ہو",
            "صرف temperature بڑھے",
            "unit استعمال نہ ہو"
          ],
          "answer": "Resultant moment zero ہو"
        }
      ]
    },
    "physics-gravitation": {
      "title": "Physics: Gravitation",
      "titleUr": "طبیعیات: کشش ثقل",
      "intro": "Study law of gravitation, mass and weight, gravitational field, motion of satellites, and artificial satellites.",
      "introUr": "law of gravitation، mass اور weight، gravitational field، satellites کی motion اور artificial satellites سیکھیں۔",
      "focus": [
        "Gravitational force attracts masses",
        "Mass is amount of matter; weight is gravitational force",
        "Gravitational field is force per unit mass",
        "Satellites orbit due to gravity and forward motion",
        "Artificial satellites support communication, weather, and mapping"
      ],
      "focusUr": [
        "Gravitational force masses کو attract کرتی ہے",
        "Mass matter کی amount ہے؛ weight gravitational force ہے",
        "Gravitational field force per unit mass ہے",
        "Satellites gravity اور forward motion کی وجہ سے orbit کرتے ہیں",
        "Artificial satellites communication، weather اور mapping میں مدد دیتے ہیں"
      ],
      "examples": [
        [
          "Weight",
          "W = mg."
        ],
        [
          "Gravitational field",
          "g near Earth is about 9.8 N/kg."
        ],
        [
          "Satellite",
          "Object orbiting a planet."
        ],
        [
          "Mass",
          "Measured in kilograms."
        ]
      ],
      "examplesUr": [
        [
          "Weight",
          "W = mg۔"
        ],
        [
          "Gravitational field",
          "Earth کے قریب g تقریباً 9.8 N/kg۔"
        ],
        [
          "Satellite",
          "planet کے گرد orbit کرنے والی object۔"
        ],
        [
          "Mass",
          "kilograms میں measured۔"
        ]
      ],
      "quick": [
        "Mass stays same, weight changes with gravitational field.",
        "Weight is measured in newtons.",
        "Gravity provides centripetal force for satellites.",
        "Artificial satellites are launched by humans."
      ],
      "quickUr": [
        "Mass same رہتی ہے، weight gravitational field سے بدلتا ہے۔",
        "Weight newtons میں measure ہوتا ہے۔",
        "Gravity satellites کے لیے centripetal force دیتی ہے۔",
        "Artificial satellites انسان launch کرتے ہیں۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "Weight = mass x...",
          "options": [
            "g",
            "time",
            "area"
          ],
          "answer": "g"
        },
        {
          "type": "select",
          "text": "Mass is measured in...",
          "options": [
            "kg",
            "N",
            "m/s"
          ],
          "answer": "kg"
        },
        {
          "type": "select",
          "text": "Weight is measured in...",
          "options": [
            "N",
            "kg",
            "m"
          ],
          "answer": "N"
        },
        {
          "type": "radio",
          "text": "True or False: Mass and weight are exactly the same.",
          "options": [
            "True",
            "False"
          ],
          "answer": "False"
        },
        {
          "type": "text",
          "text": "Complete: Gravitational field strength near Earth is about 9.8 ___.",
          "answer": "N/kg"
        },
        {
          "type": "select",
          "text": "A satellite moves around a...",
          "options": [
            "planet",
            "spring only",
            "beaker"
          ],
          "answer": "planet"
        },
        {
          "type": "select",
          "text": "Artificial satellites are made and launched by...",
          "options": [
            "humans",
            "plants",
            "rocks only"
          ],
          "answer": "humans"
        },
        {
          "type": "radio",
          "text": "True or False: Gravity is attractive.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Mass is the amount of ___ in a body.",
          "answer": "matter"
        },
        {
          "type": "select",
          "text": "Which is a satellite use?",
          "options": [
            "Weather forecasting",
            "Digestion",
            "Boiling water only"
          ],
          "answer": "Weather forecasting"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "Weight = mass x...",
          "options": [
            "g",
            "time",
            "area"
          ],
          "answer": "g"
        },
        {
          "type": "select",
          "text": "Mass کس میں measured ہے؟",
          "options": [
            "kg",
            "N",
            "m/s"
          ],
          "answer": "kg"
        },
        {
          "type": "select",
          "text": "Weight کس میں measured ہے؟",
          "options": [
            "N",
            "kg",
            "m"
          ],
          "answer": "N"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Mass اور weight بالکل same ہیں۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "غلط"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Earth کے قریب gravitational field strength تقریباً 9.8 ___ ہے۔",
          "answer": "N/kg"
        },
        {
          "type": "select",
          "text": "Satellite کس کے گرد move کرتا ہے؟",
          "options": [
            "planet",
            "صرف spring",
            "beaker"
          ],
          "answer": "planet"
        },
        {
          "type": "select",
          "text": "Artificial satellites کون بناتا اور launch کرتا ہے؟",
          "options": [
            "humans",
            "plants",
            "صرف rocks"
          ],
          "answer": "humans"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Gravity attractive ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Mass body میں ___ کی amount ہے۔",
          "answer": "matter"
        },
        {
          "type": "select",
          "text": "Satellite کا use کون سا ہے؟",
          "options": [
            "Weather forecasting",
            "Digestion",
            "صرف boiling water"
          ],
          "answer": "Weather forecasting"
        }
      ]
    },
    "physics-work-and-energy": {
      "title": "Physics: Work and Energy",
      "titleUr": "طبیعیات: کام اور توانائی",
      "intro": "Learn work, energy, kinetic energy, potential energy, power, efficiency, and conservation of energy.",
      "introUr": "work، energy، kinetic energy، potential energy، power، efficiency اور conservation of energy سیکھیں۔",
      "focus": [
        "Work is done when force causes displacement",
        "Energy is ability to do work",
        "Kinetic energy is energy of motion",
        "Potential energy is stored due to position or condition",
        "Power is rate of doing work and efficiency compares useful output to input"
      ],
      "focusUr": [
        "Work تب ہوتا ہے جب force displacement پیدا کرے",
        "Energy کام کرنے کی صلاحیت ہے",
        "Kinetic energy motion کی energy ہے",
        "Potential energy position یا condition کی وجہ سے stored ہے",
        "Power work کرنے کی rate ہے اور efficiency useful output/input کا موازنہ ہے"
      ],
      "examples": [
        [
          "Work",
          "W = Fd."
        ],
        [
          "Kinetic energy",
          "KE = 1/2 mv^2."
        ],
        [
          "Potential energy",
          "PE = mgh."
        ],
        [
          "Power",
          "P = W/t."
        ]
      ],
      "examplesUr": [
        [
          "Work",
          "W = Fd۔"
        ],
        [
          "Kinetic energy",
          "KE = 1/2 mv^2۔"
        ],
        [
          "Potential energy",
          "PE = mgh۔"
        ],
        [
          "Power",
          "P = W/t۔"
        ]
      ],
      "quick": [
        "No displacement means no mechanical work.",
        "Energy is measured in joules.",
        "Power is measured in watts.",
        "Efficiency is often written as a percentage."
      ],
      "quickUr": [
        "Displacement نہ ہو تو mechanical work نہیں ہوتا۔",
        "Energy joules میں measured ہے۔",
        "Power watts میں measured ہے۔",
        "Efficiency اکثر percentage میں لکھی جاتی ہے۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "Work = force x...",
          "options": [
            "displacement",
            "time",
            "temperature"
          ],
          "answer": "displacement"
        },
        {
          "type": "select",
          "text": "Energy is measured in...",
          "options": [
            "joules",
            "newtons",
            "watts only"
          ],
          "answer": "joules"
        },
        {
          "type": "select",
          "text": "Power = work divided by...",
          "options": [
            "time",
            "distance",
            "mass"
          ],
          "answer": "time"
        },
        {
          "type": "radio",
          "text": "True or False: Kinetic energy is energy of motion.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Potential energy near Earth can be mgh where h is ___.",
          "answer": "height"
        },
        {
          "type": "select",
          "text": "Power is measured in...",
          "options": [
            "watts",
            "joules",
            "meters"
          ],
          "answer": "watts"
        },
        {
          "type": "select",
          "text": "Efficiency compares useful output with...",
          "options": [
            "input",
            "height only",
            "mass only"
          ],
          "answer": "input"
        },
        {
          "type": "radio",
          "text": "True or False: Energy can be transformed from one form to another.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: KE = 1/2 mv^___.",
          "answer": "2"
        },
        {
          "type": "select",
          "text": "If force acts but displacement is zero, work is...",
          "options": [
            "zero",
            "maximum",
            "negative always"
          ],
          "answer": "zero"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "Work = force x...",
          "options": [
            "displacement",
            "time",
            "temperature"
          ],
          "answer": "displacement"
        },
        {
          "type": "select",
          "text": "Energy کس میں measured ہے؟",
          "options": [
            "joules",
            "newtons",
            "صرف watts"
          ],
          "answer": "joules"
        },
        {
          "type": "select",
          "text": "Power = work تقسیم...",
          "options": [
            "time",
            "distance",
            "mass"
          ],
          "answer": "time"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Kinetic energy motion کی energy ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Potential energy mgh میں h ___ ہے۔",
          "answer": "height"
        },
        {
          "type": "select",
          "text": "Power کس میں measured ہے؟",
          "options": [
            "watts",
            "joules",
            "meters"
          ],
          "answer": "watts"
        },
        {
          "type": "select",
          "text": "Efficiency useful output کا کس سے موازنہ ہے؟",
          "options": [
            "input",
            "صرف height",
            "صرف mass"
          ],
          "answer": "input"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Energy ایک form سے دوسری form میں transform ہو سکتی ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: KE = 1/2 mv^___.",
          "answer": "2"
        },
        {
          "type": "select",
          "text": "Force ہو مگر displacement zero ہو تو work...",
          "options": [
            "zero",
            "maximum",
            "ہمیشہ negative"
          ],
          "answer": "zero"
        }
      ]
    },
    "physics-properties-of-matter": {
      "title": "Physics: Properties of Matter",
      "titleUr": "طبیعیات: مادے کی خصوصیات",
      "intro": "Study density, elasticity, pressure, pressure in liquids, atmospheric pressure, and Archimedes’ principle introduction.",
      "introUr": "density، elasticity، pressure، liquids میں pressure، atmospheric pressure اور Archimedes’ principle کا تعارف سیکھیں۔",
      "focus": [
        "Density is mass per unit volume",
        "Elasticity is ability to regain original shape",
        "Pressure is force per unit area",
        "Liquid pressure increases with depth",
        "Archimedes’ principle relates upthrust to displaced fluid"
      ],
      "focusUr": [
        "Density mass per unit volume ہے",
        "Elasticity original shape واپس لینے کی صلاحیت ہے",
        "Pressure force per unit area ہے",
        "Liquid pressure depth کے ساتھ بڑھتا ہے",
        "Archimedes’ principle upthrust کو displaced fluid سے جوڑتا ہے"
      ],
      "examples": [
        [
          "Density",
          "rho = m/V."
        ],
        [
          "Pressure",
          "P = F/A."
        ],
        [
          "Atmospheric pressure",
          "Pressure due to air."
        ],
        [
          "Upthrust",
          "Upward force by fluid."
        ]
      ],
      "examplesUr": [
        [
          "Density",
          "rho = m/V۔"
        ],
        [
          "Pressure",
          "P = F/A۔"
        ],
        [
          "Atmospheric pressure",
          "air کی وجہ سے pressure۔"
        ],
        [
          "Upthrust",
          "fluid کی upward force۔"
        ]
      ],
      "quick": [
        "Use kg/m^3 or g/cm^3 for density.",
        "Smaller area gives larger pressure.",
        "Liquid pressure depends on depth and density.",
        "Floating occurs when upthrust balances weight."
      ],
      "quickUr": [
        "Density کے لیے kg/m^3 یا g/cm^3 استعمال کریں۔",
        "کم area زیادہ pressure دیتا ہے۔",
        "Liquid pressure depth اور density پر depend کرتا ہے۔",
        "Floating تب ہوتی ہے جب upthrust weight کو balance کرے۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "Density = mass divided by...",
          "options": [
            "volume",
            "area",
            "time"
          ],
          "answer": "volume"
        },
        {
          "type": "select",
          "text": "Pressure = force divided by...",
          "options": [
            "area",
            "volume",
            "temperature"
          ],
          "answer": "area"
        },
        {
          "type": "select",
          "text": "Atmospheric pressure is due to...",
          "options": [
            "air",
            "water only",
            "elasticity"
          ],
          "answer": "air"
        },
        {
          "type": "radio",
          "text": "True or False: Liquid pressure increases with depth.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Upthrust acts in the ___ direction.",
          "answer": "upward"
        },
        {
          "type": "select",
          "text": "Elasticity is ability to regain...",
          "options": [
            "original shape",
            "higher temperature",
            "electric charge"
          ],
          "answer": "original shape"
        },
        {
          "type": "select",
          "text": "Floating occurs when upthrust balances...",
          "options": [
            "weight",
            "color",
            "speed"
          ],
          "answer": "weight"
        },
        {
          "type": "radio",
          "text": "True or False: Smaller area can increase pressure for same force.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Density symbol is often Greek letter ___.",
          "answer": "rho",
          "alt": [
            "ρ"
          ]
        },
        {
          "type": "select",
          "text": "Archimedes’ principle is about...",
          "options": [
            "upthrust and displaced fluid",
            "electric current",
            "sound pitch"
          ],
          "answer": "upthrust and displaced fluid"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "Density = mass تقسیم...",
          "options": [
            "volume",
            "area",
            "time"
          ],
          "answer": "volume"
        },
        {
          "type": "select",
          "text": "Pressure = force تقسیم...",
          "options": [
            "area",
            "volume",
            "temperature"
          ],
          "answer": "area"
        },
        {
          "type": "select",
          "text": "Atmospheric pressure کس کی وجہ سے ہے؟",
          "options": [
            "air",
            "صرف water",
            "elasticity"
          ],
          "answer": "air"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Liquid pressure depth کے ساتھ بڑھتا ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Upthrust ___ direction میں act کرتا ہے۔",
          "answer": "upward"
        },
        {
          "type": "select",
          "text": "Elasticity کس صلاحیت کا نام ہے؟",
          "options": [
            "original shape واپس لینا",
            "higher temperature",
            "electric charge"
          ],
          "answer": "original shape واپس لینا"
        },
        {
          "type": "select",
          "text": "Floating تب ہوتی ہے جب upthrust کس کو balance کرے؟",
          "options": [
            "weight",
            "color",
            "speed"
          ],
          "answer": "weight"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Same force کے لیے کم area pressure بڑھا سکتا ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Density کا symbol اکثر Greek letter ___ ہے۔",
          "answer": "rho",
          "alt": [
            "ρ"
          ]
        },
        {
          "type": "select",
          "text": "Archimedes’ principle کس بارے میں ہے؟",
          "options": [
            "upthrust اور displaced fluid",
            "electric current",
            "sound pitch"
          ],
          "answer": "upthrust اور displaced fluid"
        }
      ]
    },
    "physics-thermal-properties-of-matter": {
      "title": "Physics: Thermal Properties of Matter",
      "titleUr": "طبیعیات: مادے کی حرارتی خصوصیات",
      "intro": "Learn temperature and heat, thermometers, specific heat capacity, latent heat, thermal expansion, and heat transfer.",
      "introUr": "temperature اور heat، thermometers، specific heat capacity، latent heat، thermal expansion اور heat transfer سیکھیں۔",
      "focus": [
        "Temperature measures degree of hotness",
        "Heat is energy transferred due to temperature difference",
        "Specific heat capacity is energy needed per kg per degree change",
        "Latent heat changes state without temperature change",
        "Heat transfers by conduction, convection, and radiation"
      ],
      "focusUr": [
        "Temperature hotness کی degree ہے",
        "Heat temperature difference کی وجہ سے transferred energy ہے",
        "Specific heat capacity per kg per degree energy ہے",
        "Latent heat temperature change کے بغیر state بدلتی ہے",
        "Heat conduction، convection اور radiation سے transfer ہوتی ہے"
      ],
      "examples": [
        [
          "Heat formula",
          "Q = mcΔT."
        ],
        [
          "Latent heat",
          "Q = mL."
        ],
        [
          "Conduction",
          "Heat through metal rod."
        ],
        [
          "Convection",
          "Warm fluid rises."
        ]
      ],
      "examplesUr": [
        [
          "Heat formula",
          "Q = mcΔT۔"
        ],
        [
          "Latent heat",
          "Q = mL۔"
        ],
        [
          "Conduction",
          "metal rod میں heat۔"
        ],
        [
          "Convection",
          "warm fluid rises۔"
        ]
      ],
      "quick": [
        "Heat and temperature are not the same.",
        "Thermometers measure temperature.",
        "Expansion gaps protect bridges and rails.",
        "Radiation can travel through vacuum."
      ],
      "quickUr": [
        "Heat اور temperature same نہیں۔",
        "Thermometers temperature measure کرتے ہیں۔",
        "Expansion gaps bridges اور rails کو protect کرتے ہیں۔",
        "Radiation vacuum میں travel کر سکتی ہے۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "Temperature measures degree of...",
          "options": [
            "hotness",
            "mass",
            "force"
          ],
          "answer": "hotness"
        },
        {
          "type": "select",
          "text": "Heat is energy transferred due to...",
          "options": [
            "temperature difference",
            "color difference",
            "mass number"
          ],
          "answer": "temperature difference"
        },
        {
          "type": "select",
          "text": "Specific heat capacity formula uses...",
          "options": [
            "Q = mcΔT",
            "F = ma only",
            "P = F/A only"
          ],
          "answer": "Q = mcΔT"
        },
        {
          "type": "radio",
          "text": "True or False: Latent heat changes state without temperature change.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Thermometers measure ___.",
          "answer": "temperature"
        },
        {
          "type": "select",
          "text": "Heat through a metal rod is...",
          "options": [
            "conduction",
            "convection",
            "radiation only"
          ],
          "answer": "conduction"
        },
        {
          "type": "select",
          "text": "Warm fluid rising is...",
          "options": [
            "convection",
            "conduction only",
            "latent heat only"
          ],
          "answer": "convection"
        },
        {
          "type": "radio",
          "text": "True or False: Radiation can travel through vacuum.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Thermal expansion means size increases on ___.",
          "answer": "heating"
        },
        {
          "type": "select",
          "text": "Q = mL is used for...",
          "options": [
            "latent heat",
            "density",
            "momentum"
          ],
          "answer": "latent heat"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "Temperature کس degree کو measure کرتی ہے؟",
          "options": [
            "hotness",
            "mass",
            "force"
          ],
          "answer": "hotness"
        },
        {
          "type": "select",
          "text": "Heat کس وجہ سے transferred energy ہے؟",
          "options": [
            "temperature difference",
            "color difference",
            "mass number"
          ],
          "answer": "temperature difference"
        },
        {
          "type": "select",
          "text": "Specific heat capacity formula کون سا ہے؟",
          "options": [
            "Q = mcΔT",
            "صرف F = ma",
            "صرف P = F/A"
          ],
          "answer": "Q = mcΔT"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Latent heat temperature change کے بغیر state بدلتی ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Thermometers ___ measure کرتے ہیں۔",
          "answer": "temperature"
        },
        {
          "type": "select",
          "text": "Metal rod میں heat transfer کیا ہے؟",
          "options": [
            "conduction",
            "convection",
            "صرف radiation"
          ],
          "answer": "conduction"
        },
        {
          "type": "select",
          "text": "Warm fluid کا rise ہونا کیا ہے؟",
          "options": [
            "convection",
            "صرف conduction",
            "صرف latent heat"
          ],
          "answer": "convection"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Radiation vacuum میں travel کر سکتی ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Thermal expansion کا مطلب heating پر size کا ___ ہے۔",
          "answer": "بڑھنا"
        },
        {
          "type": "select",
          "text": "Q = mL کس کے لیے استعمال ہوتا ہے؟",
          "options": [
            "latent heat",
            "density",
            "momentum"
          ],
          "answer": "latent heat"
        }
      ]
    }
  };

  const TOPICS_GRADE10 = {
    "biology-gaseous-exchange": {
      "title": "Biology: Gaseous Exchange",
      "titleUr": "حیاتیات: گیسوں کا تبادلہ",
      "intro": "Study gaseous exchange in plants, the human respiratory system, breathing mechanism, respiratory disorders, and the biological effects of smoking. This chapter connects surface area, diffusion, ventilation, and health choices.",
      "introUr": "پودوں میں گیسوں کا تبادلہ، انسانی نظام تنفس، سانس لینے کا طریقہ، respiratory disorders اور smoking کے حیاتیاتی اثرات سیکھیں۔ یہ باب surface area، diffusion، ventilation اور health choices کو جوڑتا ہے۔",
      "focus": [
        "Plants exchange gases through stomata and lenticels, with diffusion driven by concentration differences",
        "The human respiratory tract filters, warms, and carries air to alveoli for gas exchange",
        "Breathing uses diaphragm and intercostal muscles to change chest volume and pressure",
        "Alveoli have thin moist walls, large surface area, and rich capillary supply for efficient diffusion",
        "Smoking damages cilia and alveoli, increases mucus, reduces oxygen uptake, and raises risk of bronchitis, emphysema, and lung cancer"
      ],
      "focusUr": [
        "Plants stomata اور lenticels کے ذریعے gases exchange کرتے ہیں، diffusion concentration difference سے ہوتی ہے",
        "Human respiratory tract ہوا کو filter، warm کر کے alveoli تک لے جاتا ہے",
        "Breathing میں diaphragm اور intercostal muscles chest volume اور pressure بدلتے ہیں",
        "Alveoli کی thin moist walls، large surface area اور capillary supply diffusion کو efficient بناتی ہے",
        "Smoking cilia اور alveoli کو damage کرتی ہے، mucus بڑھاتی ہے، oxygen uptake کم کرتی ہے اور bronchitis، emphysema، lung cancer کا خطرہ بڑھاتی ہے"
      ],
      "examples": [
        [
          "Inhalation",
          "Diaphragm contracts and flattens; chest volume increases; air enters lungs."
        ],
        [
          "Exhalation",
          "Diaphragm relaxes; chest volume decreases; air leaves lungs."
        ],
        [
          "Alveolus",
          "Tiny air sac where oxygen enters blood and carbon dioxide leaves blood."
        ],
        [
          "Smoking effect",
          "Tar damages cilia and carcinogens increase cancer risk."
        ]
      ],
      "examplesUr": [
        [
          "Inhalation",
          "Diaphragm contract ہو کر flat ہوتا ہے؛ chest volume بڑھتا ہے؛ air lungs میں داخل ہوتی ہے۔"
        ],
        [
          "Exhalation",
          "Diaphragm relax ہوتا ہے؛ chest volume کم ہوتا ہے؛ air lungs سے نکلتی ہے۔"
        ],
        [
          "Alveolus",
          "چھوٹی air sac جہاں oxygen blood میں جاتی اور carbon dioxide blood سے نکلتی ہے۔"
        ],
        [
          "Smoking effect",
          "Tar cilia کو damage کرتا ہے اور carcinogens cancer risk بڑھاتے ہیں۔"
        ]
      ],
      "quick": [
        "Gas exchange depends on diffusion, surface area, thin membrane, and concentration gradient.",
        "Do not confuse breathing with cellular respiration: breathing moves air; respiration releases energy in cells.",
        "Oxygen diffuses from alveoli into blood; carbon dioxide diffuses from blood into alveoli.",
        "Healthy respiratory habits include avoiding smoke, exercise, ventilation, and timely treatment of infections."
      ],
      "quickUr": [
        "Gas exchange diffusion، surface area، thin membrane اور concentration gradient پر depend کرتا ہے۔",
        "Breathing اور cellular respiration کو mix نہ کریں: breathing air move کرتی ہے؛ respiration cells میں energy release کرتی ہے۔",
        "Oxygen alveoli سے blood میں diffuse ہوتی ہے؛ carbon dioxide blood سے alveoli میں diffuse ہوتی ہے۔",
        "Healthy respiratory habits میں smoke سے بچنا، exercise، ventilation اور infection کا timely treatment شامل ہے۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "In plants, most gaseous exchange through leaves occurs via...",
          "options": [
            "stomata",
            "xylem vessels",
            "root hairs only"
          ],
          "answer": "stomata"
        },
        {
          "type": "select",
          "text": "The tiny air sacs of lungs are called...",
          "options": [
            "alveoli",
            "bronchi",
            "trachea"
          ],
          "answer": "alveoli"
        },
        {
          "type": "select",
          "text": "During inhalation, the diaphragm...",
          "options": [
            "contracts and flattens",
            "relaxes and domes upward",
            "stops moving"
          ],
          "answer": "contracts and flattens"
        },
        {
          "type": "radio",
          "text": "True or False: Alveoli have thin walls for efficient diffusion.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Oxygen diffuses from alveoli into the ___.",
          "answer": "blood"
        },
        {
          "type": "select",
          "text": "Which structure prevents dust and microbes from moving deeper by sweeping mucus?",
          "options": [
            "Cilia",
            "Alveoli only",
            "Diaphragm"
          ],
          "answer": "Cilia"
        },
        {
          "type": "select",
          "text": "Smoking damages alveoli and may cause...",
          "options": [
            "emphysema",
            "photosynthesis",
            "pollination"
          ],
          "answer": "emphysema"
        },
        {
          "type": "radio",
          "text": "True or False: Breathing and cellular respiration are exactly the same process.",
          "options": [
            "True",
            "False"
          ],
          "answer": "False"
        },
        {
          "type": "text",
          "text": "Complete: Carbon dioxide diffuses from blood into the ___.",
          "answer": "alveoli"
        },
        {
          "type": "select",
          "text": "Which condition is linked with smoking?",
          "options": [
            "Bronchitis",
            "Scurvy",
            "Rickets"
          ],
          "answer": "Bronchitis"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "Leaves میں زیادہ تر gaseous exchange کس کے ذریعے ہوتی ہے؟",
          "options": [
            "stomata",
            "xylem vessels",
            "صرف root hairs"
          ],
          "answer": "stomata"
        },
        {
          "type": "select",
          "text": "Lungs کی tiny air sacs کیا کہلاتی ہیں؟",
          "options": [
            "alveoli",
            "bronchi",
            "trachea"
          ],
          "answer": "alveoli"
        },
        {
          "type": "select",
          "text": "Inhalation کے دوران diaphragm کیا کرتا ہے؟",
          "options": [
            "contract ہو کر flat ہوتا ہے",
            "relax ہو کر اوپر domes بناتا ہے",
            "حرکت روک دیتا ہے"
          ],
          "answer": "contract ہو کر flat ہوتا ہے"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Alveoli کی walls thin ہوتی ہیں تاکہ diffusion efficient ہو۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Oxygen alveoli سے ___ میں diffuse ہوتی ہے۔",
          "answer": "blood"
        },
        {
          "type": "select",
          "text": "Dust اور microbes کو mucus کے ساتھ sweep کرنے والی structure کون سی ہے؟",
          "options": [
            "Cilia",
            "صرف Alveoli",
            "Diaphragm"
          ],
          "answer": "Cilia"
        },
        {
          "type": "select",
          "text": "Smoking alveoli کو damage کر کے کس disease کا سبب بن سکتی ہے؟",
          "options": [
            "emphysema",
            "photosynthesis",
            "pollination"
          ],
          "answer": "emphysema"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Breathing اور cellular respiration بالکل same process ہیں۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "غلط"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Carbon dioxide blood سے ___ میں diffuse ہوتی ہے۔",
          "answer": "alveoli"
        },
        {
          "type": "select",
          "text": "Smoking سے کون سی condition linked ہے؟",
          "options": [
            "Bronchitis",
            "Scurvy",
            "Rickets"
          ],
          "answer": "Bronchitis"
        }
      ]
    },
    "biology-homeostasis": {
      "title": "Biology: Homeostasis",
      "titleUr": "حیاتیات: ہومیو سٹیسس",
      "intro": "Learn how organisms keep internal conditions stable through homeostasis, plant excretion, human urinary system, kidney structure, skin temperature regulation, and kidney disorders.",
      "introUr": "Homeostasis کے ذریعے internal conditions کو stable رکھنے، plants میں excretion، human urinary system، kidney structure، skin temperature regulation اور kidney disorders سیکھیں۔",
      "focus": [
        "Homeostasis maintains stable internal conditions such as temperature, water level, salts, glucose, and pH",
        "Plants excrete extra oxygen, carbon dioxide, water vapor, resins, gums, and stored wastes",
        "The urinary system removes nitrogenous waste and regulates water and salts",
        "Nephrons filter blood and selectively reabsorb useful substances",
        "Skin controls temperature through sweating, blood vessel dilation/constriction, and hair position"
      ],
      "focusUr": [
        "Homeostasis temperature، water level، salts، glucose اور pH جیسے internal conditions stable رکھتا ہے",
        "Plants extra oxygen، carbon dioxide، water vapor، resins، gums اور stored wastes excrete کرتے ہیں",
        "Urinary system nitrogenous waste remove کرتا اور water/salts regulate کرتا ہے",
        "Nephrons blood filter کرتے اور useful substances selectively reabsorb کرتے ہیں",
        "Skin sweating، blood vessel dilation/constriction اور hair position سے temperature control کرتی ہے"
      ],
      "examples": [
        [
          "Kidney",
          "Filters blood and forms urine."
        ],
        [
          "Nephron",
          "Functional unit of kidney."
        ],
        [
          "Sweating",
          "Evaporation removes heat from skin."
        ],
        [
          "Kidney stone",
          "A disorder that can block urine flow and cause pain."
        ]
      ],
      "examplesUr": [
        [
          "Kidney",
          "Blood filter کر کے urine بناتا ہے۔"
        ],
        [
          "Nephron",
          "Kidney کی functional unit۔"
        ],
        [
          "Sweating",
          "Evaporation skin سے heat remove کرتی ہے۔"
        ],
        [
          "Kidney stone",
          "disorder جو urine flow block اور pain cause کر سکتا ہے۔"
        ]
      ],
      "quick": [
        "Homeostasis uses negative feedback in many body systems.",
        "Excretion removes metabolic waste; egestion removes undigested food.",
        "More sweating cools the body but also increases water loss.",
        "Healthy kidneys need clean water, balanced diet, hygiene, and timely treatment of infections."
      ],
      "quickUr": [
        "Homeostasis کئی systems میں negative feedback استعمال کرتا ہے۔",
        "Excretion metabolic waste remove کرتا ہے؛ egestion undigested food remove کرتا ہے۔",
        "زیادہ sweating body cool کرتی ہے مگر water loss بڑھاتی ہے۔",
        "Healthy kidneys کے لیے clean water، balanced diet، hygiene اور infections کا treatment ضروری ہے۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "Homeostasis means maintaining...",
          "options": [
            "stable internal conditions",
            "only body size",
            "external weather"
          ],
          "answer": "stable internal conditions"
        },
        {
          "type": "select",
          "text": "The functional unit of kidney is...",
          "options": [
            "nephron",
            "alveolus",
            "neuron"
          ],
          "answer": "nephron"
        },
        {
          "type": "select",
          "text": "The urinary system mainly removes...",
          "options": [
            "nitrogenous wastes",
            "oxygen only",
            "undigested food"
          ],
          "answer": "nitrogenous wastes"
        },
        {
          "type": "radio",
          "text": "True or False: Sweating helps cool the body.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Kidneys filter ___ to form urine.",
          "answer": "blood"
        },
        {
          "type": "select",
          "text": "Which organ regulates body temperature through sweating?",
          "options": [
            "Skin",
            "Heart",
            "Stomach"
          ],
          "answer": "Skin"
        },
        {
          "type": "select",
          "text": "Plants may excrete waste as...",
          "options": [
            "resins and gums",
            "urine only",
            "sweat only"
          ],
          "answer": "resins and gums"
        },
        {
          "type": "radio",
          "text": "True or False: Excretion and egestion mean exactly the same thing.",
          "options": [
            "True",
            "False"
          ],
          "answer": "False"
        },
        {
          "type": "text",
          "text": "Complete: Excess water loss can cause ___.",
          "answer": "dehydration"
        },
        {
          "type": "select",
          "text": "Which is a kidney disorder?",
          "options": [
            "Kidney stone",
            "Bronchitis",
            "Night blindness"
          ],
          "answer": "Kidney stone"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "Homeostasis کا مطلب کیا ہے؟",
          "options": [
            "stable internal conditions برقرار رکھنا",
            "صرف body size رکھنا",
            "external weather"
          ],
          "answer": "stable internal conditions برقرار رکھنا"
        },
        {
          "type": "select",
          "text": "Kidney کی functional unit کیا ہے؟",
          "options": [
            "nephron",
            "alveolus",
            "neuron"
          ],
          "answer": "nephron"
        },
        {
          "type": "select",
          "text": "Urinary system زیادہ تر کیا remove کرتا ہے؟",
          "options": [
            "nitrogenous wastes",
            "صرف oxygen",
            "undigested food"
          ],
          "answer": "nitrogenous wastes"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Sweating body کو cool کرنے میں مدد دیتی ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Kidneys urine بنانے کے لیے ___ filter کرتے ہیں۔",
          "answer": "blood"
        },
        {
          "type": "select",
          "text": "Sweating کے ذریعے body temperature کون regulate کرتا ہے؟",
          "options": [
            "Skin",
            "Heart",
            "Stomach"
          ],
          "answer": "Skin"
        },
        {
          "type": "select",
          "text": "Plants wastes کو کس صورت میں excrete کر سکتے ہیں؟",
          "options": [
            "resins اور gums",
            "صرف urine",
            "صرف sweat"
          ],
          "answer": "resins اور gums"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Excretion اور egestion بالکل same ہیں۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "غلط"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Excess water loss سے ___ ہو سکتی ہے۔",
          "answer": "dehydration"
        },
        {
          "type": "select",
          "text": "Kidney disorder کون سا ہے؟",
          "options": [
            "Kidney stone",
            "Bronchitis",
            "Night blindness"
          ],
          "answer": "Kidney stone"
        }
      ]
    },
    "biology-coordination-and-control": {
      "title": "Biology: Coordination and Control",
      "titleUr": "حیاتیات: رابطہ اور کنٹرول",
      "intro": "Study nervous coordination, neurons, reflex action, brain and spinal cord, endocrine glands, hormones, and sense organs.",
      "introUr": "nervous coordination، neurons، reflex action، brain اور spinal cord، endocrine glands، hormones اور sense organs سیکھیں۔",
      "focus": [
        "Coordination helps body parts work together and respond to stimuli",
        "Neurons transmit nerve impulses using dendrites, cell body, and axon",
        "Reflex action is fast, automatic, and protective",
        "Brain and spinal cord form the central nervous system",
        "Endocrine glands release hormones that travel in blood and produce slower, longer-lasting effects"
      ],
      "focusUr": [
        "Coordination body parts کو مل کر کام کرنے اور stimuli کا response دینے میں مدد دیتی ہے",
        "Neurons dendrites، cell body اور axon سے nerve impulses transmit کرتے ہیں",
        "Reflex action fast، automatic اور protective ہوتا ہے",
        "Brain اور spinal cord central nervous system بناتے ہیں",
        "Endocrine glands hormones release کرتے ہیں جو blood میں سفر کر کے slower مگر long-lasting effects دیتے ہیں"
      ],
      "examples": [
        [
          "Neuron",
          "Specialized cell for nerve impulses."
        ],
        [
          "Reflex arc",
          "Receptor -> sensory neuron -> CNS -> motor neuron -> effector."
        ],
        [
          "Adrenaline",
          "Hormone for emergency response."
        ],
        [
          "Eye",
          "Sense organ for light."
        ]
      ],
      "examplesUr": [
        [
          "Neuron",
          "nerve impulses کے لیے specialized cell۔"
        ],
        [
          "Reflex arc",
          "Receptor -> sensory neuron -> CNS -> motor neuron -> effector۔"
        ],
        [
          "Adrenaline",
          "emergency response کا hormone۔"
        ],
        [
          "Eye",
          "light کے لیے sense organ۔"
        ]
      ],
      "quick": [
        "Nervous responses are usually faster than hormonal responses.",
        "Reflexes protect the body before conscious thinking.",
        "The spinal cord can coordinate simple reflexes.",
        "Hormones target specific organs even though they travel in blood."
      ],
      "quickUr": [
        "Nervous responses عموماً hormonal responses سے تیز ہوتے ہیں۔",
        "Reflexes conscious thinking سے پہلے body کو protect کرتے ہیں۔",
        "Spinal cord simple reflexes coordinate کر سکتا ہے۔",
        "Hormones blood میں travel کرتے ہوئے بھی specific organs کو target کرتے ہیں۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "The basic unit of nervous system is...",
          "options": [
            "neuron",
            "nephron",
            "alveolus"
          ],
          "answer": "neuron"
        },
        {
          "type": "select",
          "text": "Brain and spinal cord form the...",
          "options": [
            "central nervous system",
            "urinary system",
            "digestive system"
          ],
          "answer": "central nervous system"
        },
        {
          "type": "select",
          "text": "A reflex action is...",
          "options": [
            "fast and automatic",
            "slow and planned only",
            "always hormonal"
          ],
          "answer": "fast and automatic"
        },
        {
          "type": "radio",
          "text": "True or False: Hormones travel in blood.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Receptor detects a ___.",
          "answer": "stimulus"
        },
        {
          "type": "select",
          "text": "Which carries impulse from receptor to CNS?",
          "options": [
            "Sensory neuron",
            "Motor neuron only",
            "Hormone"
          ],
          "answer": "Sensory neuron"
        },
        {
          "type": "select",
          "text": "Which gland releases adrenaline?",
          "options": [
            "Adrenal gland",
            "Salivary gland",
            "Sweat gland"
          ],
          "answer": "Adrenal gland"
        },
        {
          "type": "radio",
          "text": "True or False: Nervous responses are usually slower than hormonal responses.",
          "options": [
            "True",
            "False"
          ],
          "answer": "False"
        },
        {
          "type": "text",
          "text": "Complete: The response organ in reflex arc is called an ___.",
          "answer": "effector"
        },
        {
          "type": "select",
          "text": "Which is a sense organ?",
          "options": [
            "Eye",
            "Kidney",
            "Liver"
          ],
          "answer": "Eye"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "Nervous system کی basic unit کیا ہے؟",
          "options": [
            "neuron",
            "nephron",
            "alveolus"
          ],
          "answer": "neuron"
        },
        {
          "type": "select",
          "text": "Brain اور spinal cord کیا بناتے ہیں؟",
          "options": [
            "central nervous system",
            "urinary system",
            "digestive system"
          ],
          "answer": "central nervous system"
        },
        {
          "type": "select",
          "text": "Reflex action کیسی ہوتی ہے؟",
          "options": [
            "fast اور automatic",
            "صرف slow اور planned",
            "ہمیشہ hormonal"
          ],
          "answer": "fast اور automatic"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Hormones blood میں travel کرتے ہیں۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Receptor ___ detect کرتا ہے۔",
          "answer": "stimulus"
        },
        {
          "type": "select",
          "text": "Receptor سے CNS تک impulse کون لے جاتا ہے؟",
          "options": [
            "Sensory neuron",
            "صرف Motor neuron",
            "Hormone"
          ],
          "answer": "Sensory neuron"
        },
        {
          "type": "select",
          "text": "Adrenaline کون سا gland release کرتا ہے؟",
          "options": [
            "Adrenal gland",
            "Salivary gland",
            "Sweat gland"
          ],
          "answer": "Adrenal gland"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Nervous responses عموماً hormonal responses سے slow ہوتے ہیں۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "غلط"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Reflex arc میں response organ کو ___ کہتے ہیں۔",
          "answer": "effector"
        },
        {
          "type": "select",
          "text": "Sense organ کون سا ہے؟",
          "options": [
            "Eye",
            "Kidney",
            "Liver"
          ],
          "answer": "Eye"
        }
      ]
    },
    "biology-support-and-movement": {
      "title": "Biology: Support and Movement",
      "titleUr": "حیاتیات: سہارا اور حرکت",
      "intro": "Learn human skeleton, bones and joints, muscles, plant movements, and disorders of skeleton and muscles.",
      "introUr": "human skeleton، bones اور joints، muscles، plant movements اور skeleton/muscles کے disorders سیکھیں۔",
      "focus": [
        "Skeleton supports body, protects organs, helps movement, forms blood cells, and stores minerals",
        "Joints allow movement where bones meet; fixed, slightly movable, and freely movable joints differ",
        "Muscles contract and work in antagonistic pairs to move bones",
        "Plants show movements such as tropisms and nastic responses",
        "Disorders include arthritis, osteoporosis, fractures, muscle cramps, and sprains"
      ],
      "focusUr": [
        "Skeleton body کو support، organs کو protect، movement میں help، blood cells بناتا اور minerals store کرتا ہے",
        "Joints bones کے ملنے کی جگہ movement allow کرتے ہیں؛ fixed، slightly movable اور freely movable joints مختلف ہیں",
        "Muscles contract کر کے antagonistic pairs میں bones move کرتے ہیں",
        "Plants tropisms اور nastic responses جیسی movements دکھاتے ہیں",
        "Disorders میں arthritis، osteoporosis، fractures، muscle cramps اور sprains شامل ہیں"
      ],
      "examples": [
        [
          "Ball-and-socket joint",
          "Shoulder and hip."
        ],
        [
          "Hinge joint",
          "Elbow and knee."
        ],
        [
          "Antagonistic muscles",
          "Biceps and triceps."
        ],
        [
          "Phototropism",
          "Plant shoot grows toward light."
        ]
      ],
      "examplesUr": [
        [
          "Ball-and-socket joint",
          "shoulder اور hip۔"
        ],
        [
          "Hinge joint",
          "elbow اور knee۔"
        ],
        [
          "Antagonistic muscles",
          "biceps اور triceps۔"
        ],
        [
          "Phototropism",
          "plant shoot light کی طرف grow کرتا ہے۔"
        ]
      ],
      "quick": [
        "Bones cannot move by themselves; muscles pull them.",
        "Ligaments connect bone to bone; tendons connect muscle to bone.",
        "Calcium and vitamin D help bone health.",
        "Plant movement may be growth movement or quick response to stimulus."
      ],
      "quickUr": [
        "Bones خود move نہیں کرتے؛ muscles انہیں pull کرتے ہیں۔",
        "Ligaments bone to bone connect کرتے ہیں؛ tendons muscle to bone connect کرتے ہیں۔",
        "Calcium اور vitamin D bone health میں مدد دیتے ہیں۔",
        "Plant movement growth movement یا stimulus response ہو سکتی ہے۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "The skeleton protects organs and provides...",
          "options": [
            "support",
            "urine",
            "enzymes only"
          ],
          "answer": "support"
        },
        {
          "type": "select",
          "text": "A hinge joint is found at the...",
          "options": [
            "elbow",
            "shoulder only",
            "skull sutures"
          ],
          "answer": "elbow"
        },
        {
          "type": "select",
          "text": "Biceps and triceps are...",
          "options": [
            "antagonistic muscles",
            "bones",
            "hormones"
          ],
          "answer": "antagonistic muscles"
        },
        {
          "type": "radio",
          "text": "True or False: Tendons connect muscle to bone.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Ligaments connect bone to ___.",
          "answer": "bone"
        },
        {
          "type": "select",
          "text": "Phototropism is growth response to...",
          "options": [
            "light",
            "sound",
            "gravity only always"
          ],
          "answer": "light"
        },
        {
          "type": "select",
          "text": "Which disorder weakens bones?",
          "options": [
            "Osteoporosis",
            "Bronchitis",
            "Diabetes only"
          ],
          "answer": "Osteoporosis"
        },
        {
          "type": "radio",
          "text": "True or False: Muscles usually push bones directly.",
          "options": [
            "True",
            "False"
          ],
          "answer": "False"
        },
        {
          "type": "text",
          "text": "Complete: Calcium and vitamin D support bone ___.",
          "answer": "health"
        },
        {
          "type": "select",
          "text": "Which joint allows movement in many directions?",
          "options": [
            "Ball-and-socket joint",
            "Fixed joint",
            "Hinge joint only"
          ],
          "answer": "Ball-and-socket joint"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "Skeleton organs کو protect کرتا اور کیا provide کرتا ہے؟",
          "options": [
            "support",
            "urine",
            "صرف enzymes"
          ],
          "answer": "support"
        },
        {
          "type": "select",
          "text": "Hinge joint کہاں ملتا ہے؟",
          "options": [
            "elbow",
            "صرف shoulder",
            "skull sutures"
          ],
          "answer": "elbow"
        },
        {
          "type": "select",
          "text": "Biceps اور triceps کیا ہیں؟",
          "options": [
            "antagonistic muscles",
            "bones",
            "hormones"
          ],
          "answer": "antagonistic muscles"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Tendons muscle کو bone سے connect کرتے ہیں۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Ligaments bone کو ___ سے connect کرتے ہیں۔",
          "answer": "bone"
        },
        {
          "type": "select",
          "text": "Phototropism کس stimulus کی growth response ہے؟",
          "options": [
            "light",
            "sound",
            "ہمیشہ صرف gravity"
          ],
          "answer": "light"
        },
        {
          "type": "select",
          "text": "کون سا disorder bones کو weak کرتا ہے؟",
          "options": [
            "Osteoporosis",
            "Bronchitis",
            "صرف Diabetes"
          ],
          "answer": "Osteoporosis"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Muscles عموماً bones کو directly push کرتے ہیں۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "غلط"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Calcium اور vitamin D bone ___ support کرتے ہیں۔",
          "answer": "health"
        },
        {
          "type": "select",
          "text": "کون سا joint کئی directions میں movement allow کرتا ہے؟",
          "options": [
            "Ball-and-socket joint",
            "Fixed joint",
            "صرف Hinge joint"
          ],
          "answer": "Ball-and-socket joint"
        }
      ]
    },
    "biology-reproduction": {
      "title": "Biology: Reproduction",
      "titleUr": "حیاتیات: تولید",
      "intro": "Study asexual reproduction, sexual reproduction in plants, age-appropriate human reproductive system, fertilization, development, and reproductive health.",
      "introUr": "asexual reproduction، plants میں sexual reproduction، مناسب انداز میں human reproductive system، fertilization، development اور reproductive health سیکھیں۔",
      "focus": [
        "Asexual reproduction produces offspring from one parent and usually gives genetically identical offspring",
        "Sexual reproduction involves gametes, fertilization, and genetic variation",
        "Flower parts support pollination, fertilization, seed formation, and fruit formation",
        "Human reproduction involves specialized organs and responsible reproductive health",
        "Development includes growth and differentiation after fertilization"
      ],
      "focusUr": [
        "Asexual reproduction ایک parent سے offspring بناتی ہے اور عموماً genetically identical offspring دیتی ہے",
        "Sexual reproduction gametes، fertilization اور genetic variation involve کرتی ہے",
        "Flower parts pollination، fertilization، seed formation اور fruit formation میں مدد دیتے ہیں",
        "Human reproduction specialized organs اور responsible reproductive health involve کرتی ہے",
        "Development fertilization کے بعد growth اور differentiation شامل کرتا ہے"
      ],
      "examples": [
        [
          "Asexual reproduction",
          "Binary fission, budding, vegetative propagation."
        ],
        [
          "Pollination",
          "Transfer of pollen to stigma."
        ],
        [
          "Fertilization",
          "Fusion of male and female gametes."
        ],
        [
          "Reproductive health",
          "Hygiene, accurate knowledge, respect, and medical care when needed."
        ]
      ],
      "examplesUr": [
        [
          "Asexual reproduction",
          "binary fission، budding، vegetative propagation۔"
        ],
        [
          "Pollination",
          "pollen کا stigma تک transfer۔"
        ],
        [
          "Fertilization",
          "male اور female gametes کا fusion۔"
        ],
        [
          "Reproductive health",
          "hygiene، accurate knowledge، respect اور ضرورت پر medical care۔"
        ]
      ],
      "quick": [
        "Asexual reproduction is fast but creates less variation.",
        "Sexual reproduction increases variation.",
        "After fertilization in plants, ovule becomes seed and ovary becomes fruit.",
        "Reproductive topics should be studied respectfully and scientifically."
      ],
      "quickUr": [
        "Asexual reproduction fast ہے مگر variation کم بناتی ہے۔",
        "Sexual reproduction variation بڑھاتی ہے۔",
        "Plants میں fertilization کے بعد ovule seed اور ovary fruit بنتی ہے۔",
        "Reproductive topics کو respectfully اور scientifically پڑھنا چاہیے۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "Asexual reproduction usually needs...",
          "options": [
            "one parent",
            "two parents always",
            "no cells"
          ],
          "answer": "one parent"
        },
        {
          "type": "select",
          "text": "Fusion of gametes is called...",
          "options": [
            "fertilization",
            "pollination",
            "germination only"
          ],
          "answer": "fertilization"
        },
        {
          "type": "select",
          "text": "Transfer of pollen to stigma is...",
          "options": [
            "pollination",
            "fertilization",
            "development"
          ],
          "answer": "pollination"
        },
        {
          "type": "radio",
          "text": "True or False: Sexual reproduction increases genetic variation.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: After fertilization, ovule becomes ___.",
          "answer": "seed"
        },
        {
          "type": "select",
          "text": "Which is asexual reproduction?",
          "options": [
            "Budding",
            "Fertilization only",
            "Pollination only"
          ],
          "answer": "Budding"
        },
        {
          "type": "select",
          "text": "After fertilization, ovary becomes...",
          "options": [
            "fruit",
            "root",
            "leaf"
          ],
          "answer": "fruit"
        },
        {
          "type": "radio",
          "text": "True or False: Asexual offspring are often genetically identical to parent.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Male and female reproductive cells are called ___.",
          "answer": "gametes"
        },
        {
          "type": "select",
          "text": "Which supports reproductive health?",
          "options": [
            "Hygiene and accurate knowledge",
            "Ignoring symptoms",
            "Unsafe myths"
          ],
          "answer": "Hygiene and accurate knowledge"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "Asexual reproduction کو عموماً کتنے parents چاہیے؟",
          "options": [
            "one parent",
            "ہمیشہ two parents",
            "no cells"
          ],
          "answer": "one parent"
        },
        {
          "type": "select",
          "text": "Gametes کے fusion کو کیا کہتے ہیں؟",
          "options": [
            "fertilization",
            "pollination",
            "صرف germination"
          ],
          "answer": "fertilization"
        },
        {
          "type": "select",
          "text": "Pollen کا stigma تک transfer کیا ہے؟",
          "options": [
            "pollination",
            "fertilization",
            "development"
          ],
          "answer": "pollination"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Sexual reproduction genetic variation بڑھاتی ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Fertilization کے بعد ovule ___ بنتا ہے۔",
          "answer": "seed"
        },
        {
          "type": "select",
          "text": "Asexual reproduction کون سی ہے؟",
          "options": [
            "Budding",
            "صرف Fertilization",
            "صرف Pollination"
          ],
          "answer": "Budding"
        },
        {
          "type": "select",
          "text": "Fertilization کے بعد ovary کیا بنتی ہے؟",
          "options": [
            "fruit",
            "root",
            "leaf"
          ],
          "answer": "fruit"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Asexual offspring عموماً parent جیسے genetically identical ہوتے ہیں۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Male اور female reproductive cells کو ___ کہتے ہیں۔",
          "answer": "gametes"
        },
        {
          "type": "select",
          "text": "Reproductive health میں کیا مدد دیتا ہے؟",
          "options": [
            "Hygiene اور accurate knowledge",
            "Symptoms ignore کرنا",
            "unsafe myths"
          ],
          "answer": "Hygiene اور accurate knowledge"
        }
      ]
    },
    "biology-inheritance": {
      "title": "Biology: Inheritance",
      "titleUr": "حیاتیات: وراثت",
      "intro": "Learn chromosomes and genes, DNA introduction, Mendel’s work, dominant and recessive traits, variation, and genetic disorders introduction.",
      "introUr": "chromosomes اور genes، DNA کا تعارف، Mendel کا کام، dominant اور recessive traits، variation اور genetic disorders کا تعارف سیکھیں۔",
      "focus": [
        "DNA carries hereditary instructions and genes are sections of DNA",
        "Chromosomes carry genes and are found in the nucleus",
        "Mendel studied inheritance using pea plants",
        "Dominant alleles can mask recessive alleles in heterozygous condition",
        "Variation results from genetic differences and environmental influences"
      ],
      "focusUr": [
        "DNA hereditary instructions رکھتا ہے اور genes DNA کے sections ہیں",
        "Chromosomes genes carry کرتے ہیں اور nucleus میں ہوتے ہیں",
        "Mendel نے pea plants سے inheritance study کی",
        "Dominant alleles heterozygous condition میں recessive alleles کو mask کر سکتے ہیں",
        "Variation genetic differences اور environmental influences سے بنتی ہے"
      ],
      "examples": [
        [
          "Gene",
          "A section of DNA controlling a trait."
        ],
        [
          "Dominant trait",
          "Expressed when dominant allele is present."
        ],
        [
          "Recessive trait",
          "Expressed when both alleles are recessive."
        ],
        [
          "Punnett square",
          "Tool for predicting inheritance ratios."
        ]
      ],
      "examplesUr": [
        [
          "Gene",
          "DNA کا section جو trait control کرتا ہے۔"
        ],
        [
          "Dominant trait",
          "dominant allele present ہو تو express ہوتا ہے۔"
        ],
        [
          "Recessive trait",
          "دونوں alleles recessive ہوں تو express ہوتا ہے۔"
        ],
        [
          "Punnett square",
          "inheritance ratios predict کرنے کا tool۔"
        ]
      ],
      "quick": [
        "Use capital letters for dominant alleles and small letters for recessive alleles.",
        "Genotype is genetic makeup; phenotype is visible expression.",
        "Mendel’s work showed predictable inheritance patterns.",
        "Genetic disorders may result from changes in genes or chromosomes."
      ],
      "quickUr": [
        "Dominant alleles کے لیے capital letters اور recessive کے لیے small letters استعمال کریں۔",
        "Genotype genetic makeup ہے؛ phenotype visible expression ہے۔",
        "Mendel کے کام نے predictable inheritance patterns دکھائے۔",
        "Genetic disorders genes یا chromosomes میں changes سے ہو سکتے ہیں۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "A gene is a section of...",
          "options": [
            "DNA",
            "protein only",
            "cell wall"
          ],
          "answer": "DNA"
        },
        {
          "type": "select",
          "text": "Chromosomes are found in the...",
          "options": [
            "nucleus",
            "cell wall",
            "vacuole only"
          ],
          "answer": "nucleus"
        },
        {
          "type": "select",
          "text": "Mendel worked mainly with...",
          "options": [
            "pea plants",
            "mice only",
            "bacteria only"
          ],
          "answer": "pea plants"
        },
        {
          "type": "radio",
          "text": "True or False: Dominant alleles can mask recessive alleles.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Visible expression of a trait is ___.",
          "answer": "phenotype"
        },
        {
          "type": "select",
          "text": "Genetic makeup is called...",
          "options": [
            "genotype",
            "phenotype",
            "ecosystem"
          ],
          "answer": "genotype"
        },
        {
          "type": "select",
          "text": "Two recessive alleles are needed to show a...",
          "options": [
            "recessive trait",
            "dominant trait always",
            "hormone"
          ],
          "answer": "recessive trait"
        },
        {
          "type": "radio",
          "text": "True or False: Variation can be affected by genes and environment.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: A Punnett square predicts inheritance ___.",
          "answer": "ratios"
        },
        {
          "type": "select",
          "text": "Which can cause genetic disorders?",
          "options": [
            "Gene changes",
            "Good sleep only",
            "Balanced diet only"
          ],
          "answer": "Gene changes"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "Gene کس کا section ہے؟",
          "options": [
            "DNA",
            "صرف protein",
            "cell wall"
          ],
          "answer": "DNA"
        },
        {
          "type": "select",
          "text": "Chromosomes کہاں ہوتے ہیں؟",
          "options": [
            "nucleus",
            "cell wall",
            "صرف vacuole"
          ],
          "answer": "nucleus"
        },
        {
          "type": "select",
          "text": "Mendel نے زیادہ تر کس پر کام کیا؟",
          "options": [
            "pea plants",
            "صرف mice",
            "صرف bacteria"
          ],
          "answer": "pea plants"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Dominant alleles recessive alleles کو mask کر سکتے ہیں۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Trait کی visible expression ___ ہے۔",
          "answer": "phenotype"
        },
        {
          "type": "select",
          "text": "Genetic makeup کو کیا کہتے ہیں؟",
          "options": [
            "genotype",
            "phenotype",
            "ecosystem"
          ],
          "answer": "genotype"
        },
        {
          "type": "select",
          "text": "Recessive trait ظاہر کرنے کے لیے کیا چاہیے؟",
          "options": [
            "two recessive alleles",
            "ہمیشہ dominant trait",
            "hormone"
          ],
          "answer": "two recessive alleles"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Variation genes اور environment سے affect ہو سکتی ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Punnett square inheritance ___ predict کرتا ہے۔",
          "answer": "ratios"
        },
        {
          "type": "select",
          "text": "Genetic disorders کس سے ہو سکتے ہیں؟",
          "options": [
            "Gene changes",
            "صرف اچھی نیند",
            "صرف balanced diet"
          ],
          "answer": "Gene changes"
        }
      ]
    },
    "biology-man-and-his-environment": {
      "title": "Biology: Man and His Environment",
      "titleUr": "حیاتیات: انسان اور اس کا ماحول",
      "intro": "Study ecosystems, food chains and food webs, energy flow, pollution, conservation, and global environmental issues.",
      "introUr": "ecosystem، food chains اور food webs، energy flow، pollution، conservation اور global environmental issues سیکھیں۔",
      "focus": [
        "Ecosystems include living communities and non-living environmental factors",
        "Food chains and webs show feeding relationships and energy flow",
        "Energy decreases at each trophic level due to heat loss and life processes",
        "Pollution affects air, water, soil, biodiversity, and human health",
        "Conservation protects resources, habitats, species, and ecological balance"
      ],
      "focusUr": [
        "Ecosystems living communities اور non-living environmental factors پر مشتمل ہوتے ہیں",
        "Food chains اور webs feeding relationships اور energy flow دکھاتے ہیں",
        "ہر trophic level پر heat loss اور life processes کی وجہ سے energy کم ہوتی ہے",
        "Pollution air، water، soil، biodiversity اور human health کو affect کرتی ہے",
        "Conservation resources، habitats، species اور ecological balance کو protect کرتی ہے"
      ],
      "examples": [
        [
          "Food chain",
          "grass -> rabbit -> fox."
        ],
        [
          "Trophic level",
          "Position in a food chain."
        ],
        [
          "Pollution",
          "Smoke, sewage, pesticides, plastic waste."
        ],
        [
          "Conservation",
          "Tree plantation, protected areas, recycling."
        ]
      ],
      "examplesUr": [
        [
          "Food chain",
          "grass -> rabbit -> fox۔"
        ],
        [
          "Trophic level",
          "food chain میں position۔"
        ],
        [
          "Pollution",
          "smoke، sewage، pesticides، plastic waste۔"
        ],
        [
          "Conservation",
          "tree plantation، protected areas، recycling۔"
        ]
      ],
      "quick": [
        "Arrows in food chains show direction of energy flow.",
        "Food webs are more realistic than single food chains.",
        "Reduce, reuse, recycle, and restore habitats support conservation.",
        "Global issues include climate change, deforestation, ozone depletion, and biodiversity loss."
      ],
      "quickUr": [
        "Food chains کے arrows energy flow کی direction دکھاتے ہیں۔",
        "Food webs single food chains سے زیادہ realistic ہیں۔",
        "Reduce، reuse، recycle اور habitats restore کرنا conservation میں مدد دیتا ہے۔",
        "Global issues میں climate change، deforestation، ozone depletion اور biodiversity loss شامل ہیں۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "Arrows in food chains show flow of...",
          "options": [
            "energy",
            "water only",
            "genes"
          ],
          "answer": "energy"
        },
        {
          "type": "select",
          "text": "A green plant is usually a...",
          "options": [
            "producer",
            "primary consumer",
            "decomposer only"
          ],
          "answer": "producer"
        },
        {
          "type": "select",
          "text": "Position in a food chain is called...",
          "options": [
            "trophic level",
            "genotype",
            "reflex arc"
          ],
          "answer": "trophic level"
        },
        {
          "type": "radio",
          "text": "True or False: Energy usually decreases at higher trophic levels.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: A network of food chains is a food ___.",
          "answer": "web"
        },
        {
          "type": "select",
          "text": "Which is air pollution?",
          "options": [
            "Smoke",
            "Clean oxygen",
            "Pure rainwater"
          ],
          "answer": "Smoke"
        },
        {
          "type": "select",
          "text": "Which action supports conservation?",
          "options": [
            "Recycling",
            "Overhunting",
            "Deforestation"
          ],
          "answer": "Recycling"
        },
        {
          "type": "radio",
          "text": "True or False: Food webs show multiple feeding links.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Cutting many trees is called ___.",
          "answer": "deforestation"
        },
        {
          "type": "select",
          "text": "Which is a global environmental issue?",
          "options": [
            "Climate change",
            "Mitosis",
            "Digestion"
          ],
          "answer": "Climate change"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "Food chains کے arrows کس کا flow دکھاتے ہیں؟",
          "options": [
            "energy",
            "صرف water",
            "genes"
          ],
          "answer": "energy"
        },
        {
          "type": "select",
          "text": "Green plant عموماً کیا ہے؟",
          "options": [
            "producer",
            "primary consumer",
            "صرف decomposer"
          ],
          "answer": "producer"
        },
        {
          "type": "select",
          "text": "Food chain میں position کو کیا کہتے ہیں؟",
          "options": [
            "trophic level",
            "genotype",
            "reflex arc"
          ],
          "answer": "trophic level"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Higher trophic levels پر energy عموماً کم ہوتی ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Food chains کا network food ___ ہے۔",
          "answer": "web"
        },
        {
          "type": "select",
          "text": "Air pollution کون سی ہے؟",
          "options": [
            "Smoke",
            "Clean oxygen",
            "Pure rainwater"
          ],
          "answer": "Smoke"
        },
        {
          "type": "select",
          "text": "Conservation میں کون سا action مدد دیتا ہے؟",
          "options": [
            "Recycling",
            "Overhunting",
            "Deforestation"
          ],
          "answer": "Recycling"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Food webs multiple feeding links دکھاتے ہیں۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: بہت سے trees کا کاٹنا ___ کہلاتا ہے۔",
          "answer": "deforestation"
        },
        {
          "type": "select",
          "text": "Global environmental issue کون سا ہے؟",
          "options": [
            "Climate change",
            "Mitosis",
            "Digestion"
          ],
          "answer": "Climate change"
        }
      ]
    },
    "biology-biotechnology": {
      "title": "Biology: Biotechnology",
      "titleUr": "حیاتیات: حیاتی ٹیکنالوجی",
      "intro": "Learn fermentation, genetic engineering introduction, biotechnology in medicine and agriculture, and ethical issues introduction.",
      "introUr": "fermentation، genetic engineering کا تعارف، medicine اور agriculture میں biotechnology، اور ethical issues کا تعارف سیکھیں۔",
      "focus": [
        "Biotechnology uses organisms, cells, or biological molecules to make useful products",
        "Fermentation uses microorganisms to produce foods, acids, alcohol, and other products",
        "Genetic engineering changes genetic material to produce desired traits or products",
        "Medical biotechnology includes vaccines, insulin, diagnostic tests, and antibiotics production",
        "Agricultural biotechnology can improve yield, pest resistance, nutrition, and stress tolerance but needs ethical and safety review"
      ],
      "focusUr": [
        "Biotechnology organisms، cells یا biological molecules سے useful products بناتی ہے",
        "Fermentation microorganisms سے foods، acids، alcohol اور other products بناتی ہے",
        "Genetic engineering genetic material بدل کر desired traits/products پیدا کرتی ہے",
        "Medical biotechnology میں vaccines، insulin، diagnostic tests اور antibiotics production شامل ہیں",
        "Agricultural biotechnology yield، pest resistance، nutrition اور stress tolerance بہتر کر سکتی ہے مگر ethical/safety review چاہیے"
      ],
      "examples": [
        [
          "Fermentation",
          "Yeast converts sugar into alcohol and carbon dioxide."
        ],
        [
          "Insulin production",
          "Engineered bacteria can produce human insulin."
        ],
        [
          "Biotechnology in food",
          "Yogurt and cheese production."
        ],
        [
          "Ethical issue",
          "Safety, fairness, labeling, and environmental impact."
        ]
      ],
      "examplesUr": [
        [
          "Fermentation",
          "Yeast sugar کو alcohol اور carbon dioxide میں بدلتا ہے۔"
        ],
        [
          "Insulin production",
          "Engineered bacteria human insulin بنا سکتے ہیں۔"
        ],
        [
          "Food biotechnology",
          "yogurt اور cheese production۔"
        ],
        [
          "Ethical issue",
          "safety، fairness، labeling اور environmental impact۔"
        ]
      ],
      "quick": [
        "Fermentation can occur without oxygen.",
        "Not every biotechnology product is genetic engineering.",
        "Biotechnology decisions should consider benefit, risk, environment, and ethics.",
        "Sterile technique reduces contamination in biotechnology processes."
      ],
      "quickUr": [
        "Fermentation oxygen کے بغیر ہو سکتی ہے۔",
        "ہر biotechnology product genetic engineering نہیں ہوتا۔",
        "Biotechnology decisions میں benefit، risk، environment اور ethics دیکھنے چاہییں۔",
        "Sterile technique contamination کم کرتی ہے۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "Biotechnology uses living organisms or cells to make...",
          "options": [
            "useful products",
            "only rocks",
            "only heat"
          ],
          "answer": "useful products"
        },
        {
          "type": "select",
          "text": "Fermentation commonly uses...",
          "options": [
            "microorganisms",
            "stones",
            "metals only"
          ],
          "answer": "microorganisms"
        },
        {
          "type": "select",
          "text": "Yeast fermentation can produce carbon dioxide and...",
          "options": [
            "alcohol",
            "oxygen only",
            "starch only"
          ],
          "answer": "alcohol"
        },
        {
          "type": "radio",
          "text": "True or False: Engineered bacteria can help produce insulin.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Changing genetic material is genetic ___.",
          "answer": "engineering"
        },
        {
          "type": "select",
          "text": "Which is a food biotechnology product?",
          "options": [
            "Yogurt",
            "Iron nail",
            "Glass rod"
          ],
          "answer": "Yogurt"
        },
        {
          "type": "select",
          "text": "Which is an ethical concern?",
          "options": [
            "Environmental impact",
            "Correct spelling only",
            "No safety review"
          ],
          "answer": "Environmental impact"
        },
        {
          "type": "radio",
          "text": "True or False: Fermentation always requires oxygen.",
          "options": [
            "True",
            "False"
          ],
          "answer": "False"
        },
        {
          "type": "text",
          "text": "Complete: Sterile technique reduces ___.",
          "answer": "contamination"
        },
        {
          "type": "select",
          "text": "Which is a medical biotechnology use?",
          "options": [
            "Vaccine production",
            "Cutting paper",
            "Measuring length"
          ],
          "answer": "Vaccine production"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "Biotechnology living organisms یا cells سے کیا بناتی ہے؟",
          "options": [
            "useful products",
            "صرف rocks",
            "صرف heat"
          ],
          "answer": "useful products"
        },
        {
          "type": "select",
          "text": "Fermentation عموماً کیا استعمال کرتی ہے؟",
          "options": [
            "microorganisms",
            "stones",
            "صرف metals"
          ],
          "answer": "microorganisms"
        },
        {
          "type": "select",
          "text": "Yeast fermentation carbon dioxide اور کیا بنا سکتی ہے؟",
          "options": [
            "alcohol",
            "صرف oxygen",
            "صرف starch"
          ],
          "answer": "alcohol"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Engineered bacteria insulin بنانے میں مدد دے سکتے ہیں۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Genetic material بدلنا genetic ___ ہے۔",
          "answer": "engineering"
        },
        {
          "type": "select",
          "text": "Food biotechnology product کون سا ہے؟",
          "options": [
            "Yogurt",
            "Iron nail",
            "Glass rod"
          ],
          "answer": "Yogurt"
        },
        {
          "type": "select",
          "text": "Ethical concern کون سی ہے؟",
          "options": [
            "Environmental impact",
            "صرف correct spelling",
            "safety review نہ ہونا"
          ],
          "answer": "Environmental impact"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Fermentation ہمیشہ oxygen require کرتی ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "غلط"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Sterile technique ___ کم کرتی ہے۔",
          "answer": "contamination"
        },
        {
          "type": "select",
          "text": "Medical biotechnology use کون سا ہے؟",
          "options": [
            "Vaccine production",
            "paper cutting",
            "length measuring"
          ],
          "answer": "Vaccine production"
        }
      ]
    },
    "biology-pharmacology": {
      "title": "Biology: Pharmacology",
      "titleUr": "حیاتیات: علم الادویات",
      "intro": "Study drugs and medicines, antibiotics, vaccines, painkillers, sedatives, drug abuse, antibiotic resistance introduction, and safe medicine use.",
      "introUr": "drugs اور medicines، antibiotics، vaccines، painkillers، sedatives، drug abuse، antibiotic resistance کا تعارف اور medicines کا safe use سیکھیں۔",
      "focus": [
        "Pharmacology studies drugs, their effects, uses, doses, and safety",
        "Antibiotics act against bacteria and must be used responsibly",
        "Vaccines prepare the immune system to prevent certain diseases",
        "Painkillers reduce pain; sedatives slow nervous activity and can be risky if misused",
        "Drug abuse harms body, mind, family, education, and society"
      ],
      "focusUr": [
        "Pharmacology drugs، effects، uses، doses اور safety کا مطالعہ ہے",
        "Antibiotics bacteria کے خلاف act کرتے ہیں اور responsibly استعمال ہونے چاہییں",
        "Vaccines immune system کو certain diseases سے بچنے کے لیے prepare کرتی ہیں",
        "Painkillers pain کم کرتے ہیں؛ sedatives nervous activity slow کرتے ہیں اور misuse میں risky ہیں",
        "Drug abuse body، mind، family، education اور society کو harm کرتا ہے"
      ],
      "examples": [
        [
          "Antibiotic",
          "Used for bacterial infections when prescribed."
        ],
        [
          "Vaccine",
          "Stimulates immune memory safely."
        ],
        [
          "Painkiller",
          "Medicine that reduces pain."
        ],
        [
          "Antibiotic resistance",
          "Bacteria survive an antibiotic and multiply."
        ]
      ],
      "examplesUr": [
        [
          "Antibiotic",
          "Doctor کے prescription پر bacterial infections کے لیے۔"
        ],
        [
          "Vaccine",
          "immune memory کو safely stimulate کرتی ہے۔"
        ],
        [
          "Painkiller",
          "pain کم کرنے والی medicine۔"
        ],
        [
          "Antibiotic resistance",
          "bacteria antibiotic سے بچ کر multiply کرتے ہیں۔"
        ]
      ],
      "quick": [
        "Never self-medicate with antibiotics.",
        "Complete prescribed courses unless doctor advises otherwise.",
        "Read labels and follow dose timing.",
        "Avoid sharing medicines; the same medicine may not be safe for everyone."
      ],
      "quickUr": [
        "Antibiotics خود سے استعمال نہ کریں۔",
        "Doctor کے کہنے تک prescribed course complete کریں۔",
        "Labels پڑھیں اور dose timing follow کریں۔",
        "Medicines share نہ کریں؛ same medicine ہر کسی کے لیے safe نہیں ہو سکتی۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "Pharmacology is the study of...",
          "options": [
            "drugs and their effects",
            "rocks only",
            "weather only"
          ],
          "answer": "drugs and their effects"
        },
        {
          "type": "select",
          "text": "Antibiotics are used against many...",
          "options": [
            "bacteria",
            "viruses only",
            "vitamins"
          ],
          "answer": "bacteria"
        },
        {
          "type": "select",
          "text": "Vaccines prepare the...",
          "options": [
            "immune system",
            "digestive enzymes only",
            "skeleton only"
          ],
          "answer": "immune system"
        },
        {
          "type": "radio",
          "text": "True or False: Antibiotics should be used responsibly.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Bacteria surviving an antibiotic may cause antibiotic ___.",
          "answer": "resistance"
        },
        {
          "type": "select",
          "text": "Painkillers are used to reduce...",
          "options": [
            "pain",
            "oxygen",
            "genes"
          ],
          "answer": "pain"
        },
        {
          "type": "select",
          "text": "Sedatives mainly affect the...",
          "options": [
            "nervous system",
            "xylem",
            "alveoli only"
          ],
          "answer": "nervous system"
        },
        {
          "type": "radio",
          "text": "True or False: Sharing prescription medicines is always safe.",
          "options": [
            "True",
            "False"
          ],
          "answer": "False"
        },
        {
          "type": "text",
          "text": "Complete: Safe medicine use includes following the correct ___.",
          "answer": "dose"
        },
        {
          "type": "select",
          "text": "Which is drug abuse prevention?",
          "options": [
            "Awareness and refusing misuse",
            "Taking unknown pills",
            "Ignoring labels"
          ],
          "answer": "Awareness and refusing misuse"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "Pharmacology کس کا مطالعہ ہے؟",
          "options": [
            "drugs اور ان کے effects",
            "صرف rocks",
            "صرف weather"
          ],
          "answer": "drugs اور ان کے effects"
        },
        {
          "type": "select",
          "text": "Antibiotics عموماً کس کے خلاف استعمال ہوتے ہیں؟",
          "options": [
            "bacteria",
            "صرف viruses",
            "vitamins"
          ],
          "answer": "bacteria"
        },
        {
          "type": "select",
          "text": "Vaccines کس کو prepare کرتی ہیں؟",
          "options": [
            "immune system",
            "صرف digestive enzymes",
            "صرف skeleton"
          ],
          "answer": "immune system"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Antibiotics responsibly استعمال ہونے چاہییں۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Bacteria کا antibiotic سے بچ جانا antibiotic ___ کہلاتا ہے۔",
          "answer": "resistance"
        },
        {
          "type": "select",
          "text": "Painkillers کس کو کم کرنے کے لیے ہیں؟",
          "options": [
            "pain",
            "oxygen",
            "genes"
          ],
          "answer": "pain"
        },
        {
          "type": "select",
          "text": "Sedatives mainly کس system پر اثر کرتے ہیں؟",
          "options": [
            "nervous system",
            "xylem",
            "صرف alveoli"
          ],
          "answer": "nervous system"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Prescription medicines share کرنا ہمیشہ safe ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "غلط"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Safe medicine use میں correct ___ follow کرنا شامل ہے۔",
          "answer": "dose"
        },
        {
          "type": "select",
          "text": "Drug abuse prevention کون سی ہے؟",
          "options": [
            "Awareness اور misuse سے انکار",
            "unknown pills لینا",
            "labels ignore کرنا"
          ],
          "answer": "Awareness اور misuse سے انکار"
        }
      ]
    },
    "chemistry-chemical-equilibrium": {
      "title": "Chemistry: Chemical Equilibrium",
      "titleUr": "کیمیا: کیمیائی توازن",
      "intro": "Study reversible reactions, dynamic equilibrium, the law of mass action introduction, factors affecting equilibrium, and the Haber process as an industrial example. This chapter explains why some reactions do not go to completion and how chemists control conditions to improve yield.",
      "introUr": "reversible reactions، dynamic equilibrium، law of mass action کا تعارف، equilibrium کو متاثر کرنے والے عوامل، اور Haber process کو industrial example کے طور پر سیکھیں۔ یہ باب بتاتا ہے کہ کچھ reactions مکمل کیوں نہیں ہوتیں اور chemists yield بہتر کرنے کے لیے conditions کیسے control کرتے ہیں۔",
      "focus": [
        "Reversible reactions can proceed in forward and backward directions under suitable conditions",
        "Dynamic equilibrium occurs in a closed system when forward and reverse reaction rates become equal",
        "At equilibrium, concentrations stay constant, but particles continue reacting microscopically",
        "Temperature, pressure, concentration, and catalyst can affect equilibrium position or rate",
        "The Haber process balances yield, rate, pressure, temperature, and cost to make ammonia"
      ],
      "focusUr": [
        "Reversible reactions مناسب conditions میں forward اور backward دونوں directions میں ہو سکتی ہیں",
        "Dynamic equilibrium closed system میں تب ہوتا ہے جب forward اور reverse reaction rates برابر ہوں",
        "Equilibrium پر concentrations constant رہتی ہیں مگر microscopic level پر particles react کرتے رہتے ہیں",
        "Temperature، pressure، concentration اور catalyst equilibrium position یا rate کو affect کر سکتے ہیں",
        "Haber process ammonia بنانے کے لیے yield، rate، pressure، temperature اور cost کو balance کرتا ہے"
      ],
      "examples": [
        [
          "Reversible reaction",
          "N2 + 3H2 ⇌ 2NH3."
        ],
        [
          "Dynamic equilibrium",
          "Rate forward = rate reverse."
        ],
        [
          "Increasing pressure",
          "Favors side with fewer gas moles."
        ],
        [
          "Catalyst",
          "Speeds both forward and reverse reactions but does not change equilibrium position."
        ]
      ],
      "examplesUr": [
        [
          "Reversible reaction",
          "N2 + 3H2 ⇌ 2NH3۔"
        ],
        [
          "Dynamic equilibrium",
          "forward rate = reverse rate۔"
        ],
        [
          "Pressure بڑھانا",
          "fewer gas moles والی side favor ہوتی ہے۔"
        ],
        [
          "Catalyst",
          "forward اور reverse دونوں reactions speed کرتا ہے مگر equilibrium position نہیں بدلتا۔"
        ]
      ],
      "quick": [
        "Use a double arrow for reversible reactions.",
        "Equilibrium requires a closed system.",
        "A catalyst helps reach equilibrium faster.",
        "Industrial conditions are chosen as a compromise between yield, speed, safety, and cost."
      ],
      "quickUr": [
        "Reversible reactions کے لیے double arrow استعمال کریں۔",
        "Equilibrium کے لیے closed system چاہیے۔",
        "Catalyst equilibrium تک جلد پہنچنے میں مدد دیتا ہے۔",
        "Industrial conditions yield، speed، safety اور cost کے compromise سے چنی جاتی ہیں۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "A reversible reaction is shown by...",
          "options": [
            "double arrow",
            "one dot",
            "equal sign only"
          ],
          "answer": "double arrow"
        },
        {
          "type": "select",
          "text": "Dynamic equilibrium happens when forward and reverse rates are...",
          "options": [
            "equal",
            "zero",
            "unrelated"
          ],
          "answer": "equal"
        },
        {
          "type": "select",
          "text": "Equilibrium usually requires a...",
          "options": [
            "closed system",
            "broken container",
            "constant stirring only"
          ],
          "answer": "closed system"
        },
        {
          "type": "radio",
          "text": "True or False: At dynamic equilibrium, reactions stop completely.",
          "options": [
            "True",
            "False"
          ],
          "answer": "False"
        },
        {
          "type": "text",
          "text": "Complete: The Haber process produces ___.",
          "answer": "ammonia",
          "alt": [
            "NH3"
          ]
        },
        {
          "type": "select",
          "text": "Increasing pressure favors the side with...",
          "options": [
            "fewer gas moles",
            "more liquid only",
            "no particles"
          ],
          "answer": "fewer gas moles"
        },
        {
          "type": "select",
          "text": "A catalyst changes the...",
          "options": [
            "rate of reaction",
            "equilibrium position always",
            "formula of ammonia"
          ],
          "answer": "rate of reaction"
        },
        {
          "type": "radio",
          "text": "True or False: Concentrations remain constant at equilibrium.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Law of mass action relates reaction rate to active ___.",
          "answer": "masses",
          "alt": [
            "concentrations"
          ]
        },
        {
          "type": "select",
          "text": "Which factor can affect equilibrium?",
          "options": [
            "Temperature",
            "Paper color only",
            "Beaker label only"
          ],
          "answer": "Temperature"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "Reversible reaction کس arrow سے دکھائی جاتی ہے؟",
          "options": [
            "double arrow",
            "one dot",
            "صرف equal sign"
          ],
          "answer": "double arrow"
        },
        {
          "type": "select",
          "text": "Dynamic equilibrium کب ہوتا ہے؟",
          "options": [
            "forward اور reverse rates برابر ہوں",
            "rates zero ہوں",
            "rates unrelated ہوں"
          ],
          "answer": "forward اور reverse rates برابر ہوں"
        },
        {
          "type": "select",
          "text": "Equilibrium کے لیے عموماً کیا چاہیے؟",
          "options": [
            "closed system",
            "broken container",
            "صرف constant stirring"
          ],
          "answer": "closed system"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Dynamic equilibrium پر reactions مکمل رک جاتی ہیں۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "غلط"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Haber process ___ بناتا ہے۔",
          "answer": "ammonia",
          "alt": [
            "NH3"
          ]
        },
        {
          "type": "select",
          "text": "Pressure بڑھانے سے کون سی side favor ہوتی ہے؟",
          "options": [
            "fewer gas moles والی",
            "صرف more liquid والی",
            "no particles والی"
          ],
          "answer": "fewer gas moles والی"
        },
        {
          "type": "select",
          "text": "Catalyst کیا بدلتا ہے؟",
          "options": [
            "rate of reaction",
            "ہمیشہ equilibrium position",
            "ammonia کا formula"
          ],
          "answer": "rate of reaction"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Equilibrium پر concentrations constant رہتی ہیں۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Law of mass action reaction rate کو active ___ سے relate کرتا ہے۔",
          "answer": "masses",
          "alt": [
            "concentrations"
          ]
        },
        {
          "type": "select",
          "text": "Equilibrium کو کون affect کر سکتا ہے؟",
          "options": [
            "Temperature",
            "صرف paper color",
            "صرف beaker label"
          ],
          "answer": "Temperature"
        }
      ]
    },
    "chemistry-acids-bases-and-salts": {
      "title": "Chemistry: Acids, Bases, and Salts",
      "titleUr": "کیمیا: تیزاب، اساس اور نمکیات",
      "intro": "Learn properties of acids and bases, Arrhenius concept, pH scale, indicators, neutralization, salts, and common uses. The chapter connects household substances with ionic ideas and safe laboratory handling.",
      "introUr": "acids اور bases کی properties، Arrhenius concept، pH scale، indicators، neutralization، salts اور common uses سیکھیں۔ یہ باب household substances کو ionic ideas اور safe laboratory handling سے جوڑتا ہے۔",
      "focus": [
        "Arrhenius acids produce H+ ions in water, while Arrhenius bases produce OH- ions in water",
        "Acids often taste sour, turn blue litmus red, and react with metals/carbonates",
        "Bases feel slippery, turn red litmus blue, and neutralize acids",
        "pH scale shows acidity or basicity; pH below 7 is acidic, 7 neutral, above 7 basic",
        "Neutralization forms salt and water and is useful in medicine, agriculture, and industry"
      ],
      "focusUr": [
        "Arrhenius acids water میں H+ ions دیتے ہیں، جبکہ Arrhenius bases water میں OH- ions دیتے ہیں",
        "Acids عموماً sour ہوتے ہیں، blue litmus کو red کرتے ہیں، metals/carbonates سے react کرتے ہیں",
        "Bases slippery محسوس ہوتے ہیں، red litmus کو blue کرتے ہیں، acids کو neutralize کرتے ہیں",
        "pH scale acidity/basicity دکھاتی ہے؛ pH 7 سے کم acidic، 7 neutral، 7 سے زیادہ basic ہے",
        "Neutralization salt اور water بناتی ہے اور medicine، agriculture، industry میں useful ہے"
      ],
      "examples": [
        [
          "Acid",
          "HCl produces H+ in water."
        ],
        [
          "Base",
          "NaOH produces OH- in water."
        ],
        [
          "Neutralization",
          "HCl + NaOH -> NaCl + H2O."
        ],
        [
          "Indicator",
          "Litmus or methyl orange."
        ]
      ],
      "examplesUr": [
        [
          "Acid",
          "HCl water میں H+ بناتا ہے۔"
        ],
        [
          "Base",
          "NaOH water میں OH- بناتا ہے۔"
        ],
        [
          "Neutralization",
          "HCl + NaOH -> NaCl + H2O۔"
        ],
        [
          "Indicator",
          "Litmus یا methyl orange۔"
        ]
      ],
      "quick": [
        "Never taste lab acids or bases.",
        "Use pH numbers to classify substances.",
        "A salt is often formed when acid reacts with base.",
        "Indicators change color depending on acidity or basicity."
      ],
      "quickUr": [
        "Lab acids یا bases کبھی taste نہ کریں۔",
        "Substances classify کرنے کے لیے pH numbers استعمال کریں۔",
        "Acid اور base react کریں تو عموماً salt بنتا ہے۔",
        "Indicators acidity/basicity کے مطابق color change کرتے ہیں۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "According to Arrhenius, acids produce...",
          "options": [
            "H+ ions",
            "OH- ions only",
            "electrons only"
          ],
          "answer": "H+ ions"
        },
        {
          "type": "select",
          "text": "According to Arrhenius, bases produce...",
          "options": [
            "OH- ions",
            "H+ ions only",
            "neutrons"
          ],
          "answer": "OH- ions"
        },
        {
          "type": "select",
          "text": "pH below 7 is...",
          "options": [
            "acidic",
            "basic",
            "always neutral"
          ],
          "answer": "acidic"
        },
        {
          "type": "radio",
          "text": "True or False: Neutralization forms salt and water.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: HCl + NaOH -> NaCl + ___.",
          "answer": "H2O"
        },
        {
          "type": "select",
          "text": "Blue litmus turns red in...",
          "options": [
            "acid",
            "base",
            "salt only"
          ],
          "answer": "acid"
        },
        {
          "type": "select",
          "text": "Red litmus turns blue in...",
          "options": [
            "base",
            "acid",
            "pure water always"
          ],
          "answer": "base"
        },
        {
          "type": "radio",
          "text": "True or False: pH 7 is neutral.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: The pH scale measures acidity or ___.",
          "answer": "basicity"
        },
        {
          "type": "select",
          "text": "Which is a household acid?",
          "options": [
            "Vinegar",
            "Soap solution",
            "Baking soda solution"
          ],
          "answer": "Vinegar"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "Arrhenius کے مطابق acids کیا produce کرتے ہیں؟",
          "options": [
            "H+ ions",
            "صرف OH- ions",
            "صرف electrons"
          ],
          "answer": "H+ ions"
        },
        {
          "type": "select",
          "text": "Arrhenius کے مطابق bases کیا produce کرتے ہیں؟",
          "options": [
            "OH- ions",
            "صرف H+ ions",
            "neutrons"
          ],
          "answer": "OH- ions"
        },
        {
          "type": "select",
          "text": "pH 7 سے کم کیا ہے؟",
          "options": [
            "acidic",
            "basic",
            "ہمیشہ neutral"
          ],
          "answer": "acidic"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Neutralization salt اور water بناتی ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: HCl + NaOH -> NaCl + ___.",
          "answer": "H2O"
        },
        {
          "type": "select",
          "text": "Blue litmus acid میں کیا ہوتا ہے؟",
          "options": [
            "red",
            "blue",
            "white"
          ],
          "answer": "red"
        },
        {
          "type": "select",
          "text": "Red litmus base میں کیا ہوتا ہے؟",
          "options": [
            "blue",
            "red",
            "ہمیشہ colorless"
          ],
          "answer": "blue"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: pH 7 neutral ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: pH scale acidity یا ___ measure کرتی ہے۔",
          "answer": "basicity"
        },
        {
          "type": "select",
          "text": "Household acid کون سا ہے؟",
          "options": [
            "Vinegar",
            "Soap solution",
            "Baking soda solution"
          ],
          "answer": "Vinegar"
        }
      ]
    },
    "chemistry-organic-chemistry": {
      "title": "Chemistry: Organic Chemistry",
      "titleUr": "کیمیا: نامیاتی کیمیا",
      "intro": "Study carbon compounds, hydrocarbons, alkanes and alkenes, functional groups introduction, and uses of organic compounds. The chapter highlights why carbon forms millions of compounds and why organic chemistry matters in fuels, food, medicine, plastics, and daily life.",
      "introUr": "carbon compounds، hydrocarbons، alkanes اور alkenes، functional groups کا تعارف، اور organic compounds کے uses سیکھیں۔ یہ باب بتاتا ہے کہ carbon لاکھوں compounds کیوں بناتا ہے اور organic chemistry fuels، food، medicine، plastics اور daily life میں کیوں اہم ہے۔",
      "focus": [
        "Organic chemistry mainly studies carbon compounds",
        "Carbon forms four covalent bonds and can make chains, branches, and rings",
        "Hydrocarbons contain only carbon and hydrogen",
        "Alkanes are saturated hydrocarbons with single bonds; alkenes are unsaturated with at least one double bond",
        "Functional groups give organic compounds characteristic reactions and properties"
      ],
      "focusUr": [
        "Organic chemistry بنیادی طور پر carbon compounds کا مطالعہ ہے",
        "Carbon چار covalent bonds بناتا ہے اور chains، branches، rings بنا سکتا ہے",
        "Hydrocarbons صرف carbon اور hydrogen رکھتے ہیں",
        "Alkanes saturated hydrocarbons ہیں جن میں single bonds ہوتے ہیں؛ alkenes unsaturated ہیں جن میں کم از کم ایک double bond ہوتا ہے",
        "Functional groups organic compounds کو characteristic reactions اور properties دیتے ہیں"
      ],
      "examples": [
        [
          "Alkane",
          "Methane CH4, ethane C2H6."
        ],
        [
          "Alkene",
          "Ethene C2H4."
        ],
        [
          "Functional group",
          "-OH in alcohols."
        ],
        [
          "Use",
          "Organic compounds are used as fuels, solvents, medicines, polymers, and foods."
        ]
      ],
      "examplesUr": [
        [
          "Alkane",
          "Methane CH4، ethane C2H6۔"
        ],
        [
          "Alkene",
          "Ethene C2H4۔"
        ],
        [
          "Functional group",
          "alcohols میں -OH۔"
        ],
        [
          "Use",
          "Organic compounds fuels، solvents، medicines، polymers اور foods میں استعمال ہوتے ہیں۔"
        ]
      ],
      "quick": [
        "General formula of alkanes is CnH2n+2.",
        "General formula of alkenes is CnH2n.",
        "A double bond makes alkenes more reactive than alkanes.",
        "Look for functional groups to predict compound behavior."
      ],
      "quickUr": [
        "Alkanes کا general formula CnH2n+2 ہے۔",
        "Alkenes کا general formula CnH2n ہے۔",
        "Double bond alkenes کو alkanes سے زیادہ reactive بناتا ہے۔",
        "Compound behavior predict کرنے کے لیے functional groups دیکھیں۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "Organic chemistry mainly studies compounds of...",
          "options": [
            "carbon",
            "argon",
            "sodium only"
          ],
          "answer": "carbon"
        },
        {
          "type": "select",
          "text": "Hydrocarbons contain carbon and...",
          "options": [
            "hydrogen",
            "oxygen only",
            "nitrogen only"
          ],
          "answer": "hydrogen"
        },
        {
          "type": "select",
          "text": "Alkanes have mainly...",
          "options": [
            "single bonds",
            "double bonds only",
            "ionic bonds only"
          ],
          "answer": "single bonds"
        },
        {
          "type": "radio",
          "text": "True or False: Alkenes are unsaturated hydrocarbons.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Methane has formula ___.",
          "answer": "CH4"
        },
        {
          "type": "select",
          "text": "Ethene formula is...",
          "options": [
            "C2H4",
            "C2H6",
            "CH4"
          ],
          "answer": "C2H4"
        },
        {
          "type": "select",
          "text": "The -OH group is found in...",
          "options": [
            "alcohols",
            "alkanes only",
            "noble gases"
          ],
          "answer": "alcohols"
        },
        {
          "type": "radio",
          "text": "True or False: Carbon can form four covalent bonds.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Alkanes have general formula CnH___.",
          "answer": "2n+2"
        },
        {
          "type": "select",
          "text": "Which is an organic compound use?",
          "options": [
            "Fuel",
            "Only table salt",
            "Only argon gas"
          ],
          "answer": "Fuel"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "Organic chemistry بنیادی طور پر کس کے compounds پڑھتی ہے؟",
          "options": [
            "carbon",
            "argon",
            "صرف sodium"
          ],
          "answer": "carbon"
        },
        {
          "type": "select",
          "text": "Hydrocarbons میں carbon اور کیا ہوتا ہے؟",
          "options": [
            "hydrogen",
            "صرف oxygen",
            "صرف nitrogen"
          ],
          "answer": "hydrogen"
        },
        {
          "type": "select",
          "text": "Alkanes میں mainly کون سے bonds ہوتے ہیں؟",
          "options": [
            "single bonds",
            "صرف double bonds",
            "صرف ionic bonds"
          ],
          "answer": "single bonds"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Alkenes unsaturated hydrocarbons ہیں۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Methane کا formula ___ ہے۔",
          "answer": "CH4"
        },
        {
          "type": "select",
          "text": "Ethene کا formula کیا ہے؟",
          "options": [
            "C2H4",
            "C2H6",
            "CH4"
          ],
          "answer": "C2H4"
        },
        {
          "type": "select",
          "text": "-OH group کس میں ہوتا ہے؟",
          "options": [
            "alcohols",
            "صرف alkanes",
            "noble gases"
          ],
          "answer": "alcohols"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Carbon چار covalent bonds بنا سکتا ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Alkanes کا general formula CnH___ ہے۔",
          "answer": "2n+2"
        },
        {
          "type": "select",
          "text": "Organic compound کا use کون سا ہے؟",
          "options": [
            "Fuel",
            "صرف table salt",
            "صرف argon gas"
          ],
          "answer": "Fuel"
        }
      ]
    },
    "chemistry-hydrocarbons": {
      "title": "Chemistry: Hydrocarbons",
      "titleUr": "کیمیا: ہائیڈروکاربنز",
      "intro": "Learn methane, ethane, ethene, combustion, cracking introduction, petroleum, and natural gas. This chapter focuses on structures, formulas, fuel reactions, and the importance of hydrocarbons in energy and industry.",
      "introUr": "methane، ethane، ethene، combustion، cracking کا تعارف، petroleum اور natural gas سیکھیں۔ یہ باب structures، formulas، fuel reactions اور energy/industry میں hydrocarbons کی اہمیت پر focus کرتا ہے۔",
      "focus": [
        "Methane, ethane, and ethene are simple hydrocarbons with different formulas and bonding",
        "Complete combustion of hydrocarbons produces carbon dioxide, water, and energy",
        "Incomplete combustion can produce carbon monoxide and soot, which are dangerous pollutants",
        "Cracking breaks large hydrocarbon molecules into smaller useful molecules",
        "Petroleum and natural gas are major fossil-fuel sources of hydrocarbons"
      ],
      "focusUr": [
        "Methane، ethane اور ethene simple hydrocarbons ہیں جن کے formulas اور bonding مختلف ہیں",
        "Hydrocarbons کی complete combustion carbon dioxide، water اور energy بناتی ہے",
        "Incomplete combustion carbon monoxide اور soot بنا سکتی ہے جو dangerous pollutants ہیں",
        "Cracking large hydrocarbon molecules کو چھوٹے useful molecules میں توڑتی ہے",
        "Petroleum اور natural gas hydrocarbons کے major fossil-fuel sources ہیں"
      ],
      "examples": [
        [
          "Methane",
          "CH4, main component of natural gas."
        ],
        [
          "Ethane",
          "C2H6, saturated hydrocarbon."
        ],
        [
          "Ethene",
          "C2H4, unsaturated alkene."
        ],
        [
          "Combustion",
          "CH4 + 2O2 -> CO2 + 2H2O + energy."
        ]
      ],
      "examplesUr": [
        [
          "Methane",
          "CH4، natural gas کا main component۔"
        ],
        [
          "Ethane",
          "C2H6، saturated hydrocarbon۔"
        ],
        [
          "Ethene",
          "C2H4، unsaturated alkene۔"
        ],
        [
          "Combustion",
          "CH4 + 2O2 -> CO2 + 2H2O + energy۔"
        ]
      ],
      "quick": [
        "Methane and ethane are alkanes; ethene is an alkene.",
        "Use enough oxygen for complete combustion.",
        "Carbon monoxide is poisonous because it reduces oxygen transport in blood.",
        "Petroleum fractions are separated by fractional distillation."
      ],
      "quickUr": [
        "Methane اور ethane alkanes ہیں؛ ethene alkene ہے۔",
        "Complete combustion کے لیے enough oxygen چاہیے۔",
        "Carbon monoxide poisonous ہے کیونکہ blood میں oxygen transport کم کرتا ہے۔",
        "Petroleum fractions fractional distillation سے separate ہوتے ہیں۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "Methane formula is...",
          "options": [
            "CH4",
            "C2H6",
            "C2H4"
          ],
          "answer": "CH4"
        },
        {
          "type": "select",
          "text": "Ethene formula is...",
          "options": [
            "C2H4",
            "C2H6",
            "CH4"
          ],
          "answer": "C2H4"
        },
        {
          "type": "select",
          "text": "Complete combustion produces carbon dioxide and...",
          "options": [
            "water",
            "ammonia",
            "salt"
          ],
          "answer": "water"
        },
        {
          "type": "radio",
          "text": "True or False: Ethene is an unsaturated hydrocarbon.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Cracking breaks large hydrocarbons into ___ molecules.",
          "answer": "smaller"
        },
        {
          "type": "select",
          "text": "Natural gas mainly contains...",
          "options": [
            "methane",
            "ethene only",
            "water vapor only"
          ],
          "answer": "methane"
        },
        {
          "type": "select",
          "text": "Incomplete combustion can produce poisonous...",
          "options": [
            "carbon monoxide",
            "oxygen",
            "nitrogen"
          ],
          "answer": "carbon monoxide"
        },
        {
          "type": "radio",
          "text": "True or False: Petroleum is a source of hydrocarbons.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Ethane has formula ___.",
          "answer": "C2H6"
        },
        {
          "type": "select",
          "text": "Which process separates petroleum fractions?",
          "options": [
            "Fractional distillation",
            "Neutralization",
            "Fermentation"
          ],
          "answer": "Fractional distillation"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "Methane کا formula کیا ہے؟",
          "options": [
            "CH4",
            "C2H6",
            "C2H4"
          ],
          "answer": "CH4"
        },
        {
          "type": "select",
          "text": "Ethene کا formula کیا ہے؟",
          "options": [
            "C2H4",
            "C2H6",
            "CH4"
          ],
          "answer": "C2H4"
        },
        {
          "type": "select",
          "text": "Complete combustion carbon dioxide اور کیا بناتی ہے؟",
          "options": [
            "water",
            "ammonia",
            "salt"
          ],
          "answer": "water"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Ethene unsaturated hydrocarbon ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Cracking large hydrocarbons کو ___ molecules میں توڑتی ہے۔",
          "answer": "smaller"
        },
        {
          "type": "select",
          "text": "Natural gas میں mainly کیا ہوتا ہے؟",
          "options": [
            "methane",
            "صرف ethene",
            "صرف water vapor"
          ],
          "answer": "methane"
        },
        {
          "type": "select",
          "text": "Incomplete combustion poisonous کیا بنا سکتی ہے؟",
          "options": [
            "carbon monoxide",
            "oxygen",
            "nitrogen"
          ],
          "answer": "carbon monoxide"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Petroleum hydrocarbons کا source ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Ethane کا formula ___ ہے۔",
          "answer": "C2H6"
        },
        {
          "type": "select",
          "text": "Petroleum fractions کس process سے separate ہوتے ہیں؟",
          "options": [
            "Fractional distillation",
            "Neutralization",
            "Fermentation"
          ],
          "answer": "Fractional distillation"
        }
      ]
    },
    "chemistry-biochemistry": {
      "title": "Chemistry: Biochemistry",
      "titleUr": "کیمیا: حیاتی کیمیا",
      "intro": "Study carbohydrates, proteins, lipids, vitamins, nucleic acids introduction, and their importance in living organisms. This chapter links chemistry with nutrition, enzymes, cells, heredity, and health.",
      "introUr": "carbohydrates، proteins، lipids، vitamins، nucleic acids کا تعارف اور living organisms میں ان کی importance سیکھیں۔ یہ باب chemistry کو nutrition، enzymes، cells، heredity اور health سے جوڑتا ہے۔",
      "focus": [
        "Carbohydrates provide quick energy and structural materials in some organisms",
        "Proteins are made of amino acids and function as enzymes, muscles, antibodies, and structural molecules",
        "Lipids store energy, form membranes, and provide insulation",
        "Vitamins are needed in small amounts for normal metabolism and deficiency can cause disorders",
        "Nucleic acids such as DNA and RNA store and transfer genetic information"
      ],
      "focusUr": [
        "Carbohydrates quick energy اور کچھ organisms میں structural materials دیتے ہیں",
        "Proteins amino acids سے بنتے ہیں اور enzymes، muscles، antibodies اور structural molecules کے طور پر کام کرتے ہیں",
        "Lipids energy store کرتے، membranes بناتے اور insulation دیتے ہیں",
        "Vitamins normal metabolism کے لیے small amounts میں required ہیں اور deficiency disorders cause کر سکتی ہے",
        "Nucleic acids جیسے DNA اور RNA genetic information store/transfer کرتے ہیں"
      ],
      "examples": [
        [
          "Carbohydrate",
          "Glucose, starch, cellulose."
        ],
        [
          "Protein",
          "Enzyme, hemoglobin, muscle protein."
        ],
        [
          "Lipid",
          "Fats, oils, phospholipids."
        ],
        [
          "Nucleic acid",
          "DNA and RNA."
        ]
      ],
      "examplesUr": [
        [
          "Carbohydrate",
          "glucose، starch، cellulose۔"
        ],
        [
          "Protein",
          "enzyme، hemoglobin، muscle protein۔"
        ],
        [
          "Lipid",
          "fats، oils، phospholipids۔"
        ],
        [
          "Nucleic acid",
          "DNA اور RNA۔"
        ]
      ],
      "quick": [
        "Balanced diet includes all major biomolecules in suitable amounts.",
        "Proteins are built from amino acids.",
        "Excess carbohydrates and fats can be stored as body energy reserves.",
        "Vitamin deficiency symptoms help identify missing nutrients."
      ],
      "quickUr": [
        "Balanced diet میں تمام major biomolecules suitable amounts میں ہوتے ہیں۔",
        "Proteins amino acids سے بنتے ہیں۔",
        "Excess carbohydrates اور fats body energy reserves کے طور پر store ہو سکتے ہیں۔",
        "Vitamin deficiency symptoms missing nutrients identify کرنے میں مدد دیتے ہیں۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "Carbohydrates mainly provide...",
          "options": [
            "energy",
            "genetic information only",
            "air"
          ],
          "answer": "energy"
        },
        {
          "type": "select",
          "text": "Proteins are made of...",
          "options": [
            "amino acids",
            "fatty acids only",
            "glucose only"
          ],
          "answer": "amino acids"
        },
        {
          "type": "select",
          "text": "Lipids include...",
          "options": [
            "fats and oils",
            "DNA only",
            "salts only"
          ],
          "answer": "fats and oils"
        },
        {
          "type": "radio",
          "text": "True or False: DNA is a nucleic acid.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Vitamins are needed in ___ amounts.",
          "answer": "small"
        },
        {
          "type": "select",
          "text": "Which biomolecule can act as enzyme?",
          "options": [
            "Protein",
            "Lipid only",
            "Water only"
          ],
          "answer": "Protein"
        },
        {
          "type": "select",
          "text": "Starch is a...",
          "options": [
            "carbohydrate",
            "protein",
            "vitamin"
          ],
          "answer": "carbohydrate"
        },
        {
          "type": "radio",
          "text": "True or False: Lipids can store energy.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: DNA stores genetic ___.",
          "answer": "information"
        },
        {
          "type": "select",
          "text": "Which vitamin deficiency is linked to scurvy?",
          "options": [
            "Vitamin C",
            "Vitamin D",
            "Vitamin K only"
          ],
          "answer": "Vitamin C"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "Carbohydrates mainly کیا provide کرتے ہیں؟",
          "options": [
            "energy",
            "صرف genetic information",
            "air"
          ],
          "answer": "energy"
        },
        {
          "type": "select",
          "text": "Proteins کس سے بنتے ہیں؟",
          "options": [
            "amino acids",
            "صرف fatty acids",
            "صرف glucose"
          ],
          "answer": "amino acids"
        },
        {
          "type": "select",
          "text": "Lipids میں کیا شامل ہے؟",
          "options": [
            "fats and oils",
            "صرف DNA",
            "صرف salts"
          ],
          "answer": "fats and oils"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: DNA ایک nucleic acid ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Vitamins ___ amounts میں required ہوتے ہیں۔",
          "answer": "small"
        },
        {
          "type": "select",
          "text": "کون سا biomolecule enzyme کے طور پر کام کر سکتا ہے؟",
          "options": [
            "Protein",
            "صرف Lipid",
            "صرف Water"
          ],
          "answer": "Protein"
        },
        {
          "type": "select",
          "text": "Starch کیا ہے؟",
          "options": [
            "carbohydrate",
            "protein",
            "vitamin"
          ],
          "answer": "carbohydrate"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Lipids energy store کر سکتے ہیں۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: DNA genetic ___ store کرتا ہے۔",
          "answer": "information"
        },
        {
          "type": "select",
          "text": "Scurvy کس vitamin deficiency سے linked ہے؟",
          "options": [
            "Vitamin C",
            "Vitamin D",
            "صرف Vitamin K"
          ],
          "answer": "Vitamin C"
        }
      ]
    },
    "chemistry-atmosphere": {
      "title": "Chemistry: Atmosphere",
      "titleUr": "کیمیا: فضا",
      "intro": "Learn composition of air, layers of atmosphere, air pollution, greenhouse effect, ozone depletion, and acid rain. This chapter connects atmospheric chemistry with climate, health, and environmental responsibility.",
      "introUr": "air کی composition، atmosphere کی layers، air pollution، greenhouse effect، ozone depletion اور acid rain سیکھیں۔ یہ باب atmospheric chemistry کو climate، health اور environmental responsibility سے جوڑتا ہے۔",
      "focus": [
        "Air is mainly nitrogen and oxygen, with argon, carbon dioxide, water vapor, and trace gases",
        "Atmosphere layers include troposphere, stratosphere, mesosphere, thermosphere, and exosphere",
        "Air pollutants include carbon monoxide, sulfur dioxide, nitrogen oxides, particulates, and unburnt hydrocarbons",
        "Greenhouse gases trap heat and help maintain temperature, but excess gases cause global warming",
        "Ozone layer absorbs harmful ultraviolet radiation; depletion increases UV exposure"
      ],
      "focusUr": [
        "Air mainly nitrogen اور oxygen پر مشتمل ہے، ساتھ argon، carbon dioxide، water vapor اور trace gases ہوتے ہیں",
        "Atmosphere layers میں troposphere، stratosphere، mesosphere، thermosphere اور exosphere شامل ہیں",
        "Air pollutants میں carbon monoxide، sulfur dioxide، nitrogen oxides، particulates اور unburnt hydrocarbons شامل ہیں",
        "Greenhouse gases heat trap کر کے temperature maintain کرتے ہیں، مگر excess gases global warming cause کرتے ہیں",
        "Ozone layer harmful ultraviolet radiation absorb کرتی ہے؛ depletion UV exposure بڑھاتی ہے"
      ],
      "examples": [
        [
          "Troposphere",
          "Weather occurs here."
        ],
        [
          "Stratosphere",
          "Contains ozone layer."
        ],
        [
          "Acid rain",
          "Formed from SO2 and NOx reacting in atmosphere."
        ],
        [
          "Greenhouse gas",
          "Carbon dioxide and methane."
        ]
      ],
      "examplesUr": [
        [
          "Troposphere",
          "Weather یہاں ہوتا ہے۔"
        ],
        [
          "Stratosphere",
          "Ozone layer رکھتی ہے۔"
        ],
        [
          "Acid rain",
          "SO2 اور NOx atmosphere میں react کر کے بنتی ہے۔"
        ],
        [
          "Greenhouse gas",
          "carbon dioxide اور methane۔"
        ]
      ],
      "quick": [
        "Nitrogen is the most abundant gas in air.",
        "Ozone is useful in stratosphere but harmful near ground level.",
        "Acid rain damages buildings, soil, water bodies, and plants.",
        "Cleaner fuels, filters, trees, and public transport reduce air pollution."
      ],
      "quickUr": [
        "Air میں سب سے زیادہ gas nitrogen ہے۔",
        "Ozone stratosphere میں useful مگر ground level پر harmful ہے۔",
        "Acid rain buildings، soil، water bodies اور plants کو damage کرتی ہے۔",
        "Cleaner fuels، filters، trees اور public transport air pollution کم کرتے ہیں۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "Most abundant gas in air is...",
          "options": [
            "nitrogen",
            "oxygen",
            "carbon dioxide"
          ],
          "answer": "nitrogen"
        },
        {
          "type": "select",
          "text": "Weather mainly occurs in the...",
          "options": [
            "troposphere",
            "stratosphere",
            "exosphere"
          ],
          "answer": "troposphere"
        },
        {
          "type": "select",
          "text": "Ozone layer is mainly in the...",
          "options": [
            "stratosphere",
            "troposphere",
            "hydrosphere"
          ],
          "answer": "stratosphere"
        },
        {
          "type": "radio",
          "text": "True or False: Excess greenhouse gases can cause global warming.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Acid rain is linked with SO2 and ___.",
          "answer": "NOx"
        },
        {
          "type": "select",
          "text": "Which is a greenhouse gas?",
          "options": [
            "Methane",
            "Neon only",
            "Argon only"
          ],
          "answer": "Methane"
        },
        {
          "type": "select",
          "text": "Carbon monoxide is dangerous because it affects oxygen transport in...",
          "options": [
            "blood",
            "soil",
            "glass"
          ],
          "answer": "blood"
        },
        {
          "type": "radio",
          "text": "True or False: Ozone depletion can increase UV exposure.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: The gas needed for respiration is ___.",
          "answer": "oxygen"
        },
        {
          "type": "select",
          "text": "Which action reduces air pollution?",
          "options": [
            "Using public transport",
            "Burning plastic",
            "Removing filters"
          ],
          "answer": "Using public transport"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "Air میں سب سے abundant gas کون سی ہے؟",
          "options": [
            "nitrogen",
            "oxygen",
            "carbon dioxide"
          ],
          "answer": "nitrogen"
        },
        {
          "type": "select",
          "text": "Weather mainly کس layer میں ہوتا ہے؟",
          "options": [
            "troposphere",
            "stratosphere",
            "exosphere"
          ],
          "answer": "troposphere"
        },
        {
          "type": "select",
          "text": "Ozone layer mainly کہاں ہے؟",
          "options": [
            "stratosphere",
            "troposphere",
            "hydrosphere"
          ],
          "answer": "stratosphere"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Excess greenhouse gases global warming cause کر سکتے ہیں۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Acid rain SO2 اور ___ سے linked ہے۔",
          "answer": "NOx"
        },
        {
          "type": "select",
          "text": "Greenhouse gas کون سی ہے؟",
          "options": [
            "Methane",
            "صرف Neon",
            "صرف Argon"
          ],
          "answer": "Methane"
        },
        {
          "type": "select",
          "text": "Carbon monoxide خطرناک ہے کیونکہ یہ کس میں oxygen transport affect کرتی ہے؟",
          "options": [
            "blood",
            "soil",
            "glass"
          ],
          "answer": "blood"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Ozone depletion UV exposure بڑھا سکتی ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Respiration کے لیے required gas ___ ہے۔",
          "answer": "oxygen"
        },
        {
          "type": "select",
          "text": "Air pollution کون سا action کم کرتا ہے؟",
          "options": [
            "Public transport استعمال کرنا",
            "Plastic جلانا",
            "Filters remove کرنا"
          ],
          "answer": "Public transport استعمال کرنا"
        }
      ]
    },
    "chemistry-water": {
      "title": "Chemistry: Water",
      "titleUr": "کیمیا: پانی",
      "intro": "Study properties of water, water as a solvent, soft and hard water, water pollution, treatment, and conservation. The chapter links chemistry with daily life, health, agriculture, and environmental care.",
      "introUr": "water کی properties، water as solvent، soft اور hard water، water pollution، treatment اور conservation سیکھیں۔ یہ باب chemistry کو daily life، health، agriculture اور environmental care سے جوڑتا ہے۔",
      "focus": [
        "Water is polar, has high heat capacity, and dissolves many ionic and polar substances",
        "Hard water contains calcium and magnesium ions that reduce lather with soap",
        "Temporary hardness can be removed by boiling; permanent hardness needs chemical or ion-exchange methods",
        "Water pollution comes from sewage, industrial waste, fertilizers, pesticides, oil, and plastics",
        "Water treatment includes screening, sedimentation, filtration, chlorination, and sometimes boiling or reverse osmosis"
      ],
      "focusUr": [
        "Water polar ہے، high heat capacity رکھتا ہے، اور بہت سے ionic/polar substances dissolve کرتا ہے",
        "Hard water میں calcium اور magnesium ions ہوتے ہیں جو soap lather کم کرتے ہیں",
        "Temporary hardness boiling سے remove ہو سکتی ہے؛ permanent hardness کے لیے chemical یا ion-exchange methods چاہیے",
        "Water pollution sewage، industrial waste، fertilizers، pesticides، oil اور plastics سے آتی ہے",
        "Water treatment میں screening، sedimentation، filtration، chlorination اور کبھی boiling/reverse osmosis شامل ہیں"
      ],
      "examples": [
        [
          "Soft water",
          "Forms lather easily with soap."
        ],
        [
          "Hard water",
          "Contains Ca2+ and Mg2+ ions."
        ],
        [
          "Chlorination",
          "Kills many disease-causing microbes."
        ],
        [
          "Conservation",
          "Fix leaks and reuse water where safe."
        ]
      ],
      "examplesUr": [
        [
          "Soft water",
          "Soap کے ساتھ آسانی سے lather بناتا ہے۔"
        ],
        [
          "Hard water",
          "Ca2+ اور Mg2+ ions رکھتا ہے۔"
        ],
        [
          "Chlorination",
          "بہت سے disease-causing microbes کو kill کرتی ہے۔"
        ],
        [
          "Conservation",
          "Leaks fix کریں اور جہاں safe ہو water reuse کریں۔"
        ]
      ],
      "quick": [
        "Water is called a universal solvent, but it does not dissolve everything.",
        "Hardness is not the same as pollution.",
        "Clean-looking water may still contain microbes.",
        "Conservation reduces pressure on freshwater resources."
      ],
      "quickUr": [
        "Water کو universal solvent کہتے ہیں، مگر یہ ہر چیز dissolve نہیں کرتا۔",
        "Hardness pollution جیسی چیز نہیں۔",
        "صاف نظر آنے والا water بھی microbes رکھ سکتا ہے۔",
        "Conservation freshwater resources پر pressure کم کرتی ہے۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "Hard water contains ions of calcium and...",
          "options": [
            "magnesium",
            "sodium only",
            "chlorine gas only"
          ],
          "answer": "magnesium"
        },
        {
          "type": "select",
          "text": "Soft water forms lather...",
          "options": [
            "easily",
            "never",
            "only after freezing"
          ],
          "answer": "easily"
        },
        {
          "type": "select",
          "text": "Temporary hardness can often be removed by...",
          "options": [
            "boiling",
            "adding oil",
            "cooling to ice only"
          ],
          "answer": "boiling"
        },
        {
          "type": "radio",
          "text": "True or False: Water is a good solvent for many ionic substances.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Chlorination helps kill disease-causing ___.",
          "answer": "microbes"
        },
        {
          "type": "select",
          "text": "Which is a water pollutant?",
          "options": [
            "Sewage",
            "Clean sand filter",
            "Fresh rain only"
          ],
          "answer": "Sewage"
        },
        {
          "type": "select",
          "text": "Which step removes suspended particles?",
          "options": [
            "Filtration",
            "Combustion",
            "Cracking"
          ],
          "answer": "Filtration"
        },
        {
          "type": "radio",
          "text": "True or False: Hard water and polluted water mean exactly the same thing.",
          "options": [
            "True",
            "False"
          ],
          "answer": "False"
        },
        {
          "type": "text",
          "text": "Complete: Water conservation means using water ___.",
          "answer": "wisely"
        },
        {
          "type": "select",
          "text": "Which is a conservation action?",
          "options": [
            "Fixing leaking taps",
            "Leaving taps open",
            "Dumping chemicals"
          ],
          "answer": "Fixing leaking taps"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "Hard water میں calcium اور کس کے ions ہوتے ہیں؟",
          "options": [
            "magnesium",
            "صرف sodium",
            "صرف chlorine gas"
          ],
          "answer": "magnesium"
        },
        {
          "type": "select",
          "text": "Soft water lather کیسے بناتا ہے؟",
          "options": [
            "easily",
            "کبھی نہیں",
            "صرف freezing کے بعد"
          ],
          "answer": "easily"
        },
        {
          "type": "select",
          "text": "Temporary hardness عموماً کس سے remove ہو سکتی ہے؟",
          "options": [
            "boiling",
            "oil ڈالنے سے",
            "صرف ice بنانے سے"
          ],
          "answer": "boiling"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Water بہت سے ionic substances کے لیے good solvent ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Chlorination disease-causing ___ کو kill کرنے میں مدد دیتی ہے۔",
          "answer": "microbes"
        },
        {
          "type": "select",
          "text": "Water pollutant کون سا ہے؟",
          "options": [
            "Sewage",
            "Clean sand filter",
            "صرف fresh rain"
          ],
          "answer": "Sewage"
        },
        {
          "type": "select",
          "text": "Suspended particles کون سا step remove کرتا ہے؟",
          "options": [
            "Filtration",
            "Combustion",
            "Cracking"
          ],
          "answer": "Filtration"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Hard water اور polluted water بالکل same ہیں۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "غلط"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Water conservation کا مطلب water ___ استعمال کرنا ہے۔",
          "answer": "wisely"
        },
        {
          "type": "select",
          "text": "Conservation action کون سا ہے؟",
          "options": [
            "Leaking taps fix کرنا",
            "taps open چھوڑنا",
            "chemicals dump کرنا"
          ],
          "answer": "Leaking taps fix کرنا"
        }
      ]
    },
    "chemistry-chemical-industries": {
      "title": "Chemistry: Chemical Industries",
      "titleUr": "کیمیا: کیمیائی صنعتیں",
      "intro": "Learn important chemical industries in Pakistan, fertilizers, cement, glass, paper, soap and detergents, and industrial pollution. The chapter shows how chemistry supports national development while requiring careful waste and pollution control.",
      "introUr": "Pakistan کی important chemical industries، fertilizers، cement، glass، paper، soap/detergents اور industrial pollution سیکھیں۔ یہ باب دکھاتا ہے کہ chemistry national development کو support کرتی ہے مگر waste اور pollution control ضروری ہے۔",
      "focus": [
        "Chemical industries convert raw materials into useful products for agriculture, construction, hygiene, packaging, and daily life",
        "Fertilizer industries provide nitrogen, phosphorus, and potassium nutrients to improve crop growth",
        "Cement and glass industries use minerals and high-temperature processes",
        "Soap and detergents remove grease and dirt but can affect water quality if waste is uncontrolled",
        "Industrial pollution includes gases, wastewater, solids, heat, and toxic chemicals, so treatment and regulation are essential"
      ],
      "focusUr": [
        "Chemical industries raw materials کو agriculture، construction، hygiene، packaging اور daily life کے useful products میں بدلتی ہیں",
        "Fertilizer industries nitrogen، phosphorus اور potassium nutrients دے کر crop growth بہتر کرتی ہیں",
        "Cement اور glass industries minerals اور high-temperature processes استعمال کرتی ہیں",
        "Soap اور detergents grease/dirt remove کرتے ہیں مگر uncontrolled waste water quality affect کر سکتا ہے",
        "Industrial pollution میں gases، wastewater، solids، heat اور toxic chemicals شامل ہیں، اس لیے treatment/regulation ضروری ہیں"
      ],
      "examples": [
        [
          "Fertilizer",
          "Urea supplies nitrogen."
        ],
        [
          "Cement",
          "Used in construction."
        ],
        [
          "Glass",
          "Made from silica/sand with other materials."
        ],
        [
          "Detergent",
          "Synthetic cleaning agent."
        ]
      ],
      "examplesUr": [
        [
          "Fertilizer",
          "Urea nitrogen supply کرتی ہے۔"
        ],
        [
          "Cement",
          "construction میں استعمال۔"
        ],
        [
          "Glass",
          "silica/sand اور other materials سے بنتا ہے۔"
        ],
        [
          "Detergent",
          "synthetic cleaning agent۔"
        ]
      ],
      "quick": [
        "Match industry with product and raw material.",
        "Fertilizers improve yield but overuse can pollute water.",
        "Industrial waste should be treated before discharge.",
        "Cleaner production protects workers, communities, and ecosystems."
      ],
      "quickUr": [
        "Industry کو product اور raw material سے match کریں۔",
        "Fertilizers yield improve کرتے ہیں مگر overuse water pollute کر سکتا ہے۔",
        "Industrial waste discharge سے پہلے treat ہونا چاہیے۔",
        "Cleaner production workers، communities اور ecosystems کو protect کرتی ہے۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "Urea fertilizer mainly supplies...",
          "options": [
            "nitrogen",
            "glass",
            "paper fiber"
          ],
          "answer": "nitrogen"
        },
        {
          "type": "select",
          "text": "Cement is mainly used in...",
          "options": [
            "construction",
            "vaccination",
            "photography only"
          ],
          "answer": "construction"
        },
        {
          "type": "select",
          "text": "Glass is commonly made using...",
          "options": [
            "silica or sand",
            "protein only",
            "wood pulp only"
          ],
          "answer": "silica or sand"
        },
        {
          "type": "radio",
          "text": "True or False: Industrial wastewater should be treated before discharge.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Fertilizers help improve crop ___.",
          "answer": "growth",
          "alt": [
            "yield"
          ]
        },
        {
          "type": "select",
          "text": "Soap and detergents are used for...",
          "options": [
            "cleaning",
            "making cement only",
            "making ammonia only"
          ],
          "answer": "cleaning"
        },
        {
          "type": "select",
          "text": "Paper industry uses fiber from...",
          "options": [
            "wood or plants",
            "argon gas",
            "iron ore only"
          ],
          "answer": "wood or plants"
        },
        {
          "type": "radio",
          "text": "True or False: Fertilizer overuse can contribute to water pollution.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Industrial pollution control protects people and the ___.",
          "answer": "environment"
        },
        {
          "type": "select",
          "text": "Which is an industrial pollution source?",
          "options": [
            "Untreated waste gas",
            "Treated clean water",
            "Safe recycling"
          ],
          "answer": "Untreated waste gas"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "Urea fertilizer mainly کیا supply کرتی ہے؟",
          "options": [
            "nitrogen",
            "glass",
            "paper fiber"
          ],
          "answer": "nitrogen"
        },
        {
          "type": "select",
          "text": "Cement mainly کس میں استعمال ہوتا ہے؟",
          "options": [
            "construction",
            "vaccination",
            "صرف photography"
          ],
          "answer": "construction"
        },
        {
          "type": "select",
          "text": "Glass عام طور پر کس سے بنتا ہے؟",
          "options": [
            "silica یا sand",
            "صرف protein",
            "صرف wood pulp"
          ],
          "answer": "silica یا sand"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Industrial wastewater discharge سے پہلے treat ہونا چاہیے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Fertilizers crop ___ بہتر کرتے ہیں۔",
          "answer": "growth",
          "alt": [
            "yield"
          ]
        },
        {
          "type": "select",
          "text": "Soap اور detergents کس کے لیے استعمال ہوتے ہیں؟",
          "options": [
            "cleaning",
            "صرف cement making",
            "صرف ammonia making"
          ],
          "answer": "cleaning"
        },
        {
          "type": "select",
          "text": "Paper industry fiber کہاں سے لیتی ہے؟",
          "options": [
            "wood یا plants",
            "argon gas",
            "صرف iron ore"
          ],
          "answer": "wood یا plants"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Fertilizer overuse water pollution میں contribute کر سکتا ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Industrial pollution control people اور ___ کو protect کرتا ہے۔",
          "answer": "environment"
        },
        {
          "type": "select",
          "text": "Industrial pollution source کون سا ہے؟",
          "options": [
            "Untreated waste gas",
            "Treated clean water",
            "Safe recycling"
          ],
          "answer": "Untreated waste gas"
        }
      ]
    },
    "physics-simple-harmonic-motion-and-waves": {
      "title": "Physics: Simple Harmonic Motion and Waves",
      "titleUr": "طبیعیات: سادہ توافقی حرکت اور لہریں",
      "intro": "Study oscillations, simple harmonic motion, waves, transverse and longitudinal waves, wave properties, and ripple tank observations. This chapter links repeated motion with energy transfer through waves and introduces the language used in sound, light, water waves, and communication.",
      "introUr": "oscillations، simple harmonic motion، waves، transverse اور longitudinal waves، wave properties اور ripple tank observations سیکھیں۔ یہ باب repeated motion کو waves کے ذریعے energy transfer سے جوڑتا ہے اور sound، light، water waves اور communication کی زبان introduce کرتا ہے۔",
      "focus": [
        "Oscillation is repeated to-and-fro motion about a mean position",
        "Simple harmonic motion has acceleration directed toward the mean position and proportional to displacement",
        "Waves transfer energy without transferring matter overall",
        "Transverse waves vibrate perpendicular to direction of travel; longitudinal waves vibrate parallel",
        "Wave speed, frequency, and wavelength are linked by v = fλ"
      ],
      "focusUr": [
        "Oscillation mean position کے گرد repeated to-and-fro motion ہے",
        "SHM میں acceleration mean position کی طرف اور displacement کے proportional ہوتی ہے",
        "Waves energy transfer کرتی ہیں مگر matter overall transfer نہیں ہوتا",
        "Transverse waves میں vibration direction of travel کے perpendicular ہوتی ہے؛ longitudinal میں parallel",
        "Wave speed، frequency اور wavelength کا relation v = fλ ہے"
      ],
      "examples": [
        [
          "Oscillation",
          "Pendulum bob moving to and fro."
        ],
        [
          "Transverse wave",
          "Water ripple or light wave."
        ],
        [
          "Longitudinal wave",
          "Sound wave in air."
        ],
        [
          "Ripple tank",
          "Shows reflection, refraction, diffraction, and wavefronts in water."
        ]
      ],
      "examplesUr": [
        [
          "Oscillation",
          "pendulum bob کا to-and-fro motion۔"
        ],
        [
          "Transverse wave",
          "water ripple یا light wave۔"
        ],
        [
          "Longitudinal wave",
          "air میں sound wave۔"
        ],
        [
          "Ripple tank",
          "water میں reflection، refraction، diffraction اور wavefronts دکھاتا ہے۔"
        ]
      ],
      "quick": [
        "Amplitude is maximum displacement from mean position.",
        "Time period is time for one complete oscillation.",
        "Frequency is oscillations per second.",
        "Use SI units: hertz for frequency, meter for wavelength, m/s for wave speed."
      ],
      "quickUr": [
        "Amplitude mean position سے maximum displacement ہے۔",
        "Time period ایک complete oscillation کا time ہے۔",
        "Frequency فی second oscillations ہے۔",
        "SI units استعمال کریں: frequency کے لیے hertz، wavelength کے لیے meter، wave speed کے لیے m/s۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "One complete to-and-fro motion is an...",
          "options": [
            "oscillation",
            "echo",
            "electric field"
          ],
          "answer": "oscillation"
        },
        {
          "type": "select",
          "text": "Maximum displacement from mean position is...",
          "options": [
            "amplitude",
            "frequency",
            "wavelength only"
          ],
          "answer": "amplitude"
        },
        {
          "type": "select",
          "text": "Wave equation is...",
          "options": [
            "v = fλ",
            "V = IR",
            "F = ma only"
          ],
          "answer": "v = fλ"
        },
        {
          "type": "radio",
          "text": "True or False: Waves transfer energy.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Frequency is measured in ___.",
          "answer": "hertz",
          "alt": [
            "Hz"
          ]
        },
        {
          "type": "select",
          "text": "Sound in air is mainly a...",
          "options": [
            "longitudinal wave",
            "transverse wave only",
            "stationary charge"
          ],
          "answer": "longitudinal wave"
        },
        {
          "type": "select",
          "text": "In transverse waves, vibration is...",
          "options": [
            "perpendicular to wave direction",
            "parallel only",
            "zero always"
          ],
          "answer": "perpendicular to wave direction"
        },
        {
          "type": "radio",
          "text": "True or False: In SHM, acceleration is directed toward the mean position.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Time for one oscillation is called time ___.",
          "answer": "period"
        },
        {
          "type": "select",
          "text": "Ripple tank is used to study...",
          "options": [
            "water waves",
            "nuclear fission",
            "logic gates only"
          ],
          "answer": "water waves"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "ایک complete to-and-fro motion کیا ہے؟",
          "options": [
            "oscillation",
            "echo",
            "electric field"
          ],
          "answer": "oscillation"
        },
        {
          "type": "select",
          "text": "Mean position سے maximum displacement کیا ہے؟",
          "options": [
            "amplitude",
            "frequency",
            "صرف wavelength"
          ],
          "answer": "amplitude"
        },
        {
          "type": "select",
          "text": "Wave equation کیا ہے؟",
          "options": [
            "v = fλ",
            "V = IR",
            "صرف F = ma"
          ],
          "answer": "v = fλ"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Waves energy transfer کرتی ہیں۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Frequency ___ میں measured ہے۔",
          "answer": "hertz",
          "alt": [
            "Hz"
          ]
        },
        {
          "type": "select",
          "text": "Air میں sound mainly کون سی wave ہے؟",
          "options": [
            "longitudinal wave",
            "صرف transverse wave",
            "stationary charge"
          ],
          "answer": "longitudinal wave"
        },
        {
          "type": "select",
          "text": "Transverse waves میں vibration wave direction کے...",
          "options": [
            "perpendicular",
            "صرف parallel",
            "ہمیشہ zero"
          ],
          "answer": "perpendicular"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: SHM میں acceleration mean position کی طرف ہوتی ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: One oscillation کا time time ___ کہلاتا ہے۔",
          "answer": "period"
        },
        {
          "type": "select",
          "text": "Ripple tank کس کے مطالعے کے لیے ہے؟",
          "options": [
            "water waves",
            "nuclear fission",
            "صرف logic gates"
          ],
          "answer": "water waves"
        }
      ]
    },
    "physics-sound": {
      "title": "Physics: Sound",
      "titleUr": "طبیعیات: آواز",
      "intro": "Learn production of sound, sound waves, speed of sound, echo, ultrasound, and noise pollution. The chapter explains how vibrations travel through media, why echoes occur, and how sound technology is used safely.",
      "introUr": "sound production، sound waves، speed of sound، echo، ultrasound اور noise pollution سیکھیں۔ یہ باب بتاتا ہے کہ vibrations media میں کیسے travel کرتے ہیں، echoes کیوں بنتے ہیں، اور sound technology safely کیسے استعمال ہوتی ہے۔",
      "focus": [
        "Sound is produced by vibrating bodies",
        "Sound requires a material medium and cannot travel through vacuum",
        "Sound travels fastest in solids, slower in liquids, and slowest in gases",
        "Echo is reflected sound heard after a delay",
        "Ultrasound has frequency above human hearing and is used in medicine and industry"
      ],
      "focusUr": [
        "Sound vibrating bodies سے produce ہوتی ہے",
        "Sound کو material medium چاہیے اور vacuum میں travel نہیں کرتی",
        "Sound solids میں fastest، liquids میں slower، gases میں slowest travel کرتی ہے",
        "Echo reflected sound ہے جو delay کے بعد سنائی دے",
        "Ultrasound human hearing سے زیادہ frequency رکھتا ہے اور medicine/industry میں used ہے"
      ],
      "examples": [
        [
          "Vibration",
          "Tuning fork produces sound by vibrating."
        ],
        [
          "Echo",
          "Sound reflection from a distant wall or cliff."
        ],
        [
          "Ultrasound",
          "Medical imaging and cleaning delicate parts."
        ],
        [
          "Noise pollution",
          "Traffic, loudspeakers, factories, aircraft."
        ]
      ],
      "examplesUr": [
        [
          "Vibration",
          "tuning fork vibration سے sound produce کرتا ہے۔"
        ],
        [
          "Echo",
          "distant wall یا cliff سے sound reflection۔"
        ],
        [
          "Ultrasound",
          "medical imaging اور delicate parts cleaning۔"
        ],
        [
          "Noise pollution",
          "traffic، loudspeakers، factories، aircraft۔"
        ]
      ],
      "quick": [
        "Echo distance uses total travel distance: sound goes to reflector and back.",
        "Human hearing is roughly 20 Hz to 20,000 Hz.",
        "Pitch depends on frequency; loudness depends on amplitude.",
        "Noise control includes silencers, barriers, zoning, and lower volume."
      ],
      "quickUr": [
        "Echo distance میں total travel distance use کریں: sound reflector تک جاتی اور واپس آتی ہے۔",
        "Human hearing تقریباً 20 Hz سے 20,000 Hz ہے۔",
        "Pitch frequency پر depend کرتی ہے؛ loudness amplitude پر۔",
        "Noise control میں silencers، barriers، zoning اور lower volume شامل ہیں۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "Sound is produced by...",
          "options": [
            "vibrations",
            "static charge only",
            "photosynthesis"
          ],
          "answer": "vibrations"
        },
        {
          "type": "select",
          "text": "Sound cannot travel through...",
          "options": [
            "vacuum",
            "air",
            "water"
          ],
          "answer": "vacuum"
        },
        {
          "type": "select",
          "text": "Echo is reflected...",
          "options": [
            "sound",
            "light only",
            "charge"
          ],
          "answer": "sound"
        },
        {
          "type": "radio",
          "text": "True or False: Ultrasound has frequency above human hearing.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Pitch depends on ___.",
          "answer": "frequency"
        },
        {
          "type": "select",
          "text": "Sound travels fastest in...",
          "options": [
            "solids",
            "gases",
            "vacuum"
          ],
          "answer": "solids"
        },
        {
          "type": "select",
          "text": "Loudness mainly depends on...",
          "options": [
            "amplitude",
            "wavelength only",
            "resistance"
          ],
          "answer": "amplitude"
        },
        {
          "type": "radio",
          "text": "True or False: Noise pollution can harm hearing.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Human upper hearing limit is about 20000 ___.",
          "answer": "Hz"
        },
        {
          "type": "select",
          "text": "Which is an ultrasound use?",
          "options": [
            "Medical imaging",
            "Making cement",
            "Neutralization"
          ],
          "answer": "Medical imaging"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "Sound کس سے produce ہوتی ہے؟",
          "options": [
            "vibrations",
            "صرف static charge",
            "photosynthesis"
          ],
          "answer": "vibrations"
        },
        {
          "type": "select",
          "text": "Sound کس میں travel نہیں کرتی؟",
          "options": [
            "vacuum",
            "air",
            "water"
          ],
          "answer": "vacuum"
        },
        {
          "type": "select",
          "text": "Echo reflected کیا ہے؟",
          "options": [
            "sound",
            "صرف light",
            "charge"
          ],
          "answer": "sound"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Ultrasound human hearing سے above frequency رکھتا ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Pitch ___ پر depend کرتی ہے۔",
          "answer": "frequency"
        },
        {
          "type": "select",
          "text": "Sound سب سے fast کس میں travel کرتی ہے؟",
          "options": [
            "solids",
            "gases",
            "vacuum"
          ],
          "answer": "solids"
        },
        {
          "type": "select",
          "text": "Loudness mainly کس پر depend کرتی ہے؟",
          "options": [
            "amplitude",
            "صرف wavelength",
            "resistance"
          ],
          "answer": "amplitude"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Noise pollution hearing کو harm کر سکتی ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Human upper hearing limit تقریباً 20000 ___ ہے۔",
          "answer": "Hz"
        },
        {
          "type": "select",
          "text": "Ultrasound کا use کون سا ہے؟",
          "options": [
            "Medical imaging",
            "cement بنانا",
            "Neutralization"
          ],
          "answer": "Medical imaging"
        }
      ]
    },
    "physics-geometrical-optics": {
      "title": "Physics: Geometrical Optics",
      "titleUr": "طبیعیات: جیومیٹریائی بصریات",
      "intro": "Study reflection, refraction, mirrors, lenses, image formation, optical instruments, and the human eye. This chapter uses ray diagrams to predict where images form and whether they are real, virtual, magnified, diminished, upright, or inverted.",
      "introUr": "reflection، refraction، mirrors، lenses، image formation، optical instruments اور human eye سیکھیں۔ یہ باب ray diagrams سے predict کرتا ہے کہ image کہاں بنتی ہے اور real/virtual، magnified/diminished، upright/inverted ہے یا نہیں۔",
      "focus": [
        "Reflection obeys laws: angle of incidence equals angle of reflection",
        "Refraction occurs when light changes speed entering another medium",
        "Concave and convex mirrors form different image types depending on object position",
        "Convex and concave lenses converge or diverge light rays",
        "Human eye uses a convex lens to focus image on retina; defects are corrected with suitable lenses"
      ],
      "focusUr": [
        "Reflection کے laws میں angle of incidence = angle of reflection ہے",
        "Refraction تب ہوتی ہے جب light دوسرے medium میں speed بدلتی ہے",
        "Concave اور convex mirrors object position کے مطابق different images بناتے ہیں",
        "Convex اور concave lenses light rays کو converge/diverge کرتے ہیں",
        "Human eye convex lens سے retina پر image focus کرتی ہے؛ defects suitable lenses سے correct ہوتے ہیں"
      ],
      "examples": [
        [
          "Plane mirror",
          "Virtual, upright, same-size image."
        ],
        [
          "Convex lens",
          "Can form real inverted image."
        ],
        [
          "Concave lens",
          "Used for short-sightedness."
        ],
        [
          "Refraction",
          "Pencil appears bent in water."
        ]
      ],
      "examplesUr": [
        [
          "Plane mirror",
          "virtual، upright، same-size image۔"
        ],
        [
          "Convex lens",
          "real inverted image بنا سکتا ہے۔"
        ],
        [
          "Concave lens",
          "short-sightedness کے لیے استعمال۔"
        ],
        [
          "Refraction",
          "water میں pencil bent لگتی ہے۔"
        ]
      ],
      "quick": [
        "Draw rays with arrows and label normal, incident ray, reflected/refracted ray.",
        "Real images can be formed on screen; virtual images cannot.",
        "Convex lens converges; concave lens diverges.",
        "Eye defects: myopia uses concave lens, hypermetropia uses convex lens."
      ],
      "quickUr": [
        "Rays arrows کے ساتھ draw کریں اور normal، incident ray، reflected/refracted ray label کریں۔",
        "Real images screen پر بن سکتی ہیں؛ virtual images نہیں۔",
        "Convex lens converge کرتا ہے؛ concave lens diverge۔",
        "Eye defects: myopia کے لیے concave lens، hypermetropia کے لیے convex lens۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "Law of reflection says angle of incidence equals angle of...",
          "options": [
            "reflection",
            "refraction",
            "dispersion"
          ],
          "answer": "reflection"
        },
        {
          "type": "select",
          "text": "Bending of light between media is...",
          "options": [
            "refraction",
            "echo",
            "rectification"
          ],
          "answer": "refraction"
        },
        {
          "type": "select",
          "text": "A convex lens is mainly...",
          "options": [
            "converging",
            "diverging",
            "opaque"
          ],
          "answer": "converging"
        },
        {
          "type": "radio",
          "text": "True or False: A real image can be formed on a screen.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Image is focused on the ___ in the human eye.",
          "answer": "retina"
        },
        {
          "type": "select",
          "text": "Short-sightedness is corrected using...",
          "options": [
            "concave lens",
            "convex lens only",
            "plane mirror"
          ],
          "answer": "concave lens"
        },
        {
          "type": "select",
          "text": "A plane mirror forms an image that is...",
          "options": [
            "virtual",
            "always real",
            "always inverted"
          ],
          "answer": "virtual"
        },
        {
          "type": "radio",
          "text": "True or False: Concave lens diverges light rays.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: The perpendicular line at point of incidence is the ___.",
          "answer": "normal"
        },
        {
          "type": "select",
          "text": "Which instrument uses lenses?",
          "options": [
            "Microscope",
            "Spring balance",
            "Ammeter only"
          ],
          "answer": "Microscope"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "Law of reflection کے مطابق angle of incidence کس کے برابر ہے؟",
          "options": [
            "reflection",
            "refraction",
            "dispersion"
          ],
          "answer": "reflection"
        },
        {
          "type": "select",
          "text": "Media کے درمیان light کا bend ہونا کیا ہے؟",
          "options": [
            "refraction",
            "echo",
            "rectification"
          ],
          "answer": "refraction"
        },
        {
          "type": "select",
          "text": "Convex lens mainly کیا ہے؟",
          "options": [
            "converging",
            "diverging",
            "opaque"
          ],
          "answer": "converging"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Real image screen پر بن سکتی ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Human eye میں image ___ پر focus ہوتی ہے۔",
          "answer": "retina"
        },
        {
          "type": "select",
          "text": "Short-sightedness کس lens سے correct ہوتی ہے؟",
          "options": [
            "concave lens",
            "صرف convex lens",
            "plane mirror"
          ],
          "answer": "concave lens"
        },
        {
          "type": "select",
          "text": "Plane mirror کس قسم کی image بناتا ہے؟",
          "options": [
            "virtual",
            "ہمیشہ real",
            "ہمیشہ inverted"
          ],
          "answer": "virtual"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Concave lens light rays diverge کرتا ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Point of incidence پر perpendicular line ___ ہے۔",
          "answer": "normal"
        },
        {
          "type": "select",
          "text": "کون سا instrument lenses استعمال کرتا ہے؟",
          "options": [
            "Microscope",
            "Spring balance",
            "صرف Ammeter"
          ],
          "answer": "Microscope"
        }
      ]
    },
    "physics-electrostatics": {
      "title": "Physics: Electrostatics",
      "titleUr": "طبیعیات: ساکن برقیات",
      "intro": "Learn electric charge, charging by friction, conduction and induction, Coulomb’s law introduction, electric field, electric potential, and capacitors. This chapter explains forces between charges and how electric energy can be stored.",
      "introUr": "electric charge، friction/conduction/induction سے charging، Coulomb’s law کا تعارف، electric field، electric potential اور capacitors سیکھیں۔ یہ باب charges کے درمیان forces اور electric energy storage سمجھاتا ہے۔",
      "focus": [
        "There are two types of charge: positive and negative",
        "Like charges repel and unlike charges attract",
        "Charging can occur by friction, conduction, or induction",
        "Coulomb’s law describes force between point charges and its dependence on charge and distance",
        "A capacitor stores charge and electric energy between plates"
      ],
      "focusUr": [
        "Charge کی دو types ہیں: positive اور negative",
        "Like charges repel اور unlike charges attract کرتے ہیں",
        "Charging friction، conduction یا induction سے ہو سکتی ہے",
        "Coulomb’s law point charges کے درمیان force اور charge/distance dependence describe کرتا ہے",
        "Capacitor plates کے درمیان charge اور electric energy store کرتا ہے"
      ],
      "examples": [
        [
          "Friction charging",
          "Rubbing plastic rod with cloth."
        ],
        [
          "Electric field",
          "Region where electric force acts."
        ],
        [
          "Potential",
          "Work done per unit charge."
        ],
        [
          "Capacitor",
          "Two conductors separated by insulator."
        ]
      ],
      "examplesUr": [
        [
          "Friction charging",
          "plastic rod کو cloth سے rub کرنا۔"
        ],
        [
          "Electric field",
          "وہ region جہاں electric force act کرتی ہے۔"
        ],
        [
          "Potential",
          "work done per unit charge۔"
        ],
        [
          "Capacitor",
          "insulator سے separated دو conductors۔"
        ]
      ],
      "quick": [
        "Charge is measured in coulombs.",
        "Electric field lines go from positive to negative.",
        "Greater distance reduces electrostatic force.",
        "Capacitors are used in circuits for storing and releasing charge."
      ],
      "quickUr": [
        "Charge coulombs میں measured ہے۔",
        "Electric field lines positive سے negative کی طرف جاتی ہیں۔",
        "زیادہ distance electrostatic force کم کرتا ہے۔",
        "Capacitors circuits میں charge store/release کرنے کے لیے استعمال ہوتے ہیں۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "Like charges...",
          "options": [
            "repel",
            "attract",
            "become neutral always"
          ],
          "answer": "repel"
        },
        {
          "type": "select",
          "text": "Unlike charges...",
          "options": [
            "attract",
            "repel",
            "vanish"
          ],
          "answer": "attract"
        },
        {
          "type": "select",
          "text": "Charge is measured in...",
          "options": [
            "coulomb",
            "newton",
            "tesla only"
          ],
          "answer": "coulomb"
        },
        {
          "type": "radio",
          "text": "True or False: Charging can occur by friction.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Electric field is a region where electric ___ acts.",
          "answer": "force"
        },
        {
          "type": "select",
          "text": "Electric field lines start from...",
          "options": [
            "positive charge",
            "negative charge only",
            "neutral wood"
          ],
          "answer": "positive charge"
        },
        {
          "type": "select",
          "text": "A capacitor stores...",
          "options": [
            "charge",
            "sound only",
            "mass only"
          ],
          "answer": "charge"
        },
        {
          "type": "radio",
          "text": "True or False: Increasing distance reduces electrostatic force.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Electric potential is work done per unit ___.",
          "answer": "charge"
        },
        {
          "type": "select",
          "text": "Charging without contact is...",
          "options": [
            "induction",
            "conduction only",
            "combustion"
          ],
          "answer": "induction"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "Like charges کیا کرتے ہیں؟",
          "options": [
            "repel",
            "attract",
            "ہمیشہ neutral"
          ],
          "answer": "repel"
        },
        {
          "type": "select",
          "text": "Unlike charges کیا کرتے ہیں؟",
          "options": [
            "attract",
            "repel",
            "vanish"
          ],
          "answer": "attract"
        },
        {
          "type": "select",
          "text": "Charge کس میں measured ہے؟",
          "options": [
            "coulomb",
            "newton",
            "صرف tesla"
          ],
          "answer": "coulomb"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Charging friction سے ہو سکتی ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Electric field وہ region ہے جہاں electric ___ act کرتی ہے۔",
          "answer": "force"
        },
        {
          "type": "select",
          "text": "Electric field lines کہاں سے start ہوتی ہیں؟",
          "options": [
            "positive charge",
            "صرف negative charge",
            "neutral wood"
          ],
          "answer": "positive charge"
        },
        {
          "type": "select",
          "text": "Capacitor کیا store کرتا ہے؟",
          "options": [
            "charge",
            "صرف sound",
            "صرف mass"
          ],
          "answer": "charge"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Distance بڑھانے سے electrostatic force کم ہوتی ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Electric potential work done per unit ___ ہے۔",
          "answer": "charge"
        },
        {
          "type": "select",
          "text": "Contact کے بغیر charging کیا ہے؟",
          "options": [
            "induction",
            "صرف conduction",
            "combustion"
          ],
          "answer": "induction"
        }
      ]
    },
    "physics-current-electricity": {
      "title": "Physics: Current Electricity",
      "titleUr": "طبیعیات: جاری برقیات",
      "intro": "Study electric current, potential difference, resistance, Ohm’s law, series and parallel circuits, electrical power, and household electricity. This chapter connects circuit theory with safe use of electricity at home.",
      "introUr": "electric current، potential difference، resistance، Ohm’s law، series/parallel circuits، electrical power اور household electricity سیکھیں۔ یہ باب circuit theory کو گھر میں electricity کے safe use سے جوڑتا ہے۔",
      "focus": [
        "Electric current is rate of flow of charge",
        "Potential difference is energy transferred per unit charge",
        "Resistance opposes current and depends on material, length, area, and temperature",
        "Ohm’s law states V = IR for ohmic conductors at constant temperature",
        "Series and parallel circuits distribute current and voltage differently"
      ],
      "focusUr": [
        "Electric current charge کے flow کی rate ہے",
        "Potential difference energy transferred per unit charge ہے",
        "Resistance current کی مخالفت کرتی ہے اور material، length، area، temperature پر depend کرتی ہے",
        "Ohm’s law constant temperature پر ohmic conductors کے لیے V = IR کہتا ہے",
        "Series اور parallel circuits current اور voltage کو differently distribute کرتے ہیں"
      ],
      "examples": [
        [
          "Current",
          "I = Q/t."
        ],
        [
          "Ohm’s law",
          "V = IR."
        ],
        [
          "Power",
          "P = VI."
        ],
        [
          "Household safety",
          "Fuse, circuit breaker, earthing, insulation."
        ]
      ],
      "examplesUr": [
        [
          "Current",
          "I = Q/t۔"
        ],
        [
          "Ohm’s law",
          "V = IR۔"
        ],
        [
          "Power",
          "P = VI۔"
        ],
        [
          "Household safety",
          "fuse، circuit breaker، earthing، insulation۔"
        ]
      ],
      "quick": [
        "Ammeter is connected in series; voltmeter in parallel.",
        "In series, current is same through components.",
        "In parallel, voltage is same across branches.",
        "Do not overload sockets or touch switches with wet hands."
      ],
      "quickUr": [
        "Ammeter series میں connect ہوتا ہے؛ voltmeter parallel میں۔",
        "Series میں current components سے same گزرتا ہے۔",
        "Parallel میں branches کے across voltage same ہوتا ہے۔",
        "Sockets overload نہ کریں اور wet hands سے switches نہ چھوئیں۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "Ohm’s law is...",
          "options": [
            "V = IR",
            "F = ma",
            "v = fλ"
          ],
          "answer": "V = IR"
        },
        {
          "type": "select",
          "text": "Current is measured in...",
          "options": [
            "ampere",
            "volt",
            "ohm"
          ],
          "answer": "ampere"
        },
        {
          "type": "select",
          "text": "Resistance is measured in...",
          "options": [
            "ohm",
            "watt",
            "coulomb"
          ],
          "answer": "ohm"
        },
        {
          "type": "radio",
          "text": "True or False: Ammeter is connected in series.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Power P = V x ___.",
          "answer": "I"
        },
        {
          "type": "select",
          "text": "Voltmeter is connected in...",
          "options": [
            "parallel",
            "series only",
            "no circuit"
          ],
          "answer": "parallel"
        },
        {
          "type": "select",
          "text": "In a series circuit, current is...",
          "options": [
            "same",
            "zero always",
            "different at every point always"
          ],
          "answer": "same"
        },
        {
          "type": "radio",
          "text": "True or False: Household sockets should not be overloaded.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Current I = charge divided by ___.",
          "answer": "time"
        },
        {
          "type": "select",
          "text": "Which is an electrical safety device?",
          "options": [
            "Fuse",
            "Lens",
            "Tuning fork"
          ],
          "answer": "Fuse"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "Ohm’s law کیا ہے؟",
          "options": [
            "V = IR",
            "F = ma",
            "v = fλ"
          ],
          "answer": "V = IR"
        },
        {
          "type": "select",
          "text": "Current کس میں measured ہے؟",
          "options": [
            "ampere",
            "volt",
            "ohm"
          ],
          "answer": "ampere"
        },
        {
          "type": "select",
          "text": "Resistance کس میں measured ہے؟",
          "options": [
            "ohm",
            "watt",
            "coulomb"
          ],
          "answer": "ohm"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Ammeter series میں connect ہوتا ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Power P = V x ___.",
          "answer": "I"
        },
        {
          "type": "select",
          "text": "Voltmeter کس طرح connect ہوتا ہے؟",
          "options": [
            "parallel",
            "صرف series",
            "no circuit"
          ],
          "answer": "parallel"
        },
        {
          "type": "select",
          "text": "Series circuit میں current...",
          "options": [
            "same",
            "ہمیشہ zero",
            "ہر جگہ ہمیشہ different"
          ],
          "answer": "same"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Household sockets overload نہیں کرنے چاہییں۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Current I = charge divided by ___.",
          "answer": "time"
        },
        {
          "type": "select",
          "text": "Electrical safety device کون سی ہے؟",
          "options": [
            "Fuse",
            "Lens",
            "Tuning fork"
          ],
          "answer": "Fuse"
        }
      ]
    },
    "physics-electromagnetism": {
      "title": "Physics: Electromagnetism",
      "titleUr": "طبیعیات: برقی مقناطیسیت",
      "intro": "Learn magnetic effect of current, electromagnets, force on a current-carrying conductor, electric motor introduction, electromagnetic induction, and generator introduction. This chapter explains how electricity and magnetism are converted into motion and electrical energy.",
      "introUr": "current کا magnetic effect، electromagnets، current-carrying conductor پر force، electric motor کا تعارف، electromagnetic induction اور generator کا تعارف سیکھیں۔ یہ باب electricity اور magnetism کو motion اور electrical energy میں تبدیل ہونا سمجھاتا ہے۔",
      "focus": [
        "Current in a wire produces a magnetic field around it",
        "Electromagnets can be strengthened by increasing current, turns, or using soft iron core",
        "A current-carrying conductor in a magnetic field experiences a force",
        "Electric motor converts electrical energy into mechanical energy",
        "Electromagnetic induction produces voltage when magnetic flux changes"
      ],
      "focusUr": [
        "Wire میں current اس کے گرد magnetic field بناتا ہے",
        "Electromagnets current، turns بڑھانے یا soft iron core استعمال کرنے سے strong ہوتے ہیں",
        "Magnetic field میں current-carrying conductor پر force لگتی ہے",
        "Electric motor electrical energy کو mechanical energy میں بدلتا ہے",
        "Magnetic flux change ہو تو electromagnetic induction voltage produce کرتی ہے"
      ],
      "examples": [
        [
          "Electromagnet",
          "Coil around soft iron core."
        ],
        [
          "Motor",
          "Uses force on current-carrying coil."
        ],
        [
          "Generator",
          "Converts mechanical energy to electrical energy."
        ],
        [
          "Induction",
          "Moving magnet near coil induces current."
        ]
      ],
      "examplesUr": [
        [
          "Electromagnet",
          "soft iron core کے گرد coil۔"
        ],
        [
          "Motor",
          "current-carrying coil پر force استعمال کرتا ہے۔"
        ],
        [
          "Generator",
          "mechanical energy کو electrical energy میں بدلتا ہے۔"
        ],
        [
          "Induction",
          "coil کے قریب moving magnet current induce کرتا ہے۔"
        ]
      ],
      "quick": [
        "Use right-hand grip rule for magnetic field around current.",
        "Motor and generator are reverse applications.",
        "Induced voltage increases with faster motion, stronger magnet, and more turns.",
        "Electromagnets can be switched on and off."
      ],
      "quickUr": [
        "Current کے گرد magnetic field کے لیے right-hand grip rule استعمال کریں۔",
        "Motor اور generator reverse applications ہیں۔",
        "Faster motion، stronger magnet اور more turns سے induced voltage بڑھتا ہے۔",
        "Electromagnets on/off کیے جا سکتے ہیں۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "Current in a wire produces...",
          "options": [
            "magnetic field",
            "sound only",
            "gravity only"
          ],
          "answer": "magnetic field"
        },
        {
          "type": "select",
          "text": "Electric motor converts electrical energy into...",
          "options": [
            "mechanical energy",
            "chemical energy only",
            "nuclear energy"
          ],
          "answer": "mechanical energy"
        },
        {
          "type": "select",
          "text": "Generator converts mechanical energy into...",
          "options": [
            "electrical energy",
            "light only",
            "heat only"
          ],
          "answer": "electrical energy"
        },
        {
          "type": "radio",
          "text": "True or False: Electromagnets can be switched on and off.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Electromagnetic induction needs changing magnetic ___.",
          "answer": "flux"
        },
        {
          "type": "select",
          "text": "Which core strengthens an electromagnet?",
          "options": [
            "Soft iron",
            "Wood",
            "Plastic"
          ],
          "answer": "Soft iron"
        },
        {
          "type": "select",
          "text": "More turns in a coil usually make electromagnet...",
          "options": [
            "stronger",
            "weaker always",
            "neutral"
          ],
          "answer": "stronger"
        },
        {
          "type": "radio",
          "text": "True or False: A current-carrying conductor in magnetic field can experience force.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: A generator works on electromagnetic ___.",
          "answer": "induction"
        },
        {
          "type": "select",
          "text": "Which device uses electromagnetism?",
          "options": [
            "Electric motor",
            "Plain mirror",
            "Measuring cylinder"
          ],
          "answer": "Electric motor"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "Wire میں current کیا produce کرتا ہے؟",
          "options": [
            "magnetic field",
            "صرف sound",
            "صرف gravity"
          ],
          "answer": "magnetic field"
        },
        {
          "type": "select",
          "text": "Electric motor electrical energy کو کس میں بدلتا ہے؟",
          "options": [
            "mechanical energy",
            "صرف chemical energy",
            "nuclear energy"
          ],
          "answer": "mechanical energy"
        },
        {
          "type": "select",
          "text": "Generator mechanical energy کو کس میں بدلتا ہے؟",
          "options": [
            "electrical energy",
            "صرف light",
            "صرف heat"
          ],
          "answer": "electrical energy"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Electromagnets on/off کیے جا سکتے ہیں۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Electromagnetic induction کے لیے changing magnetic ___ چاہیے۔",
          "answer": "flux"
        },
        {
          "type": "select",
          "text": "Electromagnet کو کون سا core strengthen کرتا ہے؟",
          "options": [
            "Soft iron",
            "Wood",
            "Plastic"
          ],
          "answer": "Soft iron"
        },
        {
          "type": "select",
          "text": "Coil کے more turns electromagnet کو عموماً...",
          "options": [
            "stronger",
            "ہمیشہ weaker",
            "neutral"
          ],
          "answer": "stronger"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Magnetic field میں current-carrying conductor پر force لگ سکتی ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Generator electromagnetic ___ پر کام کرتا ہے۔",
          "answer": "induction"
        },
        {
          "type": "select",
          "text": "Electromagnetism کون سا device استعمال کرتا ہے؟",
          "options": [
            "Electric motor",
            "Plain mirror",
            "Measuring cylinder"
          ],
          "answer": "Electric motor"
        }
      ]
    },
    "physics-basic-electronics": {
      "title": "Physics: Basic Electronics",
      "titleUr": "طبیعیات: بنیادی الیکٹرونکس",
      "intro": "Study conductors, insulators, semiconductors, diodes, rectification, transistors introduction, and logic gates introduction. This chapter shows how materials and components control current in modern electronic devices.",
      "introUr": "conductors، insulators، semiconductors، diodes، rectification، transistors کا تعارف اور logic gates کا تعارف سیکھیں۔ یہ باب دکھاتا ہے کہ materials اور components modern electronic devices میں current کو کیسے control کرتے ہیں۔",
      "focus": [
        "Conductors allow current easily; insulators resist current strongly",
        "Semiconductors have conductivity between conductors and insulators and can be controlled by doping",
        "A diode allows current mainly in one direction",
        "Rectification converts alternating current into direct current",
        "Logic gates process digital signals using truth-table rules"
      ],
      "focusUr": [
        "Conductors current آسانی سے allow کرتے ہیں؛ insulators current کو strongly resist کرتے ہیں",
        "Semiconductors کی conductivity conductors اور insulators کے درمیان ہوتی ہے اور doping سے control ہو سکتی ہے",
        "Diode current کو mainly ایک direction میں allow کرتا ہے",
        "Rectification alternating current کو direct current میں convert کرتی ہے",
        "Logic gates truth-table rules سے digital signals process کرتے ہیں"
      ],
      "examples": [
        [
          "Conductor",
          "Copper wire."
        ],
        [
          "Insulator",
          "Rubber or plastic."
        ],
        [
          "Semiconductor",
          "Silicon."
        ],
        [
          "Diode",
          "Used in rectifier circuits."
        ]
      ],
      "examplesUr": [
        [
          "Conductor",
          "copper wire۔"
        ],
        [
          "Insulator",
          "rubber یا plastic۔"
        ],
        [
          "Semiconductor",
          "silicon۔"
        ],
        [
          "Diode",
          "rectifier circuits میں used۔"
        ]
      ],
      "quick": [
        "Diode forward bias allows current more easily than reverse bias.",
        "Rectifier changes AC to DC.",
        "Transistors can act as switches or amplifiers.",
        "AND, OR, NOT gates are basic digital logic gates."
      ],
      "quickUr": [
        "Diode forward bias میں reverse bias سے زیادہ آسانی سے current allow کرتا ہے۔",
        "Rectifier AC کو DC میں بدلتا ہے۔",
        "Transistors switches یا amplifiers کے طور پر کام کر سکتے ہیں۔",
        "AND، OR، NOT basic digital logic gates ہیں۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "Copper is a good...",
          "options": [
            "conductor",
            "insulator",
            "semiconductor only"
          ],
          "answer": "conductor"
        },
        {
          "type": "select",
          "text": "Rubber is an...",
          "options": [
            "insulator",
            "conductor",
            "diode"
          ],
          "answer": "insulator"
        },
        {
          "type": "select",
          "text": "Silicon is a common...",
          "options": [
            "semiconductor",
            "insulator only",
            "logic output"
          ],
          "answer": "semiconductor"
        },
        {
          "type": "radio",
          "text": "True or False: A diode allows current mainly in one direction.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Rectification converts AC into ___.",
          "answer": "DC"
        },
        {
          "type": "select",
          "text": "Transistor can be used as a...",
          "options": [
            "switch",
            "lens only",
            "magnet only"
          ],
          "answer": "switch"
        },
        {
          "type": "select",
          "text": "Which is a logic gate?",
          "options": [
            "AND",
            "H2O",
            "NaCl"
          ],
          "answer": "AND"
        },
        {
          "type": "radio",
          "text": "True or False: NOT gate inverts input.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Digital circuits use binary 0 and ___.",
          "answer": "1"
        },
        {
          "type": "select",
          "text": "Forward bias usually makes diode...",
          "options": [
            "conduct",
            "block completely always",
            "melt"
          ],
          "answer": "conduct"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "Copper اچھا کیا ہے؟",
          "options": [
            "conductor",
            "insulator",
            "صرف semiconductor"
          ],
          "answer": "conductor"
        },
        {
          "type": "select",
          "text": "Rubber کیا ہے؟",
          "options": [
            "insulator",
            "conductor",
            "diode"
          ],
          "answer": "insulator"
        },
        {
          "type": "select",
          "text": "Silicon common کیا ہے؟",
          "options": [
            "semiconductor",
            "صرف insulator",
            "logic output"
          ],
          "answer": "semiconductor"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Diode current کو mainly ایک direction میں allow کرتا ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Rectification AC کو ___ میں convert کرتی ہے۔",
          "answer": "DC"
        },
        {
          "type": "select",
          "text": "Transistor کس کے طور پر use ہو سکتا ہے؟",
          "options": [
            "switch",
            "صرف lens",
            "صرف magnet"
          ],
          "answer": "switch"
        },
        {
          "type": "select",
          "text": "Logic gate کون سا ہے؟",
          "options": [
            "AND",
            "H2O",
            "NaCl"
          ],
          "answer": "AND"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: NOT gate input کو invert کرتا ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Digital circuits binary 0 اور ___ use کرتے ہیں۔",
          "answer": "1"
        },
        {
          "type": "select",
          "text": "Forward bias عموماً diode کو کیا بناتا ہے؟",
          "options": [
            "conduct",
            "ہمیشہ مکمل block",
            "melt"
          ],
          "answer": "conduct"
        }
      ]
    },
    "physics-information-and-communication-technology": {
      "title": "Physics: Information and Communication Technology",
      "titleUr": "طبیعیات: معلوماتی اور مواصلاتی ٹیکنالوجی",
      "intro": "Learn information transfer, radio, TV, mobile communication, internet basics, optical fiber, and digital versus analog signals. This chapter connects wave physics and electronics with everyday communication systems.",
      "introUr": "information transfer، radio، TV، mobile communication، internet basics، optical fiber، اور digital vs analog signals سیکھیں۔ یہ باب wave physics اور electronics کو daily communication systems سے جوڑتا ہے۔",
      "focus": [
        "Communication systems have transmitter, channel, and receiver",
        "Radio, TV, and mobile communication use electromagnetic waves",
        "Internet transfers data through networks using electrical, radio, or optical signals",
        "Optical fiber carries information using light and total internal reflection",
        "Digital signals use discrete values and are less affected by noise than analog signals"
      ],
      "focusUr": [
        "Communication systems میں transmitter، channel اور receiver ہوتے ہیں",
        "Radio، TV اور mobile communication electromagnetic waves استعمال کرتے ہیں",
        "Internet networks کے ذریعے electrical، radio یا optical signals سے data transfer کرتا ہے",
        "Optical fiber light اور total internal reflection سے information لے جاتا ہے",
        "Digital signals discrete values استعمال کرتے ہیں اور analog signals کے مقابلے میں noise سے کم متاثر ہوتے ہیں"
      ],
      "examples": [
        [
          "Transmitter",
          "Converts message into signal."
        ],
        [
          "Receiver",
          "Converts signal back into information."
        ],
        [
          "Optical fiber",
          "Carries light pulses."
        ],
        [
          "Digital signal",
          "Uses 0s and 1s."
        ]
      ],
      "examplesUr": [
        [
          "Transmitter",
          "message کو signal میں convert کرتا ہے۔"
        ],
        [
          "Receiver",
          "signal کو واپس information میں convert کرتا ہے۔"
        ],
        [
          "Optical fiber",
          "light pulses carry کرتا ہے۔"
        ],
        [
          "Digital signal",
          "0s اور 1s استعمال کرتا ہے۔"
        ]
      ],
      "quick": [
        "A channel can be wire, optical fiber, air, or space.",
        "Modulation helps carry information on carrier waves.",
        "Optical fibers are fast, thin, and resist electromagnetic interference.",
        "ICT applications include education, banking, medicine, navigation, weather, and commerce."
      ],
      "quickUr": [
        "Channel wire، optical fiber، air یا space ہو سکتا ہے۔",
        "Modulation carrier waves پر information carry کرنے میں مدد دیتی ہے۔",
        "Optical fibers fast، thin اور electromagnetic interference کے خلاف resistant ہوتے ہیں۔",
        "ICT applications میں education، banking، medicine، navigation، weather اور commerce شامل ہیں۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "A basic communication system includes transmitter, channel, and...",
          "options": [
            "receiver",
            "battery only",
            "lens only"
          ],
          "answer": "receiver"
        },
        {
          "type": "select",
          "text": "Optical fiber carries information using...",
          "options": [
            "light",
            "sound only",
            "water waves"
          ],
          "answer": "light"
        },
        {
          "type": "select",
          "text": "Digital signals commonly use...",
          "options": [
            "0 and 1",
            "only 5 and 9",
            "only letters"
          ],
          "answer": "0 and 1"
        },
        {
          "type": "radio",
          "text": "True or False: Mobile communication uses electromagnetic waves.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Optical fiber works by total internal ___.",
          "answer": "reflection"
        },
        {
          "type": "select",
          "text": "The part that sends signal is...",
          "options": [
            "transmitter",
            "receiver only",
            "screen only"
          ],
          "answer": "transmitter"
        },
        {
          "type": "select",
          "text": "Internet transfers...",
          "options": [
            "data",
            "mass only",
            "heat only"
          ],
          "answer": "data"
        },
        {
          "type": "radio",
          "text": "True or False: Digital signals are usually more noise-resistant than analog signals.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: A path used to carry signal is called a ___.",
          "answer": "channel"
        },
        {
          "type": "select",
          "text": "Which is an ICT application?",
          "options": [
            "Online education",
            "Combustion",
            "Neutralization"
          ],
          "answer": "Online education"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "Basic communication system میں transmitter، channel اور کیا ہوتا ہے؟",
          "options": [
            "receiver",
            "صرف battery",
            "صرف lens"
          ],
          "answer": "receiver"
        },
        {
          "type": "select",
          "text": "Optical fiber information کس سے carry کرتا ہے؟",
          "options": [
            "light",
            "صرف sound",
            "water waves"
          ],
          "answer": "light"
        },
        {
          "type": "select",
          "text": "Digital signals عام طور پر کیا use کرتے ہیں؟",
          "options": [
            "0 and 1",
            "صرف 5 and 9",
            "صرف letters"
          ],
          "answer": "0 and 1"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Mobile communication electromagnetic waves استعمال کرتی ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Optical fiber total internal ___ سے کام کرتا ہے۔",
          "answer": "reflection"
        },
        {
          "type": "select",
          "text": "Signal send کرنے والا part کیا ہے؟",
          "options": [
            "transmitter",
            "صرف receiver",
            "صرف screen"
          ],
          "answer": "transmitter"
        },
        {
          "type": "select",
          "text": "Internet کیا transfer کرتا ہے؟",
          "options": [
            "data",
            "صرف mass",
            "صرف heat"
          ],
          "answer": "data"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Digital signals عموماً analog سے زیادہ noise-resistant ہیں۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Signal carry کرنے والا path ___ کہلاتا ہے۔",
          "answer": "channel"
        },
        {
          "type": "select",
          "text": "ICT application کون سی ہے؟",
          "options": [
            "Online education",
            "Combustion",
            "Neutralization"
          ],
          "answer": "Online education"
        }
      ]
    },
    "physics-atomic-and-nuclear-physics": {
      "title": "Physics: Atomic and Nuclear Physics",
      "titleUr": "طبیعیات: ایٹمی اور جوہری طبیعیات",
      "intro": "Study atomic structure, radioactivity, alpha, beta and gamma radiation, half-life introduction, nuclear fission and fusion, and uses and hazards of radiation. This chapter connects the nucleus with energy, medicine, industry, and safety.",
      "introUr": "atomic structure، radioactivity، alpha، beta اور gamma radiation، half-life کا تعارف، nuclear fission اور fusion، radiation کے uses اور hazards سیکھیں۔ یہ باب nucleus کو energy، medicine، industry اور safety سے جوڑتا ہے۔",
      "focus": [
        "Atoms have nucleus containing protons and neutrons, with electrons around it",
        "Radioactivity is spontaneous emission from unstable nuclei",
        "Alpha, beta, and gamma radiations differ in charge, mass, penetration, and ionizing power",
        "Half-life is time for half of radioactive nuclei to decay",
        "Fission splits heavy nuclei; fusion combines light nuclei and powers stars"
      ],
      "focusUr": [
        "Atoms میں nucleus ہوتا ہے جس میں protons اور neutrons ہوتے ہیں، electrons ارد گرد ہوتے ہیں",
        "Radioactivity unstable nuclei سے spontaneous emission ہے",
        "Alpha، beta اور gamma radiations charge، mass، penetration اور ionizing power میں مختلف ہیں",
        "Half-life وہ time ہے جس میں radioactive nuclei کا half decay ہو",
        "Fission heavy nuclei کو split کرتی ہے؛ fusion light nuclei کو combine کرتی ہے اور stars کو power دیتی ہے"
      ],
      "examples": [
        [
          "Alpha",
          "Helium nucleus, low penetration, high ionization."
        ],
        [
          "Beta",
          "Fast electron or positron."
        ],
        [
          "Gamma",
          "High-energy electromagnetic radiation."
        ],
        [
          "Use",
          "Cancer treatment, sterilization, tracers, power generation."
        ]
      ],
      "examplesUr": [
        [
          "Alpha",
          "helium nucleus، low penetration، high ionization۔"
        ],
        [
          "Beta",
          "fast electron یا positron۔"
        ],
        [
          "Gamma",
          "high-energy electromagnetic radiation۔"
        ],
        [
          "Use",
          "cancer treatment، sterilization، tracers، power generation۔"
        ]
      ],
      "quick": [
        "Alpha is stopped by paper; beta by thin aluminum; gamma needs thick lead/concrete for reduction.",
        "Radiation hazards include cell damage and cancer risk.",
        "Use time, distance, and shielding for radiation safety.",
        "Nuclear energy has high output but requires careful waste and safety management."
      ],
      "quickUr": [
        "Alpha paper سے رک جاتی ہے؛ beta thin aluminum سے؛ gamma کو reduce کرنے کے لیے thick lead/concrete چاہیے۔",
        "Radiation hazards میں cell damage اور cancer risk شامل ہیں۔",
        "Radiation safety کے لیے time، distance اور shielding استعمال کریں۔",
        "Nuclear energy high output دیتی ہے مگر waste اور safety management ضروری ہے۔"
      ],
      "questions": [
        {
          "type": "select",
          "text": "Radioactivity comes from unstable...",
          "options": [
            "nuclei",
            "mirrors",
            "lenses"
          ],
          "answer": "nuclei"
        },
        {
          "type": "select",
          "text": "Alpha particle is a...",
          "options": [
            "helium nucleus",
            "sound wave",
            "logic gate"
          ],
          "answer": "helium nucleus"
        },
        {
          "type": "select",
          "text": "Most penetrating radiation is...",
          "options": [
            "gamma",
            "alpha",
            "beta only"
          ],
          "answer": "gamma"
        },
        {
          "type": "radio",
          "text": "True or False: Half-life is time for half nuclei to decay.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Nuclear fission splits a heavy ___.",
          "answer": "nucleus"
        },
        {
          "type": "select",
          "text": "Fusion combines...",
          "options": [
            "light nuclei",
            "resistors",
            "sound waves"
          ],
          "answer": "light nuclei"
        },
        {
          "type": "select",
          "text": "Alpha radiation can be stopped by...",
          "options": [
            "paper",
            "thick lead only",
            "nothing"
          ],
          "answer": "paper"
        },
        {
          "type": "radio",
          "text": "True or False: Radiation can be useful in medicine.",
          "options": [
            "True",
            "False"
          ],
          "answer": "True"
        },
        {
          "type": "text",
          "text": "Complete: Radiation safety uses time, distance, and ___.",
          "answer": "shielding"
        },
        {
          "type": "select",
          "text": "Which is a radiation hazard?",
          "options": [
            "Cell damage",
            "Better eyesight always",
            "No biological effect"
          ],
          "answer": "Cell damage"
        }
      ],
      "questionsUr": [
        {
          "type": "select",
          "text": "Radioactivity کس سے آتی ہے؟",
          "options": [
            "unstable nuclei",
            "mirrors",
            "lenses"
          ],
          "answer": "unstable nuclei"
        },
        {
          "type": "select",
          "text": "Alpha particle کیا ہے؟",
          "options": [
            "helium nucleus",
            "sound wave",
            "logic gate"
          ],
          "answer": "helium nucleus"
        },
        {
          "type": "select",
          "text": "سب سے زیادہ penetrating radiation کون سی ہے؟",
          "options": [
            "gamma",
            "alpha",
            "صرف beta"
          ],
          "answer": "gamma"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Half-life وہ time ہے جس میں half nuclei decay ہوں۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Nuclear fission heavy ___ کو split کرتی ہے۔",
          "answer": "nucleus"
        },
        {
          "type": "select",
          "text": "Fusion کس کو combine کرتی ہے؟",
          "options": [
            "light nuclei",
            "resistors",
            "sound waves"
          ],
          "answer": "light nuclei"
        },
        {
          "type": "select",
          "text": "Alpha radiation کس سے stop ہو سکتی ہے؟",
          "options": [
            "paper",
            "صرف thick lead",
            "کچھ نہیں"
          ],
          "answer": "paper"
        },
        {
          "type": "radio",
          "text": "درست یا غلط: Radiation medicine میں useful ہو سکتی ہے۔",
          "options": [
            "درست",
            "غلط"
          ],
          "answer": "درست"
        },
        {
          "type": "text",
          "text": "خالی جگہ پر کریں: Radiation safety میں time، distance اور ___ استعمال ہوتے ہیں۔",
          "answer": "shielding"
        },
        {
          "type": "select",
          "text": "Radiation hazard کون سا ہے؟",
          "options": [
            "Cell damage",
            "ہمیشہ better eyesight",
            "کوئی biological effect نہیں"
          ],
          "answer": "Cell damage"
        }
      ]
    }
  };

  const TOPICS_BY_GRADE = { 1: TOPICS, 2: TOPICS_GRADE2, 3: TOPICS_GRADE3, 4: TOPICS_GRADE4, 5: TOPICS_GRADE5, 6: TOPICS_GRADE6, 7: TOPICS_GRADE7, 8: TOPICS_GRADE8, 9: TOPICS_GRADE9, 10: TOPICS_GRADE10 };

  function cfg(){ return window.SCIENCE_PAGE || { grade: 1, slug: 'myself-and-my-body', lang: 'en' }; }
  function gradeNumber(){ return Number(cfg().grade) || 1; }
  function topicMap(){ return TOPICS_BY_GRADE[gradeNumber()] || TOPICS; }
  function topic(){ return topicMap()[cfg().slug] || TOPICS['myself-and-my-body']; }
  function isUr(){ return cfg().lang === 'ur'; }
  function esc(s){ return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
  function pickList(en, ur){ return isUr() ? (ur || en) : en; }
  function shuffle(a){ const r = a.slice(); for(let i=r.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [r[i],r[j]]=[r[j],r[i]]; } return r; }
  function norm(v){ return String(v || '').trim().toLowerCase().replace(/\s+/g, ' '); }
  function match(user, q){ const answers = [q.answer].concat(q.alt || []); return answers.some(a => norm(user) === norm(a)); }
  function title(){ const t = topic(); return isUr() ? t.titleUr : t.title; }
  function gradeLabel(){ return isUr() ? `جماعت ${gradeNumber()}` : `Grade ${gradeNumber()}`; }
  function gradeScienceLabel(){ return isUr() ? `جماعت ${gradeNumber()} سائنس` : `Grade ${gradeNumber()} Science`; }
  function topicUrl(kind, lang){ return `science-grade${gradeNumber()}-${cfg().slug}-${kind}${lang === 'ur' ? '-ur' : ''}.html`; }
  function homeHash(){ return `index.html#grade-${gradeNumber()}-science`; }

  function renderHeader(){
    const linkStyle = 'font-weight:700;font-size:.85rem;color:#5a6076;text-decoration:none;padding:6px 12px;border-radius:8px';
    return `<style>.science-header-nav{display:flex;align-items:center;gap:4px;flex-wrap:wrap}.science-burger{display:none;flex-direction:column;justify-content:center;gap:5px;background:none;border:0;cursor:pointer;padding:8px;border-radius:8px}.science-burger span{display:block;width:22px;height:2px;background:#1a1f36;border-radius:2px;transition:transform .25s ease,opacity .25s ease}.science-burger.is-open span:nth-child(1){transform:translateY(7px) rotate(45deg)}.science-burger.is-open span:nth-child(2){opacity:0}.science-burger.is-open span:nth-child(3){transform:translateY(-7px) rotate(-45deg)}@media(max-width:640px){.science-burger{display:flex}.science-header-nav{display:none!important;flex-direction:column;position:absolute;top:56px;left:0;right:0;background:#fff;border-bottom:2px solid #e2e6f0;padding:8px 20px 18px;z-index:199;gap:2px;box-shadow:0 6px 20px rgba(0,0,0,.1);align-items:stretch}.science-header-nav.nav-open{display:flex!important}.science-header-nav a{width:100%;padding:10px 14px!important}}</style><header class="site-header" style="background:#fff;border-bottom:2px solid #e2e6f0;padding:0 20px;position:sticky;top:0;z-index:200"><div class="header-inner" style="max-width:860px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;height:56px"><a href="../index.html" class="logo-link"><img src="../logo.png" alt="LearnPad" class="logo-img" style="height:34px;width:auto;display:block"></a><nav id="siteNav" class="science-header-nav"><a style="${linkStyle}" href="../index.html">Home</a><a style="${linkStyle}" href="index.html">Worksheets</a><a style="${linkStyle}" href="../learnings/">Tech in Urdu</a><a style="${linkStyle}" href="contact.html">Contact</a></nav><button class="burger-btn science-burger" id="burgerBtn" aria-label="Toggle navigation menu" aria-expanded="false" aria-controls="siteNav"><span></span><span></span><span></span></button></div></header>`;
  }

  function renderHelpShell(){
    const t = topic();
    const focus = pickList(t.focus, t.focusUr);
    const examples = pickList(t.examples, t.examplesUr);
    const quick = pickList(t.quick, t.quickUr);
    document.documentElement.lang = isUr() ? 'ur' : 'en';
    document.documentElement.dir = isUr() ? 'rtl' : 'ltr';
    document.body.innerHTML = renderHeader() + `<div class="page-wrap">
      <nav class="breadcrumb" aria-label="Breadcrumb"><a href="index.html">${isUr() ? 'ہوم' : 'Home'}</a><span>›</span><a href="${homeHash()}">${gradeScienceLabel()}</a><span>›</span><span>${esc(title())}</span></nav>
      <header class="hero">
        <div class="hero-badges"><span class="badge badge-solid">${gradeLabel()}</span><span class="badge badge-outline">${isUr() ? 'سائنس' : 'Science'}</span></div>
        <h1>${esc(title())}</h1>
        <p class="hero-intro">${esc(isUr() ? t.introUr : t.intro)}</p>
        <div class="hero-meta"><span class="meta-pill">${isUr() ? 'تقريبا 5 منٹ کا سبق' : '~5 min read'}</span><a href="${topicUrl('worksheet', isUr() ? 'ur' : 'en')}" class="btn btn-primary">${isUr() ? 'ورک شیٹ شروع کریں' : 'Jump to Worksheet'}</a><a href="${topicUrl('help', isUr() ? 'en' : 'ur')}" class="btn btn-white" style="border:2px solid var(--clr-accent);color:var(--clr-accent)">${isUr() ? 'English Guide' : 'اردو گائیڈ'}</a></div>
      </header>
      <section><p class="section-label">${isUr() ? 'حصہ 1' : 'Section 1'}</p><h2 class="section-title">${isUr() ? 'اہم باتیں' : 'What to Learn'}</h2><div class="card"><ul>${focus.map(x => `<li>${esc(x)}</li>`).join('')}</ul></div></section>
      <section><p class="section-label">${isUr() ? 'حصہ 2' : 'Section 2'}</p><h2 class="section-title">${isUr() ? 'مثالیں' : 'Examples'}</h2><div class="example-grid">${examples.map(e => `<div class="example-item"><strong>${esc(e[0])}</strong><br>${esc(e[1])}</div>`).join('')}</div></section>
      <section><p class="section-label">${isUr() ? 'حصہ 3' : 'Section 3'}</p><h2 class="section-title">${isUr() ? 'یاد رکھنے کا طریقہ' : 'Quick Tips'}</h2><div class="card"><ul>${quick.map(x => `<li>${esc(x)}</li>`).join('')}</ul></div></section>
      <div class="footer-cta"><h2>${isUr() ? 'اب مشق کریں' : 'Ready to Practice?'}</h2><p>${isUr() ? 'اسی موضوع کی ورک شیٹ حل کریں اور اپنا جواب فورا چیک کریں۔' : 'Open the matching worksheet and check your answers instantly.'}</p><a class="btn" href="${topicUrl('worksheet', isUr() ? 'ur' : 'en')}">${isUr() ? 'ورک شیٹ کھولیں' : 'Open Worksheet'}</a></div>
    </div>`;
  }

  function qSet(){ return shuffle(pickList(topic().questions, topic().questionsUr)).slice(0, 10); }
  let questions = [], submitted = false, score = 0, compact = { on:false, idx:0, correct:0, log:[], answered:false, advanceReady:false };

  function inputHtml(q, i, compactMode){
    const id = compactMode ? 'cvAnswer' : `qinput-${i}`;
    if(q.type === 'select') return `<select class="${compactMode ? 'cv-select' : 'q-input'}" id="${id}"><option value="">${isUr() ? 'منتخب کریں' : 'Choose'}</option>${shuffle(q.options).map(o => `<option value="${esc(o)}">${esc(o)}</option>`).join('')}</select>`;
    if(q.type === 'radio') return `<div class="${compactMode ? 'cv-radio-group' : 'radio-row'}">${shuffle(q.options).map(o => `<label class="${compactMode ? 'cv-radio-label' : 'radio-pill'}"><input type="radio" name="${compactMode ? 'cvRadio' : `qradio-${i}`}" value="${esc(o)}"> ${esc(o)}</label>`).join('')}</div>`;
    return `<input class="${compactMode ? 'cv-input' : 'q-input'}" id="${id}" type="text" autocomplete="off" placeholder="${isUr() ? 'جواب' : 'answer'}">`;
  }
  function getAnswer(q, i){
    if(q.type === 'radio'){ const c = document.querySelector(`input[name="qradio-${i}"]:checked`); return c ? c.value : ''; }
    const el = document.getElementById(`qinput-${i}`); return el ? el.value : '';
  }
  function renderQuestions(){
    const list = document.getElementById('questionsList');
    list.innerHTML = questions.map((q, i) => `<li class="q-card" id="qcard-${i}"><div class="q-head"><span class="q-num">${i + 1}</span><span class="q-icon">SCI</span></div><p class="q-text">${esc(q.text)}</p>${inputHtml(q, i, false)}<div class="skip-tip" id="tip-${i}"></div></li>`).join('');
  }
  function renderWorksheetShell(){
    const t = topic();
    questions = qSet();
    document.documentElement.lang = isUr() ? 'ur' : 'en';
    document.documentElement.dir = isUr() ? 'rtl' : 'ltr';
    document.body.innerHTML = renderHeader() + `<div class="toast" id="toast" role="status" aria-live="polite"></div><div class="page-wrap">
      <nav class="breadcrumb"><a href="index.html">${isUr() ? 'ہوم' : 'Home'}</a><span>›</span><a href="${homeHash()}">${gradeScienceLabel()}</a><span>›</span><span>${esc(title())}</span></nav>
      <header class="worksheet-hero"><div><div class="hero-badges"><span class="badge badge-solid">${gradeLabel()}</span><span class="badge badge-outline">${isUr() ? 'سائنس ورک شیٹ' : 'Science Worksheet'}</span></div><h1>${esc(title())}</h1><p>${esc(isUr() ? t.introUr : t.intro)}</p></div><a href="${topicUrl('help', isUr() ? 'ur' : 'en')}" class="btn btn-white">${isUr() ? 'مدد دیکھیں' : 'Read Help'}</a></header>
      <div class="worksheet-controls"><button class="btn btn-neutral" id="newWsBtn">${isUr() ? 'نئی ورک شیٹ' : 'New Worksheet'}</button><button class="btn btn-neutral" id="compactBtn">${isUr() ? 'کمپیکٹ موڈ' : 'Compact View'}</button><a class="btn btn-neutral" href="${topicUrl('worksheet', isUr() ? 'en' : 'ur')}">${isUr() ? 'English Worksheet' : 'اردو Worksheet'}</a></div>
      <div class="score-banner" id="scoreBanner"><div class="score-num" id="scoreNum">0/10</div><div class="score-msg" id="scoreMsg"></div><div class="progress-track"><div class="progress-fill" id="progressFill" style="width:0%"></div></div><div class="post-submit" id="postSubmitBtns"><button class="btn btn-outline btn-lg" id="showAnswersBtn">${isUr() ? 'جوابات دکھائیں' : 'Show Answers'}</button><button class="btn btn-outline btn-lg" id="shareBtn">${isUr() ? 'نتیجہ شیئر کریں' : 'Share Results'}</button></div></div>
      <ol class="questions-list" id="questionsList"></ol><div class="bottom-actions"><button class="btn btn-primary btn-full" id="submitBtn">${isUr() ? 'ورک شیٹ جمع کریں' : 'Submit Worksheet'}</button><button class="btn btn-neutral btn-full" id="newWsBtnBottom">${isUr() ? 'نئی ورک شیٹ' : 'New Worksheet'}</button></div>
    </div><div id="cvOverlay" class="cv-overlay hidden"><div class="cv-header"><button class="cv-exit" id="cvExit">× ${isUr() ? 'باہر' : 'Exit'}</button><div class="cv-prog-text">${isUr() ? 'سوال' : 'Question'} <span id="cvQNum">1</span> / 10</div><div class="cv-score-chip" id="cvScoreChip">0 ✓</div></div><div class="cv-progress-track"><div class="cv-progress-fill" id="cvProgressFill"></div></div><div class="cv-body"><div class="cv-card" id="cvCard"><div class="cv-q-label" id="cvLabel"></div><div class="cv-question-text" id="cvText"></div><div id="cvAnswerArea"></div><div class="cv-feedback hidden" id="cvFeedback"></div></div><div class="cv-result hidden" id="cvResult"><div class="cv-result-score-big" id="cvResultScore"></div><div class="cv-result-msg" id="cvResultMsg"></div><button class="btn btn-primary btn-lg" id="cvPlayAgain">${isUr() ? 'دوبارہ کھیلیں' : 'Play Again'}</button><button class="btn btn-outline btn-lg" id="cvShare">${isUr() ? 'شیئر کریں' : 'Share Results'}</button></div></div><div class="cv-footer" id="cvFooter"><button class="cv-btn-skip" id="cvSkip">${isUr() ? 'چھوڑیں' : 'Skip'}</button><button class="cv-btn-submit" id="cvSubmit">${isUr() ? 'جواب چیک کریں' : 'Check Answer'}</button></div></div>`;
    renderQuestions();
    bindWorksheet();
  }
  function toast(msg){ const t = document.getElementById('toast'); if(!t) return; t.textContent = msg; t.classList.add('show'); setTimeout(() => t.classList.remove('show'), 2500); }
  function submit(){
    if(submitted) return; submitted = true; score = 0;
    questions.forEach((q, i) => { const ok = match(getAnswer(q, i), q); if(ok) score++; const card = document.getElementById(`qcard-${i}`); card.classList.add(ok ? 'correct' : 'wrong'); document.getElementById(`tip-${i}`).textContent = ok ? (isUr() ? 'درست' : 'Correct') : `${isUr() ? 'درست جواب' : 'Answer'}: ${q.answer}`; });
    document.getElementById('scoreNum').textContent = `${score}/10`;
    document.getElementById('scoreMsg').textContent = score >= 8 ? (isUr() ? 'بہت خوب!' : 'Excellent work!') : score >= 5 ? (isUr() ? 'اچھی کوشش!' : 'Good effort!') : (isUr() ? 'مدد پڑھ کر دوبارہ کوشش کریں۔' : 'Read the help page and try again.');
    document.getElementById('progressFill').style.width = `${score * 10}%`;
    document.getElementById('scoreBanner').classList.add('visible');
    document.getElementById('postSubmitBtns').classList.add('visible');
  }
  function newWorksheet(){ submitted = false; score = 0; questions = qSet(); renderQuestions(); document.getElementById('scoreBanner').classList.remove('visible'); document.getElementById('postSubmitBtns').classList.remove('visible'); document.getElementById('submitBtn').disabled = false; toast(isUr() ? 'نئی ورک شیٹ تیار ہے' : 'New worksheet ready!'); }
  function showAnswers(){ questions.forEach((q, i) => { document.getElementById(`tip-${i}`).textContent = `${isUr() ? 'درست جواب' : 'Answer'}: ${q.answer}`; }); }
  function share(){
    const text = `${isUr() ? 'سائنس ورک شیٹ' : 'Science Worksheet'} - ${title()} (${gradeLabel()})\n${isUr() ? 'اسکور' : 'Score'}: ${score}/10\n${location.href}`;
    if(navigator.share) navigator.share({ title: title(), text, url: location.href }).catch(() => {});
    else if(navigator.clipboard) navigator.clipboard.writeText(text).then(() => toast(isUr() ? 'نتیجہ کاپی ہوگیا' : 'Results copied!'));
  }
  function cvAnswer(){
    const q = compact.questions[compact.idx];
    if(q.type === 'radio'){ const c = document.querySelector('input[name="cvRadio"]:checked'); return c ? c.value : ''; }
    const el = document.getElementById('cvAnswer'); return el ? el.value : '';
  }
  function cvRender(){
    if(compact.idx >= 10) return cvResult();
    const q = compact.questions[compact.idx];
    document.getElementById('cvQNum').textContent = compact.idx + 1;
    document.getElementById('cvScoreChip').textContent = `${compact.correct} ✓`;
    document.getElementById('cvProgressFill').style.width = `${compact.idx * 10}%`;
    document.getElementById('cvLabel').textContent = `${isUr() ? 'سوال' : 'Question'} ${compact.idx + 1}`;
    document.getElementById('cvText').textContent = q.text;
    document.getElementById('cvAnswerArea').innerHTML = inputHtml(q, compact.idx, true);
    document.getElementById('cvFeedback').className = 'cv-feedback hidden';
    document.getElementById('cvCard').classList.remove('cv-correct', 'cv-wrong');
    document.getElementById('cvSubmit').textContent = isUr() ? 'جواب چیک کریں' : 'Check Answer';
    document.getElementById('cvSubmit').disabled = false;
    document.getElementById('cvSkip').disabled = false;
    compact.answered = false;
    compact.advanceReady = false;
  }
  function cvStart(){ compact = { on:true, idx:0, correct:0, log:[], answered:false, advanceReady:false, questions:qSet() }; document.getElementById('cvOverlay').classList.remove('hidden'); document.getElementById('cvResult').classList.add('hidden'); document.getElementById('cvCard').classList.remove('hidden'); document.getElementById('cvFooter').classList.remove('hidden'); cvRender(); }
  function cvNext(){ compact.idx++; cvRender(); }
  function cvSubmit(){
    if(compact.answered) {
      if(compact.advanceReady) cvNext();
      return;
    }
    const q = compact.questions[compact.idx];
    const answer = cvAnswer();
    if(!answer) return;
    const ok = match(answer, q);
    if(ok) compact.correct++;
    compact.log.push(ok);
    compact.answered = true;
    const fb = document.getElementById('cvFeedback');
    fb.textContent = ok ? (isUr() ? 'درست!' : 'Correct!') : `${isUr() ? 'درست جواب' : 'Answer'}: ${q.answer}`;
    fb.className = `cv-feedback ${ok ? 'cv-fb-correct' : 'cv-fb-wrong'}`;
    document.getElementById('cvCard').classList.add(ok ? 'cv-correct' : 'cv-wrong');
    document.getElementById('cvScoreChip').textContent = `${compact.correct} ✓`;
    const submitBtn = document.getElementById('cvSubmit');
    submitBtn.textContent = ok ? (isUr() ? 'درست - اگلا سوال' : 'Correct - Next Question') : (compact.idx === 9 ? (isUr() ? 'نتیجہ دیکھیں' : 'Show Result') : (isUr() ? 'غلط - اگلا سوال' : 'Wrong - Next Question'));
    submitBtn.disabled = true;
    document.getElementById('cvSkip').disabled = true;
    document.querySelectorAll('#cvAnswerArea input,#cvAnswerArea select').forEach(el => { el.disabled = true; });
    setTimeout(() => { compact.advanceReady = true; submitBtn.disabled = false; }, 650);
  }
  function cvResult(){ document.getElementById('cvProgressFill').style.width = '100%'; document.getElementById('cvCard').classList.add('hidden'); document.getElementById('cvFooter').classList.add('hidden'); document.getElementById('cvResultScore').textContent = `${compact.correct}/10`; document.getElementById('cvResultMsg').textContent = compact.correct >= 8 ? (isUr() ? 'زبردست!' : 'Great science thinking!') : (isUr() ? 'اچھی کوشش!' : 'Good try!'); document.getElementById('cvResult').classList.remove('hidden'); }
  function cvShare(){ score = compact.correct; share(); }
  function bindWorksheet(){
    document.getElementById('submitBtn').addEventListener('click', submit);
    document.getElementById('newWsBtn').addEventListener('click', newWorksheet);
    document.getElementById('newWsBtnBottom').addEventListener('click', newWorksheet);
    document.getElementById('showAnswersBtn').addEventListener('click', showAnswers);
    document.getElementById('shareBtn').addEventListener('click', share);
    document.getElementById('compactBtn').addEventListener('click', cvStart);
    document.getElementById('cvExit').addEventListener('click', () => document.getElementById('cvOverlay').classList.add('hidden'));
    document.getElementById('cvSubmit').addEventListener('click', cvSubmit);
    document.getElementById('cvSkip').addEventListener('click', () => { if(compact.answered) return; compact.log.push(false); compact.idx++; cvRender(); });
    document.getElementById('cvPlayAgain').addEventListener('click', cvStart);
    document.getElementById('cvShare').addEventListener('click', cvShare);
  }

  window.Grade1SciencePages = { renderHelpShell, renderWorksheetShell };
})();
