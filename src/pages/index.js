import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import TopicInput from "../components/TopicInput";
import PostDisplay from "../components/PostDisplay";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [history, setHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const response = await fetch("/api/get-history");
      const data = await response.json();
      setHistory(data.history);
    } catch (error) {
      console.error("Error fetching history:", error);
    }
  };

  const generatePosts = async (topic) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/generate-posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic }),
      });
      const data = await response.json();
      setPosts(data.posts);
      fetchHistory(); // Refresh history after generating new posts
    } catch (error) {
      console.error("Error generating posts:", error);
    }
    setIsLoading(false);
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">X Post Generator</h1>
        <p className="text-xl text-center text-gray-600 mb-8">Generate engaging X posts about any topic using AI</p>
        <TopicInput onGenerate={generatePosts} isLoading={isLoading} />
        {posts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Generated Posts</h2>
            <PostDisplay posts={posts} />
          </div>
        )}
        {history.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Post History</h2>
            {history.map((entry) => (
              <div key={entry.id} className="mb-6 p-4 bg-white rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">{entry.topic}</h3>
                <p className="text-sm text-gray-500 mb-2">{new Date(entry.timestamp).toLocaleString()}</p>
                <ul className="list-disc pl-5">
                  {entry.posts.map((post, index) => (
                    <li key={index} className="mb-1 flex items-center justify-between">
                      <span>{post}</span>
                      <button
                        onClick={() => navigator.clipboard.writeText(post)}
                        className="ml-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded text-xs"
                      >
                        Copy
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}
