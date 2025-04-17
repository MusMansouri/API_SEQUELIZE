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
  async addFormateur(req, res) {
    try {
      const formateur = await FormateurService.addFormateur(req.body);
      res.status(201).json(formateur);
    } catch (error) {
      console.log(error);
      res.status(500);
      res.json({ error: `Erreur lors de l'ajout du formateur` });
    }
  }
  async getFormateurById(req, res) {
    try {
      const formateur = await FormateurService.getFormateurById(req.params.id);
      if (!formateur) {
        return res.status(404).json({ error: `Formateur non trouvé` });
      }
      res.json(formateur);
    } catch (error) {
      console.log(error);
      res.status(500);
      res.json({ error: "Erreur lors de la recuperation du formateur" });
    }
  }
  async updateFormateur(req, res) {
    try {
      const formateur = await FormateurService.updateFormateur(
        req.body,
        req.params.id
      );
      if (!formateur) {
        return res.status(404).json({ error: `Formateur non trouv` });
      }
      res.json(formateur);
    } catch (error) {
      console.log(error);
      res.status(500);
      res.json({ error: "Erreur lors de la modification" });
    }
  }
  async deleteFormateurById(req, res) {
    try {
      const formateur = await FormateurService.deleteFormateurById(
        req.params.id
      );
      if (!formateur) {
        return res.status(404).json({ error: `Formateur non trouv` });
      }
      res.json(formateur);
    } catch (error) {
      console.log(error);
      res.status(500);
      res.json({ error: "Erreur lors de la suppression" });
    }
  }
}

module.exports = new FormateurController();
