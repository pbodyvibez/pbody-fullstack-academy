// ===============================================
// PBODY FULLSTACK ACADEMY
// GENERATED DEVELOPER PORTFOLIO
// FULL REPLACEMENT
// ===============================================

import React from "react";

import {
  useLocation,
  useNavigate
} from "react-router-dom";

import {
  ArrowLeft,
  Download,
  Mail,
  ExternalLink,
  Award,
  Code2,
  Rocket
} from "lucide-react";

import "../styles/portfolioPreview.css";


// ===============================================
// COMPONENT
// ===============================================

export default function PortfolioPreview() {

  const navigate = useNavigate();

  const location = useLocation();


  // =============================================
  // PORTFOLIO DATA
  // =============================================

  const data = location.state || {};

  const user = data.user || {};

  const progress = data.progress || {};

  const projects = Array.isArray(data.projects)
    ? data.projects
    : [];


  // =============================================
  // BACK TO BUILDER
  // =============================================

  const goBack = () => {

    navigate("/portfolio-builder");

    window.setTimeout(() => {

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    }, 100);

  };


  // =============================================
  // DOWNLOAD / PRINT
  // =============================================

  const printPortfolio = () => {

    window.print();

  };


  // =============================================
  // PROJECT NAVIGATION
  // =============================================

  const openProject = (project) => {

    if (!project) {
      return;
    }

    if (project.id) {

      navigate(
        `/project/${project.id}`,
        {
          state: {
            project
          }
        }
      );

      window.setTimeout(() => {

        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });

      }, 100);

      return;
    }

    if (project.url) {

      window.open(
        project.url,
        "_blank",
        "noopener,noreferrer"
      );

    }

  };


  // =============================================
  // RENDER
  // =============================================

  return (

    <div className="portfolioPreviewPage">


      {/* ==========================================
          ACTION BAR
      ========================================== */}

      <div className="portfolioPreviewActions">

        <button
          type="button"
          onClick={goBack}
        >

          <ArrowLeft size={18} />

          Back To Builder

        </button>


        <button
          type="button"
          onClick={printPortfolio}
        >

          <Download size={18} />

          Download Portfolio

        </button>

      </div>


      {/* ==========================================
          HERO
      ========================================== */}

      <header className="portfolioPreviewHero">

        <div className="portfolioPreviewAvatar">

          {
            user?.name
              ? user.name.charAt(0).toUpperCase()
              : "P"
          }

        </div>


        <div>

          <span>
            PBODY FULLSTACK ACADEMY
          </span>


          <h1>

            {
              user?.name ||
              "Student Developer"
            }

          </h1>


          <h2>
            Full Stack Software Engineer
          </h2>


          <p>
            Developer • Engineer • Problem Solver
          </p>

        </div>

      </header>


      {/* ==========================================
          STATS
      ========================================== */}

      <section className="portfolioPreviewStats">

        <div>

          <strong>
            {progress?.totalXP || 0}
          </strong>

          <span>
            XP Earned
          </span>

        </div>


        <div>

          <strong>
            {progress?.completedLessons?.length || 0}
          </strong>

          <span>
            Lessons Completed
          </span>

        </div>


        <div>

          <strong>
            {projects.length}
          </strong>

          <span>
            Projects
          </span>

        </div>

      </section>


      {/* ==========================================
          ABOUT
      ========================================== */}

      <section className="portfolioPreviewSection">

        <div className="portfolioPreviewSectionHeading">

          <Code2 size={22} />

          <h2>
            About Me
          </h2>

        </div>


        <p>

          I am a software engineering professional building
          practical digital solutions through modern development
          technologies and continuous learning.

        </p>

      </section>


      {/* ==========================================
          SKILLS
      ========================================== */}

      <section className="portfolioPreviewSection">

        <div className="portfolioPreviewSectionHeading">

          <Rocket size={22} />

          <h2>
            Technical Skills
          </h2>

        </div>


        <div className="portfolioSkillGrid">

          <span>
            HTML
          </span>

          <span>
            CSS
          </span>

          <span>
            JavaScript
          </span>

          <span>
            React
          </span>

          <span>
            Node.js
          </span>

          <span>
            Express
          </span>

          <span>
            MongoDB
          </span>

          <span>
            Git & GitHub
          </span>

          <span>
            REST APIs
          </span>

          <span>
            Full Stack Development
          </span>

        </div>

      </section>


      {/* ==========================================
          PROJECTS
      ========================================== */}

      <section className="portfolioPreviewSection">

        <div className="portfolioPreviewSectionHeading">

          <Rocket size={22} />

          <h2>
            Featured Projects
          </h2>

        </div>


        <div className="portfolioPreviewProjects">

          {

            projects.length > 0 ? (

              projects.map(
                (project, index) => (

                  <article
                    key={
                      project.id ||
                      project.title ||
                      index
                    }
                    className="portfolioPreviewProject"
                  >

                    <h3>
                      {
                        project.title ||
                        "Engineering Project"
                      }
                    </h3>


                    <p>
                      {
                        project.description ||
                        "A practical engineering project developed during the PBody FullStack Academy learning journey."
                      }
                    </p>


                    <strong>
                      {
                        project.tech ||
                        "Full Stack Development"
                      }
                    </strong>


                    <button
                      type="button"
                      onClick={() =>
                        openProject(project)
                      }
                    >

                      View Project

                      <ExternalLink
                        size={16}
                      />

                    </button>

                  </article>

                )
              )

            ) : (

              <article className="portfolioPreviewProject">

                <div className="portfolioEmptyIcon">

                  <Rocket size={28} />

                </div>


                <h3>
                  Your Engineering Projects
                </h3>


                <p>

                  Complete academy projects and they
                  will appear here as part of your
                  professional portfolio.

                </p>


                <button
                  type="button"
                  onClick={() =>
                    navigate("/projects")
                  }
                >

                  Explore Projects

                  <ExternalLink
                    size={16}
                  />

                </button>

              </article>

            )

          }

        </div>

      </section>


      {/* ==========================================
          ACHIEVEMENTS
      ========================================== */}

      <section className="portfolioPreviewSection">

        <div className="portfolioPreviewSectionHeading">

          <Award size={22} />

          <h2>
            Achievements
          </h2>

        </div>


        <div className="portfolioAchievementGrid">

          <div>

            <Award size={22} />

            <strong>
              PBODY Engineering Learner
            </strong>

            <span>
              Active Academy Developer
            </span>

          </div>


          <div>

            <Rocket size={22} />

            <strong>
              Project Based Learning
            </strong>

            <span>
              Practical Engineering Experience
            </span>

          </div>

        </div>

      </section>


      {/* ==========================================
          CONTACT
      ========================================== */}

      <section className="portfolioPreviewContact">

        <h2>
          Let's Build Something Great
        </h2>


        <p>

          Interested in working together?
          Get in touch and let's create something meaningful.

        </p>


        <div>


          {
            user?.email && (

              <a
                href={`mailto:${user.email}`}
              >

                <Mail size={18} />

                {user.email}

              </a>

            )
          }


          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >

            <Code2 size={18} />

            GitHub

          </a>


        </div>

      </section>


      {/* ==========================================
          FOOTER
      ========================================== */}

      <footer className="portfolioPreviewFooter">

        <strong>
          PBODY FULLSTACK ACADEMY
        </strong>

        <span>
          AI Powered • Project Based • Career Focused
        </span>

      </footer>


    </div>

  );

}