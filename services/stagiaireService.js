const {} = require("sequelize");
// on importe sequelize
const Stagiaires = require("../models/stagiaires");
// on importe le model stagiaires
class StagiaireService {
  async getAllStagiaires() {
    // on declare la fonction getAllStagiaires;
    return await Stagiaires.findAll(); // on renvoie tous les stagiaires
  }
}
module.exports = new StagiaireService();
// on exporte le service stagiaire
