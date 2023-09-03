'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Enrollments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      curr_status: {
        type: Sequelize.STRING
      },
      s_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'People',
          references: 'id'
        },
        onUpdate: 'CASCADE'
      },
      class_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Classes',
          references: 'id'
        },

        onUpdate: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Enrollments');
  }
};