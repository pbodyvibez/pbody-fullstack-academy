import { useNavigate } from "react-router-dom";

import "./courseCard.css";


export default function CourseCard({course}){


const navigate = useNavigate();



const openCourse = ()=>{


navigate(`/courses/${course.id}`);


};



return(

<div className="courseCard">



<div className="courseImage">


<img

src={course.image}

alt={course.title}

/>



{

course.access === "free"

?

<span className="freeBadge">

FREE COURSE

</span>

:

<span className="premiumBadge">

PREMIUM

</span>

}



</div>






<div className="courseContent">


<div className="courseTitleRow">


<h2>

{course.title}

</h2>


</div>





<p>

{course.description}

</p>







<div className="courseStats">


<span>

📚 {course.lessons} Lessons

</span>


<span>

⏳ {course.duration}

</span>


<span>

⭐ {course.level}

</span>


</div>








<div className="techPreview">


{

course.technologies?.slice(0,5).map((tech,index)=>(


<span key={index}>

{tech}

</span>


))


}



</div>








<button

onClick={openCourse}

>


{

course.access === "free"

?

"🚀 Start Free Course"

:

"🔒 Unlock Premium Course"

}



</button>





</div>




</div>


);


}