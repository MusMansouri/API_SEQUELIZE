const express = require("express");
// on importe express
const router = express.Router();
// on declare le router
const MaitreController = require("../controllers/maitreController");
// on importe le controller Maitre
router.get("/", (req, res) => {
  // on declare la route get
  MaitreController.getAllMaitres(req, res); // on declare la fonction getAllMaitres
});
router.get("/:id", (req, res) => {
  MaitreController.getMaitreById(req, res);
});
router.post("/", (req, res) => {
  MaitreController.addMaitre(req, res);
});
router.put("/:id", (req, res) => {
  MaitreController.updateMaitre(req, res);
});
router.delete("/:id", (req, res) => {
  MaitreController.deleteMaitreById(req, res);
});
module.exports = router;
// on exporte le router
