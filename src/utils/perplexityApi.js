import axios from "axios";

const PERPLEXITY_API_URL = "https://api.perplexity.ai/chat/completions";

export async function searchTopicInfo(topic) {
  try {
    const response = await axios.post(
      PERPLEXITY_API_URL,
      {
        model: "llama-3-sonar-large-32k-online",
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant that provides concise, factual summaries of recent information.",
          },
          {
            role: "user",
            content: `Provide a brief summary of the most recent and relevant information about "${topic}". Focus on facts and current events. Keep it concise.`,
          },
        ],
        max_tokens: 300,
        temperature: 0.2,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.PERPLEXITY_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.choices[0].message.content.trim();
  } catch (error) {
    console.error("Error calling Perplexity API:", error.response ? error.response.data : error.message);
    throw error;
  }
}
