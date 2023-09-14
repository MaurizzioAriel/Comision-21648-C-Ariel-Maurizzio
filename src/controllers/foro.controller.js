const Foro = require("../models/foro.models");
const controllerForos = {};

//TODO: INDEX USER
// controllerUsers.indexUsers = (req, res) => {
//   res.render("user", { titleuser: "Usuarios" });
// };
//TODO: GETALL
controllerForos.getAllForos = async (req, res) => {
  const foros = await Foro.findAll();

  res.render("foro", { titleForos: "Foros", results: foros });
};

//TODO: GET
// controllerUsers.getUserById = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const user = await User.findOne({ where: { id: id } });
//     if (!user) {
//       return res.status(400).send({
//         message: "Usuario no encontrado en la base de datos",
//       });
//     } else {
//       return res.send(user);
//     }
//   } catch (error) {}
// };

//TODO: POST: PAGINA DE INICIO
controllerForos.formCreateForo = (req, res) => {
  res.render("createForo", { titleCreateForo: "Nuevo Post" });
};

//PARA CREAR EL FORO
controllerForos.postForos = async (req, res) => {
  const { firstName, email } = req.body;

  //validacion para los datos del body
  if (!firstName || !email)
    return res.status(400).send({
      message: "Por favor ingresar los datos del nombre y apellido del usuario",
    });
  //manejamos el error con trycatch
  try {
    const foro = {
      firstName: firstName,
      email: email,
    };
    if (!foro) {
      return res
        .status(409)
        .send({ message: "Usuario ya existe en la base de datos" });
    } else {
      const newForo = await Foro.create(foro);
      return res.redirect("/foro");
      //res.send({ message: "Usuario creado con exito" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

//TODO: PUT PAGINA PARA EDITAR USUARIO
controllerForos.formEditForo = async (req, res) => {
  const { id } = req.params;
  const foro = await Foro.findOne({ where: { id: id } });
  console.log(foro);
  res.render("editForo", {
    titleEditForo: "Editar Post",
    foro: foro,
  });
};

controllerForos.putForo = async (req, res) => {
  const { firstName, email, id } = req.body;
  //validación de que no mande el dato del nombre para actualizar
  if (!firstName || !email) {
    return res.status(404).send({
      message:
        "Es necesario que el parametro firstName o LastName tenga información para actualizar",
    });
  }
  const updateForo = Foro.update(
    {
      firstName: firstName,
      email: email,
    },
    { where: { id: id } }
  );
  return res.redirect("/foro");
  //res.send({ message: "Usuario editado con exito" });
};

//TODO:DELETE

controllerForos.deleteForo = (req, res) => {
  const { id } = req.params;
  const deleteForo = Foro.destroy({ where: { id: id } });
  //validacion para saber si ya existe o no en la bd
  if (deleteForo) {
    return res.redirect("/foro");
    // res
    //   .status(200)
    //   .send({ message: "Usuario eliminado de la base de datos" });
  } else {
    // return res
    //   .status(400)
    //   .send({ message: "Usuario no existe en la base de datos" })
  }
};

module.exports = { controllerForos };
