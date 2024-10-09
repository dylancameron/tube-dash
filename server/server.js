import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const app = express();

// Enable CORS for frontend requests
app.use(cors({ origin: "http://localhost:4000" }));

// Load the API key from environment variables
const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

app.get("/api/playlist", async (req, res) => {
  const { playlistId } = req.query;

  if (!playlistId) {
    return res.status(400).json({ error: "Missing playlistId" });
  }

  try {
    const response = await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems`, {
      params: {
        part: "snippet",
        maxResults: 10,
        playlistId: playlistId,
        key: YOUTUBE_API_KEY
      }
    });

    // Transform the data before sending it to the frontend
    const videoItems = response.data.items.map((item) => ({
      id: item.snippet.resourceId.videoId,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.default.url,
      videoId: item.snippet.resourceId.videoId,
      description: item.snippet.description,
      publishedAt: item.snippet.publishedAt
    }));

    res.json(videoItems); // Send playlist data back to the client
  } catch {
    res.status(500).json({ error: "Failed to fetch playlist" });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
