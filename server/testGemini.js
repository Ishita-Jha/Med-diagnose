const { GoogleGenAI } = require("@google/genai");
require("dotenv").config();
console.log("API Key starts with:", process.env.GEMINI_API_KEY?.slice(0, 10));

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function test() {
  try {
    const models = await ai.models.list();

    for (const model of models) {
      console.log(model.name);
    }
  } catch (err) {
    console.error(err);
  }
}

test();