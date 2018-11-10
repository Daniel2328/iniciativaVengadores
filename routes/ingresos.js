var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('views/listas/ingresos', {
    title: 'Pacific Oil S. A.',
    subtitle: 'Ingresos'
  });
});

module.exports = router;
