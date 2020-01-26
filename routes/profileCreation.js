var express = require('express');
var router = express.Router();

/* GET profileCreation. */
router.get('/', function(req, res, next) {
    res.render('profileCreation', { title: 'UA Access - Create Establishment' });
});

module.exports = router;
