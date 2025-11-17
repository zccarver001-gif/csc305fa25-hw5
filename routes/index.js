var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: true}));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { formData: null});
});

/*Post home page. */
router.post('/', function(req, res, next) {
  res.render('index', { formData: req.body});
});

module.exports = router;
