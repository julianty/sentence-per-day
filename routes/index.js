const express = require("express");
const router = express.Router();
const axios = require("axios");

/* GET home page. */
router.get("/api/data", async function (req, res, next) {
  try {
    const response = await axios.get(
      "https://tatoeba.org/en/api_v0/search?from=jpn&has_audio=yes&native=&orphans=no&query=&sort=relevance&sort_reverse=&tags=&to=eng&trans_filter=limit&trans_has_audio=&trans_link=&trans_orphan=no&trans_to=eng&trans_unapproved=no&trans_user=&unapproved=no&user=&word_count_max=&word_count_min=1"
    );
    const apiData = response.data;
    const firstSentence = apiData.results[0];
    const translationsArr = firstSentence.translations[0].map(
      (translationObj) => translationObj.text
    );
    res.json({ sentence: firstSentence, translationsArr: translationsArr });
  } catch (error) {
    res.status(500).json({ error: "Error fetching API data" });
  }
});

// router.get("/api/data", async function (req, res, next) {
//   const data = {text: "Hello World"}
//   res.json(data)
// })

module.exports = router;
