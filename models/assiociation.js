const Examen = require("./examen");
const Examinateur = require("./examinateur");
const Maitre = require("./maitre");
const Chien = require("./chien");
const Organise = require("./organise");
const Centre = require("./centre");
const Puce = require("./puce");

///////////////////
Examinateur.hasOne(Examen, { as: "exam", foreignKey: "id_examen" });
Examen.belongsTo(Examinateur, { as: "examinateur", foreignKey: "id_examen" });

///////////////////////////////////////////////
Maitre.hasMany(Chien, { as: "chien", foreignKey: "id_maitre" });
Chien.belongsTo(Maitre, { as: "chien", foreignKey: "id_maitre" });
//////////////////////////////
Centre.belongsToMany(Examen, {
  through: "Organise",
  as: "exam",
  foreignKey: "id_examen",
});
Examen.belongsToMany(Centre, {
  through: "Organise",
  as: "centre",
  foreignKey: "id_centre",
});
////////////////////////////

Chien.hasOne(Puce, { as: "puces", foreignKey: "id_puce" });
Puce.belongsTo(Chien, { as: "puces", foreignKey: "id_puce" });
////////////
module.exports = {
  Examen,
  Examinateur,
  Maitre,
  Chien,
  Centre,
};
