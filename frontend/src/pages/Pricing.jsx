import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { initializePayment } from "../services/paymentService";
import { useAuth } from "../context/AuthContext";

import Logo from "../assets/images/logo.png";

import "../styles/pricing.css";


export default function Pricing() {

  const navigate = useNavigate();

  const { user } = useAuth();

  const [loadingCurrency, setLoadingCurrency] = useState(null);


  // ============================================================
  // PAYMENT
  // ============================================================

  const handleUpgrade = async (currency) => {

    if (!user) {

      alert("Please login before subscribing.");

      navigate("/login");

      return;

    }


    if (loadingCurrency) {

      return;

    }


    try {

      setLoadingCurrency(currency);


      const result = await initializePayment({

        email: user.email,

        currency,

        plan: "annual"

      });


      const authorizationUrl =
        result?.data?.authorization_url ||
        result?.authorization_url ||
        result?.data?.data?.authorization_url;


      if (authorizationUrl) {

        window.location.href = authorizationUrl;

        return;

      }


      throw new Error(
        result?.message ||
        "Payment could not be started."
      );

    }

    catch (error) {

      console.error(
        "PAYMENT INITIALIZATION ERROR:",
        error
      );


      alert(

        error?.response?.data?.message ||

        error?.message ||

        "Payment initialization failed. Please try again."

      );

    }

    finally {

      setLoadingCurrency(null);

    }

  };


  const isLoading = (currency) => {

    return loadingCurrency === currency;

  };


  return (

    <main className="pricingPage">


      {/* ========================================================
          PREMIUM HERO
      ======================================================== */}

      <section className="pricingHero">

        <div
          className="pricingHeroGlow pricingHeroGlowOne"
        />

        <div
          className="pricingHeroGlow pricingHeroGlowTwo"
        />


        <div className="pricingBrand">

          <div className="pricingLogoWrap">

            <img
              src={Logo}
              alt="PBody FullStack Academy"
            />

          </div>


          <div className="pricingBrandText">

            <h2>
              PBODY FULLSTACK ACADEMY
            </h2>

            <p>
              AI-Powered Engineering Education
            </p>

          </div>

        </div>


        <div className="pricingEyebrow">

          <span />

          PREMIUM ENGINEERING MEMBERSHIP

          <span />

        </div>


        <h1>

          Build Skills.

          <br />

          Build Products.

          <br />

          <strong>
            Build Your Future.
          </strong>

        </h1>


        <p className="pricingHeroDescription">

          Go beyond watching tutorials. Learn modern software
          engineering through structured courses, practical
          projects, AI mentorship and career-focused learning.

        </p>


        <div className="pricingHeroStats">

          <div>

            <strong>
              01
            </strong>

            <span>
              Engineering Academy
            </span>

          </div>


          <div>

            <strong>
              ∞
            </strong>

            <span>
              Learning Opportunities
            </span>

          </div>


          <div>

            <strong>
              AI
            </strong>

            <span>
              Powered Mentorship
            </span>

          </div>

        </div>


      </section>



      {/* ========================================================
          PRICING PLANS
      ======================================================== */}

      <section className="pricingSection">

        <div className="pricingSectionHeading">

          <span className="sectionLabel">

            CHOOSE YOUR MEMBERSHIP

          </span>


          <h2>

            One Membership.

            <span>
              Serious Engineering Growth.
            </span>

          </h2>


          <p>

            Select your region and unlock the PBody FullStack
            Academy engineering ecosystem.

          </p>

        </div>



        <div className="pricingPlans">


          {/* ====================================================
              NIGERIAN PLAN
          ==================================================== */}

          <article className="pricingCard featuredCard">

            <div className="cardTopLine" />


            <div className="planBadge">

              MOST POPULAR

            </div>


            <div className="planIcon">

              🚀

            </div>


            <div className="planHeader">

              <span>
                NIGERIA
              </span>


              <h3>
                PBody Pro Annual
              </h3>


              <p>

                Full access to premium engineering education,
                projects, AI mentorship and career development.

              </p>

            </div>


            <div className="price">

              <div>

                <small>
                  ₦
                </small>

                25,000

              </div>


              <span>
                / year
              </span>

            </div>


            <div className="planDivider" />


            <h4>
              What's included
            </h4>


            <ul className="pricingFeatures">

              <li>
                <span>✓</span>
                Unlimited Premium Courses
              </li>

              <li>
                <span>✓</span>
                AI Engineering Mentor
              </li>

              <li>
                <span>✓</span>
                Real Production Projects
              </li>

              <li>
                <span>✓</span>
                Professional Certificates
              </li>

              <li>
                <span>✓</span>
                Career & Engineering Roadmaps
              </li>

              <li>
                <span>✓</span>
                Future Platform Updates
              </li>

              <li>
                <span>✓</span>
                Progress & Achievement Tracking
              </li>

            </ul>


            <button

              type="button"

              className="pricingButton primaryButton"

              onClick={() =>
                handleUpgrade("NGN")
              }

              disabled={Boolean(loadingCurrency)}

            >

              {isLoading("NGN") ? (

                <>

                  <span className="buttonSpinner" />

                  Connecting to Paystack...

                </>

              ) : (

                <>

                  Start Engineering Journey

                  <span>
                    →
                  </span>

                </>

              )}

            </button>


            <div className="securePayment">

              <span>
                🔒
              </span>

              Secure Nigerian payment powered by Paystack

            </div>

          </article>



          {/* ====================================================
              GLOBAL PLAN
          ==================================================== */}

          <article className="pricingCard globalCard">

            <div className="cardTopLine" />


            <div className="planBadge globalBadge">

              GLOBAL

            </div>


            <div className="planIcon">

              🌍

            </div>


            <div className="planHeader">

              <span>
                INTERNATIONAL
              </span>


              <h3>
                PBody Pro Global
              </h3>


              <p>

                Premium engineering education for developers
                and aspiring builders worldwide.

              </p>

            </div>


            <div className="price">

              <div>

                <small>
                  $
                </small>

                19

              </div>


              <span>
                / year
              </span>

            </div>


            <div className="planDivider" />


            <h4>
              What's included
            </h4>


            <ul className="pricingFeatures">

              <li>
                <span>✓</span>
                Global Learning Access
              </li>

              <li>
                <span>✓</span>
                AI Learning Assistant
              </li>

              <li>
                <span>✓</span>
                Engineering Projects
              </li>

              <li>
                <span>✓</span>
                Professional Certificates
              </li>

              <li>
                <span>✓</span>
                Interview Preparation
              </li>

              <li>
                <span>✓</span>
                Developer Community
              </li>

              <li>
                <span>✓</span>
                Future Platform Updates
              </li>

            </ul>


            <button

              type="button"

              className="pricingButton secondaryButton"

              onClick={() =>
                handleUpgrade("USD")
              }

              disabled={Boolean(loadingCurrency)}

            >

              {isLoading("USD") ? (

                <>

                  <span className="buttonSpinner" />

                  Connecting to Paystack...

                </>

              ) : (

                <>

                  Join Global Academy

                  <span>
                    →
                  </span>

                </>

              )}

            </button>


            <div className="securePayment">

              <span>
                🔒
              </span>

              Secure international payment

            </div>

          </article>


        </div>

      </section>



      {/* ========================================================
          VALUE / ECOSYSTEM
      ======================================================== */}

      <section className="pricingEcosystem">

        <div className="pricingSectionHeading">

          <span className="sectionLabel">

            THE PBODY DIFFERENCE

          </span>


          <h2>

            More Than A Course.

            <span>
              A Complete Engineering Ecosystem.
            </span>

          </h2>


          <p>

            Your membership is designed around the things that
            actually move an engineer forward.

          </p>

        </div>


        <div className="guaranteeGrid">


          <div className="guaranteeItem">

            <div className="guaranteeIcon">
              🚀
            </div>

            <h3>
              Career Growth
            </h3>

            <p>

              Build practical skills and a portfolio that
              demonstrates what you can actually create.

            </p>

          </div>



          <div className="guaranteeItem">

            <div className="guaranteeIcon">
              🤖
            </div>

            <h3>
              AI Mentorship
            </h3>

            <p>

              Get intelligent guidance while learning,
              solving problems and building projects.

            </p>

          </div>



          <div className="guaranteeItem">

            <div className="guaranteeIcon">
              🏆
            </div>

            <h3>
              Recognition
            </h3>

            <p>

              Track your achievements and earn professional
              certificates as you progress.

            </p>

          </div>



          <div className="guaranteeItem">

            <div className="guaranteeIcon">
              🌍
            </div>

            <h3>
              Global Community
            </h3>

            <p>

              Learn, build and grow alongside developers
              working toward the same future.

            </p>

          </div>


        </div>

      </section>



      {/* ========================================================
          FINAL CTA
      ======================================================== */}

      <section className="pricingFinalCta">

        <div>

          <span>
            YOUR NEXT LEVEL STARTS HERE
          </span>


          <h2>

            Stop Preparing.

            <br />

            Start Building.

          </h2>


          <p>

            Join PBody FullStack Academy and turn your
            learning into real engineering ability.

          </p>

        </div>


        <button

          type="button"

          onClick={() =>

            document
              .querySelector(".pricingPlans")
              ?.scrollIntoView({

                behavior: "smooth",

                block: "center"

              })

          }

        >

          Choose Your Plan

          <span>
            ↓
          </span>

        </button>

      </section>


    </main>

  );

}