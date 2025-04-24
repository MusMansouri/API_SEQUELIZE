const express = require("express");
// on importe express
const router = express.Router();
// on declare le router
const PuceController = require("../controllers/puceController");
// on importe le controller Puce
router.get("/", (req, res) => {
  // on declare la route get
  PuceController.getAllPuces(req, res); // on declare la fonction getAllPuces
});
router.get("/:id", (req, res) => {
  PuceController.getPuceById(req, res);
});
router.post("/", (req, res) => {
  PuceController.addPuce(req, res);
});
router.put("/:id", (req, res) => {
  PuceController.updatePuce(req, res);
});
router.delete("/:id", (req, res) => {
  PuceController.deletePuceById(req, res);
});
module.exports = router;
// on exporte le router
