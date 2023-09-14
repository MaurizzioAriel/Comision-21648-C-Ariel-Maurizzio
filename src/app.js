//inicializamos el servidor
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const morgan = require("morgan");
const path = require("node:path");
const cors = require("cors");
const { TestConnection, port } = require("./database/db");
const indexRouter = require("./routes/index.routes");
const foroRoutes = require("./routes/foro.routes");

const app = express();

const PORT = process.env.PORT || 3000;

//MIDDLEWARES
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

//establece la ruta de la carpeta estatica para los archivos css y js publicos
app.use(express.static(path.join(__dirname, "public")));

//motor de vistas de ejs
app.set("view engine", "ejs");

//establece la carpeta views para que encuentre dinamicamente
app.set("views", path.join(__dirname, "views"));

// console.log(__dirname, "views");
TestConnection();

app.use(indexRouter);
app.use(foroRoutes);

app.listen(PORT, () => {
  console.log(`Servidor funcionando en el puerto ${PORT}`);
});
