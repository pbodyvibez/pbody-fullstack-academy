// ===============================================
// PBODY FULLSTACK ACADEMY
// PROFESSIONAL RESUME PREVIEW
// PREMIUM FULL REPLACEMENT
// ===============================================

import {
  ArrowLeft,
  Download,
  Mail,
  Code2,
  Award,
  CheckCircle
} from "lucide-react";

import {
  useLocation,
  useNavigate
} from "react-router-dom";

import Logo from "../assets/images/logo.png";

import "../styles/resumePreview.css";


// ===============================================
// COMPONENT
// ===============================================

export default function ResumePreview() {

  const navigate = useNavigate();

  const location = useLocation();


  // =============================================
  // DATA
  // =============================================

  const data = location.state || {};

  const user = data.user || {};

  const progress = data.progress || {};


  const skills = Array.isArray(data.skills)
    ? data.skills
    : [
        "Frontend Development",
        "Backend Development",
        "Full Stack Engineering",
        "JavaScript",
        "React",
        "Node.js",
        "REST APIs",
        "Databases",
        "Problem Solving",
        "Software Architecture"
      ];


  const achievements = Array.isArray(data.achievements)
    ? data.achievements
    : [
        `${progress?.totalXP || 0} XP Earned`,
        `${progress?.completedLessons?.length || 0} Lessons Completed`,
        "Professional Engineering Training"
      ];


  // =============================================
  // BACK
  // =============================================

  const goBack = () => {

    navigate("/resume-builder");

    window.setTimeout(() => {

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    }, 100);

  };


  // =============================================
  // DOWNLOAD
  // =============================================

  const downloadResume = () => {

    window.print();

  };


  // =============================================
  // RENDER
  // =============================================

  return (

    <div className="resumePreviewPage">


      {/* ==========================================
          ACTION BAR
      ========================================== */}

      <div className="resumePreviewActions">


        <button
          type="button"
          onClick={goBack}
        >

          <ArrowLeft size={18} />

          Back To Resume Builder

        </button>


        <button
          type="button"
          onClick={downloadResume}
        >

          <Download size={18} />

          Download Resume

        </button>


      </div>


      {/* ==========================================
          PROFESSIONAL RESUME DOCUMENT
      ========================================== */}

      <main className="resumePreviewDocument">


        {/* ========================================
            SINGLE ACADEMY WATERMARK

            The logo is deliberately kept subtle
            and sits behind the resume content.
        ======================================== */}

        <img
          src={Logo}
          alt=""
          aria-hidden="true"
          className="resumePreviewWatermark"
        />


        {/* ========================================
            DOCUMENT CONTENT
        ======================================== */}

        <div className="resumePreviewContent">


          {/* ======================================
              SIMPLE ACADEMY HEADER

              Same restrained branding scale used
              across the academy application.
          ====================================== */}

          <div className="resumePreviewBrand">

            <img
              src={Logo}
              alt="PBody FullStack Academy"
              className="resumePreviewBrandLogo"
            />

            <div className="resumePreviewBrandText">

              <strong>
                PBODY FULLSTACK ACADEMY
              </strong>

              <span>
                SOFTWARE ENGINEERING CAREER CENTER
              </span>

            </div>

          </div>


          {/* ======================================
              CANDIDATE HEADER
          ====================================== */}

          <header className="resumePreviewHeader">


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


            {
              user?.email && (

                <a
                  href={`mailto:${user.email}`}
                  className="resumeEmail"
                >

                  <Mail size={16} />

                  {user.email}

                </a>

              )
            }


          </header>


          {/* ======================================
              SUMMARY
          ====================================== */}

          <section className="resumePreviewSection">


            <div className="resumePreviewSectionTitle">

              <Code2 size={20} />

              <h2>
                Professional Summary
              </h2>

            </div>


            <p>

              Passionate software engineer trained
              through PBody FullStack Academy with
              practical experience building modern
              web applications and solving real-world
              engineering problems through
              project-based learning.

            </p>


          </section>


          {/* ======================================
              TECHNICAL SKILLS
          ====================================== */}

          <section className="resumePreviewSection">


            <div className="resumePreviewSectionTitle">

              <Code2 size={20} />

              <h2>
                Technical Skills
              </h2>

            </div>


            <div className="resumePreviewSkills">

              {
                skills.map(
                  (skill, index) => (

                    <span
                      key={index}
                    >

                      {skill}

                    </span>

                  )
                )
              }

            </div>


          </section>


          {/* ======================================
              PROFESSIONAL TRAINING
          ====================================== */}

          <section className="resumePreviewSection">


            <div className="resumePreviewSectionTitle">

              <Award size={20} />

              <h2>
                Professional Training
              </h2>

            </div>


            <h3>
              PBody FullStack Academy
            </h3>


            <p>
              Full Stack Software Engineering Training
            </p>


            <div className="resumeTrainingStats">


              <span>

                <strong>
                  {progress?.completedLessons?.length || 0}
                </strong>

                <small>
                  Lessons Completed
                </small>

              </span>


              <span>

                <strong>
                  {progress?.totalXP || 0}
                </strong>

                <small>
                  XP Earned
                </small>

              </span>


            </div>


          </section>


          {/* ======================================
              ACHIEVEMENTS
          ====================================== */}

          <section className="resumePreviewSection">


            <div className="resumePreviewSectionTitle">

              <Award size={20} />

              <h2>
                Achievements
              </h2>

            </div>


            <ul className="resumePreviewAchievements">

              {
                achievements.map(
                  (achievement, index) => (

                    <li
                      key={index}
                    >

                      <CheckCircle size={16} />

                      <span>
                        {achievement}
                      </span>

                    </li>

                  )
                )
              }

            </ul>


          </section>


          {/* ======================================
              FOOTER
          ====================================== */}

          <footer className="resumePreviewFooter">


            <div className="resumeFooterBrand">

              <strong>
                PBODY FULLSTACK ACADEMY
              </strong>

            </div>


            <span>
              AI Powered • Project Based • Career Focused
            </span>


          </footer>


        </div>


      </main>


    </div>

  );

}