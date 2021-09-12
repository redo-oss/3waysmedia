const express = require("express");
const router = express.Router();

/* ------ > Routes <----------*/
const newsLetter = require("./newsLetterR");
router.get("/", (req, res) => {
  res.sendFile("index.html", { root: "3waysmedia" });
});

router.use("/newsletter", newsLetter);
module.exports = router;
