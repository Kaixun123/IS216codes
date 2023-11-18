/*
    
Name:   
Email:  

*/

// DO NOT MODIFY THIS CONST
const numeric_to_day = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
}

// DO NOT MODIFY THIS CONST
const sentiment_dictionary = {
    positives: [
        "happy", "lucky", "jolly", "wonderful", "fantastic", "terrific",
        "cheerful", "lovely", "loving", "beautiful", "blessed", "bless",
        "bliss", "blissful", "brilliant", "bubbly", "cool", "cheery",
        "charming", "delight", "delightful", "energetic", "enthusiastic",
        "electrifying", "encourage", "encouraging", "excellent", "good",
        "fabulous", "fine", "fun", "gorgeous", "healing", "harmonious",
        "jovial", "joy", "joyful", "lively", "marvelous", "nice",
        "pleasant", "pleasure", "popular", "pretty", "positive", 
        "rejoice", "rejoicing", "sparkling", "smile", "laugh",
        "superb", "successful", "vibrant", "well", "worthy"
    ],

    negatives: [
        "alarming", "angry", "awful", "appalling", "atrocious", "anxious",
        "bad", "boring", "cruel", "confused", "creepy", "cry", "criminal",
        "dead", "deprived", "dirty", "dreadful", "dread", "dreading",
        "damage", "damaging", "distress", "depressed", "detrimental",
        "evil", "faulty", "fault", "fail", "failure", "frightening",
        "fear", "fearful", "filthy", "gross", "guilty", "gruesome",
        "harmful", "hostile", "horrible", "hate", "horrendous", "hurt",
        "hideous", "hurtful", "impossible", "insane", "lousy", "malicious",
        "messy", "monstrous", "negative", "nasty", "naughty", "oppressive",
        "offensive", "pain", "pessimistic", "poisonous", "rude",
        "ruthless", "sad", "smelly", "sickening", "stupid", "savage",
        "stressful", "substandard", "scary", "sick", "stinky", "terrible",
        "terrifying", "threatening", "ugly", "unhappy", "unjust",
        "unwanted", "unlucky", "unwelcome", "unwise", "unfair", "unhealthy",
        "unpleasant", "upset", "violent", "worthless"
    ]
}

// DO NOT MODIFY THIS CONST
const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

// DO NOT MODIFY THIS CONST
const image_sources = {
    positive: "images/positive.jpg",
    neutral: "images/neutral.jpg",
    negative: "images/negative.jpg"
}


const app = Vue.createApp( {

    //=========== DATA PROPERTIES ===========
    data() {
        return {

            // DO NOT MODIFY THIS BY MANUALLY EDITING IN THIS FILE
            journal_entry: "I am so,  angry and sad.... and upset and depressed  #)(*#@)( !! i feel terrible. but mala made me happy today. good food always makes me feel fine.",

            // YOU CAN USE THIS AS A POSITIVE TEST CASE
            // journal_entry: "i feel so FINE and happy. today is a terrific fabulous day !!!!",

            // YOU CAN USE THIS AS A POSITIVE TEST CASE
            // journal_entry: "la la la ma la la hungry what to eat?",

            // DO NOT MODIFY THIS BY MANUALLY EDITING IN THIS FILE
            sentiment_word_counts: {
               positives: 0,
               negatives: 0
            },

            // DO NOT MODIFY THIS BY MANUALLY EDITING IN THIS FILE
            img_src: image_sources.neutral

        }
    },

    //=========== COMPUTED PROPERTIES ===========
    computed: {
        greeting() {
            
            // YOUR CODE GOES HERE

        }
    },

    //=========== METHODS ===========
    methods: {

        process_entry() {
            
            // YOUR CODE GOES HERE
            
        }

    }
})




// DO NOT MODIFY THIS
// ASSOCIATING the current Vue app to an HTML element with id='app'
app.mount('#app')