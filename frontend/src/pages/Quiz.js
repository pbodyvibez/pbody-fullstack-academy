// ===============================================
// PBODY FULLSTACK ACADEMY
// PREMIUM QUIZ CENTER
// FULL REPLACEMENT
// ===============================================

import {
  useLocation,
  useNavigate
} from "react-router-dom";

import {
  useState
} from "react";

import {
  ArrowLeft,
  Brain,
  CheckCircle,
  Code2,
  Database,
  PenTool,
  Sparkles,
  Trophy
} from "lucide-react";

import QuizEngine from "../components/quiz/QuizEngine";

import quizzes from "../data/quizzes";

import "../styles/quiz.css";


// ===============================================
// CATEGORY CONFIG
// ===============================================

const categoryConfig = {

  frontend: {
    title: "Frontend Engineering",
    description:
      "Test your knowledge of HTML, CSS, JavaScript and React.",
    icon: Code2
  },

  backend: {
    title: "Backend Engineering",
    description:
      "Test your knowledge of Node.js, APIs, Express and databases.",
    icon: Database
  },

  cad: {
    title: "CAD Engineering",
    description:
      "Test your knowledge of CAD, technical drawing and 3D design.",
    icon: PenTool
  }

};


// ===============================================
// HELPERS
// ===============================================

const normalizeCategory = (value) => {

  if (!value) {
    return "frontend";
  }

  const normalized =
    String(value)
      .toLowerCase()
      .trim();

  if (quizzes?.[normalized]) {
    return normalized;
  }

  return "frontend";

};


const getQuizQuestions = (
  category,
  quizId = "lesson1"
) => {

  const categoryData =
    quizzes?.[category];

  if (!categoryData) {
    return [];
  }


  // ---------------------------------------------
  // Current PBODY structure:
  //
  // frontend = {
  //   lesson1: [...]
  // }
  // ---------------------------------------------

  if (
    !Array.isArray(categoryData) &&
    Array.isArray(categoryData?.[quizId])
  ) {

    return categoryData[quizId];

  }


  // ---------------------------------------------
  // If category itself is an array
  // ---------------------------------------------

  if (Array.isArray(categoryData)) {

    return categoryData;

  }


  // ---------------------------------------------
  // Fallback: first available quiz
  // ---------------------------------------------

  const availableQuizIds =
    Object.keys(categoryData || {});


  if (
    availableQuizIds.length > 0
  ) {

    const firstQuiz =
      categoryData[
        availableQuizIds[0]
      ];


    if (Array.isArray(firstQuiz)) {
      return firstQuiz;
    }

  }


  return [];

};


// ===============================================
// COMPONENT
// ===============================================

export default function Quiz() {

  const navigate =
    useNavigate();

  const location =
    useLocation();


  // =============================================
  // LOCATION DATA
  // =============================================

  const state =
    location.state || {};


  const lesson =
    state.lesson || null;


  const course =
    state.course || null;


  const initialCategory =
    normalizeCategory(
      state.category
    );


  const initialQuizId =
    state.quizId ||
    "lesson1";


  // =============================================
  // STATE
  // =============================================

  const [
    selectedCategory,
    setSelectedCategory
  ] = useState(
    initialCategory
  );


  const [
    selectedQuizId,
    setSelectedQuizId
  ] = useState(
    initialQuizId
  );


  // =============================================
  // LESSON QUIZ MODE
  // =============================================

  if (lesson) {

    const lessonQuestions =
      Array.isArray(lesson.quiz)
        ? lesson.quiz
        : [];


    return (

      <div className="quiz-container">


        <QuizEngine

          questions={
            lessonQuestions
          }

          lesson={lesson}

          onComplete={() => {

            if (
              course?.id &&
              lesson?.id
            ) {

              navigate(
                `/lesson/${course.id}/${lesson.id}`
              );

            } else {

              navigate("/quiz");

            }

          }}

        />

      </div>

    );

  }


  // =============================================
  // CATEGORY DATA
  // =============================================

  const categoryData =
    quizzes?.[selectedCategory];


  const questions =
    getQuizQuestions(
      selectedCategory,
      selectedQuizId
    );


  // =============================================
  // AVAILABLE QUIZ IDS
  // =============================================

  const availableQuizIds =
    categoryData &&
    !Array.isArray(categoryData)
      ? Object.keys(categoryData)
      : [];


  // =============================================
  // INVALID CATEGORY SAFETY
  // =============================================

  if (!categoryData) {

    return (

      <div className="quiz-container">

        <div className="quiz-card">

          <div className="quizResult">

            <Brain size={42} />

            <h2>
              Quiz Center
            </h2>

            <p>
              No assessment category is currently
              available.
            </p>

            <button
              className="primaryButton"
              type="button"
              onClick={() =>
                navigate("/dashboard")
              }
            >
              Back To Dashboard
            </button>

          </div>

        </div>

      </div>

    );

  }


  // =============================================
  // CATEGORY INFORMATION
  // =============================================

  const config =
    categoryConfig[
      selectedCategory
    ] || {

      title:
        `${selectedCategory} Assessment`,

      description:
        "Test your engineering knowledge.",

      icon: Brain

    };


  const CategoryIcon =
    config.icon;


  // =============================================
  // RENDER QUIZ CENTER
  // =============================================

  return (

    <div className="quiz-container">


      {/* ========================================
          HEADER
      ======================================== */}

      <section className="quiz-card quiz-center-header">

        <div className="quiz-center-icon">

          <Brain size={34} />

        </div>


        <span className="quiz-center-badge">

          <Sparkles size={15} />

          PBODY ASSESSMENT CENTER

        </span>


        <h1>

          Engineering Quiz Center

        </h1>


        <p>

          Test your knowledge, earn XP and
          prove your engineering skills.

        </p>

      </section>


      {/* ========================================
          CATEGORY SELECTOR
      ======================================== */}

      <section className="quiz-card">

        <div className="quiz-section-heading">

          <div>

            <span>
              SELECT DISCIPLINE
            </span>

            <h2>
              Choose Your Assessment
            </h2>

          </div>

        </div>


        <div className="quiz-category-grid">

          {

            Object.keys(quizzes || {})
              .map((category) => {

                const item =
                  categoryConfig[
                    category
                  ] || {

                    title:
                      `${category} Engineering`,

                    description:
                      "Engineering assessment",

                    icon: Brain

                  };


                const Icon =
                  item.icon;


                const isSelected =
                  selectedCategory ===
                  category;


                return (

                  <button

                    key={category}

                    type="button"

                    className={
                      `quiz-category ${
                        isSelected
                          ? "active"
                          : ""
                      }`
                    }

                    onClick={() => {

                      setSelectedCategory(
                        category
                      );


                      const ids =
                        !Array.isArray(
                          quizzes[category]
                        )
                          ? Object.keys(
                              quizzes[category] || {}
                            )
                          : [];


                      setSelectedQuizId(
                        ids[0] ||
                        "lesson1"
                      );

                    }}

                  >

                    <Icon size={26} />

                    <strong>

                      {item.title}

                    </strong>

                    <span>

                      {item.description}

                    </span>

                    {

                      isSelected && (

                        <CheckCircle
                          size={18}
                          className="quiz-selected-icon"
                        />

                      )

                    }

                  </button>

                );

              })

          }

        </div>

      </section>


      {/* ========================================
          ASSESSMENT SELECTION
      ======================================== */}

      <section className="quiz-card">

        <div className="quiz-assessment-header">

          <div>

            <div className="quiz-assessment-icon">

              <CategoryIcon
                size={25}
              />

            </div>

          </div>


          <div>

            <span>
              {selectedCategory.toUpperCase()}
            </span>

            <h2>
              {config.title}
            </h2>

            <p>
              {config.description}
            </p>

          </div>

        </div>


        {/* ======================================
            QUIZ IDS
        ====================================== */}

        {

          availableQuizIds.length > 0 && (

            <div className="quiz-list">

              {

                availableQuizIds.map(
                  (id) => {

                    const quizQuestions =
                      getQuizQuestions(
                        selectedCategory,
                        id
                      );


                    const active =
                      selectedQuizId === id;


                    return (

                      <button

                        key={id}

                        type="button"

                        className={
                          `quiz-option ${
                            active
                              ? "active"
                              : ""
                          }`
                        }

                        onClick={() =>
                          setSelectedQuizId(
                            id
                          )
                        }

                      >

                        <div>

                          <Trophy
                            size={20}
                          />

                        </div>


                        <span>

                          <strong>
                            {
                              id
                                .replace(
                                  /[-_]/g,
                                  " "
                                )
                                .replace(
                                  /\b\w/g,
                                  (char) =>
                                    char.toUpperCase()
                                )
                            }
                          </strong>


                          <small>

                            {
                              quizQuestions.length
                            }

                            {" "}
                            Questions

                          </small>

                        </span>


                        {

                          active && (

                            <CheckCircle
                              size={19}
                            />

                          )

                        }

                      </button>

                    );

                  }
                )

              }

            </div>

          )

        }


        {/* ======================================
            START / ENGINE
        ====================================== */}

        {

          questions.length > 0 ? (

            <div className="quiz-active-area">

              <QuizEngine

                key={
                  `${selectedCategory}-${selectedQuizId}`
                }

                questions={
                  questions
                }

                lesson={{

                  id:
                    `${selectedCategory}-${selectedQuizId}`,

                  title:
                    config.title

                }}

                onComplete={() => {

                  setSelectedQuizId(
                    selectedQuizId
                  );

                }}

              />

            </div>

          ) : (

            <div className="quizResult">

              <Brain size={40} />

              <h2>
                Assessment Coming Soon
              </h2>

              <p>

                This engineering category does
                not have questions available yet.

              </p>

            </div>

          )

        }

      </section>


      {/* ========================================
          BACK
      ======================================== */}

      <button

        type="button"

        className="quiz-back-button"

        onClick={() =>
          navigate("/dashboard")
        }

      >

        ← Back To Dashboard

      </button>


    </div>

  );

}