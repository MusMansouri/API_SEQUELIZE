const express = require("express");
// on importe express
require("dotenv").config();
// on importe le fichier .env
const app = express();
// on declare l'application express

app.use(express.json());
// on declare le middleware pour parser le json
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// on declare la route racine
const stagiaireRoute = require("./routes/stagiaireRoute");
app.use("/stagaires", stagiaireRoute);
const formateurRoute = require("./routes/formateurRoute");
app.use("/formateurs", formateurRoute);
const formationRoute = require("./routes/formationRoute");
app.use("/formations", formationRoute);

app.use((req, res) => {
  res.status(404).json({ message: "Route non trouvé" });
});

app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}`);
});
