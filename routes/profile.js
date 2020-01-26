var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;



/* GET profile. */
router.get('/', function(req, res, next) {
    res.render('profile', {title: 'UAccess - All Establishments', name: "PLACEHOLDER", type: "PLACEHOLDER", ramp: "PLACEHOLDER"});
});

router.post('/', function(req, res, next) {

    async function processData() {
        var thisName = req.body.estName;
        const url = 'mongodb+srv://christophertran:chrismey@tamuhack2020-sybs4.mongodb.net/test?retryWrites=true&w=majority';
        const client = await MongoClient.connect(url, { 
          useNewUrlParser: true, 
          useUnifiedTopology: true,
        });
        const db = client.db('establishmentData');
        const items = await db.collection('establishments').find({}).toArray();
        //console.log(items);
    
        //----------------------------------------------------------------------------
        
        var document = items[0];
        var good = false;
        for(var i of items) {
            if(i.name === thisName) {
                var document = i;
                var good = true;
                break;
            }
        }
    
        client.close();
        
        var databaseArray = [document.name, document.type, document.ramps];

        if(good === false) {
            var databaseArray = ["non", "non", "non"];
        }
        //----------------------------------------------------------------------------

        res.render('profile', {title: 'UAccess - All Establishments', 
                        name: databaseArray[0], 
                        type: databaseArray[1], 
                        ramp: databaseArray[2]});

        res.end()
    
      }
      
      processData();
    
  })

module.exports = router;
