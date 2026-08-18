import { Link } from "react-router-dom";

import Logo from "../assets/images/logo.png";

import "../styles/learningHub.css";



export default function LearningHub(){



const pathways=[


{
title:"Frontend Engineering",
description:
"Master modern web interfaces using HTML, CSS, JavaScript, React and professional UI engineering.",
route:"/courses",
skills:[
"HTML",
"CSS",
"JavaScript",
"React"
]

},



{
title:"Backend Engineering",
description:
"Build powerful server systems, APIs, databases and scalable backend applications.",
route:"/courses",
skills:[
"Node.js",
"Express",
"MongoDB",
"APIs"
]

},



{
title:"Fullstack Engineering",
description:
"Become a complete software engineer by connecting frontend, backend and deployment.",
route:"/courses",
skills:[
"React",
"Node.js",
"Database",
"Cloud"
]

},



{
title:"AI Engineering",
description:
"Learn how artificial intelligence can improve modern software development.",
route:"/ai-mentor",
skills:[
"AI Tools",
"Automation",
"Prompt Engineering",
"Agents"
]

}



];






return(



<div className="learningHubPage">






<section className="learningHero">



<div className="learningBrand">


<img

src={Logo}

alt="PBody FullStack Academy"

/>



<div>

<h3>

PBODY FULLSTACK ACADEMY

</h3>


<p>

AI Powered Engineering Academy

</p>

</div>


</div>







<div className="learningHeroContent">


<span className="learningBadge">

ENGINEERING LEARNING HUB

</span>




<h1>

Build Your Future As A Professional Software Engineer

</h1>



<p>

Follow structured engineering paths, learn from practical projects, get AI assistance and develop career-ready skills.

</p>




<Link

to="/courses"

className="learningButton"

>

Explore Courses

</Link>



</div>





</section>









<section className="pathwaySection">



<div className="sectionTitle">


<h2>

Engineering Pathways

</h2>


<p>

Choose your specialization and begin your professional journey.

</p>


</div>







<div className="pathwayGrid">


{

pathways.map((item,index)=>(



<div

className="pathwayCard"

key={index}

>


<h3>

{item.title}

</h3>



<p>

{item.description}

</p>




<div className="skillList">


{

item.skills.map(skill=>(


<span key={skill}>

{skill}

</span>


))


}



</div>





<Link

to={item.route}

>

Start Learning →

</Link>





</div>



))


}



</div>







</section>









<section className="aiLearningCard">



<div>


<h2>

Your AI Engineering Mentor

</h2>



<p>

Get explanations, debugging help, project guidance and personalized learning support while you study.

</p>



</div>





<Link

to="/ai-mentor"

>

Open AI Mentor

</Link>





</section>









</div>



);


}