
//INDEX, show all videos


var express = require('express');
var router = express.Router();


var Video = require('../models/video');

router.get('/', function(req, res, next) {
	Video.find({}, function( err, videos){

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
