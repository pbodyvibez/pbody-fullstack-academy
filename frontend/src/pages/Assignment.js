import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

import AppLayout from "../components/layout/AppLayout";

import assignments from "../data/assignments";

import { useProgress } from "../context/ProgressContext";
import { useUserEngine } from "../context/UserEngineContext";

import "../styles/assignment.css";

export default function Assignment() {

  const navigate = useNavigate();

  const location = useLocation();

  const { lesson, course } = location.state || {};

  const assignment =
    assignments[course?.id]?.[lesson?.id];

  const [submitted, setSubmitted] = useState(false);

  const { completeLesson } = useProgress();

  const { completeLesson: addXP } = useUserEngine();

  if (!assignment) {

    return (

      <AppLayout>

        <div
          style={{
            color: "white",
            textAlign: "center",
            padding: "60px"
          }}
        >

          <h1>No Assignment Found</h1>

        </div>

      </AppLayout>

    );

  }

  const submitAssignment = () => {

    if (submitted) return;

    setSubmitted(true);

    addXP(assignment.xp);

    completeLesson({

      id: `${course.id}-${lesson.id}-assignment`,

      xp: assignment.xp

    });

  };

  return (

    <AppLayout>

      <div className="assignment-page">

        <div className="assignment-card">

          <h1>

            📚 {assignment.title}

          </h1>

          <p>

            Complete the following tasks.

          </p>

          <ul>

            {assignment.instructions.map((item,index)=>(

              <li key={index}>

                {item}

              </li>

            ))}

          </ul>

          <div className="assignment-footer">

            <h2>

              Reward

            </h2>

            <h1>

              ⭐ {assignment.xp} XP

            </h1>

            {

              !submitted ?

              (

                <button
                  onClick={submitAssignment}
                >

                  Submit Assignment

                </button>

              )

              :

              (

                <button
                  onClick={()=>
                    navigate("/project",{
                      state:{
                        lesson,
                        course
                      }
                    })
                  }
                >

                  Continue To Project →

                </button>

              )

            }

          </div>

        </div>

      </div>

    </AppLayout>

  );

}