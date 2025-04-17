const StagiaireService = require("../services/stagiaireService");
// on importe le service stagiaire
class StagiaireController {
  // on declare la classe stagiaireController
  async getAllStagiaires(req, res) {
    // on declare la fonction getAllStagiaires
    try {
      // on declare le try
      const stagiaires = await StagiaireService.getAllStagiaires();
      // on declare la const stagiaires qui va recuperer tous les stagiaires
      res.json(stagiaires);
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
  async addStagaire(req, res) {
    try {
      const stagiaire = await StagiaireService.addStagiaire(req.body);
      res.status(201).json(stagiaire);
    } catch (error) {
      console.log(error);
      res.status(500);
      res.json({ error: "Erreur lors de l'ajout de la Stagiaire" });
    }
  }
  async getStagiaireById(req, res) {
    try {
      const stagiaire = await StagiaireService.getStagiaireById(req.params.id);
      if (!stagiaire) {
        return res.status(404).json({ error: "Stagiaire non trouvé" });
      }
      res.status(201).json(stagiaire);
    } catch (error) {
      console.log(error);
      res.status(500);
      res.json({ error: "Erreur lors de la recuperation de la formnation" });
    }
  }
  async updateStagiaire(req, res) {
    try {
      const stagiaire = await StagiaireService.updateStagiaire(
        req.body,
        req.params.id
      );
      if (!stagiaire) {
        return res.status(404).json({ error: "Stagiaire non trouvé" });
      }
      res.status(201).json(stagiaire);
    } catch (error) {
      console.log(error);
      res.status(500);
      res.json({ error: "Erreur lors de la modification du Stagiare" });
    }
  }
  async deleteStagiaireById(req, res) {
    try {
      const stagiaire = await StagiaireService.deleteStagiaireById(
        req.params.id
      );
      if (!stagiaire) {
        return res.status(404).json({ error: "Stagiaire non trouvé" });
      }
      res.status(201).json("Stagiaire suprimer avec succes");
    } catch (error) {
      console.log(error);
      res.status(500);
      res.json({ error: "Erreur lors de la supression du stagiaire" });
    }
  }
}
module.exports = new StagiaireController();
// on exporte la classe stagiaireController
