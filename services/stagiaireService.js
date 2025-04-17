const {} = require("sequelize");
// on importe sequelize
const Stagiaires = require("../models/stagiaires");
// on importe le model stagiaires
class StagiaireService {
  async getAllStagiaires() {
    // on declare la fonction getAllStagiaires;
    return await Stagiaires.findAll(); // on renvoie tous les stagiaires
  }
  async getStagiaireById(id) {
    return await Stagiaires.findByPk(id);
  }
  async addStagiaire() {
    return await Stagiaires.create();
  }
  async updateStagiaire(stagaire, id) {
    return await Stagiaires.update(
      { ...stagaire },
      { where: { id_stagaire: id } }
    );
  }
  async deleteStagiaireById(id) {
    return await Stagiaires.destroy({ where: { id_stagaire: id } });
  }
}
module.exports = new StagiaireService();
// on exporte le service stagiaire
