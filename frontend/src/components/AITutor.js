import { useState } from "react";

function AITutor() {

  const [question, setQuestion] = useState("");

  const [answer, setAnswer] = useState(
    "Hello 👋 I am PBody AI Tutor. Ask me anything about programming."
  );

  const askAI = () => {

    if(question.trim() === ""){

      setAnswer("Please type a question.");

      return;

    }

    setAnswer(

      "You asked:\n\n" +

      question +

      "\n\nThis is where OpenAI API or your backend AI response will appear."

    );

  };



  return(

    <div

      style={{

        maxWidth:"900px",

        margin:"50px auto",

        background:"#1e293b",

        padding:"40px",

        borderRadius:"25px",

        color:"white"

      }}

    >

      <h1

        style={{

          textAlign:"center",

          fontSize:"50px"

        }}

      >

        🤖 PBody AI Tutor

      </h1>



      <p

        style={{

          textAlign:"center",

          color:"#cbd5e1",

          fontSize:"20px"

        }}

      >

        Ask coding questions and get instant answers.

      </p>



      <textarea

        placeholder="Example: Explain React Hooks"

        value={question}

        onChange={(e)=>setQuestion(e.target.value)}

        style={{

          width:"100%",

          height:"150px",

          marginTop:"30px",

          padding:"20px",

          fontSize:"18px",

          borderRadius:"15px",

          outline:"none",

          resize:"none"

        }}

      />




      <button

        onClick={askAI}

        style={{

          marginTop:"20px",

          padding:"15px 40px",

          fontSize:"20px",

          background:"#2563eb",

          color:"white",

          border:"none",

          borderRadius:"15px",

          cursor:"pointer"

        }}

      >

        Ask AI

      </button>




      <div

        style={{

          marginTop:"40px",

          background:"#0f172a",

          padding:"30px",

          borderRadius:"20px",

          whiteSpace:"pre-line",

          fontSize:"20px",

          lineHeight:"35px"

        }}

      >

        {answer}

      </div>

    </div>

  );

}

export default AITutor;