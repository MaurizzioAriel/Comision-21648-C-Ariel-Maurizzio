const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/db");

const Foro = sequelize.define(
  "Foro",
  {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      // allowNull defaults to trues
    },
  },
  {
    timestamps: true,
  }
);

// `sequelize.define` also returns the model
console.log(Foro === sequelize.models.Foro); // true
module.exports = Foro;
