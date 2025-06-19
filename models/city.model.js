module.exports = (sequelize, DataTypes) => {
    return sequelize.define('City', {
      name: { type: DataTypes.STRING, allowNull: false },
      state_id: { type: DataTypes.INTEGER }
    });
  };
  