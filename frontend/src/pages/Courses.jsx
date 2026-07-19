import { useNavigate } from "react-router-dom";

import courses from "../data/courses";

import Logo from "../assets/images/logo.png";

import "../styles/courses.css";


export default function Courses(){


const navigate = useNavigate();



return(


<div className="coursesPage">



<section className="coursesHero">


<div className="coursesBrand">


<img

src={Logo}

alt="PBody FullStack Academy"

/>



<div>

<h2>

PBODY FULLSTACK ACADEMY

</h2>



<p>

AI Powered Engineering Academy

</p>


</div>


</div>





<h1>

Master Professional Engineering Skills

</h1>




<p>

Learn Frontend, Backend, Full Stack,
AI, Cloud, Mobile and modern technologies
through structured lessons and real projects.

</p>



</section>









<section className="coursesGrid">



{

courses.map(course=>(



<div

className="courseCard"

key={course.id}

>





<div className="courseImage">



<img

src={course.thumbnail || course.image}

alt={course.title}

/>





<div

className={

course.access === "free"

?

"freeBadge"

:

"premiumBadge"

}

>


{

course.access === "free"

?

"🚀 FREE COURSE"

:

"⭐ PREMIUM COURSE"

}


</div>



</div>









<div className="courseContent">





<div className="courseTitleRow">



<h2>

{course.icon}

{course.title}

</h2>



<span

style={{

background:course.color

}}

className="levelBadge"

>

{course.level}

</span>



</div>









<p>

{course.tagline}

</p>









<div className="courseStats">



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



</div>









<div className="techPreview">


{

course.technologies

?.slice(0,5)

.map((tech,index)=>(


<span

key={index}

>

{tech}

</span>


))


}



</div>









<button


onClick={()=>navigate(`/course/${course.id}`)}

>



{

course.access === "free"

?

"🚀 Start Free Learning"

:

"▶ Start Course"

}



</button>








</div>





</div>



))


}



</section>







</div>


);


}