// ===============================================
// PBODY FULLSTACK ACADEMY
// AI LEARNING SUMMARY
// ===============================================

import Logo from "../../assets/images/logo.png";

import "../../styles/aiAssistant.css";


// ===============================================
// LEARNING SUMMARY
// ===============================================

export default function LearningSummary({
  title = "Your Learning Summary",
  summary = "",
  completedLessons = 0,
  totalLessons = 0,
  xp = 0,
  streak = 0,
  nextStep = "",
  onAction = null,
  actionLabel = "Continue Learning"
}) {

  const hasLessonProgress =
    Number(totalLessons) > 0;

  const progress = hasLessonProgress
    ? Math.min(
        Math.max(
          (Number(completedLessons) /
            Number(totalLessons)) *
            100,
          0
        ),
        100
      )
    : 0;


  return (

    <section className="ai-learning-summary">

      <div className="ai-learning-summary-header">

        <div className="ai-learning-summary-brand">

          <div className="ai-learning-summary-logo">

            <img
              src={Logo}
              alt="PBody FullStack Academy"
            />

          </div>

          <div>

            <span className="ai-learning-summary-label">
              PBODY AI INSIGHT
            </span>

            <h3>
              {title}
            </h3>

          </div>

        </div>

      </div>


      {summary && (

        <p className="ai-learning-summary-text">
          {summary}
        </p>

      )}


      {hasLessonProgress && (

        <div className="ai-learning-summary-progress">

          <div className="ai-learning-summary-progress-top">

            <span>
              Lesson Progress
            </span>

            <strong>
              {completedLessons} / {totalLessons}
            </strong>

          </div>

          <div className="ai-learning-summary-progress-bar">

            <span
              style={{
                width: `${progress}%`
              }}
            />

          </div>

        </div>

      )}


      <div className="ai-learning-summary-stats">

        <div className="ai-learning-summary-stat">

          <strong>
            {completedLessons}
          </strong>

          <span>
            Lessons
          </span>

        </div>


        <div className="ai-learning-summary-stat">

          <strong>
            {xp}
          </strong>

          <span>
            XP Earned
          </span>

        </div>


        <div className="ai-learning-summary-stat">

          <strong>
            {streak}
          </strong>

          <span>
            Day Streak
          </span>

        </div>

      </div>


      {nextStep && (

        <div className="ai-learning-summary-next">

          <span>
            Recommended Next Step
          </span>

          <p>
            {nextStep}
          </p>

        </div>

      )}


      {onAction && (

        <button
          type="button"
          className="ai-learning-summary-action"
          onClick={onAction}
        >
          {actionLabel}
        </button>

      )}

    </section>

  );

}