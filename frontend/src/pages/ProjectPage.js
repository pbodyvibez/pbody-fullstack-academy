import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

import AppLayout from "../components/layout/AppLayout";

import projects from "../data/projects";

import { useProgress } from "../context/ProgressContext";
import { useUserEngine } from "../context/UserEngineContext";

import "../styles/projectPage.css";

export default function ProjectPage() {

  const navigate = useNavigate();

  const location = useLocation();

  const { lesson, course } = location.state || {};

  const project =
    projects[course?.id]?.[lesson?.id];

  const [submitted, setSubmitted] = useState(false);

  const { completeLesson } = useProgress();

  const { completeLesson: awardXP } = useUserEngine();

  if (!project) {

    return (

      <AppLayout>

        <div
          style={{
            color: "white",
            textAlign: "center",
            padding: "80px"
          }}
        >

          <h1>No Project Found</h1>

        </div>

      </AppLayout>

    );

  }

  const submitProject = () => {

    if (submitted) return;

    setSubmitted(true);

    awardXP(project.xp);

    completeLesson({

      id: `${course.id}-${lesson.id}-project`,

      xp: project.xp

    });

  };

  return (

    <AppLayout>

      <div className="project-page">

        <div className="project-card">

          <span className="project-badge">

            {project.difficulty}

          </span>

          <h1>

            🚀 {project.title}

          </h1>

          <p>

            {project.description}

          </p>

          <h2>

            Engineering Tasks

          </h2>

          <ul>

            {

              project.tasks.map((task,index)=>(

                <li key={index}>

                  ✅ {task}

                </li>

              ))

            }

          </ul>

          <div className="project-footer">

            <h2>

              Reward

            </h2>

            <h1>

              ⭐ {project.xp} XP

            </h1>

            {

              !submitted ?

              (

                <button
                  onClick={submitProject}
                >

                  Submit Project

                </button>

              )

              :

              (

                <button
                  onClick={()=>
                    navigate("/certificate",{

                      state:{

                        course

                      }

                    })
                  }
                >

                  🎓 Claim Certificate

                </button>

              )

            }

          </div>

        </div>

      </div>

    </AppLayout>

  );

}