"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // insert a group of people onto the database
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "People",
      [
        {
          p_name: "Ana Souza",
          is_active: true,
          email: "ana@ana.com",
          p_role: "estudante",
          cpf: "12312312312",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          p_name: "Marcos Cintra",
          is_active: true,
          email: "marcos@marcos.com",
          p_role: "estudante",
          cpf: "23423423423",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          p_name: "Felipe Cardoso",
          is_active: true,
          email: "felipe@felipe.com",
          p_role: "estudante",
          cpf: "34534534534",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          p_name: "Sandra Silva",
          is_active: false,
          email: "sandra@sandra.com",
          p_role: "estudante",
          cpf: "45645645645",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          p_name: "Paula Moraes",
          is_active: true,
          email: "paula@paula.com",
          p_role: "docente",
          cpf: "56756756756",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          p_name: "Sergio Lopes",
          is_active: true,
          email: "sergio@sergio.com",
          p_role: "docente",
          cpf: "67867867867",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("People", null, {});
  },
};
