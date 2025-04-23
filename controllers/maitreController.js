const MaitreService = require("../services/maitreService");
// on importe le service Maitre
class MaitreController {
  // on declare la classe MaitreController
  async getAllMaitres(req, res) {
    // on declare la fonction getAllMaitres
    try {
      // on declare le try
      const maitre = await MaitreService.getAllMaitre();
      // on declare la const Maitres qui va recuperer tous les Maitres
      res.json(maitre);
      // on renvoie les Maitres au format json
    } catch (error) {
      // on declare le catch
      console.log(error); // on affiche l'erreur dans la

      res.status(500); // on declare le status 500
      res.json({ error: "Erreur lors de la récupération des Maitres" });
      // on renvoie l'erreur au format json
    }
  }
  async addMaitre(req, res) {
    try {
      const maitre = await MaitreService.addMaitre(req.body);
      res.status(201).json(maitre);
    } catch (error) {
      console.log(error);
      res.status(500);
      res.json({ error: "Erreur lors de l'ajout de la Maitre" });
    }
  }
  async getMaitreById(req, res) {
    try {
      const maitre = await MaitreService.getMaitreById(req.params.id);
      if (!maitre) {
        return res.status(404).json({ error: "Maitre non trouvé" });
      }
      res.status(201).json(maitre);
    } catch (error) {
      console.log(error);
      res.status(500);
      res.json({ error: "Erreur lors de la recuperation du maitre" });
    }
  }
  async updateMaitre(req, res) {
    try {
      const maitre = await MaitreService.updateMaitre(req.body, req.params.id);
      if (!maitre) {
        return res.status(404).json({ error: "Maitre non trouvé" });
      }
      res.status(201).json(maitre);
    } catch (error) {
      console.log(error);
      res.status(500);
      res.json({ error: "Erreur lors de la modification du Maitre" });
    }
  }
  async deleteMaitreById(req, res) {
    try {
      const maitre = await MaitreService.deleteMaitreById(req.params.id);
      if (!maitre) {
        return res.status(404).json({ error: "Maitre non trouvé" });
      }
      res.status(201).json("Maitre suprimer avec succes");
    } catch (error) {
      console.log(error);
      res.status(500);
      res.json({ error: "Erreur lors de la supression du Maitre" });
    }
  }
}
module.exports = new MaitreController();
// on exporte la classe MaitreController
