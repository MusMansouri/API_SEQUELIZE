const {} = require("sequelize");
// on importe sequelize
const Puce = require("../models/puce");

// on importe le model Puce
class PuceService {
  async getAllPuce() {
    // on declare la fonction getAllPuce;
    return await Puce.findAll(); // on renvoie tous les Puce
  }
  async getPuceById(id) {
    return await Puce.findByPk(id);
  }
  async addPuce(puce) {
    return await Puce.create(puce);
  }
  async updatePuce(puce, id) {
    return await Puce.update(puce, { where: { id_puce: id } });
  }
  async deletePuceById(id) {
    return await Puce.destroy({ where: { id_puce: id } });
  }
}
module.exports = new PuceService();
// on exporte le service Puce
