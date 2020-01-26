var express = require('express');
var router = express.Router();


// --------------------------------------
// var mongoose = require('mongoose')
// mongoose.connect("mongodb://localhost/tamuhack2020");
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// var Schema = mongoose.Schema;
// var testSchema = new Schema({
//     "name": String
// });


// var testModel = mongoose.model('testEstablishments', testSchema);

// var model1 = new testModel({name: 'Ihop'});
// model1.save(function (err) {
//     if (err) return handleError(err);
//     // saved!
//   });



// ---------------------------------------

/* GET profileCreation. */
router.get('/', function(req, res, next) {
    res.render('profileCreation', { title: 'Profile Creation' });
});

module.exports = router;
