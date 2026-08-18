// =====================================================
// PBODY FULLSTACK ACADEMY
// PREMIUM ENGINEERING CLASSROOM
// COURSE PAGE
// FULL REPLACEMENT
// =====================================================

import React, {
  useEffect,
  useMemo,
  useState
} from "react";

import {
  useNavigate,
  useParams
} from "react-router-dom";

import {
  Award,
  BookOpen,
  Brain,
  ChevronRight,
  GraduationCap,
  Lock,
  PlayCircle,
  Rocket
} from "lucide-react";

import courses from "../data/courses";
import lessonsData from "../data";

import CourseHeader from "../components/course/CourseHeader";
import LessonSidebar from "../components/course/LessonSidebar";
import VideoPlayer from "../components/course/VideoPlayer";
import LessonNavigation from "../components/course/LessonNavigation";
import LessonResources from "../components/course/LessonResources";
import ProgressCard from "../components/course/ProgressCard";
import AIMentor from "../components/course/AIMentor";
import LessonNotes from "../components/course/LessonNotes";
import LessonQuiz from "../components/course/LessonQuiz";
import CompleteLesson from "../components/course/CompleteLesson";
import { useProgress } from "../context/ProgressContext";
import { useSubscription } from "../context/SubscriptionContext";

import "../components/course/course.css";


// =====================================================
// COURSE PAGE
// =====================================================

export default function CoursePage() {

  const { id } = useParams();

  const navigate = useNavigate();


  // ===================================================
  // CONTEXT
  // ===================================================

  const progressContext = useProgress();
  const subscriptionContext = useSubscription();

  const progress =
    progressContext?.progress || {};

  const isPremium =
    subscriptionContext?.isPremium || false;


  // ===================================================
  // FIND COURSE
  // ===================================================

  const course = useMemo(() => {

    if (!Array.isArray(courses)) {
      return null;
    }

    return (
      courses.find(
        item =>
          String(item?.id) === String(id)
      ) || null
    );

  }, [id]);


  // ===================================================
  // COURSE → LESSON DATA CONNECTION
  // ===================================================

  const lessons = useMemo(() => {

    if (!id || !lessonsData) {
      return [];
    }


    const aliases = {

      "frontend-engineering":
        "frontend",

      "frontend-development":
        "frontend",

      "backend-engineering":
        "backend",

      "backend-development":
        "backend",

      "fullstack-engineering":
        "fullstack",

      "artificial-intelligence-engineering":
        "ai",

      "mobile-app-engineering":
        "mobile",

      "devops-cloud-engineering":
        "devops",

      "cybersecurity-engineering":
        "cybersecurity",

      "software-testing-engineering":
        "testing",

      "ui-ux-engineering":
        "uiux",

      "data-engineering":
        "data",

      "graphics-design":
        "graphics",

      "video-editing":
        "videoEditing",

      "business":
        "business"

    };


    const key =
      aliases[id] || id;


    const data =
      lessonsData[key];


    // -----------------------------------------------
    // ARRAY
    // -----------------------------------------------

    if (Array.isArray(data)) {
      return data;
    }


    // -----------------------------------------------
    // { lessons: [] }
    // -----------------------------------------------

    if (
      data &&
      Array.isArray(data.lessons)
    ) {
      return data.lessons;
    }


    // -----------------------------------------------
    // { modules: [] }
    // -----------------------------------------------

    if (
      data &&
      Array.isArray(data.modules)
    ) {

      return data.modules.flatMap(
        module =>
          Array.isArray(module?.lessons)
            ? module.lessons
            : []
      );

    }


    // -----------------------------------------------
    // OBJECT OF LESSON ARRAYS
    // -----------------------------------------------

    if (
      data &&
      typeof data === "object"
    ) {

      const values =
        Object.values(data);

      const flattened =
        values.flatMap(value => {

          if (Array.isArray(value)) {
            return value;
          }

          if (
            value &&
            Array.isArray(value.lessons)
          ) {
            return value.lessons;
          }

          return [];

        });

      if (flattened.length > 0) {
        return flattened;
      }

    }


    return [];

  }, [id]);


  // ===================================================
  // CURRENT LESSON
  // ===================================================

  const [
    currentLesson,
    setCurrentLesson
  ] = useState(null);


  // ===================================================
  // RESET LESSON WHEN COURSE CHANGES
  // ===================================================

  useEffect(() => {

    if (
      Array.isArray(lessons) &&
      lessons.length > 0
    ) {

      setCurrentLesson(
        lessons[0]
      );

    } else {

      setCurrentLesson(null);

    }

  }, [id, lessons]);


  // ===================================================
  // COMPLETED LESSONS
  // ===================================================

  const completedLessons =
    useMemo(() => {

      const completed =
        Array.isArray(progress?.completedLessons)
          ? progress.completedLessons
          : [];


      return lessons.filter(
        lesson => {

          return completed.some(
            item => {

              const completedId =
                typeof item === "object"
                  ? item?.id
                  : item;

              return (
                String(completedId) ===
                String(lesson?.id)
              );

            }
          );

        }
      );

    }, [
      progress,
      lessons
    ]);


  // ===================================================
  // PROGRESS
  // ===================================================

  const progressPercentage =
    useMemo(() => {

      if (
        !lessons ||
        lessons.length === 0
      ) {
        return 0;
      }

      return Math.min(
        100,
        Math.max(
          0,
          Math.round(
            (
              completedLessons.length /
              lessons.length
            ) * 100
          )
        )
      );

    }, [
      completedLessons,
      lessons
    ]);


  // ===================================================
  // NEXT LESSON
  // ===================================================

  const nextLesson = () => {

    if (!currentLesson) {
      return;
    }


    const index =
      lessons.findIndex(
        lesson =>
          String(lesson?.id) ===
          String(currentLesson?.id)
      );


    if (
      index >= 0 &&
      index < lessons.length - 1
    ) {

      setCurrentLesson(
        lessons[index + 1]
      );

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    }

  };


  // ===================================================
  // PREVIOUS LESSON
  // ===================================================

  const previousLesson = () => {

    if (!currentLesson) {
      return;
    }


    const index =
      lessons.findIndex(
        lesson =>
          String(lesson?.id) ===
          String(currentLesson?.id)
      );


    if (index > 0) {

      setCurrentLesson(
        lessons[index - 1]
      );

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    }

  };


  // ===================================================
  // COURSE NOT FOUND
  // ===================================================

  if (!course) {

    return (

      <div className="courseNotFound">

        <div className="premiumLockIcon">
          <BookOpen size={44} />
        </div>

        <h1>
          PBODY FULLSTACK ACADEMY
        </h1>

        <h2>
          Course Not Found
        </h2>

        <p>
          This engineering pathway does not exist
          or is no longer available.
        </p>

        <button
          type="button"
          className="primaryButton"
          onClick={() =>
            navigate("/courses")
          }
        >
          Return To Courses
        </button>

      </div>

    );

  }


  // ===================================================
  // PREMIUM PROTECTION
  // ===================================================

  if (
    course.access === "premium" &&
    !isPremium
  ) {

    return (

      <div className="premiumCourseLock">

        <div className="premiumLockHeader">

          <div className="premiumLockIcon">
            <Lock size={50} />
          </div>

          <h1>
            {course.title}
          </h1>

          <p>
            Premium Professional Engineering Pathway
          </p>

        </div>


        <div className="premiumUnlockContent">

          <h2>
            Unlock Your Engineering Potential
          </h2>

          <p>
            This professional engineering pathway
            is available to PBody Pro members.
            Unlock the complete classroom experience,
            projects, assessments, AI mentorship and
            certificate pathway.
          </p>


          <div className="premiumBenefits">

            <div className="premiumBenefitCard">

              <Rocket size={28} />

              <h3>
                Real Projects
              </h3>

              <p>
                Build portfolio-ready applications
                through practical engineering projects.
              </p>

            </div>


            <div className="premiumBenefitCard">

              <Brain size={28} />

              <h3>
                AI Mentor
              </h3>

              <p>
                Receive intelligent assistance while
                learning each engineering concept.
              </p>

            </div>


            <div className="premiumBenefitCard">

              <Award size={28} />

              <h3>
                Certificate
              </h3>

              <p>
                Complete your pathway and earn your
                professional PBody certificate.
              </p>

            </div>

          </div>


          <button
            type="button"
            className="primaryButton"
            onClick={() =>
              navigate("/pricing")
            }
          >
            Upgrade To Premium
          </button>

        </div>

      </div>

    );

  }


  // ===================================================
  // LESSON DATA PROTECTION
  // ===================================================

  if (
    !Array.isArray(lessons) ||
    lessons.length === 0
  ) {

    return (

      <div className="courseNotFound">

        <div className="premiumLockIcon">
          <BookOpen size={44} />
        </div>

        <h1>
          {course.title}
        </h1>

        <h2>
          Lessons Coming Soon
        </h2>

        <p>
          Lessons for this engineering pathway
          are currently being prepared.
        </p>

        <button
          type="button"
          className="primaryButton"
          onClick={() =>
            navigate("/courses")
          }
        >
          Back To Courses
        </button>

      </div>

    );

  }


  // ===================================================
  // CLASSROOM
  // ===================================================

  return (

    <div className="courseWorkspace">

      {/* =============================================
          COURSE HEADER
      ============================================= */}

      <CourseHeader
        course={course}
        progress={progressPercentage}
      />


      {/* =============================================
          CLASSROOM LAYOUT
      ============================================= */}

      <div className="classroomLayout">


        {/* ===========================================
            LEFT SIDEBAR
        =========================================== */}

        <aside className="classroomSidebar">

          <LessonSidebar
            course={course}
            lessons={lessons}
            currentLesson={currentLesson}
            setCurrentLesson={setCurrentLesson}
            navigate={navigate}
          />


          <ProgressCard
            course={course}
            currentLesson={currentLesson}
            completed={completedLessons.length}
            total={lessons.length}
            completedLessons={
              completedLessons.length
            }
            totalLessons={
              lessons.length
            }
            progress={
              progressPercentage
            }
          />


          <AIMentor
            course={course}
            lesson={currentLesson}
          />

        </aside>


        {/* ===========================================
            MAIN CLASSROOM
        =========================================== */}

        <main className="classroomContent">


          {/* =========================================
              VIDEO
          ========================================= */}

          <VideoPlayer
            lesson={currentLesson}
          />


          {/* =========================================
              LEARNING TOOLS
          ========================================= */}

          <div className="learningToolsGrid">

            <LessonNotes
              lesson={currentLesson}
            />

            <LessonResources
              lesson={currentLesson}
            />

          </div>


          {/* =========================================
              QUIZ
          ========================================= */}

          <LessonQuiz
            lesson={currentLesson}
          />


          {/* =========================================
              COMPLETE LESSON
          ========================================= */}

          <CompleteLesson
            lesson={currentLesson}
            course={course}
          />


          {/* =========================================
              NAVIGATION
          ========================================= */}

          <LessonNavigation
            lessons={lessons}
            currentLesson={currentLesson}
            setCurrentLesson={setCurrentLesson}
            lesson={currentLesson}
            onPrevious={previousLesson}
            onNext={nextLesson}
          />


          {/* =========================================
              COURSE SUMMARY
          ========================================= */}

          <section className="lessonSummary">

            <div className="lessonSummaryHeader">

              <BookOpen size={22} />

              <h2>
                Course Overview
              </h2>

            </div>


            <div className="progressStats">

              <div>

                <strong>
                  {lessons.length}
                </strong>

                <span>
                  Total Lessons
                </span>

              </div>


              <div>

                <strong>
                  {completedLessons.length}
                </strong>

                <span>
                  Completed
                </span>

              </div>


              <div>

                <strong>
                  {progressPercentage}%
                </strong>

                <span>
                  Progress
                </span>

              </div>

            </div>


            <div className="careerTags">

              <span>
                <GraduationCap size={14} />
                Career Ready
              </span>

              <span>
                <PlayCircle size={14} />
                Hands-on
              </span>

              <span>
                <Award size={14} />
                Certificate
              </span>

            </div>

          </section>


          {/* =========================================
              CONTINUE LEARNING
          ========================================= */}

          <section className="completeLessonCard">

            <h2>
              Ready For The Next Step?
            </h2>

            <p>
              Complete this lesson, continue through
              the remaining modules, and earn your
              PBODY Fullstack Academy certificate by
              finishing the entire engineering pathway.
            </p>


            <button
              type="button"
              className="courseBackButton"
              onClick={() => {

                if (
                  progressPercentage >= 100
                ) {

                  navigate(
                    "/certificates"
                  );

                } else {

                  nextLesson();

                }

              }}
            >

              {progressPercentage >= 100
                ? "View Certificate"
                : (
                  <>
                    Continue Learning
                    <ChevronRight
                      size={18}
                    />
                  </>
                )
              }

            </button>

          </section>


        </main>

      </div>

    </div>

  );

}