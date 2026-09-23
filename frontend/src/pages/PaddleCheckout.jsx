
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import Logo from "../assets/images/logo.png";

import "../styles/pricing.css";


// ============================================================
// PBODY FULLSTACK ACADEMY
// PADDLE CHECKOUT PAGE
// LIVE PRODUCTION CHECKOUT
// ============================================================

const PADDLE_SCRIPT_URL =
  "https://cdn.paddle.com/paddle/v2/paddle.js";

const PADDLE_PRICE_ID =
  process.env.REACT_APP_PADDLE_GLOBAL_PRICE_ID ||
  "pri_01m1jxz59jxk44nh84460bchc5";

const PADDLE_CLIENT_TOKEN =
  process.env.REACT_APP_PADDLE_CLIENT_TOKEN;


export default function PaddleCheckout() {

  const [searchParams] =
    useSearchParams();

  const [email, setEmail] =
    useState(
      searchParams.get("email") || ""
    );

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");


  useEffect(() => {

    document.title =
      "PBody FullStack Academy — Global Membership";

  }, []);


  const loadPaddle = () => {

    return new Promise((resolve, reject) => {

      if (window.Paddle) {

        resolve(
          window.Paddle
        );

        return;

      }


      const existingScript =
        document.querySelector(
          `script[src="${PADDLE_SCRIPT_URL}"]`
        );


      if (existingScript) {

        existingScript.addEventListener(
          "load",
          () => {

            if (window.Paddle) {

              resolve(
                window.Paddle
              );

            } else {

              reject(
                new Error(
                  "Paddle.js loaded but is unavailable."
                )
              );

            }

          },
          { once: true }
        );


        existingScript.addEventListener(
          "error",
          () => {

            reject(
              new Error(
                "Paddle.js failed to load."
              )
            );

          },
          { once: true }
        );


        return;

      }


      const script =
        document.createElement("script");


      script.src =
        PADDLE_SCRIPT_URL;

      script.async =
        true;


      script.onload = () => {

        if (window.Paddle) {

          resolve(
            window.Paddle
          );

        } else {

          reject(
            new Error(
              "Paddle.js loaded but is unavailable."
            )
          );

        }

      };


      script.onerror = () => {

        reject(
          new Error(
            "Unable to load Paddle checkout."
          )
        );

      };


      document.head.appendChild(
        script
      );

    });

  };


  const handleCheckout = async (event) => {

    event.preventDefault();

    setError("");


    if (!email.trim()) {

      setError(
        "Please enter the email address you use for your PBody account."
      );

      return;

    }


    if (!PADDLE_CLIENT_TOKEN) {

      setError(
        "Paddle checkout is not configured on this website."
      );

      return;

    }


    if (
      !PADDLE_CLIENT_TOKEN.startsWith("live_")
    ) {

      setError(
        "Live Paddle checkout is not configured correctly."
      );

      return;

    }


    if (!PADDLE_PRICE_ID) {

      setError(
        "The PBody Global Membership price is unavailable."
      );

      return;

    }


    try {

      setLoading(true);


      const Paddle =
        await loadPaddle();


      if (!Paddle) {

        throw new Error(
          "Paddle could not be loaded."
        );

      }


      if (
        !Paddle.Checkout ||
        typeof Paddle.Checkout.open !== "function"
      ) {

        throw new Error(
          "Paddle Checkout is unavailable."
        );

      }


      Paddle.Initialize({

        token:
          PADDLE_CLIENT_TOKEN,

        checkout: {

          settings: {

            displayMode:
              "overlay",

            theme:
              "light",

            locale:
              "en"

          }

        },

        eventCallback: (checkoutEvent) => {

          console.log(
            "PBODY PADDLE CHECKOUT EVENT:",
            checkoutEvent
          );

        }

      });


      Paddle.Checkout.open({

        items: [

          {
            priceId:
              PADDLE_PRICE_ID,

            quantity:
              1
          }

        ],


        customer: {

          email:
            email.trim()

        },


        customData: {

          pbody_email:
            email.trim(),

          pbody_plan:
            "annual",

          pbody_provider:
            "paddle"

        }

      });

    } catch (checkoutError) {

      console.error(
        "PBODY PADDLE CHECKOUT ERROR:",
        checkoutError
      );


      setError(
        checkoutError?.message ||
        "Paddle checkout could not be opened. Please try again."
      );

    } finally {

      setLoading(false);

    }

  };


  return (

    <main
      style={{
        minHeight: "100vh",
        background: "#061b4f",
        color: "#ffffff",
        padding: "70px 20px"
      }}
    >

      <div
        style={{
          width: "100%",
          maxWidth: "760px",
          margin: "0 auto"
        }}
      >

        <div
          style={{
            textAlign: "center",
            marginBottom: "40px"
          }}
        >

          <Link
            to="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              color: "#ffffff",
              textDecoration: "none",
              marginBottom: "30px"
            }}
          >

            <img
              src={Logo}
              alt="PBody FullStack Academy"
              style={{
                width: "64px",
                height: "64px",
                objectFit: "contain"
              }}
            />

            <span
              style={{
                fontSize: "20px",
                fontWeight: 800
              }}
            >
              PBODY FULLSTACK ACADEMY
            </span>

          </Link>


          <span
            style={{
              display: "block",
              color: "#D4AF37",
              fontSize: "12px",
              fontWeight: 800,
              letterSpacing: "2px",
              marginBottom: "15px"
            }}
          >
            GLOBAL MEMBERSHIP
          </span>


          <h1
            style={{
              margin: "0 0 18px",
              fontSize: "clamp(32px, 6vw, 52px)",
              lineHeight: 1.1,
              fontWeight: 800
            }}
          >
            PBody Pro Global
          </h1>


          <p
            style={{
              maxWidth: "650px",
              margin: "0 auto",
              color: "#dbe4f0",
              fontSize: "17px",
              lineHeight: 1.7
            }}
          >
            Premium digital engineering education with structured
            courses, practical projects, AI-assisted learning,
            progress tracking, certificates and career-focused
            resources.
          </p>

        </div>


        <section
          style={{
            padding: "36px",
            borderRadius: "22px",
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.12)",
            boxShadow: "0 25px 70px rgba(0,0,0,0.25)"
          }}
        >

          <div
            style={{
              textAlign: "center",
              marginBottom: "30px"
            }}
          >

            <div
              style={{
                color: "#D4AF37",
                fontSize: "13px",
                fontWeight: 800,
                letterSpacing: "1.5px"
              }}
            >
              ANNUAL MEMBERSHIP
            </div>


            <div
              style={{
                marginTop: "8px",
                fontSize: "48px",
                fontWeight: 900
              }}
            >
              $19
              <span
                style={{
                  fontSize: "17px",
                  color: "#cbd5e1",
                  fontWeight: 500
                }}
              >
                {" "}USD / year
              </span>
            </div>


            <p
              style={{
                margin: "10px 0 0",
                color: "#94a3b8",
                fontSize: "14px"
              }}
            >
              Recurring annual subscription.
            </p>

          </div>


          <div
            style={{
              marginBottom: "28px",
              display: "grid",
              gap: "12px"
            }}
          >

            {[
              "Premium engineering courses",
              "AI-assisted learning",
              "Practical software projects",
              "Progress and achievement tracking",
              "Professional certificates",
              "Career and interview resources",
              "Future platform updates"
            ].map((feature) => (

              <div
                key={feature}
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                  color: "#dbe4f0",
                  fontSize: "15px"
                }}
              >

                <span
                  style={{
                    color: "#D4AF37",
                    fontWeight: 900
                  }}
                >
                  ✓
                </span>

                {feature}

              </div>

            ))}

          </div>


          {error && (

            <div
              role="alert"
              style={{
                marginBottom: "20px",
                padding: "15px 18px",
                borderRadius: "12px",
                background: "rgba(220,38,38,0.12)",
                border: "1px solid rgba(248,113,113,0.35)",
                color: "#fecaca",
                lineHeight: 1.5
              }}
            >
              {error}
            </div>

          )}


          <form
            onSubmit={handleCheckout}
          >

            <label
              htmlFor="paddle-email"
              style={{
                display: "block",
                marginBottom: "9px",
                color: "#ffffff",
                fontWeight: 700,
                fontSize: "14px"
              }}
            >
              Account Email
            </label>


            <input
              id="paddle-email"
              type="email"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
              placeholder="you@example.com"
              autoComplete="email"
              required
              style={{
                width: "100%",
                boxSizing: "border-box",
                padding: "15px 16px",
                borderRadius: "10px",
                border: "1px solid rgba(255,255,255,0.18)",
                background: "rgba(255,255,255,0.08)",
                color: "#ffffff",
                outline: "none",
                fontSize: "16px"
              }}
            />


            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%",
                marginTop: "18px",
                padding: "17px 24px",
                border: "none",
                borderRadius: "11px",
                background: "#D4AF37",
                color: "#061b4f",
                fontWeight: 900,
                fontSize: "16px",
                cursor: loading
                  ? "wait"
                  : "pointer",
                opacity: loading
                  ? 0.7
                  : 1
              }}
            >
              {loading
                ? "Opening Secure Checkout..."
                : "Continue to Secure Checkout →"}
            </button>

          </form>


          <p
            style={{
              margin: "20px 0 0",
              textAlign: "center",
              color: "#94a3b8",
              fontSize: "13px",
              lineHeight: 1.6
            }}
          >
            Payment is securely processed by Paddle.
            By continuing, you acknowledge the PBody
            FullStack Academy{" "}
            <Link
              to="/terms"
              style={{
                color: "#D4AF37"
              }}
            >
              Terms & Conditions
            </Link>
            ,{" "}
            <Link
              to="/refund"
              style={{
                color: "#D4AF37"
              }}
            >
              Refund Policy
            </Link>
            {" "}and{" "}
            <Link
              to="/privacy"
              style={{
                color: "#D4AF37"
              }}
            >
              Privacy Policy
            </Link>
            .
          </p>

        </section>


        <div
          style={{
            marginTop: "25px",
            textAlign: "center"
          }}
        >

          <Link
            to="/pricing"
            style={{
              color: "#cbd5e1",
              textDecoration: "none",
              fontSize: "14px"
            }}
          >
            ← Back to Pricing
          </Link>

        </div>

      </div>

    </main>

  );

}
