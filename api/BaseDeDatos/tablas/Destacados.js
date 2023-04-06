import  { DataTypes } from 'sequelize';
import {sequelize} from '../db.js';

// Definimos un modelo de datos llamado Jugador con las columnas nombre, apellido, edad y posicion.
export const Destacados = sequelize.define('destacados', {
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
    puntos:{
        type: DataTypes.DECIMAL,
        defaultValue: 1
      },
    asist:{
        type: DataTypes.DECIMAL,
        defaultValue: 1
      },
    val:{
      type: DataTypes.DECIMAL,
      defaultValue: 1
    },
    reb:{
      type: DataTypes.DECIMAL,
      defaultValue: 1
    },
    imagen:{
      type: DataTypes.JSONB,
      defaultValue:"https://thumbs.dreamstime.com/b/caricatura-de-acci%C3%B3n-jugador-baloncesto-vector-gr%C3%A1fico-dibujo-200156988.jpg"
    }
  }, {
    freezeTableName: true,
    timestamps: false
  })