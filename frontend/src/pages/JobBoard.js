import { useNavigate } from "react-router-dom";

export default function JobBoard() {

  const navigate = useNavigate();

  const jobs = [

    {
      company: "Google",
      title: "Frontend Engineer",
      location: "Remote"
    },

    {
      company: "Microsoft",
      title: "Backend Engineer",
      location: "Hybrid"
    },

    {
      company: "Amazon",
      title: "Full Stack Engineer",
      location: "Remote"
    },

    {
      company: "Flutterwave",
      title: "Software Engineer",
      location: "Lagos"
    }

  ];

  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#081420",
        color: "white",
        padding: "40px"
      }}
    >

      <h1>💼 Job Board</h1>

      <p>

        Opportunities available for PBody Academy graduates.

      </p>

      <br />

      {

        jobs.map((job, index) => (

          <div
            key={index}
            style={{
              background: "#132338",
              borderRadius: "12px",
              padding: "20px",
              marginBottom: "20px"
            }}
          >

            <h2>{job.company}</h2>

            <h3>{job.title}</h3>

            <p>📍 {job.location}</p>

            <button
              onClick={() => navigate("/resume")}
            >

              Apply Now

            </button>

          </div>

        ))

      }

    </div>

  );

}