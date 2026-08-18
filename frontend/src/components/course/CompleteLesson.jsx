import { useState } from "react";

import { useProgress } from "../../context/ProgressContext";

import "./course.css";



export default function CompleteLesson({

lesson

}){



const {

completeLesson

} = useProgress() || {};




const [completed,setCompleted] = useState(false);







if(!lesson){

return null;

}







const handleComplete = ()=>{



if(completeLesson){

completeLesson(lesson.id);

}



setCompleted(true);



};








return(



<div className="completeLessonCard">






<div className="completeLessonContent">





<h2>

{completed

?

"Lesson Completed 🎉"

:

"Finish This Lesson"

}

</h2>






<p>

{

completed

?

"Great work. Keep building your engineering skills."

:

"Mark this lesson complete and continue your learning journey."

}

</p>







</div>








<button



onClick={handleComplete}



disabled={completed}



className={

completed

?

"completedButton"

:

"completeButton"

}



>




{

completed

?

"Completed ✓"

:

"Complete Lesson"

}



</button>







</div>



);


}