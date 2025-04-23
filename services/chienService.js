const {} = require("sequelize");
// on importe sequelize
const Chien = require("../models/chien");
// on importe le model Chien
class ChienService {
  async getAllChien() {
    // on declare la fonction getAllChien;
    return await Chien.findAll(); // on renvoie tous les Chien
  }
  async getChienById(id) {
    return await Chien.findByPk(id);
  }
  async addChien(chien) {
    return await Chien.create(chien);
  }
  async updateChien(chien, id) {
    return await Chien.update(chien, { where: { id_chien: id } });
  }
  async deleteChienById(id) {
    return await Chien.destroy({ where: { id_chien: id } });
  }
}
module.exports = new ChienService();
// on exporte le service Chien
