import express from "express";
import fetch from "node-fetch";

const app = express();
app.use(express.json());

const BOT_TOKEN = "8090674737:AAHTSv7F6raUtAhf4wqRLAzx0iWHESFv_lA"; // তোমার bot token
const CHAT_ID = "-1002799933037"; // তোমার chat/group ID
const SECRET_KEY = "Mun6678AS@#dW8MDF"; // Chrome Extension থেকে যা পাঠাবে

app.post("/send-message", async (req, res) => {
  const { text, secretKey } = req.body;

  if (secretKey !== SECRET_KEY) {
    return res.status(403).json({ ok: false, error: "Unauthorized" });
  }

  try {
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: CHAT_ID, text })
    });

    const result = await response.json();
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false, error: "Server error" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
