import { useNavigate } from "react-router-dom";

import "../styles/admin.css";

export default function AdminDashboard() {

  const navigate = useNavigate();

  const cards = [

    {
      title: "Manage Lessons",
      icon: "📚",
      route: "/admin/lessons"
    },

    {
      title: "Manage Courses",
      icon: "🎓",
      route: "/admin/courses"
    },

    {
      title: "Manage Quizzes",
      icon: "🧠",
      route: "/admin/quizzes"
    },

    {
      title: "Students",
      icon: "👨‍🎓",
      route: "/admin/students"
    },

    {
      title: "Certificates",
      icon: "🏆",
      route: "/admin/certificates"
    },

    {
      title: "Jobs",
      icon: "💼",
      route: "/admin/jobs"
    },

    {
      title: "Internships",
      icon: "🚀",
      route: "/admin/internships"
    },

    {
      title: "Analytics",
      icon: "📈",
      route: "/admin/analytics"
    }

  ];

  return (

    <div className="admin-page">

      <h1>

        PBody Academy Admin

      </h1>

      <p>

        Manage every part of the platform.

      </p>

      <div className="admin-grid">

        {

          cards.map((card)=>(

            <div

              key={card.title}

              className="admin-card"

              onClick={()=>navigate(card.route)}

            >

              <h1>

                {card.icon}

              </h1>

              <h2>

                {card.title}

              </h2>

            </div>

          ))

        }

      </div>

    </div>

  );

}