
import  { Sequelize } from 'sequelize';


// Creamos una nueva instancia de Sequelize y configuramos la conexión a la base de datos.
export const sequelize = new Sequelize('jugadores', 'postgres', 'holapepe', {
  host: 'localhost',
  dialect: 'postgres'
})

