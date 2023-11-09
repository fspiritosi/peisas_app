require('dotenv').config()
const fs = require("fs");
const path = require("path");
const { Sequelize } = require("sequelize");


const { DB_DATABASE, DB_USER, DB_PASSWORD, DB_HOST, DB_DIALECT, DB_PORT } =
  process.env;
  
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



console.log(DB_DATABASE);




const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


module.exports =  db
