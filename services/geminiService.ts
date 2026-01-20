
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || 'AIzaSyAKZG2968cpUIFR9bOOjqr9YCfuD87rgcE' });

export const generateGameSlogan = async (gameTitle: string): Promise<string> => {
  if (!process.env.API_KEY) return "The ultimate adventure awaits!";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Generate a short, catchy 5-word slogan for a Roblox-style game titled "${gameTitle}".`,
      config: {
        maxOutputTokens: 20,
        temperature: 0.7
      }
    });
    return response.text.trim() || "Join the fun today!";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Experience the magic!";
  }
};
