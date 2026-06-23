const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// =====================
// MIDDLEWARE
// =====================
app.use(cors());
app.use(express.json());

// =====================
// ROUTES
// =====================
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

// =====================
// TEST ROUTE
// =====================
app.get("/", (req, res) => {
  res.send("API is running...");
});

// =====================
// DATABASE CONNECTION
// =====================
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");

    // =====================
    // START SERVER
    // =====================
    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`✅ Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("❌ MongoDB connection error:", err.message);
  });