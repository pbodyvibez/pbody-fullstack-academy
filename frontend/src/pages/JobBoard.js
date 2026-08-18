// =====================================================
// PBODY FULLSTACK ACADEMY
// CAREER JOB BOARD
// =====================================================

import { useState } from "react";

import {
Search,
MapPin,
Briefcase,
ExternalLink
} from "lucide-react";


import "../styles/jobBoard.css";



export default function JobBoard(){



const jobs=[


{
company:"Google",
role:"Frontend Engineer",
location:"Remote",
type:"Full Time",
level:"Mid Level",
stack:"React, JavaScript",
link:"https://careers.google.com"
},



{
company:"Microsoft",
role:"Backend Developer",
location:"Hybrid",
type:"Full Time",
level:"Junior",
stack:"Node.js, APIs, Azure",
link:"https://careers.microsoft.com"
},



{
company:"Flutterwave",
role:"Software Engineer",
location:"Lagos Nigeria",
type:"Full Time",
level:"Junior",
stack:"React, Node.js",
link:"https://flutterwave.com/careers"
},



{
company:"Amazon",
role:"Full Stack Engineer",
location:"Remote",
type:"Full Time",
level:"Senior",
stack:"AWS, React, Backend",
link:"https://amazon.jobs"
},



{
company:"PBody Innovation Labs",
role:"Junior Developer Intern",
location:"Remote",
type:"Internship",
level:"Beginner",
stack:"HTML, CSS, JavaScript",
link:"#"
}


];





const [search,setSearch]=useState("");



const filteredJobs = jobs.filter(job=>

job.role
.toLowerCase()
.includes(search.toLowerCase())

||

job.company
.toLowerCase()
.includes(search.toLowerCase())

);







return(


<div className="jobBoardPage">





<section className="jobHero">


<span>

💼 CAREER OPPORTUNITIES

</span>


<h1>

Find Your Next Engineering Opportunity

</h1>


<p>

Discover software engineering jobs, internships and
career opportunities after completing your learning journey.

</p>



<div className="jobSearch">


<Search size={22}/>


<input

placeholder="Search jobs or companies..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

/>


</div>



</section>








<section className="jobsGrid">


{

filteredJobs.map((job,index)=>(


<div

className="jobCard"

key={index}

>


<div className="jobTop">


<div className="companyLogo">

{job.company.charAt(0)}

</div>


<div>


<h2>

{job.company}

</h2>


<h3>

{job.role}

</h3>


</div>


</div>





<div className="jobInfo">


<p>

<Briefcase size={18}/>

{job.type}

</p>



<p>

<MapPin size={18}/>

{job.location}

</p>


</div>





<div className="jobTags">


<span>

{job.level}

</span>


<span>

{job.stack}

</span>


</div>






<a

href={job.link}

target="_blank"

rel="noopener noreferrer"

>

Apply Now

<ExternalLink size={17}/>

</a>





</div>


))


}


</section>






</div>


);


}