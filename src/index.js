// importando el framework express
require('dotenv').config()
var cors = require('cors')
const express = require("express");
const rutas = require("./router/index");

// iniciando app con express
const app = express();

// habilitando cors
app.use(cors());

// habilitando JSON req.body
app.use(express.json());

// renderizar archivos estaticos
app.use(express.static('public'))

// rutas
app.use("/api", rutas);

app.get("/saludo", function(req, res){
    return res.json({mensaje: "Hola Mundo este es mi app de Node con Docker Prueba"});
});

app.get("/saludo2", function(req, res){
    return res.json({mensaje: "Hola Mundo este es mi app de Node con Docker Prueba 2"});
});

app.get("/saludo3", function(req, res){
    return res.json({mensaje: "Hola Mundo este es mi app de Node con Docker Prueba 3"});
});


// levantar el servidor
app.listen(3000, function(){
    console.log("Servidor iniciado en http://127.0.0.1:3000");
});