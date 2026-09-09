// ===============================================
// PBODY FULLSTACK ACADEMY
// AI STREAK WIDGET
// ===============================================

import Logo from "../../assets/images/logo.png";

import "../../styles/aiAssistant.css";


// ===============================================
// STREAK WIDGET
// ===============================================

export default function StreakWidget({
  streak = 0,
  longestStreak = 0,
  message = "",
  goal = 7,
  onAction = null,
  actionLabel = "Keep Learning"
}) {

  const currentStreak = Math.max(
    Number(streak) || 0,
    0
  );

  const bestStreak = Math.max(
    Number(longestStreak) || 0,
    currentStreak
  );

  const streakGoal = Math.max(
    Number(goal) || 7,
    1
  );

  const progress = Math.min(
    (currentStreak / streakGoal) * 100,
    100
  );


  return (

    <section className="ai-streak-widget">

      <div className="ai-streak-header">

        <div className="ai-streak-brand">

          <div className="ai-streak-logo">

            <img
              src={Logo}
              alt="PBody FullStack Academy"
            />

          </div>

          <div>

            <span className="ai-streak-label">
              PBODY AI PROGRESS
            </span>

            <h3>
              Learning Streak
            </h3>

          </div>

        </div>

      </div>


      <div className="ai-streak-main">

        <div className="ai-streak-number">

          <strong>
            {currentStreak}
          </strong>

          <span>
            {currentStreak === 1
              ? "day"
              : "days"}
          </span>

        </div>


        <div className="ai-streak-copy">

          <h4>
            {currentStreak > 0
              ? "Keep your momentum going."
              : "Start your learning streak today."}
          </h4>

          <p>
            {message ||
              "Consistent practice is one of the fastest ways to become a stronger software engineer."}
          </p>

        </div>

      </div>


      <div className="ai-streak-progress">

        <div className="ai-streak-progress-top">

          <span>
            Weekly Goal
          </span>

          <strong>
            {currentStreak} / {streakGoal} days
          </strong>

        </div>


        <div className="ai-streak-progress-bar">

          <span
            style={{
              width: `${progress}%`
            }}
          />

        </div>

      </div>


      <div className="ai-streak-stats">

        <div className="ai-streak-stat">

          <strong>
            {currentStreak}
          </strong>

          <span>
            Current Streak
          </span>

        </div>


        <div className="ai-streak-stat">

          <strong>
            {bestStreak}
          </strong>

          <span>
            Best Streak
          </span>

        </div>

      </div>


      {onAction && (

        <button
          type="button"
          className="ai-streak-action"
          onClick={onAction}
        >
          {actionLabel}
        </button>

      )}

    </section>

  );

}