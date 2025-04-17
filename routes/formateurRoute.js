const express = require("express");

const router = express.Router();

const FormateurController = require("../controllers/formateurControllers");

router.get("/", (req, res) => {
  FormateurController.getAllFormateurs(req, res);
});

module.exports = router;
