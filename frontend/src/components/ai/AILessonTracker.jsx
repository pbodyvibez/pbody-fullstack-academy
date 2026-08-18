// ===============================================
// PBODY FULLSTACK ACADEMY
// AI LESSON TRACKER
// FULL REPLACEMENT
// ===============================================

import { useEffect, useRef } from "react";
import useAI from "../../ai/useAI";

export default function AILessonTracker({ lesson }) {

  const { setLesson } = useAI();

  const lastLessonId = useRef(null);

  useEffect(() => {

    if (!lesson) {
      return;
    }

    const lessonId = lesson?.id;

    if (!lessonId) {
      return;
    }

    if (String(lastLessonId.current) === String(lessonId)) {
      return;
    }

    lastLessonId.current = lessonId;

    setLesson(lesson);

  }, [lesson, setLesson]);

  return null;
}