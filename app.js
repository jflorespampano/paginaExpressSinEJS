const express = require("express");
// const router = express.Router()
const routerTipoPartes = require('./src/routes/partes.router.js')
const path = require("path");

const PORT = process.env.PORT || 3000;
const app = express();

// Static files
app.use(express.static(path.join(process.cwd(), 'public')));
// Middleware JSON
app.use(express.json());
// Middleware urlencode
app.use(express.urlencoded({ extended: true }));
//rutas
app.use('/tipoPartes', routerTipoPartes);

app.get("/", (_, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get("/grid", (_, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index-grid.html'));
});

// Middlewares
app.use((req, res, next) => {
  res.status(404).render("pagina no encontrada");
});


/**
 * Arrancando nuestro servidor con Express
 */
app.listen(PORT, () => {
  console.log(`App listening at  http://localhost:${PORT}`);
});
