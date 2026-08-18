// ===============================================
// PBODY FULLSTACK ACADEMY
// AI RESUME BUILDER
// PREMIUM FULL REPLACEMENT
// ===============================================

import {
  Sparkles,
  UserCircle,
  Code2,
  Briefcase,
  Award,
  CheckCircle,
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

import Logo from "../assets/images/logo.png";

import "../styles/resumeBuilder.css";


// ===============================================
// COMPONENT
// ===============================================

export default function ResumeBuilder() {

  const navigate = useNavigate();


  // =============================================
  // AUTH
  // =============================================

  const {
    user
  } = useAuth();


  // =============================================
  // PROGRESS
  // =============================================

  const {
    progress
  } = useProgress();


  // =============================================
  // SKILLS
  // =============================================

  const skills = [

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


  // =============================================
  // ACHIEVEMENTS
  // =============================================

  const achievements = [

    `${progress?.totalXP || 0} XP Earned`,

    `${progress?.completedLessons?.length || 0} Lessons Completed`,

    "Professional Engineering Training"

  ];


  // =============================================
  // GENERATE RESUME
  // =============================================

  const generateResume = () => {

    navigate(
      "/resume-builder/preview",
      {
        state: {
          user,
          progress,
          skills,
          achievements
        }
      }
    );

  };


  // =============================================
  // RENDER
  // =============================================

  return (

    <div className="resumeBuilderPage">


      {/* ==========================================
          HERO
      ========================================== */}

      <section className="resumeHero">


        {/* ========================================
            PROFESSIONAL HEADER BRANDING

            Keep logo at the same restrained scale
            used by the academy dashboard headers.
        ======================================== */}

        <div className="resumeBuilderBrand">

          <img
            src={Logo}
            alt="PBody FullStack Academy"
            className="resumeBuilderLogo"
          />

          <div className="resumeBuilderBrandText">

            <strong>
              PBODY FULLSTACK ACADEMY
            </strong>

            <span>
              ENGINEERING CAREER CENTER
            </span>

          </div>

        </div>


        <h1>
          AI Resume Builder
        </h1>


        <p>

          Create a professional software engineering
          resume powered by your PBody FullStack Academy
          learning journey.

        </p>


        <button
          type="button"
          onClick={generateResume}
        >

          <Sparkles size={18} />

          Generate AI Resume

          <ArrowRight size={18} />

        </button>


      </section>


      {/* ==========================================
          PROFILE GRID
      ========================================== */}

      <section className="resumeGrid">


        {/* ========================================
            PERSONAL PROFILE
        ======================================== */}

        <div className="resumeCard">

          <div className="resumeCardIcon">
            <UserCircle size={22} />
          </div>


          <h2>
            Personal Profile
          </h2>


          <p>

            Name:

            <strong>
              {" "}
              {user?.name || "Student Developer"}
            </strong>

          </p>


          <p>

            Role:

            <strong>
              {" "}
              Full Stack Software Engineer
            </strong>

          </p>


          {
            user?.email && (

              <p>

                Email:

                <strong>
                  {" "}
                  {user.email}
                </strong>

              </p>

            )
          }

        </div>


        {/* ========================================
            TECHNICAL SKILLS
        ======================================== */}

        <div className="resumeCard">

          <div className="resumeCardIcon">
            <Code2 size={22} />
          </div>


          <h2>
            Technical Skills
          </h2>


          <div className="tagContainer">

            {
              skills.map(
                (skill, index) => (

                  <span key={index}>
                    {skill}
                  </span>

                )
              )
            }

          </div>

        </div>


        {/* ========================================
            EXPERIENCE
        ======================================== */}

        <div className="resumeCard">

          <div className="resumeCardIcon">
            <Briefcase size={22} />
          </div>


          <h2>
            Experience Profile
          </h2>


          <p>

            Your completed academy projects,
            engineering experience, internships
            and professional milestones will be
            presented in your generated resume.

          </p>

        </div>


        {/* ========================================
            ACHIEVEMENTS
        ======================================== */}

        <div className="resumeCard">

          <div className="resumeCardIcon">
            <Award size={22} />
          </div>


          <h2>
            Achievements
          </h2>


          {
            achievements.map(
              (item, index) => (

                <p
                  key={index}
                  className="resumeAchievement"
                >

                  <CheckCircle size={15} />

                  {item}

                </p>

              )
            )
          }

        </div>


      </section>


      {/* ==========================================
          RESUME PREVIEW
      ========================================== */}

      <section className="resumePreview">


        <div className="resumePreviewHeading">

          <span>
            PROFESSIONAL RESUME
          </span>

          <h2>
            Resume Preview
          </h2>

          <p>

            Your academy profile will be transformed
            into a professional developer resume.

          </p>

        </div>


        {/* ========================================
            RESUME DOCUMENT
        ======================================== */}

        <div className="resumeDocument">


          {/* ======================================
              ACADEMY WATERMARK

              One large, subtle academy logo only.
              It sits behind the document content.
          ====================================== */}

          <img
            src={Logo}
            alt=""
            aria-hidden="true"
            className="resumeWatermark"
          />


          <div className="resumeDocumentContent">


            {/* ====================================
                DOCUMENT HEADER

                No second large logo here.
            ==================================== */}

            <div className="resumeDocumentHeader">


              <div>

                <span className="resumeDocumentLabel">
                  PBODY FULLSTACK ACADEMY
                </span>


                <h1>

                  {
                    user?.name ||
                    "Your Name"
                  }

                </h1>


                <h3>
                  Full Stack Software Engineer
                </h3>


                {
                  user?.email && (

                    <p>
                      {user.email}
                    </p>

                  )
                }

              </div>


            </div>


            <hr />


            {/* ====================================
                SUMMARY
            ==================================== */}

            <h2>
              Professional Summary
            </h2>


            <p>

              Passionate software engineer trained
              through PBody FullStack Academy with
              practical experience in modern web
              development, software engineering and
              project-based learning.

            </p>


            {/* ====================================
                SKILLS
            ==================================== */}

            <h2>
              Technical Skills
            </h2>


            <div className="resumeSkillPreview">

              {
                skills.map(
                  (skill, index) => (

                    <span key={index}>
                      {skill}
                    </span>

                  )
                )
              }

            </div>


            {/* ====================================
                PROFESSIONAL TRAINING
            ==================================== */}

            <h2>
              Professional Training
            </h2>


            <p>

              <strong>
                PBody FullStack Academy
              </strong>

              <br />

              Full Stack Software Engineering Training

            </p>


            {/* ====================================
                ACHIEVEMENTS
            ==================================== */}

            <h2>
              Achievements
            </h2>


            <ul className="resumeAchievementList">

              {
                achievements.map(
                  (item, index) => (

                    <li key={index}>

                      <CheckCircle size={15} />

                      {item}

                    </li>

                  )
                )
              }

            </ul>


            {/* ====================================
                GENERATE
            ==================================== */}

            <button
              type="button"
              className="resumeGenerateButton"
              onClick={generateResume}
            >

              <Sparkles size={18} />

              Generate Professional Resume

              <ArrowRight size={18} />

            </button>


          </div>

        </div>


      </section>


    </div>

  );

}