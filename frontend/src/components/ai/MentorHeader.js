// ===============================================
// PBODY FULLSTACK ACADEMY
// AI MENTOR HEADER
// ===============================================

import Logo from "../../assets/images/logo.png";

import "../../styles/aiAssistant.css";


// ===============================================
// MENTOR HEADER
// ===============================================

export default function MentorHeader({
  title = "PBody AI Mentor",
  subtitle = "Your personal Full Stack Engineering Mentor",
  online = true,
  onClose = null
}) {

  return (

    <header className="ai-mentor-header">

      <div className="ai-mentor-header-brand">

        <div className="ai-mentor-header-logo">

          <img
            src={Logo}
            alt="PBody FullStack Academy"
          />

        </div>


        <div className="ai-mentor-header-info">

          <span className="ai-mentor-header-label">
            PBODY FULLSTACK ACADEMY
          </span>

          <h2>
            {title}
          </h2>

          <p>
            {subtitle}
          </p>

        </div>

      </div>


      <div className="ai-mentor-header-actions">

        {online && (

          <span className="ai-mentor-online">

            <span
              className="ai-mentor-online-dot"
              aria-hidden="true"
            />

            Online

          </span>

        )}


        {onClose && (

          <button
            type="button"
            className="ai-mentor-close"
            onClick={onClose}
            aria-label="Close PBody AI Mentor"
          >
            ×
          </button>

        )}

      </div>

    </header>

  );

}