var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;

async function pullData() {
    const url = 'mongodb+srv://christophertran:chrismey@tamuhack2020-sybs4.mongodb.net/test?retryWrites=true&w=majority';
    const client = await MongoClient.connect(url, { 
      useNewUrlParser: true, 
      useUnifiedTopology: true,
    });
    const db = client.db('establishmentData');
    const items = await db.collection('establishments').find({}).toArray();
    console.log(items);
    
    client.close();
    return items;
  }

/* GET profile. */
router.get('/', function(req, res, next) {
    res.render('profile', {title: 'UAccess - All Establishments', name: "PLACEHOLDER", type: "PLACEHOLDER", ramp: "PLACEHOLDER"});
});

router.post('/', function(req, res, next) {
    console.log("IT WORKED")
    var thisName = req.body.estName;
    profiles = pullData()
    
    res.render('profile', {title: 'UAccess - All Establishments', name: thisName, type: "PLACEHOLDER", ramp: "PLACEHOLDER"});
    res.end()
  })

module.exports = router;
