/* ===========================================================
PBODY FULLSTACK ACADEMY
CAREER CENTER DASHBOARD
=========================================================== */

import { useNavigate } from "react-router-dom";

import AppLayout from "../components/layout/AppLayout";

import "../styles/careerDashboard.css";

export default function CareerDashboard(){

const navigate = useNavigate();

const careerStats=[

{
title:"Resume",
value:"92%",
status:"Professional",
icon:"📄",
color:"blue"
},

{
title:"Portfolio",
value:"68%",
status:"Needs Update",
icon:"💼",
color:"gold"
},

{
title:"Certificates",
value:"12",
status:"Earned",
icon:"🏆",
color:"green"
},

{
title:"Projects",
value:"18",
status:"Completed",
icon:"🚀",
color:"purple"
}

];

const recommendedJobs=[

{
id:1,
company:"Google",
role:"Frontend Engineer",
location:"Remote",
salary:"$95k - $145k",
type:"Full Time",
level:"Intermediate"
},

{
id:2,
company:"Microsoft",
role:"Backend Engineer",
location:"Hybrid",
salary:"$90k - $140k",
type:"Full Time",
level:"Junior"
},

{
id:3,
company:"Flutterwave",
role:"Full Stack Engineer",
location:"Lagos",
salary:"Competitive",
type:"Hybrid",
level:"Mid Level"
}

];

const recentApplications=[

{
company:"Amazon",
role:"Frontend Engineer",
status:"Interview Scheduled"
},

{
company:"Paystack",
role:"Backend Engineer",
status:"Application Sent"
},

{
company:"Google",
role:"React Developer",
status:"Under Review"
}

];

return(

<AppLayout>

<div className="careerDashboard">

<section className="careerHero">

<div className="careerHeroLeft">

<span className="careerBadge">

🚀 PBODY CAREER CENTER

</span>

<h1>

Build Your Software Engineering Career

</h1>

<p>

Everything you need to move from learning to employment.
Build your resume, portfolio, apply for internships,
track applications and receive AI career guidance.

</p>

<div className="careerButtons">

<button
className="primaryCareerButton"
onClick={()=>navigate("/resume-builder")}
>

Build Resume

</button>

<button
className="secondaryCareerButton"
onClick={()=>navigate("/portfolio-builder")}
>

Portfolio

</button>

<button
className="secondaryCareerButton"
onClick={()=>navigate("/jobs")}
>

Browse Jobs

</button>

<button
className="secondaryCareerButton"
onClick={()=>navigate("/internships")}
>

Internships

</button>

</div>

</div>

<div className="careerHeroRight">

<div className="careerCircle">

💼

</div>

</div>

</section>

<section className="careerStatistics">

{
careerStats.map((item,index)=>(

<div
key={index}
className={`careerStatCard ${item.color}`}
>

<div className="careerIcon">

{item.icon}

</div>

<div>

<h2>

{item.value}

</h2>

<h4>

{item.title}

</h4>

<p>

{item.status}

</p>

</div>

</div>

))
}

</section>

<div className="careerGrid">

<div className="careerLeftColumn">
    <section className="careerPanel">

<div className="panelHeader">

<h2>

🔥 Recommended Opportunities

</h2>

<button

className="viewAllButton"

onClick={()=>navigate("/jobs")}

>

View All Jobs

</button>

</div>





<div className="jobList">

{

recommendedJobs.map(job=>(

<div

key={job.id}

className="jobCard"

>

<div className="jobCardTop">

<div>

<h3>

{job.role}

</h3>

<h4>

{job.company}

</h4>

</div>

<span className="jobType">

{job.type}

</span>

</div>





<div className="jobMeta">

<span>

📍 {job.location}

</span>

<span>

💰 {job.salary}

</span>

<span>

🎯 {job.level}

</span>

</div>





<div className="jobActions">

<button

className="outlineButton"

onClick={()=>navigate("/resume-builder")}

>

Prepare Resume

</button>





<button

className="primaryCareerButton"

onClick={()=>navigate("/jobs")}

>

Apply

</button>

</div>

</div>

))

}

</div>

</section>









<section className="careerPanel">

<div className="panelHeader">

<h2>

📈 Career Roadmap

</h2>

</div>





<div className="roadmapList">

<div className="roadmapItem completed">

<div className="roadmapCheck">

✓

</div>

<div>

<h3>

HTML & CSS

</h3>

<p>

Completed Successfully

</p>

</div>

</div>





<div className="roadmapItem completed">

<div className="roadmapCheck">

✓

</div>

<div>

<h3>

JavaScript

</h3>

<p>

Completed Successfully

</p>

</div>

</div>





<div className="roadmapItem progress">

<div className="roadmapCheck">

70%

</div>

<div>

<h3>

React Engineering

</h3>

<p>

Continue Completing Lessons

</p>

</div>

</div>





<div className="roadmapItem">

<div className="roadmapCheck">

4

</div>

<div>

<h3>

Node.js Backend

</h3>

<p>

Next Learning Phase

</p>

</div>

</div>





<div className="roadmapItem">

<div className="roadmapCheck">

5

</div>

<div>

<h3>

Deployment & DevOps

</h3>

<p>

Final Career Preparation

</p>

</div>

</div>

</div>

</section>

</div>





<div className="careerRightColumn">
    <section className="careerPanel">

<div className="panelHeader">

<h2>

🤖 AI Career Coach

</h2>

</div>

<div className="careerCoach">

<div className="coachScore">

<h1>

84%

</h1>

<span>

Career Readiness

</span>

</div>

<div className="coachSuggestions">

<h3>

AI Recommendations

</h3>

<ul>

<li>✔ Complete your React Engineering course.</li>

<li>✔ Upload two more production-ready projects.</li>

<li>✔ Finish your professional resume.</li>

<li>✔ Complete your developer portfolio.</li>

<li>✔ Earn two additional certificates.</li>

</ul>

<button

className="primaryCareerButton"

onClick={()=>navigate("/ai-mentor")}

>

Open AI Career Coach

</button>

</div>

</div>

</section>






<section className="careerPanel">

<div className="panelHeader">

<h2>

📄 Resume Status

</h2>

</div>

<div className="statusCard">

<div className="statusCircle">

92%

</div>

<div>

<h3>

Professional Resume

</h3>

<p>

Your resume is almost complete.
Adding more projects and certifications will improve your score.

</p>

<button

className="outlineButton"

onClick={()=>navigate("/resume-builder")}

>

Edit Resume

</button>

</div>

</div>

</section>






<section className="careerPanel">

<div className="panelHeader">

<h2>

💼 Portfolio Status

</h2>

</div>

<div className="statusCard">

<div className="statusCircle warning">

68%

</div>

<div>

<h3>

Developer Portfolio

</h3>

<p>

Connect your GitHub repositories, showcase more completed
projects and publish your portfolio.

</p>

<button

className="outlineButton"

onClick={()=>navigate("/portfolio-builder")}

>

Open Portfolio

</button>

</div>

</div>

</section>






<section className="careerPanel">

<div className="panelHeader">

<h2>

📨 Recent Applications

</h2>

</div>

<div className="applicationList">

{

recentApplications.map((application,index)=>(

<div

key={index}

className="applicationItem"

>

<div>

<h4>

{application.company}

</h4>

<p>

{application.role}

</p>

</div>

<span className="applicationStatus">

{application.status}

</span>

</div>

))

}

</div>

</section>






<section className="careerPanel">

<div className="panelHeader">

<h2>

💡 Career Tips

</h2>

</div>

<div className="tipsList">

<div>

🚀 Build at least 10 real-world projects.

</div>

<div>

🏆 Complete every academy certificate.

</div>

<div>

💻 Keep your GitHub active every week.

</div>

<div>

📚 Learn one new technology every month.

</div>

<div>

🤝 Network with other developers.

</div>

</div>

</section>

</div>

</div>

</div>

</AppLayout>

);

}