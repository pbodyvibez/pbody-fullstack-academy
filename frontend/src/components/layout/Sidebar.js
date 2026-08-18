// ======================================================
// PBODY FULLSTACK ACADEMY
// PREMIUM RESPONSIVE SIDEBAR
// FULL REPLACEMENT
// ======================================================

import {
  Home,
  LayoutDashboard,
  BookOpen,
  GraduationCap,
  FileQuestion,
  FolderKanban,
  Award,
  Trophy,
  Sparkles,
  BriefcaseBusiness,
  User,
  Settings,
  LogOut,
  ChevronLeft,
  Briefcase,
  FileText,
  Code2,
  Map,
  Rocket
} from "lucide-react";

import {
  NavLink,
  useNavigate
} from "react-router-dom";

import {
  useAuth
} from "../../context/AuthContext";

import Logo from "../../assets/images/logo.png";

import "./Sidebar.css";


// ======================================================
// COMPONENT
// ======================================================

export default function Sidebar({
  collapsed = false,
  toggleSidebar,
  mobileOpen = false,
  closeMobileSidebar
}) {


  // ====================================================
  // AUTH
  // ====================================================

  const {
    logout
  } = useAuth();


  const navigate = useNavigate();


  // ====================================================
  // SAFE MOBILE CLOSE
  // ====================================================

  function handleNavigation() {

    if (
      typeof closeMobileSidebar === "function"
    ) {

      closeMobileSidebar();

    }

  }


  // ====================================================
  // MENU
  // ====================================================

  const menu = [

    {
      name: "Home",
      path: "/",
      icon: <Home size={20} />,
      title: "Home"
    },

    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard size={20} />,
      title: "Dashboard"
    },

    {
      name: "Learning Hub",
      path: "/learning-hub",
      icon: <GraduationCap size={20} />,
      title: "Learning Hub"
    },

    {
      name: "Courses",
      path: "/courses",
      icon: <BookOpen size={20} />,
      title: "Courses"
    },

    {
      name: "Quiz Center",
      path: "/quiz",
      icon: <FileQuestion size={20} />,
      title: "Quiz Center"
    },

    {
      name: "Projects",
      path: "/projects",
      icon: <FolderKanban size={20} />,
      title: "Projects"
    },

    {
      name: "Certificates",
      path: "/certificates",
      icon: <Award size={20} />,
      title: "Certificates"
    },

    {
      name: "Leaderboard",
      path: "/leaderboard",
      icon: <Trophy size={20} />,
      title: "Leaderboard"
    },

    {
      name: "AI Mentor",
      path: "/ai-mentor",
      icon: <Sparkles size={20} />,
      title: "AI Mentor"
    },

    {
      name: "Career Center",
      path: "/career",
      icon: <BriefcaseBusiness size={20} />,
      title: "Career Center"
    },

    {
      name: "Job Board",
      path: "/jobs",
      icon: <Briefcase size={20} />,
      title: "Job Board",
      career: true
    },

    {
      name: "Internships",
      path: "/internships",
      icon: <Rocket size={20} />,
      title: "Internships",
      career: true
    },

    {
      name: "Resume Builder",
      path: "/resume-builder",
      icon: <FileText size={20} />,
      title: "Resume Builder",
      career: true
    },

    {
      name: "Portfolio Builder",
      path: "/portfolio-builder",
      icon: <Code2 size={20} />,
      title: "Portfolio Builder",
      career: true
    },

    {
      name: "Career Roadmaps",
      path: "/roadmaps",
      icon: <Map size={20} />,
      title: "Career Roadmaps",
      career: true
    }

  ];


  // ====================================================
  // LOGOUT
  // ====================================================

  function handleLogout() {

    try {

      if (
        typeof logout === "function"
      ) {

        logout();

      }

    } finally {

      if (
        typeof closeMobileSidebar === "function"
      ) {

        closeMobileSidebar();

      }

      navigate(
        "/login",
        {
          replace: true
        }
      );

    }

  }


  // ====================================================
  // SIDEBAR CLASS
  // ====================================================

  const sidebarClass = [

    "sidebar",

    collapsed
      ? "collapsed"
      : "",

    mobileOpen
      ? "mobileOpen"
      : ""

  ]
    .filter(Boolean)
    .join(" ");


  // ====================================================
  // RENDER
  // ====================================================

  return (

    <aside
      className={sidebarClass}
      aria-label="PBody Academy navigation"
    >


      {/* ==================================================
          SIDEBAR TOP
      ================================================== */}

      <div className="sidebarTop">


        <div className="brandArea">


          <img
            src={Logo}
            alt="PBody FullStack Academy"
          />


          {!collapsed && (

            <div className="brandText">

              <h2>
                PBODY
              </h2>

              <span>
                FULLSTACK ACADEMY
              </span>

            </div>

          )}


        </div>


        <button
          type="button"
          className="collapseButton"
          onClick={toggleSidebar}
          aria-label={
            collapsed
              ? "Expand sidebar"
              : "Collapse sidebar"
          }
          title={
            collapsed
              ? "Expand sidebar"
              : "Collapse sidebar"
          }
        >

          <ChevronLeft
            size={20}
            className={
              collapsed
                ? "rotateIcon"
                : ""
            }
          />

        </button>


      </div>


      {/* ==================================================
          MAIN NAVIGATION
      ================================================== */}

      <nav
        className="sidebarMenu"
        aria-label="Main navigation"
      >


        {menu.map(item => (

          <NavLink
            key={item.path}
            to={item.path}
            onClick={handleNavigation}
            title={
              collapsed
                ? item.title
                : ""
            }
            className={({ isActive }) => {

              const classes = [
                "sidebarLink"
              ];

              if (item.career) {
                classes.push("careerLink");
              }

              if (isActive) {
                classes.push("active");
              }

              return classes.join(" ");

            }}
          >


            <span className="sidebarIcon">

              {item.icon}

            </span>


            {!collapsed && (

              <span className="linkText">

                {item.name}

              </span>

            )}


          </NavLink>

        ))}


      </nav>


      {/* ==================================================
          SIDEBAR BOTTOM
      ================================================== */}

      <div className="sidebarBottom">


        {/* ==================================================
            PROFILE
        ================================================== */}

        <NavLink
          to="/profile"
          onClick={handleNavigation}
          title={
            collapsed
              ? "Profile"
              : ""
          }
          className="sidebarLink"
        >

          <span className="sidebarIcon">

            <User size={20} />

          </span>


          {!collapsed && (

            <span className="linkText">
              Profile
            </span>

          )}


        </NavLink>


        {/* ==================================================
            SETTINGS
        ================================================== */}

        <NavLink
          to="/settings"
          onClick={handleNavigation}
          title={
            collapsed
              ? "Settings"
              : ""
          }
          className="sidebarLink"
        >

          <span className="sidebarIcon">

            <Settings size={20} />

          </span>


          {!collapsed && (

            <span className="linkText">
              Settings
            </span>

          )}


        </NavLink>


        {/* ==================================================
            LOGOUT
        ================================================== */}

        <button
          type="button"
          className="logoutButton"
          title={
            collapsed
              ? "Logout"
              : ""
          }
          aria-label="Logout"
          onClick={handleLogout}
        >

          <span className="sidebarIcon">

            <LogOut size={20} />

          </span>


          {!collapsed && (

            <span className="linkText">
              Logout
            </span>

          )}


        </button>


      </div>


    </aside>

  );

}