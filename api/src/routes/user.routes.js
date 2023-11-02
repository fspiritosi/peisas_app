const express = require("express");
const router = express.Router();
const { getAllUsers, createUser } = require("../controllers/userController");

router.get("/", getAllUsers);


module.exports = router;
