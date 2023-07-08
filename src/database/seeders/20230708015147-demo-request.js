'use strict';
const {faker} = require('@faker-js/faker')



/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const request = []
    for (let i = 0; i < 5; i++) {
      request.push({
        oficina: faker.commerce.department(),
        coordinacion: faker.commerce.department(),
        usuario: faker.person.fullName(),
        solicitado: faker.person.fullName(),
        descripcion: faker.lorem.paragraph(),
        realizado: faker.person.fullName(),
        departamento: 'Soporte Tecnico',
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent()
      })
      
    }

    await queryInterface.bulkInsert('Requests', request, {})
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Requests', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
