// ===============================================
// PBODY FULLSTACK ACADEMY
// AI WINDOW
// ===============================================

import AIHeader from "./AIHeader";
import AIMessage from "./AIMessage";
import AITyping from "./AITyping";
import AIInput from "./AIInput";
import AIPromptSuggestions from "./AIPromptSuggestions";

import "../../styles/aiAssistant.css";


// ===============================================
// AI WINDOW COMPONENT
// ===============================================

export default function AIWindow({
  messages = [],
  typing = false,
  loading = false,
  suggestions = [],
  onSend,
  onSuggestion,
  onClose
}) {

  return (

    <section
      className="ai-window"
      role="dialog"
      aria-label="PBody AI Engineering Mentor"
    >

      {/* =========================================
          HEADER
      ========================================= */}

      <AIHeader
        title="PBody AI Mentor"
        subtitle="PBody FullStack Academy Engineering Intelligence"
        online={!loading}
        onClose={onClose}
      />


      {/* =========================================
          MESSAGES
      ========================================= */}

      <div className="ai-window-messages">

        {messages.length === 0 && !typing ? (

          <div className="ai-window-empty">

            <div className="ai-window-empty-logo">

              <img
                src={require("../../assets/images/logo.png")}
                alt="PBody FullStack Academy"
              />

            </div>

            <h4>
              Welcome, Engineer
            </h4>

            <p>
              I am your PBody AI Engineering Mentor.
              Ask me about coding, debugging, lessons,
              projects, architecture, or your developer career.
            </p>

          </div>

        ) : (

          messages.map((message, index) => (

            <AIMessage
              key={
                message?.id ||
                `${message?.sender || "message"}-${index}`
              }
              message={message?.text || ""}
              sender={
                message?.sender ||
                (message?.role === "user"
                  ? "student"
                  : "ai")
              }
            />

          ))

        )}


        {typing && (

          <AITyping />

        )}

      </div>


      {/* =========================================
          SUGGESTIONS
      ========================================= */}

      {!typing && (

        <AIPromptSuggestions
          suggestions={suggestions}
          onSelect={onSuggestion || onSend}
          disabled={loading}
        />

      )}


      {/* =========================================
          INPUT
      ========================================= */}

      <AIInput
        onSend={onSend}
        loading={loading || typing}
      />

    </section>

  );

}