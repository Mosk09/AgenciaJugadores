import  { DataTypes } from 'sequelize';
import {sequelize} from '../db.js';

// Definimos un modelo de datos llamado Jugador con las columnas nombre, apellido, edad y posicion.
export const Jugador = sequelize.define('jugador', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey:true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    clubes: {
      type: DataTypes.STRING
    },
    nacimiento:{
      type: DataTypes.DATEONLY
  
    },
    altura:{
      type: DataTypes.DECIMAL,
      defaultValue: 1.70
    },
    posicion:{
      type: DataTypes.STRING
    },
    rating:{
      type: DataTypes.ARRAY(DataTypes.INTEGER)
    },
    comentarios:{
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    libre:{
      type: DataTypes.BOOLEAN,
      defaultValue:true,
    },
    imagen:{
      type: DataTypes.STRING,
      defaultValue:"https://media.istockphoto.com/id/514027839/es/foto/hombre-africano-salto-tirando-silueta-jugador-de-baloncesto.jpg?s=612x612&w=0&k=20&c=3hgaKH8DXO9d7WxJ9IvLogZrHJhhT0BzsdgLjKW8uqA="
    }
  }, {
    freezeTableName: true,
    timestamps: false
  })