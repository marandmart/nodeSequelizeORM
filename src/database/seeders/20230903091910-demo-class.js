"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Classes",
      [
        {
          date_start: "2019-03-15",
          level_id: 1,
          teacher_id: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          date_start: "2020-05-10",
          level_id: 2,
          teacher_id: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          date_start: "2021-08-20",
          level_id: 3,
          teacher_id: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          date_start: "2019-11-25",
          level_id: 1,
          teacher_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          date_start: "2022-04-05",
          level_id: 2,
          teacher_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          date_start: "2020-10-15",
          level_id: 3,
          teacher_id: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          date_start: "2019-09-01",
          level_id: 1,
          teacher_id: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          date_start: "2022-01-08",
          level_id: 2,
          teacher_id: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          date_start: "2021-06-12",
          level_id: 3,
          teacher_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          date_start: "2018-12-03",
          level_id: 1,
          teacher_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          date_start: "2022-03-25",
          level_id: 2,
          teacher_id: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          date_start: "2019-05-30",
          level_id: 3,
          teacher_id: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          date_start: "2021-07-18",
          level_id: 1,
          teacher_id: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          date_start: "2018-08-12",
          level_id: 2,
          teacher_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          date_start: "2020-09-05",
          level_id: 3,
          teacher_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Classes", null, {});
  },
};
