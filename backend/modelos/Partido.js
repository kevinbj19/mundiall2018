 var mongoose = require('mongoose');

 var EsquemaPartido = mongoose.Schema({ 
     fecha: String, 
     equipo_l : String,
     equipo_v : String,
     estadio : String,
     hora:String
}); 
module.exports = mongoose.model("Partidos",EsquemaPartido,'Partidos');
    