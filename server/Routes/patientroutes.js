const express = require("express");
const router = express.Router();

const { generatePatient } = require("../Controllers/patientController");

router.get("/generate", generatePatient);

module.exports = router;