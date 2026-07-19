import { useParams, useNavigate } from "react-router-dom";

import AppLayout from "../components/layout/AppLayout";

import lessons from "../data/lessons/index";

import { useProgress } from "../context/ProgressContext";

import "../styles/lessons.css";



export default function Lessons(){


const { courseId, lessonId } = useParams();


const navigate = useNavigate();



const { completeLesson } = useProgress();





const courseLessons =

lessons[courseId] || [];





const lesson = courseLessons.find(

item => item.id === Number(lessonId)

);





if(!lesson){


return(


<AppLayout>


<div className="workspaceCard">


<h2>

Lesson Not Found

</h2>



<p>

This lesson does not exist.

</p>



</div>


</AppLayout>


);


}







return(


<AppLayout>



<div className="lessonWorkspace">






<section className="lessonHeader">



<span className="lessonBadge">

PBODY FULLSTACK ACADEMY

</span>





<h1>

{lesson.title}

</h1>





<p>

{lesson.description}

</p>







<div className="lessonInfoBar">



<div>

⏱

<strong>

{lesson.duration}

</strong>

</div>





<div>

⭐

<strong>

{lesson.xp} XP

</strong>

</div>





<div>

📈

<strong>

{lesson.difficulty}

</strong>

</div>




</div>




</section>









<section className="videoSection">


<div className="videoContainer">


{

lesson.videoId ?


(

<iframe

width="100%"

height="500"

src={`https://www.youtube.com/embed/${lesson.videoId}`}

title={lesson.title}

frameBorder="0"

allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"

allowFullScreen

></iframe>

)


:


(

<div className="videoMissing">


<h2>

🎬 Video Coming Soon

</h2>


<p>

This lesson video is being prepared by PBody FullStack Academy.

</p>


</div>

)


}



</div>


</section>









<section className="lessonGrid">







<div className="lessonCard">



<h2>

🎯 Learning Objectives

</h2>




<ul>



{

lesson.objectives?.map((item,index)=>(


<li key={index}>

{item}

</li>


))

}



</ul>




</div>









<div className="lessonCard">



<h2>

📦 Resources

</h2>





{


lesson.resources?.map((resource,index)=>(



<div

className="resourceItem"

key={index}

>



<span>

📄

</span>




<div>


<strong>

{resource.title}

</strong>


<p>

{resource.type}

</p>


</div>



</div>



))


}





</div>







</section>









<section className="projectCard">



<h2>

🚀 Practical Assignment

</h2>





<h3>

{lesson.assignment?.title}

</h3>




<p>

{lesson.assignment?.description}

</p>




</section>









<div className="lessonActions">





<button

className="backButton"

onClick={()=>navigate(`/course/${courseId}`)}

>


← Back To Course


</button>









<button

className="completeButton"

onClick={()=>{


completeLesson(

Number(lesson.id)

);



navigate(`/course/${courseId}`);


}}


>


Complete Lesson ✅


</button>






</div>







</div>





</AppLayout>


);


}