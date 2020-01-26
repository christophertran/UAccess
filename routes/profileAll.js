var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;

/* GET profile. */
router.get('/', function(req, res, next) {
    res.render('profileAll', {title: 'UAccess - All Establishments', name: "PLACEHOLDER", type: "PLACEHOLDER", ramp: "PLACEHOLDER"});
});

module.exports = router;
