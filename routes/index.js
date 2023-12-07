var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html');
});

router.post('/api/get/image', function(req, res, next) {
  res.json({
    status: 200,
    data: {
      image: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbbqkOf%2FbtsBfKBtEck%2FC8ipZDOV8uxQ5T9fWFikGK%2Fimg.png'
    }
  });
});

module.exports = router;
