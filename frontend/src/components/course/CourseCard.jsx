// =====================================================
// PBODY FULLSTACK ACADEMY
// COURSE CARD
// FULL REPLACEMENT
// =====================================================

import React from "react";
import { Link } from "react-router-dom";

import "./course.css";

export default function CourseCard({ course }) {

  if (!course) {
    return null;
  }

  const isPremium = course.access === "premium";

  const title = course.title || "Engineering Course";

  const description =
    course.description ||
    "Professional engineering training from PBody FullStack Academy.";

  const image =
    course.thumbnail ||
    course.image ||
    "";

  return (
    <article className="courseCard">

      <div className="courseCardImage">

        {image ? (
          <img
            src={image}
            alt={title}
          />
        ) : (
          <div className="courseCardImagePlaceholder">
            <span>
              {course.icon || "💻"}
            </span>
          </div>
        )}

        <span
          className={
            isPremium
              ? "courseBadge premium"
              : "courseBadge"
          }
        >
          {isPremium
            ? "⭐ PREMIUM"
            : "🚀 FREE"}
        </span>

      </div>


      <div className="courseCardContent">

        <div className="courseCardBrand">
          PBODY FULLSTACK ACADEMY
        </div>


        <h2 className="courseCardTitle">
          {course.icon || "💻"} {title}
        </h2>


        <p className="courseCardDescription">
          {description}
        </p>


        <div className="courseCardStats">

          <span>
            ⭐ {course.rating || "4.9"}
          </span>

          <span>
            👨‍🎓 {course.students || "10K+"}
          </span>

          <span>
            📚 {course.lessons || 0} Lessons
          </span>

        </div>


        {Array.isArray(course.technologies) &&
          course.technologies.length > 0 && (

            <div className="courseCardTechnologies">

              {course.technologies
                .slice(0, 5)
                .map((technology, index) => (
                  <span key={index}>
                    {technology}
                  </span>
                ))}

            </div>

          )}


        <div className="courseCardMeta">

          {course.level && (
            <span>
              🎯 {course.level}
            </span>
          )}

          {course.duration && (
            <span>
              ⏱ {course.duration}
            </span>
          )}

          {course.certificate && (
            <span>
              🏆 Certificate
            </span>
          )}

        </div>


        <Link
          to={`/course/${course.id}`}
          className="courseButton"
        >
          {isPremium
            ? "🔐 View Premium Course →"
            : "🚀 Start Learning →"}
        </Link>

      </div>

    </article>
  );
}