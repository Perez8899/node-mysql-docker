const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.BD_NAME || 'bd_productos', process.env.BD_USER || 'root', process.env.BD_PASS || ''/*'root1'*/, {
    host: process.env.BD_HOST || 'base_datos_mysql',
    port: process.env.BD_PORT || 3306,
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