var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('views/listas/inventario', {
    title: 'Pacific Oil S. A.',
    subtitle: 'Inventario'
  });
});

module.exports = router;
