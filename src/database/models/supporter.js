'use strict';
import sequelize from './conexion.js'
import { DataTypes, Model } from 'sequelize'

class Supporter extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
}
Supporter.init({
  name: DataTypes.STRING
}, {
  sequelize,
  modelName: 'Supporter',
});

export default Supporter