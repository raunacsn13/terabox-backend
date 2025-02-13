const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Route to process Terabox URL
app.get("/download", async (req, res) => {
    const { url } = req.query;
    if (!url) return res.status(400).json({ error: "URL is required" });

    // Dummy Link (Original Terabox Link Process करना होगा)
    const downloadLink = `https://fake-terabox-downloader.com?video=${encodeURIComponent(url)}`;

    res.json({ success: true, watch: url, download: downloadLink });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
