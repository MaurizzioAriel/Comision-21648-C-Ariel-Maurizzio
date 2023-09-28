const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/db");
const dataTypes = require("sequelize/lib/data-types");

const Foro = sequelize.define(
  "Foro",
  {
    // Model attributes are defined here
    Titulo: {
      type: DataTypes.STRING,
    },
    Texto: {
      type: DataTypes.STRING,
      // allowNull defaults to trues
    },Imagen: {
      type: DataTypes.STRING,
      // allowNull defaults to trues
    },
    createdAt:{
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);

// `sequelize.define` also returns the model
console.log(Foro === sequelize.models.Foro); // true
Foro.sync();
module.exports = Foro;

