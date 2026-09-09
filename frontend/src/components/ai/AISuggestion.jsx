// ===============================================
// PBODY FULLSTACK ACADEMY
// AI SUGGESTION
// ===============================================

import Logo from "../../assets/images/logo.png";

import "../../styles/aiAssistant.css";


// ===============================================
// AI SUGGESTION COMPONENT
// ===============================================

export default function AISuggestion({
  text,
  onClick,
  disabled = false,
  active = false
}) {

  if (!text) {
    return null;
  }


  return (

    <button
      type="button"
      className={`ai-suggestion ${active ? "active" : ""}`}
      onClick={() => onClick?.(text)}
      disabled={disabled}
    >

      <span className="ai-suggestion-logo">

        <img
          src={Logo}
          alt="PBody FullStack Academy"
        />

      </span>


      <span className="ai-suggestion-text">
        {text}
      </span>

    </button>

  );

}