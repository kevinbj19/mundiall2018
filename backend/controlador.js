var Partido= require('./modelos/Partido');
var Paises= require('./modelos/Paises');
var Noticias= require('./modelos/Noticia');
//Obtiene todas las PArtidos
exports.getPartidos = function(req, res){
    Partido.find({}, function(err,partidos){
        if(err)
            res.send(err);
        res.json(partidos);
    })
}

exports.getPaises = function(req, res){
    Paises.find({}, function(err,paises){
        if(err)
            res.send(err);
        res.json(paises);
    })
}

exports.setPartido = function(req,res){
    Partido.create({ fecha : req.body.fecha_i,     
                  equipo_l : req.body.equipo_l_i,
                  equipo_v : req.body.equipo_v_i,
                  estadio : req.body.estadio_i, 
                  hora : req.body.hora_i
              }, function(err,partido){
        //coma
        if (err)
            res.send(err);

        Partido.find(function(err,partido){
            if(err)
                res.send(err);
            res.json(partido);
        });
    });
}

exports.updatePartido = function(req,res){
    Partido.update({_id: req.params.partido_id},
     {$set: {fecha : req.body.fecha,
        equipo_l : req.body.equipo_l,
        equipo_v : req.body.equipo_v,
        estadio : req.body.estadio, 
        hora: req.body.hora,
    }},function(err,partido){
    if(err)
        res.send(err);

    Partido.find(function(err,partido){
        if(err)
            res.send(err);
        res.json(partido);
    });
             });
}

exports.removePartido = function(req, res){
    Partido.remove({_id: req.params.partido_id}, function(err,partido){
        if(err)
            res.send(err);

        Partido.find( function(err,partidos){
            if(err)
                res.send(err);
            res.json(partidos);
        });
    });
}

////////////////////////////////
// MOSTRAR PAISES -  COMBOBOX //
////////////////////////////////

exports.getPaises= function(req, res){
    Paises.find({}, function(err,paises){
        if(err)
            res.send(err);
        res.json(paises);
    })
}
//////////////////////////////////






//                            //
// CONTROLADOR DE NOTICIAS    //
//                            //

exports.getNoticias = function(req, res){
    Noticias.find({}, function(err,noticias){
        if(err)
            res.send(err);
        res.json(noticias);
    })
}

exports.setNoticia = function(req,res){
    Noticias.create({ 
                  titulo : req.body.titulo_i,     
                  cuerpo : req.body.cuerpo_i,
                  fuente : req.body.fuente_i,
                  imagen : req.body.imagen_i,
              }, function(err,noticia){
        //coma
        if (err)
            res.send(err);

        Noticias.find(function(err,noticia){
            if(err)
                res.send(err);
            res.json(noticia);
        });
    });
}

exports.updateNoticia = function(req,res){
    Noticias.update({_id: req.params.noticia_id},
     {$set: {
                  titulo : req.body.titulo,     
                  cuerpo : req.body.cuerpo,
                  fuente : req.body.fuente,
                  imagen : req.body.imagen,
    }},function(err,noticia){
    if(err)
        res.send(err);

    Noticias.find(function(err,noticia){
        if(err)
            res.send(err);
        res.json(noticia);
    });
             });
}

exports.removeNoticia = function(req, res){
    Noticias.remove({_id: req.params.noticia_id}, function(err,noticia){
        if(err)
            res.send(err);

        Noticia.find( function(err,noticias){
            if(err)
                res.send(err);
            res.json(noticias);
        });
    });
}
