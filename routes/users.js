var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* Post webhook. */
router.post('/webhook', function(req, res, next) {
  console.log('webhook posted');
});

module.exports = router;
