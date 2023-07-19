'use strict';
import sequelize from './conexion.js'
import { DataTypes } from 'sequelize'
import Supporter from './supporter.js';

const modelRequest = sequelize.define('Request', {
  oficina: DataTypes.STRING,
  coordinacion: DataTypes.STRING,
  usuario: DataTypes.STRING,
  solicitado: DataTypes.STRING,
  descripcion: DataTypes.STRING,
  departamento: DataTypes.STRING,
  realizado: DataTypes.INTEGER,
  atendido: DataTypes.BOOLEAN
},{

})
modelRequest.User = Supporter.belongsTo(modelRequest)

export default modelRequest;

