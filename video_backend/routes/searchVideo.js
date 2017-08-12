
//Search, search a video by words in description or title or author???


var express = require('express');
var router = express.Router();


var Video = require('../models/video');

// router.get('/', function(req, res, next) {
// 	Video.createIndex({}, function( err, video){
// 		if(err){
// 			res.json({error: err});
// 		}
//
//   		res.json(video);
// 	});
// });

router.get('/:input', function(req, res, next) {

  var input = req.params.input;

	Video.find({$text : { $search: input}}, function(err, videos){
		if(err){
			res.json({error: err});
		}
    // development
			videos.forEach( function(video, index){
				videos[index].path =video.path.replace('public/', 'http://localhost:5000/');
			});
		// end development
  		res.json(videos);

	});
});


module.exports = router;


// mongo queries: mongo indexes every field that contains string data for each document in the collection.
// .createIndex({"$**":"text"})
// .find({ $text : { $search: "religion" } })
