//READ, Get a video by ID 

var express = require('express');
var router = express.Router();


var Video = require('../models/video');

router.get('/:id', function (req, res) {

	var id = req.params.id;

	Video.findById(id,
		function(err, video){
			if(err) {
				console.log("error", err);
			}
			res.json(video);
		})
})

module.exports = router;
