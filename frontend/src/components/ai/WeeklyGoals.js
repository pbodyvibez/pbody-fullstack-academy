// ===============================================
// PBODY FULLSTACK ACADEMY
// AI WEEKLY GOALS
// ===============================================

import Logo from "../../assets/images/logo.png";

import "../../styles/aiAssistant.css";


// ===============================================
// WEEKLY GOALS
// ===============================================

export default function WeeklyGoals({
  goals = [],
  title = "Weekly Engineering Goals",
  onGoalAction = null
}) {

  const validGoals = Array.isArray(goals)
    ? goals.filter(Boolean)
    : [];


  return (

    <section className="ai-weekly-goals">

      <div className="ai-weekly-goals-header">

        <div className="ai-weekly-goals-brand">

          <div className="ai-weekly-goals-logo">

            <img
              src={Logo}
              alt="PBody FullStack Academy"
            />

          </div>

          <div>

            <span className="ai-weekly-goals-label">
              PBODY AI PLANNER
            </span>

            <h3>
              {title}
            </h3>

          </div>

        </div>

      </div>


      {validGoals.length === 0 ? (

        <div className="ai-weekly-goals-empty">

          <p>
            Your weekly engineering goals will appear here.
          </p>

        </div>

      ) : (

        <div className="ai-weekly-goals-list">

          {validGoals.map((goal, index) => {

            const completed =
              typeof goal === "object"
                ? Boolean(goal.completed)
                : false;

            const goalTitle =
              typeof goal === "object"
                ? goal.title || goal.name || "Learning Goal"
                : String(goal);

            const goalDescription =
              typeof goal === "object"
                ? goal.description || ""
                : "";

            const goalProgress =
              typeof goal === "object"
                ? Math.min(
                    Math.max(
                      Number(goal.progress) || 0,
                      0
                    ),
                    100
                  )
                : 0;


            return (

              <div
                className={`ai-weekly-goal ${
                  completed
                    ? "completed"
                    : ""
                }`}
                key={
                  goal?.id ||
                  goal?._id ||
                  `${goalTitle}-${index}`
                }
              >

                <div className="ai-weekly-goal-top">

                  <span className="ai-weekly-goal-number">
                    {completed
                      ? "✓"
                      : index + 1}
                  </span>


                  <div className="ai-weekly-goal-content">

                    <h4>
                      {goalTitle}
                    </h4>

                    {goalDescription && (

                      <p>
                        {goalDescription}
                      </p>

                    )}

                  </div>

                </div>


                {typeof goal === "object" &&
                  goal.progress !== undefined && (

                    <div className="ai-weekly-goal-progress">

                      <div className="ai-weekly-goal-progress-top">

                        <span>
                          Progress
                        </span>

                        <strong>
                          {goalProgress}%
                        </strong>

                      </div>

                      <div className="ai-weekly-goal-progress-bar">

                        <span
                          style={{
                            width: `${goalProgress}%`
                          }}
                        />

                      </div>

                    </div>

                  )}


                {onGoalAction && !completed && (

                  <button
                    type="button"
                    className="ai-weekly-goal-action"
                    onClick={() =>
                      onGoalAction(
                        goal,
                        index
                      )
                    }
                  >
                    Work on Goal
                  </button>

                )}

              </div>

            );

          })}

        </div>

      )}

    </section>

  );

}