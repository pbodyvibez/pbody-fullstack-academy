// ======================================================
// PBODY FULLSTACK ACADEMY
// PRODUCTION BACKEND SERVER
// SINGLE ENTRY POINT
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
// PORT
// ======================================================

const PORT = process.env.PORT || 5000;


// ======================================================
// ALLOWED FRONTEND ORIGINS
// ======================================================

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

    origin: function(origin, callback) {

      // Allow Postman/server-to-server requests
      if (!origin) {

        return callback(null, true);

      }


      // Exact origins
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

    credentials: true

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

app.use("/api/auth", authRoutes);

app.use("/api/payments", paymentRoutes);

app.use("/api/ai", aiRoutes);


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

    console.log("Connecting to MongoDB...");


    if (!process.env.MONGO_URI) {

      throw new Error(

        "MONGO_URI is missing"

      );

    }


    await mongoose.connect(

      process.env.MONGO_URI

    );


    console.log("✅ MongoDB Connected");


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
// START
// ======================================================

startServer();