//inicializamos el servidor
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");
const { TestConnection, port } = require("./database/db");
const indexRouter = require("./routes/index.routes");
const foroRoutes = require("./routes/foro.routes");

const app = express();

//MIDDLEWARES
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("tiny"));
app.use(cors());

//establecemos la ruta de la carpeta estatica para los archivos css y js publicos
app.set(express.static(path.join(__dirname, "public")));

//motor de vistas de ejs
app.set("view engine", "ejs");

//establecemos la carpeta views para que encuentre dinamicamente
app.set("views", path.join(__dirname, "views"));

// console.log(__dirname, "views");
TestConnection();

app.use(indexRouter);
app.use(foroRoutes);

app.listen(port, () => {
  console.log(`Servidor funcionando en el puerto ${port}`);
});
