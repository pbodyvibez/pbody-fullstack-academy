import "../../styles/dashboard.css";
import { useCourse } from "../../context/CourseContext";

export default function LearningProgress() {

  const { student } = useCourse();

  return (

    <div className="dashboard-card">

      <h2>

        📈 Learning Progress

      </h2>

      <h3>

        {student.currentCourse.title}

      </h3>

      <div className="progress">

        <div

          className="progressFill"

          style={{

            width:

              student.currentCourse.progress + "%"

          }}

        >

          {student.currentCourse.progress}%

        </div>

      </div>

      <br/>

      <div>

        <p>

          Lessons Completed

        </p>

        <h2>

          {student.completedLessons}

        </h2>

      </div>

      <br/>

      <div>

        <p>

          Quizzes Passed

        </p>

        <h2>

          {student.quizzesPassed}

        </h2>

      </div>

    </div>

  );

}