// =====================================================
// PBODY FULLSTACK ACADEMY
// AI ENGINEERING MENTOR
// FULL REPLACEMENT
// =====================================================

import { useLocation } from "react-router-dom";
import { useState } from "react";

import API from "../utils/api";

import { useAuth } from "../context/AuthContext";

import "../styles/aiTutor.css";


export default function AITutor() {

  const location = useLocation();

  const {
    user
  } = useAuth();


  // ===================================================
  // LESSON CONTEXT
  // ===================================================

  const lesson =
    location.state?.lesson || null;

  const defaultPrompt =
    location.state?.prompt || "";


  // ===================================================
  // STATE
  // ===================================================

  const [prompt, setPrompt] =
    useState(defaultPrompt);

  const [loading, setLoading] =
    useState(false);


  const [messages, setMessages] = useState([

    {
      role: "assistant",

      content:

        lesson

          ? `👋 Welcome back!

Current Lesson:

${lesson.title}

Ask me anything about this lesson.`

          : "👋 Hello! I am your AI Engineering Mentor."
    }

  ]);


  // ===================================================
  // SEND MESSAGE
  // ===================================================

  const sendMessage = async () => {

    const message =
      prompt.trim();


    if (!message || loading) {

      return;

    }


    const userMessage = {

      role: "user",

      content: message

    };


    setMessages(prev => [

      ...prev,

      userMessage

    ]);


    setPrompt("");

    setLoading(true);


    try {

      const token =
        localStorage.getItem("token");


      const res = await API.post(

        "/ai/chat",

        {

          message,

          lesson:
            lesson?.title || "",

          course:
            lesson?.category || "",

          student: {

            level:
              user?.level || "",

            xp:
              user?.xp || 0

          }

        },

        {

          headers: {

            Authorization:
              `Bearer ${token}`

          }

        }

      );


      setMessages(prev => [

        ...prev,

        {

          role: "assistant",

          content:
            res.data?.reply ||
            "I received your message, but the AI did not return a response."

        }

      ]);

    }

    catch (err) {

      console.error(
        "AI Mentor error:",
        err
      );


      setMessages(prev => [

        ...prev,

        {

          role: "assistant",

          content:
            "❌ Unable to contact AI Mentor. Please try again."

        }

      ]);

    }

    finally {

      setLoading(false);

    }

  };


  // ===================================================
  // ENTER KEY
  // ===================================================

  const handleKeyDown = (event) => {

    if (
      event.key === "Enter" &&
      !event.shiftKey
    ) {

      event.preventDefault();

      sendMessage();

    }

  };


  // ===================================================
  // RENDER
  // ===================================================

  return (

    <div className="aiTutorPage">


      {/* =================================================
          HEADER
      ================================================= */}

      <div className="chatHeader">

        <h1>

          🤖 AI Engineering Mentor

        </h1>


        {lesson && (

          <p>

            Current Lesson:{" "}

            <strong>

              {lesson.title}

            </strong>

          </p>

        )}

      </div>


      {/* =================================================
          CHAT WINDOW
      ================================================= */}

      <div className="chatWindow">

        {messages.map((msg, index) => (

          <div

            key={`${msg.role}-${index}`}

            className={

              msg.role === "assistant"

                ? "assistantBubble"

                : "userBubble"

            }

          >

            {msg.content}

          </div>

        ))}


        {loading && (

          <div className="assistantBubble">

            Thinking...

          </div>

        )}

      </div>


      {/* =================================================
          INPUT
      ================================================= */}

      <div className="chatInput">

        <textarea

          value={prompt}

          onChange={(event) =>
            setPrompt(event.target.value)
          }

          onKeyDown={handleKeyDown}

          placeholder="Ask your AI Mentor..."

          disabled={loading}

          rows={3}

        />


        <button

          type="button"

          onClick={sendMessage}

          disabled={
            loading ||
            !prompt.trim()
          }

        >

          {loading
            ? "Thinking..."
            : "Send"}

        </button>

      </div>


    </div>

  );

}