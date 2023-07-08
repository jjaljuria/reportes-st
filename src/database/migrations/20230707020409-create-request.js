'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Requests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      oficina: {
        type: Sequelize.STRING
      },
      coordinacion: {
        type: Sequelize.STRING
      },
      usuario: {
        type: Sequelize.STRING
      },
      solicitado: {
        type: Sequelize.STRING
      },
      descripcion: {
        type: Sequelize.STRING
      },
      departamento: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Requests');
  }
};