const express = require("express");
const OpenAI = require("openai");

const auth = require("../middleware/authMiddleware");


const router = express.Router();



const client = new OpenAI({

apiKey:process.env.OPENAI_API_KEY,

timeout:30000

});






router.post("/chat",auth,async(req,res)=>{


try{


const {

message,

lesson,

course,

student

}=req.body;





if(!message){


return res.status(400).json({

success:false,

message:"Message required"

});


}







const completion =
await client.chat.completions.create({


model:"gpt-4o-mini",


temperature:0.5,


messages:[


{

role:"system",

content:`

You are PBody FullStack Academy AI Engineering Mentor.

You teach like a senior software engineering instructor.

Explain concepts clearly.

Use practical examples.

Help with:

Frontend engineering.

Backend engineering.

Databases.

AI.

Architecture.

Career growth.

Always finish with one useful question.

Current course:

${course?.title || "General Engineering"}

Current lesson:

${lesson?.title || "General"}

`

},


{

role:"user",

content:message

}


]


});







return res.json({

success:true,

reply:

completion.choices[0].message.content


});





}

catch (error) {

  console.log("========== OPENAI ERROR ==========");
  console.log("Status:", error.status);
  console.log("Code:", error.code);
  console.log("Message:", error.message);

  if (error.response) {
    console.log("Response:", error.response.data);
  }

  console.log("=================================");

  if (
    error.status === 429 ||
    error.code === "insufficient_quota"
  ) {
    return res.json({
      success: true,
      fallback: true,
      reply:
        "⚠️ AI Mentor is temporarily unavailable because AI credits need renewal."
    });
  }

  return res.status(500).json({
    success: false,
    message: error.message
  });

}


});







module.exports = router;