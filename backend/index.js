require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const aiRoutes = require("./routes/aiRoutes");

const app = express();

app.use(
  cors({
    origin: [
      process.env.CLIENT_URL,
      "http://localhost:3000",
      "https://pbodyvibezai.netlify.app",
      "https://pbodyfullstackacademy.netlify.app",
    ],
    credentials: true,
  })
);

app.use(express.json());

app.get("/", (req,res)=>{

res.json({

success:true,

message:"PBody Academy Backend Running 🚀"

});

});


app.get("/api", (req,res)=>{

res.json({

success:true,

message:"PBody API Online 🚀",

version:"1.0.0"

});

});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/ai", aiRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Mongo Error:", error.message);
  });