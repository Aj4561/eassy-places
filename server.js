const app = require('./app');
const db = require('./models');

const PORT = process.env.PORT || 8080;

// Confirm DB connection before syncing
db.sequelize.authenticate()
  .then(() => {
    console.log('✅ Database connected successfully.');
    return db.sequelize.sync();
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Unable to connect to the database:', err.message);
  });
