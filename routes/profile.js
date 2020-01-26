var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

//mongoose.connect("mongodb://localhost/UAccess");
// mongoose.model('establishments', {name: String});



/* GET profile. */
router.get('/', function(req, res, next) {
    res.render('profile', { title: 'UAccess' , 
                            data: mongoose.model('establishments').find(function(err, establishments) {
                                  res.send(establishments);})
                                });
});

module.exports = router;
