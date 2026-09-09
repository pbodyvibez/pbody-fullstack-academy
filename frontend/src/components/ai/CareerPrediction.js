// ===============================================
// PBODY FULLSTACK ACADEMY
// AI CAREER PREDICTION
// ===============================================

import Logo from "../../assets/images/logo.png";

import "../../styles/aiAssistant.css";


// ===============================================
// CAREER PREDICTION
// ===============================================

export default function CareerPrediction({
  title = "Your Engineering Path",
  role = "Full Stack Developer",
  confidence = null,
  description = "",
  skills = [],
  onAction = null,
  actionLabel = "Ask PBody AI"
}) {

  const validSkills = Array.isArray(skills)
    ? skills.filter(Boolean)
    : [];


  return (

    <section className="ai-career-prediction">

      <div className="ai-career-header">

        <div className="ai-career-brand">

          <div className="ai-career-logo">

            <img
              src={Logo}
              alt="PBody FullStack Academy"
            />

          </div>

          <div>

            <span className="ai-career-label">
              PBODY AI CAREER INSIGHT
            </span>

            <h3>
              {title}
            </h3>

          </div>

        </div>

      </div>


      <div className="ai-career-main">

        <span className="ai-career-role">
          Recommended Path
        </span>

        <h2>
          {role}
        </h2>

        {confidence !== null && (

          <div className="ai-career-confidence">

            <div className="ai-career-confidence-top">

              <span>
                AI Confidence
              </span>

              <strong>
                {confidence}%
              </strong>

            </div>

            <div className="ai-career-progress">

              <span
                style={{
                  width: `${Math.min(
                    Math.max(Number(confidence) || 0,
                    0),
                    100
                  )}%`
                }}
              />

            </div>

          </div>

        )}


        {description && (

          <p className="ai-career-description">
            {description}
          </p>

        )}


        {validSkills.length > 0 && (

          <div className="ai-career-skills">

            <h4>
              Skills to strengthen
            </h4>

            <div className="ai-career-skill-list">

              {validSkills.map(
                (skill, index) => (

                  <span
                    key={`${skill}-${index}`}
                    className="ai-career-skill"
                  >
                    {skill}
                  </span>

                )
              )}

            </div>

          </div>

        )}

      </div>


      {onAction && (

        <button
          type="button"
          className="ai-career-action"
          onClick={onAction}
        >
          {actionLabel}
        </button>

      )}

    </section>

  );

}