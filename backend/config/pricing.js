// ============================================================
// PBODY FULLSTACK ACADEMY
// PRICING CONFIGURATION
// ============================================================

const pricing = {

  NGN: {

    currency: "NGN",

    provider: "paystack",

    // ₦120,000 expressed in kobo
    annual: 12000000

  },

  USD: {

    currency: "USD",

    provider: "paystack",

    // $99 expressed in cents
    annual: 9900

  }

};

module.exports = pricing;