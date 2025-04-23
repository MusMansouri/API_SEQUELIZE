const Examen = require("./examen");
const Examinateur = require("./examinateur");

Examinateur.hasOne(Examen, { as: "exam", foreignKey: "id_examen" });
Examen.belongsTo(Examinateur, { as: "examinateur", foreignKey: "id_examen" });

module.exports = {
  Examen,
  Examinateur
};
