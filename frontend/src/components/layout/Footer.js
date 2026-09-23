import React from "react";

import {
  Link,
  useNavigate
} from "react-router-dom";

import Logo from "../../assets/images/logo.png";

import "./Footer.css";


// ======================================================
// PBODY FULLSTACK ACADEMY
// PREMIUM FOOTER
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

            PBody FullStack Academy is a digital,
            AI-powered engineering education platform
            helping aspiring and developing engineers
            build practical software engineering skills
            through structured courses, real-world
            projects, AI-assisted learning, assessments,
            certificates and career-focused resources.

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
              href="https://www.instagram.com/kennethsampsonprecious/"
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
                Contact & Support
              </Link>
            </li>


            <li>
              <Link
                to="/pricing"
                onClick={(event) =>
                  quickNavigate(event, "/pricing")
                }
              >
                Pricing & Membership
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


            <li>
              <Link
                to="/refund"
                onClick={(event) =>
                  quickNavigate(event, "/refund")
                }
              >
                Refund Policy
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
            CONTACT & BUYER SUPPORT
        ================================================== */}

        <div className="footer-contact">

          <h3>
            Contact & Support
          </h3>


          <p>
            <a href="mailto:pbodyacademy@gmail.com">
              📧 pbodyacademy@gmail.com
            </a>
          </p>


          <p>
            <a href="tel:+2349043963968">
              📞 +234 904 396 3968
            </a>
          </p>


          <p>
            <a
              href="https://wa.me/2348132553031"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 WhatsApp Support
            </a>
          </p>


          <p>
            🌍 Lagos, Nigeria
          </p>


          <p className="footerSupportText">
            Support is available for account questions,
            membership, payments, subscriptions and
            refund enquiries.
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
          LEGAL / CUSTOMER INFORMATION
      ================================================== */}

      <div className="footer-legal">

        <p>
          By using PBody FullStack Academy and purchasing
          membership services, users agree to the applicable
          platform terms, subscription terms and refund policy.
        </p>

        <div className="footer-legal-links">

          <Link
            to="/terms"
            onClick={(event) =>
              quickNavigate(event, "/terms")
            }
          >
            Terms & Conditions
          </Link>

          <Link
            to="/refund"
            onClick={(event) =>
              quickNavigate(event, "/refund")
            }
          >
            Refund Policy
          </Link>

          <Link
            to="/privacy"
            onClick={(event) =>
              quickNavigate(event, "/privacy")
            }
          >
            Privacy Policy
          </Link>

          <Link
            to="/pricing"
            onClick={(event) =>
              quickNavigate(event, "/pricing")
            }
          >
            Pricing
          </Link>

          <Link
            to="/contact"
            onClick={(event) =>
              quickNavigate(event, "/contact")
            }
          >
            Support
          </Link>

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