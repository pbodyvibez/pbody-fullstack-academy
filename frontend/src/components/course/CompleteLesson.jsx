import { useProgress } from "../../context/ProgressContext";

import "../../components/course/course.css";


export default function CompleteLesson({lesson}){


const {

completeLesson,

progress

}=useProgress();



if(!lesson){

return null;

}



const alreadyCompleted =

progress?.completedLessons?.includes(lesson.id);




return(


<div className="completeLessonBox">


<button

className={

alreadyCompleted

?

"completedButton"

:

"completeButton"

}

disabled={alreadyCompleted}

onClick={()=>completeLesson(lesson.id)}

>


{

alreadyCompleted

?

"✅ Lesson Completed"

:

"Mark Lesson Complete 🚀"

}


</button>



</div>


);


}