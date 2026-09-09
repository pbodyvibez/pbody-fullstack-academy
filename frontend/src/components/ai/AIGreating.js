// ===============================================
// PBODY FULLSTACK ACADEMY
// AI GREETING
// ===============================================

import Logo from "../../assets/images/logo.png";

import "../../styles/aiAssistant.css";


// ===============================================
// AI GREETING COMPONENT
// ===============================================

export default function AIGreating({
  name = "Engineer",
  title = "Welcome to PBody AI Mentor",
  message = "Let's build your engineering skills, one problem at a time.",
  actionLabel = null,
  onAction = null
}) {

  return (

    <section className="ai-greeting">

      <div className="ai-greeting-brand">

        <div className="ai-greeting-logo">

          <img
            src={Logo}
            alt="PBody FullStack Academy"
          />

        </div>

      </div>


      <div className="ai-greeting-content">

        <span className="ai-greeting-eyebrow">
          PBODY FULLSTACK ACADEMY
        </span>

        <h2>
          {title}
        </h2>

        <h3>
          Hello, {name}.
        </h3>

        <p>
          {message}
        </p>


        {onAction && actionLabel && (

          <button
            type="button"
            className="ai-greeting-action"
            onClick={onAction}
          >
            {actionLabel}
          </button>

        )}

      </div>

    </section>

  );

}