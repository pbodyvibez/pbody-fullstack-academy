import "./courseplayer.css";

export default function LessonHeader({ lesson }) {

  return (

    <div className="lesson-header">

      <h1>{lesson.title}</h1>

      <div className="lesson-meta">

        <span>⭐ {lesson.xp} XP</span>

        <span>⏱ {lesson.duration}</span>

        <span>📚 {lesson.category}</span>

        <span>🎯 {lesson.difficulty}</span>

      </div>

    </div>

  );

}