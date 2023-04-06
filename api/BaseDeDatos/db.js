
import  { Sequelize } from 'sequelize';
import { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } from "../BaseDeDatos/confg.js"

// Creamos una nueva instancia de Sequelize y configuramos la conexión a la base de datos.
export const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,{
  host: DB_HOST,
  dialect: 'postgres'
})

