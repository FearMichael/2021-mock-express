const router = require("express").Router();
const path = require("path");

router.get("/", (req, res) => {
  res.sendFile(__dirname + "../public/index.html");
});

router.get("/high-scores", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/highscores.html"));
})