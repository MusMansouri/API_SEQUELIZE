const express = require("express");
// on importe express
const router = express.Router();
// on declare le router
const StagiaireController = require("../controllers/stagiaireControllers");
// on importe le controller stagiaire
router.get("/", (req, res) => {
  // on declare la route get
  StagiaireController.getAllStagiaires(req, res); // on declare la fonction getAllStagiaires
});
router.get("/:id", (req, res) => {
  StagiaireController.getStagiaireById(req, res);
});
router.post("/", (req, res) => {
  StagiaireController.addStagiaire(req, res);
});
router.put("/:id", (req, res) => {
  StagiaireController.updateStagiaire(req, res);
});
router.delete("/:id", (req, res) => {
  StagiaireController.deleteStagiaireById(req, res);
});
module.exports = router;
// on exporte le router
