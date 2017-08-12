
//IndexByTopics

var express = require('express');
var router = express.Router();

var Video = require('../models/video');


router.get('/:topics', function(req, res, next) {

  var topic = req.params.topics;

	Video.find( {topics: { $regex: topic } }, function(err, videos){
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


//mongo queries
//  db.getCollection('videos').createIndex( { topics: 1 } )
//  db.getCollection('videos').find( {topics: { $regex: "Engl"} } );;
// db.getCollection('videos').find({topics:/Fore/});
