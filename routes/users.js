var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
router.post('/login', function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  return res.send({data: {password: 123456}, code: 200});
});


module.exports = router;
