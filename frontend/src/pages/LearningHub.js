import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";


import Logo from "../assets/images/logo.png";
import developerHero from "../assets/images/developerhero-image.png";

import courses from "../data/courses";

import { useProgress } from "../context/ProgressContext";

import "../styles/learningHub.css";

console.log("LearningHub Loaded");
export default function LearningHub(){


const navigate = useNavigate();


const {progress} = useProgress();



const [search,setSearch] = useState("");

const [level,setLevel] = useState("All");

const [access,setAccess] = useState("All");





const filteredCourses = useMemo(()=>{


return courses.filter(course=>{


const searchText = search.toLowerCase();



const matchesSearch =

course.title
.toLowerCase()
.includes(searchText)

||

course.description
.toLowerCase()
.includes(searchText)

||

course.technologies
?.join(" ")
.toLowerCase()
.includes(searchText);





const matchesLevel =

level==="All"

?

true

:

course.level===level;






const matchesAccess =

access==="All"

?

true

:

course.access===access.toLowerCase();





return (

matchesSearch

&&

matchesLevel

&&

matchesAccess

);


});


},[search,level,access]);






return(

<div className="learningHub">



<section className="learningHero">



<div className="learningHeroOverlay"></div>





<div className="learningHeroContent">





<div className="learningHeroLeft">





<div className="learningBrand">


<img

src={Logo}

alt="PBody FullStack Academy"

/>



<div>

<h3 className="academyTitle">

PBODY FULLSTACK ACADEMY

</h3>



<p>

AI Powered Engineering Academy

</p>


</div>


</div>






<div className="heroBadge">

🚀 Next Generation Engineering Learning Platform

</div>







<h1>

Become A Professional

<span>

Software Engineer

</span>

Through Real Projects

</h1>





<p>


Master Frontend, Backend, Full Stack, AI,
Cloud, Mobile, Cybersecurity and modern
engineering skills through structured courses,
projects and AI mentorship.


</p>







<div className="heroButtons">


<button

className="heroPrimary"

onClick={()=>navigate("/courses")}

>

Explore Courses 🚀

</button>





<button

className="heroSecondary"

onClick={()=>navigate("/ai")}

>

AI Mentor 🤖

</button>



</div>








<div className="heroStats">



<div>

<h2>

10+

</h2>

<span>

Engineering Tracks

</span>

</div>





<div>

<h2>

700+

</h2>

<span>

Video Lessons

</span>

</div>






<div>

<h2>

120+

</h2>

<span>

Real Projects

</span>

</div>






<div>

<h2>

AI

</h2>

<span>

Mentorship

</span>

</div>



</div>





</div>






<div className="learningHeroRight">


<div className="developerHeroCard">


<img

src={developerHero}

alt="Developer Hero"

/>


</div>


</div>





</div>


</section>





<section className="hubToolbar">



<div className="searchBox">


<input

type="text"

placeholder="Search engineering courses..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

/>



</div>






<div className="toolbarFilters">



<select

value={level}

onChange={(e)=>setLevel(e.target.value)}

>


<option value="All">

All Levels

</option>


<option value="Beginner">

Beginner

</option>



<option value="Intermediate">

Intermediate

</option>



<option value="Advanced">

Advanced

</option>



</select>






<select

value={access}

onChange={(e)=>setAccess(e.target.value)}

>


<option value="All">

All Courses

</option>



<option value="Free">

Free

</option>



<option value="Premium">

Premium

</option>



</select>



</div>



</section>





<section className="learningCoursesGrid">
    {
filteredCourses.map((course)=>{


const currentProgress = progress?.[course.id] || {};

const completed = currentProgress.completedLessons || 0;

const total = course.lessons || 1;


const progressPercent = Math.round(
(completed / total) * 100
);



const isPremium = course.access === "premium";



return(


<div

className="learningCourseCard"

key={course.id}

>





<div className="courseImageWrapper">



<img

src={course.thumbnail || course.image}

alt={course.title}

/>





<div

className={

isPremium

?

"premiumRibbon"

:

"freeRibbon"

}

>


{

isPremium

?

"⭐ PREMIUM"

:

"FREE"

}


</div>



<div className="courseOverlay"></div>



</div>









<div className="courseCardBody">





<div className="courseTitleRow">



<h2>

{course.icon}

{course.title}

</h2>




<span

className="courseLevel"

style={{

background:course.color

}}

>

{course.level}

</span>




</div>







<p className="courseDescription">


{course.description}



</p>









<div className="courseInformation">





<div>


<strong>

⭐ {course.rating}

</strong>


<span>

Rating

</span>


</div>







<div>


<strong>

📚 {course.lessons}

</strong>


<span>

Lessons

</span>


</div>







<div>


<strong>

🚀 {course.projects}

</strong>


<span>

Projects

</span>


</div>






<div>


<strong>

⏱ {course.duration}

</strong>


<span>

Duration

</span>


</div>




</div>









<div className="technologySection">



<h4>

Technologies

</h4>





<div className="technologyList">


{

course.technologies

?.slice(0,6)

.map((tech,index)=>(


<span

key={index}

>

{tech}

</span>


))


}



</div>



</div>









<div className="courseProgress">





<div className="progressHeader">


<span>

Your Progress

</span>



<strong>

{progressPercent}%

</strong>



</div>





<div className="progressBar">


<div

style={{

width:`${progressPercent}%`

}}

/>


</div>




</div>









<div className="courseBottom">





<div className="studentCount">


<h4>

👨‍🎓 {course.students || "10,000+"}

</h4>



<p>

Students Enrolled

</p>



</div>









<button


className="courseStartButton"


onClick={()=>navigate(`/course/${course.id}`)}


>


{

progressPercent > 0

?

"Continue Learning →"

:

"Start Learning →"

}


</button>







</div>









</div>





</div>



)


})

}
</section>





<section className="aiMentorBanner">



<div className="mentorGlow"></div>





<div className="mentorBrand">


<img

src={Logo}

alt="PBody FullStack Academy"

/>


</div>






<div className="mentorText">



<h2>

🤖 Your AI Engineering Mentor

</h2>




<p>


Get help understanding difficult concepts,
debugging your projects, generating examples
and planning your engineering career with AI.


</p>




<button

onClick={()=>navigate("/ai")}

>


Open AI Mentor →

</button>



</div>





</section>









<section className="careerSection">





<div className="careerHeader">



<span>

CAREER PATHS

</span>



<h2>

Choose Your Engineering Destination

</h2>



<p>


Follow professional learning tracks designed
to take you from beginner to industry-ready.


</p>


</div>








<div className="careerGrid">






<div className="careerCard">


<div className="careerIcon">

🎨

</div>


<h3>

Frontend Engineer

</h3>


<p>

HTML, CSS, JavaScript, React,
Next.js and modern UI engineering.

</p>



<button

onClick={()=>navigate("/course/frontend")}

>

Start Track →

</button>


</div>









<div className="careerCard">


<div className="careerIcon">

⚙️

</div>


<h3>

Backend Engineer

</h3>


<p>

Node.js, APIs, databases,
security and scalable systems.

</p>



<button

onClick={()=>navigate("/course/backend")}

>

Start Track →

</button>


</div>









<div className="careerCard">


<div className="careerIcon">

💻

</div>


<h3>

Full Stack Engineer

</h3>


<p>

Build complete applications
from frontend to deployment.

</p>



<button

onClick={()=>navigate("/course/fullstack")}

>

Start Track →

</button>


</div>






</div>




</section>









<section className="learningBottomCTA">



<h2>

Ready To Build Your Engineering Career?

</h2>



<p>


Join thousands of developers learning
modern software engineering skills.


</p>





<button

onClick={()=>navigate("/courses")}

>


View All Courses 🚀

</button>



</section>






</div>


);


}