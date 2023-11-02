require('dotenv').config()
const  User  = require("../models/User");
const generateHash = require("../utils/hash.js");
const isValidEmail = require("../utils/isValidEmail");
const  jwt = require('jsonwebtoken');
const cookie = require("cookie");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    res.status(500).json({ error: "Error al obtener usuarios" });
  }
};

const createUser = async (req, res) => {
  const { name, lastname, email, password, confirmPassword } = req.body;
  try {
    //validar que esten todos los datos
    if (!name || !lastname || !email || !password || !confirmPassword)
      return res.status(400).json({ error: "Faltan datos" });
    //validar que el email sea valido
    if (!isValidEmail(email))
      return res.status(400).json({ error: "Email no valido" });
    //validar que las contraseñas coincidan
    if (password !== confirmPassword)
      return res.status(400).json({ error: "Las contraseñas no coinciden" });

    //validar que no exista el usuario
    const userFind = await User.findOne({ where: { email } });
    if (userFind)
      return res.status(400).json({ error: "El usuario ya existe" });

    // Generar un hash para la contraseña antes de almacenarla
    const hashedPassword = await generateHash(password);

    // Crear el nuevo usuario con la contraseña cifrada
    const user = await User.create({
      name,
      lastname,
      email,
      password: hashedPassword, // Almacena el hash de la contraseña en la base de datos
    });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET,{expiresIn: 86400});
    
    const newUser = { ...user.dataValues, token };
    
    


   res.setHeader(
     "Set-Cookie",
     cookie.serialize("auth_cookie",token, {
       secure: process.env.NODE_ENV === "production",
       sameSite: "lax",
       maxAge: 86400,
       path: "/",
     })
   );

    return res.status(201).json({newUser, message:'Usuario creado de manera exitosa'});

    
  } catch (error) {
    console.error("Error al crear usuario:", error);
    res.status(500).json({ error: "Error al crear usuario" });
  }
};

module.exports = { getAllUsers, createUser };
