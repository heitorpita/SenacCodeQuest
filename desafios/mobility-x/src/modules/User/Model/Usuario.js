import { DataTypes } from 'sequelize';
import sequelize from '../../../db/config.js';

//nome do modelo
const Usuario = sequelize.define(
  'Usuario',
  {
    // modelos dos atributos sao definidos aqui
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      validate: {
        isUUID: {
          args: 4,
          msg: 'O ID deve ser um UUID valido!'
        }
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len:{
          args: [2, 100],
          msg: 'O nome deve ter no min 2 caractere e no maximo 100 caracteres'
        },
        notEmpty:{
          msg: 'Nome invalido, esta vazio'
        }
      }
    },
    email: {
      type: DataTypes.STRING(150),
      unique: true,
      allowNull: false,
      validate: {
        isEmail: {
          msg: 'email n valido'
        }
      }
      // allowNull defaults to true
    },
    role: {
      type: DataTypes.ENUM('admin', 'seller', 'cliente'),
      allowNull: false,
      validate: {
        isIn: {
          args: [['admin', 'seller', 'cliente']],
          msg: 'perfil invalido'
        }

      }
    },
    password: {
      type: DataTypes.STRING(15),
      allowNull: false,
      validate: {
        is: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%!])[A-Za-z\d@#$%!]{8,}$/ ,
        msg: 'A senha precisa de: mínimo 8 caracteres, uma letra maiúscula, um número, um caractere especial (@#$%!)'
      }
    },
  },
  {
    tableName: 'usuario',
    createdAt: 'criandoEm',
    updatedAt: 'atulizadoEm',
    deletedAt: 'excluidoEm',
  },
);

export default Usuario;