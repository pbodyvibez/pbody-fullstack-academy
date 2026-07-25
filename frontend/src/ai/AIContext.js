// ===============================================
// PBODY FULLSTACK ACADEMY
// AI CONTEXT
// ===============================================

import { createContext } from "react";

const AIContext = createContext();

export const initialAIState = {

  // ===================================
  // SYSTEM
  // ===================================

  initialized: false,

  loading: false,

  typing: false,

  isOpen: false,

  // ===================================
  // USER
  // ===================================

  currentUser: null,

  // ===================================
  // LOCATION
  // ===================================

  currentPage: "",

  currentCourse: null,

  currentLesson: null,

  // ===================================
  // CHAT
  // ===================================

  messages: [],

  suggestions: [],

  // ===================================
  // STUDENT PROGRESS
  // ===================================

  progress: {

    completedLessons: 0,

    completedCourses: 0,

    quizAverage: 0,

    certificates: 0,

    xp: 0,

    streak: 0

  }

};

export default AIContext;