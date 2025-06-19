'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    // Get state IDs dynamically
    const states = await queryInterface.sequelize.query(
      `SELECT id, name FROM "States";`
    );

    const stateMap = {};
    states[0].forEach(s => stateMap[s.name] = s.id);

    await queryInterface.bulkInsert('Cities', [
      { name: 'Mumbai', state_id: stateMap['Maharashtra'], createdAt: new Date(), updatedAt: new Date() },
      { name: 'Los Angeles', state_id: stateMap['California'], createdAt: new Date(), updatedAt: new Date() },
      { name: 'Toronto', state_id: stateMap['Ontario'], createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cities', null, {});
  }
};
