'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Enrollments', [{
      curr_status: "confirmed",
      s_id: 1,
      class_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      curr_status: "confirmed",
      s_id: 2,
      class_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      curr_status: "confirmed",
      s_id: 3,
      class_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      curr_status: "confirmed",
      s_id: 4,
      class_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      curr_status: "cancelled",
      s_id: 1,
      class_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      curr_status: "cancelled",
      s_id: 2,
      class_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      curr_status: "confirmed",
      s_id: 1,
      class_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Enrollments', null, {});
  }
};
