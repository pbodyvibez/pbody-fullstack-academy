// ===============================================
// PBODY FULLSTACK ACADEMY
// AI COURSE TRACKER
// STABLE VERSION
// ===============================================

import {
  useEffect,
  useRef
} from "react";

import useAI from "../../ai/useAI";


export default function AICourseTracker({
  course
}) {

  const {
    setCourse
  } = useAI();


  const lastCourseId =
    useRef(null);


  useEffect(() => {

    if (!course) {
      return;
    }


    const courseId =
      course?.id ||
      course?._id;


    if (!courseId) {
      return;
    }


    const normalizedId =
      String(courseId);


    if (
      String(lastCourseId.current) ===
      normalizedId
    ) {
      return;
    }


    lastCourseId.current =
      normalizedId;


    setCourse(course);

  }, [
    course,
    setCourse
  ]);


  return null;
}