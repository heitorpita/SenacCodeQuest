import { DataTypes } from 'sequelize';
import sequelize from '../../../db/config.js';

const Veiculo = sequelize.define(
  'Veiculo',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    brand: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        len: {
          args: [2, 100],
          msg: 'A marca deve ter no mínimo 2 caracteres e no máximo 100 caracteres'
        },
        notEmpty: {
          msg: 'Marca inválida, está vazia'
        }
      }
    },
    model: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        len: {
          args: [1, 100],
          msg: 'O modelo deve ter no mínimo 1 caractere e no máximo 100 caracteres'
        },
        notEmpty: {
          msg: 'Modelo inválido, está vazio'
        }
      }
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: {
          msg: 'O ano deve ser um número inteiro'
        },
        min: {
          args: [1990],
          msg: 'O ano deve ser maior ou igual a 1990'
        },
        max: {
          args: [new Date().getFullYear() + 1],
          msg: `O ano não pode ser maior que ${new Date().getFullYear() + 1}`
        }
      }
    },
    price: {
      type: DataTypes.DECIMAL(12, 2),
      allowNull: false,
      validate: {
        isDecimal: {
          msg: 'O preço deve ser um valor numérico válido'
        },
        min: {
          args: [0.01],
          msg: 'O preço deve ser maior que zero'
        }
      }
    },
    status: {
      type: DataTypes.ENUM('disponivel', 'reservado', 'vendido'),
      allowNull: false,
      defaultValue: 'disponivel',
      validate: {
        isIn: {
          args: [['disponivel', 'reservado', 'vendido']],
          msg: 'Status inválido. Deve ser: disponivel, reservado ou vendido'
        }
      }
    },
  },
  {
    tableName: 'vehicles',
    createdAt: 'created_at',
    updatedAt: 'update_at',
  },
);

export default Veiculo;
