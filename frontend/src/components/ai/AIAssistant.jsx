// ===============================================
// PBODY FULLSTACK ACADEMY
// AI ASSISTANT INTERFACE
// ===============================================

import { useState } from "react";

import useAI from "../../ai/useAI";
import { useAuth } from "../../context/AuthContext";
import { sendAIMessage as sendAIRequest } from "../../services/aiService";

import "../../styles/aiAssistant.css";


// ===============================================
// AI ASSISTANT COMPONENT
// ===============================================

export default function AIAssistant() {

  const {
    isOpen,
    toggleChat,
    messages,
    sendMessage,
    receiveMessage,
    typing,
    setTyping,
    currentCourse,
    currentLesson
  } = useAI();

  const {
    user,
    token
  } = useAuth();

  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  // ===============================================
  // QUICK SUGGESTIONS
  // ===============================================

  const suggestions = [
    "Explain this lesson",
    "Debug my code",
    "Create practice quiz",
    "Give me a project idea",
    "Give me interview questions"
  ];


  // ===============================================
  // SEND MESSAGE TO REAL AI
  // ===============================================

  async function askAI(text) {

    const cleanText = text?.trim();

    if (!cleanText || typing) {
      return;
    }

    // Add student message to AI state
    sendMessage({
      id: `${Date.now()}-student`,
      sender: "student",
      role: "user",
      text: cleanText
    });

    setInput("");
    setError("");
    setTyping(true);

    try {

      const data = await sendAIRequest({

        message: cleanText,

        lesson: currentLesson || null,

        course: currentCourse || null,

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
          "PBody AI did not return a response."
        );

      }


      // Add real AI response
      receiveMessage({

        id: `${Date.now()}-ai`,

        sender: "ai",

        role: "ai",

        text: data.reply

      });

    } catch (requestError) {

      console.error(
        "PBody AI Assistant Error:",
        requestError
      );


      const message =
        requestError?.response?.data?.message ||
        requestError?.message ||
        "AI Mentor is temporarily unavailable. Please try again.";


      setError(message);


      receiveMessage({

        id: `${Date.now()}-error`,

        sender: "ai",

        role: "ai",

        text:
          "I could not complete that request right now. " +
          "Please try again in a moment."

      });

    } finally {

      setTyping(false);

    }

  }


  // ===============================================
  // HANDLE ENTER
  // ===============================================

  function handleKeyDown(event) {

    if (
      event.key === "Enter" &&
      !event.shiftKey
    ) {

      event.preventDefault();

      askAI(input);

    }

  }


  // ===============================================
  // RENDER
  // ===============================================

  return (

    <>

      {/* =========================================
          FLOATING AI BUTTON
      ========================================= */}

      <button
        type="button"
        className="ai-floating-button"
        onClick={toggleChat}
        aria-label={
          isOpen
            ? "Close PBody AI Mentor"
            : "Open PBody AI Mentor"
        }
      >
        🤖
      </button>


      {/* =========================================
          AI WINDOW
      ========================================= */}

      {isOpen && (

        <div
          className="ai-assistant-window"
          role="dialog"
          aria-label="PBody AI Engineering Mentor"
        >

          {/* HEADER */}

          <div className="ai-header">

            <div>

              <h3>
                PBody AI Mentor
              </h3>

              <small>
                {currentLesson?.title
                  ? `Learning: ${currentLesson.title}`
                  : "Engineering Intelligence"}
              </small>

            </div>

            <span>
              Online
            </span>

          </div>


          {/* MESSAGES */}

          <div className="ai-messages">

            {messages.length === 0 ? (

              <p className="ai-empty">

                Hello Student 👋

                <br />

                I am your PBody AI Engineering Mentor.

                <br />

                Ask me anything about coding,
                lessons, projects, debugging,
                or software engineering.

              </p>

            ) : (

              messages.map((message) => (

                <div
                  key={message.id}
                  className={
                    message.sender === "ai"
                      ? "ai-message"
                      : "student-message"
                  }
                >

                  {message.text}

                </div>

              ))

            )}


            {/* TYPING */}

            {typing && (

              <p className="ai-typing">
                AI Mentor is thinking...
              </p>

            )}

          </div>


          {/* ERROR */}

          {error && (

            <div
              className="ai-error"
              role="alert"
            >
              {error}
            </div>

          )}


          {/* SUGGESTIONS */}

          <div className="ai-suggestions">

            {suggestions.map((item) => (

              <button
                type="button"
                key={item}
                onClick={() => askAI(item)}
                disabled={typing}
              >
                {item}
              </button>

            ))}

          </div>


          {/* FOOTER */}

          <div className="ai-footer">

            <input
              type="text"
              value={input}
              onChange={(event) => {
                setInput(event.target.value);
                setError("");
              }}
              onKeyDown={handleKeyDown}
              disabled={typing}
              placeholder="Ask your AI Mentor..."
              aria-label="Ask your AI Mentor"
            />


            <button
              type="button"
              onClick={() => askAI(input)}
              disabled={typing || !input.trim()}
            >

              {typing
                ? "Thinking..."
                : "Send"}

            </button>

          </div>

        </div>

      )}

    </>

  );

}