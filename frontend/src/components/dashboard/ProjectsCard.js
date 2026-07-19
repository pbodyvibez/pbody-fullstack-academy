import "../../styles/dashboard.css";
import { useCourse } from "../../context/CourseContext";

export default function ProjectsCard() {

  const { completeProject } = useCourse();

  return (

    <div className="dashboard-card">

      <h2>

        💻 Build Project

      </h2>

      <p>

        Authentication System

      </p>

      <button
        onClick={() => {

          completeProject();

          alert("🚀 Project Completed! +500 XP");

        }}
      >

        Finish Project

      </button>

    </div>

  );

}