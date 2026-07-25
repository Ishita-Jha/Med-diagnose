const ai = require("../config/gemini");

const testAI = async (req, res) => {
  try {
    const response = await ai.models.generateContent({
      model: "models/gemini-flash-latest",
      contents: "Say hello",
    });

    res.json(response);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      status: error.status,
      message: error.message,
      details: error,
    });
  }
};

module.exports = { testAI };