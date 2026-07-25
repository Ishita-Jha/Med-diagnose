const express = require("express");
const router = express.Router();

const { chatWithPatient } = require("../Controllers/aiController");

router.post("/chat", chatWithPatient);

module.exports = router;