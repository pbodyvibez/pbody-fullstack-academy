const pricing = require("../config/pricing");

const {
  initializeTransaction,
  verifyTransaction
} = require("../services/paystackService");

const Subscription = require("../models/Subscription");
const User = require("../models/User");


// ============================================================
// INITIALIZE PAYMENT
// ============================================================

exports.initializePayment = async (req, res) => {

  try {

    const {
      email,
      currency = "NGN",
      plan = "annual"
    } = req.body;


    // ----------------------------------------------------------
    // VALIDATE EMAIL
    // ----------------------------------------------------------

    if (!email) {

      return res.status(400).json({
        success: false,
        message: "Email is required"
      });

    }


    const normalizedEmail =
      email.toLowerCase().trim();


    // ----------------------------------------------------------
    // FIND USER
    // ----------------------------------------------------------

    const user = await User.findOne({
      email: normalizedEmail
    });


    if (!user) {

      return res.status(404).json({
        success: false,
        message: `User account not found for ${normalizedEmail}`
      });

    }


    // ----------------------------------------------------------
    // NORMALIZE CURRENCY
    // ----------------------------------------------------------

    const normalizedCurrency =
      currency.toUpperCase();


    // ----------------------------------------------------------
    // GET SERVER-SIDE PRICING
    // ----------------------------------------------------------

    const pricingPlan =
      pricing[normalizedCurrency];


    if (!pricingPlan) {

      return res.status(400).json({
        success: false,
        message: "Currency not supported"
      });

    }


    // ----------------------------------------------------------
    // ONLY ANNUAL PLAN IS CURRENTLY AVAILABLE
    // ----------------------------------------------------------

    if (plan !== "annual") {

      return res.status(400).json({
        success: false,
        message: "Only the annual plan is currently available"
      });

    }


    // ----------------------------------------------------------
    // INITIALIZE PAYMENT
    // ----------------------------------------------------------

    const payment =
      await initializeTransaction({

        email: normalizedEmail,

        amount: pricingPlan.annual,

        currency: pricingPlan.currency

      });


    // ----------------------------------------------------------
    // RESPONSE
    // ----------------------------------------------------------

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
      error.response?.data || error.message
    );


    return res.status(500).json({

      success: false,

      message: "Payment initialization failed"

    });

  }

};


// ============================================================
// VERIFY PAYMENT
// ============================================================

exports.verifyPayment = async (req, res) => {

  try {

    const {
      reference
    } = req.params;


    // ----------------------------------------------------------
    // VALIDATE REFERENCE
    // ----------------------------------------------------------

    if (!reference) {

      return res.status(400).json({

        success: false,

        message: "Payment reference is required"

      });

    }


    // ----------------------------------------------------------
    // VERIFY WITH PAYSTACK
    // ----------------------------------------------------------

    const payment =
      await verifyTransaction(reference);


    if (
      !payment ||
      payment.status !== "success"
    ) {

      return res.status(400).json({

        success: false,

        message: "Payment unsuccessful"

      });

    }


    // ----------------------------------------------------------
    // GET PAYMENT CURRENCY
    // ----------------------------------------------------------

    const currency =
      payment.currency?.toUpperCase();


    // ----------------------------------------------------------
    // GET SERVER-SIDE PRICING
    // ----------------------------------------------------------

    const pricingPlan =
      pricing[currency];


    if (!pricingPlan) {

      return res.status(400).json({

        success: false,

        message: "Payment currency is not supported"

      });

    }


    // ----------------------------------------------------------
    // SECURITY CHECK — VERIFY AMOUNT
    // ----------------------------------------------------------

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


      return res.status(400).json({

        success: false,

        message: "Payment amount does not match the selected plan"

      });

    }


    // ----------------------------------------------------------
    // GET CUSTOMER EMAIL
    // ----------------------------------------------------------

    const email =
      payment.customer?.email
        ?.toLowerCase()
        .trim();


    if (!email) {

      return res.status(400).json({

        success: false,

        message: "Payment customer email unavailable"

      });

    }


    // ----------------------------------------------------------
    // FIND USER
    // ----------------------------------------------------------

    const user =
      await User.findOne({
        email
      });


    if (!user) {

      return res.status(404).json({

        success: false,

        message: "User not found"

      });

    }


    // ----------------------------------------------------------
    // SAVE PREMIUM SUBSCRIPTION
    // ----------------------------------------------------------

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

          activatedAt: new Date(),

          expiresAt:
            new Date(
              Date.now() +
              365 *
              24 *
              60 *
              60 *
              1000
            )

        },

        {

          new: true,

          upsert: true

        }

      );


    // ----------------------------------------------------------
    // SUCCESS
    // ----------------------------------------------------------

    return res.status(200).json({

      success: true,

      message: "Premium activated",

      subscription

    });

  }

  catch (error) {

    console.error(
      "VERIFY PAYMENT ERROR:",
      error.response?.data || error.message
    );


    return res.status(500).json({

      success: false,

      message: "Verification failed"

    });

  }

};