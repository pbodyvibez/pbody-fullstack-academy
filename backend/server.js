require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const paymentRoutes = require("./routes/paymentRoutes");

const app = express();

// =====================
// MIDDLEWARE
// =====================

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://pbodyvibezai.netlify.app",
    ],
    credentials: true,
  })
);

app.use(express.json());

// =====================
// ROUTES
// =====================

app.use("/api/payments", paymentRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "PBody FullStack Academy Backend Running 🚀",
  });
});

// =====================
// PORT
// =====================

const PORT = process.env.PORT || 5000;

// =====================
// DATABASE + SERVER
// =====================

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");

    app.listen(PORT, () => {
      console.log(`🚀 Backend running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ Database connection failed");
    console.error(error);
    process.exit(1);
  });