const ChienService = require("../services/chienService");
// on importe le service Chien
class ChienController {
  // on declare la classe ChienController
  async getAllChiens(req, res) {
    // on declare la fonction getAllChiens
    try {
      // on declare le try
      const chien = await ChienService.getAllChien();
      // on declare la const Chiens qui va recuperer tous les Chiens
      res.json(chien);
      // on renvoie les Chiens au format json
    } catch (error) {
      // on declare le catch
      console.log(error); // on affiche l'erreur dans la
      console;
      res.status(500); // on declare le status 500
      res.json({ error: "Erreur lors de la récupération des Chiens" });
      // on renvoie l'erreur au format json
    }
  }
  async addChien(req, res) {
    try {
      const chien = await ChienService.addChien(req.body);
      res.status(201).json(chien);
    } catch (error) {
      console.log(error);
      res.status(500);
      res.json({ error: "Erreur lors de l'ajout de la Chien" });
    }
  }
  async getChienById(req, res) {
    try {
      const Chien = await ChienService.getChienById(req.params.id);
      if (!Chien) {
        return res.status(404).json({ error: "Chien non trouvé" });
      }
      res.status(201).json(Chien);
    } catch (error) {
      console.log(error);
      res.status(500);
      res.json({ error: "Erreur lors de la recuperation du Chien" });
    }
  }
  async updateChien(req, res) {
    try {
      const Chien = await ChienService.updateChien(req.body, req.params.id);
      if (!Chien) {
        return res.status(404).json({ error: "Chien non trouvé" });
      }
      res.status(201).json(Chien);
    } catch (error) {
      console.log(error);
      res.status(500);
      res.json({ error: "Erreur lors de la modification du Chien" });
    }
  }
  async deleteChienById(req, res) {
    try {
      const chien = await ChienService.deleteChienById(req.params.id);
      if (!chien) {
        return res.status(404).json({ error: "Chien non trouvé" });
      }
      res.status(201).json("Chien suprimer avec succes");
    } catch (error) {
      console.log(error);
      res.status(500);
      res.json({ error: "Erreur lors de la supression du Chien" });
    }
  }
}
module.exports = new ChienController();
// on exporte la classe ChienController
