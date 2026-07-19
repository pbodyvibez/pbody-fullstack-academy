import { createContext, useContext, useState } from "react";
import studentData from "../data/studentData";

const CourseContext = createContext();

export function CourseProvider({ children }) {

  const [student, setStudent] = useState(studentData);

  const addXP = (amount) => {

    setStudent((prev) => {

      const newXP = prev.xp + amount;

      let level = prev.level;

      let nextLevelXP = prev.nextLevelXP;

      while (newXP >= nextLevelXP) {

        level++;

        nextLevelXP += 1000;

      }

      return {

        ...prev,

        xp: newXP,

        level,

        nextLevelXP,

      };

    });

  };

  const completeCourse = () => {

    addXP(250);

  };

  const completeQuiz = () => {

    addXP(100);

  };

  const completeProject = () => {

    addXP(500);

  };

  return (

    <CourseContext.Provider

      value={{

        student,

        addXP,

        completeCourse,

        completeQuiz,

        completeProject,

      }}

    >

      {children}

    </CourseContext.Provider>

  );

}

export function useCourse() {

  const context = useContext(CourseContext);

  if (!context) {

    throw new Error("useCourse must be used inside CourseProvider");

  }

  return context;

}