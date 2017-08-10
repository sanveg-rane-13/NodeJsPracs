var express = require('express');
var router = express.Router();

let creator = "Sanveg";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', dev: creator });
});

module.exports = router;
