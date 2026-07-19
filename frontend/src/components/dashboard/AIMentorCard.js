import "../../styles/dashboard.css";
import { useNavigate } from "react-router-dom";
import { useCourse } from "../../context/CourseContext";

export default function AIMentorCard() {

  const navigate = useNavigate();

  const { student } = useCourse();

  const recommendation = () => {

    if (student.currentCourse.progress < 30)
      return "Start by completing your Frontend Engineering lessons.";

    if (student.currentCourse.progress < 60)
      return "You're making progress. Finish React before moving into APIs.";

    if (student.currentCourse.progress < 80)
      return "Great work! Authentication should be your next focus.";

    return "Excellent! You're ready for Full Stack projects and internships.";

  };

  return (

    <div className="dashboard-card">

      <h2>

        🤖 AI Mentor

      </h2>

      <br/>

      <h3>

        Welcome back {student.name}

      </h3>

      <br/>

      <p>

        {recommendation()}

      </p>

      <br/>

      <button
        onClick={() => navigate("/ai")}
      >

        Chat With AI Mentor

      </button>

    </div>

  );

}