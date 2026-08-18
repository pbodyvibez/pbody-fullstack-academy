// ===============================================
// PBODY FULLSTACK ACADEMY
// PREMIUM INTERNSHIP CENTER
// ===============================================

import {
Briefcase,
Building2,
Rocket,
CheckCircle,
Clock,
Globe
} from "lucide-react";


import {
useAuth
} from "../context/AuthContext";


import "../styles/internship.css";



export default function Internship(){



const {
user
}=useAuth();





const opportunities=[


{
title:"Frontend Engineering Internship",
type:"Remote",
level:"Beginner - Intermediate",
skills:"React • JavaScript • UI Engineering"
},


{
title:"Backend Engineering Internship",
type:"Remote",
level:"Intermediate",
skills:"Node.js • APIs • MongoDB"
},


{
title:"Full Stack Developer Internship",
type:"Hybrid",
level:"Advanced",
skills:"React • Node • Database Architecture"
}


];







return(



<div className="internshipPage">





<section className="internshipHero">


<div className="careerIcon">

🚀

</div>


<h1>

PBody Engineering Internship Center

</h1>



<p>

Welcome {user?.name || "Developer"}.
Gain practical experience by working on
real-world engineering challenges.

</p>



</section>









<section className="internshipStats">



<div>

<Briefcase/>

<h3>

Industry Experience

</h3>

<p>

Build projects employers value.

</p>

</div>





<div>

<Building2/>

<h3>

Professional Teams

</h3>

<p>

Collaborate like a real engineer.

</p>

</div>





<div>

<Globe/>

<h3>

Remote Opportunities

</h3>

<p>

Learn and work globally.

</p>

</div>



</section>









<section className="internshipListings">


<h2>

Available Internship Tracks

</h2>





<div className="internshipGrid">



{

opportunities.map((item,index)=>(


<div 
className="internshipCard"
key={index}
>


<div className="status">

<Clock size={18}/>

OPEN

</div>




<h3>

{item.title}

</h3>




<p>

{item.type}

</p>



<p>

{item.level}

</p>



<span>

{item.skills}

</span>






<button>

Apply Now 🚀

</button>




</div>



))

}



</div>


</section>








<section className="internshipRequirements">



<h2>

Before Applying

</h2>


<div>


<p>
<CheckCircle/> Complete your developer profile
</p>


<p>
<CheckCircle/> Build at least one project
</p>


<p>
<CheckCircle/> Complete your learning pathway
</p>


<p>
<CheckCircle/> Prepare your portfolio
</p>



</div>



</section>







</div>


);



}