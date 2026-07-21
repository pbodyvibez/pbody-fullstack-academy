require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const aiRoutes = require("./routes/aiRoutes");

const app = express();


// =====================================
// MIDDLEWARE
// =====================================

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://pbodyfullstackacademy.netlify.app",
      "https://pbodyvibezai.netlify.app"
    ],
    credentials: true
  })
);

app.use(express.json());


// =====================================
// HEALTH CHECK
// =====================================

app.get("/", (req, res) => {

  res.json({

    success: true,

    message: "PBody Backend Online 🚀"

  });

});


// =====================================
// ROUTES
// =====================================

app.use(
  "/api/auth",
  authRoutes
);

app.use(
  "/api/payments",
  paymentRoutes
);

app.use(
  "/api/ai",
  aiRoutes
);


// =====================================
// DATABASE
// =====================================

mongoose.connect(process.env.MONGO_URI)

.then(() => {

  console.log("✅ MongoDB Connected");

  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => {

    console.log(`🚀 Backend running on port ${PORT}`);

  });

})

.catch((error) => {

  console.log("MongoDB ERROR:", error.message);

});