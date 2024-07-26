import fs from "fs";
import path from "path";

const historyFile = path.join(process.cwd(), "data", "postHistory.json");

export function getPostHistory() {
  if (!fs.existsSync(historyFile)) {
    return [];
  }
  const rawData = fs.readFileSync(historyFile, "utf8");
  return JSON.parse(rawData);
}

export function addToPostHistory(topic, posts) {
  const history = getPostHistory();
  history.unshift({
    id: Date.now(),
    timestamp: new Date().toISOString(),
    topic,
    posts,
  });

  // Keep only the last 10 entries
  const updatedHistory = history.slice(0, 10);

  // Ensure the data directory exists
  const dataDir = path.dirname(historyFile);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  fs.writeFileSync(historyFile, JSON.stringify(updatedHistory, null, 2));
}
