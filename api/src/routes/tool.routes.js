const express = require("express");
const router = express.Router();
const { getAllTools, createTool } = require("../controllers/toolController");

router.get("/", getAllTools);
router.post("/", createTool);

module.exports = router;
