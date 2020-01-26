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

function processData(data) {
    var estn = "PLACEHOLDER";
    var estt = "PLACEHOLDER";
    var ram = "PLACEHOLDER"; 

    return estn, estt, ram;
}

router.post('/', function(req, res, next) {
    console.log("IT WORKED")
    var thisName = req.body.estName;
    profiles = pullData()
    // var establishmentName = "PLACEHOLDER";
    // var establishmentType = "PLACEHOLDER";
    // var hasRamps = "PLACEHOLDER";
    var establishmentName, establishmentType, hasRamps = processData(profiles);
    
    res.render('profile', {title: 'UAccess - All Establishments', 
                            name: establishmentName, 
                            type: establishmentType, 
                            ramp: hasRamps});
    res.end()
  })

module.exports = router;
