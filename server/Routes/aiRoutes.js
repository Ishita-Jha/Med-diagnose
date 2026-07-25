// const express = require("express");
// const router = express.Router();

// const { chatWithPatient } = require("../Controllers/aiController");

// router.post("/chat", chatWithPatient);

// module.exports = router;
const express = require("express");
const router = express.Router();

const { testAI } = require("../Controllers/aiController");

router.get("/test", testAI);

module.exports = router;