//Inicializacion de modulos 
var express =require('express');
var app = express();
var bodyparser = require('body-parser');
const mongoose = require('mongoose');
var rutas = require('./backend/rutas.js');
const CONNECTION_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/Lab02'
mongoose.Promise = global.Promise;
mongoose.set('debug',true);
//Configuración
mongoose.connect(CONNECTION_URI,{
	useMongoClient: true
}).then(()=> {
	 console.log('conectado a mongodb')
}).catch(err=> console.log(err));
app.use(express.static( __dirname +'/angular'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

//Carga de rutas
rutas.iniciar( __dirname);
rutas.principal(app);

//Iniciar el servidor
const PORT=process.env.PORT || 3000;
app.listen(PORT, () => {
console.log('Escuchando en el puerto ${PORT}---');
});