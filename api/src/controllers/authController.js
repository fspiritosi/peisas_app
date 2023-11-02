require('dotenv').config()
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const  User  = require('../models/User');
const cookie = require("cookie");
const {Resend} = require("resend");
const generateHash = require("../utils/hash");



const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET , { expiresIn: 86400 });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if(!email || !password) return res.status(400).json({ error: "Faltan datos" });

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: 'Usuario inexistente' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }
 

    const token = generateToken(user.id);
    const logedUser = {user, token}
    
    res.cookie("myCookie", "fabricio")
    
    res.setHeader(
      "Set-Cookie",
      cookie.serialize(name="auth_cookie",value= token.toString(), {
        //secure: process.env.NODE_ENV === "production",
        secure: true,
        sameSite: "None",
        maxAge: 86400,
        path: "/",
        httpOnly: true
      })
    );

    return res.status(200).json({logedUser, message: 'Usuario Logeado Correctamente'});
  } catch (error) {
    console.error('Error de autenticación:', error);
    res.status(500).json({ error: 'Error de autenticación' });
  }
};

const forgetPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: 'Usuario inexistente' });
    }

    const token = generateToken(user.id);

    const forgetUrl = `http://localhost:8000/auth/reset-password?token=${token}`;

    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Cambiar Contraseña",
      html: "<p>Por favor ingresa al siguiente link para cambiar tu contraseña</p></br><a href='" + forgetUrl + "'>Cambiar Contraseña</a>",
    });

    return res.status(200).json();
  } catch (error) {
    console.error('Error de autenticación:', error);
    res.status(500).json({ error: 'Error de autenticación' });
  }

}

const resetPassword = async (req, res) => {
  const {newPassword, confirmPassword} = req.body;
  const token = req.query.token;
  console.log(token)

  try {
    if (!newPassword || !confirmPassword)
      return res.status(400).json({ error: "Faltan datos" });

    if (!token) return res.status(400).json({ error: "solicitud invalida" });

    try {
      const isTokenValid = jwt.verify(token, process.env.JWT_SECRET);
      
      const user = await User.findByPk(isTokenValid.userId);

      if (!user) return res.status(401).json({ error: "Usuario inexistente" });
      if (newPassword !== confirmPassword)
        return res.status(400).json({ error: "Las contraseñas no coinciden" });

      const hashPassword = await generateHash(newPassword);
      user.password = hashPassword;
      await user.save();
      return res.status(200).json();
    } catch (error) {
      console.error("Error al crear usuario:", error);
      res.status(500).json({ error: "Error token invalido" });
    }
  } catch (error) {
    console.error("Error al crear usuario:", error);
    res.status(500).json({ error: "Error al cambiar contraseña" });
  }
}

const checkValidToken = async (req, res) => {
  const token = req.query.token;
  try {
    if (!token) return res.status(400).json({ error: "no existe un token asociado" });
    try {
      const isTokenValid = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findByPk(isTokenValid.userId);
      if (!user) return res.status(401).json({ error: "Usuario inexistente" });
      return res.status(200).json({isAuthorized: true});
    } catch (error) {
      console.error("Error al crear usuario:", error);
      res.status(500).json({ error: "Error token invalido" });
    }
  }
  catch (error) {
   console.error("Error al validar usuario:", error);
   res.status(500).json({ error: "Error al validar el usuario" });
 }
}

module.exports = { login, forgetPassword, resetPassword, checkValidToken };
