var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require("fs");
var multer  = require('multer')


var index = require('./routes/index');
var users = require('./routes/users');
var uploadVideo = require('./routes/uploadVideo');
var showVideo = require('./routes/showVideo');
var updateVideo = require('./routes/updateVideo');
var deleteVideo = require('./routes/deleteVideo');
var indexVideo = require('./routes/indexVideo');
var searchVideo = require('./routes/searchVideo');
var indexByTopic = require('./routes/indexByTopic')

var app = express();

// Mongoose setup
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/solarleap_video_TEST')




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//console.log(path.join(__dirname, 'public'));


app.use('/', index);
app.use('/users', users);
app.use('/upload', uploadVideo);
app.use('/id', showVideo);
app.use('/update', updateVideo);
app.use('/delete', deleteVideo);
app.use('/all', indexVideo);
app.use('/search', searchVideo);
app.use('/topic', indexByTopic);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
