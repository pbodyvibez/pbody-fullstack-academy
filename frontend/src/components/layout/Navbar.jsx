// =====================================================
// PBODY FULLSTACK ACADEMY
// PREMIUM PUBLIC NAVBAR
// FULL RESPONSIVE REPLACEMENT
// =====================================================

import {
  useState,
  useEffect,
  useRef
} from "react";

import {
  Link,
  useNavigate
} from "react-router-dom";

import {
  User,
  Settings,
  BookOpen,
  Award,
  LayoutDashboard,
  LogOut,
  ChevronDown,
  Flame,
  Zap,
  Menu,
  X
} from "lucide-react";

import Logo from "../../assets/images/logo.png";

import {
  useAuth
} from "../../context/AuthContext";

import "./Navbar.css";


export default function Navbar() {

  const {
    user,
    logout
  } = useAuth();

  const navigate = useNavigate();

  const [openProfile, setOpenProfile] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const profileRef = useRef(null);


  // =====================================================
  // CLOSE PROFILE WHEN CLICKING OUTSIDE
  // =====================================================

  useEffect(() => {

    function closeMenu(e) {

      if (
        profileRef.current &&
        !profileRef.current.contains(e.target)
      ) {

        setOpenProfile(false);

      }

    }

    document.addEventListener(
      "mousedown",
      closeMenu
    );

    return () => {

      document.removeEventListener(
        "mousedown",
        closeMenu
      );

    };

  }, []);


  // =====================================================
  // CLOSE MOBILE MENU WHEN SCREEN EXPANDS
  // =====================================================

  useEffect(() => {

    function handleResize() {

      if (window.innerWidth > 1100) {

        setMobileOpen(false);

      }

    }

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {

      window.removeEventListener(
        "resize",
        handleResize
      );

    };

  }, []);


  // =====================================================
  // PREVENT BODY SCROLL WHILE MOBILE MENU IS OPEN
  // =====================================================

  useEffect(() => {

    if (mobileOpen) {

      document.body.style.overflow = "hidden";

    } else {

      document.body.style.overflow = "";

    }

    return () => {

      document.body.style.overflow = "";

    };

  }, [mobileOpen]);


  // =====================================================
  // USER DATA
  // =====================================================

  const avatar = user?.photo;

  const displayName =
    user?.name ||
    "Student Engineer";

  const role =
    user?.role ||
    "Software Engineer";

  const xp =
    user?.xp ||
    0;


  // =====================================================
  // CLOSE MOBILE NAVIGATION
  // =====================================================

  function closeMobileMenu() {

    setMobileOpen(false);

  }


  // =====================================================
  // LOGOUT
  // =====================================================

  function handleLogout() {

    setOpenProfile(false);
    setMobileOpen(false);

    logout();

    navigate(
      "/login",
      {
        replace: true
      }
    );

  }


  // =====================================================
  // PROFILE TOGGLE
  // =====================================================

  function toggleProfile() {

    setOpenProfile(
      previous => !previous
    );

  }


  // =====================================================
  // RENDER
  // =====================================================

  return (

    <>

      <nav className="navbar">

        {/* =============================================
            BRAND
        ============================================== */}

        <div className="navBrand">

          <Link
            to="/"
            onClick={closeMobileMenu}
          >

            <img
              src={Logo}
              alt="PBODY FULLSTACK ACADEMY"
            />

            <div className="brandWords">

              <strong>
                PBody
              </strong>

              <span>
                FullStack Academy
              </span>

            </div>

          </Link>

        </div>


        {/* =============================================
            DESKTOP NAVIGATION
        ============================================== */}

        <div className="navLinks">

          <Link to="/">
            Home
          </Link>

          <Link to="/pricing">
            Pricing
          </Link>


          {user && (

            <>

              <Link to="/courses">
                Courses
              </Link>

              <Link to="/learning-hub">
                Learning Hub
              </Link>

              <Link to="/ai-mentor">
                AI Mentor
              </Link>

              <Link to="/dashboard">
                Dashboard
              </Link>

            </>

          )}

        </div>


        {/* =============================================
            DESKTOP ACTIONS
        ============================================== */}

        <div className="navActions">

          {user ? (

            <>

              <div className="studentStats">

                <div>

                  <Zap size={16} />

                  <span>
                    {xp} XP
                  </span>

                </div>


                <div>

                  <Flame size={16} />

                  <span>
                    🔥
                  </span>

                </div>

              </div>


              <div
                className="profileWrapper"
                ref={profileRef}
              >

                <button
                  type="button"
                  className="profileButton"
                  onClick={toggleProfile}
                  aria-expanded={openProfile}
                  aria-label="Open profile menu"
                >

                  {avatar ? (

                    <img
                      src={avatar}
                      alt="Profile"
                    />

                  ) : (

                    <div className="avatarLetter">

                      {displayName
                        .charAt(0)
                        .toUpperCase()}

                    </div>

                  )}


                  <div className="profileInfo">

                    <strong>
                      {displayName}
                    </strong>

                    <span>
                      {role}
                    </span>

                  </div>


                  <ChevronDown
                    size={18}
                    className={
                      openProfile
                        ? "profileChevron open"
                        : "profileChevron"
                    }
                  />

                </button>


                {openProfile && (

                  <div className="profileDropdown">

                    <div className="dropdownHeader">

                      {avatar ? (

                        <img
                          src={avatar}
                          alt="Profile"
                        />

                      ) : (

                        <div className="dropdownAvatar">

                          {displayName
                            .charAt(0)
                            .toUpperCase()}

                        </div>

                      )}


                      <div>

                        <h3>
                          {displayName}
                        </h3>

                        <p>
                          Premium Student ⭐
                        </p>

                      </div>

                    </div>


                    <Link
                      to="/dashboard"
                      onClick={() =>
                        setOpenProfile(false)
                      }
                    >

                      <LayoutDashboard size={18} />

                      Dashboard

                    </Link>


                    <Link
                      to="/profile"
                      onClick={() =>
                        setOpenProfile(false)
                      }
                    >

                      <User size={18} />

                      My Profile

                    </Link>


                    <Link
                      to="/courses"
                      onClick={() =>
                        setOpenProfile(false)
                      }
                    >

                      <BookOpen size={18} />

                      My Courses

                    </Link>


                    <Link
                      to="/certificates"
                      onClick={() =>
                        setOpenProfile(false)
                      }
                    >

                      <Award size={18} />

                      Certificates

                    </Link>


                    <Link
                      to="/settings"
                      onClick={() =>
                        setOpenProfile(false)
                      }
                    >

                      <Settings size={18} />

                      Settings

                    </Link>


                    <button
                      type="button"
                      className="dropdownLogout"
                      onClick={handleLogout}
                    >

                      <LogOut size={18} />

                      Logout

                    </button>

                  </div>

                )}

              </div>

            </>

          ) : (

            <>

              <Link
                className="loginButton"
                to="/login"
              >
                Login
              </Link>


              <Link
                className="registerButton"
                to="/register"
              >
                Register
              </Link>

            </>

          )}

        </div>


        {/* =============================================
            MOBILE MENU BUTTON
        ============================================== */}

        <button
          type="button"
          className="mobileNavButton"
          onClick={() =>
            setMobileOpen(
              previous => !previous
            )
          }
          aria-label={
            mobileOpen
              ? "Close navigation"
              : "Open navigation"
          }
          aria-expanded={mobileOpen}
        >

          {mobileOpen ? (
            <X size={22} />
          ) : (
            <Menu size={22} />
          )}

        </button>

      </nav>


      {/* ===============================================
          MOBILE NAVIGATION
      =============================================== */}

      {mobileOpen && (

        <>

          <button
            type="button"
            className="mobileNavOverlay"
            aria-label="Close navigation"
            onClick={closeMobileMenu}
          />


          <div className="mobileNavMenu">

            <div className="mobileNavLinks">

              <Link
                to="/"
                onClick={closeMobileMenu}
              >
                Home
              </Link>

              <Link
                to="/pricing"
                onClick={closeMobileMenu}
              >
                Pricing
              </Link>


              {user && (

                <>

                  <Link
                    to="/courses"
                    onClick={closeMobileMenu}
                  >
                    Courses
                  </Link>

                  <Link
                    to="/learning-hub"
                    onClick={closeMobileMenu}
                  >
                    Learning Hub
                  </Link>

                  <Link
                    to="/ai-mentor"
                    onClick={closeMobileMenu}
                  >
                    AI Mentor
                  </Link>

                  <Link
                    to="/dashboard"
                    onClick={closeMobileMenu}
                  >
                    Dashboard
                  </Link>

                  <Link
                    to="/profile"
                    onClick={closeMobileMenu}
                  >
                    My Profile
                  </Link>

                  <Link
                    to="/certificates"
                    onClick={closeMobileMenu}
                  >
                    Certificates
                  </Link>

                  <Link
                    to="/settings"
                    onClick={closeMobileMenu}
                  >
                    Settings
                  </Link>

                  <button
                    type="button"
                    className="mobileLogout"
                    onClick={handleLogout}
                  >

                    <LogOut size={18} />

                    Logout

                  </button>

                </>

              )}


              {!user && (

                <div className="mobileAuthActions">

                  <Link
                    className="loginButton"
                    to="/login"
                    onClick={closeMobileMenu}
                  >
                    Login
                  </Link>

                  <Link
                    className="registerButton"
                    to="/register"
                    onClick={closeMobileMenu}
                  >
                    Register
                  </Link>

                </div>

              )}

            </div>

          </div>

        </>

      )}

    </>

  );

}