// ===============================================
// PBODY FULLSTACK ACADEMY
// PREMIUM ENGINEERING CLASSROOM
// LESSON QUIZ CONNECTOR
// FULL REPLACEMENT
// ===============================================

import QuizEngine from "../quiz/QuizEngine";

import "./course.css";

export default function LessonQuiz({ lesson }) {
  // =================================================
  // NO LESSON
  // =================================================

  if (!lesson) {
    return null;
  }

  // =================================================
  // LOAD LESSON QUESTIONS
  // =================================================

  const questions = Array.isArray(lesson.quiz)
    ? lesson.quiz
    : [];

  // =================================================
  // NO QUIZ AVAILABLE
  // =================================================

  if (questions.length === 0) {
    return (
      <section className="lessonQuiz emptyQuiz">

        <div className="quizHeader">

          <div className="quizHeaderIcon">
            🧠
          </div>

          <div>
            <span className="quizEyebrow">
              PBODY FULLSTACK ACADEMY
            </span>

            <h2>
              Engineering Knowledge Check
            </h2>

            <p>
              This lesson does not have an assessment
              available yet.
            </p>
          </div>

        </div>


        <div className="quizEmptyState">

          <div className="quizEmptyIcon">
            📋
          </div>

          <h3>
            Assessment Coming Soon
          </h3>

          <p>
            The engineering assessment for this lesson
            is currently being prepared.
          </p>

        </div>

      </section>
    );
  }

  // =================================================
  // QUIZ AVAILABLE
  // =================================================

  return (
    <section className="lessonQuiz">

      {/* =========================================
          QUIZ HEADER
      ========================================= */}

      <div className="quizHeader">

        <div className="quizHeaderIcon">
          🧠
        </div>

        <div>

          <span className="quizEyebrow">
            PBODY FULLSTACK ACADEMY
          </span>

          <h2>
            Engineering Knowledge Check
          </h2>

          <p>
            Complete this assessment to test your
            understanding and earn XP.
          </p>

        </div>

      </div>


      {/* =========================================
          QUIZ INFORMATION
      ========================================= */}

      <div className="quizMeta">

        <div className="quizMetaItem">

          <span className="quizMetaIcon">
            📝
          </span>

          <div>
            <strong>
              {questions.length}
            </strong>

            <small>
              Questions
            </small>
          </div>

        </div>


        <div className="quizMetaItem">

          <span className="quizMetaIcon">
            ⚡
          </span>

          <div>
            <strong>
              {lesson.xp || 0}
            </strong>

            <small>
              Lesson XP
            </small>
          </div>

        </div>


        <div className="quizMetaItem">

          <span className="quizMetaIcon">
            🎯
          </span>

          <div>
            <strong>
              Assessment
            </strong>

            <small>
              Knowledge Check
            </small>
          </div>

        </div>

      </div>


      {/* =========================================
          QUIZ ENGINE
      ========================================= */}

      <div className="quizEngineWrapper">

        <QuizEngine
          questions={questions}
          lesson={lesson}
        />

      </div>

    </section>
  );
}