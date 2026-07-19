const pricing = {

currency: "USD",

symbol: "$",

defaultBilling: "monthly",

taxIncluded: false,

trialDays: 7,

plans: {

free: {

monthly: 0,

yearly: 0

},

pro: {

monthly: 19,

yearly: 190,

yearlyDiscount: "Save 17%"

},

lifetime: {

oneTime: 249

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

"Stripe",

"Paystack",

"Flutterwave",

"PayPal"

],

supportedCurrencies: [

"USD",

"NGN",

"GBP",

"EUR"

],

regionalPricing: {

NG: {

currency: "NGN",

proMonthly: 15000,

proYearly: 150000,

lifetime: 180000

},

US: {

currency: "USD",

proMonthly: 19,

proYearly: 190,

lifetime: 249

},

UK: {

currency: "GBP",

proMonthly: 16,

proYearly: 160,

lifetime: 210

},

EU: {

currency: "EUR",

proMonthly: 18,

proYearly: 180,

lifetime: 235

}

}

};

export default pricing;