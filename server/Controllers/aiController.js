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

    const conversation = (history || [])
      .map((msg) => `${msg.sender}: ${msg.text}`)
      .join("\n");


    const prompt = `
You are roleplaying as a patient.

Patient Details:
Name: ${patient.name}
Age: ${patient.age}
Gender: ${patient.gender}
Chief Complaint: ${patient.chiefComplaint}
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
      model: "gemini-3-flash-preview",
      contents: prompt,
    });

    res.json({
      success: true,
      reply: response.text,
    });

  }
  catch (error) {
    console.log("CHAT ERROR:");
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
      model: "gemini-3-flash-preview",
      contents: prompt,
    });

    res.json({
      success: true,
      reply: response.text,
    });
  }
  catch (error) {
    console.log("START CONVERSATION ERROR:");
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const generatePatient = async (req, res) => {
  try {
    const prompt = `
Generate ONE realistic emergency department patient.

Return ONLY valid JSON.

{
  "name": "",
  "age": 0,
  "gender": "",
  "chiefComplaint": "",
  "history": "",
  "diagnosis": "",
  "vitals": {
    "bp": "",
    "hr": "",
    "rr": "",
    "temp": "",
    "spo2": ""
  }
}

Rules:
- Age between 18 and 80
- Random gender
- Common emergency complaint
- Realistic medical history
- Hidden diagnosis
- Do not include markdown
- Return JSON only
`;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });

    const patient = JSON.parse(response.text);

    res.json({
      success: true,
      patient,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const generateTestResult = async (req, res) => {
  try {

    const { patient, tests } = req.body;

    const prompt = `
You are a hospital laboratory.

Patient Details:
Name: ${patient.name}
Age: ${patient.age}
Gender: ${patient.gender}

Chief Complaint:
${patient.chiefComplaint}

Medical History:
${patient.history}

Hidden Diagnosis:
${patient.diagnosis}

Ordered Tests:
${tests.join(", ")}

Generate realistic reports ONLY for the ordered tests.

Return ONLY valid JSON.

Example:

{
  "reports":[
    {
      "test":"ECG",
      "result":"Sinus tachycardia..."
    },
    {
      "test":"Troponin-I",
      "result":"Positive"
    }
  ]
}

Do not reveal the diagnosis.
`;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });

    // const reports = JSON.parse(response.text);
    console.log("Gemini Response:");
    // console.log(response.text);

    // const reports = JSON.parse(response.text);

    // res.json(reports);
    let text = response.text;

    text = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    console.log("Gemini Response:");
    console.log(text);

    const reports = JSON.parse(text);

    res.json(reports);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

const generateSummary = async (req, res) => {
  try {

    const { patient, tests, reports } = req.body;

    const prompt = `
You are an experienced physician.

Create a concise case summary.

Patient:
Name: ${patient.name}
Age: ${patient.age}
Gender: ${patient.gender}

Chief Complaint:
${patient.chiefComplaint}

History:
${patient.history}

Ordered Tests:
${tests.join(", ")}

Laboratory Reports:
${JSON.stringify(reports)}

Return ONLY valid JSON.

{
  "summary": {
    "patientInfo": "...",
    "symptoms": "...",
    "testsOrdered": "...",
    "labFindings": "...",
  }
}
`;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });

    let text = response.text;

    // Remove ```json and ```
    text = text.replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const result = JSON.parse(text);

    res.json(result);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

const evaluateCase = async (req, res) => {
  try {

    const {
      patient,
      reports,
      diagnosis,
      treatment,
      confidence
    } = req.body;

    const prompt = `
You are an experienced emergency physician.

True Diagnosis:
${patient.diagnosis}

Student Diagnosis:
${diagnosis}

Student Treatment:
${treatment}

Confidence:
${confidence}

Laboratory Reports:
${JSON.stringify(reports)}

Evaluate the student's performance.

Return ONLY valid JSON.

{
  "score": 0,
  "diagnosisCorrect": true,
  "feedback": "",
  "strengths": "",
  "mistakes": "",
  "idealDiagnosis": "",
  "idealTreatment": ""
}
`;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });

    let text = response.text;

    text = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const result = JSON.parse(text);

    res.json(result);

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
  startConversation,
  generatePatient,
  generateTestResult,
  generateSummary,
  evaluateCase,
};