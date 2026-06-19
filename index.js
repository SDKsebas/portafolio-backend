const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// Tareas del semestre (equivalente a la BD SQLite)
const tareas = [
  { id: 1, titulo: "Tarea 1 - Etiquetas HTML", url: "https://github.com/SDKsebas/tarea1" },
  { id: 2, titulo: "Tarea 2 - Paginas Estaticas vs Dinamicas", url: "https://github.com/SDKsebas/tarea2" },
  { id: 3, titulo: "Tarea 3 - Hosting VPS y la Nube", url: "https://github.com/SDKsebas/tarea3" }
];

app.get("/tareas", (req, res) => {
  res.json(tareas);
});

app.get("/", (req, res) => {
  res.json({ status: "ok", mensaje: "API de Sebastian Sotelo Zuñiga" });
});

module.exports = app;

// Solo para correr local
if (require.main === module) {
  app.listen(3000, () => console.log("Servidor en http://localhost:3000"));
}
