const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// ✅ MongoDB से कनेक्शन
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.error("❌ MongoDB Connection Error:", err));

// ✅ Default Route (Fix "Cannot GET /" Issue)
app.get("/", (req, res) => {
    res.json({ message: "✅ Backend is Live! Terabox API is Running 🚀" });
});

// ✅ Sample Route for Testing
app.get("/test", (req, res) => {
    res.json({ success: true, message: "✅ Test Route Working Fine!" });
});

// ✅ Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
