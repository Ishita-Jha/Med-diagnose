const { GoogleGenAI } = require("@google/genai");
require("dotenv").config();

console.log("API Key:", process.env.GEMINI_API_KEY.slice(0,10));

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function test() {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: "Say hello",
    });

    console.log(response.text);
  } catch (err) {
    console.error(err);
  }
}

test();