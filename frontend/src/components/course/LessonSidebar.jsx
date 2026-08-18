// ===============================================
// PBODY FULLSTACK ACADEMY
// PREMIUM ENGINEERING CLASSROOM
// LESSON SIDEBAR
// FULL REPLACEMENT
// ===============================================

import "./course.css";

export default function LessonSidebar({
  course,
  lessons,
  currentLesson,
  setCurrentLesson,
  navigate
}) {
  // =================================================
  // NORMALIZE LESSON DATA
  // SUPPORT:
  // ARRAY
  // OBJECT WITH LESSONS
  // OBJECT WITH MODULES
  // OBJECT OF LESSON ARRAYS
  // =================================================

  let lessonList = [];

  if (Array.isArray(lessons)) {
    lessonList = lessons;
  } else if (lessons && Array.isArray(lessons.lessons)) {
    lessonList = lessons.lessons;
  } else if (lessons && Array.isArray(lessons.modules)) {
    lessonList = lessons.modules.flatMap((module) =>
      Array.isArray(module.lessons) ? module.lessons : []
    );
  } else if (lessons && typeof lessons === "object") {
    lessonList = Object.values(lessons).flatMap((value) => {
      if (Array.isArray(value)) {
        return value;
      }

      if (value && Array.isArray(value.lessons)) {
        return value.lessons;
      }

      return [];
    });
  }

  // =================================================
  // REMOVE INVALID LESSON ENTRIES
  // =================================================

  lessonList = lessonList.filter(
    (lesson) => lesson && typeof lesson === "object"
  );

  // =================================================
  // EMPTY STATE
  // =================================================

  if (lessonList.length === 0) {
    return (
      <aside className="lessonSidebar">
        <div className="lessonSidebarTop">
          <div>
            <span className="sidebarEyebrow">
              PBODY FULLSTACK ACADEMY
            </span>

            <h2>Course Content</h2>

            <p>No lessons available yet.</p>
          </div>
        </div>

        <div className="lessonSidebarEmpty">
          <div className="lessonEmptyIcon">📚</div>

          <h3>Coming Soon</h3>

          <p>
            Lessons will appear here once this engineering pathway is
            published.
          </p>
        </div>
      </aside>
    );
  }

  // =================================================
  // CURRENT LESSON
  // =================================================

  const currentIndex = lessonList.findIndex(
    (lesson) =>
      String(lesson.id) === String(currentLesson?.id)
  );

  // =================================================
  // OPEN LESSON
  // =================================================

  const openLesson = (lesson) => {
    if (!lesson) {
      return;
    }

    setCurrentLesson(lesson);

    if (navigate && course?.id) {
      navigate(`/lesson/${course.id}/${lesson.id}`);
    }
  };

  // =================================================
  // LESSON COMPLETION HELPER
  // =================================================

  const isLessonActive = (lesson) => {
    return (
      String(currentLesson?.id) === String(lesson?.id)
    );
  };

  // =================================================
  // RENDER
  // =================================================

  return (
    <aside className="lessonSidebar">

      {/* =========================================
          SIDEBAR HEADER
      ========================================= */}

      <div className="lessonSidebarTop">

        <div>
          <span className="sidebarEyebrow">
            PBODY FULLSTACK ACADEMY
          </span>

          <h2>Course Lessons</h2>

          <p>
            {lessonList.length} Professional Lessons
          </p>
        </div>

        <div className="lessonProgressMini">

          <strong>
            {currentIndex >= 0 ? currentIndex + 1 : 1}
          </strong>

          <span>
            / {lessonList.length}
          </span>

        </div>

      </div>


      {/* =========================================
          COURSE IDENTITY
      ========================================= */}

      {course && (
        <div className="sidebarCourseIdentity">

          <div className="sidebarCourseIcon">
            {course.icon || "🎓"}
          </div>

          <div>

            <strong>
              {course.shortTitle || course.title}
            </strong>

            <span>
              {course.level || "Professional"} Pathway
            </span>

          </div>

        </div>
      )}


      {/* =========================================
          LESSON LIST
      ========================================= */}

      <div className="sidebarLessons">

        {lessonList.map((lesson, index) => {

          const active = isLessonActive(lesson);

          return (
            <button
              type="button"
              key={`${lesson.id || "lesson"}-${index}`}
              className={
                active
                  ? "lessonItem active"
                  : "lessonItem"
              }
              onClick={() => openLesson(lesson)}
              aria-current={active ? "true" : undefined}
            >

              {/* LESSON NUMBER */}

              <div className="lessonNumber">

                {String(index + 1).padStart(2, "0")}

              </div>


              {/* LESSON INFORMATION */}

              <div className="lessonText">

                <h3>
                  {lesson.title || `Lesson ${index + 1}`}
                </h3>

                <p>
                  {lesson.duration || "Learning Session"}
                </p>

              </div>


              {/* ACTIVE MARKER */}

              {active && (
                <div className="lessonCurrent">
                  Current
                </div>
              )}

            </button>
          );
        })}

      </div>


      {/* =========================================
          SIDEBAR FOOTER
      ========================================= */}

      <div className="lessonSidebarFooter">

        <div className="sidebarFooterIcon">
          🚀
        </div>

        <div>

          <strong>
            Engineering Progress
          </strong>

          <span>
            Keep learning. Keep building.
          </span>

        </div>

      </div>

    </aside>
  );
}