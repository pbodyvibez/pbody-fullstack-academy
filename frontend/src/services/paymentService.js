import axios from "axios";


// ============================================================
// API
// ============================================================

const API_URL =
  process.env.REACT_APP_API_URL ||
  "https://pbody-fullstack-academy.onrender.com/api";


// ============================================================
// PAYSTACK
// ============================================================

export async function initializePayment(data) {

  const response = await axios.post(
    `${API_URL}/payments/initialize`,
    data
  );

  return response.data;
}


export async function verifyPayment(reference) {

  const response = await axios.get(
    `${API_URL}/payments/verify/${reference}`
  );

  return response.data;
}


// ============================================================
// PADDLE
// LIVE PRODUCTION CHECKOUT
// ============================================================

const PADDLE_SCRIPT_URL =
  "https://cdn.paddle.com/paddle/v2/paddle.js";


const PADDLE_PRICE_ID =
  process.env.REACT_APP_PADDLE_GLOBAL_PRICE_ID ||
  "pri_01m1jxz59jxk44nh84460bchc5";


const PADDLE_CLIENT_TOKEN =
  process.env.REACT_APP_PADDLE_CLIENT_TOKEN;


// ============================================================
// PADDLE STATE
// ============================================================

let paddleLoadPromise = null;

let paddleInstance = null;


// ============================================================
// LOAD PADDLE.JS
// ============================================================

function loadPaddleScript() {

  if (window.Paddle) {

    return Promise.resolve(
      window.Paddle
    );

  }


  if (paddleLoadPromise) {

    return paddleLoadPromise;

  }


  paddleLoadPromise =
    new Promise((resolve, reject) => {

      const existingScript =
        document.querySelector(
          `script[src="${PADDLE_SCRIPT_URL}"]`
        );


      // --------------------------------------------------------
      // Existing script
      // --------------------------------------------------------

      if (existingScript) {

        const checkPaddle = () => {

          if (window.Paddle) {

            resolve(
              window.Paddle
            );

            return;

          }

          reject(
            new Error(
              "Paddle.js loaded but the Paddle object is unavailable."
            )
          );

        };


        existingScript.addEventListener(
          "load",
          checkPaddle,
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


        if (window.Paddle) {

          checkPaddle();

        }


        return;

      }


      // --------------------------------------------------------
      // Create Paddle script
      // --------------------------------------------------------

      const script =
        document.createElement("script");


      script.src =
        PADDLE_SCRIPT_URL;

      script.async = true;


      script.onload = () => {

        if (window.Paddle) {

          resolve(
            window.Paddle
          );

          return;

        }

        reject(
          new Error(
            "Paddle.js loaded but the Paddle object is unavailable."
          )
        );

      };


      script.onerror = () => {

        reject(
          new Error(
            "Unable to load Paddle.js. Please check your internet connection or browser extensions."
          )
        );

      };


      document.head.appendChild(
        script
      );

    });


  return paddleLoadPromise;

}


// ============================================================
// INITIALIZE PADDLE
// ============================================================

async function initializePaddle() {

  // ----------------------------------------------------------
  // Client-side token
  // ----------------------------------------------------------

  if (!PADDLE_CLIENT_TOKEN) {

    throw new Error(
      "Paddle client-side token is not configured."
    );

  }


  // ----------------------------------------------------------
  // Production token protection
  // ----------------------------------------------------------

  if (
    !PADDLE_CLIENT_TOKEN.startsWith("live_")
  ) {

    throw new Error(
      "A live Paddle client-side token is required for production checkout."
    );

  }


  // ----------------------------------------------------------
  // Load Paddle.js
  // ----------------------------------------------------------

  const Paddle =
    await loadPaddleScript();


  if (!Paddle) {

    throw new Error(
      "Paddle could not be loaded."
    );

  }


  // ----------------------------------------------------------
  // Prevent duplicate initialization
  // ----------------------------------------------------------

  if (paddleInstance) {

    return paddleInstance;

  }


  // ----------------------------------------------------------
  // PRODUCTION ENVIRONMENT
  //
  // Do NOT call:
  // Paddle.Environment.set("sandbox")
  //
  // Paddle defaults to production when no sandbox
  // environment is explicitly selected.
  // ----------------------------------------------------------

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

    eventCallback: (event) => {

      console.log(
        "PADDLE EVENT:",
        event
      );

    }

  });


  paddleInstance =
    Paddle;


  console.log(
    "PADDLE LIVE PRODUCTION CHECKOUT INITIALIZED"
  );


  return paddleInstance;

}


// ============================================================
// GLOBAL PADDLE PAYMENT
// ============================================================

export async function initializePaddlePayment({
  email,
  userId
}) {

  // ----------------------------------------------------------
  // Validate email
  // ----------------------------------------------------------

  if (!email) {

    throw new Error(
      "A customer email is required."
    );

  }


  // ----------------------------------------------------------
  // Validate price
  // ----------------------------------------------------------

  if (!PADDLE_PRICE_ID) {

    throw new Error(
      "Paddle global price ID is not configured."
    );

  }


  // ----------------------------------------------------------
  // Validate production price
  // ----------------------------------------------------------

  if (
    !PADDLE_PRICE_ID.startsWith("pri_")
  ) {

    throw new Error(
      "Invalid Paddle price ID."
    );

  }


  console.log(
    "STARTING PBODY PADDLE LIVE PAYMENT:",
    {
      email,
      userId,
      priceId:
        PADDLE_PRICE_ID
    }
  );


  // ----------------------------------------------------------
  // Initialize Paddle
  // ----------------------------------------------------------

  const Paddle =
    await initializePaddle();


  // ----------------------------------------------------------
  // Verify checkout availability
  // ----------------------------------------------------------

  if (
    !Paddle.Checkout ||
    typeof Paddle.Checkout.open !== "function"
  ) {

    throw new Error(
      "Paddle Checkout is unavailable."
    );

  }


  // ----------------------------------------------------------
  // Open LIVE checkout
  // ----------------------------------------------------------

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

      email

    },


    customData: {

      pbody_user_id:
        userId || "",

      pbody_email:
        email,

      pbody_plan:
        "annual",

      pbody_provider:
        "paddle"

    }

  });


  console.log(
    "PBODY PADDLE LIVE CHECKOUT OPEN REQUEST SENT"
  );


  return {

    success:
      true,

    provider:
      "paddle",

    priceId:
      PADDLE_PRICE_ID

  };

}