 var mongoose = require('mongoose');

 var EsquemaNoticias = mongoose.Schema({ 
     titulo : String,
     cuerpo : String,
     fuente : String,
     imagen : String,
}); 
module.exports = mongoose.model('Noticias',EsquemaNoticias);
    