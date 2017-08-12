// CREATE, post a video
var express = require('express');
var router = express.Router();
var fs = require("fs");
var multer  = require('multer');

//Video Collection
var Video = require('../models/video');


// configuring Multer to use files directory for storing files
// this is important because later we'll need to access file path
const storage = multer.diskStorage({
  destination: './public/videos',
  filename(req, file, cb) {
    cb(null, `${new Date()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });


router.post('/',  upload.single('file'), function(req, res, next) {

  console.log(req.body);
  console.log(req.file);
  console.log(req.file.path);



  var vid = new Video();
    vid.title = req.body.title;
    vid.author = req.body.author;
    vid.description = req.body.description;
    vid.dataType = req.body.dataType;
    vid.topics = req.body.subject;
    vid.path = req.file.path;

    vid.save(function(err, video){
      if(err){
        res.json({error:err});
      }
      res.json(vid);
    })


});

module.exports = router;
