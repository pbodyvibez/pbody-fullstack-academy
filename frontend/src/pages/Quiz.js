import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

import quizzes from "../data/quizzes";

import AppLayout from "../components/layout/AppLayout";

import { useProgress } from "../context/ProgressContext";
import { useUserEngine } from "../context/UserEngineContext";

import "../styles/quiz.css";

export default function Quiz() {

  const navigate = useNavigate();

  const { completeQuiz } = useProgress();

  const { addXP } = useUserEngine();

  const location = useLocation();

  const { lesson, course } = location.state || {};

  const quizBank = quizzes[lesson?.id] || [];

  const [currentQuestion,setCurrentQuestion]=useState(0);

  const [score,setScore]=useState(0);

  const [selected,setSelected]=useState(null);

  const [finished,setFinished]=useState(false);

  if(!lesson||quizBank.length===0){

    return(

      <AppLayout>

        <div
          style={{
            color:"white",
            padding:"60px",
            textAlign:"center"
          }}
        >

          No quiz available for this lesson.

        </div>

      </AppLayout>

    );

  }

  const question=quizBank[currentQuestion];

  const chooseAnswer=(index)=>{

    if(selected!==null)return;

    setSelected(index);

    if(index===question.answer){

      setScore(score+10);

    }

  };

  const nextQuestion=()=>{

    if(currentQuestion+1>=quizBank.length){

      setFinished(true);

      return;

    }

    setCurrentQuestion(currentQuestion+1);

    setSelected(null);

  };

  if(finished){

    const passed=score>=quizBank.length*5;

    if(passed){

      completeQuiz(lesson.id);

      addXP?.(20);

    }

    return(

      <AppLayout>

        <div className="quiz-container">

          <div className="quiz-result">

            <h1>

              {

                passed

                ?

                "🎉 Quiz Passed!"

                :

                "📚 Try Again"

              }

            </h1>

            <h2>

              Score

            </h2>

            <h1>

              {score}

            </h1>

            <button

              onClick={()=>navigate("/lesson",{

                state:{

                  lesson,

                  course

                }

              })}

            >

              Return to Lesson

            </button>

          </div>

        </div>

      </AppLayout>

    );

  }

  return(

    <AppLayout>

      <div className="quiz-container">

        <div className="quiz-card">

          <h2>

            {question.question}

          </h2>

          <div className="quiz-options">

            {

              question.options.map((option,index)=>{

                let cls="quiz-option";

                if(selected!==null){

                  if(index===question.answer){

                    cls+=" correct";

                  }

                  else if(index===selected){

                    cls+=" wrong";

                  }

                }

                return(

                  <button

                    key={index}

                    className={cls}

                    onClick={()=>chooseAnswer(index)}

                  >

                    {option}

                  </button>

                );

              })

            }

          </div>

          <button

            disabled={selected===null}

            onClick={nextQuestion}

          >

            {

              currentQuestion+1===quizBank.length

              ?

              "Finish Quiz"

              :

              "Next"

            }

          </button>

        </div>

      </div>

    </AppLayout>

  );

}