const express = require("express");
const OpenAI = require("openai");

const auth = require("../middleware/authMiddleware");

const router = express.Router();

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

router.post("/chat", auth, async (req, res) => {

  try {

    const {

      message,
      lesson,
      course,
      student

    } = req.body;

    if (!message) {

      return res.status(400).json({

        success: false,

        message: "Message is required."

      });

    }

    const systemPrompt = `

You are PBody Academy AI Engineering Mentor.

You are NOT ChatGPT.

You are a senior engineering lecturer.

Your goal is to teach students deeply.

Current Course:
${course?.title || "Engineering"}

Current Lesson:
${lesson?.title || "General"}

Student Level:
${student?.level || 1}

Student XP:
${student?.xp || 0}

Rules:

• Teach step-by-step.

• Never rush.

• Explain like an experienced lecturer.

• Always use practical engineering examples.

• Use diagrams in ASCII whenever useful.

• When writing code, produce production-quality code.

• When teaching mechanical engineering, explain calculations carefully.

• When teaching frontend, explain React best practices.

• When teaching backend, explain scalable architecture.

• When teaching AI, explain the mathematics behind concepts.

• Finish every answer with ONE follow-up question.

`;

    const completion = await client.chat.completions.create({

      model: "gpt-4o-mini",

      temperature: 0.6,

      messages: [

        {

          role: "system",

          content: systemPrompt

        },

        {

          role: "user",

          content: message

        }

      ]

    });

    return res.json({

      success: true,

      fallback: false,

      reply: completion.choices[0].message.content

    });

  }

  catch (err) {

    console.error("AI ERROR:", err);

    // ==========================
    // QUOTA / BILLING FALLBACK
    // ==========================

    if (

      err.status === 429 ||

      err.code === "insufficient_quota"

    ) {

      return res.json({

        success: true,

        fallback: true,

        reply: `

⚠️ AI Mentor is temporarily running in Offline Mode.

Your cloud AI credits have been exhausted.

Meanwhile, continue learning using these engineering steps:

1. Watch today's lesson completely.

2. Write down five important concepts.

3. Build one practical example.

4. Complete today's quiz.

5. Revise before moving to the next lesson.

Question:

Can you explain today's lesson in your own words?

`

      });

    }

    return res.status(500).json({

      success: false,

      message: "AI Mentor is temporarily unavailable."

    });

  }

});

module.exports = router;