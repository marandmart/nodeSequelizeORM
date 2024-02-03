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
          p_role: "student",
          cpf: "12312312312",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          p_name: "Marcos Cintra",
          is_active: true,
          email: "marcos@marcos.com",
          p_role: "student",
          cpf: "23423423423",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          p_name: "Felipe Cardoso",
          is_active: true,
          email: "felipe@felipe.com",
          p_role: "student",
          cpf: "34534534534",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          p_name: "Sandra Silva",
          is_active: false,
          email: "sandra@sandra.com",
          p_role: "student",
          cpf: "45645645645",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          p_name: "Paula Moraes",
          is_active: true,
          email: "paula@paula.com",
          p_role: "teacher",
          cpf: "56756756756",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          p_name: "Sergio Lopes",
          is_active: true,
          email: "sergio@sergio.com",
          p_role: "teacher",
          cpf: "67867867867",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          p_name: "Rafael Oliveira",
          is_active: false,
          email: "rafael@rafael.com",
          p_role: "student",
          cpf: "78978978978",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          p_name: "Juliana Costa",
          is_active: true,
          email: "juliana@juliana.com",
          p_role: "teacher",
          cpf: "89089089089",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          p_name: "Gabriel Santos",
          is_active: true,
          email: "gabriel@gabriel.com",
          p_role: "student",
          cpf: "90190190190",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          p_name: "Leticia Oliveira",
          is_active: true,
          email: "leticia@leticia.com",
          p_role: "teacher",
          cpf: "11211211211",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          p_name: "Lucas Silva",
          is_active: true,
          email: "lucas@lucas.com",
          p_role: "student",
          cpf: "22322322322",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          p_name: "Amanda Costa",
          is_active: false,
          email: "amanda@amanda.com",
          p_role: "teacher",
          cpf: "33433433433",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          p_name: "Carlos Mendes",
          is_active: true,
          email: "carlos@carlos.com",
          p_role: "student",
          cpf: "44544544544",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          p_name: "Camila Lima",
          is_active: true,
          email: "camila@camila.com",
          p_role: "student",
          cpf: "55655655655",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          p_name: "Fernando Alves",
          is_active: true,
          email: "fernando@fernando.com",
          p_role: "student",
          cpf: "66766766766",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          p_name: "Isabela Santos",
          is_active: true,
          email: "isabela@isabela.com",
          p_role: "student",
          cpf: "77877877877",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          p_name: "Gustavo Lima",
          is_active: false,
          email: "gustavo@gustavo.com",
          p_role: "student",
          cpf: "88988988988",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          p_name: "Renata Oliveira",
          is_active: true,
          email: "renata@renata.com",
          p_role: "student",
          cpf: "99099099099",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          p_name: "Leonardo Silva",
          is_active: true,
          email: "leonardo@leonardo.com",
          p_role: "student",
          cpf: "10110110110",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          p_name: "Vanessa Costa",
          is_active: true,
          email: "vanessa@vanessa.com",
          p_role: "student",
          cpf: "11211211211",
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
