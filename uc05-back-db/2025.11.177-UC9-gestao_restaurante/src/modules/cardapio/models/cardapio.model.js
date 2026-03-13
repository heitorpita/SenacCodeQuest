import { DataTypes } from "sequelize";
import sequelize from "../../../config/db.js";

const CardapioModel = sequelize.define(
  "Cardapio",
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
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [1, 100],
          msg: "O nome deve ter entre 1 e 100 caracteres.",
        },
        notEmpty: {
          msg: "O campo de nome não pode ser vazio.",
        },
      },
    },
    descricao: {
      type: DataTypes.STRING(500),
      allowNull: true,
      validate: {
        len: {
          args: [0, 500],
          msg: "A descrição deve ter no máximo 500 caracteres.",
        }
      }
    },
    porcao: {
      type: DataTypes.STRING(50),
      allowNull: true,
      validate: {
        notEmpty: {
          msg: "O campo de porção não pode ser vazio.",
        },
      }
    },
    preco: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        isDecimal: {
          msg: "Insira um numero decimal válido."
        }
      }
    },
    categoria: {
      type: DataTypes.ENUM('entrada', 'prato_principal', 'sobremesa', 'bebida', 'acompanhamento'),
      allowNull: false,
      defaultValue: 'prato_principal'
    },
    disponivel: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  },
  {
    tableName: "cardapio",
    createdAt: "criado_em",
    updatedAt: "atualizado_em",
    deletedAt: "excluido_em",
    paranoid: true
  },
);

export default CardapioModel;