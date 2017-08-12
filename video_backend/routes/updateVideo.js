// UPDATE, Update a video by ID


var express = require('express');
var router = express.Router();
// Generate a v1 UUID (time-based)
var uuidV1 = require('uuid/v1');


var Video = require('../models/video');


router.put('/:id', function(req, res, next) {

    var id = req.params.id;

    var title = req.body.title;
    var author = req.body.author;
    var description = req.body.description;
    var topics = req.body.topics;
    var blob = req.body.blob;
    var uuid = req.body.uuid;



    Video.findById(id, function( err, video){

    	if(title != undefined){
			video.title = title
    	}

    	if(author != undefined){
			video.author = author
    	}

      if(description != undefined){
      video.description = description
      }

      if(topics != undefined){
      video.topics = topics
      }

      if(blob != undefined){
      video.blob = blob
      }
      
      if(blob != undefined){
      video.uuid = uuid
      }

    	video.save(function(err, video){
			if(err){
				res.json({error: err});
			}

  			res.json(video);
    	})
	});
});

module.exports = router;
