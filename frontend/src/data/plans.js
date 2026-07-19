const plans = [

{

id:"free",

name:"Free",

badge:"STARTER",

price:0,

currency:"USD",

billing:"Forever",

popular:false,

color:"#64748B",

buttonText:"Get Started",

description:
"Perfect for beginners starting their software engineering journey.",

features:[

"Access to free lessons",

"Basic quizzes",

"Community support",

"Progress tracking",

"Limited AI Mentor",

"Basic coding exercises"

],

limitations:[

"No certificates",

"No premium projects",

"No interview preparation",

"No downloadable resources",

"No career coaching"

]

},

{

id:"pro",

name:"Pro",

badge:"MOST POPULAR",

price:19,

currency:"USD",

billing:"Monthly",

popular:true,

color:"#2563EB",

buttonText:"Upgrade to Pro",

description:
"Unlock the complete engineering learning experience with premium content and AI-powered tools.",

features:[

"Everything in Free",

"Unlimited AI Mentor",

"All premium lessons",

"All engineering projects",

"Professional certificates",

"Downloadable resources",

"Code reviews",

"Portfolio projects",

"Career roadmap",

"Priority support",

"Interview preparation",

"Resume builder"

],

limitations:[]

},

{

id:"lifetime",

name:"Lifetime",

badge:"BEST VALUE",

price:249,

currency:"USD",

billing:"One-Time",

popular:false,

color:"#F59E0B",

buttonText:"Get Lifetime Access",

description:
"Pay once and enjoy lifetime access to every current and future engineering program.",

features:[

"Everything in Pro",

"Lifetime updates",

"Future courses included",

"VIP community",

"Exclusive masterclasses",

"Business startup content",

"Advanced AI tools",

"Founder webinars",

"Priority feature access",

"Lifetime certificates"

],

limitations:[]

}

];

export default plans;