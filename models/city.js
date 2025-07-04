'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      City.belongsTo(models.State, { foreignKey: 'state_id' });
      // define association here
    }
  }
  City.init({
    name: DataTypes.STRING,
    state_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'City',
  });
  return City;
};