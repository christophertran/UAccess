var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'UAccess - Home' });
});

router.get('/genre/create', genre_controller.genre_create_get);

module.exports = router;
