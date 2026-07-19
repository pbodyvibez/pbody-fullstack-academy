import "../../styles/dashboard.css";
import { useNavigate } from "react-router-dom";

export default function InternshipWidget() {

  const navigate = useNavigate();

  return (

    <div className="dashboard-card">

      <h2>

        🚀 Internship Readiness

      </h2>

      <br/>

      <h1>

        82%

      </h1>

      <br/>

      <p>

        Resume ✔

      </p>

      <p>

        Portfolio ✔

      </p>

      <p>

        Projects ✔

      </p>

      <p>

        Certificates ⏳

      </p>

      <br/>

      <button
        onClick={() => navigate("/internship")}
      >

        View Opportunities

      </button>

    </div>

  );

}