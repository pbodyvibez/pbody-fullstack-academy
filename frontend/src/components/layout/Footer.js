// ======================================================
// PBODY FULLSTACK ACADEMY
// PREMIUM FOOTER
// FULL REPLACEMENT
// ======================================================

import React from "react";

import {
  Link,
  useNavigate
} from "react-router-dom";

import Logo from "../../assets/images/logo.png";

import "./Footer.css";


// ======================================================
// COMPONENT
// ======================================================

export default function Footer() {

  const navigate = useNavigate();


  // ====================================================
  // SCROLL TO TOP
  // ====================================================

  const scrollToTop = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  };


  // ====================================================
  // INTERNAL NAVIGATION
  // ====================================================

  const navigateAndTop = (path) => {

    navigate(path);

    window.setTimeout(() => {

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    }, 100);

  };


  // ====================================================
  // QUICK LINK NAVIGATION
  // ====================================================

  const quickNavigate = (event, path) => {

    event.preventDefault();

    navigateAndTop(path);

  };


  // ====================================================
  // RENDER
  // ====================================================

  return (

    <footer className="footer">

      <div className="footer-container">


        {/* ==================================================
            BRAND
        ================================================== */}

        <div className="footer-brand-column">

          <div className="footerLogo">

            <img
              src={Logo}
              alt="PBody FullStack Academy"
            />

            <div className="footer-brand">

              <h2>
                PBODY
              </h2>

              <span>
                FullStack Academy
              </span>

            </div>

          </div>


          <p className="footer-description">

            PBody FullStack Academy is an AI-powered
            engineering academy helping aspiring developers
            become world-class software engineers through
            structured learning, real-world projects,
            AI mentorship, quizzes, certifications and
            career preparation.

          </p>


          {/* ==================================================
              SOCIAL
          ================================================== */}

          <div className="footerSocial">

            <a
              href="https://facebook.com/jeff.bryner.7"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>


            <a
              href="https://x.com/pbodyvibez"
              target="_blank"
              rel="noopener noreferrer"
            >
              X
            </a>


            <a
              href="https://github.com/pbodyvibez/pbody-vibez"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>


            <a
              href="https://www.instagram.com/kennethsampsonprecious"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>

          </div>

        </div>


        {/* ==================================================
            QUICK LINKS
        ================================================== */}

        <div className="footerLinksColumn">

          <h3>
            Quick Links
          </h3>


          <ul className="footerQuickLinks">

            <li>
              <Link
                to="/"
                onClick={(event) =>
                  quickNavigate(event, "/")
                }
              >
                Home
              </Link>
            </li>


            <li>
              <Link
                to="/about"
                onClick={(event) =>
                  quickNavigate(event, "/about")
                }
              >
                About
              </Link>
            </li>


            <li>
              <Link
                to="/contact"
                onClick={(event) =>
                  quickNavigate(event, "/contact")
                }
              >
                Contact
              </Link>
            </li>


            <li>
              <Link
                to="/pricing"
                onClick={(event) =>
                  quickNavigate(event, "/pricing")
                }
              >
                Pricing
              </Link>
            </li>


            <li>
              <Link
                to="/privacy"
                onClick={(event) =>
                  quickNavigate(event, "/privacy")
                }
              >
                Privacy Policy
              </Link>
            </li>


            <li>
              <Link
                to="/terms"
                onClick={(event) =>
                  quickNavigate(event, "/terms")
                }
              >
                Terms & Conditions
              </Link>
            </li>

          </ul>

        </div>


        {/* ==================================================
            LEARNING
        ================================================== */}

        <div className="footer-links">

          <h3>
            Learning
          </h3>


          <button
            type="button"
            className="footerLinkButton"
            onClick={() =>
              navigateAndTop("/learning-hub")
            }
          >
            Learning Hub
          </button>


          <button
            type="button"
            className="footerLinkButton"
            onClick={() =>
              navigateAndTop("/courses")
            }
          >
            Engineering Courses
          </button>


          <button
            type="button"
            className="footerLinkButton"
            onClick={() =>
              navigateAndTop("/ai-mentor")
            }
          >
            Engineering Mentor
          </button>


          <button
            type="button"
            className="footerLinkButton"
            onClick={() =>
              navigateAndTop("/dashboard")
            }
          >
            Student Dashboard
          </button>


          <button
            type="button"
            className="footerLinkButton"
            onClick={() =>
              navigateAndTop("/community")
            }
          >
            Community
          </button>

        </div>


        {/* ==================================================
            CONTACT
        ================================================== */}

        <div className="footer-contact">

          <h3>
            Contact Us
          </h3>


          <p>
            📧 pbodyacademy@gmail.com
          </p>


          <p>
            📞 +234 904 396 3968
          </p>


          <p>
            💬 +234 813 255 3031
          </p>


          <p>
            🌍 Lagos, Nigeria
          </p>


          <button
            type="button"
            onClick={() =>
              navigateAndTop("/contact")
            }
          >
            Contact Academy
          </button>


          <button
            type="button"
            className="backTopButton"
            onClick={scrollToTop}
          >
            ↑ Return To Top
          </button>

        </div>

      </div>


      {/* ==================================================
          FOOTER BOTTOM
      ================================================== */}

      <div className="footer-bottom">

        <div>

          © {new Date().getFullYear()}{" "}

          <strong>
            PBODY FullStack Academy
          </strong>

          {" "} . All Rights Reserved.

        </div>


        <div>

          AI Powered • Project Based • Career Focused
          • Premium Engineering Academy

        </div>

      </div>

    </footer>

  );

}