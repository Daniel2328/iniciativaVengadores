var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('views/listas/cuentaCorriente', {
    title: 'Pacific Oil S. A.',
    subtitle: 'Cuenta Corriente'
  });
});

module.exports = router;
