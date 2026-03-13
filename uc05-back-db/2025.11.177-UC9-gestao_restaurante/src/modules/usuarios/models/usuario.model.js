import { DataTypes } from "sequelize";
import sequelize from "../../../config/db.js";

const UsuarioModel = sequelize.define("Usuario", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
    validate: {
      isUUID: {
        args: 4,
        msg: "O id deve ser um UUID valido!",
      },
    },
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [2, 100],
        msg: "O nome deve ter no min 2 caractere e no maximo 100 caracteres",
      },
      notEmpty: {
        msg: "Nome invalido, esta vazio",
      },
    },
  },
  email: {
    type: DataTypes.STRING(150),
    unique: true,
    allowNull: false,
    validate: {
      isEmail: {
        msg: "email não valido",
      },
    },
  },
  role: {
    type: DataTypes.ENUM("admin", "client"),
    allowNull: false,
    validate: {
      isIn: {
        args: [["admin", "client"]],
        msg: "perfil invalido",
      },
    },
  },
  matricula: {
    type: DataTypes.STRING(5),
    allowNull: false,
    unique: true,
    validate: {
      isValidMatricula(value) {
        if (this.role === "admin") {
          const adminRegex = /^a\d{4}$/;
          if (!adminRegex.test(value)) {
            throw new Error(
              'Matrícula de admin deve começar com "a" seguido de 4 números (ex: a1234)',
            );
          }
        }

        if (this.role === "client") {
          const clientRegex = /^c\d{4}$/;
          if (!clientRegex.test(value)) {
            throw new Error(
              'Matrícula de cliente deve começar com "c" seguido de 4 números (ex: c1234)',
            );
          }
        }
      },
    },
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
    },
    {
        tableName: 'usuario',
        createdAt: 'criandoEm',
        updatedAt: 'atualizadoEm',
        deletedAt: 'excluidoEm',
        paranoid: true,
      }

);

export default UsuarioModel;
