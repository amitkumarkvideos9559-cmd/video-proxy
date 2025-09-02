import express from "express";
import fetch from "node-fetch";

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Proxy API Endpoint
app.get("/api", async (req, res) => {
  try {
    const url = req.query.url; // user input from Blogger
    if (!url) {
      return res.status(400).json({ error: "❌ No URL provided" });
    }

    // Example external API (आप यहां कोई भी API लगा सकते हो)
    const apiUrl = `https://convert2mp3s.com/api/widgetv2?url=${encodeURIComponent(
      url
    )}`;

    const response = await fetch(apiUrl);
    const data = await response.text(); // कुछ APIs JSON में नहीं, HTML/iframe में देती हैं

    res.send(data);
  } catch (err) {
    res.status(500).json({ error: "Proxy Error", details: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Proxy running on port ${PORT}`);
});
