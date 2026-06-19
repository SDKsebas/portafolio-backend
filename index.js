const express = require("express");
const cors = require("cors");
const initSqlJs = require("sql.js");

const app = express();
app.use(cors());

let db;

async function iniciarBD() {
  const SQL = await initSqlJs();
  db = new SQL.Database();

  db.run(`CREATE TABLE tareas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT,
    url TEXT
  )`);

  db.run(`INSERT INTO tareas (titulo, url) VALUES
    ('Tarea 1 - Etiquetas HTML', 'https://github.com/SebastianSoteloZuniga/tarea1'),
    ('Tarea 2 - Paginas Estaticas vs Dinamicas', 'https://github.com/SebastianSoteloZuniga/tarea2'),
    ('Tarea 3 - Hosting VPS y la Nube', 'https://github.com/SebastianSoteloZuniga/tarea3')
  `);

  console.log("Base de datos lista");
}

app.get("/tareas", (req, res) => {
  const resultado = db.exec("SELECT * FROM tareas");
  const filas = resultado[0].values.map(fila => ({
    id: fila[0],
    titulo: fila[1],
    url: fila[2]
  }));
  res.json(filas);
});

iniciarBD().then(() => {
  app.listen(3000, () => console.log("Servidor en http://localhost:3000"));
});
