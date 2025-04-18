const { where } = require("sequelize");

const Formations = require("../models/formations");

class FormationsService {
  async getAllFormations() {
    return await Formations.findAll();
  }
  async addFormation(formation) {
    return await Formations.create(formation);
  }
  async getFormationById(id) {
    return await Formations.findByPk(id);
  }
  async updateFormation(formation, id) {
    return await Formations.update(formation, { where: { id_formation: id } });
  }
  async deleteFormationById(id) {
    return await Formations.destroy({ where: { id_formation: id } });
  }
}
module.exports = new FormationsService();
