var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/new', function(req, res, next) {
  res.send({param: req.query.someParam });

  console.log(req.query.someParam );
});

module.exports = router;
