require('dotenv').config()
const { Sequelize } = require("sequelize");

const { DB_DATABASE, DB_USER, DB_PASSWORD, DB_HOST, DB_DIALECT, DB_PORT } =
  process.env;

console.log(DB_DATABASE);

const sequelize = new Sequelize(
  `${DB_DATABASE}`,
  `${DB_USER}`,
  `${DB_PASSWORD}`,
  {
    host: `${DB_HOST}`,
    port: `${DB_PORT}`,
    dialect: `${DB_DIALECT}`,
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;
