const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('bd_productos', 'root', 'root1', {
    host: 'base_datos_mysql',
    port: 3306,
    dialect: 'mysql'
});

async function funTestConexion(){
    try {
        await sequelize.authenticate();
        console.log('CONEXION CORRECTA CON BD!!!.');
      } catch (error) {
        console.error('ERROR DE CONEXION CON BD:', error);
      }
}

funTestConexion();

module.exports = sequelize;