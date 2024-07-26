import { generateOpenAIPosts } from "../../utils/openaiApi";
import { searchTopicInfo } from "../../utils/perplexityApi";
import { addToPostHistory } from "../../utils/postHistory";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { topic } = req.body;

  try {
    // First, use Perplexity to search for recent information about the topic
    const searchResults = await searchTopicInfo(topic);

    // Then, use OpenAI to generate posts based on the search results
    const posts = await generateOpenAIPosts(topic, searchResults, 8);

    // Save the generated posts to history
    addToPostHistory(topic, posts);

    res.status(200).json({ posts });
  } catch (error) {
    console.error("Error generating posts:", error);
    res.status(500).json({ message: "Error generating posts", error: error.message });
  }
}
