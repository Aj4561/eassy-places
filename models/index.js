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

// Call association hooks
Object.values(db).forEach(model => {
  if (model.associate) model.associate(db);
});

module.exports = db;
