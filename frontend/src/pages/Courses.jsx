import { Link } from "react-router-dom";

import courses from "../data/courses";

import Logo from "../assets/images/logo.png";

import "../styles/courses.css";



export default function Courses(){



return(



<div className="coursesPage">






<section className="coursesHero">





<div className="coursesBrand">



<img

src={Logo}

alt="PBody FullStack Academy"

/>



<div>


<h3>

PBODY FULLSTACK ACADEMY

</h3>



<p>

Professional Software Engineering Education

</p>


</div>



</div>







<div className="coursesHeroContent">


<span className="coursesBadge">

ENGINEERING COURSE LIBRARY

</span>





<h1>

Master Software Engineering With Industry-Level Courses

</h1>




<p>

Learn frontend, backend, fullstack development and modern engineering skills through structured practical courses.

</p>




</div>





</section>









<section className="courseLibrary">





<div className="sectionHeading">


<h2>

Available Engineering Courses

</h2>


<p>

Choose a learning path and start building real-world applications.

</p>


</div>








<div className="courseGrid">





{

courses.map((course)=>(





<div

className="courseCard"

key={course.id}

>







<div className="courseImage">



<img

src={course.thumbnail || course.image}

alt={course.title}

/>





<span

className={

course.access==="premium"

?

"premiumTag"

:

"freeTag"

}

>


{

course.access==="premium"

?

"PREMIUM"

:

"FREE"

}


</span>



</div>









<div className="courseBody">





<h2>

{course.icon} {course.title}

</h2>





<p>

{course.description}

</p>







<div className="courseMeta">



<span>

⭐ {course.rating || "4.9"}

</span>



<span>

📚 {course.lessons || 0} Lessons

</span>



<span>

🏆 Certificate

</span>



</div>








<div className="technologyList">


{

course.technologies?.slice(0,5).map((tech,index)=>(


<span key={index}>

{tech}

</span>


))


}


</div>








<Link

to={`/course/${course.id}`}

className="courseButton"

>


Start Course →

</Link>







</div>






</div>





))


}








</div>







</section>









</div>



);


}