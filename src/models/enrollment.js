'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Enrollment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Enrollment.belongsTo(models.People, {
        foreignKey: "s_id"
      });
      Enrollment.belongsTo(models.Class, {
        foreignKey: "class_id"
      });
    }
  }
  Enrollment.init({
    curr_status: DataTypes.STRING,
    s_id: DataTypes.INTEGER,
    class_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Enrollment',
  });
  return Enrollment;
};