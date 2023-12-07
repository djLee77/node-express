var express = require("express");
var router = express.Router();

/* GET home page. */

app.use('/img',express.static(path.join(__dirname, 'public/images')));

router.get("/", function (req, res, next) {
  res.render("index.html");
});

module.exports = router;
