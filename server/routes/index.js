var express = require('express');
var router = express.Router();

router.get('/beers', function(req, res, next) {
  const beers = [
    {
      id : 0,
      name : 'Holsten Edel',
      untappd: 1654
    }
  ];

  res.json(beers);
});

module.exports = router;
