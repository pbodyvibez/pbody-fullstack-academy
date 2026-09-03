// ======================================================
// PBODY FULLSTACK ACADEMY
// PAYMENT ROUTES
// ======================================================

const express = require("express");

const router = express.Router();

const {
  initializePayment,
  verifyPayment,
  handlePaystackWebhook
} = require("../controllers/paymentController");

// ======================================================
// PAYMENT TEST
// ======================================================

router.get(
  "/test",
  (req, res) => {

    res.json({
      success: true,
      message: "Payment route working"
    });

  }
);

// ======================================================
// INITIALIZE PAYMENT
// ======================================================

router.post(
  "/initialize",
  initializePayment
);

// ======================================================
// VERIFY PAYMENT
// ======================================================

router.get(
  "/verify/:reference",
  verifyPayment
);

// ======================================================
// PAYSTACK WEBHOOK
// ======================================================

router.post(
  "/webhook",
  handlePaystackWebhook
);

// ======================================================
// EXPORT
// ======================================================

module.exports = router;