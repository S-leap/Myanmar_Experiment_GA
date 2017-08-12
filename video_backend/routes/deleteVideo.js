// DELETE, Delete Video by ID

var express = require('express');
var router = express.Router();

var Video = require('../models/video');

router.delete('/:id', function(req, res, next) {
	var id = req.params.id;

    Video.findById(id).remove(function(err){
    	if(err){
			res.json({error: err});
		}

  		res.json({ok:"ok deleted"});
    });
});

module.exports = router;
