// ===============================================
// PBODY FULLSTACK ACADEMY
// COURSE PLAYER AI ENGINEERING MENTOR
// ===============================================

import { useState } from "react";

import { useAuth } from "../../context/AuthContext";
import { sendAIMessage } from "../../services/aiService";

export default function AIAssistantPanel({
  lesson,
  course = null
}) {

  const { user, token } = useAuth();

  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ===============================================
  // ASK AI
  // ===============================================

  async function askAI(prompt = question) {

    const cleanPrompt = prompt.trim();

    if (!cleanPrompt || loading) {
      return;
    }

    setLoading(true);
    setError("");
    setResponse("");

    try {

      const data = await sendAIMessage({
        message: cleanPrompt,

        lesson: lesson || null,

        course: course || null,

        student: {
          name: user?.name || "Student",
          level: user?.level || 1,
          xp: user?.xp || 0
        },

        token
      });

      if (!data?.success || !data?.reply) {

        throw new Error(
          data?.message ||
          "No AI response was received."
        );

      }

      setResponse(data.reply);

    } catch (err) {

      console.error(
        "PBody Course Player AI Error:",
        err
      );

      setError(
        err?.response?.data?.message ||
        err?.message ||
        "AI Mentor is temporarily unavailable. Please try again."
      );

    } finally {

      setLoading(false);

    }

  }

  // ===============================================
  // QUICK ACTIONS
  // ===============================================

  function explainSimply() {

    const prompt =
      `Explain "${lesson?.title || "this lesson"}" ` +
      "in very simple terms, using an easy real-world analogy. " +
      "Then give me one short example.";

    setQuestion(prompt);
    askAI(prompt);

  }

  function generateAssignment() {

    const prompt =
      `Create a practical coding assignment based on ` +
      `"${lesson?.title || "this lesson"}". ` +
      "Include the objective, requirements, steps, " +
      "expected outcome, and a professional engineering challenge.";

    setQuestion(prompt);
    askAI(prompt);

  }

  // ===============================================
  // RENDER
  // ===============================================

  return (

    <section
      className="coursePlayerAIPanel"
      style={{
        marginTop: "35px",
        background: "#13253c",
        borderRadius: "18px",
        padding: "25px",
        color: "#ffffff",
        border: "1px solid rgba(62, 166, 255, 0.25)",
        boxShadow: "0 12px 35px rgba(0, 0, 0, 0.25)"
      }}
    >

      {/* HEADER */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "20px",
          flexWrap: "wrap"
        }}
      >

        <div>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "7px 12px",
              borderRadius: "999px",
              background: "rgba(62, 166, 255, 0.12)",
              color: "#60b8ff",
              fontSize: "12px",
              fontWeight: "700",
              letterSpacing: "0.8px",
              marginBottom: "10px"
            }}
          >
            AI ENGINEERING MENTOR
          </div>

          <h2
            style={{
              margin: 0,
              fontSize: "24px",
              fontWeight: "700"
            }}
          >
            🤖 Learn With PBody AI
          </h2>

          <p
            style={{
              marginTop: "8px",
              marginBottom: 0,
              color: "#cbd5e1",
              lineHeight: "1.6"
            }}
          >
            Ask questions, understand difficult concepts,
            debug problems, and practise what you are learning.
          </p>

        </div>

        <div
          style={{
            padding: "8px 13px",
            borderRadius: "999px",
            background: "rgba(34, 197, 94, 0.12)",
            color: "#4ade80",
            fontSize: "12px",
            fontWeight: "700"
          }}
        >
          ● AI ONLINE
        </div>

      </div>


      {/* LESSON CONTEXT */}

      {lesson?.title && (

        <div
          style={{
            marginTop: "20px",
            padding: "13px 15px",
            borderRadius: "10px",
            background: "#0b1727",
            color: "#94a3b8",
            fontSize: "13px"
          }}
        >

          Current lesson:

          <strong
            style={{
              color: "#e2e8f0",
              marginLeft: "6px"
            }}
          >
            {lesson.title}
          </strong>

        </div>

      )}


      {/* INPUT */}

      <textarea

        value={question}

        onChange={(e) => {
          setQuestion(e.target.value);
          setError("");
        }}

        placeholder={`Ask your engineering question...

Example:
Explain "${lesson?.title || "this lesson"}"
Give me a practical example
Help me debug this concept
Create a coding challenge
Summarize the lesson`}

        disabled={loading}

        style={{
          width: "100%",
          minHeight: "140px",
          boxSizing: "border-box",
          marginTop: "18px",
          padding: "16px",
          borderRadius: "12px",
          border: "1px solid rgba(148, 163, 184, 0.18)",
          resize: "vertical",
          background: "#0b1727",
          color: "#ffffff",
          outline: "none",
          fontSize: "15px",
          lineHeight: "1.6",
          fontFamily: "inherit"
        }}

      />


      {/* ERROR */}

      {error && (

        <div
          style={{
            marginTop: "12px",
            padding: "12px 14px",
            borderRadius: "10px",
            background: "rgba(239, 68, 68, 0.10)",
            border: "1px solid rgba(239, 68, 68, 0.25)",
            color: "#fca5a5",
            fontSize: "14px",
            lineHeight: "1.5"
          }}
        >
          {error}
        </div>

      )}


      {/* ACTIONS */}

      <div
        style={{
          display: "flex",
          gap: "12px",
          marginTop: "18px",
          flexWrap: "wrap"
        }}
      >

        <button

          onClick={() => askAI()}

          disabled={loading || !question.trim()}

          style={{
            padding: "13px 22px",
            background:
              loading || !question.trim()
                ? "#31516d"
                : "#3ea6ff",
            color: "#ffffff",
            border: "none",
            borderRadius: "10px",
            cursor:
              loading || !question.trim()
                ? "not-allowed"
                : "pointer",
            fontWeight: "700"
          }}

        >

          {loading
            ? "Analyzing..."
            : "Ask AI"}

        </button>


        <button

          onClick={explainSimply}

          disabled={loading}

          style={{
            padding: "13px 22px",
            background: "#22c55e",
            color: "#ffffff",
            border: "none",
            borderRadius: "10px",
            cursor: loading
              ? "not-allowed"
              : "pointer",
            fontWeight: "700"
            }}

        >

          Explain Simply

        </button>


        <button

          onClick={generateAssignment}

          disabled={loading}

          style={{
            padding: "13px 22px",
            background: "#8b5cf6",
            color: "#ffffff",
            border: "none",
            borderRadius: "10px",
            cursor: loading
              ? "not-allowed"
              : "pointer",
            fontWeight: "700"
          }}

        >

          Generate Assignment

        </button>

      </div>


      {/* AI RESPONSE */}

      {response && (

        <div
          style={{
            marginTop: "22px",
            padding: "20px",
            borderRadius: "14px",
            background: "#0b1727",
            border: "1px solid rgba(62, 166, 255, 0.18)"
          }}
        >

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "12px"
            }}
          >

            <span
              style={{
                width: "34px",
                height: "34px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(62, 166, 255, 0.15)",
                fontSize: "18px"
              }}
            >
              🤖
            </span>

            <strong
              style={{
                color: "#60b8ff"
              }}
            >
              PBody AI Mentor
            </strong>

          </div>


          <div
            style={{
              color: "#e2e8f0",
              lineHeight: "1.75",
              whiteSpace: "pre-wrap",
              fontSize: "15px"
            }}
          >
            {response}
          </div>

        </div>

      )}

    </section>

  );

}