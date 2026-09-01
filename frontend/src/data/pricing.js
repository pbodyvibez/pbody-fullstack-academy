const pricing = {

  defaultCurrency: "NGN",

  defaultBilling: "annual",

  taxIncluded: false,

  trialDays: 3,


  plans: {

    free: {

      monthly: 0,

      yearly: 0

    },

    pro: {

      NGN: 25000,

      USD: 19,

      billing: "annual"

    }

  },


  discounts: [

    {

      id: "launch",

      title: "Launch Offer",

      code: "LAUNCH2026",

      type: "percentage",

      value: 30,

      active: true,

      description:
        "30% off for early supporters of PBody FullStack Academy."

    },

    {

      id: "student",

      title: "Student Discount",

      code: "STUDENT50",

      type: "percentage",

      value: 50,

      active: false,

      description:
        "Verified students receive 50% off Pro subscriptions."

    },

    {

      id: "blackfriday",

      title: "Black Friday",

      code: "BLACKFRIDAY",

      type: "percentage",

      value: 60,

      active: false,

      description:
        "Limited-time Black Friday promotion."

    }

  ],


  paymentMethods: [

    "Paystack",

    "Paddle"

  ],


  supportedCurrencies: [

    "NGN",

    "USD"

  ],


  regionalPricing: {

    NG: {

      currency: "NGN",

      proYearly: 25000

    },

    US: {

      currency: "USD",

      proYearly: 19

    },

    UK: {

      currency: "USD",

      proYearly: 19

    },

    EU: {

      currency: "USD",

      proYearly: 19

    }

  }

};


export default pricing;