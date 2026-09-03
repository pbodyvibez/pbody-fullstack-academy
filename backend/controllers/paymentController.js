// ======================================================
// PBODY FULLSTACK ACADEMY
// PAYMENT CONTROLLER
// PAYSTACK LIVE + WEBHOOK
// ======================================================

const crypto = require("crypto");

const pricing = require("../config/pricing");

const {
  initializeTransaction,
  verifyTransaction
} = require("../services/paystackService");

const Subscription = require("../models/Subscription");
const User = require("../models/User");


// ======================================================
// ACTIVATE PREMIUM SUBSCRIPTION
// ======================================================

async function activatePremiumSubscription(payment, reference) {

  // ------------------------------------------------------
  // PAYMENT STATUS
  // ------------------------------------------------------

  if (
    !payment ||
    payment.status !== "success"
  ) {

    throw new Error(
      "Payment was not successful"
    );

  }


  // ------------------------------------------------------
  // CURRENCY
  // ------------------------------------------------------

  const currency =
    payment.currency?.toUpperCase();


  if (!currency) {

    throw new Error(
      "Payment currency unavailable"
    );

  }


  // ------------------------------------------------------
  // SERVER-SIDE PRICING
  // ------------------------------------------------------

  const pricingPlan =
    pricing[currency];


  if (!pricingPlan) {

    throw new Error(
      "Payment currency is not supported"
    );

  }


  // ------------------------------------------------------
  // SECURITY — VERIFY AMOUNT
  // ------------------------------------------------------

  if (
    Number(payment.amount) !==
    Number(pricingPlan.annual)
  ) {

    console.error(
      "PAYMENT AMOUNT MISMATCH:",
      {
        reference,
        received: payment.amount,
        expected: pricingPlan.annual,
        currency
      }
    );

    throw new Error(
      "Payment amount does not match the selected plan"
    );

  }


  // ------------------------------------------------------
  // CUSTOMER EMAIL
  // ------------------------------------------------------

  const email =
    payment.customer?.email
      ?.toLowerCase()
      .trim();


  if (!email) {

    throw new Error(
      "Payment customer email unavailable"
    );

  }


  // ------------------------------------------------------
  // FIND USER
  // ------------------------------------------------------

  const user =
    await User.findOne({
      email
    });


  if (!user) {

    throw new Error(
      "User not found"
    );

  }


  // ------------------------------------------------------
  // PREVENT DUPLICATE PAYMENT PROCESSING
  // ------------------------------------------------------

  const existingSubscription =
    await Subscription.findOne({
      paymentReference: reference
    });


  if (existingSubscription) {

    return existingSubscription;

  }


  // ------------------------------------------------------
  // SUBSCRIPTION EXPIRY
  // ------------------------------------------------------

  const activatedAt =
    new Date();

  const expiresAt =
    new Date(
      activatedAt.getTime() +
      365 *
      24 *
      60 *
      60 *
      1000
    );


  // ------------------------------------------------------
  // SAVE PREMIUM SUBSCRIPTION
  // ------------------------------------------------------

  const subscription =
    await Subscription.findOneAndUpdate(

      {
        user: user._id
      },

      {
        status: "premium",

        plan: pricingPlan.plan,

        billing: pricingPlan.billing,

        currency,

        amount: payment.amount,

        paymentReference: reference,

        provider: pricingPlan.provider,

        activatedAt,

        expiresAt
      },

      {
        new: true,

        upsert: true
      }

    );


  console.log(
    "✅ PREMIUM SUBSCRIPTION ACTIVATED:",
    {
      user: user._id.toString(),
      email,
      reference,
      currency,
      amount: payment.amount,
      expiresAt
    }
  );


  return subscription;

}


// ======================================================
// INITIALIZE PAYMENT
// ======================================================

exports.initializePayment = async (
  req,
  res
) => {

  try {

    const {
      email,
      currency = "NGN",
      plan = "annual"
    } = req.body;


    // ----------------------------------------------------
    // VALIDATE EMAIL
    // ----------------------------------------------------

    if (!email) {

      return res.status(400).json({

        success: false,

        message: "Email is required"

      });

    }


    const normalizedEmail =
      email.toLowerCase().trim();


    // ----------------------------------------------------
    // FIND USER
    // ----------------------------------------------------

    const user =
      await User.findOne({
        email: normalizedEmail
      });


    if (!user) {

      return res.status(404).json({

        success: false,

        message:
          `User account not found for ${normalizedEmail}`

      });

    }


    // ----------------------------------------------------
    // NORMALIZE CURRENCY
    // ----------------------------------------------------

    const normalizedCurrency =
      currency.toUpperCase();


    // ----------------------------------------------------
    // SERVER-SIDE PRICING
    // ----------------------------------------------------

    const pricingPlan =
      pricing[normalizedCurrency];


    if (!pricingPlan) {

      return res.status(400).json({

        success: false,

        message: "Currency not supported"

      });

    }


    // ----------------------------------------------------
    // ANNUAL PLAN ONLY
    // ----------------------------------------------------

    if (plan !== "annual") {

      return res.status(400).json({

        success: false,

        message:
          "Only the annual plan is currently available"

      });

    }


    // ----------------------------------------------------
    // INITIALIZE PAYSTACK TRANSACTION
    // ----------------------------------------------------

    const payment =
      await initializeTransaction({

        email: normalizedEmail,

        amount: pricingPlan.annual,

        currency: pricingPlan.currency

      });


    // ----------------------------------------------------
    // RESPONSE
    // ----------------------------------------------------

    return res.status(200).json({

      success: true,

      message: "Payment initialized",

      data: {

        ...payment,

        plan: pricingPlan.plan,

        billing: pricingPlan.billing,

        currency: pricingPlan.currency,

        amount: pricingPlan.annual,

        provider: pricingPlan.provider

      }

    });

  }

  catch (error) {

    console.error(
      "INITIALIZE PAYMENT ERROR:",
      error.response?.data ||
      error.message
    );


    return res.status(500).json({

      success: false,

      message:
        "Payment initialization failed"

    });

  }

};


// ======================================================
// VERIFY PAYMENT
// ======================================================

exports.verifyPayment = async (
  req,
  res
) => {

  try {

    const {
      reference
    } = req.params;


    // ----------------------------------------------------
    // VALIDATE REFERENCE
    // ----------------------------------------------------

    if (!reference) {

      return res.status(400).json({

        success: false,

        message:
          "Payment reference is required"

      });

    }


    // ----------------------------------------------------
    // VERIFY WITH PAYSTACK
    // ----------------------------------------------------

    const payment =
      await verifyTransaction(
        reference
      );


    // ----------------------------------------------------
    // ACTIVATE PREMIUM
    // ----------------------------------------------------

    const subscription =
      await activatePremiumSubscription(
        payment,
        reference
      );


    // ----------------------------------------------------
    // SUCCESS
    // ----------------------------------------------------

    return res.status(200).json({

      success: true,

      message:
        "Premium activated",

      subscription

    });

  }

  catch (error) {

    console.error(
      "VERIFY PAYMENT ERROR:",
      error.response?.data ||
      error.message
    );


    return res.status(400).json({

      success: false,

      message:
        error.message ||
        "Verification failed"

    });

  }

};


// ======================================================
// PAYSTACK WEBHOOK
// ======================================================

exports.handlePaystackWebhook = async (
  req,
  res
) => {

  try {

    // ----------------------------------------------------
    // PAYSTACK SECRET KEY
    // ----------------------------------------------------

    const secretKey =
      process.env.PAYSTACK_SECRET_KEY;


    if (!secretKey) {

      console.error(
        "PAYSTACK_SECRET_KEY is missing"
      );

      return res.sendStatus(500);

    }


    // ----------------------------------------------------
    // PAYSTACK SIGNATURE
    // ----------------------------------------------------

    const signature =
      req.headers["x-paystack-signature"];


    if (!signature) {

      console.error(
        "PAYSTACK WEBHOOK: Missing signature"
      );

      return res.sendStatus(401);

    }


    // ----------------------------------------------------
    // RAW REQUEST BODY
    // ----------------------------------------------------

    const rawBody =
      req.rawBody;


    if (!rawBody) {

      console.error(
        "PAYSTACK WEBHOOK: Missing raw body"
      );

      return res.sendStatus(400);

    }


    // ----------------------------------------------------
    // GENERATE EXPECTED SIGNATURE
    // ----------------------------------------------------

    const expectedSignature =
      crypto
        .createHmac(
          "sha512",
          secretKey
        )
        .update(rawBody)
        .digest("hex");


    // ----------------------------------------------------
    // TIMING-SAFE SIGNATURE COMPARISON
    // ----------------------------------------------------

    const receivedBuffer =
      Buffer.from(
        signature,
        "utf8"
      );

    const expectedBuffer =
      Buffer.from(
        expectedSignature,
        "utf8"
      );


    if (
      receivedBuffer.length !==
      expectedBuffer.length
    ) {

      console.error(
        "PAYSTACK WEBHOOK: Invalid signature"
      );

      return res.sendStatus(401);

    }


    if (
      !crypto.timingSafeEqual(
        receivedBuffer,
        expectedBuffer
      )
    ) {

      console.error(
        "PAYSTACK WEBHOOK: Invalid signature"
      );

      return res.sendStatus(401);

    }


    // ----------------------------------------------------
    // PARSE EVENT
    // ----------------------------------------------------

    const event =
      req.body;


    console.log(
      "PAYSTACK WEBHOOK EVENT:",
      event?.event
    );


    // ----------------------------------------------------
    // ACKNOWLEDGE UNSUPPORTED EVENTS
    // ----------------------------------------------------

    if (
      event?.event !==
      "charge.success"
    ) {

      return res.sendStatus(200);

    }


    // ----------------------------------------------------
    // PAYMENT DATA
    // ----------------------------------------------------

    const payment =
      event.data;


    if (!payment) {

      console.error(
        "PAYSTACK WEBHOOK: Missing payment data"
      );

      return res.sendStatus(400);

    }


    const reference =
      payment.reference;


    if (!reference) {

      console.error(
        "PAYSTACK WEBHOOK: Missing payment reference"
      );

      return res.sendStatus(400);

    }


    // ----------------------------------------------------
    // VERIFY TRANSACTION DIRECTLY WITH PAYSTACK
    // ----------------------------------------------------
    // The webhook signature proves the request came from
    // Paystack. We still verify the transaction with the
    // Paystack API before granting premium access.

    const verifiedPayment =
      await verifyTransaction(
        reference
      );


    // ----------------------------------------------------
    // ACTIVATE PREMIUM
    // ----------------------------------------------------

    await activatePremiumSubscription(
      verifiedPayment,
      reference
    );


    // ----------------------------------------------------
    // SUCCESS
    // ----------------------------------------------------

    console.log(
      "✅ PAYSTACK WEBHOOK PROCESSED:",
      reference
    );


    return res.sendStatus(200);

  }

  catch (error) {

    console.error(
      "PAYSTACK WEBHOOK ERROR:",
      error.response?.data ||
      error.message
    );


    return res.sendStatus(500);

  }

};