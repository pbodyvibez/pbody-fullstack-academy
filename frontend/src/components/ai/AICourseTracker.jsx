// ===============================================
// PBODY FULLSTACK ACADEMY
// AI COURSE TRACKER
// FULL REPLACEMENT
// ===============================================

import { useEffect, useRef } from "react";
import useAI from "../../ai/useAI";

export default function AICourseTracker({ course }) {

  const { setCourse } = useAI();

  const lastCourseId = useRef(null);

  useEffect(() => {

    if (!course) {
      return;
    }

    const courseId = course?.id;

    if (!courseId) {
      return;
    }

    if (String(lastCourseId.current) === String(courseId)) {
      return;
    }

    lastCourseId.current = courseId;

    setCourse(course);

  }, [course, setCourse]);

  return null;
}