import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";
import { SYSTEM_INSTRUCTION } from "../constants";

let client: GoogleGenAI | null = null;

// Initialize the client only if the key is available
try {
    if (process.env.API_KEY) {
        client = new GoogleGenAI({ apiKey: process.env.API_KEY });
    }
} catch (error) {
    console.error("Error initializing Gemini client:", error);
}

export const sendMessageToGemini = async (
  history: ChatMessage[],
  newMessage: string
): Promise<string> => {
  if (!client) {
    return "I'm sorry, my AI brain isn't connected right now (API Key missing). Please check out the static resume content!";
  }

  try {
    // Construct the history for the model
    // We filter out any previous error messages or non-standard roles if necessary
    // Gemini 2.5 Flash is efficient for this.
    
    // Convert our internal ChatMessage format to what the model might expect in a multi-turn chat
    // simpler approach: We use the generateContent with system instruction and the full conversation history as text context 
    // or use the chat API. Let's use the chat API.

    const chatHistory = history.map(msg => ({
      role: msg.role,
      parts: [{ text: msg.text }]
    }));

    const chat = client.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: chatHistory
    });

    const response = await chat.sendMessage({ message: newMessage });
    return response.text || "I didn't catch that. Could you rephrase?";
    
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the server right now. Please try again later.";
  }
};