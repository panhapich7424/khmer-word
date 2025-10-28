// Progressive Khmer words database (1000 words organized by difficulty levels)
const khmerWordsByLevel = {
    // Level 1-200: Easy words (2-3 syllables)
    easy: [
        'ទឹកដោះ', 'បាយស', 'ផ្ទះធំ', 'ម្តាយល្អ', 'កូនប្រុស', 'កែវទឹក', 'ពណ៌ស្អាត', 'ផ្កាឈូក', 'ដើមឈើ', 'ស្លឹកផ្កា',
        'ច្រៀងសួង', 'ដំណើរឆ្លង', 'សាលារៀន', 'គ្រូបង្រៀន', 'សិស្សានុសិស្ស', 'មិត្តភក្តិ', 'ក្រុមគ្រួសារ', 'ភាសាខ្មែរ', 'ប្រទេសកម្ពុជា', 'រាជធានីភ្នំពេញ',
        'ផ្សារធំមួយ', 'មន្ទីរពេទ្យ', 'ស្ថានីយ៍រថភ្លើង', 'យានយន្តធំ', 'ភោជនីយដ្ឋាន', 'កីឡាករ', 'ទស្សនកិច្ច', 'ពិធីបុណ្យ', 'វប្បធម៌ខ្មែរ', 'ព្រះអាទិត្យ',
        'ព្រះច័ន្ទ', 'ផ្កាយភ្លឺ', 'ដីស្រែ', 'ភ្នំខ្ពស់', 'ទន្លេធំ', 'បឹងធំ', 'ព្រៃឈើ', 'ស្រុកកំណើត', 'ភូមិតូច', 'ផ្លូវថ្នល់',
        'ស្ពានឈើ', 'រថយន្តធំ', 'កង់ថ្មី', 'ហាងលក់', 'ផ្សារទំនើប', 'អាហារឆ្ងាញ់', 'ស្រាសុទ្ធ', 'កាហ្វេក្តៅ', 'ទឹកក្រូច', 'ស្ករស',
        'អំបិលស', 'ម្រេចខ្មៅ', 'ប្រេងឆា', 'សាច់គោ', 'ត្រីធំ', 'បន្លែស្រស់', 'ស្វាយឆ្ងាញ់', 'ចេកទុំ', 'ល្ហុងទុំ', 'ប៊ិចសរសេរ',
        'ក្រដាសស', 'ទូសំលៀកបំពាក់', 'គ្រែដេក', 'ខ្នើយទន់', 'មួកស្អាត', 'កាបូបធំ', 'នាឡិកាថ្មី', 'ទូរស័ព្ទស្មាត', 'កុំព្យូទ័រ', 'ទូរទស្សន៍',
        'វិទ្យុចាស់', 'សាលាតូច', 'សាលាមធ្យម', 'សាកលវិទ្យាល័យ', 'បណ្ណាល័យធំ', 'វិទ្យាស្ថាន', 'ក្រសួងអប់រំ', 'ការិយាល័យ', 'សហការី', 'ពិធីការណ៍ពិសេស',
        'ទំនាក់ទំនង', 'អន្តរជាតិ', 'បច្ចេកវិទ្យា', 'បច្ចេកទេស', 'ប្រព័ន្ធបណ្ដាញ', 'អ៊ីនធឺណិត', 'កម្មវិធីកុំព្យូទ័រ', 'ទិន្នន័យធំ', 'ប្រតិបត្តិការ', 'សំបុត្រ',
        'រូបភាពធំ', 'សៀវភៅធំ', 'សៀវភៅអក្សរ', 'រោងចក្រ', 'ឧស្សាហកម្ម', 'សេដ្ឋកិច្ច', 'ហិរញ្ញវត្ថុ', 'ធនាគារ', 'វិភាគ', 'ប្រវត្តិសាស្ត្រ',
        'ចំណេះដឹង', 'ទំនៀមទម្លាប់', 'គោលការណ៍', 'ច្បាប់ផ្លូវការ', 'សាធារណរដ្ឋ', 'ប្រជាធិបតេយ្យ', 'រដ្ឋាភិបាល', 'ក្រសួងការបរទេស', 'អន្តរក្រសួង', 'សិល្បៈបុរាណ',
        'ចម្រៀងប្រពៃណី', 'ល្ខោនរឿង', 'ផ្សងព្រង', 'រឿងភាគ', 'សាច់រឿង', 'គំនូរផ្ទៃ', 'សិល្បៈវិចិត្រសាល', 'គ្រឿងញៀនមិន', 'សុខភាពសាធារណៈ', 'ព្យាបាលជំង្រុក',
        'វេជ្ជសាស្ត្រ', 'ឱសធសាស្ត្រ', 'ចុងភៅធំ', 'ជ្រកទឹកកក', 'របៀបចម្ការ', 'ផ្ទះល្វែង', 'អាគារពាណិជ្ជកម្ម', 'ជើងចិញ្ចៀន', 'កណ្តុរ', 'ផ្គរទឹក',
        'បំពង់ទឹក', 'ម៉ាស៊ីនបូម', 'ទឹកស្អាត', 'សំលាប់សត្វ', 'ការពារបរិស្ថាន', 'ការស្រាវជ្រាវ', 'វិទ្យាសាស្ត្រធម្មជាតិ', 'គោលការណ៍ទ្រឹស្តី', 'និស្សិតស្រាវជ្រាវ', 'ចំណាត់ថ្នាក់',
        'សន្ទស្សន៍', 'បំរើសាធារណះ', 'សេវាកម្មសាធារណៈ', 'ប្រើប្រាស់', 'គ្រប់គ្រង', 'រដ្ឋបាល', 'គម្រោងធំ', 'មូលនិធិ', 'អនុវត្ត', 'ចម្លែកប្លែក',
        'អស្ចារ្យ', 'គិតវិភាគ', 'សំខាន់ណាស់', 'ចាំបាច់', 'តម្រូវការ', 'សមត្ថភាព', 'ពេលវេលា', 'កំណត់ត្រា', 'ព័ត៌មាន', 'ព័ត៌មានបច្ចុប្បន្ន',
        'ព័ត៌មានវិទ្យា', 'ប្រព័ន្ធព័ត៌មាន', 'តំបន់ជនបទ', 'ខេត្តក្រុង', 'ស្រុកខេត្ត', 'ភូមិសាស្ត្រ', 'បរិស្ថានធម្មជាតិ', 'មេឃ', 'អាកាសធាតុ', 'ព្យុះខ្យល់',
        'ភ្លៀងធ្លាក់', 'តង់តែចម្រុះ', 'អូម៉ាស៊ីន', 'ពិភពលោក', 'ទេសចរណ៍', 'ប្រវត្តិបុព្វ', 'សំណល់វប្បធម៌', 'ចម្រុះភាគ', 'ចង្អុលបង្ហាញ', 'កូនចៅមិត្ត'
    ],

    // Level 201-400: Medium words (3-4 syllables)
    medium: [
        'ជីវចម្រុះ', 'សត្វព្រៃ', 'សត្វចិញ្ចឹម', 'ឧស្ម័ន', 'ធម្មជាតិ', 'បណ្តាញសង្គម', 'ប្រព័ន្ធផ្សព្វផ្សាយ', 'ព័ត៌មានអន្តរជាតិ', 'ការផ្សព្វផ្សាយ', 'សហគមន៍',
        'សកម្មភាពសង្គម', 'អង្គការ', 'សេវាកម្មសង្គម', 'ការអភិវឌ្ឍន៍', 'ការអភិវឌ្ឍជនបទ', 'ការអភិវឌ្ឍសេដ្ឋកិច្ច', 'គម្រោងសង្គម', 'ធនធានមនុស្ស', 'ការងារស្ម័គ្រចិត្ដ', 'ការងារផ្ទាល់ខ្លួន',
        'ជំនាញវិជ្ជាជីវៈ', 'ការបណ្តុះបណ្តាល', 'កម្មវិធីហ្វឹកហ្វឺន', 'អាជីវកម្មតូច', 'អាជីវកម្មមធ្យម', 'គណនា', 'វិភាគទិន្នន័យ', 'សលេខសំខាន់', 'ប្រតិបត្ដិការហិរញ្ញវត្ថុ', 'ការបង់ប្រាក់',
        'វិក័យប័ត្រ', 'សមតុល្យ', 'ចំណូលចំណាយ', 'ការវិនិយោគ', 'ភាគហ៊ុន', 'ទីផ្សារ', 'ការធានារ៉ាប់រង', 'ច្បាប់ពាណិជ្ជកម្ម', 'អធិការសាលា', 'ច្បាប់សិទ្ធិ',
        'សិទ្ធិមនុស្ស', 'សន្តិភាព', 'សង្គមសន្តិភាព', 'យុត្តិធម៌', 'ភាពស្មើភាព', 'ទំនួលខុសត្រូវ', 'ចំណងខ្នង', 'របៀបប្រព្រឹត្ត', 'កិច្ចសន្យា', 'បញ្ហាជាតិ',
        'បញ្ហាអន្តរជាតិ', 'ការរស់នៅ', 'គុណភាពជីវិត', 'សុខមាលភាព', 'សេវាសុខាភិបាល', 'ការព្យាបាល', 'សុខភាពចិត្ត', 'ការពារសិទ្ធិ', 'ទំនុកចិត្ត', 'ទស្សនៈ',
        'គំនិតវិដ្ឋាន', 'ទ្រឹស្តីសិល្បៈ', 'សិល្បៈសត្វ', 'តន្ត្រីប្រពៃណី', 'របាំប្រពៃណី', 'សម័យសិល្បៈ', 'អក្សរសាស្ត្រខ្មែរ', 'ប្រលោមលោក', 'កំណាព្យ', 'និពន្ធកណ្តាល',
        'និទានប្រពៃណី', 'បទពិសោធន៍', 'នយោបាយ', 'គណៈកម្មការ', 'គណបក្ស', 'ប្រធានាធិបតី', 'រដ្ឋមន្ត្រី', 'សភានីតិ', 'ប្រជាជន', 'សមត្ថកិច្ច',
        'អង្គការសង្គ្រោះ', 'ភាពអសកម្ម', 'បញ្ហាការងារ', 'ការផ្តល់ការងារ', 'ការងារសហគ្រាស', 'កម្មសិទ្ធិ', 'ច្រកចេញចូល', 'ទំនាក់ទំនងអន្តរជាតិ', 'ពាណិជ្ជកម្មអន្តរជាតិ', 'សេវាកម្មហោះហើរ',
        'កំពង់ផែ', 'ការដឹកជញ្ជូន', 'ស្ថានីយ៍រថយន្ត', 'បន្ទប់រថភ្លើង', 'ផ្លូវរថយន្ត', 'ចរាចរណ៍', 'សន្តិសុខផ្លូវចរាចរណ៍', 'សេវាផ្ទេរប្រាក់', 'ប្រព័ន្ធទូទាត់', 'ចំការផ្លែឈើ',
        'កសិកម្មទំនើប', 'បច្ចេកវិទ្យាកសិកម្ម', 'ទឹកស្អិត', 'ចម្រាស់', 'សារធាតុប្រើប្រាស់', 'ដំណាំស្រូវ', 'សារពើភ័ណ្ឌ', 'ផែដាំ', 'សួនច្បារ', 'រុក្ខជាតិ',
        'រុក្ខជាតិស្រស់', 'បណ្តាញទឹក', 'ទឹកជ្រៅ', 'ទឹកផុស', 'ទឹកដោះគោ', 'ទឹកភ្នំ', 'ជីជោង', 'ជីកកសិកម្ម', 'ប្រព័ន្ធស្វ័យប្រវត្តិនៅស្រែ', 'រុក្ខជាតិសំខាន់',
        'ការរីកចម្រើន', 'ប្រភពទឹក', 'ហេដ្ឋារចនាសម្ព័ន្ធ', 'ផលប៉ះពាល់', 'បរិស្ថានធនធាន', 'ចំណីសត្វ', 'ការរីកខ្ពស់', 'គុណភាពដី', 'ការគ្រប់គ្រងប្រព័ន្ធ', 'ការសាងសង់',
        'អគារស្តុក', 'ផ្លូវចរាចរណ៍', 'ស្ថានភាពសំណង់', 'សៀគ្វីអគ្គិសនី', 'ប្រព័ន្ធទឹកកក', 'ការផ្គត់ផ្គង់ថាមពល', 'បណ្តាញស៊ុម', 'ឧបករណ៍បម្រើ', 'គុណភាពសេវា', 'បច្ចេកវិទ្យាថ្មី',
        'ការបង្កើតឧស្សាហកម្ម', 'ឧបករណ៍កុំព្យូទ័រ', 'កម្មវិធីទូរស័ព្ទ', 'ការស្ថាបនាផ្នែកទន់', 'ការវិភាគកម្មវិធី', 'បណ្តាញបាម៉ា', 'ទិន្នន័យសាធារណៈ', 'ប្រព័ន្ធសុវត្ថិភាព', 'ការកូដកម្ម', 'ភ្នាក់ងារ'
    ],

    // Level 401-700: Hard words (4-5 syllables)
    hard: [
        'អ្នកបច្ចេកទេស', 'អ្នកអភិវឌ្ឍន៍', 'អ្នករចនា', 'អ្នកទីផ្សារ', 'អ្នកគ្រប់គ្រងគម្រោង', 'ក្រុមអភិវឌ្ឍន៍', 'គម្រោងសាកល', 'ផែនការយុទ្ធសាស្ត្រ', 'ការវាយតម្លៃ', 'ការវាស់វែង',
        'ស្ថិតិវិទ្យា', 'គណនេយ្យ', 'សៀវភៅគណនា', 'វិស្វកម្ម', 'វិស្វករអគារ', 'វិស្វករកុំព្យូទ័រ', 'វិស្វករថាមពល', 'អាគារសាកល', 'ស្ដង់ដារ', 'គុណភាព',
        'ប្រព័ន្ធគ្រប់គ្រង', 'សេវាកម្មឯកជន', 'បណ្តាញឧស្សាហកម្ម', 'សេវាកម្មឧស្សាហកម្ម', 'ចំណុចប្រទាក់', 'បច្ចេកវិទ្យាអគ្គិសនី', 'ម៉ាស៊ីនបម្រើ', 'ឧបករណ៍ប្រើប្រាស់', 'គ្រោងធំ', 'បណ្តាញឧស្សាហកម្ម',
        'វឌ្ឍនភាព', 'សមត្ថភាពផ្គត់ផ្គង់', 'របាយការណ៍', 'ការរួមចំណែក', 'ការសហការណ៍', 'ការធ្វើស្រុក', 'អគ្គិសនី', 'រោងផលិត', 'ទំនិញ', 'ការវេចខ្ចប់',
        'គុណភាពផលិតផល', 'ស្តង់ដារអន្តរជាតិ', 'ស្មរិទ្ធភាព', 'ចំណេះដឹងបច្ចេកទេស', 'អប់រំបណ្តុះបណ្តាល', 'កណ្តោលសិក្សា', 'មេធាវី', 'អ្នកថ្នាក់បឋម', 'គណៈបង្រៀន', 'បុគ្គលិក',
        'សមត្ថភាពបុគ្គល', 'ការគ្រប់គ្រងបុគ្គលិក', 'ការកំណត់គោលដៅ', 'ចក្ខុវិស័យ', 'បេសកកម្ម', 'យុទ្ធសាស្ត្រអាជីវកម្ម', 'ផែនការផ្សព្វផ្សាយ', 'ការផ្សព្វផ្សាយឌីជីថល', 'វិធីសាស្រ្តផ្សព្វផ្សាយ', 'ការស្រែជីវិតទំនើប',
        'ប្រព័ន្ធជំនួយ', 'ប្រព័ន្ធទទួល', 'គាំទ្រសង្គម', 'ឧបត្ថម្ភ', 'អនុទាន', 'អនុវត្តច្បាស់លាស់', 'នីតិវិធី', 'ប្រតិបត្តិការកំណត់', 'ការត្រួតពិនិត្យ', 'បណ្តាញចែករំលែក',
        'ការបង្ហាញផល', 'សេចក្តីប្រកាស', 'សេចក្តីណែនាំ', 'សេចក្តីណែនាំបច្ចេកទេស', 'វិចិត្រសាលខ្នាតតូច', 'ឧបករណ៍បរិក្ខា', 'សំណង់អនុវត្ត', 'ក្រុមហ៊ុនឯកជន', 'សហគ្រាសសាធារណៈ', 'ទំនិញសេវាកម្ម',
        'ការអភិវឌ្ឍទីផ្សារ', 'ការផ្សព្វផ្សាយទីផ្សារ', 'ឧបករណ៍ការផ្សព្វផ្សាយ', 'បណ្តាញសារព័ត៌មាន', 'ការទំនាក់ទំនងសាធារណៈ', 'ប្រព័ន្ធផ្សព្វផ្សាយ', 'វិភាគទីផ្សារ', 'ចំណុចលក់', 'ទីតាំងផ្ទាល់', 'ការផ្គត់ផ្គង់សម្ភារៈ',
        'គ្រប់គ្រងសារពើភ័ណ្ឌ', 'ប្រមូលផ្តុំទំនិញ', 'ការដឹកជញ្ជូនយ៉ាងមានប្រសិទ្ធភាព', 'បញ្ជីធាតុ', 'ត្រួតពិនិត្យគុណភាព', 'បច្ចេកទេសផលិត', 'គ្រប់គ្រងប្រភព', 'ការធ្វើតេស្ត', 'កិច្ចសន្យាផ្គត់ផ្គង់', 'អនុលោម',
        'សន្យាថ្នាក់', 'ការជួបប្រជុំ', 'កិច្ចសន្យាគម្រោង', 'ការទូទាត់', 'វិធីសាស្ត្រទូទាត់', 'ស្នាក់នៅ', 'ធ្វើដំណើរ', 'កន្លែងស្នាក់', 'សេវាកម្មធ្វើដំណើរ', 'ប្រវត្តិនៃទីក្រុង',
        'ស្ថាបត្យកម្មបុរាណ', 'វិបត្តិសង្គម', 'ចលនាសង្គម', 'ការកែលម្អ', 'ការស្តារឡើងវិញ', 'ស្ថានភាពសង្គម', 'អ្នកដឹកនាំសហគមន៍', 'អភិបាល', 'អភិបាលខេត្ត', 'អភិបាលក្រុង',
        'ការអភិវឌ្ឍទីក្រុង', 'គោលនយោបាយសាធារណៈ', 'ផែនការអភិវឌ្ឍ', 'គម្រោងសាធារណៈ', 'សិទ្ធិសាធារណៈ', 'ច្បាប់នៃសាធារណៈ', 'សេវាផ្លូវការ', 'ប្រតិបត្តិការសាធារណៈ', 'ការិយាល័យរដ្ឋ', 'ក្រសួងសាធារណការ',
        'សេវាធនធាន', 'សេវាប្រយោជន៍', 'សេវាធនធានមនុស្ស', 'គោលការណ៍សេវា', 'គុណសម្បត្តិសេវា', 'ការបំពេញបេសកកម្ម', 'ការស្វែងរកយុទ្ធសាស្ត្រ', 'ដំណោះស្រាយច្នៃប្រឌិត', 'ការបង្រៀនបច្ចេកទេស', 'គ្រប់គ្រងគម្រោងធំ'
    ],

    // Level 701-1000: Very hard words (5+ syllables and complex terms)
    veryHard: [
        'ក្រុមប្រឹក្សាធម្មនុញ្ញ', 'សមាជិកសហគមន៍', 'ការចូលរួមសាធារណៈ', 'វិធានការជាតិ', 'ច្បាប់អភិវឌ្ឍ', 'ការអនុវត្តសេវា', 'ច្បាប់ពាក់ព័ន្ធ', 'ការស្រាវជ្រាវផែនការ', 'ការវាយតម្លៃបរិស្ថាន', 'ការសុវត្ថិភាពជាតិ',
        'វិធានការចរាចរណ៍', 'សេវាភេទ', 'វិស័យសេដ្ឋកិច្ច', 'ជំនួញ', 'លទ្ធភាពឧស្សាហកម្ម', 'ប៉ារ៉ាម៉ែត្រ', 'ការច្នៃប្រឌិត', 'ការបញ្ចេញគំនិត', 'បច្ចេកទេសច្នៃប្រឌិត', 'គ្រប់គ្រងគុណភាព',
        'គ្រប់គ្រងហានិភ័យ', 'សម្របសម្រួល', 'ការណែនាំផលិតផល', 'ការតេស្តអនុវត្ត', 'វិធានការសុខភាព', 'សុវត្ថិភាពអនាម័យ', 'ការកាត់បន្ថយសត្វចម្លែក', 'ការត្រួតពិនិត្យគុណភាព', 'ស្តង់ដារអនុវត្ត', 'ការបញ្ចូលទិន្នន័យ',
        'ការបញ្ចូលបណ្ដាញ', 'ការរក្សាទុកទិន្នន័យ', 'គ្រប់គ្រងម៉ាស៊ីនមេ', 'បច្ចេកវិទ្យាស្ថិតក្នុង', 'ប្រព័ន្ធសុវត្ថិភាពស្របច្បាប់', 'ការវិភាគគ្រប់គ្រង', 'ផែនការbackup', 'ការប្រូតេក្សុះទិន្នន័យ', 'ស្វ័យប្រវត្តិកម្ម', 'ការលម្អិតឯកសារ',
        'វិធានការការពារ', 'គុណភាពប្រតិបត្តិការ', 'ការស្វែងរកព័ត៌មាន', 'ការតភ្ជាប់VPN', 'ប្រព័ន្ធឯកសារអេឡិចត្រូនិច', 'ច្បាប់រក្សាសម្ងាត់', 'ការការពារGDPR', 'សេចក្តីជូនដំណឹង', 'ទិន្នន័យឯកជន', 'សេចក្តីយោង',
        'សេចក្តីផែនការ', 'របាយការណ៍បច្ចុប្បន្នភាព', 'ប្រព័ន្ធការពារ', 'ការបណ្តុះបណ្តាលបុគ្គលិក', 'ការវិភាគសមត្ថភាព', 'ការវាស់វែងប្រសិទ្ធភាព', 'សេចក្តីប្រកាសផ្លូវការ', 'ច្បាប់គោល', 'វិធានសោត', 'អង្គការសម្រាប់កុមារ',
        'សេវាជួយសង្គ្រោះ', 'ការសង្រ្គោះបន្ទាន់', 'សង្គ្រោះភាគី', 'អគ្គិសនីបន្ទាន់', 'ទូរស័ព្ទបន្ទាន់', 'មន្ទីរពេទ្យបន្ទាន់', 'បន្ទាន់សង្គ្រោះ', 'សេវាអាសន្ន', 'កិច្ចការបន្ទាន់', 'ចរិតសុចរិត',
        'សីលធម៌សង្គម', 'ការឆ្លើយតបទៅវិបត្តិ', 'ការគ្រប់គ្រងវិបត្តិ', 'ផែនការបន្ទាន់', 'វិធានការសន្តិសុខ', 'ការបង្រៀនបន្ទាន់', 'ការវាយតម្លៃហានិភ័យ', 'ការរៀបចំករណី', 'ធុរកិច្ចសង្គម', 'ទំនាក់ទំនងរវាងប្រទេស',
        'កិច្ចព្រមព្រៀង', 'ពិភាក្សារវាងជាតិសាសន៍', 'ទំនាក់ទំនងឧស្សាហកម្ម', 'ការផ្លាស់ប្តូរផ្នែក', 'ការបញ្ចូលវិនិយោគ', 'ច្បាប់ពន្ធ', 'គោលការណ៍តារាងពន្ធ', 'កិច្ចការ​​​ប្រជុំ', 'កិច្ចព្រមព្រៀងពាណិជ្ជកម្ម', 'ដំណើរការប្រកាន់',
        'បញ្ជីឯកសារ', 'សៀវភៅណែនាំ', 'សេវាបច្ចេកទេស', 'វិធានការត្រួតពិនិត្យ', 'ការអនុវត្តច្បាប់', 'ការផ្ដល់អនុសាសន៍', 'វិធានការរៀបចំ', 'ច្បាប់ចុះហត្ថលេខា', 'ស្ន្រួមគ្នា', 'ការស្នាក់នៅបណ្តោះអាសន្ន',
        'ការធ្វើដំណើរពិភពលោក', 'ការធ្វើដំណើរអាណាព្យាបាល', 'ការ​ទទួលភ្ញៀវ', 'កិច្ចព្រមព្រៀងការធ្វើដំណើរ', 'សេវារដ្ឋបាល', 'ការិយាល័យទទួល', 'ខ្សែចម្លង', 'ជម្រើសលំអ៏', 'គោលការណ៍ស្ដុក', 'កម្មវិធីគ្រប់គ្រងផ្ទះ',
        'ទំនាក់ទំនងអតិថិជន', 'សេវាសម្ភាសន៍', 'ការពិគ្រោះយោបល់', 'ចក្ខុវិស័យអាជីវកម្ម', 'គោលបំណងតំណាង', 'ការបង្កើតម៉ាក', 'យុទ្ធនាការដាក់ពាណិជ្ជកម្ម', 'ស្ដង់ដារការផ្សព្វផ្សា', 'ការសាកល្បងផលិតផល', 'ចំណេះដឹងសាធារណៈ',
        'ការផ្សព្វផ្សាយវីដេអូ', 'ចំណុចពាណិជ្ជកម្ម', 'ការគ្រប់គ្រងម៉ាក', 'ប្រព័ន្ធCRM', 'ច្រកទទួល', 'ការបញ្ជាទិញ', 'វិធានការបញ្ជូន', 'ការគណនា​ចំណេញ', 'វិធានការSales', 'ចំណាត់ថ្នាក់ក្រុមហ៊ុន'
    ]
};

// Flatten all words for easy access
const allKhmerWords = [
    ...khmerWordsByLevel.easy,
    ...khmerWordsByLevel.medium,
    ...khmerWordsByLevel.hard,
    ...khmerWordsByLevel.veryHard
];

class KhmerWordGame {
    constructor() {
        this.currentWord = '';
        this.currentPieces = [];
        this.score = 0;
        this.hintsUsed = 0;
        this.revealedPieces = [];
        this.selectedPiece = null;
        this.timeLeft = 0;
        this.timerInterval = null;
        this.currentRound = 0;
        this.baseTime = 10; // Starting time
        this.leaderboard = [];
        this.firestoreService = null;
        this.leaderboardListener = null;

        this.initializeElements();
        this.bindEvents();
        this.initializeFirebase();
    }

    initializeElements() {
        this.mainMenu = document.getElementById('mainMenu');
        this.gameBoard = document.getElementById('gameBoard');
        this.wordPieces = document.getElementById('wordPieces');
        this.scoreElement = document.getElementById('score');
        this.currentRoundElement = document.getElementById('currentRound');
        this.resultElement = document.getElementById('result');
        this.nextBtn = document.getElementById('nextBtn');
        this.resetBtn = document.getElementById('resetBtn');
        this.backBtn = document.getElementById('backBtn');
        this.hintBtn = document.getElementById('hintBtn');
        this.hintCost = document.getElementById('hintCost');
        this.hintDisplay = document.getElementById('hintDisplay');
        this.timerElement = document.getElementById('timer');
        this.playBtn = document.getElementById('playBtn');
        this.howToBtn = document.getElementById('howToBtn');
        this.leaderboardBtn = document.getElementById('leaderboardBtn');
        this.leaderboardModal = document.getElementById('leaderboardModal');
        this.howToModal = document.getElementById('howToModal');
        this.nameModal = document.getElementById('nameModal');
        this.closeLeaderboard = document.getElementById('closeLeaderboard');
        this.closeHowTo = document.getElementById('closeHowTo');
        this.leaderboardList = document.getElementById('leaderboardList');
        this.menuLeaderboardList = document.getElementById('menuLeaderboardList');
        this.finalScore = document.getElementById('finalScore');
        this.finalRounds = document.getElementById('finalRounds');
        this.playerName = document.getElementById('playerName');
        this.submitName = document.getElementById('submitName');

    }

    bindEvents() {
        // Menu controls
        this.playBtn.addEventListener('click', () => this.startGame());
        this.howToBtn.addEventListener('click', () => this.showHowTo());

        // Game controls
        this.nextBtn.addEventListener('click', () => {
            this.enableGameplay();
            this.nextWord();
        });
        this.resetBtn.addEventListener('click', () => this.resetGame());
        this.backBtn.addEventListener('click', () => this.backToMenu());
        this.hintBtn.addEventListener('click', () => this.useHint());
        this.leaderboardBtn.addEventListener('click', () => this.showLeaderboard());

        // Modal controls
        this.closeLeaderboard.addEventListener('click', () => this.hideLeaderboard());
        this.closeHowTo.addEventListener('click', () => this.hideHowTo());
        this.submitName.addEventListener('click', () => this.saveScore());
        this.playerName.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.saveScore();
        });
    }

    startGame() {
        this.mainMenu.style.display = 'none';
        this.gameBoard.style.display = 'block';
        this.score = 0;
        this.currentRound = 0;
        this.updateScore();
        this.nextWord();
    }

    nextWord() {
        this.currentRound++;

        // Get word based on current round with progressive difficulty and randomness
        let wordPool;
        if (this.currentRound <= 200) {
            wordPool = khmerWordsByLevel.easy;
        } else if (this.currentRound <= 400) {
            wordPool = khmerWordsByLevel.medium;
        } else if (this.currentRound <= 700) {
            wordPool = khmerWordsByLevel.hard;
        } else {
            wordPool = khmerWordsByLevel.veryHard;
        }

        // Select random word from appropriate difficulty pool
        const randomIndex = Math.floor(Math.random() * wordPool.length);
        this.currentWord = wordPool[randomIndex];

        this.hintsUsed = 0;
        this.revealedPieces = [];
        this.selectedPiece = null;
        this.generateWordPieces();
        this.displayHintArea();
        this.hideResult();
        this.nextBtn.style.display = 'none';
        this.updateHintButton();
        this.updateRoundDisplay();
        this.startTimer();
    }

    updateRoundDisplay() {
        this.currentRoundElement.textContent = this.currentRound;
    }

    getTimeForRound() {
        // Start with 10 seconds, add 5 seconds every 10 rounds
        return this.baseTime + Math.floor((this.currentRound - 1) / 10) * 5;
    }

    startTimer() {
        this.clearTimer();
        this.timeLeft = this.getTimeForRound();
        this.updateTimerDisplay();

        this.timerInterval = setInterval(() => {
            this.timeLeft--;
            this.updateTimerDisplay();

            if (this.timeLeft <= 0) {
                this.timeUp();
            }
        }, 1000);
    }

    clearTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
    }

    updateTimerDisplay() {
        this.timerElement.textContent = this.timeLeft;
        this.timerElement.parentElement.className = 'timer';

        if (this.timeLeft <= 3) {
            this.timerElement.parentElement.classList.add('danger');
        } else if (this.timeLeft <= 5) {
            this.timerElement.parentElement.classList.add('warning');
        }
    }

    timeUp() {
        this.clearTimer();
        this.showResult(false, 'អស់ពេលហើយ! ⏰');
        this.disableGameplay();
        this.gameOver();
    }

    gameOver() {
        setTimeout(() => {
            this.checkHighScore();
        }, 2000);
    }

    disableGameplay() {
        document.querySelectorAll('.word-piece').forEach(piece => {
            piece.style.pointerEvents = 'none';
            piece.style.opacity = '0.6';
        });
        this.hintBtn.disabled = true;
    }

    enableGameplay() {
        document.querySelectorAll('.word-piece').forEach(piece => {
            piece.style.pointerEvents = 'auto';
            piece.style.opacity = '1';
        });
        this.updateHintButton();
    }

    generateWordPieces() {
        // Split Khmer text into meaningful pieces (syllables/words)
        this.currentPieces = this.splitKhmerText(this.currentWord);

        // Ensure minimum pieces for early rounds
        if (this.currentRound <= 20 && this.currentPieces.length < 3) {
            this.currentPieces = this.splitIntoMorePieces(this.currentWord);
        }

        // Keep shuffling until the word is not already correct
        do {
            this.shuffleArray(this.currentPieces);
        } while (this.currentPieces.join('') === this.currentWord && this.currentPieces.length > 1);

        this.displayWordPieces();
    }

    splitIntoMorePieces(word) {
        const pieces = [];
        let i = 0;

        while (i < word.length) {
            let piece = word[i];
            i++;

            // For easy mode, try to create smaller pieces
            if (i < word.length && this.isKhmerVowelOrDiacritic(word[i])) {
                piece += word[i];
                i++;
            }

            pieces.push(piece);
        }

        // If still not enough pieces, split further
        if (pieces.length < 3) {
            const newPieces = [];
            pieces.forEach(piece => {
                if (piece.length > 1) {
                    for (let char of piece) {
                        newPieces.push(char);
                    }
                } else {
                    newPieces.push(piece);
                }
            });
            return newPieces.length >= 3 ? newPieces : pieces;
        }

        return pieces;
    }

    splitKhmerText(text) {
        const pieces = [];

        if (text.includes(' ')) {
            // If it's a sentence, split by words first
            const words = text.split(' ');
            words.forEach(word => {
                pieces.push(...this.splitKhmerWord(word));
            });
        } else {
            // Single word
            pieces.push(...this.splitKhmerWord(text));
        }

        return pieces.filter(piece => piece.trim().length > 0);
    }

    splitKhmerWord(word) {
        const pieces = [];
        let i = 0;

        while (i < word.length) {
            let syllable = word[i]; // Start with the consonant
            i++;

            // Add subscript consonants (្ + consonant)
            while (i < word.length && word[i] === '្' && i + 1 < word.length) {
                syllable += word[i] + word[i + 1]; // Add ្ + consonant
                i += 2;
            }

            // Add vowels and diacritics that belong to this syllable
            while (i < word.length && this.isKhmerVowelOrDiacritic(word[i])) {
                syllable += word[i];
                i++;
            }

            pieces.push(syllable);
        }

        return pieces;
    }

    isKhmerVowelOrDiacritic(char) {
        const code = char.charCodeAt(0);
        // Khmer vowels and diacritics Unicode ranges
        return (code >= 0x17B6 && code <= 0x17D3) || // Vowels and signs
            (code >= 0x17DD && code <= 0x17DD) || // Atthacan
            (code >= 0x17C6 && code <= 0x17C6) || // Nikahit
            (code >= 0x17C7 && code <= 0x17C8) || // Reahmuk and Yuukaleapintu
            (code >= 0x17BE && code <= 0x17C5) || // Various vowels
            (code >= 0x17CB && code <= 0x17D1);   // Various signs
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    displayHintArea() {
        this.hintDisplay.innerHTML = '';
        this.currentPieces.forEach((piece, index) => {
            const span = document.createElement('span');
            span.className = this.revealedPieces.includes(index) ? 'hint-char' : 'hint-placeholder';
            span.textContent = this.revealedPieces.includes(index) ? piece : '?';
            this.hintDisplay.appendChild(span);
        });
    }

    useHint() {
        const hintCost = (this.hintsUsed + 1) * 10;

        if (this.score < hintCost) {
            alert('ពិន្ទុមិនគ្រប់! អ្នកត្រូវការ ' + hintCost + ' ពិន្ទុ');
            return;
        }

        // Find unrevealed pieces
        const unrevealedIndices = [];
        this.currentPieces.forEach((piece, index) => {
            if (!this.revealedPieces.includes(index)) {
                unrevealedIndices.push(index);
            }
        });

        if (unrevealedIndices.length === 0) {
            alert('គ្រប់តួអក្សរត្រូវបានបង្ហាញហើយ!');
            return;
        }

        // Reveal a random unrevealed piece
        const randomIndex = unrevealedIndices[Math.floor(Math.random() * unrevealedIndices.length)];
        this.revealedPieces.push(randomIndex);

        // Deduct points
        this.score -= hintCost;
        this.hintsUsed++;

        // Update display
        this.updateScore();
        this.displayHintArea();
        this.updateHintButton();
    }

    updateHintButton() {
        const nextHintCost = (this.hintsUsed + 1) * 10;
        this.hintCost.textContent = nextHintCost + ' ពិន្ទុ';

        // Disable if not enough points or all pieces revealed
        const canAfford = this.score >= nextHintCost;
        const hasUnrevealed = this.revealedPieces.length < this.currentPieces.length;

        this.hintBtn.disabled = !canAfford || !hasUnrevealed;

        if (!hasUnrevealed) {
            this.hintCost.textContent = 'បានបង្ហាញអស់';
        } else if (!canAfford) {
            this.hintCost.textContent = 'ពិន្ទុមិនគ្រប់';
        }
    }

    displayWordPieces() {
        this.wordPieces.innerHTML = '';
        this.currentPieces.forEach((piece, index) => {
            const pieceElement = document.createElement('div');
            pieceElement.className = 'word-piece';
            pieceElement.textContent = piece;
            pieceElement.dataset.piece = piece;
            pieceElement.dataset.index = index;

            pieceElement.addEventListener('click', () => this.handlePieceClick(pieceElement, index));

            this.wordPieces.appendChild(pieceElement);
        });
    }

    handlePieceClick(pieceElement, index) {
        if (!this.selectedPiece) {
            // First piece selected
            this.selectedPiece = { element: pieceElement, index: index };
            pieceElement.classList.add('selected');
        } else if (this.selectedPiece.index === index) {
            // Same piece clicked - deselect
            this.selectedPiece.element.classList.remove('selected');
            this.selectedPiece = null;
        } else {
            // Second piece selected - swap
            this.swapPieces(this.selectedPiece.index, index);
            this.selectedPiece.element.classList.remove('selected');
            this.selectedPiece = null;
        }
    }

    swapPieces(index1, index2) {
        // Add swap animation
        const piece1 = this.wordPieces.children[index1];
        const piece2 = this.wordPieces.children[index2];

        piece1.classList.add('swapping');
        piece2.classList.add('swapping');

        // Swap in array
        [this.currentPieces[index1], this.currentPieces[index2]] =
            [this.currentPieces[index2], this.currentPieces[index1]];

        // Update display after animation
        setTimeout(() => {
            this.displayWordPieces();
            // Auto-check if word is correct
            this.autoCheckAnswer();
        }, 250);
    }

    autoCheckAnswer() {
        const userAnswer = this.currentPieces.join('');

        if (userAnswer === this.currentWord) {
            this.clearTimer();
            this.showResult(true, '🎉 ត្រឹមត្រូវ! ល្អណាស់!');
            this.score += this.getScoreForRound() + this.timeLeft; // Bonus for remaining time
            this.updateScore();
            this.disableGameplay();
            this.nextBtn.style.display = 'inline-block';
        }
    }





    getScoreForRound() {
        // Base score increases with round difficulty
        return Math.max(10, Math.floor(this.currentRound / 10) * 5 + 10);
    }

    showResult(isCorrect, customMessage = null) {
        this.resultElement.className = `result ${isCorrect ? 'correct' : 'incorrect'}`;

        if (customMessage) {
            this.resultElement.textContent = customMessage;
        } else {
            this.resultElement.textContent = isCorrect ?
                '🎉 ត្រឹមត្រូវ! ល្អណាស់!' :
                '❌ មិនត្រឹមត្រូវ! សូមព្យាយាមម្តងទៀត';
        }

        this.resultElement.style.display = 'block';
    }

    hideResult() {
        this.resultElement.style.display = 'none';
    }



    updateScore() {
        this.scoreElement.textContent = this.score;
        this.updateHintButton();
    }

    resetGame() {
        this.clearTimer();
        this.score = 0;
        this.hintsUsed = 0;
        this.revealedPieces = [];
        this.selectedPiece = null;
        this.currentRound = 0;
        this.updateScore();
        this.enableGameplay();
        this.nextWord();
    }

    async backToMenu() {
        this.clearTimer();
        this.gameBoard.style.display = 'none';
        this.mainMenu.style.display = 'block';
        this.score = 0;
        this.hintsUsed = 0;
        this.revealedPieces = [];
        this.selectedPiece = null;
        this.currentRound = 0;
        this.updateScore();
        
        // Refresh leaderboard when returning to menu
        if (this.firestoreService) {
            await this.loadLeaderboard();
        } else {
            this.displayMenuLeaderboard();
        }
    }

    // How to play modal
    showHowTo() {
        this.howToModal.style.display = 'flex';
    }

    hideHowTo() {
        this.howToModal.style.display = 'none';
    }

    // Firebase initialization
    async initializeFirebase() {
        console.log('Initializing Firebase...');
        
        try {
            // Check if Firebase is loaded
            if (typeof firebase === 'undefined') {
                throw new Error('Firebase SDK not loaded');
            }
            
            if (typeof FirestoreService !== 'undefined') {
                console.log('Creating Firestore service...');
                this.firestoreService = new FirestoreService();
                
                // Test Firebase connection
                console.log('Testing Firebase connection...');
                await this.loadLeaderboard();
                this.setupLeaderboardListener();
                console.log('Firebase connected successfully!');
            } else {
                throw new Error('FirestoreService not available');
            }
        } catch (error) {
            console.error('Firebase initialization failed:', error);
            console.warn('Falling back to localStorage');
            this.loadLocalLeaderboard();
        }
    }

    // Setup real-time leaderboard updates
    setupLeaderboardListener() {
        if (this.firestoreService) {
            console.log('Setting up real-time leaderboard listener...');
            this.leaderboardListener = this.firestoreService.onLeaderboardUpdate((scores) => {
                console.log('Real-time update: received', scores.length, 'scores');
                this.leaderboard = scores;
                this.displayMenuLeaderboard();
                
                // Also update the modal leaderboard if it's open
                if (this.leaderboardModal.style.display === 'flex') {
                    this.displayLeaderboard();
                }
            });
        }
    }

    // Load leaderboard from Firebase or localStorage
    async loadLeaderboard() {
        try {
            if (this.firestoreService) {
                console.log('Loading leaderboard from Firebase...');
                this.leaderboard = await this.firestoreService.getTopScores(10);
                console.log('Loaded', this.leaderboard.length, 'scores from Firebase');
                this.displayMenuLeaderboard();
            } else {
                console.log('No Firestore service, using localStorage');
                this.loadLocalLeaderboard();
            }
        } catch (error) {
            console.error('Error loading Firebase leaderboard:', error);
            console.log('Falling back to localStorage');
            this.loadLocalLeaderboard();
        }
    }

    // Fallback to localStorage
    loadLocalLeaderboard() {
        const saved = localStorage.getItem('khmerWordGameLeaderboard');
        this.leaderboard = saved ? JSON.parse(saved) : [];
        this.displayMenuLeaderboard();
    }

    saveLocalLeaderboard() {
        localStorage.setItem('khmerWordGameLeaderboard', JSON.stringify(this.leaderboard));
    }

    // Check if score qualifies for top 10
    async checkHighScore() {
        try {
            let qualifies = false;

            if (this.firestoreService) {
                qualifies = await this.firestoreService.checkTopScore(this.score);
            } else {
                // Local check
                this.leaderboard.sort((a, b) => b.score - a.score);
                qualifies = this.leaderboard.length < 10 || this.score > this.leaderboard[9].score;
            }

            if (qualifies) {
                this.showNameInput();
            } else {
                setTimeout(() => {
                    this.showLeaderboard();
                }, 1000);
            }
        } catch (error) {
            console.error('Error checking high score:', error);
            this.showNameInput(); // Show input on error to be safe
        }
    }

    showNameInput() {
        this.finalScore.textContent = this.score;
        this.finalRounds.textContent = this.currentRound - 1;
        this.nameModal.style.display = 'flex';
        this.playerName.focus();
    }

    async saveScore() {
        const name = this.playerName.value.trim();
        
        // Validate name is not empty
        if (!name || name.length < 1) {
            alert('សូមបញ្ចូលឈ្មោះរបស់អ្នក! (Please enter your name!)');
            this.playerName.focus();
            return;
        }

        // Validate name length
        if (name.length > 20) {
            alert('ឈ្មោះវែងពេក! សូមប្រើឈ្មោះខ្លីជាងនេះ (Name too long! Please use a shorter name)');
            this.playerName.focus();
            return;
        }

        const scoreData = {
            name: name,
            score: this.score,
            round: this.currentRound - 1,
            date: new Date().toLocaleDateString('km-KH')
        };

        try {
            if (this.firestoreService) {
                // Save to Firebase
                console.log('Saving score to Firebase:', scoreData);
                await this.firestoreService.saveScore(scoreData);
                console.log('Score saved to Firebase successfully');
                
                // Manually refresh leaderboard after saving
                console.log('Refreshing leaderboard after save...');
                setTimeout(async () => {
                    await this.loadLeaderboard();
                }, 1000); // Wait 1 second for Firebase to process
                
            } else {
                // Fallback to localStorage
                console.log('Saving score to localStorage:', scoreData);
                this.leaderboard.push(scoreData);
                this.leaderboard.sort((a, b) => b.score - a.score);
                this.leaderboard = this.leaderboard.slice(0, 10);
                this.saveLocalLeaderboard();
                this.displayMenuLeaderboard();
            }
        } catch (error) {
            console.error('Error saving score to Firebase:', error);
            console.log('Falling back to localStorage');
            // Fallback to localStorage on error
            this.leaderboard.push(scoreData);
            this.leaderboard.sort((a, b) => b.score - a.score);
            this.leaderboard = this.leaderboard.slice(0, 10);
            this.saveLocalLeaderboard();
            this.displayMenuLeaderboard();
        }

        this.hideNameInput();
        this.showLeaderboard();
    }



    hideNameInput() {
        this.nameModal.style.display = 'none';
        this.playerName.value = '';
    }

    async showLeaderboard() {
        // Refresh leaderboard data before showing
        if (this.firestoreService) {
            console.log('Refreshing leaderboard before showing modal...');
            await this.loadLeaderboard();
        }
        
        this.displayLeaderboard();
        this.leaderboardModal.style.display = 'flex';
    }

    hideLeaderboard() {
        this.leaderboardModal.style.display = 'none';
    }

    displayLeaderboard() {
        if (this.leaderboard.length === 0) {
            this.leaderboardList.innerHTML = '<div class="empty-leaderboard">មិនទាន់មានពិន្ទុនៅឡើយទេ</div>';
            return;
        }

        this.leaderboardList.innerHTML = '';
        this.leaderboard.forEach((entry, index) => {
            const item = document.createElement('div');
            item.className = `leaderboard-item ${index < 3 ? 'top3' : ''}`;

            const rankEmoji = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '';

            item.innerHTML = `
                <div class="leaderboard-rank">${rankEmoji} ${index + 1}</div>
                <div class="leaderboard-name">${entry.name}</div>
                <div class="leaderboard-score">${entry.score}</div>
                <div class="leaderboard-rounds">${entry.round} ពាក្យ</div>
                <div class="leaderboard-date">${entry.date}</div>
            `;

            this.leaderboardList.appendChild(item);
        });
    }

    displayMenuLeaderboard() {
        console.log('Displaying menu leaderboard, entries:', this.leaderboard.length);
        console.log('Using Firebase:', !!this.firestoreService);
        
        if (!this.menuLeaderboardList) {
            console.error('Menu leaderboard list element not found');
            return;
        }

        if (this.leaderboard.length === 0) {
            const emptyMessage = this.firestoreService ? 
                'មិនទាន់មានពិន្ទុនៅឡើយទេ<br><small>លេងហើយដាក់ពិន្ទុដំបូង!</small>' : 
                'មិនទាន់មានពិន្ទុនៅឡើយទេ';
            this.menuLeaderboardList.innerHTML = `<div class="empty-leaderboard">${emptyMessage}</div>`;
            return;
        }

        this.menuLeaderboardList.innerHTML = '';
        this.leaderboard.slice(0, 10).forEach((entry, index) => {
            const item = document.createElement('div');
            let rankClass = 'rank-other';

            if (index === 0) rankClass = 'rank-1';
            else if (index === 1) rankClass = 'rank-2';
            else if (index === 2) rankClass = 'rank-3';
            else if (index === 3 || index === 4) rankClass = 'rank-4';

            item.className = `menu-leaderboard-item ${rankClass}`;

            const rankEmoji = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '';

            item.innerHTML = `
                <div class="menu-rank">${rankEmoji} ${index + 1}</div>
                <div class="menu-name">${entry.name}</div>
                <div class="menu-score">${entry.score}</div>
                <div class="menu-rounds">${entry.round}ពាក្យ</div>
            `;

            this.menuLeaderboardList.appendChild(item);
        });
        
        console.log('Menu leaderboard updated with', this.leaderboard.length, 'entries from', this.firestoreService ? 'Firebase' : 'localStorage');
    }

    // Test Firebase connection
    async testFirebaseConnection() {
        console.log('Testing Firebase connection...');
        
        if (!this.firestoreService) {
            console.error('Firestore service not initialized');
            return false;
        }
        
        try {
            // Try to read from Firestore
            const scores = await this.firestoreService.getTopScores(1);
            console.log('Firebase connection test successful. Found', scores.length, 'scores');
            return true;
        } catch (error) {
            console.error('Firebase connection test failed:', error);
            return false;
        }
    }

    // Clear localStorage and force Firebase usage
    clearLocalStorage() {
        localStorage.removeItem('khmerWordGameLeaderboard');
        console.log('localStorage cleared');
        this.loadLeaderboard();
    }

    // Force refresh leaderboard from Firebase
    async forceRefreshLeaderboard() {
        console.log('Force refreshing leaderboard...');
        if (this.firestoreService) {
            try {
                this.leaderboard = await this.firestoreService.getTopScores(10);
                console.log('Force refresh: loaded', this.leaderboard.length, 'scores');
                this.displayMenuLeaderboard();
                
                // Also update modal if open
                if (this.leaderboardModal.style.display === 'flex') {
                    this.displayLeaderboard();
                }
                
                return true;
            } catch (error) {
                console.error('Force refresh failed:', error);
                return false;
            }
        } else {
            console.log('No Firebase service available');
            return false;
        }
    }

    // Cleanup Firebase listener when needed
    cleanup() {
        if (this.leaderboardListener) {
            this.leaderboardListener();
            this.leaderboardListener = null;
        }
    }
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new KhmerWordGame();
});