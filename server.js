const express = require("express");
// on importe express
require("dotenv").config();
// on importe le fichier .env
require("./models/assiociation");
const app = express();
// on declare l'application express

app.use(express.json());
// on declare le middleware pour parser le json
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// on declare la route racine

const stagiaireRoute = require("./routes/stagiaireRoute");
app.use("/stagiaires", stagiaireRoute);
const formateurRoute = require("./routes/formateurRoute");
app.use("/formateurs", formateurRoute);
const formationRoute = require("./routes/formationRoute");
app.use("/formations", formationRoute);
const centreRoute = require("./routes/centreRoute");
app.use("/centre", centreRoute);
const examenRoute = require("./routes/examenRoute");
app.use("/examen", examenRoute);
const examinateurRoute = require("./routes/examinateurRoute");
app.use("/examinateur", examinateurRoute);

app.use((req, res) => {
  res.status(404).json({ message: "Route non trouvé" });
});

app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}`);
});
