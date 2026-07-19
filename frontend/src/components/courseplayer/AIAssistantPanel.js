import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AIAssistantPanel({ lesson }) {

  const navigate = useNavigate();

  const [question, setQuestion] = useState("");

  return (

    <div
      style={{
        marginTop: "35px",
        background: "#13253c",
        borderRadius: "18px",
        padding: "25px",
        color: "white"
      }}
    >

      <h2>🤖 AI Engineering Mentor</h2>

      <p style={{ color: "#cbd5e1" }}>

        Ask anything about this lesson.

      </p>

      <textarea

        value={question}

        onChange={(e) => setQuestion(e.target.value)}

        placeholder={`Example:
Explain "${lesson?.title}"
Give me examples
Create an assignment
Summarize this lesson`}

        style={{
          width: "100%",
          height: "140px",
          marginTop: "15px",
          padding: "15px",
          borderRadius: "12px",
          border: "none",
          resize: "none",
          background: "#0b1727",
          color: "white"
        }}

      />

      <div
        style={{
          display: "flex",
          gap: "15px",
          marginTop: "20px",
          flexWrap: "wrap"
        }}
      >

        <button

          onClick={() =>
            navigate("/ai", {
              state: {
                lesson,
                prompt: question
              }
            })
          }

          style={{
            padding: "14px 24px",
            background: "#3ea6ff",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer"
          }}

        >

          Ask AI

        </button>

        <button

          style={{
            padding: "14px 24px",
            background: "#22c55e",
            color: "white",
            border: "none",
            borderRadius: "10px"
          }}

        >

          Explain Like I'm 5

        </button>

        <button

          style={{
            padding: "14px 24px",
            background: "#8b5cf6",
            color: "white",
            border: "none",
            borderRadius: "10px"
          }}

        >

          Generate Assignment

        </button>

      </div>

    </div>

  );

}