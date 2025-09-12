const Producto = require("./../models/Producto.js");
const Usuario = require("./../models/Usuario.js");

async function listar(req, res){
    try{
        const productos = await Producto.findAll();
        return res.json(productos);
    }catch(error){
        return res.status(500).json(error);
    }
}
async function guardar(req, res) {
    try {
        const {nombre, precio, stock, imagen} = req.body;
        const producto = await Producto.create({nombre, precio, stock, imagen});
        return res.status(201).json(producto);
    } catch (error) {
        return res.status(500).json({error: error});        
    }
}
async function mostrar(req, res) {
    const {id} = req.params;
    const producto = await Producto.findByPk(id);
    if(!producto){
        return res.status(404).json({error: 'Producto no encontrado'});
    } 
    return res.json(producto);
}
async function modificar(req, res) {
    const {id} = req.params;
    const {nombre, precio, stock, imagen} = req.body;

    const producto = await Producto.findByPk(id);
    if(!producto){
        return res.status(404).json({error: 'Producto no encontrado'});
    } 

    producto.nombre = nombre?? producto.nombre;
    producto.precio = precio?? producto.precio;
    producto.stock = stock?? producto.stock;
    producto.imagen = imagen?? producto.imagen;

    await producto.save();
    return res.json(producto)
}
async function eliminar(req, res) {
    const {id} = req.params;

    const producto = await Producto.findByPk(id);
    if(!producto){
        return res.status(404).json({error: 'Producto no encontrado'});
    } 
    await producto.destroy();
    return res.status(200).json({mensaje: 'Producto eliminado'})
}

module.exports = {
    listar,
    guardar,
    mostrar,
    modificar,
    eliminar
}