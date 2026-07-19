import { createContext, useContext, useEffect, useState } from "react";

const ProgressContext = createContext();

export function ProgressProvider({ children }) {

  const [progress, setProgress] = useState(() => {

    return JSON.parse(
      localStorage.getItem("courseProgress")
    ) || {

      completedLessons: [],
      completedQuizzes: [],
      unlockedLessons: [1],
      currentLesson: 1,
      totalXP: 0

    };

  });

  useEffect(() => {

    localStorage.setItem(
      "courseProgress",
      JSON.stringify(progress)
    );

  }, [progress]);

  // ===========================
  // COMPLETE LESSON
  // ===========================

  const completeLesson = (lesson) => {

    setProgress((prev) => {

      if (
        prev.completedLessons.includes(lesson.id)
      ) {
        return prev;
      }

      return {

        ...prev,

        completedLessons: [

          ...prev.completedLessons,

          lesson.id

        ],

        currentLesson: lesson.id,

        totalXP: prev.totalXP + lesson.xp

      };

    });

  };

  // ===========================
  // COMPLETE QUIZ
  // ===========================

  const completeQuiz = (lessonId) => {

    setProgress((prev) => {

      let unlocked = [...prev.unlockedLessons];

      if (!unlocked.includes(lessonId + 1)) {

        unlocked.push(lessonId + 1);

      }

      return {

        ...prev,

        completedQuizzes: [

          ...prev.completedQuizzes,

          lessonId

        ],

        unlockedLessons: unlocked

      };

    });

  };

  // ===========================
  // CURRENT LESSON
  // ===========================

  const setCurrentLesson = (lessonId) => {

    setProgress((prev) => ({

      ...prev,

      currentLesson: lessonId

    }));

  };

  // ===========================
  // RESET COURSE
  // ===========================

  const resetProgress = () => {

    localStorage.removeItem("courseProgress");

    setProgress({

      completedLessons: [],
      completedQuizzes: [],
      unlockedLessons: [1],
      currentLesson: 1,
      totalXP: 0

    });

  };

  return (

    <ProgressContext.Provider

      value={{

        progress,

        completeLesson,

        completeQuiz,

        setCurrentLesson,

        resetProgress

      }}

    >

      {children}

    </ProgressContext.Provider>

  );

}

export function useProgress() {

  return useContext(ProgressContext);

}