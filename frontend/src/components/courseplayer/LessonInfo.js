import "./courseplayer.css";

export default function LessonInfo({ lesson }) {

  return (

    <div className="lesson-info">

      <h2>

        About this lesson

      </h2>

      <p>

        {lesson.description}

      </p>

    </div>

  );

}