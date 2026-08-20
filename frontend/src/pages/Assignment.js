// =====================================================
// PBODY FULLSTACK ACADEMY
// ASSIGNMENT PAGE
// FULL REPLACEMENT
// =====================================================

import {
  useLocation,
  useNavigate
} from "react-router-dom";

import {
  useState
} from "react";


import assignments
  from "../data/assignments";


import {
  useProgress
} from "../context/ProgressContext";


import {
  useUserEngine
} from "../context/UserEngineContext";


import "../styles/assignment.css";


export default function Assignment() {


  // ===================================================
  // ROUTER
  // ===================================================

  const navigate =
    useNavigate();

  const location =
    useLocation();


  // ===================================================
  // ROUTE DATA
  // ===================================================

  const {
    lesson,
    course
  } =
    location.state || {};


  // ===================================================
  // ASSIGNMENT
  // ===================================================

  const assignment =
    assignments?.[course?.id]?.[lesson?.id];


  // ===================================================
  // STATE
  // ===================================================

  const [
    submitted,
    setSubmitted
  ] = useState(false);


  // ===================================================
  // PROGRESS
  // ===================================================

  const {
    completeLesson
  } =
    useProgress();


  const {
    completeLesson: addXP
  } =
    useUserEngine();


  // ===================================================
  // MISSING ASSIGNMENT
  // ===================================================

  if (!assignment) {

    return (

      <div
        style={{
          color: "white",
          textAlign: "center",
          padding: "60px"
        }}
      >

        <h1>
          No Assignment Found
        </h1>


        <button
          type="button"
          onClick={() =>
            navigate("/dashboard")
          }
        >

          ← Back to Dashboard

        </button>

      </div>

    );

  }


  // ===================================================
  // SUBMIT
  // ===================================================

  const submitAssignment = () => {

    if (submitted) {

      return;

    }


    setSubmitted(true);


    addXP(
      assignment.xp
    );


    completeLesson({

      id:
        `${course.id}-${lesson.id}-assignment`,

      xp:
        assignment.xp

    });

  };


  // ===================================================
  // CONTINUE
  // ===================================================

  const continueToProject = () => {

    navigate(

      "/project",

      {

        state: {

          lesson,

          course

        }

      }

    );

  };


  // ===================================================
  // RENDER
  // ===================================================

  return (

    <div className="assignment-page">


      <div className="assignment-card">


        {/* =================================================
            TITLE
        ================================================= */}

        <h1>

          📚 {assignment.title}

        </h1>


        {/* =================================================
            DESCRIPTION
        ================================================= */}

        <p>

          Complete the following tasks.

        </p>


        {/* =================================================
            INSTRUCTIONS
        ================================================= */}

        <ul>

          {assignment.instructions.map(

            (item, index) => (

              <li
                key={index}
              >

                {item}

              </li>

            )

          )}

        </ul>


        {/* =================================================
            FOOTER
        ================================================= */}

        <div className="assignment-footer">


          <h2>

            Reward

          </h2>


          <h1>

            ⭐ {assignment.xp} XP

          </h1>


          {!submitted ? (

            <button

              type="button"

              onClick={
                submitAssignment
              }

            >

              Submit Assignment

            </button>

          ) : (

            <button

              type="button"

              onClick={
                continueToProject
              }

            >

              Continue To Project →

            </button>

          )}


        </div>


      </div>


    </div>

  );

}