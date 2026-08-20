// =====================================================
// PBODY FULLSTACK ACADEMY
// COMING SOON COMPONENT
// FULL REPLACEMENT
// =====================================================

import { useNavigate } from "react-router-dom";

import "../../styles/comingSoon.css";


export default function ComingSoon({

  icon,

  title,

  description

}) {

  const navigate = useNavigate();


  return (

    <div className="comingSoonPage">

      <div className="comingCard">


        {/* =================================================
            ICON
        ================================================= */}

        <div className="comingIcon">

          {icon}

        </div>


        {/* =================================================
            TITLE
        ================================================= */}

        <h1>

          {title}

        </h1>


        {/* =================================================
            DESCRIPTION
        ================================================= */}

        <p>

          {description}

        </p>


        {/* =================================================
            ACTIONS
        ================================================= */}

        <div className="comingButtons">


          <button

            type="button"

            className="primaryComing"

            onClick={() => navigate("/dashboard")}

          >

            🏠 Dashboard

          </button>


          <button

            type="button"

            className="secondaryComing"

            onClick={() => navigate("/learning-hub")}

          >

            📚 Continue Learning

          </button>


        </div>


        {/* =================================================
            FOOTER
        ================================================= */}

        <div className="comingFooter">

          <h3>

            🚀 PBody Fullstack Academy

          </h3>

          <span>

            New features are being added continuously.

          </span>

        </div>


      </div>

    </div>

  );

}