// ======================================================
// PBODY FULLSTACK ACADEMY
// PRODUCTION BACKEND SERVER
// SINGLE ENTRY POINT
// ======================================================

require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// ======================================================
// ROUTES
// ======================================================

const authRoutes = require("./routes/authRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const aiRoutes = require("./routes/aiRoutes");
const progressRoutes = require("./routes/progress");
const quizRoutes = require("./routes/quiz");
const subscriptionRoutes = require("./routes/subscriptionRoutes");

// ======================================================
// APP
// ======================================================

const app = express();

// ======================================================
// PORT
// ======================================================

const PORT = process.env.PORT || 5000;

// ======================================================
// MONGOOSE DATABASE SETTINGS
// ======================================================

mongoose.set("bufferCommands", false);

// ======================================================
// ALLOWED FRONTEND ORIGINS
// ======================================================

const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:3001",
  "http://localhost:3002",

  // Capacitor Android WebView
  "https://localhost",

  // Production frontend
  "https://pbodyfullstackacademy.netlify.app"
];

// ======================================================
// CORS
// ======================================================

app.use(
  cors({
    origin: function (origin, callback) {

      // Allow server-to-server / Postman requests
      if (!origin) {
        return callback(null, true);
      }

      // Exact allowed origins
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      // PBody Netlify previews
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
      "Origin",
      "X-Requested-With",
      "Content-Type",
      "Accept",
      "Authorization"
    ]
  })
);

// ======================================================
// EXPLICIT CORS PREFLIGHT
// ======================================================

app.options(/.*/, cors());

// ======================================================
// BODY PARSER
// ======================================================

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true
  })
);

// ======================================================
// HEALTH CHECK
// ======================================================

app.get("/", (req, res) => {

  res.status(200).json({
    success: true,
    message: "PBody Backend Online 🚀",
    status: "healthy"
  });

});

// ======================================================
// API HEALTH CHECK
// ======================================================

app.get("/api", (req, res) => {

  res.status(200).json({
    success: true,
    message: "PBody API Online 🚀",
    version: "1.0.0"
  });

});

// ======================================================
// API ROUTES
// ======================================================

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

app.use(
  "/api/progress",
  progressRoutes
);

app.use(
  "/api/quiz",
  quizRoutes
);

app.use(
  "/api/subscriptions",
  subscriptionRoutes
);

// ======================================================
// 404 HANDLER
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

  res.status(500).json({
    success: false,
    message: "Internal server error"
  });

});

// ======================================================
// MONGODB + SERVER START
// ======================================================

async function startServer() {

  try {

    console.log(
      "Connecting to MongoDB..."
    );

    if (!process.env.MONGO_URI) {

      throw new Error(
        "MONGO_URI is missing"
      );

    }

    await mongoose.connect(
      process.env.MONGO_URI,
      {
        serverSelectionTimeoutMS: 10000,
        connectTimeoutMS: 10000,
        socketTimeoutMS: 20000
      }
    );

    console.log(
      "✅ MongoDB Connected"
    );

    console.log(
      "MongoDB readyState:",
      mongoose.connection.readyState
    );

    app.listen(
      PORT,
      "0.0.0.0",
      () => {

        console.log(
          `🚀 Backend running on port ${PORT}`
        );

      }
    );

  }

  catch (error) {

    console.error(
      "MongoDB / Server startup error:",
      error.message
    );

    process.exit(1);

  }

}

// ======================================================
// MONGODB CONNECTION EVENTS
// ======================================================

mongoose.connection.on(
  "connected",
  () => {

    console.log(
      "📡 MongoDB connection established"
    );

  }
);

mongoose.connection.on(
  "disconnected",
  () => {

    console.log(
      "⚠️ MongoDB disconnected"
    );

  }
);

mongoose.connection.on(
  "error",
  (error) => {

    console.error(
      "❌ MongoDB connection error:",
      error.message
    );

  }
);

// ======================================================
// GRACEFUL SHUTDOWN
// ======================================================

async function shutdown(signal) {

  console.log(
    `${signal} received. Shutting down...`
  );

  try {

    await mongoose.connection.close();

    console.log(
      "MongoDB connection closed."
    );

    process.exit(0);

  }

  catch (error) {

    console.error(
      "Shutdown error:",
      error.message
    );

    process.exit(1);

  }

}

process.on(
  "SIGTERM",
  () => shutdown("SIGTERM")
);

process.on(
  "SIGINT",
  () => shutdown("SIGINT")
);

// ======================================================
// START
// ======================================================

startServer();