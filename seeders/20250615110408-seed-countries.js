'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Countries', [
      { name: 'India', iso_code: 'IN', createdAt: new Date(), updatedAt: new Date() },
      { name: 'USA', iso_code: 'US', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Canada', iso_code: 'CA', createdAt: new Date(), updatedAt: new Date() }
    ]);
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Countries', null, {});
  }
};
