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
  userRole: {
    type: DataTypes.ENUM("admin", "user"),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;

const Equipment = require("./Equipment"); // Importa el modelo de Tool después de definir User
const Task = require("./Task");

User.hasMany(Equipment, { foreignKey: "UserId", sourceKey: "id" }); // Un usuario puede tener muchas herramientas
Equipment.belongsTo(User, { foreignKey: "UserId", sourceKey: "id" }); // Una herramienta pertenece a un usuario


