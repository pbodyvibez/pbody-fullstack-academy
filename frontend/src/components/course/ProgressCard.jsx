
import React from "react";

export default function ProgressCard({
  course,
  currentLesson,
  completedLessons = 0,
  totalLessons = 0,
  progress
}) {
  const completedCount = Number(completedLessons) || 0;
  const totalCount = Number(totalLessons) || 0;

  let percentage = 0;

  if (typeof progress === "number") {
    percentage = progress;
  } else if (totalCount > 0) {
    percentage = Math.round(
      (completedCount / totalCount) * 100
    );
  }

  if (percentage < 0) {
    percentage = 0;
  }

  if (percentage > 100) {
    percentage = 100;
  }

  const courseXP =
    Number(
      course && (course.xp || course.totalXP)
    ) || 0;

  return (
    <section className="progressCard">

      <div className="progressCardHeader">

        <div className="progressCardTitle">

          <div className="progressIcon">
            ↑
          </div>

          <div>
            <h2>Course Progress</h2>
            <p>Your engineering journey</p>
          </div>

        </div>

        <strong className="progressPercentage">
          {percentage}%
        </strong>

      </div>

      <div className="progressBar">

        <div
          className="progressFill"
          style={{
            width: percentage + "%"
          }}
        />

      </div>

      <div className="progressStats">

        <div className="progressStat">

          <div className="progressStatIcon">
            📖
          </div>

          <strong>
            {completedCount}
          </strong>

          <span>
            Completed
          </span>

        </div>

        <div className="progressStat">

          <div className="progressStatIcon">
            🎓
          </div>

          <strong>
            {totalCount}
          </strong>

          <span>
            Lessons
          </span>

        </div>

        <div className="progressStat">

          <div className="progressStatIcon">
            🏆
          </div>

          <strong>
            {courseXP}
          </strong>

          <span>
            XP
          </span>

        </div>

      </div>

      <div className="certificateProgress">

        <div className="certificateIcon">
          🏆
        </div>

        <div>

          <h3>
            Professional Certificate
          </h3>

          <p>
            {percentage >= 100
              ? "Course completed. Your certificate is ready."
              : "Complete this course to unlock your professional PBody FullStack Academy certificate."
            }
          </p>

        </div>

      </div>

      <div className="currentLessonProgress">

        <span className="currentLessonLabel">
          Currently Learning
        </span>

        <strong>
          {currentLesson
            ? currentLesson.title
            : "Select a lesson"
          }
        </strong>

      </div>

    </section>
  );
}
