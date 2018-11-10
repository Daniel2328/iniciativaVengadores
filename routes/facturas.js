var express = require('express');
var router = express.Router();
var factura = require('../models/facturaModel')
var empresa_id = '12345';
var factura_id = '123abc';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('views/impresion/facturas', {
    title: 'Pacific Oil S. A.'
  });
});
router.get('/crear/empresa_id', function(req, res, next) {
  res.render('views/impresion/crear', {
    title: 'Pacific Oil S. A.'
  });
});


router.post('/crear/empresa_id', function(req, res, next) {
  var body = {};
  body.nombre = req.body.nombre;
  body.nit = req.body.nit;
  body.descripcion = req.body.descripcion;

  factura.create(body, function(err, dataFacturaCreated){
    if (err) {
      console.log("==== ERROR AL CREAR FACTURA =====");
      console.log(err);
      }
      console.log(" ==== dataFacturaCreated ====");
      console.log(dataFacturaCreated);
      res.redirect('views/impresion/facturas')
  })
})

router.get('/ver/factura_id', function(req, res, next) {
  factura.findById(req.params.factura_id, function(err, facturaData){
    var locals = {
      tituloh1: facturaData.titulo,
      title: 'factura -' + facturaData.titulo,
      factura: facturaData
    }
    res.render('views/impresion/ver', locals);
  })
})
module.exports = router;
