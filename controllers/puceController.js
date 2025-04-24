const PuceService = require("../services/puceService");
// on importe le service Puce
class PuceController {
  // on declare la classe PuceController
  async getAllPuces(req, res) {
    // on declare la fonction getAllPuces
    try {
      // on declare le try
      const puce = await PuceService.getAllPuce();
      // on declare la const Puces qui va recuperer tous les Puces
      res.json(puce);
      // on renvoie les Puces au format json
    } catch (error) {
      // on declare le catch
      console.log(error); // on affiche l'erreur dans la

      res.status(500); // on declare le status 500
      res.json({ error: "Erreur lors de la récupération des Puces" });
      // on renvoie l'erreur au format json
    }
  }
  async addPuce(req, res) {
    try {
      const puce = await PuceService.addPuce(req.body);
      res.status(201).json(puce);
    } catch (error) {
      console.log(error);
      res.status(500);
      res.json({ error: "Erreur lors de l'ajout de la Puce" });
    }
  }
  async getPuceById(req, res) {
    try {
      const puce = await PuceService.getPuceById(req.params.id);
      if (!puce) {
        return res.status(404).json({ error: "Puce non trouvé" });
      }
      res.status(201).json(puce);
    } catch (error) {
      console.log(error);
      res.status(500);
      res.json({ error: "Erreur lors de la recuperation du Puce" });
    }
  }
  async updatePuce(req, res) {
    try {
      const puce = await PuceService.updatePuce(req.body, req.params.id);
      if (!puce) {
        return res.status(404).json({ error: "Puce non trouvé" });
      }
      res.status(201).json(puce);
    } catch (error) {
      console.log(error);
      res.status(500);
      res.json({ error: "Erreur lors de la modification du Puce" });
    }
  }
  async deletePuceById(req, res) {
    try {
      const Puce = await PuceService.deletePuceById(req.params.id);
      if (!Puce) {
        return res.status(404).json({ error: "Puce non trouvé" });
      }
      res.status(201).json("Puce suprimer avec succes");
    } catch (error) {
      console.log(error);
      res.status(500);
      res.json({ error: "Erreur lors de la supression du Puce" });
    }
  }
}
module.exports = new PuceController();
// on exporte la classe PuceController
