var express = require('express');
var router = require('express').Router();
var distance = require('google-distance');
var Googlekey = require('../../env/googlekey');
var googleMapsClient = require('@google/maps').createClient({
  key: Googlekey
});


var reqData;

router.get('/', function(req, res) {
/*  googleMapsClient.distanceMatrix({
    origins: ['San Francisco, CA', 'Seattle'],
    destinations: ['New York'],
    mode: 'driving'
  }, 
  function(err, data) {
    if (err) return console.log(err);
    console.log('got post request, processing get, about to post');
    res.end(JSON.stringify(data.json, null, 2));
  })*/
  
});

router.post('/', function(req, res) {

  googleMapsClient.distanceMatrix({
    origins: ['San Francisco, CA'],
    destinations: ['New York'],
    mode: 'driving'
  }, 
  function(err, data) {
    if (err) return console.log(err);
    console.log('got post request, processing get, about to post');
    res.json(data.json);
  })

  /*console.log(req.body);
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
  });*/
})


module.exports = router;