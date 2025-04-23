const FormationService = require("../services/formationService");
// on importe le service stagiaire
class FormationController {
  // on declare la classe stagiaireController
  async getAllFormations(req, res) {
    // on declare la fonction getAllStagiaires
    try {
      // on declare le try
      const formations = await FormationService.getAllFormations();
      // on declare la const stagiaires qui va recuperer tous les stagiaires
      res.json(formations);
      // on renvoie les stagiaires au format json
    } catch (error) {
      // on declare le catch
      console.log(error); // on affiche l'erreur dans la
      console;
      res.status(500); // on declare le status 500
      res.json({ error: "Erreur lors de la récupération des Formations" });
      // on renvoie l'erreur au format json
    }
  }
  async addFormation(req, res) {
    try {
      const formation = await FormationService.addFormation(req.body);
      res.status(201).json(formation);
    } catch (error) {
      console.log(error);
      res.status(500);
      res.json({ error: "Erreur lors de l'ajout de la formation" });
    }
  }
  async getFormationById(req, res) {
    try {
      const formation = await FormationService.getFormationById(req.params.id);
      if (!formation) {
        return res.status(404).json({ error: "Formation non trouvé" });
      }
      res.status(201).json(formation);
    } catch (error) {
      console.log(error);
      res.status(500);
      res.json({ error: "Erreur lors de la recuperation de la formnation" });
    }
  }
  async updateFormation(req, res) {
    try {
      const formation = await FormationService.updateFormation(
        req.body,
        req.params.id
      );
      if (!formation) {
        return res.status(404).json({ error: "Formation non trouvé" });
      }
      res.status(201).json(formation);
    } catch (error) {
      console.log(error);
      res.status(500);
      res.json({ error: "Erreur lors de la modification de la formnation" });
    }
  }
  async deleteFormationById(req, res) {
    try {
      const formation = await FormationService.deleteFormationById(
        req.params.id
      );
      if (!formation) {
        return res.status(404).json({ error: "Formation non trouvé" });
      }
      res.status(201).json("formation suprimer avec succes");
    } catch (error) {
      console.log(error);
      res.status(500);
      res.json({ error: "Erreur lors de la supression de la formnation" });
    }
  }
}
module.exports = new FormationController();
// on exporte la classe stagiaireController
