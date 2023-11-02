const bcrypt = require("bcryptjs");

const generateHash = async (password) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
  } catch (error) {
    throw new Error("Error al generar el hash de la contraseña");
  }
};

module.exports = generateHash;
