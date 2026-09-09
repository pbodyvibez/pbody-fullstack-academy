// ===============================================
// PBODY FULLSTACK ACADEMY
// OPENAI AI ENGINEERING MENTOR
// ===============================================

const express = require("express");
const OpenAI = require("openai");

const auth = require("../middleware/authMiddleware");

const router = express.Router();


// ===============================================
// OPENAI CLIENT
// ===============================================

const openai = new OpenAI({

  apiKey: process.env.OPENAI_API_KEY

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

      if (
        !message ||
        typeof message !== "string" ||
        !message.trim()
      ) {

        return res.status(400).json({

          success: false,

          message: "Message required"

        });

      }


      // =========================================
      // VALIDATE OPENAI KEY
      // =========================================

      if (!process.env.OPENAI_API_KEY) {

        console.error(
          "OPENAI_API_KEY is missing"
        );

        return res.status(500).json({

          success: false,

          message:
            "PBody AI is not configured on the server."

        });

      }


      // =========================================
      // AI SYSTEM INSTRUCTION
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


      // =========================================
      // OPENAI REQUEST
      // =========================================

      console.log(
        "Calling OpenAI..."
      );


      const response =
        await openai.responses.create({

          model:
            process.env.OPENAI_AI_MODEL ||
            "gpt-5.6-luna",

          instructions:
            systemInstruction,

          input:
            message.trim(),

          max_output_tokens:
            2048

        });


      console.log(
        "OpenAI response received"
      );


      // =========================================
      // EXTRACT RESPONSE
      // =========================================

      const reply =
        response.output_text;


      if (
        !reply ||
        !reply.trim()
      ) {

        throw new Error(
          "OpenAI returned an empty response"
        );

      }


      // =========================================
      // SUCCESS
      // =========================================

      return res.json({

        success: true,

        reply:
          reply.trim()

      });

    }

    catch (error) {

      console.error(
        "========== OPENAI AI ERROR =========="
      );

      console.error(
        "Message:",
        error.message
      );

      console.error(
        "Status:",
        error.status
      );

      console.error(
        "Code:",
        error.code
      );

      console.error(
        "Name:",
        error.name
      );

      console.error(
        "======================================"
      );


      // =========================================
      // RATE LIMIT / BILLING / QUOTA
      // =========================================

      if (

        error.status === 429 ||

        error.code === "insufficient_quota" ||

        error.code === "rate_limit_exceeded"

      ) {

        return res.status(429).json({

          success: false,

          fallback: true,

          message:
            "PBody AI is temporarily unavailable because the OpenAI API usage limit or billing limit has been reached."

        });

      }


      // =========================================
      // AUTHENTICATION
      // =========================================

      if (

        error.status === 401 ||

        error.code === "invalid_api_key"

      ) {

        return res.status(500).json({

          success: false,

          message:
            "PBody AI authentication failed. Please check the OpenAI API key."

        });

      }


      // =========================================
      // PERMISSION
      // =========================================

      if (
        error.status === 403
      ) {

        return res.status(500).json({

          success: false,

          message:
            "PBody AI access was denied by OpenAI. Please check the API project and permissions."

        });

      }


      // =========================================
      // GENERAL ERROR
      // =========================================

      return res.status(500).json({

        success: false,

        message:
          error.message ||
          "PBody AI service failed."

      });

    }

  }

);


// ===============================================
// EXPORT ROUTER
// ===============================================

module.exports = router;