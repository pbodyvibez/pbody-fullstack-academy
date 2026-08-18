/* =====================================================
PBODY FULLSTACK ACADEMY
CAREER CENTER
===================================================== */


import { useNavigate } from "react-router-dom";

import {
BriefcaseBusiness,
FileText,
Globe,
Rocket,
GraduationCap,
Users
} from "lucide-react";


import "../styles/careerDashboard.css";



export default function Career(){


const navigate = useNavigate();



const careerOptions=[


{
title:"Job Board",
icon:<BriefcaseBusiness size={35}/>,
description:
"Explore software engineering opportunities from companies looking for developers.",
path:"/jobs"
},


{
title:"Internships",
icon:<GraduationCap size={35}/>,
description:
"Gain practical experience through internship opportunities and real projects.",
path:"/internships"
},


{
title:"Resume Builder",
icon:<FileText size={35}/>,
description:
"Create a professional developer resume designed for engineering roles.",
path:"/resume-builder"
},


{
title:"Portfolio Builder",
icon:<Globe size={35}/>,
description:
"Build your personal developer portfolio and showcase your projects.",
path:"/portfolio-builder"
}


];




const jobs=[


{
company:"Google",
role:"Frontend Engineer",
type:"Remote"
},


{
company:"Microsoft",
role:"Backend Developer",
type:"Hybrid"
},


{
company:"Flutterwave",
role:"Software Engineer",
type:"Lagos"
},


{
company:"Amazon",
role:"Full Stack Engineer",
type:"Remote"
}


];




return(


<div className="careerPage">





<section className="careerHero">


<div>


<span className="careerBadge">

🚀 CAREER DEVELOPMENT CENTER

</span>


<h1>

Launch Your Developer Career

</h1>



<p>

Connect your learning journey with real engineering
opportunities, professional tools and career growth resources.

</p>


</div>



<div className="careerIcon">

💼

</div>


</section>








<section className="careerGrid">


{

careerOptions.map((item,index)=>(


<div

className="careerCard"

key={index}

>


{item.icon}



<h2>

{item.title}

</h2>



<p>

{item.description}

</p>




<button

onClick={()=>navigate(item.path)}

>

Open

</button>




</div>


))


}


</section>









<section className="jobSection">


<h2>

🔥 Featured Opportunities

</h2>




<div className="jobGrid">


{

jobs.map((job,index)=>(


<div

className="jobCard"

key={index}

>


<h3>

{job.company}

</h3>


<span>

{job.role}

</span>


<p>

📍 {job.type}

</p>


</div>


))


}


</div>


</section>









<section className="careerTools">


<div className="toolBox">

<span>
🚀
</span>

<strong>
Career Roadmaps
</strong>

<p>
Follow structured engineering career paths.
</p>

</div>





<div className="toolBox">

<span>
👥
</span>

<strong>
Developer Community
</strong>

<p>
Connect with other engineers.
</p>

</div>





<div className="toolBox">

<span>
🏆
</span>

<strong>
Certificates
</strong>

<p>
Showcase your achievements.
</p>

</div>





<div className="toolBox">

<span>
🤖
</span>

<strong>
AI Career Mentor
</strong>

<p>
Get personalized career guidance.
</p>

</div>



</section>







</div>


);


}