const express = require("express");

const router = express.Router();

const FormateurController = require("../controllers/formateurControllers");

router.get("/", (req, res) => {
  FormateurController.getAllFormateurs(req, res);
});
router.get("/:id", (req, res) => {
  FormateurController.getFormateurById(req, res);
});

router.post("/", (req, res) => {
  FormateurController.addFormateur(req, res);
});
router.put("/:id", (req, res) => {
  FormateurController.updateFormateur(req, res);
});
router.delete("/:id", (req, res) => {
  FormateurController.deleteFormateurById(req, res);
});

module.exports = router;
