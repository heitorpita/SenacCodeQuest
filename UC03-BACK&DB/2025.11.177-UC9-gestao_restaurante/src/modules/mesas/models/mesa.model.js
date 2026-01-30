import { DataTypes } from 'sequelize';
import sequelize from '../../../config/db.js';

const MesaModel = sequelize.define(
    'Mesa', 
    {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      validate: {
        isUUID: {
          args: 4,
          msg: "O id deve ser um UUID válido.",
        },
      },
    },
    usuario_id: {
        type: DataTypes.UUID,
        allowNull: true,
        validate: {
            isUUID: {
                args: 4,
                msg: "O id deve ser um UUID válido."
            }
        },
        references: {
            model: "usuario",
            key: "id"
        }
    },
    numero: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        validate: {
            isInt: {
                msg: "Adicione um numero válido."
            }
        }
    },
    capacidade: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 4,
        validate: {
            isNumeric: {
                msg: "Adicione um numero válido."
            }
        }
    },
    status: {
        type: DataTypes.ENUM('livre', 'ocupada', 'reservada', 'manutencao'),
        allowNull: false,
        defaultValue: 'livre'
    }
  },
  {
    tableName: "mesas",
    createdAt: "criado_em",
    updatedAt: "atualizado_em",
    deletedAt: "excluido_em",
    paranoid: true
  },
);

export default MesaModel;