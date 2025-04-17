const express = require("express");

const router = express.Router();

const FormationController = require("../controllers/formationControllers");

router.get("/", (req, res) => {
  FormationController.getAllFormations(req, res);
});
router.post("/", (req, res) => {
  FormationController.addFormation(req, res);
});
router.get("/:id", (req, res) => {
  FormationController.getFormationById(req, res);
});
router.put("/:id", (req, res) => {
  FormationController.updateFormation(req, res);
});
router.delete("/:id", (req, res) => {
  FormationController.deleteFormationById(req, res);
});

module.exports = router;
