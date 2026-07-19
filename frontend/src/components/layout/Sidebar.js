import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

import Logo from "../../assets/images/logo.png";

import "./Sidebar.css";

export default function Sidebar() {

  const navigate = useNavigate();

  const { user, logout } = useAuth();

  const [collapsed, setCollapsed] = useState(() => {

    return (
      localStorage.getItem("pbody_sidebar") === "collapsed"
    );

  });

  useEffect(() => {

    if (collapsed) {

      localStorage.setItem(
        "pbody_sidebar",
        "collapsed"
      );

    } else {

      localStorage.setItem(
        "pbody_sidebar",
        "expanded"
      );

    }

    window.dispatchEvent(
      new Event("sidebar-change")
    );

  }, [collapsed]);

  function toggleSidebar() {

    setCollapsed(prev => !prev);

  }

  function handleLogout() {

    logout();

    navigate("/login", {
      replace: true
    });

  }

  const menu = [

    {
      name: "Home",
      path: "/home",
      icon: "🏡",
      description: "Academy Home"
    },

    {
      name: "Dashboard",
      path: "/dashboard",
      icon: "📊",
      description: "Overview"
    },

    {
      name: "Learning Hub",
      path: "/learning",
      icon: "🎓",
      description: "Continue Learning"
    },

    {
      name: "Courses",
      path: "/courses",
      icon: "📚",
      description: "Engineering Tracks"
    },

    {
      name: "Projects",
      path: "/projects",
      icon: "💻",
      description: "Build Projects"
    },

    {
      name: "AI Mentor",
      path: "/ai",
      icon: "🤖",
      description: "Ask AI"
    },

    {
      name: "Certificates",
      path: "/certificates",
      icon: "🏆",
      description: "Achievements"
    },

    {
      name: "Community",
      path: "/community",
      icon: "🌍",
      description: "Students"
    },

    {
      name: "Leaderboard",
      path: "/leaderboard",
      icon: "🔥",
      description: "Top Engineers"
    },

    {
      name: "Profile",
      path: "/profile",
      icon: "👤",
      description: "Account"
    },

    {
      name: "Settings",
      path: "/settings",
      icon: "⚙️",
      description: "Preferences"
    }

  ];

  return (

    <aside
      className={
        collapsed
          ? "sidebar collapsed"
          : "sidebar"
      }
    >

      <button
        className="sidebarToggle"
        onClick={toggleSidebar}
      >

        {collapsed ? "☰" : "✕"}

      </button>

      <div className="sidebarLogo">

        <img
          src={Logo}
          alt="PBODY"
        />

        {!collapsed && (

          <div className="brandText">

            <h2>PBODY</h2>

            <span>FullStack Academy</span>

          </div>

        )}

      </div>

      <div className="sidebarProfile">

        <div className="profileIcon">

          👤

        </div>

        {!collapsed && (

          <div className="profileDetails">

            <h4>

              {user?.name || "Student"}

            </h4>

            <p>

              {user?.email}

            </p>

          </div>

        )}

      </div>

      <nav className="sidebarNavigation">

        {menu.map(item => (

          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? "sidebarLink active"
                : "sidebarLink"
            }
          >

            <span className="menuIcon">

              {item.icon}

            </span>

            {!collapsed && (

              <div className="menuContent">

                <strong>

                  {item.name}

                </strong>

                <small>

                  {item.description}

                </small>

              </div>

            )}

          </NavLink>

        ))}

      </nav>

      {!collapsed && (

        <div className="upgradeBox">

          <h3>

            🚀 Premium

          </h3>

          <p>

            Unlock every engineering course,
            AI Mentor and certificates.

          </p>

          <button
            className="upgradeButton"
            onClick={() => navigate("/pricing")}
          >

            Upgrade Now

          </button>

        </div>

      )}

      <button
        className="logoutButton"
        onClick={handleLogout}
      >

        {collapsed ? "🚪" : "🚪 Logout"}

      </button>

    </aside>

  );

}