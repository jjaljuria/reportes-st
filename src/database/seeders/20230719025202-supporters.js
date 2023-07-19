'use strict';
const {faker} = require('@faker-js/faker')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

  await queryInterface.bulkInsert('Supporters', [{
    name: 'Jose Aljuria',
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent()
  }], {});
  
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Supporters', null, {});
    
  }
};
