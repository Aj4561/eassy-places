'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class State extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      State.belongsTo(models.Country, { foreignKey: 'country_id' });
      State.hasMany(models.City, { foreignKey: 'state_id' });
      // define association here
    }
  }
  State.init({
    name: DataTypes.STRING,
    code: DataTypes.STRING,
    country_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'State',
  });
  return State;
};