// const express = require("express");
// const router = express.Router();

// const { chatWithPatient } = require("../Controllers/aiController");

// router.post("/chat", chatWithPatient);

// module.exports = router;
const express = require("express");
const router = express.Router();

const {
  chatWithPatient,
  startConversation,
  generatePatient,
} = require("../Controllers/aiController");

router.post("/generate-patient", generatePatient);
router.post("/start", startConversation);
router.post("/chat", chatWithPatient);

module.exports = router;