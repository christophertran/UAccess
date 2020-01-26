var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb+srv://christophertran:chrismey@tamuhack2020-sybs4.mongodb.net/test?retryWrites=true&w=majority';

async function pullData() {
  const client = await MongoClient.connect(url, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
  });
  const db = client.db('establishmentData');
  const items = await db.collection('establishments').find({}).toArray();
  console.log(items);
  client.close();
}

pullData();

var indexRouter = require('./routes/index');
var profileRouter = require('./routes/profile');
var profileCreationRouter = require('./routes/profileCreation');

var app = express();

mongoose.connect("mongodb://localhost/UAccess");
mongoose.model('establishments', {name: String});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/profile', profileRouter);
app.use('/profileCreation', profileCreationRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
