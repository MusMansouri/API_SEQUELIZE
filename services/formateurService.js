const {} = require("sequelize");

const Formateurs = require("../models/formateurs");

class FormateurService {
  async getAllFormateurs() {
    return await Formateurs.findAll();
  }
  async addFormateur(formateur) {
    return Formateurs.create(formateur);
  }
  async getFormateurById(id) {
    return await Formateurs.findByPk(id);
  }
  async updateFormateur(formateur, id) {
    return await Formateurs.update(formateur, { where: { id_formateur: id } });
  }
  async deleteFormateurById(id) {
    return await Formateurs.destroy({ where: { id_formateur: id } });
  }
}
module.exports = new FormateurService();
