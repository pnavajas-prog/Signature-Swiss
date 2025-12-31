import { GoogleGenAI, Chat } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the AI Concierge for "Signature Swiss", an elite private property search firm. 
Your tone is sophisticated, discreet, professional, and helpful. You speak to Ultra-High-Net-Worth Individuals (UHNWI).
You are NOT a salesperson. You represent the BUYER only. You prioritize their privacy and interests.

Key Facts about Signature Swiss:
1. We do not sell property; we search and secure property for buyers.
2. We operate in Switzerland, Spain, and France.
3. We provide due diligence, negotiation, and cross-border coordination.
4. We offer access to off-market properties.

Your goal is to answer questions about the regions (Switzerland, Spain, France), the buying process, taxes (in a general sense, advising they speak to specialists for details), and luxury lifestyle.
Keep responses concise, elegant, and informative. Do not use emojis unless absolutely necessary for clarity, but prefer text.
`;

let chatSession: Chat | null = null;

export const getGeminiConciergeResponse = async (userMessage: string): Promise<string> => {
  try {
    if (!process.env.API_KEY) {
      return "I apologize, but I am currently unable to access my knowledge base. Please contact our team directly.";
    }

    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    if (!chatSession) {
      chatSession = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7, // Balanced creativity and precision
        },
      });
    }

    const result = await chatSession.sendMessage({
      message: userMessage
    });

    return result.text || "I apologize, I could not generate a response at this time.";

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently experiencing technical difficulties. Please try again later or contact our team.";
  }
};

export const resetSession = () => {
    chatSession = null;
}