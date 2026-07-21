import { useNavigate } from "react-router-dom";

import AppLayout from "../components/layout/AppLayout";

import { initializePayment } from "../services/paymentService";

import { useAuth } from "../context/AuthContext";

import Logo from "../assets/images/logo.png";

import "../styles/pricing.css";


export default function Pricing(){


const navigate = useNavigate();

const { user } = useAuth();



// ==============================
// START PAYMENT
// ==============================

const handleUpgrade = async(currency)=>{


if(!user){

alert("Please login before subscribing.");

navigate("/login");

return;

}



try{


console.log("Starting payment:",{

email:user.email,

currency

});



const result = await initializePayment({

email:user.email,

currency

});



console.log("PAYSTACK RESPONSE:", result);




const authorizationUrl =

result?.data?.authorization_url ||

result?.authorization_url ||

result?.data?.data?.authorization_url;



if(authorizationUrl){


window.location.href = authorizationUrl;


return;

}



alert(

"Payment could not start."

);



}


catch(error){


console.error(

"PAYMENT INITIALIZATION ERROR:",

error

);



alert(

error?.response?.data?.message ||

"Payment initialization failed"

);


}


};





return(


<AppLayout>


<div className="pricingPage">



<section className="pricingHero">


<div className="pricingBrand">


<img

src={Logo}

alt="PBody FullStack Academy"

/>



<div>


<h2>

PBODY FULLSTACK ACADEMY

</h2>


<p>

Professional Engineering Education Platform

</p>


</div>


</div>





<h1>

Become A Professional Software Engineer

</h1>



<p>

Unlock premium courses, AI mentor,
projects and certificates.

</p>





<div className="trialBox">


<h2>

🔥 3 Days FREE Premium Access

</h2>


<p>

Experience the complete engineering ecosystem.

</p>


</div>


</section>







<section className="pricingPlans">



<div className="pricingCard">


<div className="planBadge">

POPULAR

</div>



<h2>

PBody Pro Annual

</h2>



<div className="price">

<span>₦</span>

120,000

<small>

/year

</small>


</div>




<p>

For Nigerian students and developers.

</p>



<ul>

<li>✅ Unlimited Premium Courses</li>

<li>✅ AI Engineering Mentor</li>

<li>✅ Portfolio Projects</li>

<li>✅ Certificates</li>

<li>✅ Career Roadmaps</li>

<li>✅ Future Updates</li>

</ul>




<button

onClick={()=>handleUpgrade("NGN")}

>

Pay ₦120,000

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

<span>$</span>

99

<small>

/year

</small>


</div>





<p>

For international students.

</p>




<ul>

<li>✅ Premium Courses</li>

<li>✅ AI Learning Assistant</li>

<li>✅ Engineering Projects</li>

<li>✅ Certificates</li>

<li>✅ Interview Preparation</li>

<li>✅ Community Access</li>

</ul>




<button

onClick={()=>handleUpgrade("USD")}

>

Pay $99

</button>



</div>



</section>








<section className="pricingGuarantee">


<h2>

Why Upgrade?

</h2>



<p>

One subscription unlocks the complete
PBody engineering ecosystem.

</p>





<div className="guaranteeGrid">



<div>

🚀

<h3>

Career Ready

</h3>

<p>

Build real production skills.

</p>

</div>





<div>

🤖

<h3>

AI Mentor

</h3>

<p>

Learn with AI assistance.

</p>

</div>





<div>

🏆

<h3>

Certificates

</h3>

<p>

Earn professional certificates.

</p>

</div>





<div>

🌍

<h3>

Worldwide

</h3>

<p>

Learn anywhere.

</p>

</div>



</div>


</section>




</div>


</AppLayout>


);


}