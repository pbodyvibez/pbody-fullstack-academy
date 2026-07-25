// ===============================================
// PBODY FULLSTACK ACADEMY
// AI ROUTES
// ===============================================

const express = require("express");
const OpenAI = require("openai");

const auth = require("../middleware/authMiddleware");

const router = express.Router();


// ===============================================
// OPENAI CLIENT
// ===============================================

const client = new OpenAI({

  apiKey: process.env.OPENAI_API_KEY,

  timeout: 30000

});




// ===============================================
// AI CHAT
// ===============================================

router.post(
  "/chat",
  auth,
  async (req, res) => {


    console.log("🤖 AI REQUEST RECEIVED");


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



      if(!message){


        return res.status(400).json({

          success:false,

          message:"Message required"

        });


      }




      console.log(
        "Calling OpenAI..."
      );




      const completion = await client.chat.completions.create({

        model:"gpt-4o-mini",


        temperature:0.5,


        messages:[


          {


            role:"system",


            content:`

You are PBody FullStack Academy AI Engineering Mentor.

You are a senior software engineering instructor.

Teach students clearly with practical examples.

Help with:

- Frontend development
- Backend development
- Databases
- APIs
- Artificial Intelligence
- Software architecture
- Debugging
- Career growth

Always encourage learning.

Current course:

${course?.title || "General Engineering"}

Current lesson:

${lesson?.title || "General Topic"}

Student:

${student?.name || "Student"}

`

          },


          {


            role:"user",


            content:message


          }


        ]


      });




      console.log(
        "OpenAI response received"
      );




      return res.json({

        success:true,

        reply:
        completion.choices[0].message.content


      });



    }

    catch(error){


      console.log(
        "========== AI ERROR =========="
      );


      console.log(
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
        "=============================="
      );




      if(

        error.status === 429 ||

        error.code === "insufficient_quota"

      ){


        return res.json({

          success:true,

          fallback:true,

          reply:
          "⚠️ AI Mentor is temporarily unavailable because AI credits need renewal."

        });


      }




      return res.status(500).json({

        success:false,

        message:
        error.message || "AI service failed"

      });



    }


  }

);



module.exports = router;