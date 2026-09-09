// ===============================================
// PBODY FULLSTACK ACADEMY
// AI HEADER
// ===============================================

import Logo from "../../assets/images/logo.png";

import "../../styles/aiAssistant.css";


// ===============================================
// AI HEADER COMPONENT
// ===============================================

export default function AIHeader({
  title = "PBody AI Mentor",
  subtitle = "PBody FullStack Academy Engineering Intelligence",
  online = true,
  onClose = null
}) {

  return (

    <header className="ai-header">

      <div className="ai-header-brand">

        <div className="ai-header-logo">

          <img
            src={Logo}
            alt="PBody FullStack Academy"
          />

        </div>


        <div className="ai-header-info">

          <h3>
            {title}
          </h3>

          <p>
            {subtitle}
          </p>

        </div>

      </div>


      <div className="ai-header-actions">

        {online && (

          <span className="ai-online-status">

            <span
              className="ai-online-dot"
              aria-hidden="true"
            />

            Online

          </span>

        )}


        {onClose && (

          <button
            type="button"
            className="ai-header-close"
            onClick={onClose}
            aria-label="Close AI Mentor"
          >
            ×
          </button>

        )}

      </div>

    </header>

  );

}