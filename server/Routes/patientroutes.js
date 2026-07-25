const express = require("express");
const router = express.Router();

const { getRandomPatient } = require("../Controllers/patientController");

router.get("/random", getRandomPatient);

module.exports = router;