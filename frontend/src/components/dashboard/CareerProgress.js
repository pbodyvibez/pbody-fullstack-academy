import "../../styles/dashboard.css";
import { useCourse } from "../../context/CourseContext";

export default function CareerProgress() {

  const { student } = useCourse();

  return (

    <div className="dashboard-card">

      <h2>

        🚀 Career Progress

      </h2>

      <br/>

      <p>

        Profile Completion

      </p>

      <div className="progress">

        <div

          className="progressFill"

          style={{

            width:

              student.profileCompletion + "%"

          }}

        >

          {student.profileCompletion}%

        </div>

      </div>

      <br/>

      <p>

        Projects Built

      </p>

      <h2>

        {student.completedProjects}

      </h2>

      <br/>

      <p>

        Certificates

      </p>

      <h2>

        {student.certificates}

      </h2>

    </div>

  );

}