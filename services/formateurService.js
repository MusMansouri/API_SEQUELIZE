const {} = require("sequelize");

const Formateurs = require("../models/formateurs");

class FormateurService {
  async getAllFormateurs() {
    return await Formateurs.findAll();
  }
}
module.exports = new FormateurService();
