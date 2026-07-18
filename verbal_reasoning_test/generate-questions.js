const fs=require('fs'),path=require('path');

const categories=[
 ['reading_comprehension','Reading Comprehension','عبارت کی تفہیم','📖'],
 ['main_idea','Main Idea & Summary','مرکزی خیال اور خلاصہ','🎯'],
 ['inference','Inference & Implication','استنباط اور پوشیدہ مفہوم','🔍'],
 ['context_clues','Meaning from Context','سیاق و سباق سے معنی','🧩'],
 ['synonyms','Synonyms','مترادفات','≈'],
 ['antonyms','Antonyms','متضاد الفاظ','↔'],
 ['word_analogies','Word Analogies','لفظی مماثلت','∷'],
 ['sentence_completion','Sentence Completion','جملہ مکمل کرنا','✍️'],
 ['grammar_usage','Grammar & Usage','قواعد اور درست استعمال','📝'],
 ['sentence_correction','Sentence Correction','جملے کی درستی','✓'],
 ['deductive_reasoning','Verbal Deduction','لفظی استخراج','🔗'],
 ['assumptions','Recognising Assumptions','مفروضوں کی پہچان','💭'],
 ['conclusions','Drawing Conclusions','نتیجہ اخذ کرنا','⚖️'],
 ['cause_effect','Cause & Effect','سبب اور نتیجہ','⟶'],
 ['fact_opinion','Fact vs Opinion','حقیقت اور رائے','💬'],
 ['argument_evaluation','Evaluating Arguments','دلائل کا جائزہ','🏛️'],
 ['word_classification','Word Classification','الفاظ کی درجہ بندی','🗂️'],
 ['verbal_sequencing','Verbal Sequencing','لفظی ترتیب','🔢'],
 ['idioms_proverbs','Idioms & Proverbs','محاورے اور کہاوتیں','🗣️'],
 ['tone_purpose','Tone & Author’s Purpose','لہجہ اور مصنف کا مقصد','🎭']
].map(([id,en,ur,icon])=>({id,en,ur,icon}));

const skills=[
 ['reading fluency','روانی سے پڑھنا','read aloud for twenty minutes','بیس منٹ بلند آواز سے پڑھا','read more smoothly','زیادہ روانی سے پڑھنے لگا'],
 ['spelling','ہجے','reviewed ten difficult words','دس مشکل الفاظ دہرائے','made fewer spelling mistakes','ہجوں کی غلطیاں کم کیں'],
 ['public speaking','تقریر','rehearsed in front of a mirror','آئینے کے سامنے مشق کی','spoke with greater confidence','زیادہ اعتماد سے بولا'],
 ['mental arithmetic','ذہنی حساب','solved short sums without a calculator','کیلکولیٹر کے بغیر مختصر سوال حل کیے','calculated more quickly','زیادہ تیزی سے حساب کیا'],
 ['handwriting','خوش خطی','copied one neat paragraph','ایک پیراگراف صاف لکھا','wrote more clearly','زیادہ صاف لکھنے لگا'],
 ['drawing','نقاشی','sketched one everyday object','روزمرہ کی ایک چیز کا خاکہ بنایا','noticed shapes more accurately','اشکال کو زیادہ درست پہچانا'],
 ['typing','ٹائپنگ','typed a short passage','ایک مختصر عبارت ٹائپ کی','typed faster with fewer errors','کم غلطیوں کے ساتھ تیز ٹائپ کیا'],
 ['map reading','نقشہ خوانی','traced a new route on a map','نقشے پر ایک نیا راستہ تلاش کیا','found routes more easily','راستے زیادہ آسانی سے تلاش کیے'],
 ['note-taking','نوٹ بنانا','summarised one lesson','ایک سبق کا خلاصہ لکھا','recorded key ideas clearly','اہم خیالات واضح طور پر لکھے'],
 ['listening','سننے کی مہارت','listened to a short talk without interruption','ایک مختصر گفتگو بغیر رکاوٹ سنی','remembered more details','زیادہ تفصیلات یاد رکھیں'],
 ['time management','وقت کا انتظام','planned the next day each evening','ہر شام اگلے دن کی منصوبہ بندی کی','finished tasks on time','کام وقت پر مکمل کیے'],
 ['coding','کوڈنگ','wrote one small program','ایک مختصر پروگرام لکھا','solved programming tasks independently','پروگرامنگ کے سوال خود حل کیے'],
 ['chess','شطرنج','analysed one game','شطرنج کی ایک بازی کا تجزیہ کیا','anticipated moves better','چالوں کا بہتر اندازہ لگایا'],
 ['photography','فوٹوگرافی','tested a different composition','ایک مختلف ترتیب آزمائی','framed pictures more effectively','تصاویر کی بہتر ترتیب بنائی'],
 ['vocabulary','ذخیرۂ الفاظ','used five new words in sentences','پانچ نئے الفاظ جملوں میں استعمال کیے','expressed ideas more precisely','خیالات زیادہ درست انداز میں بیان کیے'],
 ['memory','یادداشت','recalled a short list after a delay','وقفے کے بعد ایک مختصر فہرست یاد کی','remembered information longer','معلومات زیادہ دیر یاد رکھیں'],
 ['observation','مشاہدہ','described details in one picture','ایک تصویر کی تفصیلات بیان کیں','noticed small changes quickly','چھوٹی تبدیلیاں جلد پہچانیں'],
 ['problem solving','مسئلہ حل کرنا','worked through one logic puzzle','ایک منطقی پہیلی حل کی','selected useful strategies faster','کارآمد حکمت عملی جلد منتخب کی'],
 ['pronunciation','تلفظ','repeated a recorded sentence','ریکارڈ شدہ جملہ دہرایا','pronounced difficult sounds clearly','مشکل آوازیں صاف ادا کیں'],
 ['research','تحقیق','compared information from two sources','دو ذرائع کی معلومات کا موازنہ کیا','identified reliable evidence','قابلِ اعتماد ثبوت پہچانا'],
 ['teamwork','اجتماعی کام','asked a partner for feedback','ساتھی سے رائے مانگی','cooperated more effectively','زیادہ مؤثر تعاون کیا'],
 ['creative writing','تخلیقی تحریر','wrote a short scene','ایک مختصر منظر لکھا','created richer descriptions','زیادہ مؤثر تفصیل لکھی'],
 ['science observation','سائنسی مشاہدہ','recorded one experiment carefully','ایک تجربہ احتیاط سے درج کیا','reported results accurately','نتائج درست طور پر بیان کیے'],
 ['debating','مباحثہ','prepared evidence for one claim','ایک دعوے کے لیے ثبوت تیار کیا','answered objections more clearly','اعتراضات کا واضح جواب دیا'],
 ['self-review','خود جائزہ','checked completed work against a checklist','مکمل کام کو فہرست سے جانچا','corrected mistakes independently','غلطیاں خود درست کیں']
];

const vocab=[
 ['abundant','وافر','plentiful','بہت زیادہ','scarce','کمیاب'],['accurate','درست','precise','صحیح','inaccurate','غلط'],['ancient','قدیم','very old','بہت پرانا','modern','جدید'],
 ['brief','مختصر','short','چھوٹا','lengthy','طویل'],['calm','پرسکون','peaceful','اطمینان بخش','agitated','بے چین'],['cautious','محتاط','careful','ہوشیار','reckless','لاپروا'],
 ['complex','پیچیدہ','complicated','مشکل','simple','سادہ'],['diligent','محنتی','hard-working','کوشش کرنے والا','lazy','سست'],['expand','پھیلانا','enlarge','بڑا کرنا','contract','سکیڑنا'],
 ['fragile','نازک','delicate','آسانی سے ٹوٹنے والا','durable','مضبوط'],['generous','سخی','giving','فیاض','selfish','خود غرض'],['genuine','حقیقی','authentic','اصلی','fake','نقلی'],
 ['hostile','مخالف','unfriendly','غیر دوستانہ','friendly','دوستانہ'],['impartial','غیر جانب دار','fair','منصفانہ','biased','جانبدار'],['innovative','جدت پسند','inventive','نیا بنانے والا','conventional','روایتی'],
 ['logical','منطقی','reasonable','معقول','irrational','غیر منطقی'],['modest','منکسر المزاج','humble','عاجز','arrogant','مغرور'],['obscure','غیر واضح','unclear','دھندلا','obvious','واضح'],
 ['persistent','ثابت قدم','determined','پُرعزم','wavering','غیر مستقل'],['rapid','تیز','swift','جلد','slow','آہستہ'],['relevant','متعلقہ','applicable','مناسب','irrelevant','غیر متعلقہ'],
 ['reluctant','ہچکچاتا ہوا','unwilling','نا رضامند','eager','مشتاق'],['scarce','کمیاب','limited','محدود','abundant','وافر'],['transparent','شفاف','clear','صاف','opaque','غیر شفاف'],
 ['vital','انتہائی اہم','essential','ضروری','unimportant','غیر اہم']
];

const completions=[
 ['The glass ornament was ___, so Sara carried it with both hands.','شیشے کی آرائشی چیز ___ تھی، اس لیے سارہ نے اسے دونوں ہاتھوں سے اٹھایا۔','fragile','نازک'],
 ['Because the instructions were ___, everyone completed the task correctly.','چونکہ ہدایات ___ تھیں، اس لیے سب نے کام درست مکمل کیا۔','clear','واضح'],
 ['The driver was ___ on the wet road and reduced his speed.','گیلی سڑک پر ڈرائیور ___ تھا اور اس نے رفتار کم کر دی۔','cautious','محتاط'],
 ['The report was ___ and contained only the essential points.','رپورٹ ___ تھی اور اس میں صرف ضروری نکات تھے۔','brief','مختصر'],
 ['Water is ___ for every living thing.','پانی ہر جاندار کے لیے ___ ہے۔','vital','انتہائی اہم'],
 ['The judge remained ___ and listened equally to both sides.','جج ___ رہا اور دونوں فریقوں کو برابر سنا۔','impartial','غیر جانب دار'],
 ['The researcher rejected the claim because the evidence was not ___.','محقق نے دعویٰ رد کر دیا کیونکہ ثبوت ___ نہیں تھا۔','reliable','قابلِ اعتماد'],
 ['Mina was ___ to speak first because she had not prepared.','مینا پہلے بولنے سے ___ تھی کیونکہ اس نے تیاری نہیں کی تھی۔','reluctant','ہچکچا رہی'],
 ['The new irrigation method was ___ and saved a great deal of water.','آبپاشی کا نیا طریقہ ___ تھا اور اس نے بہت سا پانی بچایا۔','innovative','جدید'],
 ['The audience stayed ___ during the emergency announcement.','ہنگامی اعلان کے دوران حاضرین ___ رہے۔','calm','پرسکون'],
 ['The map was so ___ that even the smallest paths were shown.','نقشہ اتنا ___ تھا کہ چھوٹے راستے بھی دکھائے گئے تھے۔','detailed','تفصیلی'],
 ['The athlete was ___ and continued training after several defeats.','کھلاڑی ___ تھا اور کئی شکستوں کے بعد بھی تربیت جاری رکھی۔','persistent','ثابت قدم'],
 ['The explanation sounded ___ because every step followed from the previous one.','وضاحت ___ معلوم ہوئی کیونکہ ہر قدم پچھلے قدم سے نکلتا تھا۔','logical','منطقی'],
 ['The medicine produced a ___ improvement within a few hours.','دوا نے چند گھنٹوں میں ___ بہتری پیدا کی۔','rapid','تیز'],
 ['Only ___ information should be included in the final answer.','حتمی جواب میں صرف ___ معلومات شامل ہونی چاہئیں۔','relevant','متعلقہ'],
 ['The museum protects its ___ manuscripts in climate-controlled rooms.','عجائب گھر اپنے ___ مخطوطات کو مخصوص درجہ حرارت والے کمروں میں محفوظ رکھتا ہے۔','ancient','قدیم'],
 ['The teacher praised the ___ student who checked every answer twice.','استاد نے ___ طالب علم کی تعریف کی جس نے ہر جواب دو بار جانچا۔','diligent','محنتی'],
 ['The company promised to be ___ about how it used customer data.','کمپنی نے وعدہ کیا کہ وہ صارفین کے ڈیٹا کے استعمال کے بارے میں ___ ہوگی۔','transparent','شفاف'],
 ['The path became ___ after the storm covered the signs with mud.','طوفان کے بعد نشان مٹی سے ڈھک گئے تو راستہ ___ ہو گیا۔','obscure','غیر واضح'],
 ['The measurements must be ___ before the bridge is built.','پل بنانے سے پہلے پیمائش کا ___ ہونا ضروری ہے۔','accurate','درست'],
 ['The charity thanked the ___ donor for supporting the school.','فلاحی ادارے نے اسکول کی مدد کرنے والے ___ عطیہ دہندہ کا شکریہ ادا کیا۔','generous','سخی'],
 ['The puzzle looked ___, but separating it into parts made it manageable.','پہیلی ___ نظر آئی، لیکن حصوں میں تقسیم کرنے سے آسان ہو گئی۔','complex','پیچیدہ'],
 ['Food became ___ after the road to the village was blocked.','گاؤں کا راستہ بند ہونے کے بعد خوراک ___ ہو گئی۔','scarce','کمیاب'],
 ['The signature was examined to confirm that it was ___.','دستخط کا جائزہ لیا گیا تاکہ تصدیق ہو کہ وہ ___ ہیں۔','genuine','حقیقی'],
 ['The quiet discussion became ___ when both groups began shouting.','جب دونوں گروہ چلانے لگے تو پرسکون گفتگو ___ ہو گئی۔','hostile','مخالفانہ']
];

const classes=[
 ['sparrows','چڑیاں','birds','پرندے','Piko','پیکو'],['roses','گلاب','flowers','پھول','Ruby','روبی'],['copper wires','تانبے کی تاریں','conductors','موصل','Wire X','تار ایکس'],['squares','مربع','polygons','کثیر الاضلاع','Shape S','شکل ایس'],['novels','ناول','books','کتابیں','Book N','کتاب این'],
 ['salmon','سالمن مچھلیاں','fish','مچھلیاں','Sami','سامی'],['oak trees','بلوط کے درخت','plants','پودے','Tree O','درخت او'],['bicycles','سائیکلیں','vehicles','گاڑیاں','Cycle B','سائیکل بی'],['rubies','یاقوت','minerals','معدنیات','Stone R','پتھر آر'],['violins','وائلن','instruments','آلاتِ موسیقی','Vivi','وی وی'],
 ['triangles','مثلث','shapes','اشکال','Figure T','شکل ٹی'],['mangoes','آم','fruits','پھل','Fruit M','پھل ایم'],['rivers','دریا','water bodies','آبی ذخائر','River R','دریا آر'],['teachers','اساتذہ','professionals','پیشہ ور افراد','Ali','علی'],['laptops','لیپ ٹاپ','computers','کمپیوٹر','Device L','آلہ ایل'],
 ['whales','وہیل مچھلیاں','mammals','دودھ پلانے والے جانور','Wala','والا'],['poems','نظمیں','literary works','ادبی تخلیقات','Work P','تخلیق پی'],['planets','سیارے','celestial bodies','فلکی اجسام','Planet Z','سیارہ زیڈ'],['carrots','گاجریں','vegetables','سبزیاں','Food C','غذا سی'],['hammers','ہتھوڑے','tools','اوزار','Tool H','اوزار ایچ'],
 ['cotton shirts','سوتی قمیصیں','clothing','ملبوسات','Shirt C','قمیص سی'],['honeybees','شہد کی مکھیاں','insects','کیڑے','Bee H','مکھی ایچ'],['rectangles','مستطیل','quadrilaterals','چوکور اشکال','Shape R','شکل آر'],['drums','ڈھول','percussion instruments','تال کے آلات','Drum D','ڈھول ڈی'],['dictionaries','لغات','reference books','حوالہ جاتی کتابیں','Book D','کتاب ڈی']
];

const idioms=[
 ['break the ice','اجنبیت دور کرنا','start a friendly conversation','دوستانہ گفتگو شروع کرنا'],['a piece of cake','بائیں ہاتھ کا کھیل','very easy','بہت آسان'],['hit the nail on the head','بالکل صحیح بات کہنا','describe the exact issue','اصل مسئلہ درست بیان کرنا'],['once in a blue moon','کبھی کبھار','very rarely','بہت کم'],['under the weather','طبیعت ناساز ہونا','feel slightly ill','کچھ بیمار محسوس کرنا'],
 ['spill the beans','راز کھول دینا','reveal a secret','راز ظاہر کرنا'],['burn the midnight oil','رات گئے تک کام کرنا','work late into the night','رات دیر تک کام کرنا'],['cost an arm and a leg','بہت مہنگا ہونا','be extremely expensive','انتہائی مہنگا ہونا'],['on the same page','ایک رائے پر ہونا','share the same understanding','ایک جیسی سمجھ رکھنا'],['bite off more than you can chew','اپنی طاقت سے زیادہ کام لینا','accept more work than one can manage','قابلیت سے زیادہ کام قبول کرنا'],
 ['the ball is in your court','اب فیصلہ تمہارے ہاتھ میں ہے','the next decision is yours','اگلا فیصلہ آپ کا ہے'],['beat around the bush','اصل بات سے گریز کرنا','avoid the main point','اصل بات سے بچنا'],['call it a day','آج کا کام ختم کرنا','stop working for now','فی الحال کام روکنا'],['get cold feet','آخری وقت میں گھبرا جانا','become nervous before acting','عمل سے پہلے گھبرا جانا'],['in hot water','مشکل میں ہونا','be in trouble','پریشانی میں ہونا'],
 ['keep an eye on','نظر رکھنا','watch carefully','احتیاط سے نگرانی کرنا'],['miss the boat','موقع گنوا دینا','lose an opportunity','موقع کھو دینا'],['pull someone’s leg','مذاق کرنا','joke with someone','کسی سے مذاق کرنا'],['see eye to eye','مکمل اتفاق کرنا','agree completely','مکمل طور پر متفق ہونا'],['take with a grain of salt','بات کو پوری طرح سچ نہ ماننا','treat a claim cautiously','دعویٰ احتیاط سے قبول کرنا'],
 ['through thick and thin','ہر حال میں','in both good and bad times','اچھے برے ہر وقت میں'],['up in the air','غیر طے شدہ','not yet decided','ابھی فیصلہ نہ ہوا ہو'],['wrap your head around','اچھی طرح سمجھنا','understand something difficult','مشکل بات سمجھنا'],['your guess is as good as mine','مجھے بھی معلوم نہیں','I do not know either','مجھے بھی علم نہیں'],['actions speak louder than words','عمل باتوں سے زیادہ مؤثر ہے','what people do matters more than promises','عمل وعدوں سے زیادہ اہم ہے']
];

const tones=[
 ['“Please join us as we celebrate the opening of our new library.”','”ہماری نئی لائبریری کے افتتاح کی خوشی میں ہمارے ساتھ شامل ہوں۔“','inviting','دعوتی'],
 ['“The repeated delays are unacceptable and must be fixed immediately.”','”بار بار کی تاخیر ناقابلِ قبول ہے اور اسے فوراً درست کرنا ہوگا۔“','critical','تنقیدی'],
 ['“Fortunately, the missing hikers returned safely before sunset.”','”خوش قسمتی سے گم شدہ مسافر غروبِ آفتاب سے پہلے بحفاظت واپس آ گئے۔“','relieved','اطمینان بھرا'],
 ['“Imagine a city where every rooftop is a garden.”','”ایک ایسے شہر کا تصور کریں جہاں ہر چھت ایک باغ ہو۔“','imaginative','تخیلاتی'],
 ['“Researchers recorded rainfall at the site for twelve months.”','”محققین نے مقام پر بارہ ماہ تک بارش ریکارڈ کی۔“','objective','غیر جانب دار'],
 ['“I sincerely regret the confusion caused by my message.”','”مجھے اپنے پیغام سے پیدا ہونے والی الجھن پر دلی افسوس ہے۔“','apologetic','معذرت خواہانہ'],
 ['“With steady effort, every learner can make meaningful progress.”','”مسلسل کوشش سے ہر سیکھنے والا نمایاں ترقی کر سکتا ہے۔“','encouraging','حوصلہ افزا'],
 ['“Beware: the path becomes dangerously narrow beyond this point.”','”خبردار: اس مقام کے بعد راستہ خطرناک حد تک تنگ ہو جاتا ہے۔“','warning','تنبیہی'],
 ['“The old playground stood silent, and its faded swings moved in the wind.”','”پرانا کھیل کا میدان خاموش تھا اور اس کے مدھم جھولے ہوا میں ہل رہے تھے۔“','nostalgic','یاد ماضی والا'],
 ['“Why should residents pay for a service they cannot use?”','”رہائشی ایسی سہولت کی قیمت کیوں دیں جسے وہ استعمال نہیں کر سکتے؟“','challenging','سوال اٹھانے والا'],
 ['“Thank you for giving your time to help our neighbourhood.”','”اپنا وقت دے کر ہمارے محلے کی مدد کرنے کا شکریہ۔“','grateful','شکر گزار'],
 ['“The puppy tumbled over its own paws and stared at the ball in surprise.”','”کتا اپنے ہی پنجوں پر لڑھک گیا اور حیرت سے گیند کو دیکھنے لگا۔“','humorous','مزاحیہ'],
 ['“No evidence supports the rumour, so it should not be repeated.”','”افواہ کے حق میں کوئی ثبوت نہیں، اس لیے اسے دہرانا نہیں چاہیے۔“','firm','دو ٹوک'],
 ['“Perhaps the abandoned house still holds stories no one has heard.”','”شاید ویران گھر میں اب بھی ایسی کہانیاں ہوں جو کسی نے نہ سنی ہوں۔“','mysterious','پراسرار'],
 ['“Our team will recover, learn, and return stronger next season.”','”ہماری ٹیم سنبھلے گی، سیکھے گی اور اگلے موسم میں مضبوط واپس آئے گی۔“','hopeful','پرامید'],
 ['“The proposal may help, although its cost remains uncertain.”','”تجویز فائدہ دے سکتی ہے، اگرچہ اس کی قیمت ابھی غیر یقینی ہے۔“','cautious','محتاط'],
 ['“Every child deserves access to a safe and welcoming classroom.”','”ہر بچے کو محفوظ اور خوش آئند جماعت تک رسائی ملنی چاہیے۔“','passionate','جذباتی'],
 ['“First connect the cable, then press the green power button.”','”پہلے تار جوڑیں، پھر سبز بٹن دبائیں۔“','instructive','ہدایتی'],
 ['“The claim sounds impressive, but its figures have not been verified.”','”دعویٰ متاثر کن لگتا ہے، لیکن اس کے اعداد کی تصدیق نہیں ہوئی۔“','sceptical','شک کرنے والا'],
 ['“What a remarkable view—the entire valley shines below us!”','”کیا شاندار منظر ہے—پوری وادی ہمارے نیچے چمک رہی ہے!“','enthusiastic','پرجوش'],
 ['“I understand both proposals and will consider their effects carefully.”','”میں دونوں تجاویز سمجھتا ہوں اور ان کے اثرات پر غور کروں گا۔“','thoughtful','غور و فکر والا'],
 ['“The tiny seedling pushed through the soil after the long winter.”','”طویل سردی کے بعد ننھا پودا مٹی سے باہر نکلا۔“','gentle','نرم'],
 ['“Unless emissions fall, coastal flooding will become more frequent.”','”اگر اخراج کم نہ ہوا تو ساحلی سیلاب زیادہ بار آئیں گے۔“','concerned','فکرمند'],
 ['“Of course the printer stopped working exactly when the report was due.”','”ظاہر ہے پرنٹر عین اس وقت خراب ہوا جب رپورٹ جمع ہونی تھی۔“','ironic','طنزیہ'],
 ['“Together, we can restore the park and make it welcoming again.”','”مل کر ہم پارک بحال کر سکتے ہیں اور اسے دوبارہ خوش آئند بنا سکتے ہیں۔“','motivational','ترغیبی']
];

const E=[],U=[];const diff=i=>i<8?'easy':i<17?'medium':'hard';
const rot=(a,n)=>a.slice(n).concat(a.slice(0,n));
function pick(correct,wrong,seed){const opts=rot([String(correct),...wrong.map(String)],seed%4);return{options:opts,answer:opts.indexOf(String(correct))}}
function add(cat,i,en,ur){const id=`VR-${String(E.length+1).padStart(3,'0')}`;E.push({id,category:cat,difficulty:diff(i),...en});U.push({id,category:cat,difficulty:diff(i),...ur})}
function bi(cat,i,enPrompt,urPrompt,enCorrect,enWrong,urCorrect,urWrong,enWhy,urWhy,visual=''){
 const seed=E.length+i,ep=pick(enCorrect,enWrong,seed),up=pick(urCorrect,urWrong,seed);
 const ev=Array.isArray(visual)?visual[0]:visual,uv=Array.isArray(visual)?visual[1]:visual;
 add(cat,i,{prompt:enPrompt,visual:ev,options:ep.options,answer:ep.answer,explanation:enWhy},{prompt:urPrompt,visual:uv,options:up.options,answer:up.answer,explanation:urWhy});
}
const other=(arr,i,col)=>[1,2,3].map(n=>arr[(i+n)%arr.length][col]);
const urOblique=s=>s==='وقت کا انتظام'?'وقت کے انتظام':s.endsWith('نا')?s.slice(0,-2)+'نے':s;

// 1–3: comprehension, main idea, inference
for(let i=0;i<25;i++){const [skill,urSkill,practice,urPractice,result,urResult]=skills[i];const en=`A learner wanted to improve ${skill}. Each day, the learner ${practice}. After three weeks, the learner ${result}.`;const ur=`ایک طالب علم ${urOblique(urSkill)} میں بہتری چاہتا تھا۔ ہر روز اس نے ${urPractice}۔ تین ہفتوں بعد اس نے ${urResult}۔`;
 bi('reading_comprehension',i,'According to the passage, what did the learner do each day?','عبارت کے مطابق طالب علم نے ہر روز کیا کیا؟',practice,other(skills,i,2),urPractice,other(skills,i,3),`The passage directly states that the learner ${practice}.`,`عبارت میں صاف لکھا ہے کہ طالب علم نے ${urPractice}۔`,[en,ur]);
 bi('main_idea',i,'Which sentence best summarises the passage?','کون سا جملہ عبارت کا بہترین خلاصہ ہے؟',`Regular practice improved the learner’s ${skill}.`,[`The learner stopped practising ${skill}.`,`The learner mastered ${skill} in one day.`,`Practice had no effect on ${skill}.`],`باقاعدہ مشق کے بعد طالب علم نے ${urOblique(urSkill)} میں بہتری دکھائی۔`,[`طالب علم نے روزانہ مشق چھوڑ دی۔`,`طالب علم نے ایک دن میں مکمل مہارت حاصل کر لی۔`,`مشق سے ${urOblique(urSkill)} میں کوئی بہتری نہیں آئی۔`],'The passage links repeated practice with improvement.','عبارت باقاعدہ مشق کو بہتری سے جوڑتی ہے۔',[en,ur]);
 bi('inference',i,'What can reasonably be inferred from the passage?','عبارت سے معقول طور پر کیا نتیجہ نکالا جا سکتا ہے؟',`Consistent effort probably contributed to better ${skill}.`,[`The improvement happened before practice began.`,`The learner disliked every practice session.`,`No time was spent on ${skill}.`],`مسلسل کوشش نے غالباً ${urOblique(urSkill)} میں بہتری پیدا کی۔`,[`بہتری مشق شروع ہونے سے پہلے ہوئی۔`,`طالب علم کو ہر مشق ناپسند تھی۔`,`طالب علم نے اس مہارت پر کوئی وقت نہیں لگایا۔`],'The timing supports a cautious link between steady practice and improvement.','وقت کی ترتیب مسلسل مشق اور بہتری کے درمیان معقول تعلق دکھاتی ہے۔',[en,ur]);
}

// 4–6: vocabulary
for(let i=0;i<25;i++){const [w,uw,s,us,a,ua]=vocab[i];
 const clue=completions.find(x=>x[2]===w)||[`The glossary explains “${w}” as “${s}.”`,`لغت میں ”${uw}“ کا مطلب ”${us}“ بتایا گیا ہے۔`];
 bi('context_clues',i,`In this context, what does “${w}” most nearly mean?`,`اس سیاق میں ”${uw}“ کا قریب ترین مطلب کیا ہے؟`,s,other(vocab,i,2),us,other(vocab,i,3),'The surrounding sentence provides a definition or strong clue to the word.','آس پاس کا جملہ اس لفظ کے معنی کی واضح علامت دیتا ہے۔',[clue[0],clue[1]]);
 bi('synonyms',i,`Which word is closest in meaning to “${w}”?`,`کون سا لفظ ”${uw}“ کے قریب ترین معنی رکھتا ہے؟`,s,[a,...other(vocab,i,0).slice(0,2)],us,[ua,...other(vocab,i,1).slice(0,2)],`“${s}” is a synonym of “${w}.”`,`”${us}“، ”${uw}“ کا مترادف ہے۔`);
 bi('antonyms',i,`Which word is most nearly opposite in meaning to “${w}”?`,`کون سا لفظ ”${uw}“ کے تقریباً مخالف معنی رکھتا ہے؟`,a,[s,...other(vocab,i,4).slice(0,2)],ua,[us,...other(vocab,i,5).slice(0,2)],`“${a}” is the antonym of “${w}.”`,`”${ua}“، ”${uw}“ کا متضاد ہے۔`);
}

// 7: word analogies
for(let i=0;i<25;i++){const [w,uw,s,us,a,ua]=vocab[i];
 bi('word_analogies',i,`Complete the analogy: ${w} is to ${s} as opposite is to ___.`,`مماثلت مکمل کریں: ${uw} کا تعلق ${us} سے ویسا ہے جیسے مخالف کا تعلق ___ سے۔`,'antonym',['synonym','sentence','pronunciation'],'متضاد',['مترادف','جملہ','تلفظ'],'The first pair has similar meanings; “opposite” pairs with “antonym.”','پہلی جوڑی کے معنی ملتے جلتے ہیں؛ ”مخالف“ کا تعلق ”متضاد“ سے ہے۔',[`${w} : ${s}  ∷  opposite : ?`,`${uw} : ${us}  ∷  مخالف : ؟`]);}

// 8: sentence completion
for(let i=0;i<25;i++){const [en,ur,c,uc]=completions[i];bi('sentence_completion',i,'Choose the word that best completes the sentence.','جملہ مکمل کرنے کے لیے بہترین لفظ منتخب کریں۔',c,other(completions,i,2),uc,other(completions,i,3),`“${c}” fits both the meaning and grammar of the sentence.`,`”${uc}“ جملے کے معنی اور قواعد دونوں کے مطابق ہے۔`,[en,ur]);}

// 9–10: grammar and correction
for(let i=0;i<25;i++){const [skill,urSkill]=skills[i],subject=`The student practising ${skill}`,urSubject=`ایک طالب علم (${urSkill})`;
 bi('grammar_usage',i,`${subject} ___ improvement over time.`,`${urSubject} وقت کے ساتھ بہتری ___۔`,'shows',['show','showing','have shown'],'دکھاتا ہے',['دکھاتے ہیں','دکھانا','دکھائی'],`The singular subject takes the singular verb “shows.”`,'واحد فاعل کے ساتھ واحد فعل ”دکھاتا ہے“ درست ہے۔');
 const correct=`After practising ${skill}, the student reviewed the results carefully.`;
 const urCorrect=`${urSkill}: طالب علم نے مشق کے بعد نتائج کا احتیاط سے جائزہ لیا۔`;
 bi('sentence_correction',i,'Which sentence is written correctly?','کون سا جملہ درست لکھا گیا ہے؟',correct,[`after practising ${skill} the student reviewed the results carefully`,`After practising ${skill}, the student review the results carefully.`,`After practice ${skill}, the student reviewed carefully the result.`],urCorrect,[`${urSkill}: مشق کے بعد، طالب علم نتائج جائزہ لیا۔`,`طالب علم نے ${urSkill} مشق کے بعد نتائج کو جائزہ۔`,`${urSkill}: مشق بعد طالب علم نے احتیاط نتائج دیکھا۔`],'The selected sentence has correct capitalisation, punctuation, agreement, and word order.','منتخب جملے میں قواعد، ترتیب اور رموزِ اوقاف درست ہیں۔');
}

// 11: deduction
for(let i=0;i<25;i++){const [a,ua,b,ub,item,uitem]=classes[i];const vis=`All ${a} are ${b}. ${item} is one of the ${a}.`,urVis=`تمام ${ua}، ${ub} ہیں۔ ${uitem}، ${ua} میں شامل ہے۔`;
 bi('deductive_reasoning',i,'Which conclusion must be true?','کون سا نتیجہ لازماً درست ہے؟',`${item} is one of the ${b}.`,[`${item} is not one of the ${b}.`,`All ${b} are ${a}.`,`No ${a} are ${b}.`],`${uitem}، ${ub} کے گروہ میں شامل ہے۔`,[`${uitem}، ${ub} کے گروہ میں شامل نہیں ہے۔`,`تمام ${ub}، ${ua} ہیں۔`,`کوئی ${ua}، ${ub} نہیں ہے۔`],'Class membership carries from the smaller group to the larger group.','چھوٹے گروہ کی رکنیت بڑے گروہ تک منتقل ہوتی ہے۔',[vis,urVis]);}

// 12–14: assumptions, conclusions, cause-effect
for(let i=0;i<25;i++){const [skill,urSkill,practice,urPractice,result,urResult]=skills[i];
 bi('assumptions',i,`A school recommends that learners ${practice} to improve ${skill}. Which assumption supports this recommendation?`,`اسکول ${urOblique(urSkill)} میں بہتری کے لیے روزانہ مشق کا مشورہ دیتا ہے۔ کون سا مفروضہ اس مشورے کی حمایت کرتا ہے؟`,`${practice} can help develop ${skill}.`,[`${practice} always prevents learning.`,`No learner wants better ${skill}.`,`${skill} can never change.`],`روزانہ مشق سے ${urOblique(urSkill)} میں بہتری آ سکتی ہے۔`,[`روزانہ مشق ہمیشہ سیکھنے کو روکتی ہے۔`,`کوئی طالب علم بہتری نہیں چاہتا۔`,`${urOblique(urSkill)} میں کبھی تبدیلی نہیں آ سکتی۔`],'The recommendation depends on believing the proposed action can produce the desired improvement.','مشورہ اس یقین پر منحصر ہے کہ تجویز کردہ عمل مطلوبہ بہتری لا سکتا ہے۔');
 bi('conclusions',i,`For three weeks, a learner ${practice}; afterward, the learner ${result}. Which is the most careful conclusion?`,`تین ہفتوں تک طالب علم نے ${urPractice}؛ اس کے بعد اس نے ${urResult}۔ سب سے محتاط نتیجہ کون سا ہے؟`,`${practice} may have helped improve ${skill}.`,[`${practice} is the only possible cause of improvement.`,`The learner certainly did no other practice.`,`The evidence proves everyone will improve equally.`],`روزانہ مشق نے شاید ${urOblique(urSkill)} میں بہتری پیدا کی۔`,[`روزانہ مشق ہی بہتری کی واحد ممکنہ وجہ ہے۔`,`طالب علم نے یقینی طور پر کوئی اور مشق نہیں کی۔`,`ثبوت ثابت کرتا ہے کہ سب برابر بہتر ہوں گے۔`],'“May have helped” fits the evidence without claiming more than it proves.','”شاید مدد دی“ ثبوت کے مطابق محتاط نتیجہ ہے اور غیر ثابت دعویٰ نہیں کرتا۔');
 bi('cause_effect',i,`A learner ${practice} every day and then ${result}. What is the stated cause?`,`طالب علم نے ہر روز ${urPractice} اور پھر ${urResult}۔ بیان کردہ سبب کیا ہے؟`,practice,[result,`the passage ending`,`the three-week result`],urPractice,[urResult,'عبارت کا اختتام','تین ہفتوں کا نتیجہ'],'The daily practice occurs first and is presented as the cause.','روزانہ کی مشق پہلے ہوتی ہے اور اسے سبب کے طور پر پیش کیا گیا ہے۔');
}

// 15: fact vs opinion
for(let i=0;i<25;i++){const [skill,urSkill]=skills[i];
 bi('fact_opinion',i,'Which statement is an opinion rather than a verifiable fact?','کون سا بیان قابلِ تصدیق حقیقت کے بجائے ایک رائے ہے؟',`${skill} is the most enjoyable skill anyone can learn.`,[`The practice session lasted twenty minutes.`,`The learner recorded three attempts.`,`The final score was higher than the first score.`],`${urSkill} ہر شخص کے سیکھنے کے لیے سب سے دلچسپ مہارت ہے۔`,['مشق بیس منٹ جاری رہی۔','طالب علم نے تین کوششیں درج کیں۔','آخری اسکور پہلے اسکور سے زیادہ تھا۔'],'“Most enjoyable” expresses a personal judgement.','”سب سے دلچسپ“ ذاتی رائے ظاہر کرتا ہے۔');}

// 16: evaluating arguments
for(let i=0;i<25;i++){const [skill,urSkill,practice,urPractice]=skills[i],n=40+i;
 bi('argument_evaluation',i,`Which evidence would most strongly support the claim that ${practice} improves ${skill}?`,`کون سا ثبوت اس دعوے کی سب سے مضبوط حمایت کرے گا کہ روزانہ مشق سے ${urOblique(urSkill)} میں بہتری آتی ہے؟`,`In a controlled study of ${n} learners, the practice group improved more than a similar comparison group.`,[`One learner said the activity was fun.`,`A poster recommended the activity without giving data.`,`The teacher hoped the activity would work.`],`${n} طلبہ کے کنٹرول شدہ مطالعے میں مشق کرنے والے گروہ نے ملتے جلتے تقابلی گروہ سے زیادہ بہتری دکھائی۔`,['ایک طالب علم نے کہا سرگرمی دلچسپ تھی۔','ایک پوسٹر نے بغیر اعداد کے سرگرمی تجویز کی۔','استاد کو امید تھی کہ سرگرمی کامیاب ہوگی۔'],'A controlled comparison provides relevant evidence and reduces alternative explanations.','کنٹرول شدہ موازنہ متعلقہ ثبوت دیتا ہے اور دوسری ممکنہ وجوہات کم کرتا ہے۔');}

// 17: classification
for(let i=0;i<25;i++){const [a,ua,b,ub]=classes[i],next=classes[(i+1)%25],odd=next[0],uodd=next[1];
 bi('word_classification',i,'Which item does not belong with the other three?','کون سا لفظ باقی تین سے مختلف ہے؟',odd,[a,`some ${a}`,`other ${a}`],uodd,[ua,`کچھ ${ua}`,`دیگر ${ua}`],`The three matching choices belong to ${b}; ${odd} belongs to a different class.`,`تین ملتے اختیارات ${ub} کے گروہ سے ہیں؛ ${uodd} دوسرے گروہ سے ہے۔`);}

// 18: sequencing
for(let i=0;i<25;i++){const [skill,urSkill,practice,urPractice,result,urResult]=skills[i];const c=`Set a goal → ${practice} → review the attempt → notice improvement`;const uc=`ہدف مقرر کریں ← روزانہ مشق کریں ← کوشش کا جائزہ لیں ← ${urOblique(urSkill)} میں بہتری دیکھیں`;
 bi('verbal_sequencing',i,`Which order gives the most logical process for improving ${skill}?`,`${urOblique(urSkill)} میں بہتری کے لیے کون سی ترتیب سب سے منطقی ہے؟`,c,[`Notice improvement → set a goal → review → ${practice}`,`Review the attempt → notice improvement → set a goal → ${practice}`,`${practice} → notice improvement → set a goal → review`],uc,[`بہتری دیکھیں ← ہدف مقرر کریں ← جائزہ لیں ← روزانہ مشق کریں`,`کوشش کا جائزہ لیں ← بہتری دیکھیں ← ہدف مقرر کریں ← روزانہ مشق کریں`,`روزانہ مشق کریں ← بہتری دیکھیں ← ہدف مقرر کریں ← جائزہ لیں`],'A goal comes first, followed by action, review, and observed progress.','پہلے ہدف، پھر عمل، اس کے بعد جائزہ اور آخر میں بہتری کا مشاہدہ ہوتا ہے۔');}

// 19: idioms
for(let i=0;i<25;i++){const [idiom,urIdiom,meaning,urMeaning]=idioms[i];
 bi('idioms_proverbs',i,`What does “${idiom}” mean in ordinary usage?`,`روزمرہ استعمال میں ”${urIdiom}“ کا کیا مطلب ہے؟`,meaning,other(idioms,i,2),urMeaning,other(idioms,i,3),`The expression is figurative and means “${meaning}.”`,`یہ مجازی اظہار ہے اور اس کا مطلب ”${urMeaning}“ ہے۔`);}

// 20: tone and purpose
for(let i=0;i<25;i++){const [en,ur,t,ut]=tones[i];
 bi('tone_purpose',i,'Which word best describes the writer’s tone?','کون سا لفظ مصنف کے لہجے کو بہترین بیان کرتا ہے؟',t,other(tones,i,2),ut,other(tones,i,3),`The wording and emphasis create a ${t} tone.`,`الفاظ اور زور سے ${ut} لہجہ پیدا ہوتا ہے۔`,[en,ur]);}

if(E.length!==500||U.length!==500)throw Error(`Expected 500/500, got ${E.length}/${U.length}`);
const meta=lang=>({title:lang==='en'?'Verbal Reasoning Test':'لفظی استدلال کا امتحان',description:lang==='en'?'500 objective questions assessing comprehension, vocabulary, critical analysis, and related verbal skills.':'فہم، ذخیرۂ الفاظ، تنقیدی تجزیے اور متعلقہ لفظی مہارتوں پر 500 معروضی سوالات۔',totalQuestions:500,categories:categories.map(c=>({id:c.id,label:lang==='en'?c.en:c.ur,icon:c.icon}))});
const out=path.join(__dirname,'assets');fs.mkdirSync(out,{recursive:true});
fs.writeFileSync(path.join(out,'questions.json'),JSON.stringify({meta:meta('en'),questions:E},null,2)+'\n');
fs.writeFileSync(path.join(out,'questions-urdu.json'),JSON.stringify({meta:meta('ur'),questions:U},null,2)+'\n');
console.log(`Generated ${E.length} English and ${U.length} Urdu questions across ${categories.length} subtopics.`);
