"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Enrollments",
      [
        {
          curr_status: "confirmed",
          s_id: 1,
          class_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          curr_status: "confirmed",
          s_id: 2,
          class_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          curr_status: "confirmed",
          s_id: 3,
          class_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          curr_status: "confirmed",
          s_id: 4,
          class_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          curr_status: "confirmed",
          s_id: 7,
          class_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          curr_status: "cancelled",
          s_id: 9,
          class_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          curr_status: "cancelled",
          s_id: 11,
          class_id: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          curr_status: "confirmed",
          s_id: 13,
          class_id: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          curr_status: "confirmed",
          s_id: 14,
          class_id: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          curr_status: "cancelled",
          s_id: 15,
          class_id: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          curr_status: "confirmed",
          s_id: 16,
          class_id: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          curr_status: "confirmed",
          s_id: 17,
          class_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          curr_status: "confirmed",
          s_id: 18,
          class_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          curr_status: "cancelled",
          s_id: 1,
          class_id: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          curr_status: "confirmed",
          s_id: 1,
          class_id: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Enrollments", null, {});
  },
};
