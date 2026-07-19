import React from "react";

import "./course.css";


export default function LessonSidebar({

lessons,

currentLesson,

setCurrentLesson

}){



if(!lessons || lessons.length === 0){


return(

<div className="lessonSidebarEmpty">

<h3>

No lessons available

</h3>


<p>

Lessons will be added soon.

</p>

</div>

);


}





return(


<div className="lessonSidebar">


<div className="sidebarHeader">


<h2>

📚 Course Lessons

</h2>


<p>

Choose a lesson to continue learning

</p>


</div>







<div className="sidebarLessons">


{

lessons.map((lesson,index)=>(


<button


key={lesson.id}


className={

currentLesson?.id === lesson.id

?

"lessonItem active"

:

"lessonItem"

}


onClick={()=>setCurrentLesson(lesson)}



>


<div className="lessonNumber">


{index + 1}


</div>





<div className="lessonText">


<h3>

{lesson.title}

</h3>



<span>

⏱ {lesson.duration || "Video Lesson"}

</span>


</div>




</button>


))


}


</div>


</div>


);


}