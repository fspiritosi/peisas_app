const { DataTypes, UUIDV4 } = require("sequelize");
const db = require("../db");


const Equipment = db.sequelize.define("Equipment", {
  id: {
    type: DataTypes.UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  interNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  fabricationNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  document:{
    type: DataTypes.ARRAY(DataTypes.STRING),
  },
  images:{
    type: DataTypes.ARRAY(DataTypes.STRING),
  },
  isActive:{
    type: DataTypes.BOOLEAN,
    defaultValue: true,
    allowNull: false,
  }

});


module.exports = Equipment;

const User = require('./User'); // Importa el modelo de User después de definir Tool
const EquipmentType = require('./EquipmentType')

User.hasMany(Equipment, { foreignKey: "UserId", sourceKey: "id" }); // Un usuario puede tener muchas herramientas
Equipment.belongsTo(User, { foreignKey: "UserId", sourceKey: "id" }); // Una herramienta pertenece a un usuario
Equipment.hasOne(EquipmentType, { foreignKey: "ETypeID", sourceKey: "id" });
EquipmentType.hasMany(Equipment, { foreignKey: "Equipments", sourceKey: "id" });