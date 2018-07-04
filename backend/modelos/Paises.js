 var mongoose = require('mongoose');

 var EsquemaPaises = mongoose.Schema({ 
     nombre: String,
     grupo: String
}); 
module.exports = mongoose.model("Paises",EsquemaPaises,'Paises');
    