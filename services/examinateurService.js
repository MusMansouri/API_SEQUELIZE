const {} = require("sequelize");
// on importe sequelize
const Examinateur = require("../models/Examinateur");
// on importe le model Examinateur
class ExaminateurService {
  async getAllExaminateurs() {
    // on declare la fonction getAllExaminateur;
    return await Examinateur.findAll(); // on renvoie tous les Examinateur
  }
  async getExaminateurById(id) {
    return await Examinateur.findByPk(id);
  }
  async addExaminateur(examinateur) {
    return await Examinateur.create(examinateur);
  }
  async updateExaminateur(examinateur, id) {
    return await Examinateur.update(examinateur, {
      where: { id_examinateur: id },
    });
  }
  async deleteExaminateurById(id) {
    return await Examinateur.destroy({ where: { id_examinateur: id } });
  }
}
module.exports = new ExaminateurService();
// on exporte le service Examinateur
