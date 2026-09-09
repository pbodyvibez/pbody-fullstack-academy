// ===============================================
// PBODY FULLSTACK ACADEMY
// AI TYPING INDICATOR
// ===============================================

import Logo from "../../assets/images/logo.png";

import "../../styles/aiAssistant.css";


// ===============================================
// AI TYPING COMPONENT
// ===============================================

export default function AITyping() {

  return (

    <div
      className="ai-typing"
      role="status"
      aria-live="polite"
      aria-label="PBody AI Mentor is thinking"
    >

      <div className="ai-typing-logo">

        <img
          src={Logo}
          alt="PBody FullStack Academy"
        />

      </div>


      <div className="ai-typing-content">

        <span className="ai-typing-label">
          PBody AI Mentor is thinking
        </span>


        <span
          className="ai-typing-dots"
          aria-hidden="true"
        >
          <span />
          <span />
          <span />
        </span>

      </div>

    </div>

  );

}