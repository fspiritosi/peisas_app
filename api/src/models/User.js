const { DataTypes, UUIDV4 } = require("sequelize");
const db = require("../db");

const User = db.sequelize.define("User", {
  id: {
    type: DataTypes.UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;

const Tool = require('./Tool'); // Importa el modelo de Tool después de definir User

User.hasMany(Tool, { foreignKey: "UserId", sourceKey: "id" }); // Un usuario puede tener muchas herramientas
Tool.belongsTo(User, { foreignKey: "UserId", sourceKey: "id" }); // Una herramienta pertenece a un usuario