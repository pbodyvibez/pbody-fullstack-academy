// ===============================================
// PBODY FULLSTACK ACADEMY
// AI MESSAGE
// ===============================================

import Logo from "../../assets/images/logo.png";

import "../../styles/aiAssistant.css";


// ===============================================
// AI MESSAGE COMPONENT
// ===============================================

export default function AIMessage({
  message,
  sender = "ai"
}) {

  const isAI = sender === "ai";


  if (!message) {
    return null;
  }


  return (

    <div
      className={
        isAI
          ? "ai-message"
          : "student-message"
      }
    >

      {/* AI BRAND */}

      {isAI && (

        <div className="ai-message-avatar">

          <img
            src={Logo}
            alt="PBody FullStack Academy"
          />

        </div>

      )}


      <div className="ai-message-content">

        <div className="ai-message-sender">

          {isAI
            ? "PBody AI Mentor"
            : "You"}

        </div>


        <div className="ai-message-text">

          {message}

        </div>

      </div>

    </div>

  );

}