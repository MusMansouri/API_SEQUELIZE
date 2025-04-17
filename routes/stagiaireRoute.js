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
module.exports = router;
// on exporte le router
 