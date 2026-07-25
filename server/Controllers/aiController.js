const ai = require("../config/gemini");

const chatWithPatient = async (req, res) => {
  try {
    const { patient, question } = req.body;

    const prompt = `
You are roleplaying as a patient.

Patient Details:
Name: ${patient.name}
Age: ${patient.age}
Chief Complaint: ${patient.complaint}

The doctor asks:
"${question}"

Instructions:
- Reply ONLY as the patient.
- Keep your answer short (1-3 sentences).
- Do NOT reveal the diagnosis.
- Answer only what the doctor asked.
`;

    const response = await ai.models.generateContent({
      model: "models/gemini-flash-latest",
      contents: prompt,
    });

    res.json({
      success: true,
      reply: response.text,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  chatWithPatient,
};