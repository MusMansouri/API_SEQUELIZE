const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/sequelize");

class Formateurs extends Model {}

Formateurs.init(
  {
    id_formateur: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    Nom: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    Prenom: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    Age: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize, // on declare la config de sequelize
    modelName: "Formateurs", // on declare le nom du model
    tableName: "formateur", // on declare le nom de latable
    timestamps: false, // on declare les timestamps
  }
);

module.exports = Formateurs;
