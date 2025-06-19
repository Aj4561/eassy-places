module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Country', {
      name: { type: DataTypes.STRING, allowNull: false },
      iso_code: { type: DataTypes.STRING(2), allowNull: false, unique: true }
    });
  };

  