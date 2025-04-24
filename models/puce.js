const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");
const Chien = require("./chien");

class Puce extends Model {}
Puce.init(
  {
    id_puce: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    id_chien: {
      type: DataTypes.INTEGER,
      references: {
        model: Chien,
        key: "id_chien",
      },
    },
  },
  {
    sequelize,
    tableName: "puce",
    timestamps: false,
  }
);
module.exports = Puce;
