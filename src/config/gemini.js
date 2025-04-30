import { GoogleGenAI } from "@google/genai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

const ai = new GoogleGenAI({ apiKey });

async function main(prompt) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-1.5-pro",
      contents: [{ role: "user", parts: [{ text: prompt }] }],
    });
    
    return response.text;
  } catch (error) {
    console.error("Error in Gemini API call:", error);
    throw error;
  }
}

export default main;