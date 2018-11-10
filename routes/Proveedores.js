var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('views/listas/Proveedores', {
    title: 'Pacific Oil S. A.',
    subtitle: 'Proveedores',
    proveedor: {
      nombre: 'MegaCombustible',
      ubicacion: 'Ciudad de Guatemala',
      tiempo: '10 años'
    }
  });
});

module.exports = router;
