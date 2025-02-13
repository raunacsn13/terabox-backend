const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// ✅ Default Route (Fix "Cannot GET /" Issue)
app.get("/", (req, res) => {
    res.send("Backend is Live! Terabox API is Running 🚀");
});

// 📌 Route to Process Terabox URL
app.get("/download", async (req, res) => {
    const { url } = req.query;
    if (!url) return res.status(400).json({ error: "URL is
