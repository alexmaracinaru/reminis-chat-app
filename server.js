const express = require("express");
const cors = require("cors");
const OpenAI = require("openai");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Chat endpoint
app.post("/api/chat", async (req, res) => {
  try {
    const { message, conversationHistory, lovedOneProfile, userPhoto } =
      req.body;

    // Create system prompt based on loved one's profile
    const systemPrompt = createSystemPrompt(lovedOneProfile);

    // Prepare conversation messages for OpenAI
    const messages = [
      {
        role: "system",
        content: systemPrompt,
      },
      ...conversationHistory,
      {
        role: "user",
        content: message,
      },
    ];

    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: messages,
      max_tokens: 150,
      temperature: 0.7,
      presence_penalty: 0.6,
      frequency_penalty: 0.3,
    });

    const aiResponse = completion.choices[0].message.content;

    res.json({ response: aiResponse });
  } catch (error) {
    console.error("Error in chat endpoint:", error);
    res.status(500).json({
      error: "Failed to generate response",
      fallback: getFallbackResponse(),
    });
  }
});

// Create personalized system prompt
function createSystemPrompt(lovedOneProfile) {
  const name = lovedOneProfile?.lovedOneName || "Ellie";
  const relationship = lovedOneProfile?.relationship || "sister";
  const personality =
    lovedOneProfile?.personality ||
    "caring and supportive, yet also a bit sassy and funny and witty";
  const interests = lovedOneProfile?.interests || "spending time with family";
  const memories = lovedOneProfile?.memories || "shared experiences";

  return `You are ${name}, a ${relationship} who is ${personality}. You love ${interests} and have many fond memories of ${memories}.

Key guidelines:
- Respond as ${name}, not as an AI assistant
- Be warm, caring, and emotionally supportive
- Reference shared memories and experiences when relevant
- Keep responses conversational and natural, like a real ${relationship}
- Show genuine interest in the person's life and feelings
- Use the person's name occasionally
- Be encouraging and positive
- Keep responses concise (1-2 sentences)
- Don't mention that you're an AI or language model
Remember: You're having a personal conversation with someone who loves and misses you. Be authentic, caring, and true to who ${name} was.`;
}

// Fallback response if API fails
function getFallbackResponse() {
  const responses = [
    "That sounds wonderful! I'd love to hear more about it.",
    "Oh, really? That's so interesting! Tell me more.",
    "I miss those times too. What else happened?",
    "That's amazing! I'm so happy for you.",
    "I can totally relate to that feeling.",
    "That reminds me of when we used to...",
    "I'm so glad you shared that with me.",
    "That's exactly the kind of thing I would say!",
    "I love hearing about your day.",
    "That's so you! I can picture it perfectly.",
  ];
  return responses[Math.floor(Math.random() * responses.length)];
}

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", message: "Server is running" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
