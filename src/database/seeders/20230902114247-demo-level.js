'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Levels', [{
      description: "basic",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      description: "intermediate",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      description: "advanced",
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Levels', null, {});
  }
};
