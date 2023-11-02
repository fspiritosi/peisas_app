const { DataTypes, UUIDV4 } = require("sequelize");
const db = require("../db");

const Tool = db.sequelize.define("Tool", {
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
});


module.exports = Tool;

const User = require('./User'); // Importa el modelo de User después de definir Tool

User.hasMany(Tool, { foreignKey: "UserId", sourceKey: "id" }); // Un usuario puede tener muchas herramientas
Tool.belongsTo(User, { foreignKey: "UserId", sourceKey: "id" }); // Una herramienta pertenece a un usuario
