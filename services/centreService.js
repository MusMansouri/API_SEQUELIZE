const {} = require("sequelize");
// on importe sequelize
const Centre = require("../models/centre");
// on importe le model Centre
class CentreService {
  async getAllCentre() {
    // on declare la fonction getAllCentre;
    return await Centre.findAll(); // on renvoie tous les Centre
  }
  async getCentreById(id) {
    return await Centre.findByPk(id);
  }
  async addCentre(centre) {
    return await Centre.create(centre);
  }
  async updateCentre(centre, id) {
    return await Centre.update(centre, { where: { id_centre: id } });
  }
  async deleteCentreById(id) {
    return await Centre.destroy({ where: { id_centre: id } });
  }
}
module.exports = new CentreService();
// on exporte le service Centre
