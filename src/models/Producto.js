const { DataTypes } = require("sequelize");
const sequelize = require("./conexion.js")

const Producto = sequelize.define(
  'Producto',
  {
    // Model attributes are defined here
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    precio: {
      type: DataTypes.DECIMAL(12, 2),
      allowNull: true
      // allowNull defaults to true
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    imagen: {
        type: DataTypes.TEXT,
        allowNull: true
    },
  },
  {
    // Other model options go here
  },
);

Producto.sync();

module.exports = Producto;

