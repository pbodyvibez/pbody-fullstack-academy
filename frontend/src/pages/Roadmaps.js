// =====================================================
// PBODY FULLSTACK ACADEMY
// CAREER ROADMAP CENTER
// =====================================================

import { useNavigate } from "react-router-dom";

import Logo from "../assets/images/logo.png";

import {
Code2,
Server,
Database,
Smartphone,
BrainCircuit,
Rocket,
CheckCircle
} from "lucide-react";


import "../styles/roadmaps.css";



export default function Roadmaps(){


const navigate = useNavigate();



const roadmaps=[


{
title:"Frontend Engineer",
icon:<Code2 size={40}/>,
path:"/courses",

description:
"Master modern interface development and become a professional frontend engineer.",

steps:[
"HTML & CSS Foundations",
"JavaScript Programming",
"React Development",
"Advanced UI Architecture",
"Testing & Deployment",
"Professional Projects"
]

},



{
title:"Backend Engineer",
icon:<Server size={40}/>,
path:"/courses",

description:
"Learn APIs, servers and databases powering modern applications.",

steps:[
"Programming Fundamentals",
"Node.js & Express",
"REST APIs",
"Authentication",
"Database Engineering",
"Cloud Deployment"
]

},



{
title:"Full Stack Engineer",
icon:<Rocket size={40}/>,
path:"/learning-hub",

description:
"Build complete production-ready applications.",

steps:[
"Frontend",
"Backend",
"Databases",
"Cloud",
"Architecture",
"Real Applications"
]

},



{
title:"Database Engineer",
icon:<Database size={40}/>,
path:"/courses",

description:
"Design and manage professional data systems.",

steps:[
"SQL",
"NoSQL",
"Database Design",
"Optimization",
"Security"
]

},



{
title:"Mobile Developer",
icon:<Smartphone size={40}/>,
path:"/courses",

description:
"Create modern mobile applications.",

steps:[
"Mobile Fundamentals",
"React Native",
"Mobile APIs",
"App Deployment"
]

},



{
title:"AI Engineer",
icon:<BrainCircuit size={40}/>,
path:"/ai-mentor",

description:
"Build intelligent systems with AI technologies.",

steps:[
"Python",
"Machine Learning",
"AI APIs",
"Automation",
"AI Applications"
]

}



];





return(


<div className="roadmapPage">



<section className="roadmapHero">


<div className="pageBrand">


<img

src={Logo}

alt="PBody FullStack Academy"

/>


</div>



<span>

🚀 CAREER ROADMAP CENTER

</span>


<h1>

Choose Your Engineering Path

</h1>


<p>

Follow structured engineering pathways designed by
PBody FullStack Academy to transform beginners into
professional developers.

</p>


</section>






<section className="roadmapGrid">


{

roadmaps.map((roadmap,index)=>(


<div

className="roadmapCard"

key={index}

>


<div className="roadmapIcon">

{roadmap.icon}

</div>



<h2>

{roadmap.title}

</h2>



<p>

{roadmap.description}

</p>




<div className="roadmapSteps">


{

roadmap.steps.map((step,i)=>(

<div key={i}>

<CheckCircle size={18}/>

<span>{step}</span>

</div>

))

}


</div>






<button

onClick={()=>navigate(roadmap.path)}

>

Start Roadmap 🚀

</button>




</div>


))


}


</section>


</div>


);


}