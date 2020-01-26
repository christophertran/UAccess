var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

//mongoose.connect("mongodb://localhost/UAccess");
// mongoose.model('establishments', {name: String});



/* GET profile. */
router.get('/', function(req, res, next) {
<<<<<<< HEAD
    res.render('profile', { title: 'UAccess' , 
                            data: mongoose.model('establishments').find(function(err, establishments) {
                                  res.send(establishments);})
                                });
=======
    res.render('profile', { title: 'UAccess - All Establishments' });
>>>>>>> e5688ada7813c5ed8c0acfc6553280c7deeb6d75
});

module.exports = router;
