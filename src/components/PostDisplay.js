import { useState } from "react";

export default function PostDisplay({ posts }) {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {posts.map((post, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 flex flex-col"
        >
          <div className="p-4 flex-grow">
            <p className="text-gray-800 text-sm mb-2">{post}</p>
          </div>
          <div className="p-4 mt-auto">
            <button
              onClick={() => copyToClipboard(post, index)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded text-xs w-full"
            >
              {copiedIndex === index ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
