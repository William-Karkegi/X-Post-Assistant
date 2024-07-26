import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateOpenAIPosts(topic, searchResults, count) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are a helpful assistant that generates concise and engaging X posts based on recent information.",
        },
        {
          role: "user",
          content: `Based on the following recent information about "${topic}", generate ${count} unique X posts. Each post should be concise, engaging, and no longer than 280 characters. Separate each post with a line break. Make sure the posts are diverse and cover different aspects of the information provided.\n\nRecent information: ${searchResults}`,
        },
      ],
      max_tokens: 280,
      temperature: 0.8,
    });

    return response.choices[0].message.content
      .trim()
      .split("\n")
      .filter((line) => line.trim().length > 10);
  } catch (error) {
    console.error("Error calling OpenAI API:", error);
    throw error;
  }
}
