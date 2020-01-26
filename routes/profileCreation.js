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
    var obj = req.body;
    console.log(obj);
    res.render('profileCreation', { title: 'UA Access - Create Establishment' });
    // async function putData() {
    //     const client = await MongoClient.connect(url, {
    //         useNewUrlParser: true,
    //         useUnifiedTopology: true,
    //     });
    // const db = client.db('establishmentData');
    // const items = await db.collection('establishments').find({}).toArray();
    // console.log(items);
    // client.close();
    // }
});

module.exports = router;
