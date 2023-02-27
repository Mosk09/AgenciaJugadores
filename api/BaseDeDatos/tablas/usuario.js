import  { DataTypes } from 'sequelize';
import {sequelize} from '../db.js';

// // Definimos un modelo de datos llamado Jugador con las columnas nombre, apellido, edad y posicion.
export const Usuario = sequelize.define('usuario', {
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
    contraseña: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    admin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    clubes: {
      type: DataTypes.STRING
    },
    favoritos:{
      type: DataTypes.ARRAY(DataTypes.INTEGER)
    },
  }, {
    freezeTableName: true,
    timestamps: false
  })