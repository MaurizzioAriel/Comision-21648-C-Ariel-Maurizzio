const foroRoutes = require("express").Router();
const { controllerForos } = require("../controllers/foro.controller");
const Foro = require("../models/foro.models");

//ruta GET INDEX
//userRoutes.get("/user", controllerUsers.indexUsers);

//ruta GET ALL FOROS
foroRoutes.get("/foro", controllerForos.getAllForos);

//ruta GET USER BY ID
// userRoutes.get("/user/:id", controllerUsers.getUserById);

//ruta POST (crear foro)
foroRoutes.get("/createForo", controllerForos.formCreateForo);
foroRoutes.post("/saveForo", controllerForos.postForo);

//ruta PUT (actualizar al foro)
foroRoutes.get("/editForo/:id", controllerForos.formEditForo);
foroRoutes.post("/updateForo", controllerForos.putForo);

//ruta DELETE (eliminar)
foroRoutes.get("/deleteForo/:id", controllerForos.deleteForo);

module.exports = foroRoutes;
