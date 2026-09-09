// ===============================================
// PBODY FULLSTACK ACADEMY
// AI LESSON TRACKER
// STABLE VERSION
// ===============================================

import {
  useEffect,
  useRef
} from "react";

import useAI from "../../ai/useAI";


export default function AILessonTracker({
  lesson
}) {

  const {
    setLesson
  } = useAI();


  const lastLessonId =
    useRef(null);


  useEffect(() => {

    if (!lesson) {
      return;
    }


    const lessonId =
      lesson?.id ||
      lesson?._id;


    if (!lessonId) {
      return;
    }


    const normalizedId =
      String(lessonId);


    if (
      String(lastLessonId.current) ===
      normalizedId
    ) {
      return;
    }


    lastLessonId.current =
      normalizedId;


    setLesson(lesson);

  }, [
    lesson,
    setLesson
  ]);


  return null;
}