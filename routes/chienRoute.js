const express = require("express");
// on importe express
const router = express.Router();
// on declare le router
const ChienController = require("../controllers/chienController");
// on importe le controller Chien
router.get("/", (req, res) => {
  // on declare la route get
  ChienController.getAllChiens(req, res); // on declare la fonction getAllChiens
});
router.get("/:id", (req, res) => {
  ChienController.getChienById(req, res);
});
router.post("/", (req, res) => {
  ChienController.addChien(req, res);
});
router.put("/:id", (req, res) => {
  ChienController.updateChien(req, res);
});
router.delete("/:id", (req, res) => {
  ChienController.deleteChienById(req, res);
});
module.exports = router;
// on exporte le router
