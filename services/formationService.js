const {} = require("sequelize");

const Formations = require("../models/formations");

class FormationsService {
  async getAllFormations() {
    return await Formations.findAll();
  }
}
module.exports = new FormationsService();
