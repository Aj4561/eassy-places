'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    // Get country IDs dynamically
    const countries = await queryInterface.sequelize.query(
      `SELECT id, iso_code FROM "Countries";`
    );

    const countryMap = {};
    countries[0].forEach(c => countryMap[c.iso_code] = c.id);

    await queryInterface.bulkInsert('States', [
      { name: 'Maharashtra', code: 'MH', country_id: countryMap['IN'], createdAt: new Date(), updatedAt: new Date() },
      { name: 'California', code: 'CA', country_id: countryMap['US'], createdAt: new Date(), updatedAt: new Date() },
      { name: 'Ontario', code: 'ON', country_id: countryMap['CA'], createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('States', null, {});
  }
};
