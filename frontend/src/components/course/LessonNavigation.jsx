// ===============================================
// PBODY FULLSTACK ACADEMY
// PREMIUM ENGINEERING CLASSROOM
// LESSON NAVIGATION SYSTEM
// FULL REPLACEMENT
// ===============================================

import "./course.css";

export default function LessonNavigation({
  lessons,
  currentLesson,
  setCurrentLesson
}) {
  // =================================================
  // SAFETY CHECK
  // =================================================

  if (
    !Array.isArray(lessons) ||
    lessons.length === 0 ||
    !currentLesson
  ) {
    return null;
  }

  // =================================================
  // CURRENT LESSON INDEX
  // =================================================

  const currentIndex = lessons.findIndex(
    (lesson) =>
      String(lesson.id) ===
      String(currentLesson.id)
  );

  // =================================================
  // PREVIOUS / NEXT LESSON
  // =================================================

  const previousLesson =
    currentIndex > 0
      ? lessons[currentIndex - 1]
      : null;

  const nextLesson =
    currentIndex >= 0 &&
    currentIndex < lessons.length - 1
      ? lessons[currentIndex + 1]
      : null;

  // =================================================
  // CHANGE LESSON
  // =================================================

  const changeLesson = (lesson) => {
    if (!lesson) {
      return;
    }

    setCurrentLesson(lesson);

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // =================================================
  // RENDER
  // =================================================

  return (
    <section className="lessonNavigation">

      {/* =========================================
          HEADER
      ========================================= */}

      <div className="lessonNavigationHeader">

        <div className="lessonNavigationIcon">
          📚
        </div>

        <div>

          <span className="navigationEyebrow">
            PBODY FULLSTACK ACADEMY
          </span>

          <h2>
            Lesson Navigation
          </h2>

          <p>
            Continue your engineering journey
            step by step.
          </p>

        </div>

      </div>


      {/* =========================================
          PROGRESS POSITION
      ========================================= */}

      <div className="lessonNavigationProgress">

        <span>
          Lesson
        </span>

        <strong>
          {currentIndex >= 0
            ? currentIndex + 1
            : 1}
        </strong>

        <span>
          of {lessons.length}
        </span>

      </div>


      {/* =========================================
          NAVIGATION BUTTONS
      ========================================= */}

      <div className="navigationControls">

        <button
          type="button"
          className="navigationButton previous"
          disabled={!previousLesson}
          onClick={() =>
            changeLesson(previousLesson)
          }
        >

          <span className="navigationArrow">
            ←
          </span>

          <span className="navigationButtonText">

            <small>
              Previous
            </small>

            <strong>
              {previousLesson?.title ||
                "Previous Lesson"}
            </strong>

          </span>

        </button>


        <button
          type="button"
          className="navigationButton next"
          disabled={!nextLesson}
          onClick={() =>
            changeLesson(nextLesson)
          }
        >

          <span className="navigationButtonText">

            <small>
              Next
            </small>

            <strong>
              {nextLesson?.title ||
                "Course Complete"}
            </strong>

          </span>

          <span className="navigationArrow">
            →
          </span>

        </button>

      </div>

    </section>
  );
}