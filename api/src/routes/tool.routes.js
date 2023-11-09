const express = require("express");
const router = express.Router();
const { getAllEquipment, createEquipment } = require("../controllers/toolController");

router.get("/", getAllEquipment);
router.post("/", createEquipment);

module.exports = router;
