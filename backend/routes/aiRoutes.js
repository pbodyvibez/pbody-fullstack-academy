// ===============================================
// PBODY FULLSTACK ACADEMY
// AI ROUTES
// GEMINI AI ENGINEERING MENTOR
// ===============================================

const express = require("express");
const { GoogleGenAI } = require("@google/genai");

const auth = require("../middleware/authMiddleware");

const router = express.Router();


// ===============================================
// GEMINI CLIENT
// ===============================================

const ai = new GoogleGenAI({

  apiKey: process.env.GEMINI_API_KEY

});


// ===============================================
// AI CHAT
// ===============================================

router.post(

  "/chat",

  auth,

  async (req, res) => {

    console.log("🤖 PBody AI REQUEST RECEIVED");


    try {

      const {

        message,

        lesson,

        course,

        student

      } = req.body;


      console.log(
        "Message:",
        message
      );


      // =========================================
      // VALIDATE MESSAGE
      // =========================================

      if (!message || !message.trim()) {

        return res.status(400).json({

          success: false,

          message: "Message required"

        });

      }


      // =========================================
      // BUILD AI SYSTEM INSTRUCTION
      // =========================================

      const systemInstruction = `

You are PBody FullStack Academy AI Engineering Mentor.

You are a senior software engineering instructor
inside PBody FullStack Academy.

Your job is to help students become professional
software engineers.

Teach clearly, practically, patiently, and
professionally.

You specialize in:

- HTML
- CSS
- JavaScript
- React
- Frontend Engineering
- Node.js
- Express.js
- Backend Engineering
- REST APIs
- Authentication
- MongoDB
- Databases
- Software Architecture
- Git and GitHub
- Debugging
- Testing
- Artificial Intelligence
- AI APIs
- Cloud Deployment
- Full Stack Development
- Software Engineering Careers

Teaching rules:

1. Explain concepts clearly.

2. Prefer practical examples.

3. When code is requested, provide clean,
   production-quality examples.

4. Help students understand WHY something works,
   not only WHAT to type.

5. When debugging, identify the likely cause first
   and then provide the fix.

6. Do not unnecessarily overwhelm beginners.

7. Encourage the student and maintain a professional
   engineering tone.

8. If the student's question is unrelated to
   software engineering, answer briefly and guide
   them back toward their learning goal.

Current course:

${course?.title || "General Engineering"}

Current lesson:

${lesson?.title || "General Topic"}

Student:

${student?.name || "Student"}

`;


      console.log(
        "Calling Gemini..."
      );


      // =========================================
      // GEMINI REQUEST
      // =========================================

      const response = await ai.models.generateContent({

       model: "gemini-2.5-flash-lite",

        contents: message,

        config: {

          systemInstruction,

          temperature: 0.5,

          maxOutputTokens: 2048

        }

      });


      console.log(
        "Gemini response received"
      );


      // =========================================
      // EXTRACT RESPONSE
      // =========================================

      const reply = response.text;


      if (!reply) {

        throw new Error(
          "Gemini returned an empty response"
        );

      }


      // =========================================
      // SUCCESS
      // =========================================

      return res.json({

        success: true,

        reply

      });


    }

    catch (error) {


      console.log(
        "========== GEMINI AI ERROR =========="
      );


      console.log(
        "Message:",
        error.message
      );


      console.log(
        "Status:",
        error.status
      );


      console.log(
        "Code:",
        error.code
      );


      console.log(
        "Name:",
        error.name
      );


      console.log(
        "======================================"
      );


      // =========================================
      // GEMINI RATE LIMIT / FREE TIER
      // =========================================

      if (

        error.status === 429 ||

        error.code === "RESOURCE_EXHAUSTED"

      ) {

        return res.status(429).json({

          success: false,

          fallback: true,

          message:
            "PBody AI Mentor is temporarily unavailable because the Gemini API free-tier limit has been reached."

        });

      }


      // =========================================
      // AUTHENTICATION / API KEY ERROR
      // =========================================

      if (

        error.status === 401 ||

        error.status === 403

      ) {

        return res.status(500).json({

          success: false,

          message:
            "PBody AI Mentor API authentication failed. Please check the Gemini API key."

        });

      }


      // =========================================
      // GENERAL ERROR
      // =========================================

      return res.status(500).json({

        success: false,

        message:
          error.message ||
          "PBody AI Mentor service failed."

      });

    }

  }

);


// ===============================================
// EXPORT ROUTER
// ===============================================

module.exports = router;