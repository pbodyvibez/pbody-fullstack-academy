// ============================================================
// PBODY FULLSTACK ACADEMY
// PRICING CONFIGURATION
// ============================================================

const pricing = {

  // ==========================================================
  // NIGERIA
  // ==========================================================

  NGN: {

    currency: "NGN",

    provider: "paystack",

    plan: "PBody Pro Annual",

    billing: "annual",

    // ₦25,000 per year
    // Paystack expects NGN in kobo.
    annual: 2500000

  },


  // ==========================================================
  // INTERNATIONAL
  // ==========================================================

  USD: {

    currency: "USD",

    provider: "paystack",

    plan: "PBody Pro Global",

    billing: "annual",

    // International price.
    // We will replace this with the final
    // international provider/product configuration
    // when Paddle is connected.
    annual: 1900

  }

};


// ============================================================
// EXPORT
// ============================================================

module.exports = pricing;