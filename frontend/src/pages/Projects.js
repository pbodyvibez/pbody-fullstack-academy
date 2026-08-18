// ======================================================
// PBODY FULLSTACK ACADEMY
// PREMIUM ENGINEERING PROJECT LAB
// FULL REPLACEMENT
// ======================================================

import React from "react";

import {
  useNavigate
} from "react-router-dom";

import {
  Rocket,
  ArrowRight,
  Star,
  Code2,
  FolderKanban
} from "lucide-react";

import projects from "../data/projects";

import "../styles/projects.css";


// ======================================================
// HELPERS
// ======================================================

const createProjectId = (project, fallback = "") => {

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
// COMPONENT
// ======================================================

export default function Projects() {

  const navigate = useNavigate();


  // ====================================================
  // PROJECT DATA
  // ====================================================

  const projectCourses =
    Object.keys(projects || {});


  // ====================================================
  // PROJECT COUNT
  // ====================================================

  const totalProjects =
    Object.values(projects || {})
      .reduce(
        (total, courseProjects) =>
          total +
          Object.keys(courseProjects || {}).length,
        0
      );


  // ====================================================
  // OPEN PROJECT
  // ====================================================

  const openProject = (project, courseId, index) => {

    if (!project) {
      return;
    }


    const projectId =
      createProjectId(
        project,
        `${courseId}-${index}`
      );


    /*
      IMPORTANT:

      The ProjectPage route is:

      /project/:id

      Therefore every project must navigate
      to that exact route.

      The complete project is also passed through
      location.state so ProjectPage can render
      immediately without needing another lookup.
    */

    navigate(
      `/project/${projectId}`,
      {
        state: {
          project: {
            ...project,
            id: projectId
          }
        }
      }
    );


    window.setTimeout(() => {

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    }, 100);

  };


  // ====================================================
  // RENDER
  // ====================================================

  return (

    <div className="projects-page">


      {/* ==================================================
          HERO
      ================================================== */}

      <section className="projects-hero">


        <div className="projects-badge">

          <Rocket size={17} />

          ENGINEERING PROJECT LAB

        </div>


        <h1>
          Build Real Software Projects
        </h1>


        <p>
          Apply your coding knowledge by building professional
          projects, earning XP and creating proof of your
          engineering skills.
        </p>


        <div className="projects-heroStats">


          <div>

            <FolderKanban size={20} />

            <strong>
              {totalProjects}
            </strong>

            <span>
              Projects
            </span>

          </div>


          <div>

            <Code2 size={20} />

            <strong>
              Real
            </strong>

            <span>
              Engineering
            </span>

          </div>


          <div>

            <Star size={20} />

            <strong>
              XP
            </strong>

            <span>
              Rewards
            </span>

          </div>


        </div>

      </section>


      {/* ==================================================
          PROJECT GRID
      ================================================== */}

      <section className="projects-grid">


        {

          projectCourses.map((courseId) => (

            Object.values(
              projects[courseId] || {}
            ).map((project, index) => {

              const projectId =
                createProjectId(
                  project,
                  `${courseId}-${index}`
                );


              return (

                <article
                  className="project-card"
                  key={`${courseId}-${projectId}`}
                >


                  {/* ======================================
                      PROJECT TOP
                  ====================================== */}

                  <div className="project-top">


                    <span>
                      {
                        project.difficulty ||
                        "Engineering"
                      }
                    </span>


                    <div className="project-icon">

                      <Rocket size={22} />

                    </div>


                  </div>


                  {/* ======================================
                      TITLE
                  ====================================== */}

                  <h2>
                    {project.title}
                  </h2>


                  {/* ======================================
                      DESCRIPTION
                  ====================================== */}

                  <p>
                    {
                      project.description ||
                      "Build a practical software engineering project."
                    }
                  </p>


                  {/* ======================================
                      META
                  ====================================== */}

                  <div className="project-meta">


                    <div>

                      <Star size={16} />

                      {project.xp || 0} XP

                    </div>


                    <div>

                      <Code2 size={16} />

                      Build Project

                    </div>


                  </div>


                  {/* ======================================
                      ACTION
                  ====================================== */}

                  <button
                    type="button"
                    onClick={() =>
                      openProject(
                        project,
                        courseId,
                        index
                      )
                    }
                  >

                    View Project

                    <ArrowRight size={18} />

                  </button>


                </article>

              );

            })

          ))

        }


      </section>


      {/* ==================================================
          FOOTER
      ================================================== */}

      <section className="projects-footer">


        <div>

          <span>
            PBODY ENGINEERING LAB
          </span>


          <h2>
            Your Engineering Journey Starts With Building.
          </h2>


          <p>
            Complete projects, earn rewards, strengthen your
            portfolio and create proof that you can build
            real software.
          </p>

        </div>


      </section>


    </div>

  );

}