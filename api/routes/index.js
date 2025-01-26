var express = require('express');
var router = express.Router();
const config = require('../config');

const { configDotenv } = require('dotenv');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' , configDotenv });
});

module.exports = router;
