'use strict';

const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {

    const senha_hash = await bcrypt.hash('123456', 10)

    await queryInterface.bulkInsert('usuario', [{
      id: require('crypto').randomUUID(),
      nome: 'Administrador',
      matricula: '00001',
      telefone: '11999999999',
      senha: senha_hash,
      email: 'admin@exemplo.com',
      perfil: 'admin',
      criado_em: new Date(),
      atualizado_em: new Date()
    }])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuario', {
      email: 'admin@exemplo.com',
    })
  }
};
