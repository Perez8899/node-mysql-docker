const { DataTypes } = require("sequelize");
const sequelize = require("./conexion.js")

const Usuario = sequelize.define(
  'Usuario',
  {
    // Model attributes are defined here
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(200),
      allowNull: true
      // allowNull defaults to true
    },
    password: {
        type: DataTypes.STRING(200),
        allowNull: false
    }
  },
  {
    // Other model options go here
  },
);

Usuario.sync();

module.exports = Usuario;