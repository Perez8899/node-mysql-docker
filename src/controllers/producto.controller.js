const Producto = require("./../models/Producto.js");
const Usuario = require("./../models/Usuario.js");


async function listar(req, res){
    try{
        const productos = await Producto.findAll();
        return res.json(productos);
    }catch(error){
        return res.json(error);
    }
}

function guardar(req, res) {

}

function mostrar(req, res){

}

function modificar(req, res){

}
function eliminar(req, res){

}


module.exports = {
listar,
guardar,
mostrar,
modificar,
eliminar,
}