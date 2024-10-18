import { GoogleGenerativeAI } from "@google/generative-ai";
import env from "./env.js";

const gemini_api_key = env.API_KEY;
console.log("API_KEY", gemini_api_key);

const googleAI = new GoogleGenerativeAI(gemini_api_key);
const geminiConfig = {
  temperature: 0.4,
  topP: 1,
  topK: 32,
  maxOutputTokens: 4096,
};
export const geminiModel = googleAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    geminiConfig,
  });