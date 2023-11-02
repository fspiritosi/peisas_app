const  Tool  = require("../models/Tool");
const User = require("../models/User");

const getAllTools = async (req, res) => {
  try {
    const tools = await Tool.findAll();
    res.json(tools);
  } catch (error) {
    console.error("Error al obtener herramientas:", error);
    res.status(500).json({ error: "Error al obtener herramientas" });
  }
};

const createTool = async (req, res) => {
  const { name, UserId } = req.body;

  try {
    // Verificar si el usuario asociado a la herramienta existe
    const user = await User.findByPk(UserId);
    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    // Crear la herramienta y asociarla al usuario
    const tool = await Tool.create({ name, UserId });

    res.status(201).json(tool);
  } catch (error) {
    console.error("Error al crear herramienta:", error);
    res.status(500).json({ error: "Error al crear herramienta" });
  }
};

module.exports = { getAllTools, createTool };
