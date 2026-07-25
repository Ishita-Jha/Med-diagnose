const ai = require("../config/gemini");

const testAI = async (req, res) => {
  try {
    // const response = await ai.models.generateContent({
    //   model: "models/gemini-flash-latest",
    //   contents: "Say hello",
    // });

    // res.json(response);
    const response = await ai.models.generateContent({
      model: "models/gemini-flash-latest",
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
      status: error.status,
      message: error.message,
      details: error,
    });
  }
};

module.exports = { testAI };