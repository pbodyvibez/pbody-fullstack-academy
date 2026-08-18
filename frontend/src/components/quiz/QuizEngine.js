// ===============================================
// PBODY FULLSTACK ACADEMY
// QUIZ ENGINE
// FULL REPLACEMENT
// ===============================================

import {
  useEffect,
  useMemo,
  useState
} from "react";

import "../../styles/quizEngine.css";

import {
  calculateQuizResult
} from "../../data/quizzes/quizEngine";

import {
  prepareQuiz
} from "../../data/quizzes/quizUtils";

import {
  useProgress
} from "../../context/ProgressContext";

import {
  useUserEngine
} from "../../context/UserEngineContext";


// ===============================================
// COMPONENT
// ===============================================

export default function QuizEngine({

  questions = [],

  lesson,

  onComplete

}) {


  const {
    completeQuiz
  } = useProgress();


  const {
    addXP
  } = useUserEngine();


  // =============================================
  // PREPARE QUESTIONS
  // =============================================

  const quizQuestions =
    useMemo(() => {

      if (
        Array.isArray(questions) &&
        questions.length > 0
      ) {

        return questions;

      }


      if (
        Array.isArray(lesson?.quiz) &&
        lesson.quiz.length > 0
      ) {

        return lesson.quiz;

      }


      return [];

    }, [
      questions,
      lesson
    ]);


  const preparedQuestions =
    useMemo(() => {

      if (
        quizQuestions.length === 0
      ) {

        return [];

      }


      return prepareQuiz(
        quizQuestions
      );

    }, [
      quizQuestions
    ]);


  // =============================================
  // STATE
  // =============================================

  const [
    current,
    setCurrent
  ] = useState(0);


  const [
    answers,
    setAnswers
  ] = useState([]);


  const [
    selected,
    setSelected
  ] = useState(null);


  const [
    finished,
    setFinished
  ] = useState(false);


  const [
    resultRecorded,
    setResultRecorded
  ] = useState(false);


  // =============================================
  // RECORD RESULT ONCE
  // =============================================

  const result =
    useMemo(() => {

      if (
        !finished ||
        preparedQuestions.length === 0
      ) {

        return null;

      }


      return calculateQuizResult(
        preparedQuestions,
        answers
      );

    }, [
      finished,
      preparedQuestions,
      answers
    ]);


  useEffect(() => {

    if (
      !finished ||
      !result ||
      resultRecorded
    ) {

      return;

    }


    setResultRecorded(true);


    if (result.passed) {

      if (
        typeof completeQuiz ===
        "function"
      ) {

        completeQuiz(
          lesson?.id
        );

      }


      if (
        typeof addXP ===
        "function"
      ) {

        addXP(
          result.xpEarned
        );

      }

    }

  }, [
    finished,
    result,
    resultRecorded,
    completeQuiz,
    addXP,
    lesson?.id
  ]);


  // =============================================
  // NO QUESTIONS
  // =============================================

  if (
    preparedQuestions.length === 0
  ) {

    return (

      <div className="quizResult">

        <div className="resultIcon">
          📚
        </div>

        <h2>
          No Questions Available
        </h2>

        <p>
          This assessment has not been
          added yet.
        </p>

      </div>

    );

  }


  // =============================================
  // SELECT ANSWER
  // =============================================

  const selectAnswer = (
    index
  ) => {

    if (
      selected !== null
    ) {

      return;

    }


    setSelected(index);


    setAnswers(
      (previous) => {

        const updated = [
          ...previous
        ];


        updated[current] =
          index;


        return updated;

      }
    );

  };


  // =============================================
  // NEXT QUESTION
  // =============================================

  const nextQuestion = () => {

    if (
      selected === null
    ) {

      return;

    }


    if (
      current <
      preparedQuestions.length - 1
    ) {

      setCurrent(
        (value) =>
          value + 1
      );


      setSelected(null);


      return;

    }


    setFinished(true);

  };


  // =============================================
  // RESULT
  // =============================================

  if (
    finished &&
    result
  ) {

    return (

      <div className="quizResult">

        <div className="resultIcon">

          {
            result.passed
              ? "🏆"
              : "📚"
          }

        </div>


        <h2>
          Quiz Completed
        </h2>


        <h3>

          {result.score}

          /

          {result.totalQuestions}

        </h3>


        <p>

          Score:

          <strong>
            {" "}
            {result.percentage}%
          </strong>

        </p>


        <p>

          XP Earned:

          <strong>
            {" "}
            ⭐ {result.xpEarned}
          </strong>

        </p>


        <p>

          {

            result.passed

              ? "🎉 Congratulations! You passed this assessment."

              : "📖 Review the lesson and try again to improve your score."

          }

        </p>


        <button

          className="primaryButton"

          type="button"

          onClick={() => {

            if (
              typeof onComplete ===
              "function"
            ) {

              onComplete();

            }

          }}

        >

          Continue Learning 🚀

        </button>


      </div>

    );

  }


  // =============================================
  // CURRENT QUESTION
  // =============================================

  const question =
    preparedQuestions[
      current
    ];


  // =============================================
  // SAFETY
  // =============================================

  if (!question) {

    return (

      <div className="quizResult">

        <h2>
          Quiz Error
        </h2>

        <p>
          This question could not be loaded.
        </p>

      </div>

    );

  }


  const options =
    Array.isArray(
      question.options
    )
      ? question.options
      : [];


  // =============================================
  // RENDER
  // =============================================

  return (

    <div className="quizContainer">


      <div className="quizHeader">

        <span>

          Question{" "}

          {current + 1}

          {" "}

          /

          {" "}

          {preparedQuestions.length}

        </span>


        <h2>

          {
            lesson?.title ||
            "Engineering Assessment"
          }

        </h2>

      </div>


      <div className="questionCard">

        <h3>

          {question.question}

        </h3>


        <div className="answerList">

          {

            options.map(
              (
                option,
                index
              ) => {

                const isSelected =
                  selected ===
                  index;


                return (

                  <button

                    key={index}

                    type="button"

                    className={
                      isSelected
                        ? "selectedAnswer"
                        : ""
                    }

                    onClick={() =>
                      selectAnswer(
                        index
                      )
                    }

                  >

                    <span>

                      {
                        String.fromCharCode(
                          65 + index
                        )
                      }

                    </span>

                    {option}

                  </button>

                );

              }
            )

          }

        </div>

      </div>


      <button

        type="button"

        className="nextQuestion"

        disabled={
          selected === null
        }

        onClick={
          nextQuestion
        }

      >

        {

          current ===
          preparedQuestions.length - 1

            ? "Finish Quiz 🚀"

            : "Next Question ➜"

        }

      </button>


    </div>

  );

}