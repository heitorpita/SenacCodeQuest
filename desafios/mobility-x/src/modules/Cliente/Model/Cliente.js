import { DataTypes } from 'sequelize';
import sequelize from '../../../db/config.js';

const Cliente = sequelize.define(
  'Cliente',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    usuario_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: true,
      validate: {
        isInt: {
          msg: 'O ID do usuário deve ser um número inteiro válido!'
        }
      }
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        len: {
          args: [2, 100],
          msg: 'O nome deve ter no mínimo 2 caracteres e no máximo 100 caracteres'
        },
        notEmpty: {
          msg: 'Nome inválido, está vazio'
        }
      }
    },
    document: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: 'Documento inválido, está vazio'
        },
        len: {
          args: [11, 20],
          msg: 'O documento deve ter entre 11 e 20 caracteres'
        }
      }
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true,
      validate: {
        isEmail: {
          msg: 'Email inválido'
        }
      }
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNull: true,
      validate: {
        len: {
          args: [10, 20],
          msg: 'O telefone deve ter entre 10 e 20 caracteres'
        },
        isNumeric: {
          msg: 'O telefone deve conter apenas números'
        }
      }
    },
  },
  {
    tableName: 'clients',
    createdAt: 'created_at',
    updatedAt: 'update_at',
  },
);

export default Cliente;