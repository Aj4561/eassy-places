const dbConfig = require('../config/db.config.js');
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: dbConfig.pool
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Country = require('./country.model.js')(sequelize, DataTypes);
db.State = require('./state.model.js')(sequelize, DataTypes);
db.City = require('./city.model.js')(sequelize, DataTypes);

// Associations
db.Country.hasMany(db.State, { foreignKey: 'country_id' });
db.State.belongsTo(db.Country);

db.State.hasMany(db.City, { foreignKey: 'state_id' });
db.City.belongsTo(db.State);

module.exports = db;
