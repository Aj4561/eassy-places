module.exports = (sequelize, DataTypes) => {
    return sequelize.define('State', {
      name: { type: DataTypes.STRING, allowNull: false },
      code: { type: DataTypes.STRING },
      country_id: { type: DataTypes.INTEGER }
    });
  };
  