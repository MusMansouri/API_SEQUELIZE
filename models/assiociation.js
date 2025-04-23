const Examen = require("./examen");
const Examinateur = require("./examinateur");
const Maitre = require("./maitre");
const Chien = require("./chien");

Examinateur.hasOne(Examen, { as: "exam", foreignKey: "id_examen" });
Examen.belongsTo(Examinateur, { as: "examinateur", foreignKey: "id_examen" });

///////////////////////////////////////////////
Maitre.hasMany(Chien, { as: "chien", foreignKey: "id_maitre" });
Chien.belongsTo(Maitre, { as: "chien", foreignKey: "id_maitre" });

module.exports = {
  Examen,
  Examinateur,
  Maitre,
  Chien,
};
