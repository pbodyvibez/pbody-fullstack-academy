// ===============================================
// PBODY FULLSTACK ACADEMY
// AI COURSE TRACKER
// ===============================================

import { useEffect } from "react";
import useAI from "../../ai/useAI";

export default function AICourseTracker({ course }) {

  const { setCourse } = useAI();

  useEffect(() => {

    if (!course) return;

    setCourse(course);

  }, [course]);

  return null;
}