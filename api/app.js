const express = require("express");
const db = require("./src/db.js");
const userRoutes = require("./src/routes/user.routes");
const toolRoutes = require("./src/routes/tool.routes");
const authRoutes = require("./src/routes/auth.routes");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/users", userRoutes);
app.use("/tools", toolRoutes);
app.use("/auth", authRoutes);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

const PORT = process.env.PORT || 3001;

db.sequelize
  .sync({alter: true})
  .then(() => {
    console.log("Base de datos sincronizada. Iniciando el servidor...");
    app.listen(PORT, () => {
      console.log(`Servidor escuchando en el puerto ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error al sincronizar la base de datos:", error);
  });