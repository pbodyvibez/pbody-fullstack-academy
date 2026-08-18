// ======================================================
// PBODY FULLSTACK ACADEMY
// PREMIUM LESSON CLASSROOM
// FULL REPLACEMENT
// APP LAYOUT REMOVED
// ======================================================

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
  Play,
  BookOpen,
  Clock3,
  Award,
  CheckCircle,
  FolderOpen,
  Brain,
  Code,
  ChevronLeft,
  ChevronRight,
  Save
} from "lucide-react";

import QuizEngine from "../components/quiz/QuizEngine";

import {
  useProgress
} from "../context/ProgressContext";

import lessonsData from "../data";

import "../styles/lessonView.css";


// ======================================================
// COMPONENT
// ======================================================

export default function LessonView() {

  const navigate = useNavigate();

  const {
    courseId,
    lessonId
  } = useParams();


  // ====================================================
  // PROGRESS
  // ====================================================

  const progressContext =
    useProgress() || {};

  const {
    progress = {},
    completeLesson
  } = progressContext;


  // ====================================================
  // COURSE LESSON DATA
  // ====================================================

  const lessons = useMemo(() => {

    if (!courseId) {
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

      "data-science":
        "data",

      "graphics-design":
        "graphics",

      "video-editing":
        "videoEditing",

      "business-engineering":
        "business",

      "business":
        "business"

    };


    const key =
      aliases[courseId] ||
      courseId;


    const source =
      lessonsData?.[key];


    // --------------------------------------------------
    // DIRECT ARRAY
    // --------------------------------------------------

    if (Array.isArray(source)) {
      return source;
    }


    // --------------------------------------------------
    // { lessons: [] }
    // --------------------------------------------------

    if (
      source &&
      Array.isArray(source.lessons)
    ) {
      return source.lessons;
    }


    // --------------------------------------------------
    // { modules: [{ lessons: [] }] }
    // --------------------------------------------------

    if (
      source &&
      Array.isArray(source.modules)
    ) {

      return source.modules.flatMap(
        module => {

          if (
            module &&
            Array.isArray(module.lessons)
          ) {
            return module.lessons;
          }

          return [];

        }
      );

    }


    // --------------------------------------------------
    // OBJECT CONTAINING ARRAYS / LESSON GROUPS
    // --------------------------------------------------

    if (
      source &&
      typeof source === "object"
    ) {

      const flattened =
        Object.values(source).flatMap(
          value => {

            if (Array.isArray(value)) {
              return value;
            }


            if (
              value &&
              Array.isArray(value.lessons)
            ) {
              return value.lessons;
            }


            if (
              value &&
              Array.isArray(value.modules)
            ) {

              return value.modules.flatMap(
                module =>
                  Array.isArray(
                    module?.lessons
                  )
                    ? module.lessons
                    : []
              );

            }


            return [];

          }
        );


      if (flattened.length) {
        return flattened;
      }

    }


    return [];

  }, [courseId]);


  // ====================================================
  // COURSE INFORMATION
  // ====================================================

  const course = useMemo(() => {

    const titles = {

      frontend:
        "Frontend Engineering",

      backend:
        "Backend Engineering",

      fullstack:
        "Full Stack Engineering",

      ai:
        "Artificial Intelligence Engineering",

      mobile:
        "Mobile App Engineering",

      cybersecurity:
        "Cybersecurity Engineering",

      devops:
        "DevOps & Cloud Engineering",

      testing:
        "Software Testing Engineering",

      uiux:
        "UI/UX Engineering",

      data:
        "Data Engineering",

      dataScience:
        "Data Engineering",

      graphics:
        "Graphics Engineering",

      videoEditing:
        "Video Editing",

      business:
        "Business Engineering"

    };


    return {

      id: courseId,

      title:
        titles[courseId] ||
        "Engineering Course",

      lessons

    };

  }, [
    courseId,
    lessons
  ]);


  // ====================================================
  // CURRENT LESSON
  // ====================================================

  const lesson = useMemo(() => {

    if (!lessons.length) {
      return null;
    }


    return (
      lessons.find(
        item =>
          String(item?.id) ===
          String(lessonId)
      ) || null
    );

  }, [
    lessons,
    lessonId
  ]);


  // ====================================================
  // LESSON INDEX
  // ====================================================

  const lessonIndex = useMemo(() => {

    if (!lesson) {
      return -1;
    }


    return lessons.findIndex(
      item =>
        String(item?.id) ===
        String(lesson.id)
    );

  }, [
    lessons,
    lesson
  ]);


  // ====================================================
  // COMPLETED LESSONS
  // ====================================================

  const completedLessons =
    useMemo(() => {

      if (
        Array.isArray(
          progress?.completedLessons
        )
      ) {

        return progress.completedLessons;

      }

      return [];

    }, [
      progress?.completedLessons
    ]);


  // ====================================================
  // CURRENT LESSON COMPLETION
  // ====================================================

  const isCompleted =
    useMemo(() => {

      if (!lesson) {
        return false;
      }


      return completedLessons.some(
        item => {

          const id =
            typeof item === "object"
              ? item?.id
              : item;


          return (
            String(id) ===
            String(lesson.id)
          );

        }
      );

    }, [
      completedLessons,
      lesson
    ]);


  // ====================================================
  // COURSE PROGRESS
  // ====================================================

  const progressPercent =
    useMemo(() => {

      if (
        !lessons.length ||
        lessonIndex < 0
      ) {
        return 0;
      }


      return Math.round(
        (
          (lessonIndex + 1) /
          lessons.length
        ) * 100
      );

    }, [
      lessons.length,
      lessonIndex
    ]);


  // ====================================================
  // VIDEO SOURCE
  // ====================================================

  const videoSource =
    useMemo(() => {

      if (!lesson) {
        return null;
      }


      // DIRECT VIDEO URL

      if (
        typeof lesson.video === "string" &&
        lesson.video.trim()
      ) {

        return lesson.video.trim();

      }


      // YOUTUBE VIDEO ID

      if (
        typeof lesson.videoId === "string" &&
        lesson.videoId.trim()
      ) {

        return (
          `https://www.youtube.com/embed/${lesson.videoId.trim()}`
        );

      }


      // OBJECT VIDEO

      if (
        lesson.video &&
        typeof lesson.video === "object"
      ) {

        if (
          typeof lesson.video.url === "string" &&
          lesson.video.url.trim()
        ) {

          return lesson.video.url.trim();

        }


        if (
          typeof lesson.video.videoId === "string" &&
          lesson.video.videoId.trim()
        ) {

          return (
            `https://www.youtube.com/embed/${lesson.video.videoId.trim()}`
          );

        }

      }


      return null;

    }, [
      lesson
    ]);


  // ====================================================
  // NOTES
  // ====================================================

  const [
    notes,
    setNotes
  ] = useState("");


  useEffect(() => {

    if (!lesson) {

      setNotes("");

      return;

    }


    const key =
      `lesson-notes-${courseId}-${lesson.id}`;


    const savedNotes =
      localStorage.getItem(key);


    setNotes(
      savedNotes || ""
    );

  }, [
    courseId,
    lesson?.id
  ]);


  // ====================================================
  // AI MESSAGE
  // ====================================================

  const [
    aiMessage,
    setAiMessage
  ] = useState("");


  // ====================================================
  // SAVE NOTES
  // ====================================================

  const saveNotes = () => {

    if (!lesson) {
      return;
    }


    localStorage.setItem(
      `lesson-notes-${courseId}-${lesson.id}`,
      notes
    );


    alert(
      "Engineering notes saved successfully."
    );

  };


  // ====================================================
  // COMPLETE LESSON
  // ====================================================

  const completeCurrentLesson = () => {

    if (
      !lesson ||
      typeof completeLesson !== "function"
    ) {
      return;
    }


    completeLesson({

      ...lesson,

      courseId

    });

  };


  // ====================================================
  // PREVIOUS LESSON
  // ====================================================

  const previousLesson = () => {

    if (
      lessonIndex <= 0
    ) {
      return;
    }


    const previous =
      lessons[
        lessonIndex - 1
      ];


    if (!previous) {
      return;
    }


    navigate(
      `/lesson/${courseId}/${previous.id}`
    );

  };


  // ====================================================
  // NEXT LESSON
  // ====================================================

  const nextLesson = () => {

    if (
      lessonIndex < 0 ||
      lessonIndex >=
        lessons.length - 1
    ) {
      return;
    }


    const next =
      lessons[
        lessonIndex + 1
      ];


    if (!next) {
      return;
    }


    navigate(
      `/lesson/${courseId}/${next.id}`
    );

  };


  // ====================================================
  // OPEN RESOURCE
  // ====================================================

  const openResource = resource => {

    if (
      resource?.url &&
      resource.url !== "#"
    ) {

      window.open(
        resource.url,
        "_blank",
        "noopener,noreferrer"
      );

      return;

    }


    alert(
      "Resource will be added soon."
    );

  };


  // ====================================================
  // DEBUG
  // ====================================================

  console.log(
    "PBODY LESSON VIEW",
    {
      courseId,
      lessonId,
      lessonsCount:
        lessons.length,
      lesson,
      videoSource
    }
  );


  // ====================================================
  // LESSON NOT FOUND
  // ====================================================

  if (!lesson) {

    return (

      <div className="lessonClassroomShell">

        <div className="lessonNotFound">

          <div className="lessonNotFoundIcon">

            <BookOpen
              size={42}
            />

          </div>


          <h1>
            PBODY FULLSTACK ACADEMY
          </h1>


          <h2>
            Lesson Not Found
          </h2>


          <p>
            This engineering lesson could not
            be found in the selected course.
          </p>


          <button
            type="button"
            className="primaryButton"
            onClick={() =>
              navigate(
                `/course/${courseId}`
              )
            }
          >
            Return To Course
          </button>

        </div>

      </div>

    );

  }


  // ====================================================
  // RENDER
  // ====================================================

  return (

    <div className="lessonClassroomShell">


      {/* ==================================================
          TOP BAR
      ================================================== */}

      <header className="lessonClassroomHeader">

        <div className="lessonHeaderBrand">

          <BookOpen
            size={22}
          />

          <div>

            <strong>
              PBODY FULLSTACK ACADEMY
            </strong>

            <span>
              Engineering Classroom
            </span>

          </div>

        </div>


        <button
          type="button"
          className="lessonBackButton"
          onClick={() =>
            navigate(
              `/course/${courseId}`
            )
          }
        >
          ← Back To Course
        </button>

      </header>


      {/* ==================================================
          MAIN WORKSPACE
      ================================================== */}

      <main className="lessonWorkspace">


        {/* =================================================
            HERO
        ================================================= */}

        <section className="lessonHero">

          <div className="lessonHeroLeft">

            <div className="lessonBadge">

              <BookOpen
                size={18}
              />

              <span>
                PBODY FULLSTACK ACADEMY
              </span>

            </div>


            <h1>
              {lesson.title}
            </h1>


            <p>
              {
                lesson.description ||
                "Professional software engineering lesson."
              }
            </p>


            <div className="lessonMeta">


              <div className="metaCard">

                <Clock3
                  size={20}
                />

                <div>

                  <strong>
                    {
                      lesson.duration ||
                      "30 mins"
                    }
                  </strong>

                  <span>
                    Duration
                  </span>

                </div>

              </div>


              <div className="metaCard">

                <Award
                  size={20}
                />

                <div>

                  <strong>
                    {
                      lesson.xp ||
                      50
                    } XP
                  </strong>

                  <span>
                    Reward
                  </span>

                </div>

              </div>


              <div className="metaCard">

                <CheckCircle
                  size={20}
                />

                <div>

                  <strong>
                    {progressPercent}%
                  </strong>

                  <span>
                    Course Progress
                  </span>

                </div>

              </div>


            </div>


            <div className="progressWrapper">

              <div
                className="progressBar"
                style={{
                  width:
                    `${progressPercent}%`
                }}
              />

            </div>

          </div>


          <div className="lessonHeroRight">

            <div className="videoPreview">

              <Play
                size={58}
              />

              <h3>
                Engineering Classroom
              </h3>

              <p>
                Premium Developer Training
              </p>

            </div>

          </div>

        </section>


        {/* =================================================
            VIDEO
        ================================================= */}

        <section className="lessonPanel">

          <h2>
            🎥 Lesson Video
          </h2>


          <div className="videoFrame">

            {
              videoSource
                ? (

                  <iframe
                    key={videoSource}
                    src={videoSource}
                    title={
                      lesson.title ||
                      "PBODY Engineering Lesson"
                    }
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                  />

                )
                : (

                  <div className="emptyCard">

                    <Play
                      size={35}
                    />

                    <h3>
                      Video Coming Soon
                    </h3>

                    <p>
                      This lesson video is being
                      prepared by PBODY Academy.
                    </p>

                  </div>

                )
            }

          </div>

        </section>


        {/* =================================================
            OBJECTIVES
        ================================================= */}

        <section className="lessonPanel">

          <h2>
            🎯 What You Will Learn
          </h2>


          <div className="objectiveGrid">

            {
              Array.isArray(
                lesson.objectives
              ) &&
              lesson.objectives.length > 0

                ? (

                  lesson.objectives.map(
                    (
                      objective,
                      index
                    ) => (

                      <div
                        className="objectiveCard"
                        key={index}
                      >

                        <CheckCircle
                          size={18}
                        />

                        <p>
                          {objective}
                        </p>

                      </div>

                    )
                  )

                )
                : (

                  <div className="emptyCard">
                    No objectives available.
                  </div>

                )
            }

          </div>

        </section>


        {/* =================================================
            RESOURCES
        ================================================= */}

        <section className="lessonPanel">

          <h2>
            📚 Engineering Resources
          </h2>


          <div className="resourceGrid">

            {
              Array.isArray(
                lesson.resources
              ) &&
              lesson.resources.length > 0

                ? (

                  lesson.resources.map(
                    (
                      resource,
                      index
                    ) => (

                      <div
                        className="resourceCard"
                        key={index}
                      >

                        <div className="resourceLeft">

                          <div className="resourceIcon">

                            {
                              resource?.type === "pdf"
                                ? "📄"
                                : resource?.type === "zip"
                                  ? "📦"
                                  : resource?.type === "video"
                                    ? "🎥"
                                    : "📁"
                            }

                          </div>


                          <div>

                            <h3>
                              {
                                resource?.title ||
                                "Engineering Resource"
                              }
                            </h3>


                            <span>
                              {
                                resource?.type ||
                                "RESOURCE"
                              }
                            </span>

                          </div>

                        </div>


                        <button
                          type="button"
                          className="primaryButton"
                          onClick={() =>
                            openResource(
                              resource
                            )
                          }
                        >

                          <FolderOpen
                            size={16}
                          />

                          Open

                        </button>

                      </div>

                    )
                  )

                )
                : (

                  <div className="emptyCard">
                    Resources will be added soon.
                  </div>

                )
            }

          </div>

        </section>


        {/* =================================================
            ASSIGNMENT
        ================================================= */}

        {
          lesson.assignment && (

            <section className="lessonPanel">

              <h2>
                🚀 Engineering Assignment
              </h2>


              <div className="assignmentCard">

                <h3>
                  {
                    lesson.assignment.title
                  }
                </h3>


                <p>
                  {
                    lesson.assignment.description
                  }
                </p>


                <div className="assignmentMeta">

                  <span>
                    ⭐ {lesson.xp || 50} XP
                  </span>


                  <span>
                    🔥 {
                      lesson.difficulty ||
                      "Beginner"
                    }
                  </span>

                </div>


                <button
                  type="button"
                  className="primaryButton"
                  onClick={() =>
                    navigate(
                      "/assignment",
                      {
                        state: {
                          course,
                          lesson
                        }
                      }
                    )
                  }
                >
                  Start Assignment
                </button>

              </div>

            </section>

          )
        }


        {/* =================================================
            AI MENTOR
        ================================================= */}

        <section className="lessonPanel">

          <h2>
            🤖 PBODY AI Engineering Mentor
          </h2>


          <p>
            Need help understanding this lesson?
            Ask your AI engineering assistant.
          </p>


          <div className="aiBox">

            <textarea
              value={aiMessage}
              onChange={event =>
                setAiMessage(
                  event.target.value
                )
              }
              placeholder="Ask AI about this lesson, code, concepts or errors..."
            />


            <button
              type="button"
              className="primaryButton"
              onClick={() => {

                const prompt =
                  aiMessage.trim();


                if (!prompt) {
                  return;
                }


                navigate(
                  "/ai-mentor",
                  {
                    state: {
                      course,
                      lesson,
                      prompt
                    }
                  }
                );

              }}
            >

              <Brain
                size={18}
              />

              Ask AI Mentor

            </button>

          </div>

        </section>


        {/* =================================================
            NOTES
        ================================================= */}

        <section className="lessonPanel">

          <h2>
            📝 Engineering Notes
          </h2>


          <textarea
            className="notesArea"
            value={notes}
            onChange={event =>
              setNotes(
                event.target.value
              )
            }
            placeholder="Write your engineering notes here..."
          />


          <button
            type="button"
            className="primaryButton"
            onClick={saveNotes}
          >

            <Save
              size={18}
            />

            Save Notes

          </button>

        </section>


        {/* =================================================
            QUIZ
        ================================================= */}

        {
          Array.isArray(
            lesson.quiz
          ) &&
          lesson.quiz.length > 0 && (

            <section className="lessonPanel">

              <h2>
                🧠 Lesson Assessment
              </h2>


              <p>
                Complete this assessment
                and earn XP.
              </p>


              <QuizEngine
                questions={
                  lesson.quiz
                }
                lesson={lesson}
                onComplete={
                  completeCurrentLesson
                }
              />

            </section>

          )
        }


        {/* =================================================
            CODE CHALLENGE
        ================================================= */}

        {
          lesson.codeChallenge && (

            <section className="lessonPanel">

              <h2>
                💻 Code Playground
              </h2>


              <p>
                Practice your engineering
                skills by solving the coding
                challenge.
              </p>


              <button
                type="button"
                className="primaryButton"
                onClick={() =>
                  navigate(
                    "/playground",
                    {
                      state: {
                        course,
                        lesson
                      }
                    }
                  )
                }
              >

                <Code
                  size={18}
                />

                Open Developer Playground

              </button>

            </section>

          )
        }


        {/* =================================================
            LESSON NAVIGATION
        ================================================= */}

        <section className="lessonNavigation">


          <button
            type="button"
            className="secondaryButton"
            disabled={
              lessonIndex <= 0
            }
            onClick={
              previousLesson
            }
          >

            <ChevronLeft
              size={18}
            />

            Previous Lesson

          </button>


          <button
            type="button"
            className="completeButton"
            disabled={
              isCompleted
            }
            onClick={
              completeCurrentLesson
            }
          >

            {
              isCompleted
                ? "✅ Lesson Completed"
                : "🚀 Complete Lesson"
            }

          </button>


          <button
            type="button"
            className="primaryButton"
            disabled={
              lessonIndex >=
              lessons.length - 1
            }
            onClick={
              nextLesson
            }
          >

            Next Lesson

            <ChevronRight
              size={18}
            />

          </button>

        </section>


        {/* =================================================
            COURSE SUMMARY
        ================================================= */}

        <section className="lessonSummary">

          <div className="lessonSummaryHeader">

            <BookOpen
              size={22}
            />

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
                {
                  completedLessons.length
                }
              </strong>

              <span>
                Completed
              </span>

            </div>


            <div>

              <strong>
                {progressPercent}%
              </strong>

              <span>
                Progress
              </span>

            </div>


          </div>


          <div className="careerTags">

            <span>
              🎓 Career Ready
            </span>

            <span>
              ▶ Hands-on
            </span>

            <span>
              🏆 Certificate
            </span>

          </div>

        </section>


      </main>

    </div>

  );

}