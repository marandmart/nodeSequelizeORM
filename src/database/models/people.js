'use strict';

const validateCpf = require('../utils/cpfValidation.js')

const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class People extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      People.hasMany(models.Enrollment, {
        foreignKey: "s_id",
        scope: { curr_status: "confirmed" },
        as: "enrolled"
      });
      People.hasMany(models.Class, {
        foreignKey: "teacher_id"
      });
    }
  }
  People.init({
    p_name: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [3, 50],
          msg: "Campo deve ter no mínimo 3 e no máximo 50 caracteres"
        }
      }
    },
    cpf: {
      type: Sequelize.STRING,
      validate: {
        isCpfValid: (cpf) => {
          const cpfIsValid = validateCpf(cpf)
          if (!cpfIsValid) throw new Error("CPF inválido")
        }
      },
      unique: true
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: "Email format is incorrect"
        }
      }
    },
    p_role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'People',
    paranoid: true,
    defaultScope: {
      where: {
        is_active: true
      }
    },
    scopes: {
      noRestrictionQuery: {
        where: {}
      }
    }
  });
  return People;
};