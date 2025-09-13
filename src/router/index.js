const express = require("express");
const productoController = require("./../controllers/producto.controller")

const Route = express.Router();

Route.get("/producto",productoController.listar);
Route.post("/producto",productoController.guardar);
Route.get("/producto/:id",productoController.mostrar);
Route.put("/producto/:id",productoController.modificar);
Route.delete("/producto/:id",productoController.eliminar);

module.exports = Route;