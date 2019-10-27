var express = require('express');
var router = express.Router();

var beerService = require('../beer-service');

router.get('/beers', function(req, res, next) {
  beerService.get(req, res);
});

router.post('/beer', function(req, res, next) {
  beerService.create(req, res);
})

module.exports = router;
