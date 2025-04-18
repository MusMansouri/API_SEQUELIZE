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
  async addStagiaire(stagiaire) {
    return await Stagiaires.create(stagiaire);
  }
  async updateStagiaire(stagiaire, id) {
    return await Stagiaires.update(
      { ...stagiaire },
      { where: { id_stagiaires: id } }
    );
  }
  async deleteStagiaireById(id) {
    return await Stagiaires.destroy({ where: { id_stagiaires: id } });
  }
}
module.exports = new StagiaireService();
// on exporte le service stagiaire
