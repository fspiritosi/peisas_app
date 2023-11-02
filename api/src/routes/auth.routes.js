const express = require("express");
const authController = require("../controllers/authController");
const { createUser } = require("../controllers/userController");

const router = express.Router();

router.post("/register", createUser);
router.post("/login", authController.login);
router.post("/forget-password", authController.forgetPassword);
router.post("/reset-password", authController.resetPassword);
router.get("/validateToken", authController.checkValidToken);

module.exports = router;
