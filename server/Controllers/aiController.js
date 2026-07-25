const ai = require("../config/gemini");

const chatWithPatient = async (req, res) => {
  try {
    const { patient, question, history } = req.body;
    if (!patient) {
      return res.status(400).json({
        success: false,
        message: "Patient data not received.",
      });
    }

    const conversation = history
      .map((msg) => `${msg.sender}: ${msg.text}`)
      .join("\n");


    const prompt = `
You are roleplaying as a patient.

Patient Details:
Name: ${patient.name}
Age: ${patient.age}
Gender: ${patient.gender}
Chief Complaint: ${patient.chiefcomplaint}
History: ${patient.history}

Conversation so far:
${conversation}

Doctor's latest question:
${question}

Instructions:
- Reply only as the patient.
- Stay consistent with your previous answers.
- Never reveal the diagnosis.
- Keep your reply short (1-3 sentences).
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


const startConversation = async (req, res) => {
  try {
    const { patient } = req.body;

    const prompt = `
You are roleplaying as a patient.

Patient Details:
Name: ${patient.name}
Age: ${patient.age}
Gender: ${patient.gender}
Chief Complaint: ${patient.chiefComplaint}
History: ${patient.history}

Introduce yourself naturally as a patient who has just entered the emergency department.
Speak in 1-2 short sentences.
Do not mention any diagnosis.
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
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  chatWithPatient,
  startConversation,
};