var express = require("express");
var router = express.Router();

/* GET home page. */
const app = express();

app.use(express.static('public'));

app.use('/public', function(req, res, next) {
  var ip = req.headers['x-forwarded-for'] || req.ip || req.connection.remoteAddress;
  console.log('IP 주소:', ip);
  next();
});

router.get("/", function (req, res, next) {
  res.render("index.html");
});

module.exports = router;
