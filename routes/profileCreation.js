var express = require('express');
const bodyParser = require('body-parser')
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

router.use(bodyParser.urlencoded({extendeded: true}))

// Connection URL
const url = 'mongodb+srv://christophertran:chrismey@tamuhack2020-sybs4.mongodb.net/test?retryWrites=true&w=majority';

/* GET profileCreation. */
router.get('/', function(req, res) {
    res.render('profileCreation', { title: 'UA Access - Create Establishment' });
});

router.post('/', (req, res) => {
    var name = req.body.user.establishmentName;
    var wheelchair = req.body.wheelchair;
    async function postData() {
        const client = await MongoClient.connect(url, { 
          useNewUrlParser: true, 
          useUnifiedTopology: true,
        });
        const db = client.db('establishmentData');
        const items = await db.collection('establishments').insertOne({name: name, wheelchair: wheelchair});
        client.close();
    }
    postData();
    res.render('profileCreation', { title: 'UA Access - Create Establishment' });  
})

module.exports = router;
