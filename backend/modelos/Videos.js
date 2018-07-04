 var mongoose = require('mongoose');

 var EsquemaVideo = mongoose.Schema({ 
     link: String, 
     titulo: String
     
}); 
module.exports = mongoose.model("Videos",EsquemaVideo,'Videos');
    