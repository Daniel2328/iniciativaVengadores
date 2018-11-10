var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('views/listas/saldos', {
    title: 'Pacific Oil S. A.'
  });
});

module.exports = router;
