'use strict';
import sequelize from './conexion.js'
import { DataTypes } from 'sequelize'

const modelRequest = sequelize.define('Request', {
  oficina: DataTypes.STRING,
  coordinacion: DataTypes.STRING,
  usuario: DataTypes.STRING,
  solicitado: DataTypes.STRING,
  descripcion: DataTypes.STRING,
  departamento: DataTypes.STRING
},{

})

export default modelRequest;

