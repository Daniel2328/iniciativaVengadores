const mongoose = require('mongoose');
const Schema = mongoose.Schema

const facturaModelSchema = new Schema ({
  nombre: {
    type: String,
    required: true
  },
  nit: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  }
},{ strict: false})

const facturaModel = mongoose.model('factura', facturaModelSchema);

module.exports = facturaModel;
