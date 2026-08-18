// =====================================================
// PBODY FULLSTACK ACADEMY
// PREMIUM RESPONSIVE STUDENT NAVBAR
// FULL REPLACEMENT
// =====================================================

import {
  Bell,
  User,
  Sparkles,
  Menu
} from "lucide-react";

import {
  useNavigate
} from "react-router-dom";

import Logo from "../../assets/images/logo.png";

import "./StudentNavbar.css";


export default function StudentNavbar({
  onMenuClick
}) {

  const navigate = useNavigate();


  return (

    <header className="studentNavbar">


      {/* =================================================
          MOBILE MENU
      ================================================= */}

      <button
        type="button"
        className="mobileMenuButton"
        onClick={onMenuClick}
        aria-label="Open navigation menu"
        title="Open navigation"
      >

        <Menu size={21} />

      </button>


      {/* =================================================
          BRAND
      ================================================= */}

      <div className="navbarBrand">

        <img
          src={Logo}
          alt="PBody FullStack Academy"
        />

        <div className="navbarBrandText">

          <h3>
            PBODY FULLSTACK ACADEMY
          </h3>

          <span>
            Engineering your future
          </span>

        </div>

      </div>


      {/* =================================================
          ACTIONS
      ================================================= */}

      <div className="navbarActions">


        {/* =================================================
            AI MENTOR
        ================================================= */}

        <button
          type="button"
          className="themeButton"
          onClick={() => navigate("/ai-mentor")}
          title="AI Mentor"
          aria-label="Open AI Mentor"
        >

          <Sparkles size={19} />

        </button>


        {/* =================================================
            NOTIFICATIONS
        ================================================= */}

        <button
          type="button"
          className="notificationButton"
          onClick={() => navigate("/notifications")}
          title="Notifications"
          aria-label="Open notifications"
        >

          <Bell size={19} />

        </button>


        {/* =================================================
            USER PROFILE
        ================================================= */}

        <button
          type="button"
          className="userMini"
          onClick={() => navigate("/profile")}
          title="Student Profile"
          aria-label="Open student profile"
        >

          <span className="userMiniIcon">

            <User size={20} />

          </span>


          <span className="userMiniText">

            <strong>
              Student
            </strong>

            <span>
              Developer
            </span>

          </span>

        </button>


      </div>


    </header>

  );

}