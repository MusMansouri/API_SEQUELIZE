const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

class Formations extends Model {}

Formations.init(
  {
    id_formation: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    Nom: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    Niveau: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    sequelize, // on declare la config de sequelize
    modelName: "Formations", // on declare le nom du model
    tableName: "formation", // on declare le nom de latable
    timestamps: false, // on declare les timestamps
  }
);

module.exports = Formations;
