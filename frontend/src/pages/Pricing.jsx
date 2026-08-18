import { useNavigate } from "react-router-dom";

import { initializePayment } from "../services/paymentService";

import { useAuth } from "../context/AuthContext";

import Logo from "../assets/images/logo.png";

import "../styles/pricing.css";


export default function Pricing(){


const navigate = useNavigate();

const { user } = useAuth();



// ==============================
// PAYMENT
// ==============================

const handleUpgrade = async(currency)=>{


if(!user){

alert("Please login before subscribing.");

navigate("/login");

return;

}



try{


const result = await initializePayment({

email:user.email,

currency

});



const authorizationUrl =

result?.data?.authorization_url ||

result?.authorization_url ||

result?.data?.data?.authorization_url;



if(authorizationUrl){

window.location.href = authorizationUrl;

return;

}



alert("Payment could not start.");


}

catch(error){


console.error(error);


alert(

error?.response?.data?.message ||

"Payment initialization failed"

);


}


};





return(


<div className="pricingPage">





{/* =====================================
PREMIUM HEADER
===================================== */}



<section className="pricingHero">


<div className="pricingBrand">


<img

src={Logo}

alt="PBody FullStack Academy Logo"

/>



<div>

<h2>

PBODY FULLSTACK ACADEMY

</h2>


<p>

AI Powered Engineering Education

</p>


</div>


</div>





<h1>

Build Your Future With Technology

</h1>



<p>

Start your journey from beginner to professional software engineer
through practical projects, expert learning paths and AI-powered
mentorship.

</p>





<div className="pricingMotivation">


<h3>

🚀 Your Future As An Engineer Starts Here

</h3>


<p>

Invest in yourself today. Learn the skills,
build real solutions and join the next generation
of technology creators.

</p>


</div>



</section>








{/* =====================================
PLANS
===================================== */}



<section className="pricingPlans">





<div className="pricingCard">


<div className="planBadge">

MOST POPULAR

</div>




<h2>

PBody Pro Annual

</h2>




<div className="price">

<span>

₦

</span>

120,000


<small>

/year

</small>


</div>




<p>

Designed for Nigerian developers and aspiring engineers.

</p>




<ul>


<li>🚀 Unlimited Premium Courses</li>

<li>🤖 AI Engineering Mentor</li>

<li>💻 Real Production Projects</li>

<li>🏆 Professional Certificates</li>

<li>🛣 Career Roadmaps</li>

<li>🔄 Future Platform Updates</li>


</ul>





<button

onClick={()=>handleUpgrade("NGN")}

>

Start Engineering Journey

</button>



</div>









<div className="pricingCard international">


<div className="planBadge">

GLOBAL

</div>




<h2>

PBody Pro Global

</h2>




<div className="price">

<span>

$

</span>

99


<small>

/year

</small>


</div>





<p>

For students and developers worldwide.

</p>





<ul>


<li>🌍 Global Learning Access</li>

<li>🤖 AI Learning Assistant</li>

<li>💻 Engineering Projects</li>

<li>🏆 Certificates</li>

<li>🎯 Interview Preparation</li>

<li>👥 Developer Community</li>


</ul>





<button

onClick={()=>handleUpgrade("USD")}

>

Join Global Academy

</button>




</div>






</section>








{/* =====================================
VALUE SECTION
===================================== */}



<section className="pricingGuarantee">


<h2>

More Than A Course — A Complete Engineering Ecosystem

</h2>




<p>

Everything you need to learn, build and grow into a professional
software engineer.

</p>







<div className="guaranteeGrid">





<div>

🚀

<h3>

Career Growth

</h3>


<p>

Develop skills companies value.

</p>


</div>







<div>

🤖

<h3>

AI Mentorship

</h3>


<p>

Get guidance while building.

</p>


</div>







<div>

🏆

<h3>

Recognition

</h3>


<p>

Showcase your achievements.

</p>


</div>







<div>

🌍

<h3>

Global Community

</h3>


<p>

Learn alongside builders worldwide.

</p>


</div>




</div>




</section>





</div>


);


}