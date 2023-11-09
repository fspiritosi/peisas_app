const Equipment = require("../models/Equipment");
const User = require("../models/User");

const getAllEquipment = async (req, res) => {
  try {
    const equipment = await Tool.findAll();
    res.json(equipment);
  } catch (error) {
    console.error("Error al obtener herramientas:", error);
    res.status(500).json({ error: "Error al obtener herramientas" });
  }
};

const createEquipment = async (req, res) => {
  const { name, UserId } = req.body;

  try {
    // Verificar si el usuario asociado a la herramienta existe
    const user = await User.findByPk(UserId);
    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    // Crear la herramienta y asociarla al usuario
    const equipment = await Equipment.create({ name, UserId });

    res.status(201).json(equipment);
  } catch (error) {
    console.error("Error al crear herramienta:", error);
    res.status(500).json({ error: "Error al crear herramienta" });
  }
};

module.exports = { getAllEquipment, createEquipment };
