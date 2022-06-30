//Word lists
const adjectives = ['flamboyant', 'cool', 'kooky', 'gregarious', 'gargantuan', 'omnipotent', 'energetic', 'tired', 'introverted', 'intelligent'];
const nouns = ['developer', 'jester', 'racoon', 'doctor', 'retail worker', 'singer', 'dancer', 'gorilla', 'scientist', 'protagonist'];
const adverbs = ['lazily', 'simply', 'happily', 'sadly', 'viciously', 'surprisingly', 'thoroughly', 'gracefully', 'poorly', 'quietly'];
const verbs = ['coding', 'sleeping', 'hunting', 'flying', 'knitting', 'cooking', 'running', 'bathing', 'eating', 'talking'];

//Word selector
const getRandom = arr => 
    arr[Math.floor(Math.random() * arr.length)];

const sentenceAdj = getRandom(adjectives);
const sentenceNoun = getRandom(nouns);
const sentenceAdv = getRandom(adverbs);
const sentenceVerb = getRandom(verbs);

//Sentence generator
const sentenceGen = () => {
    console.log(`The ${sentenceAdj} ${sentenceNoun} is ${sentenceAdv} ${sentenceVerb
        }.`);
};

sentenceGen();
