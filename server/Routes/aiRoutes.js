
const express = require("express");
const router = express.Router();

const {
  chatWithPatient,
  startConversation,
  generatePatient,
  generateTestResult,
  generateSummary,
} = require("../Controllers/aiController");

router.post("/generate-patient", generatePatient);
router.post("/start", startConversation);
router.post("/chat", chatWithPatient);
router.post("/generate-test", generateTestResult);
router.post("/generate-summary", generateSummary);

module.exports = router;