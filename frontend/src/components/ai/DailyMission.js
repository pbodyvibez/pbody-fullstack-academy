// ===============================================
// PBODY FULLSTACK ACADEMY
// AI DAILY MISSION
// ===============================================

import Logo from "../../assets/images/logo.png";

import "../../styles/aiAssistant.css";


// ===============================================
// DAILY MISSION
// ===============================================

export default function DailyMission({
  title = "Today's Engineering Mission",
  mission = "",
  difficulty = "Intermediate",
  xp = 0,
  duration = "",
  completed = false,
  onStart = null
}) {

  return (

    <section className="ai-daily-mission">

      <div className="ai-daily-mission-header">

        <div className="ai-daily-mission-brand">

          <div className="ai-daily-mission-logo">

            <img
              src={Logo}
              alt="PBody FullStack Academy"
            />

          </div>

          <div>

            <span className="ai-daily-mission-label">
              PBODY AI MISSION
            </span>

            <h3>
              {title}
            </h3>

          </div>

        </div>

        {completed && (

          <span className="ai-daily-mission-complete">
            Completed
          </span>

        )}

      </div>


      {mission && (

        <div className="ai-daily-mission-content">

          <p>
            {mission}
          </p>

        </div>

      )}


      <div className="ai-daily-mission-meta">

        <span>
          <strong>Difficulty</strong>
          {difficulty}
        </span>

        {xp > 0 && (

          <span>
            <strong>Reward</strong>
            +{xp} XP
          </span>

        )}

        {duration && (

          <span>
            <strong>Duration</strong>
            {duration}
          </span>

        )}

      </div>


      {onStart && !completed && (

        <button
          type="button"
          className="ai-daily-mission-action"
          onClick={onStart}
        >
          Start Mission
        </button>

      )}

    </section>

  );

}