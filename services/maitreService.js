const {} = require("sequelize");
// on importe sequelize
const Maitre = require("../models/maitre");
const Chien = require("../models/chien");
// on importe le model Maitre
class MaitreService {
  async getAllMaitre() {
    // on declare la fonction getAllMaitre;
    return await Maitre.findAll({
      include: [{ model: Chien, as: "chien" }],
    }); // on renvoie tous les Maitre
  }
  async getMaitreById(id) {
    return await Maitre.findByPk(id, {
      include: [{ model: Chien, as: "chien" }],
    });
  }
  async addMaitre(maitre) {
    return await Maitre.create(maitre);
  }
  async updateMaitre(maitre, id) {
    return await Maitre.update(maitre, { where: { id_maitre: id } });
  }
  async deleteMaitreById(id) {
    return await Maitre.destroy({ where: { id_maitre: id } });
  }
}
module.exports = new MaitreService();
// on exporte le service Maitre
