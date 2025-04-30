import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyDcnhtoBZ557Od7oIdDVCZHRFQL7ZDX0z4" });

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