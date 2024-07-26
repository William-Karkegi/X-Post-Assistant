import { getPostHistory } from "../../utils/postHistory";

export default function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const history = getPostHistory();
  res.status(200).json({ history });
}
