import { DataTypes } from 'sequelize';
import sequelize from '../../../db/config.js';

const Venda = sequelize.define(
  'Venda',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    vehicle_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: {
          msg: 'O ID do veículo deve ser um número inteiro válido!'
        },
        notNull: {
          msg: 'O veículo é obrigatório'
        }
      }
    },
    client_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: {
          msg: 'O ID do cliente deve ser um número inteiro válido!'
        },
        notNull: {
          msg: 'O cliente é obrigatório'
        }
      }
    },
    seller_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: {
          msg: 'O ID do vendedor deve ser um número inteiro válido!'
        },
        notNull: {
          msg: 'O vendedor é obrigatório'
        }
      }
    },
    final_price: {
      type: DataTypes.DECIMAL(12, 2),
      allowNull: false,
      validate: {
        isDecimal: {
          msg: 'O preço final deve ser um valor numérico válido'
        },
        min: {
          args: [0.01],
          msg: 'O preço final deve ser maior que zero'
        }
      }
    },
    payment_method: {
      type: DataTypes.STRING(50),
      allowNull: true,
      validate: {
        len: {
          args: [2, 50],
          msg: 'O método de pagamento deve ter entre 2 e 50 caracteres'
        }
      }
    },
    status: {
      type: DataTypes.ENUM('em_andamento', 'concluida', 'cancelada'),
      allowNull: false,
      defaultValue: 'em_andamento',
      validate: {
        isIn: {
          args: [['em_andamento', 'concluida', 'cancelada']],
          msg: 'Status inválido. Deve ser: em_andamento, concluida ou cancelada'
        }
      }
    },
    notes: {
      type: DataTypes.STRING(250),
      allowNull: true,
    },
  },
  {
    tableName: 'sales',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);

export default Venda;
