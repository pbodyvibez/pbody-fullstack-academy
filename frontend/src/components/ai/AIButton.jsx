// ===============================================
// PBODY FULLSTACK ACADEMY
// AI BUTTON
// ===============================================

import useAI from "../../ai/useAI";

import "../../styles/aiAssistant.css";


// ===============================================
// AI BUTTON COMPONENT
// ===============================================

export default function AIButton({
  label = "AI Mentor",
  className = ""
}) {

  const {
    isOpen,
    toggleChat
  } = useAI();


  return (

    <button
      type="button"
      className={`ai-button ${className}`.trim()}
      onClick={toggleChat}
      aria-label={
        isOpen
          ? "Close PBody AI Mentor"
          : "Open PBody AI Mentor"
      }
      aria-expanded={isOpen}
    >

      <span
        className="ai-button-icon"
        aria-hidden="true"
      >
        🤖
      </span>

      <span className="ai-button-label">
        {isOpen ? "Close Mentor" : label}
      </span>

    </button>

  );

}