
const express = require("express");
const router = express.Router();

const {
  chatWithPatient,
  startConversation,
  generatePatient,
  generateTestResult,
  generateSummary,
  evaluateCase,
} = require("../Controllers/aiController");

router.post("/generate-patient", generatePatient);
router.post("/start", startConversation);
router.post("/chat", chatWithPatient);
router.post("/generate-test", generateTestResult);
router.post("/generate-summary", generateSummary);
router.post("/evaluate-case", evaluateCase);

module.exports = router;