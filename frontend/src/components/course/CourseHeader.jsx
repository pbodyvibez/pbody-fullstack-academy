import Logo from "../../assets/images/logo.png";

import { useNavigate } from "react-router-dom";

import "./course.css";

export default function CourseHeader({ course, progress = 0 }) {
  const navigate = useNavigate();

  if (!course) {
    return null;
  }

  return (
    <header className="courseHeader">

      {/* =========================================
          TOP BAR
      ========================================= */}

      <div className="courseHeaderTop">

        <button
          type="button"
          className="courseBackButton"
          onClick={() => navigate("/courses")}
        >
          ← Back to Courses
        </button>


        <div className="academyIdentity">

          <img
            src={Logo}
            alt="PBody Fullstack Academy"
          />

          <div className="academyText">

            <h3>
              PBODY FULLSTACK ACADEMY
            </h3>

            <p>
              Building the world's next generation
              of elite software engineers.
            </p>

          </div>

        </div>

      </div>


      {/* =========================================
          COURSE HERO
      ========================================= */}

      <div className="courseHeroContent">

        {/* COURSE IMAGE */}

        <div className="courseThumbnail">

          <img
            src={
              course.thumbnail ||
              course.image
            }
            alt={course.title}
          />

          <span
            className={
              course.access === "premium"
                ? "headerPremium"
                : "headerFree"
            }
          >
            {course.access === "premium"
              ? "⭐ PREMIUM"
              : "🚀 FREE"}
          </span>

        </div>


        {/* COURSE INFORMATION */}

        <div className="courseInformation">

          <div className="courseTitleRow">

            <span className="courseIcon">
              {course.icon || "🎓"}
            </span>

            <span className="courseCategory">
              {course.category ||
                "Engineering Pathway"}
            </span>

          </div>


          <h1>
            {course.title}
          </h1>


          <p>
            {course.description}
          </p>


          {/* COURSE METADATA */}

          <div className="courseMeta">

            <span>
              ⭐ {course.rating || "4.9"}
            </span>

            <span>
              👨‍🎓{" "}
              {course.students
                ? course.students.toLocaleString()
                : "10,000+"}{" "}
              Students
            </span>

            <span>
              📚 {course.lessons || 0} Lessons
            </span>

            <span>
              ⏱ {course.duration || "Self Paced"}
            </span>

            <span>
              🏆 Professional Certificate
            </span>

          </div>


          {/* TECHNOLOGIES */}

          {Array.isArray(course.technologies) &&
            course.technologies.length > 0 && (

              <div className="careerTags">

                {course.technologies
                  .slice(0, 6)
                  .map((technology, index) => (
                    <span key={index}>
                      {technology}
                    </span>
                  ))}

              </div>

            )}


          {/* COURSE PROGRESS */}

          <div className="courseHeaderProgress">

            <div className="courseHeaderProgressTop">

              <span>
                Engineering Progress
              </span>

              <strong>
                {progress}%
              </strong>

            </div>

            <div className="courseHeaderProgressBar">

              <div
                className="courseHeaderProgressFill"
                style={{
                  width: `${Math.min(
                    Math.max(progress, 0),
                    100
                  )}%`
                }}
              />

            </div>

          </div>

        </div>

      </div>

    </header>
  );
}