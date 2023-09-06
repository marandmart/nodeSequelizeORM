'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Class extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Class.hasMany(models.Enrollment, {
        foreignKey: "class_id"
      });
      Class.belongsTo(models.People);
      Class.belongsTo(models.Level);
    }
  }
  Class.init({
    teacher_id: DataTypes.INTEGER,
    date_start: DataTypes.DATEONLY,
    level_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Class',
  });
  return Class;
};