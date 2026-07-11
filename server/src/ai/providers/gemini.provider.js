const OpenAI = require("openai");

const client = new OpenAI({
    apiKey: process.env.OPENROUTER_API_KEY,
    baseURL: "https://openrouter.ai/api/v1",
    defaultHeaders: {
        "HTTP-Referer": "http://localhost:3000",
        "X-Title": "AI Coding Mentor",
    },
});

const generateContent = async (prompt) => {

    const response = await client.chat.completions.create({
        model: process.env.OPENROUTER_MODEL,
        messages: [
            {
                role: "user",
                content: prompt,
            },
        ],
        temperature: 0,
    });

    return response.choices[0].message.content;
};

module.exports = {
    generateContent,
};

/* 
const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const generateContent = async (prompt) => {
  const response = await ai.models.generateContent({
    model: process.env.GEMINI_MODEL,
    contents: prompt,
  });

  return response.text;
};

module.exports = {
  generateContent,
};

*/