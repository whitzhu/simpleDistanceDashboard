var express = require('express');
var router = require('express').Router();
var distance = require('google-distance');


var reqData;

router.get('/', function(req, res) {
  
})

router.post('/', function(req, res) {

  console.log(req.body);
  distance.get(
    {
      origin: req.body.origin,
      destination: req.body.destination,
      mode: req.body.mode,
      units:'imperial'
    },
    function(err, data) {
      if (err) return console.log(err);
      console.log('got post request, processing get, about to post');
      res.json(data);
  });
})


module.exports = router;