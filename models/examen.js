const { Model, DataTypes } = require(`sequelize`);
const sequelize = require("../config/sequelize");

class Examen extends Model {}

Examen.init(
  {
    id_examen: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nom: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    date_debut: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    date_fin: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize, // on declare la config de sequelize
    modelName: "Examen", // on declare le nom du model
    tableName: "examen", // on declare le nom de latable
    timestamps: false, // on declare les timestamps
  }
);

module.exports = Examen;
