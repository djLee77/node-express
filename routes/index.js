var express = require("express");
var router = express.Router();
var axios = require("axios");
var app = express();

// 사용자 정의 미들웨어를 추가합니다.
app.use("/images/book-logo.png", function (req, res, next) {
  var ip = req.headers["x-forwarded-for"] || req.ip || req.connection.remoteAddress;
  console.log("ip : ", ip); // 사용자의 IP 주소를 로그에 기록합니다.

  // 디스코드 웹훅 URL
  var webhookUrl = "https://discordapp.com/api/webhooks/1182355204079894649/a6eomI7ewgEpQsxfa73IWJC4y1NGJCOIjwvXX0qpVpTwuJSo8s8h0TXCGZZmXnPQRFdr";

  // 디스코드에 보낼 메시지
  var message = {
    content: "블로그 접속 감지: IP 주소 - " + ip,
  };

  // 디스코드 웹훅으로 메시지를 보냅니다.
  axios.post(webhookUrl, message)
    .then(() => console.log("메시지가 디스코드로 전송됨"))
    .catch((err) => console.error("디스코드로 메시지를 보내는 데 실패함:", err));

  next();
});

app.use(express.static('public'));

// 기존 라우터 설정
router.get("/", function (req, res, next) {
  res.render("index.html");
});

app.use('/', router);

module.exports = app;
