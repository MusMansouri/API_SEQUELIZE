const express = require("express");

const router = express.Router();

const FormationController = require("../controllers/formationControllers");

router.get("/", (req, res) => {
  FormationController.getAllFormations(req, res);
});

module.exports = router;
