const { DataTypes, UUIDV4 } = require("sequelize");
const db = require("../db");

const EquipmentType = db.sequelize.define("EquipmentType", {
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
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
    allowNull: false,
  },
});

module.exports = EquipmentType;

const Equipment = require('./Equipment')

Equipment.hasOne(EquipmentType, { foreignKey: "ETypeID", sourceKey: "id" });
EquipmentType.hasMany(Equipment, { foreignKey: "Equipments", sourceKey: "id" });