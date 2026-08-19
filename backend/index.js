// ======================================================
// PBODY FULLSTACK ACADEMY
// PRODUCTION BACKEND
// ======================================================

require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const aiRoutes = require("./routes/aiRoutes");


// ======================================================
// APP
// ======================================================

const app = express();


// ======================================================
// CONFIG
// ======================================================

const PORT = process.env.PORT || 5000;

const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:3001",
  "https://pbodyfullstackacademy.netlify.app",
  "https://pbodyvibezai.netlify.app"
];


// ======================================================
// CORS
// ======================================================

app.use(
  cors({
    origin: function (origin, callback) {

      // Server-to-server / Postman / health checks
      if (!origin) {
        return callback(null, true);
      }

      // Exact allowed origins
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      // Netlify preview/deployment domains
      if (
        origin.endsWith(".netlify.app") &&
        origin.toLowerCase().includes("pbody")
      ) {
        return callback(null, true);
      }

      console.log("CORS BLOCKED:", origin);

      return callback(
        new Error("Not allowed by CORS")
      );
    },

    credentials: true,

    methods: [
      "GET",
      "POST",
      "PUT",
      "PATCH",
      "DELETE",
      "OPTIONS"
    ],

    allowedHeaders: [
      "Content-Type",
      "Authorization"
    ]
  })
);


// ======================================================
// BODY PARSER
// ======================================================

app.use(express.json());

app.use(express.urlencoded({
  extended: true
}));


// ======================================================
// HEALTH ROUTES
// ======================================================

app.get("/", (req, res) => {

  res.status(200).json({
    success: true,
    message: "PBody Academy Backend Running"
  });

});


app.get("/api", (req, res) => {

  res.status(200).json({
    success: true,
    message: "PBody API Online",
    version: "1.0.0"
  });

});


app.get("/api/health", (req, res) => {

  res.status(200).json({
    success: true,
    server: "online",
    database:
      mongoose.connection.readyState === 1
        ? "connected"
        : "disconnected"
  });

});


// ======================================================
// API ROUTES
// ======================================================

app.use("/api/auth", authRoutes);

app.use("/api/payments", paymentRoutes);

app.use("/api/ai", aiRoutes);


// ======================================================
// 404
// ======================================================

app.use((req, res) => {

  res.status(404).json({
    success: false,
    message: "API route not found",
    path: req.originalUrl
  });

});


// ======================================================
// ERROR HANDLER
// ======================================================

app.use((error, req, res, next) => {

  console.error(
    "SERVER ERROR:",
    error.message
  );

  if (error.message === "Not allowed by CORS") {

    return res.status(403).json({
      success: false,
      message: "CORS origin not allowed"
    });

  }

  return res.status(500).json({
    success: false,
    message: "Internal server error"
  });

});


// ======================================================
// DATABASE + SERVER
// ======================================================

async function startServer() {

  try {

    if (!process.env.MONGO_URI) {

      throw new Error(
        "MONGO_URI is missing"
      );

    }

    if (!process.env.JWT_SECRET) {

      throw new Error(
        "JWT_SECRET is missing"
      );

    }


    console.log("Connecting to MongoDB...");


    await mongoose.connect(
      process.env.MONGO_URI,
      {
        serverSelectionTimeoutMS: 10000
      }
    );


    console.log(
      "MongoDB Connected"
    );


    app.listen(PORT, () => {

      console.log(
        `PBody Academy Backend running on port ${PORT}`
      );

    });

  }

  catch (error) {

    console.error(
      "MongoDB / Server startup error:",
      error.message
    );

    process.exit(1);

  }

}


startServer();


// ======================================================
// PROCESS ERRORS
// ======================================================

process.on(
  "unhandledRejection",
  (error) => {

    console.error(
      "UNHANDLED REJECTION:",
      error
    );

  }
);


process.on(
  "uncaughtException",
  (error) => {

    console.error(
      "UNCAUGHT EXCEPTION:",
      error
    );

    process.exit(1);

  }
);