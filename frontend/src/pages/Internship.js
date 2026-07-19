import { useNavigate } from "react-router-dom";

export default function Internship() {

  const navigate = useNavigate();

  const internships = [

    {
      company: "Google",
      role: "Frontend Engineering Intern",
      location: "Remote"
    },

    {
      company: "Microsoft",
      role: "Backend Engineering Intern",
      location: "Hybrid"
    },

    {
      company: "Meta",
      role: "React Developer Intern",
      location: "Remote"
    },

    {
      company: "Flutterwave",
      role: "Software Engineering Intern",
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

      <h1>

        🚀 Internship Hub

      </h1>

      <p>

        Find internships and begin your engineering career.

      </p>

      <br/>

      {

        internships.map((job,index)=>(

          <div
            key={index}
            style={{
              background:"#132338",
              padding:"20px",
              marginBottom:"20px",
              borderRadius:"12px"
            }}
          >

            <h2>

              {job.company}

            </h2>

            <h3>

              {job.role}

            </h3>

            <p>

              📍 {job.location}

            </p>

            <button
              onClick={() => navigate("/resume")}
            >

              Apply

            </button>

          </div>

        ))

      }

    </div>

  );

}