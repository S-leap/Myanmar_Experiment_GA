var mongoose = require('mongoose');

var videoSchema = new mongoose.Schema({
	title: String,
	author: String,
  description: String,
	topics: [],
  dataType: String,
	timeStamp: Date,
  path: String,
	uuid: String


});

var Video = mongoose.model('Video', videoSchema);

module.exports = Video;
