var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('views/impresion/facturas', {
    title: 'Pacific Oil S. A.'
  });
});

module.exports = router;
