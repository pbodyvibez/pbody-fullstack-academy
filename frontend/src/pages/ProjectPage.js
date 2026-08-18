// ======================================================
// PBODY FULLSTACK ACADEMY
// PREMIUM ENGINEERING PROJECT WORKSPACE
// FULL REPLACEMENT
// ======================================================

import React, {
  useState
} from "react";

import {
  useLocation,
  useNavigate,
  useParams
} from "react-router-dom";

import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Code2,
  Rocket,
  Star,
  Trophy,
  BookOpen,
  Sparkles
} from "lucide-react";

import {
  useProgress
} from "../context/ProgressContext";

import {
  useUserEngine
} from "../context/UserEngineContext";

import projects from "../data/projects";

import "../styles/projectPage.css";


// ======================================================
// PROJECT ID
// ======================================================

const createProjectId = (
  project,
  fallback = ""
) => {

  if (project?.id) {

    return String(project.id);

  }


  if (project?.slug) {

    return String(project.slug);

  }


  if (project?.title) {

    return project.title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

  }


  return fallback;

};


// ======================================================
// FIND PROJECT
// ======================================================

const findProjectById = (id) => {

  if (!id) {

    return null;

  }


  const courses =
    Object.values(projects || {});


  for (const courseProjects of courses) {

    const projectList =
      Object.values(courseProjects || {});


    for (const project of projectList) {

      const projectId =
        createProjectId(project);


      if (
        projectId === String(id)
      ) {

        return {
          ...project,
          id: projectId
        };

      }

    }

  }


  return null;

};


// ======================================================
// COMPONENT
// ======================================================

export default function ProjectPage() {

  const navigate =
    useNavigate();


  const location =
    useLocation();


  const {
    id
  } = useParams();


  // ====================================================
  // PROJECT
  // ====================================================

  const stateProject =
    location.state?.project || null;


  const project =
    stateProject ||
    findProjectById(id);


  // ====================================================
  // STATE
  // ====================================================

  const [
    submitted,
    setSubmitted
  ] = useState(false);


  // ====================================================
  // CONTEXTS
  // ====================================================

  const {
    completeLesson
  } = useProgress();


  const {
    completeLesson: awardXP
  } = useUserEngine();


  // ====================================================
  // NAVIGATION
  // ====================================================

  const goToProjects = () => {

    navigate("/projects");

    window.setTimeout(() => {

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    }, 100);

  };


  // ====================================================
  // SUBMIT PROJECT
  // ====================================================

  const submitProject = () => {

    if (
      submitted ||
      !project
    ) {

      return;

    }


    const xp =
      Number(project.xp) || 0;


    setSubmitted(true);


    if (
      typeof awardXP === "function"
    ) {

      awardXP(xp);

    }


    if (
      typeof completeLesson === "function"
    ) {

      completeLesson({

        id:
          `project-${createProjectId(
            project,
            id
          )}`,

        xp

      });

    }

  };


  // ====================================================
  // PROJECT NOT FOUND
  // ====================================================

  if (!project) {

    return (

      <div className="project-page">

        <div className="project-card project-not-found">

          <div className="project-not-found-icon">

            <Rocket size={40} />

          </div>


          <span className="project-badge">

            PROJECT NOT FOUND

          </span>


          <h1>

            No Project Found

          </h1>


          <p>

            The project information could not be loaded.
            It may have been removed or the project link
            may no longer be valid.

          </p>


          <button
            type="button"
            onClick={goToProjects}
          >

            <ArrowLeft size={18} />

            Back To Projects

          </button>

        </div>

      </div>

    );

  }


  // ====================================================
  // TASKS
  // ====================================================

  const tasks =
    Array.isArray(project.tasks)
      ? project.tasks
      : [];


  // ====================================================
  // RENDER
  // ====================================================

  return (

    /*
      IMPORTANT:

      DO NOT WRAP THIS PAGE WITH AppLayout.

      ProjectPage is already rendered inside
      StudentLayout in App.js.

      Adding AppLayout here creates:
      - duplicate navbar
      - duplicate layout
      - blank sidebar space
      - broken page dimensions
    */

    <div className="project-page">


      {/* ==================================================
          TOP NAVIGATION
      ================================================== */}

      <div className="project-navigation">

        <button
          type="button"
          onClick={goToProjects}
        >

          <ArrowLeft size={18} />

          Engineering Projects

        </button>

      </div>


      {/* ==================================================
          HERO
      ================================================== */}

      <section className="project-card project-hero-card">

        <div className="project-hero-top">

          <div>

            <span className="project-badge">

              {
                project.difficulty ||
                "ENGINEERING PROJECT"
              }

            </span>


            <h1>

              <Rocket size={34} />

              {project.title}

            </h1>


            <p>

              {
                project.description ||
                "Build a practical software engineering project and demonstrate your skills."
              }

            </p>

          </div>


          <div className="project-reward">

            <Star size={24} />

            <strong>

              {project.xp || 0}

            </strong>

            <span>

              XP Reward

            </span>

          </div>

        </div>


        {/* ==================================================
            PROJECT INFORMATION
        ================================================== */}

        <div className="project-info-grid">

          <div>

            <Code2 size={22} />

            <span>

              Engineering

            </span>

            <strong>

              Practical Development

            </strong>

          </div>


          <div>

            <BookOpen size={22} />

            <span>

              Learning Mode

            </span>

            <strong>

              Project Based

            </strong>

          </div>


          <div>

            <Trophy size={22} />

            <span>

              Reward

            </span>

            <strong>

              {project.xp || 0} XP

            </strong>

          </div>

        </div>

      </section>


      {/* ==================================================
          ENGINEERING TASKS
      ================================================== */}

      <section className="project-card">

        <div className="project-section-heading">

          <div className="project-section-icon">

            <Code2 size={22} />

          </div>


          <div>

            <span>

              BUILD REQUIREMENTS

            </span>

            <h2>

              Engineering Tasks

            </h2>

          </div>

        </div>


        {

          tasks.length > 0 ? (

            <div className="project-task-list">

              {

                tasks.map(
                  (task, index) => (

                    <div
                      className="project-task"
                      key={index}
                    >

                      <div className="task-number">

                        {index + 1}

                      </div>


                      <div>

                        <strong>

                          Engineering Requirement

                        </strong>

                        <p>

                          {task}

                        </p>

                      </div>

                    </div>

                  )
                )

              }

            </div>

          ) : (

            <div className="project-empty-tasks">

              <Sparkles size={24} />

              <p>

                Project requirements will be
                displayed here.

              </p>

            </div>

          )

        }

      </section>


      {/* ==================================================
          SUBMISSION
      ================================================== */}

      <section className="project-card project-submission-card">

        {

          !submitted ? (

            <>

              <div className="submission-icon">

                <Rocket size={30} />

              </div>


              <span>

                READY TO SUBMIT?

              </span>


              <h2>

                Complete Your Engineering Project

              </h2>


              <p>

                Once you have completed the project,
                submit it to receive your XP reward and
                record your achievement.

              </p>


              <div className="submission-reward">

                <Star size={20} />

                <strong>

                  +{project.xp || 0} XP

                </strong>

                Project Reward

              </div>


              <button
                type="button"
                onClick={submitProject}
              >

                <CheckCircle size={19} />

                Submit Project

                <ArrowRight size={18} />

              </button>

            </>

          ) : (

            <>

              <div className="submission-success-icon">

                <CheckCircle size={40} />

              </div>


              <span>

                PROJECT COMPLETED

              </span>


              <h2>

                Excellent Engineering Work!

              </h2>


              <p>

                Your project has been recorded and
                your engineering XP reward has been added.

              </p>


              <div className="submission-reward">

                <Trophy size={20} />

                <strong>

                  +{project.xp || 0} XP

                </strong>

                Earned

              </div>


              <div className="project-completion-actions">

                <button
                  type="button"
                  onClick={() =>
                    navigate("/certificates")
                  }
                >

                  <Trophy size={18} />

                  View Certificates

                </button>


                <button
                  type="button"
                  onClick={goToProjects}
                >

                  <ArrowLeft size={18} />

                  More Projects

                </button>

              </div>

            </>

          )

        }

      </section>


    </div>

  );

}