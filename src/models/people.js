'use strict';
const {
  Model
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
        foreignKey: "s_id"
      });
      People.hasMany(models.Class, {
        foreignKey: "teacher_id"
      });
    }
  }
  People.init({
    p_name: DataTypes.STRING,
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    email: DataTypes.STRING,
    p_role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'People',
  });
  return People;
};