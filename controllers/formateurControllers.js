const FormateurService = require("../services/formateurService");

class FormateurController {
  async getAllFormateurs(req, res) {
    try {
      const formateurs = await FormateurService.getAllFormateurs();
      res.json(formateurs);
    } catch (error) {
      console.log(error);
      res.status(500);
      res.json({ error: "Erreur lors de la recuperation des formateurs" });
    }
  }
}
module.exports = new FormateurController();
