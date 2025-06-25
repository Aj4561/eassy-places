module.exports = {
    HOST: 'localhost',
    USER: 'postgres',
    PASSWORD: '123456',
    DB: 'easy-places',
    dialect: 'postgres',
    pool: {
      max: 20,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
  