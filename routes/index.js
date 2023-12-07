var express = require("express");
var router = express.Router();

/* GET home page. */

app.use(express.static('public'));

router.get("/", function (req, res, next) {
  res.render("index.html");
});

module.exports = router;
