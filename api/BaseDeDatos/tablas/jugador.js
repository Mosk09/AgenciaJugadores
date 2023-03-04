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
      type: DataTypes.JSONB,
      defaultValue:"https://thumbs.dreamstime.com/b/caricatura-de-acci%C3%B3n-jugador-baloncesto-vector-gr%C3%A1fico-dibujo-200156988.jpg"
    }
  }, {
    freezeTableName: true,
    timestamps: false
  })