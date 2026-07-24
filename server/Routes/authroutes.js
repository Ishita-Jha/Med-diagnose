const express = require("express");
const router = express.Router();

const { registerUser } = require("../Controllers/authcontroller");

router.post("/register", registerUser);

module.exports = router;