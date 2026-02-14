
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateLoveWhisper = async (theme: string = "浪漫"): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `写一句非常短且极度温馨甜蜜的情话，主题是"${theme}"，适合送给女朋友，背景是2026年的情人节。字数在30字以内。`,
      config: {
        temperature: 0.9,
      }
    });
    return response.text || "在这个2026年的情人节，我只想陪在你身边，从日出到日落。";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "爱不需要太多言语，只想在2026年的这一天，抱紧你。";
  }
};
