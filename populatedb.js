const mongoose = require("mongoose");
const async = require("async");
const axios = require("axios");
const Sentence = require("./Models/Sentence");
const Answer = require("./Models/Answer");

// Connect to mongoDB
const uri =
  "mongodb+srv://julianty:Wannamakeadb@sentence-per-day.vf9xibg.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "SentencePerDay",
});
// Configure the connection
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error: "));

// Write functions to create and save sentence models
async function saveSentences(data, cb) {
  data.forEach((sentence) => {
    const newSentence = new Sentence({
      tatoeba_id: sentence.id,
      text: sentence.text,
      lang: sentence.lang,
      translations: [],
    });
    newSentence.translations = sentence.translations.map((translation) => {
      // sentence.translations is an Arr of Arr
      // translation is an Arr of Arr
      const sampleTranslation = translation[0];
      const newAnswer = new Answer({
        sentence_id: sentence.id,
        text: sampleTranslation.text,
        // user_id: "tatoeba",
        lang: sampleTranslation.lang,
      });
      newAnswer.save();
      // console.log(newAnswer);
      // console.log(translation[0]);
      return newAnswer;
    });
    // console.log(newSentence);
    // console.log(sentence.translations.map((obj) => obj));
    // sentence.translations.forEach((Arr) => console.log(Arr));
    newSentence.save();
  });
  cb();
}

async function run() {
  try {
    // Send GET request to retrieve the sentences from Tatoeba.org
    let data;
    axios
      .get(
        "https://tatoeba.org/en/api_v0/search?from=jpn&has_audio=yes&native=&orphans=no&query=&sort=relevance&sort_reverse=&tags=&to=eng&trans_filter=limit&trans_has_audio=&trans_link=&trans_orphan=no&trans_to=eng&trans_unapproved=no&trans_user=&unapproved=no&user=&word_count_max=&word_count_min=1"
      )
      .then((response) => {
        data = [response.data.results[0]];
        // saveSentences(data);
        // async.series([(cb) => saveSentences(data, cb)], () => {
        //   console.log("done");
        //   mongoose.connection.close();
        // });
      });
    await saveSentences(data);
  } catch {
  } finally {
    mongoose.connection.close();
  }
}
run();
