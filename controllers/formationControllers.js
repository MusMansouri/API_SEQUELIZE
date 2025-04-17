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
      res.json({ error: "Erreur lors de la récupération des stagiaires" });
      // on renvoie l'erreur au format json
    }
  }
}
module.exports = new FormationController();
// on exporte la classe stagiaireController
