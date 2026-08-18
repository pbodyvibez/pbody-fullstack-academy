// ===============================================
// PBODY FULLSTACK ACADEMY
// PREMIUM DEVELOPER PORTFOLIO BUILDER
// CONNECTED TO PROFILE + PROGRESS
// FULL REPLACEMENT
// ===============================================

import React from "react";

import {
  Globe,
  Code2,
  Rocket,
  Award,
  User,
  ExternalLink,
  Sparkles,
  ArrowRight
} from "lucide-react";

import {
  useNavigate
} from "react-router-dom";

import {
  useAuth
} from "../context/AuthContext";

import {
  useProgress
} from "../context/ProgressContext";

import "../styles/portfolioBuilder.css";


// ===============================================
// COMPONENT
// ===============================================

export default function PortfolioBuilder() {

  const navigate = useNavigate();


  // =============================================
  // AUTH
  // =============================================

  const {
    user
  } = useAuth() || {};


  // =============================================
  // PROGRESS
  // =============================================

  const {
    progress
  } = useProgress() || {};


  // =============================================
  // PROJECTS
  // =============================================

  const projects = [

    {
      id: 1,
      title: "Engineering Project 01",
      description:
        "Your completed academy projects will appear here.",
      tech:
        "React • JavaScript • Node.js"
    },

    {
      id: 2,
      title: "Engineering Project 02",
      description:
        "Showcase real-world applications you build.",
      tech:
        "Full Stack Development"
    }

  ];


  // =============================================
  // NAVIGATION
  // =============================================

  const goTo = (path, state = undefined) => {

    if (state) {

      navigate(
        path,
        {
          state
        }
      );

    } else {

      navigate(path);

    }


    window.setTimeout(() => {

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    }, 100);

  };


  // =============================================
  // GENERATE PORTFOLIO
  // =============================================

  const generatePortfolio = () => {

    const portfolioData = {

      user: user || null,

      progress: progress || {},

      projects

    };


    goTo(
      "/portfolio-builder/preview",
      portfolioData
    );

  };


  // =============================================
  // VIEW PROJECT
  // =============================================

  const viewProject = (project) => {

    goTo(
      `/project/${project.id}`,
      {
        project
      }
    );

  };


  // =============================================
  // RENDER
  // =============================================

  return (

    <div className="portfolioBuilderPage">


      {/* ==========================================
          HERO
      ========================================== */}

      <section className="portfolioHero">


        <div className="portfolioIcon">

          <Globe size={42} />

        </div>


        <h1>

          AI Developer Portfolio Builder

        </h1>


        <p>

          Transform your learning journey into a professional
          developer portfolio employers can explore.

        </p>


        <button
          type="button"
          onClick={generatePortfolio}
        >

          <Sparkles size={18} />

          Generate Portfolio

          <ArrowRight size={18} />

        </button>


      </section>


      {/* ==========================================
          PROFILE
      ========================================== */}

      <section className="portfolioProfile">


        <div className="portfolioAvatar">

          <User />

        </div>


        <div>

          <h2>

            {
              user?.name ||
              "Student Developer"
            }

          </h2>


          <p>

            Full Stack Software Engineer

          </p>


          <p>

            {progress?.totalXP || 0} XP

            {" • "}

            {
              progress?.completedLessons?.length ||
              0
            }

            {" "}
            Lessons Completed

          </p>

        </div>


      </section>


      {/* ==========================================
          FEATURES
      ========================================== */}

      <section className="portfolioFeatures">


        <div className="portfolioCard">

          <Code2 />

          <h3>
            Technical Skills
          </h3>

          <p>

            React, JavaScript, Backend Engineering,
            Databases and modern development tools.

          </p>

        </div>


        <div className="portfolioCard">

          <Rocket />

          <h3>
            Projects Showcase
          </h3>

          <p>

            Display production-ready applications and
            engineering solutions.

          </p>

        </div>


        <div className="portfolioCard">

          <Award />

          <h3>
            Achievements
          </h3>

          <p>

            Certificates, XP milestones and academy
            achievements.

          </p>

        </div>


      </section>


      {/* ==========================================
          PORTFOLIO PREVIEW
      ========================================== */}

      <section className="portfolioProjects">


        <div className="portfolioProjectsHeader">

          <div>

            <span>
              PROJECT SHOWCASE
            </span>

            <h2>
              Portfolio Preview
            </h2>

          </div>


          <button
            type="button"
            onClick={generatePortfolio}
          >

            <Sparkles size={17} />

            Generate Portfolio

          </button>

        </div>


        <div className="projectGrid">


          {

            projects.map(
              (project) => (

                <div
                  className="projectCard"
                  key={project.id}
                >


                  <h3>

                    {project.title}

                  </h3>


                  <p>

                    {project.description}

                  </p>


                  <span>

                    {project.tech}

                  </span>


                  <button
                    type="button"
                    onClick={() =>
                      viewProject(project)
                    }
                  >

                    <ExternalLink
                      size={16}
                    />

                    View Project

                  </button>


                </div>

              )
            )

          }


        </div>


      </section>


      {/* ==========================================
          GENERATOR CTA
      ========================================== */}

      <section className="portfolioGeneratorCTA">


        <div>

          <Sparkles size={25} />


          <div>

            <h2>

              Ready To Build Your
              Developer Identity?

            </h2>


            <p>

              Generate a professional portfolio from
              your PBODY Academy profile, projects,
              achievements and engineering progress.

            </p>

          </div>

        </div>


        <button
          type="button"
          onClick={generatePortfolio}
        >

          Generate My Portfolio

          <ArrowRight size={18} />

        </button>


      </section>


    </div>

  );

}