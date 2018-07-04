var Controlador = require('./controlador');
var express = require ('express');
var router = express.Router();
var mainDir = "";


module.exports = {
    principal: function(app) {
        //Obtener todas las areas
        app.get('/api/partidos', Controlador.getPartidos);
        app.get('/api/paises', Controlador.getPaises);
        app.get('/api/noticias', Controlador.getNoticias);
          app.get('/api/noticias', Controlador.getNoticias);              
        // Crear una nueva area
        app.post('/api/partido',Controlador.setPartido);

        //A la aplicacion principal 
        app.get('*',function(req,res){
        res.sendFile( mainDir + 'c:/nodejs/mundiall/mundiall/angular/Editor.html'); 
        });

        //Modificar los datos de una area
        app.put('/api/partido/:partido_id',Controlador.updatePartido);

        //Borrar
        app.delete('/api/partido/:partido_id',Controlador.removePartido);

        app.post('/api/noticia',Controlador.setNoticia);
        app.put('/api/noticia/:noticia_id',Controlador.updateNoticia);
        app.delete('/api/noticia/:noticia_id',Controlador.removeNoticia);
    },
    iniciar: function (mdir){
        mainDir: mdir;
    }}
