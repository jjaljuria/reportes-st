'use strict';
import { fakerDE as faker } from '@faker-js/faker';

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {

  const requests = []
  for (let i = 0; i < 5; i++) {
    requests.push({
      oficina: faker.commerce.department,
      coordinacion: faker.commerce.department(),
      usuario: faker.person.fullName(),
      departamento: 'Soporte Técnico',
      descripcion: faker.lorem.paragraph()
    })
  }

  await queryInterface.bulkInsert('Requests', requests)
}
export async function down(queryInterface, Sequelize) {
  
  await queryInterface.bulkDelete('Requests', null, {});
}
