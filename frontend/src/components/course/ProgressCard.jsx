import "../../components/course/course.css";


export default function ProgressCard({

course,

currentLesson,

completed,

total

}){


const percentage = total

?

Math.round((completed / total) * 100)

:

0;



return(



<div className="progressCard">





<div className="progressHeader">


<h2>

🚀 Progress

</h2>


<span>

{percentage}%

</span>


</div>







<div className="progressBar">


<div

style={{

width:`${percentage}%`

}}


/>


</div>







<div className="progressStats">



<div>

<h3>

{completed}

</h3>

<p>

Completed

</p>

</div>




<div>

<h3>

{total}

</h3>

<p>

Lessons

</p>

</div>





<div>

<h3>

{course.xp || 0}

</h3>

<p>

XP

</p>

</div>



</div>








<div className="certificateBox">


<h3>

🏆 Certificate

</h3>


<p>

Complete this course to earn your professional certificate.

</p>


</div>







<div className="currentLessonBox">


<h3>

Currently Learning

</h3>


<p>

{currentLesson?.title || "Select lesson"}

</p>


</div>





</div>



);


}