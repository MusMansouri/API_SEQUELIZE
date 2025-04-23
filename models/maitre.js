const { Model, DataTypes } = require("sequelize");
// on declare la const model et dataTypes pour utiliser les types de données
const sequelize = require("../config/sequelize");
// on importe la config de sequelize
class Maitre extends Model {}
// on declare la class Maitre qui herite de model
Maitre.init(
  // on initialise le model
  {
    id_maitre: {
      // on declare les champs de la table
      type: DataTypes.INTEGER, // on declare le type dedonnées
      primaryKey: true, // on declare la clé primaire
      allowNull: false, // on declare le champ comme non nul
    },
    nom: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    sequelize, // on declare la config de sequelize
    modelName: "Maitre", // on declare le nom du model
    tableName: "maitre", // on declare le nom de latable
    timestamps: false, // on declare les timestamps
  }
);
module.exports = Maitre;
// on exporte le model Maitre
