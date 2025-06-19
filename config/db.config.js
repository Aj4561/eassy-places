module.exports = {
    HOST: 'localhost',
    USER: 'postgres',
    PASSWORD: 'your_password',
    DB: 'country_db',
    dialect: 'postgres',
    pool: {
      max: 20,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
  