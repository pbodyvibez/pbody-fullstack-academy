// ===============================================
// PBODY FULLSTACK ACADEMY
// AI LESSON TRACKER
// ===============================================

import { useEffect } from "react";
import useAI from "../../ai/useAI";

export default function AILessonTracker({ lesson }) {

  const { setLesson } = useAI();

  useEffect(() => {

    if (!lesson) return;

    setLesson(lesson);

  }, [lesson]);

  return null;
}