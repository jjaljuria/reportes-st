'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
  class Request extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Request.init({
    oficina: DataTypes.STRING,
    coordinacion: DataTypes.STRING,
    usuario: DataTypes.STRING,
    solicitado: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    departamento: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Request',
  });
  return Request;
};