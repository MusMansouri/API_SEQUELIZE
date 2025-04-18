const { Model, DataTypes } = require(`sequelize`);
const sequelize = require("../config/sequelize");

class Examinateur extends Model {}

Examinateur.init(
  {
    id_examinateur: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nom: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    prenom: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize, // on declare la config de sequelize
    modelName: "Examinateur", // on declare le nom du model
    tableName: "examinateur", // on declare le nom de latable
    timestamps: false, // on declare les timestamps
  }
);

module.exports = Examinateur;
