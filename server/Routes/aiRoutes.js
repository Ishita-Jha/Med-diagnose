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
  generateTestResult,
} = require("../Controllers/aiController");

router.post("/generate-patient", generatePatient);
router.post("/start", startConversation);
router.post("/chat", chatWithPatient);
router.post("/generate-test", generateTestResult);

module.exports = router;