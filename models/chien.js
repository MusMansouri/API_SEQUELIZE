const { Model, DataTypes } = require("sequelize");
// on declare la const model et dataTypes pour utiliser les types de données
const sequelize = require("../config/sequelize");
const Maitre = require("./maitre");
// on importe la config de sequelize
class Chien extends Model {}
// on declare la class Chien qui herite de model
Chien.init(
  // on initialise le model
  {
    id_Chien: {
      // on declare les champs de la table
      type: DataTypes.INTEGER, // on declare le type dedonnées
      primaryKey: true, // on declare la clé primaire
      allowNull: false, // on declare le champ comme non nul
    },
    race: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    age: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    id_maitre: {
      type: DataTypes.INTEGER,
      references: {
        model: Maitre,
        key: "id_maitre",
      },
    },
  },
  {
    sequelize, // on declare la config de sequelize
    modelName: "Chien", // on declare le nom du model
    tableName: "chien", // on declare le nom de latable
    timestamps: false, // on declare les timestamps
  }
);
module.exports = Chien;
// on exporte le model Chien
