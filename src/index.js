// importando el framework express
const express = require("express");

// iniciando app con express
const app = express();

// renderizar archivos estaticos
app.use(express.static('public'))

// rutas
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