// All topics and questions
const topics = {
    starter: {
        name: "Starter",
        questions: [
            {
                text: "Choose the correct article: ___ apple",
                choices: ["a", "an", "the", "some"],
                correct: 1,
                explanation: "We use 'an' before words that begin with a vowel sound. 'Apple' begins with the vowel sound /æ/, so we use 'an apple'.",
                grammar: "Articles (a/an/the)"
            },
            {
                text: "What is the plural form of 'child'?",
                choices: ["childs", "children", "childes", "childies"],
                correct: 1,
                explanation: "'Children' is the irregular plural form of 'child'. Many common nouns have irregular plural forms that need to be memorized.",
                grammar: "Irregular plurals"
            },
            {
                text: "How do you say 15 in English?",
                choices: ["fiveteen", "fifteen", "fifty", "five"],
                correct: 1,
                explanation: "Fifteen is the correct spelling for the number 15. Remember the spelling of numbers from 13 to 19, they all end in '-teen'.",
                grammar: "Numbers"
            },
            {
                text: "Which word is a school supply?",
                choices: ["apple", "desk", "pencil", "cat"],
                correct: 2,
                explanation: "School supplies are items used for studying. A pencil is a school supply, while an apple and a cat are not.",
                grammar: "Vocabulary - School supplies"
            },
            {
                text: "What color is the sun?",
                choices: ["blue", "green", "yellow", "red"],
                correct: 2,
                explanation: "The sun appears yellow when we look at it from Earth. This is due to how the atmosphere scatters light.",
                grammar: "Vocabulary - Colors"
            },
            {
                text: "What day comes after Tuesday?",
                choices: ["Monday", "Wednesday", "Thursday", "Friday"],
                correct: 1,
                explanation: "The days of the week go in this order: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday. Wednesday comes after Tuesday.",
                grammar: "Vocabulary - Days of the week"
            },
            {
                text: "Choose the correct plural: ___",
                choices: ["mouses", "mice", "mousees", "mices"],
                correct: 1,
                explanation: "'Mice' is the irregular plural form of 'mouse'. This is a very common irregular plural that needs to be memorized.",
                grammar: "Irregular plurals"
            },
            {
                text: "How do you say 100 in English?",
                choices: ["thousand", "hundred", "ten", "million"],
                correct: 1,
                explanation: "'Hundred' means 100. 'Thousand' is 1,000, and 'million' is 1,000,000.",
                grammar: "Numbers"
            },
            {
                text: "Which is NOT a school supply?",
                choices: ["book", "eraser", "tree", "ruler"],
                correct: 2,
                explanation: "A tree is a plant, not a school supply. A book, eraser, and ruler are all items used in school.",
                grammar: "Vocabulary - School supplies"
            },
            {
                text: "What color do you get when you mix red and blue?",
                choices: ["green", "yellow", "purple", "orange"],
                correct: 2,
                explanation: "Purple (or violet) is created by mixing red and blue paint or light.",
                grammar: "Vocabulary - Colors"
            },
            {
                text: "Which day is the weekend?",
                choices: ["Monday", "Wednesday", "Saturday", "Friday"],
                correct: 2,
                explanation: "Weekend days in most English-speaking countries are Saturday and Sunday. Friday is a weekday.",
                grammar: "Vocabulary - Days of the week"
            },
            {
                text: "Choose the correct article: ___ book",
                choices: ["a", "an", "the", "some"],
                correct: 0,
                explanation: "We use 'a' before words that begin with a consonant sound. 'Book' begins with the consonant sound /b/.",
                grammar: "Articles (a/an/the)"
            },
            {
                text: "What is the plural of 'box'?",
                choices: ["boxs", "boxes", "boxies", "boxen"],
                correct: 1,
                explanation: "For most nouns ending in 'x', we add '-es' to make the plural: box → boxes.",
                grammar: "Regular plurals"
            },
            {
                text: "How many days are in a week?",
                choices: ["5", "6", "7", "8"],
                correct: 2,
                explanation: "There are 7 days in a week: Monday through Sunday.",
                grammar: "Numbers and time"
            },
            {
                text: "Which word means the opposite of 'big'?",
                choices: ["small", "large", "huge", "great"],
                correct: 0,
                explanation: "'Small' is the opposite meaning of 'big'. 'Large', 'huge', and 'great' have similar meanings to 'big'.",
                grammar: "Vocabulary - Antonyms"
            }
        ]
    },
    home: {
        name: "Home & Away!",
        questions: [
            {
                text: "There ___ a cat on the roof.",
                choices: ["is", "are", "am", "be"],
                correct: 0,
                explanation: "We use 'there is' with singular nouns. 'Cat' is singular, so we use 'is'.",
                grammar: "There is/There are"
            },
            {
                text: "I have ___ apples in my bag.",
                choices: ["a", "an", "some", "any"],
                correct: 2,
                explanation: "We use 'some' in positive sentences with plural countable nouns or uncountable nouns.",
                grammar: "Some/Any"
            },
            {
                text: "The book is ___ the table.",
                choices: ["in", "on", "under", "between"],
                correct: 1,
                explanation: "We use 'on' when something is positioned on top of a surface.",
                grammar: "Prepositions of place"
            },
            {
                text: "___ quiet, please!",
                choices: ["Be", "Is", "Are", "Am"],
                correct: 0,
                explanation: "The imperative form uses the base verb. 'Be quiet' is a command.",
                grammar: "Imperative"
            },
            {
                text: "There ___ many students in the classroom.",
                choices: ["is", "are", "am", "be"],
                correct: 1,
                explanation: "We use 'there are' with plural nouns. 'Students' is plural, so we use 'are'.",
                grammar: "There is/There are"
            },
            {
                text: "Do you have ___ questions?",
                choices: ["a", "an", "some", "any"],
                correct: 3,
                explanation: "We use 'any' in questions and negative sentences with plural countable nouns or uncountable nouns.",
                grammar: "Some/Any"
            },
            {
                text: "The cat is ___ the bed.",
                choices: ["in", "on", "under", "between"],
                correct: 2,
                explanation: "We use 'under' when something is positioned below another object.",
                grammar: "Prepositions of place"
            },
            {
                text: "___ careful with that glass!",
                choices: ["Be", "Is", "Are", "Am"],
                correct: 0,
                explanation: "The imperative form uses the base verb. 'Be careful' is a command.",
                grammar: "Imperative"
            },
            {
                text: "There ___ some water in the bottle.",
                choices: ["is", "are", "am", "be"],
                correct: 0,
                explanation: "We use 'there is' with uncountable nouns. 'Water' is uncountable, so we use 'is'.",
                grammar: "There is/There are"
            },
            {
                text: "I don't have ___ money.",
                choices: ["a", "an", "some", "any"],
                correct: 3,
                explanation: "We use 'any' in negative sentences with plural countable nouns or uncountable nouns.",
                grammar: "Some/Any"
            },
            {
                text: "The picture is ___ the wall.",
                choices: ["in", "on", "under", "between"],
                correct: 1,
                explanation: "We use 'on' when something is attached to or positioned on a vertical surface.",
                grammar: "Prepositions of place"
            },
            {
                text: "___ here now!",
                choices: ["Be", "Is", "Are", "Am"],
                correct: 0,
                explanation: "The imperative form uses the base verb. 'Be here' is a command.",
                grammar: "Imperative"
            },
            {
                text: "There ___ a lot of cars on the street.",
                choices: ["is", "are", "am", "be"],
                correct: 1,
                explanation: "We use 'there are' with plural nouns. 'Cars' is plural, so we use 'are'.",
                grammar: "There is/There are"
            },
            {
                text: "Would you like ___ tea?",
                choices: ["a", "an", "some", "any"],
                correct: 2,
                explanation: "In offers and requests, we can use 'some' even in questions.",
                grammar: "Some/Any"
            },
            {
                text: "The keys are ___ the door.",
                choices: ["in front of", "on", "under", "between"],
                correct: 0,
                explanation: "We use 'in front of' when something is positioned in front of another object, facing it.",
                grammar: "Prepositions of place"
            }
        ]
    },
    living: {
        name: "Living things!",
        questions: [
            {
                text: "I ___ got a pet dog.",
                choices: ["has", "have", "am", "is"],
                correct: 1,
                explanation: "We use 'have got' with I, you, we, they. We use 'has got' with he, she, it.",
                grammar: "Have got"
            },
            {
                text: "This is ___ book. That is ___ book.",
                choices: ["my/mine", "mine/my", "his/her", "her/his"],
                correct: 0,
                explanation: "'My' is a possessive adjective (before noun). 'Mine' is a possessive pronoun (instead of noun).",
                grammar: "Possessive adjectives/pronouns"
            },
            {
                text: "The child has two ___.",
                choices: ["tooths", "teeth", "tooth", "teeths"],
                correct: 1,
                explanation: "'Teeth' is the irregular plural of 'tooth'. This is an important irregular plural to remember.",
                grammar: "Irregular plurals"
            },
            {
                text: "___ shoes are these?",
                choices: ["This", "These", "That", "Those"],
                correct: 1,
                explanation: "We use 'these' for plural nouns that are near to the speaker.",
                grammar: "This/These/That/Those"
            },
            {
                text: "She ___ got a beautiful garden.",
                choices: ["has", "have", "am", "is"],
                correct: 0,
                explanation: "We use 'has got' with he, she, it. We use 'have got' with I, you, we, they.",
                grammar: "Have got"
            },
            {
                text: "The cat licked ___ paws.",
                choices: ["it", "its", "it's", "they"],
                correct: 1,
                explanation: "'Its' is a possessive adjective (before noun). 'It's' means 'it is' or 'it has'.",
                grammar: "Possessive adjectives/pronouns"
            },
            {
                text: "A mouse has ___ mice.",
                choices: ["childs", "children", "mouses", "mice"],
                correct: 3,
                explanation: "'Mice' is the irregular plural of 'mouse'. This is a very common irregular plural to remember.",
                grammar: "Irregular plurals"
            },
            {
                text: "___ car is that?",
                choices: ["This", "These", "That", "Those"],
                correct: 2,
                explanation: "We use 'that' for singular nouns that are far from the speaker.",
                grammar: "This/These/That/Those"
            },
            {
                text: "We ___ got three bicycles.",
                choices: ["has", "have", "am", "is"],
                correct: 1,
                explanation: "We use 'have got' with I, you, we, they. We use 'has got' with he, she, it.",
                grammar: "Have got"
            },
            {
                text: "___ books are yours?",
                choices: ["This", "These", "That", "Those"],
                correct: 3,
                explanation: "We use 'those' for plural nouns that are far from the speaker.",
                grammar: "This/These/That/Those"
            },
            {
                text: "The children washed ___ hands.",
                choices: ["they", "them", "their", "theirs"],
                correct: 2,
                explanation: "'Their' is a possessive adjective (before noun). 'Theirs' is a possessive pronoun (instead of noun).",
                grammar: "Possessive adjectives/pronouns"
            },
            {
                text: "One goose, two ___.",
                choices: ["gooses", "geese", "goose", "geeses"],
                correct: 1,
                explanation: "'Geese' is the irregular plural of 'goose'. Another important irregular plural.",
                grammar: "Irregular plurals"
            },
            {
                text: "___ is my sister.",
                choices: ["This", "These", "That", "Those"],
                correct: 0,
                explanation: "We use 'this' for singular nouns that are near to the speaker.",
                grammar: "This/These/That/Those"
            },
            {
                text: "They ___ got a new house.",
                choices: ["has", "have", "am", "is"],
                correct: 1,
                explanation: "We use 'have got' with I, you, we, they. We use 'has got' with he, she, it.",
                grammar: "Have got"
            },
            {
                text: "My dog hurt ___ paw.",
                choices: ["it", "its", "it's", "they"],
                correct: 1,
                explanation: "'Its' is a possessive adjective showing the dog owns the paw.",
                grammar: "Possessive adjectives/pronouns"
            }
        ]
    },
    values: {
        name: "Values",
        questions: [
            {
                text: "I ___ to school every day.",
                choices: ["go", "goes", "going", "went"],
                correct: 0,
                explanation: "In Present Simple with I, you, we, they, use the base form of the verb.",
                grammar: "Present Simple"
            },
            {
                text: "She ___ playing tennis.",
                choices: ["like", "likes", "liking", "liked"],
                correct: 1,
                explanation: "In Present Simple with he, she, it, add -s or -es to the verb.",
                grammar: "Present Simple"
            },
            {
                text: "I ___ swimming in summer.",
                choices: ["love", "loves", "loving", "loved"],
                correct: 0,
                explanation: "With 'love', use base form with I, you, we, they in Present Simple.",
                grammar: "Present Simple with -ing"
            },
            {
                text: "He ___ watching TV.",
                choices: ["hate", "hates", "hating", "hated"],
                correct: 1,
                explanation: "With 'hate', add -s with he, she, it in Present Simple.",
                grammar: "Present Simple with -ing"
            },
            {
                text: "They ___ to the park on weekends.",
                choices: ["go", "goes", "going", "went"],
                correct: 0,
                explanation: "In Present Simple with I, you, we, they, use the base form of the verb.",
                grammar: "Present Simple"
            },
            {
                text: "My brother ___ reading books.",
                choices: ["like", "likes", "liking", "liked"],
                correct: 1,
                explanation: "With he, she, it, add -s to the verb in Present Simple.",
                grammar: "Present Simple"
            },
            {
                text: "We ___ dancing at parties.",
                choices: ["love", "loves", "loving", "loved"],
                correct: 0,
                explanation: "With 'love', use base form with I, you, we, they in Present Simple.",
                grammar: "Present Simple with -ing"
            },
            {
                text: "The cat ___ sleeping all day.",
                choices: ["hate", "hates", "hating", "hated"],
                correct: 1,
                explanation: "With he, she, it, add -s to the verb in Present Simple.",
                grammar: "Present Simple with -ing"
            },
            {
                text: "She ___ to work by bus.",
                choices: ["go", "goes", "going", "went"],
                correct: 1,
                explanation: "In Present Simple with he, she, it, add -s or -es to the verb.",
                grammar: "Present Simple"
            },
            {
                text: "I ___ cooking dinner.",
                choices: ["like", "likes", "liking", "liked"],
                correct: 0,
                explanation: "With I, you, we, they, use base form in Present Simple.",
                grammar: "Present Simple"
            },
            {
                text: "They ___ listening to music.",
                choices: ["love", "loves", "loving", "loved"],
                correct: 0,
                explanation: "With 'love', use base form with I, you, we, they in Present Simple.",
                grammar: "Present Simple with -ing"
            },
            {
                text: "My parents ___ gardening.",
                choices: ["hate", "hates", "hating", "hated"],
                correct: 0,
                explanation: "With 'hate', use base form with I, you, we, they in Present Simple.",
                grammar: "Present Simple with -ing"
            },
            {
                text: "He ___ football every Saturday.",
                choices: ["play", "plays", "playing", "played"],
                correct: 1,
                explanation: "In Present Simple with he, she, it, add -s or -es to the verb.",
                grammar: "Present Simple"
            },
            {
                text: "We ___ watching movies.",
                choices: ["like", "likes", "liking", "liked"],
                correct: 0,
                explanation: "With I, you, we, they, use base form in Present Simple.",
                grammar: "Present Simple"
            },
            {
                text: "She ___ painting pictures.",
                choices: ["love", "loves", "loving", "loved"],
                correct: 1,
                explanation: "With 'love', add -s with he, she, it in Present Simple.",
                grammar: "Present Simple with -ing"
            }
        ]
    },
    work: {
        name: "World of Work",
        questions: [
            {
                text: "___ is a teacher. ___ teaches English.",
                choices: ["He/He", "He/She", "She/He", "She/She"],
                correct: 0,
                explanation: "Use subject pronouns (he, she, it) as the subject of a sentence.",
                grammar: "Subject pronouns"
            },
            {
                text: "I see ___. ___ is my friend.",
                choices: ["he/him", "him/he", "his/he", "him/his"],
                correct: 1,
                explanation: "Use object pronouns (him, her, it) after verbs. Use subject pronouns (he, she, it) as subject.",
                grammar: "Subject/Object pronouns"
            },
            {
                text: "___ do you go to school?",
                choices: ["What", "Where", "When", "Why"],
                correct: 1,
                explanation: "Use 'Where' to ask about place or location.",
                grammar: "Question words"
            },
            {
                text: "___ do you live?",
                choices: ["What", "Where", "When", "Why"],
                correct: 1,
                explanation: "Use 'Where' to ask about place or location.",
                grammar: "Question words"
            },
            {
                text: "She ___ to school. ___ goes by bus.",
                choices: ["go/She", "goes/She", "go/He", "goes/He"],
                correct: 1,
                explanation: "Use subject pronouns (he, she, it) as the subject of a sentence.",
                grammar: "Subject pronouns"
            },
            {
                text: "___ do you like English?",
                choices: ["What", "Where", "When", "Why"],
                correct: 3,
                explanation: "Use 'Why' to ask about reason or purpose.",
                grammar: "Question words"
            },
            {
                text: "I help ___. ___ needs help.",
                choices: ["he/him", "him/he", "his/he", "him/his"],
                correct: 1,
                explanation: "Use object pronouns (him, her, it) after verbs. Use subject pronouns (he, she, it) as subject.",
                grammar: "Subject/Object pronouns"
            },
            {
                text: "___ do you get up?",
                choices: ["What", "Where", "When", "Why"],
                correct: 2,
                explanation: "Use 'When' to ask about time.",
                grammar: "Question words"
            },
            {
                text: "They ___ students. ___ study hard.",
                choices: ["are/They", "is/They", "are/We", "is/We"],
                correct: 0,
                explanation: "Use subject pronouns (they) as the subject of a sentence.",
                grammar: "Subject pronouns"
            },
            {
                text: "___ do you do?",
                choices: ["What", "Where", "When", "Why"],
                correct: 0,
                explanation: "Use 'What' to ask about actions or things.",
                grammar: "Question words"
            },
            {
                text: "We see ___. ___ are teachers.",
                choices: ["they/them", "them/they", "their/they", "them/their"],
                correct: 1,
                explanation: "Use object pronouns (them) after verbs. Use subject pronouns (they) as subject.",
                grammar: "Subject/Object pronouns"
            },
            {
                text: "___ do you play football?",
                choices: ["What", "Where", "When", "Why"],
                correct: 2,
                explanation: "Use 'When' to ask about time.",
                grammar: "Question words"
            },
            {
                text: "You ___ finish your homework. It's important.",
                choices: ["have to", "can't", "don't have to", "mustn't"],
                correct: 0,
                explanation: "Use 'have to' to express necessity or obligation.",
                grammar: "Have to/Must"
            },
            {
                text: "You ___ smoke here. It's forbidden.",
                choices: ["have to", "can", "don't have to", "mustn't"],
                correct: 3,
                explanation: "Use 'mustn't' to express prohibition.",
                grammar: "Have to/Must"
            },
            {
                text: "___ do you study?",
                choices: ["What", "Where", "When", "Why"],
                correct: 3,
                explanation: "Use 'Why' to ask about reason or purpose.",
                grammar: "Question words"
            }
        ]
    },
    creativity: {
        name: "Creativity",
        questions: [
            {
                text: "I ___ at the park yesterday.",
                choices: ["was", "were", "am", "are"],
                correct: 0,
                explanation: "We use 'was' with I, he, she, it in Past Simple. We use 'were' with you, we, they.",
                grammar: "Was/Were"
            },
            {
                text: "They ___ happy with the results.",
                choices: ["was", "were", "am", "are"],
                correct: 1,
                explanation: "We use 'were' with you, we, they in Past Simple. We use 'was' with I, he, she, it.",
                grammar: "Was/Were"
            },
            {
                text: "She ___ a book last night.",
                choices: ["read", "reads", "reading", "reads"],
                correct: 0,
                explanation: "This is the past form of 'read'. For regular verbs, add -ed in Past Simple.",
                grammar: "Past Simple (regular verbs)"
            },
            {
                text: "We ___ to the cinema last week.",
                choices: ["go", "goes", "went", "going"],
                correct: 2,
                explanation: "'Went' is the past form of 'go'. This is an irregular verb.",
                grammar: "Past Simple (irregular verbs)"
            },
            {
                text: "There ___ a party at school yesterday.",
                choices: ["was", "were", "am", "are"],
                correct: 0,
                explanation: "We use 'there was' with singular nouns in Past Simple.",
                grammar: "There was/Were"
            },
            {
                text: "My friends ___ at my house last weekend.",
                choices: ["was", "were", "am", "are"],
                correct: 1,
                explanation: "We use 'there were' with plural nouns in Past Simple.",
                grammar: "There was/Were"
            },
            {
                text: "He ___ his homework yesterday.",
                choices: ["finish", "finished", "finishing", "finishes"],
                correct: 1,
                explanation: "For regular verbs, add -ed in Past Simple: finish → finished.",
                grammar: "Past Simple (regular verbs)"
            },
            {
                text: "I ___ swimming in the lake.",
                choices: ["swim", "swims", "swam", "swimming"],
                correct: 2,
                explanation: "'Swam' is the past form of 'swim'. This is an irregular verb.",
                grammar: "Past Simple (irregular verbs)"
            },
            {
                text: "There ___ many people at the concert.",
                choices: ["was", "were", "am", "are"],
                correct: 1,
                explanation: "We use 'there were' with plural nouns in Past Simple.",
                grammar: "There was/Were"
            },
            {
                text: "We ___ a delicious cake for dessert.",
                choices: ["bake", "baked", "baking", "bakes"],
                correct: 1,
                explanation: "For regular verbs, add -ed in Past Simple: bake → baked.",
                grammar: "Past Simple (regular verbs)"
            },
            {
                text: "The children ___ to the zoo last month.",
                choices: ["go", "goes", "went", "going"],
                correct: 2,
                explanation: "'Went' is the past form of 'go'. This is an irregular verb.",
                grammar: "Past Simple (irregular verbs)"
            },
            {
                text: "There ___ some milk in the fridge.",
                choices: ["was", "were", "am", "are"],
                correct: 0,
                explanation: "We use 'there was' with uncountable nouns in Past Simple.",
                grammar: "There was/Were"
            },
            {
                text: "I ___ my bike to school yesterday.",
                choices: ["ride", "rides", "rode", "riding"],
                correct: 2,
                explanation: "'Rode' is the past form of 'ride'. This is an irregular verb.",
                grammar: "Past Simple (irregular verbs)"
            },
            {
                text: "She ___ her room last weekend.",
                choices: ["clean", "cleans", "cleaned", "cleaning"],
                correct: 2,
                explanation: "For regular verbs, add -ed in Past Simple: clean → cleaned.",
                grammar: "Past Simple (regular verbs)"
            },
            {
                text: "They ___ a lot of photos on holiday.",
                choices: ["take", "takes", "took", "taking"],
                correct: 2,
                explanation: "'Took' is the past form of 'take'. This is an irregular verb.",
                grammar: "Past Simple (irregular verbs)"
            }
        ]
    },
    reading: {
        name: "Reading for pleasure",
        questions: [
            {
                text: "The book is ___ interesting.",
                choices: ["very", "much", "many", "lot"],
                correct: 0,
                explanation: "We use 'very' with adjectives to show degree.",
                grammar: "Adjectives"
            },
            {
                text: "I like apples ___ I don't like oranges.",
                choices: ["and", "but", "because", "so"],
                correct: 1,
                explanation: "We use 'but' to connect contrasting ideas.",
                grammar: "Linkers"
            },
            {
                text: "She is ___ beautiful girl.",
                choices: ["a", "an", "the", "some"],
                correct: 1,
                explanation: "We use 'a' or 'an' with singular countable nouns. We use 'an' before vowel sounds.",
                grammar: "Articles"
            },
            {
                text: "He studies hard, ___ he gets good grades.",
                choices: ["and", "but", "because", "so"],
                correct: 3,
                explanation: "We use 'so' to show result or consequence.",
                grammar: "Linkers"
            },
            {
                text: "The movie was ___ exciting.",
                choices: ["very", "much", "many", "lot"],
                correct: 0,
                explanation: "We use 'very' with adjectives to show degree.",
                grammar: "Adjectives"
            },
            {
                text: "I bought bread ___ milk at the store.",
                choices: ["and", "but", "because", "so"],
                correct: 0,
                explanation: "We use 'and' to connect similar ideas or list items.",
                grammar: "Linkers"
            },
            {
                text: "It's ___ expensive car.",
                choices: ["a", "an", "the", "some"],
                correct: 1,
                explanation: "We use 'a' or 'an' with singular countable nouns. We use 'an' before vowel sounds.",
                grammar: "Articles"
            },
            {
                text: "I was tired, ___ I went to bed early.",
                choices: ["and", "but", "because", "so"],
                correct: 2,
                explanation: "We use 'because' to show reason or cause.",
                grammar: "Linkers"
            },
            {
                text: "The weather is ___ nice today.",
                choices: ["very", "much", "many", "lot"],
                correct: 0,
                explanation: "We use 'very' with adjectives to show degree.",
                grammar: "Adjectives"
            },
            {
                text: "She likes music ___ she plays the piano.",
                choices: ["and", "but", "because", "so"],
                correct: 0,
                explanation: "We use 'and' to connect similar ideas or list items.",
                grammar: "Linkers"
            },
            {
                text: "This is ___ best book I've ever read.",
                choices: ["a", "an", "the", "some"],
                correct: 2,
                explanation: "We use 'the' with superlatives (best, worst, tallest, etc.).",
                grammar: "Articles"
            },
            {
                text: "I wanted to go, ___ I was too busy.",
                choices: ["and", "but", "because", "so"],
                correct: 1,
                explanation: "We use 'but' to connect contrasting ideas.",
                grammar: "Linkers"
            },
            {
                text: "The cake tastes ___ delicious.",
                choices: ["very", "much", "many", "lot"],
                correct: 0,
                explanation: "We use 'very' with adjectives to show degree.",
                grammar: "Adjectives"
            },
            {
                text: "He studied hard ___ he passed the exam.",
                choices: ["and", "but", "because", "so"],
                correct: 3,
                explanation: "We use 'so' to show result or consequence.",
                grammar: "Linkers"
            },
            {
                text: "I saw ___ elephant at the zoo.",
                choices: ["a", "an", "the", "some"],
                correct: 1,
                explanation: "We use 'a' or 'an' with singular countable nouns. We use 'an' before vowel sounds.",
                grammar: "Articles"
            }
        ]
    },
    fantasy: {
        name: "Fantasy world!",
        questions: [
            {
                text: "I ___ always brush my teeth.",
                choices: ["never", "sometimes", "always", "rarely"],
                correct: 2,
                explanation: "We use 'always' to show 100% frequency.",
                grammar: "Adverbs of frequency"
            },
            {
                text: "We go to school ___ Monday.",
                choices: ["in", "on", "at", "by"],
                correct: 1,
                explanation: "We use 'on' with days of the week.",
                grammar: "Prepositions of time"
            },
            {
                text: "This cake is ___ than that one.",
                choices: ["good", "better", "best", "well"],
                correct: 1,
                explanation: "We use comparative adjectives to compare two things.",
                grammar: "Comparative adjectives"
            },
            {
                text: "She runs ___ fast.",
                choices: ["very", "quite", "extremely", "all"],
                correct: 0,
                explanation: "We use 'very' as an adverb of degree to modify adjectives or other adverbs.",
                grammar: "Adverbs of degree"
            },
            {
                text: "He speaks English ___.",
                choices: ["good", "well", "nice", "fine"],
                correct: 1,
                explanation: "We use 'well' as an adverb to describe how an action is performed.",
                grammar: "Adverbs of manner"
            },
            {
                text: "___ do you go to the gym?",
                choices: ["How often", "How much", "How many", "How long"],
                correct: 0,
                explanation: "We use 'How often' to ask about frequency.",
                grammar: "Questions with how"
            },
            {
                text: "She is ___ student in the class.",
                choices: ["good", "better", "best", "well"],
                correct: 2,
                explanation: "We use superlative adjectives to compare one thing with all others.",
                grammar: "Superlative adjectives"
            },
            {
                text: "I go to bed ___ night.",
                choices: ["in", "on", "at", "by"],
                correct: 0,
                explanation: "We use 'at' with specific times of day (night, noon, midnight).",
                grammar: "Prepositions of time"
            },
            {
                text: "He ___ usually arrives late.",
                choices: ["never", "sometimes", "usually", "always"],
                correct: 2,
                explanation: "We use 'usually' to show around 80% frequency.",
                grammar: "Adverbs of frequency"
            },
            {
                text: "We have lunch ___ noon.",
                choices: ["in", "on", "at", "by"],
                correct: 2,
                explanation: "We use 'at' with specific times (noon, midnight, night).",
                grammar: "Prepositions of time"
            },
            {
                text: "This book is ___ interesting than that one.",
                choices: ["more", "most", "much", "very"],
                correct: 0,
                explanation: "We use 'more' before adjectives with three or more syllables to make comparatives.",
                grammar: "Comparative adjectives"
            },
            {
                text: "She sings ___ beautifully.",
                choices: ["very", "quite", "extremely", "all"],
                correct: 2,
                explanation: "We use 'extremely' as an adverb of degree to emphasize the quality.",
                grammar: "Adverbs of degree"
            },
            {
                text: "He drives ___ carefully.",
                choices: ["very", "quite", "extremely", "all"],
                correct: 1,
                explanation: "We use 'quite' as an adverb of degree to show moderate intensity.",
                grammar: "Adverbs of degree"
            },
            {
                text: "They arrived ___ the morning.",
                choices: ["in", "on", "at", "by"],
                correct: 0,
                explanation: "We use 'in' with parts of the day (morning, afternoon, evening).",
                grammar: "Prepositions of time"
            },
            {
                text: "I ___ never eat meat.",
                choices: ["never", "sometimes", "usually", "always"],
                correct: 0,
                explanation: "We use 'never' to show 0% frequency.",
                grammar: "Adverbs of frequency"
            }
        ]
    },
    sports: {
        name: "Sports",
        questions: [
            {
                text: "I have ___ apples.",
                choices: ["a", "an", "some", "any"],
                correct: 2,
                explanation: "We use 'some' in positive sentences with plural countable nouns.",
                grammar: "Some/Any"
            },
            {
                text: "How ___ water do you need?",
                choices: ["much", "many", "lot", "few"],
                correct: 0,
                explanation: "We use 'how much' with uncountable nouns.",
                grammar: "(How) much/(How) many"
            },
            {
                text: "She likes ___ swimming.",
                choices: ["a", "an", "the", "-"],
                correct: 3,
                explanation: "After 'like', 'love', 'hate', etc., use the -ing form without articles.",
                grammar: "The -ing form"
            },
            {
                text: "I go to ___ school every day.",
                choices: ["a", "an", "the", "-"],
                correct: 3,
                explanation: "We use zero article with institutions like school, hospital, university when going for their main purpose.",
                grammar: "The - zero article"
            },
            {
                text: "I ___ swim very well.",
                choices: ["can", "must", "have to", "should"],
                correct: 0,
                explanation: "We use 'can' to express ability or skill.",
                grammar: "Can (ability)"
            },
            {
                text: "Do you have ___ brothers?",
                choices: ["a", "an", "some", "any"],
                correct: 3,
                explanation: "We use 'any' in questions with plural countable nouns.",
                grammar: "Some/Any"
            },
            {
                text: "How ___ books are there?",
                choices: ["much", "many", "lot", "few"],
                correct: 1,
                explanation: "We use 'how many' with plural countable nouns.",
                grammar: "(How) much/(How) many"
            },
            {
                text: "He enjoys ___ football.",
                choices: ["a", "an", "the", "-"],
                correct: 3,
                explanation: "After 'enjoy', use the -ing form without articles.",
                grammar: "The -ing form"
            },
            {
                text: "She is in ___ hospital.",
                choices: ["a", "an", "the", "-"],
                correct: 3,
                explanation: "We use zero article with institutions like school, hospital, university when going for their main purpose.",
                grammar: "The - zero article"
            },
            {
                text: "___ you speak French?",
                choices: ["Can", "Must", "Have to", "Should"],
                correct: 0,
                explanation: "We use 'can' to ask about ability or skill.",
                grammar: "Can (ability)"
            },
            {
                text: "We bought ___ new furniture.",
                choices: ["a", "an", "some", "any"],
                correct: 2,
                explanation: "We use 'some' in positive sentences with uncountable nouns.",
                grammar: "Some/Any"
            },
            {
                text: "I don't have ___ money.",
                choices: ["a", "an", "some", "any"],
                correct: 3,
                explanation: "We use 'any' in negative sentences with uncountable nouns.",
                grammar: "Some/Any"
            },
            {
                text: "They practice ___ tennis every weekend.",
                choices: ["a", "an", "the", "-"],
                correct: 3,
                explanation: "With sports names, use zero article.",
                grammar: "The -ing form"
            },
            {
                text: "He went to ___ bed early.",
                choices: ["a", "an", "the", "-"],
                correct: 3,
                explanation: "We use zero article with institutions like school, hospital, bed, home when going for their main purpose.",
                grammar: "The - zero article"
            },
            {
                text: "She ___ play the piano when she was young.",
                choices: ["can", "could", "is able to", "may"],
                correct: 1,
                explanation: "We use 'could' as the past form of 'can' to talk about past abilities.",
                grammar: "Can/Could"
            }
        ]
    },
    holidays: {
        name: "Holidays",
        questions: [
            {
                text: "I ___ watching TV now.",
                choices: ["am", "is", "are", "was"],
                correct: 0,
                explanation: "We use 'am' with I in Present Continuous.",
                grammar: "Present continuous"
            },
            {
                text: "She ___ to school. (habit) ___ to school now. (action)",
                choices: ["goes/is going", "is going/goes", "go/going", "going/goes"],
                correct: 0,
                explanation: "We use Present Simple for habits, Present Continuous for actions happening now.",
                grammar: "Present simple or present continuous"
            },
            {
                text: "We ___ leaving tomorrow.",
                choices: ["are", "is", "am", "were"],
                correct: 0,
                explanation: "We use Present Continuous with 'tomorrow' to talk about future arrangements.",
                grammar: "Present continuous (future meaning)"
            },
            {
                text: "___ beautiful day!",
                choices: ["What a", "What", "How", "How a"],
                correct: 0,
                explanation: "We use 'What a/an + adjective + noun!' for exclamations about things.",
                grammar: "Exclamations"
            },
            {
                text: "They ___ playing football at the moment.",
                choices: ["am", "is", "are", "was"],
                correct: 2,
                explanation: "We use 'are' with they, we, you in Present Continuous.",
                grammar: "Present continuous"
            },
            {
                text: "He ___ coffee every morning. (habit) ___ coffee now. (action)",
                choices: ["drinks/is drinking", "is drinking/drinks", "drink/drinking", "drinking/drinks"],
                correct: 0,
                explanation: "We use Present Simple for habits, Present Continuous for actions happening now.",
                grammar: "Present simple or present continuous"
            },
            {
                text: "I ___ meeting my friend later.",
                choices: ["am", "is", "are", "were"],
                correct: 0,
                explanation: "We use Present Continuous with 'later' to talk about future arrangements.",
                grammar: "Present continuous (future meaning)"
            },
            {
                text: "___ delicious cake!",
                choices: ["What a", "What", "How", "How a"],
                correct: 0,
                explanation: "We use 'What a/an + adjective + noun!' for exclamations about things.",
                grammar: "Exclamations"
            },
            {
                text: "The children ___ sleeping now.",
                choices: ["am", "is", "are", "was"],
                correct: 2,
                explanation: "We use 'are' with plural nouns (children) in Present Continuous.",
                grammar: "Present continuous"
            },
            {
                text: "We ___ to the beach in summer. (habit) ___ to the beach now. (action)",
                choices: ["go/are going", "are going/go", "going/go", "go/go"],
                correct: 0,
                explanation: "We use Present Simple for habits, Present Continuous for actions happening now.",
                grammar: "Present simple or present continuous"
            },
            {
                text: "She ___ starting her new job next week.",
                choices: ["am", "is", "are", "were"],
                correct: 1,
                explanation: "We use Present Continuous with 'next week' to talk about future arrangements.",
                grammar: "Present continuous (future meaning)"
            },
            {
                text: "___ amazing concert!",
                choices: ["What a", "What", "How", "How a"],
                correct: 0,
                explanation: "We use 'What a/an + adjective + noun!' for exclamations about things.",
                grammar: "Exclamations"
            },
            {
                text: "I ___ cooking dinner at the moment.",
                choices: ["am", "is", "are", "was"],
                correct: 0,
                explanation: "We use 'am' with I in Present Continuous.",
                grammar: "Present continuous"
            },
            {
                text: "They ___ football every Saturday. (habit) ___ football now. (action)",
                choices: ["play/are playing", "are playing/play", "playing/play", "play/play"],
                correct: 0,
                explanation: "We use Present Simple for habits, Present Continuous for actions happening now.",
                grammar: "Present simple or present continuous"
            },
            {
                text: "We ___ visiting our grandparents tomorrow.",
                choices: ["am", "is", "are", "were"],
                correct: 2,
                explanation: "We use Present Continuous with 'tomorrow' to talk about future arrangements.",
                grammar: "Present continuous (future meaning)"
            }
        ]
    }
};

// Глобальные переменные
let currentTopic = "";
let currentQuestion = 0;
let score = 0;
let totalQuestions = 15;
let userAnswers = [];
let selectedQuestions = [];
let testsCompleted = 0; // Счетчик пройденных тестов
let unlockedTopics = ["starter"]; // Список разблокированных тем
let dinoStage = 0; // Текущая стадия динозавра
let currentTheme = "light"; // Текущая тема
let topicProgress = {}; // Прогресс по темам

// Массив изображений динозавров
const dinoImages = [
    "image/dinokid.jpg",
    "image/dinokid2.jpg",
    "image/dinokid3.jpg",
    "image/dinokid4.jpg",
    "image/dinokid5.jpg",
    "image/dinomadkid.jpg",
    "image/dinonotkid.jpg",
    "image/dinonotkid2.jpg",
    "image/strongdino.jpg",
    "image/kingdino.jpg"
];

// Порядок тем для разблокировки
const topicOrder = [
    "starter", "home", "living", "values", "work", 
    "creativity", "reading", "fantasy", "sports", "holidays"
];

// DOM Elements
const welcomeScreen = document.getElementById('welcome');
const gameScreen = document.getElementById('game');
const statsScreen = document.getElementById('stats');
const reviewScreen = document.getElementById('review');
const topicButtons = document.querySelectorAll('.topic-btn');
const allTopicsBtn = document.getElementById('all-topics-btn');
const topicTitle = document.getElementById('topic-title');
const questionNumber = document.getElementById('question-number');
const totalQuestionsEl = document.getElementById('total-questions');
const questionText = document.getElementById('question-text');
const choicesContainer = document.getElementById('choices');
const resultBox = document.getElementById('result');
const nextBtn = document.getElementById('next');
const finishBtn = document.getElementById('finish');
const statsContent = document.getElementById('stats-content');
const reviewContent = document.getElementById('review-content');
const reviewWrongBtn = document.getElementById('review-wrong');
const backToTopicsBtn = document.getElementById('back-to-topics');
const backToStatsBtn = document.getElementById('back-to-stats');
const dinoImage = document.getElementById('dino-image');
const themeToggle = document.getElementById('theme-toggle');
const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');
const currentUserEl = document.getElementById('current-user');
const adminBtn = document.getElementById('admin-btn');

// Добавьте этот код в конец файла script.js перед закрывающей скобкой

// DOM Element for homework button
const homeworkBtn = document.getElementById('homework-btn');

// Event listener for homework button
homeworkBtn.addEventListener('click', () => {
    // Redirect to homework page
    window.location.href = 'homework.html';
});

// Загрузка прогресса из localStorage
function loadProgress() {
    const progress = localStorage.getItem('englishTestProgress');
    if (progress) {
        const data = JSON.parse(progress);
        testsCompleted = data.testsCompleted || 0;
        unlockedTopics = data.unlockedTopics || ["starter"];
        dinoStage = data.dinoStage || 0;
        currentTheme = data.currentTheme || "light";
        topicProgress = data.topicProgress || {};
        
        // Применяем тему
        document.body.setAttribute('data-theme', currentTheme);
        
        // Обновляем прогресс по темам
        updateTopicProgress();
        
        // Обновляем кнопки тем
        updateTopicButtons();
    }
}

// Сохранение прогресса в localStorage
function saveProgress() {
    const progress = {
        testsCompleted: testsCompleted,
        unlockedTopics: unlockedTopics,
        dinoStage: dinoStage,
        currentTheme: currentTheme,
        topicProgress: topicProgress
    };
    localStorage.setItem('englishTestProgress', JSON.stringify(progress));
}

// Auth helpers (Firebase)
function updateAuthUI(user) {
    if (user) {
        const displayName = user.displayName || user.email;
        currentUserEl.textContent = `Hi, ${displayName}`;
        if (loginBtn) loginBtn.style.display = 'none';
        if (logoutBtn) logoutBtn.style.display = '';
        if (adminBtn) adminBtn.style.display = (user.email === 'mysitebotenglishschool@gmail.com') ? '' : 'none';
    } else {
        currentUserEl.textContent = '';
        if (loginBtn) loginBtn.style.display = '';
        if (logoutBtn) logoutBtn.style.display = 'none';
        if (adminBtn) adminBtn.style.display = 'none';
    }
}

// Обновление индикаторов прогресса по темам
function updateTopicProgress() {
    // Обновляем индикаторы прогресса
    document.querySelectorAll('.topic-progress-fill').forEach(element => {
        const topic = element.dataset.topic;
        const progress = topicProgress[topic] || 0;
        element.style.width = `${progress}%`;
    });
    
    // Обновляем текстовые индикаторы
    document.querySelectorAll('.topic-progress-text').forEach(element => {
        const topic = element.dataset.topic;
        const progress = topicProgress[topic] || 0;
        element.textContent = `${progress}%`;
    });
}

// Переключение темы
function toggleTheme() {
    currentTheme = currentTheme === "light" ? "dark" : "light";
    document.body.setAttribute('data-theme', currentTheme);
    saveProgress();
}

// Navigation functions
function showScreen(screenName) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    // Show the required screen
    document.getElementById(screenName).classList.add('active');
}

// Обновление состояния кнопок тем
function updateTopicButtons() {
    topicButtons.forEach(button => {
        const topicKey = button.dataset.topic;
        if (unlockedTopics.includes(topicKey)) {
            button.disabled = false;
            button.classList.remove('locked');
            if (button.querySelector('.lock-icon')) {
                button.innerHTML = topics[topicKey].name;
            }
        } else {
            button.disabled = true;
            button.classList.add('locked');
            if (!button.querySelector('.lock-icon')) {
                button.innerHTML = `
                    <span class="lock-icon">🔒</span>
                    <span class="topic-text">${topics[topicKey].name}</span>
                `;
            }
        }
    });
    
    // Обновляем кнопку "All topics"
    allTopicsBtn.disabled = testsCompleted < topicOrder.length;
}

// Разблокировка следующей темы
function unlockNextTopic() {
    const currentIndex = topicOrder.indexOf(currentTopic);
    if (currentIndex >= 0 && currentIndex < topicOrder.length - 1) {
        const nextTopic = topicOrder[currentIndex + 1];
        if (!unlockedTopics.includes(nextTopic)) {
            unlockedTopics.push(nextTopic);
            updateTopicButtons();
            saveProgress();
        }
    }
}

// Start test on selected topic
function startTest(topicKey) {
    if (!unlockedTopics.includes(topicKey)) return;
    
    currentTopic = topicKey;
    currentQuestion = 0;
    score = 0;
    userAnswers = [];
    // Select 15 random questions from the topic
    const topicQuestions = [...topics[topicKey].questions];
    selectedQuestions = shuffleArray(topicQuestions).slice(0, 15);
    // Update interface
    topicTitle.textContent = topics[topicKey].name;
    totalQuestionsEl.textContent = selectedQuestions.length;
    showScreen('game');
    loadQuestion();
}

// Start test on all topics
function startAllTopicsTest() {
    if (testsCompleted < topicOrder.length) return;
    
    currentTopic = "all";
    currentQuestion = 0;
    score = 0;
    userAnswers = [];
    // Collect questions from all topics
    let allQuestions = [];
    Object.values(topics).forEach(topic => {
        allQuestions = allQuestions.concat(topic.questions);
    });
    // Select 15 random questions
    selectedQuestions = shuffleArray(allQuestions).slice(0, 15);
    // Update interface
    topicTitle.textContent = "All Topics";
    totalQuestionsEl.textContent = selectedQuestions.length;
    showScreen('game');
    loadQuestion();
}

// Load question
function loadQuestion() {
    const question = selectedQuestions[currentQuestion];
    // Update question number
    questionNumber.textContent = currentQuestion + 1;
    // Display question text
    questionText.textContent = question.text;
    // Clear choices container
    choicesContainer.innerHTML = '';
    resultBox.textContent = '';
    resultBox.className = 'result';
    nextBtn.hidden = true;
    // Create choice buttons
    question.choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.className = 'choice';
        button.textContent = choice;
        button.addEventListener('click', () => checkAnswer(index));
        choicesContainer.appendChild(button);
    });
}

// Check answer
function checkAnswer(selectedIndex) {
    const question = selectedQuestions[currentQuestion];
    const choices = choicesContainer.querySelectorAll('.choice');
    // Disable all buttons
    choices.forEach(choice => {
        choice.disabled = true;
    });
    // Save user answer
    userAnswers[currentQuestion] = {
        question: question.text,
        userAnswer: selectedIndex,
        correctAnswer: question.correct,
        choices: question.choices,
        explanation: question.explanation,
        grammar: question.grammar
    };
    // Check correctness
    if (selectedIndex === question.correct) {
        // Correct answer
        choices[selectedIndex].classList.add('correct');
        resultBox.textContent = 'Correct!';
        resultBox.classList.add('success');
        score++;
    } else {
        // Wrong answer
        choices[selectedIndex].classList.add('wrong');
        choices[question.correct].classList.add('correct');
        resultBox.textContent = 'Wrong!';
        resultBox.classList.add('fail');
    }
    // Show "Next" button
    nextBtn.hidden = false;
}

// Go to next question
function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < selectedQuestions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

// Show results
function showResults() {
    showScreen('stats');
    const percentage = Math.round((score / selectedQuestions.length) * 100);
    // Determine message
    let message = "";
    if (percentage >= 90) {
        message = "Excellent! You're an English expert! 🎉";
    } else if (percentage >= 70) {
        message = "Good! You know English well! 👍";
    } else if (percentage >= 50) {
        message = "Not bad! Keep practicing! 💪";
    } else {
        message = "Don't worry! Practice makes perfect! 📚";
    }
    
    // Обновляем прогресс по текущей теме
    topicProgress[currentTopic] = percentage;
    updateTopicProgress();
    saveProgress();
    
    // Если набрано 10 или больше правильных ответов, разблокируем следующую тему
    if (score >= 10) {
        testsCompleted++;
        unlockNextTopic();
        
        // Обновляем стадию динозавра
        dinoStage = Math.min(testsCompleted - 1, dinoImages.length - 1);
        saveProgress();
    }
    
    // Устанавливаем изображение динозавра
    dinoImage.src = dinoImages[dinoStage];
    dinoImage.alt = `Dinosaur stage ${dinoStage + 1}`;
    
    // Display results
    statsContent.innerHTML = `
        <div class="stats-summary">${message}</div>
        ${score >= 10 ? '<div class="success-message">🎉 Congratulations! You unlocked the next topic!</div>' : 
          '<div class="retry-message">You need at least 10 correct answers to unlock the next topic. Try again!</div>'}
        <div class="stats-grid">
            <div class="stat-box correct">
                <div class="stat-number">${score}</div>
                <div class="stat-label">Correct Answers</div>
            </div>
            <div class="stat-box wrong">
                <div class="stat-number">${selectedQuestions.length - score}</div>
                <div class="stat-label">Mistakes</div>
            </div>
            <div class="stat-box total">
                <div class="stat-number">${selectedQuestions.length}</div>
                <div class="stat-label">Total Questions</div>
            </div>
            <div class="stat-box percentage">
                <div class="stat-number">${percentage}%</div>
                <div class="stat-label">Result</div>
            </div>
        </div>
        <div class="progress-bar">
            <div class="progress-fill" style="width: ${percentage}%"></div>
        </div>
        <div class="percentage-text">${percentage}% completed</div>
    `;
    // Show review button if there are mistakes
    reviewWrongBtn.hidden = (selectedQuestions.length - score) === 0;
}

// Show review of mistakes
function showReview() {
    showScreen('review');
    // Filter only wrong answers
    const wrongAnswers = userAnswers.filter(answer => answer.userAnswer !== answer.correctAnswer);
    if (wrongAnswers.length === 0) {
        reviewContent.innerHTML = '<p>Congratulations! You have no mistakes!</p>';
        return;
    }
    let reviewHTML = '';
    wrongAnswers.forEach((answer, index) => {
        reviewHTML += `
            <div class="review-item">
                <div class="review-question">Question ${index + 1}: ${answer.question}</div>
                <div class="review-choices">
                    ${answer.choices.map((choice, choiceIndex) => {
                        let className = "review-choice";
                        if (choiceIndex === answer.correctAnswer) {
                            className += " correct";
                        } else if (choiceIndex === answer.userAnswer) {
                            className += " wrong";
                        }
                        return `<div class="${className}">${choice}</div>`;
                    }).join('')}
                </div>
                <div class="review-explanation">
                    <strong>✅ Correct answer:</strong> ${answer.choices[answer.correctAnswer]}
                </div>
                <div class="review-explanation">
                    <strong>Explanation:</strong> ${answer.explanation}
                </div>
                <div class="review-grammar">
                    <strong>Grammar rule:</strong> ${answer.grammar}
                </div>
            </div>
        `;
    });
    reviewContent.innerHTML = reviewHTML;
}

// Helper function to shuffle array
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Event listeners
topicButtons.forEach(button => {
    button.addEventListener('click', () => {
        const topicKey = button.dataset.topic;
        if (unlockedTopics.includes(topicKey)) {
            startTest(topicKey);
        }
    });
});

allTopicsBtn.addEventListener('click', startAllTopicsTest);
nextBtn.addEventListener('click', nextQuestion);
finishBtn.addEventListener('click', showResults);
reviewWrongBtn.addEventListener('click', showReview);
backToTopicsBtn.addEventListener('click', () => {
    showScreen('welcome');
    updateTopicButtons();
});
backToStatsBtn.addEventListener('click', () => showScreen('stats'));
themeToggle.addEventListener('click', toggleTheme);

// Auth events
if (loginBtn) {
    loginBtn.addEventListener('click', () => {
        window.location.href = 'register/index.html';
    });
}
if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
        if (window.firebase && firebase.auth) {
            firebase.auth().signOut().catch(() => {});
        }
    });
}

// Initialize
loadProgress();
updateTopicButtons();
if (window.firebase && firebase.auth) {
    firebase.auth().onAuthStateChanged(function(user) {
        updateAuthUI(user);
    });
} else {
    updateAuthUI(null);
}

// Show initial screen
showScreen('welcome');