// const chatWithPatient = async (req, res) => {
//   const { question } = req.body;

//   res.json({
//     success: true,
//     reply: `Patient heard: "${question}"`
//   });
// };

// module.exports = { chatWithPatient };
const ai = require("../config/gemini");

const testAI = async (req, res) => {
  try {

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: "Say hello to Med-Diagnose.",
    });

    res.json({
      success: true,
      message: response.text,
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
  testAI,
};