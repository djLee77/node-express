var express = require("express");
var router = express.Router();
var axios = require("axios");
var app = express();
var requestIp = require("request-ip");

app.use("/public/images/*", function (req, res, next) {
  let ip = requestIp.getClientIp(req);
  console.log("ip", ip); // ip address of the user
  // 디스코드 웹훅 URL
  var webhookUrl =
    "https://discordapp.com/api/webhooks/1182355204079894649/a6eomI7ewgEpQsxfa73IWJC4y1NGJCOIjwvXX0qpVpTwuJSo8s8h0TXCGZZmXnPQRFdr";

  // 디스코드에 보낼 메시지
  var message = {
    content: "블로그 접속 감지: IP 주소 - " + ip,
  };

  // 디스코드 웹훅으로 메시지 보내기
  axios
    .post(webhookUrl, message)
    .then(() => console.log("메시지가 디스코드로 전송됨"))
    .catch((err) =>
      console.error("디스코드로 메시지를 보내는 데 실패함:", err)
    );

  next();
});

app.use(express.static("public"));

module.exports = router;
