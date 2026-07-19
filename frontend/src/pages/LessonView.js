import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

import AppLayout from "../components/layout/AppLayout";
import QuizEngine from "../components/quiz/QuizEngine";

import { useProgress } from "../context/ProgressContext";

import "../styles/lessonView.css";


export default function LessonView(){


const navigate = useNavigate();

const location = useLocation();



const {
course,
lesson,
lessons
}=location.state || {};



const {
completeLesson,
progress: userProgress
}=useProgress();



if(!course || !lesson){

navigate("/courses");

return null;

}




const lessonIndex = lessons.findIndex(

item=>item.id===lesson.id

);



const totalLessons = lessons.length;



const lessonProgress = Math.round(

((lessonIndex + 1) / totalLessons) * 100

);



const isCompleted =

userProgress?.completedLessons?.includes(

lesson.id

);




const [notes,setNotes]=useState(

localStorage.getItem(

`notes-${lesson.id}`

) || ""

);



const [aiMessage,setAiMessage]=useState("");





const saveNotes=()=>{


localStorage.setItem(

`notes-${lesson.id}`,

notes

);


alert("Notes saved successfully");


};





const finishLesson=()=>{


completeLesson(lesson);


};





const nextLesson=()=>{


if(lessonIndex >= lessons.length-1)

return;



const next = lessons[lessonIndex+1];



navigate(

`/lesson/${course.id}/${next.id}`,

{

state:{

course,

lesson:next,

lessons

}

}

);


};





const previousLesson=()=>{


if(lessonIndex<=0)

return;



const previous = lessons[lessonIndex-1];



navigate(

`/lesson/${course.id}/${previous.id}`,

{

state:{

course,

lesson:previous,

lessons

}

}

);


};
return(

<AppLayout>


<div className="lessonWorkspace">



<section className="lessonHeader">


<div>


<span className="lessonBadge">


<img

src="/logo.png"

alt="PBody Academy"

/>


PBODY FULLSTACK ACADEMY


</span>




<h1>

{lesson.title}

</h1>




<p>

{lesson.description}

</p>


</div>





<div className="lessonStats">


<div>

<strong>

{lessonProgress}%

</strong>


<span>

Progress

</span>

</div>




<div>

<strong>

{lesson.xp}

</strong>


<span>

XP

</span>

</div>




<div>

<strong>

{lesson.duration}

</strong>


<span>

Duration

</span>

</div>


</div>


</section>







<section className="lessonVideo">


<iframe

src={`https://www.youtube.com/embed/${lesson.videoId}`}

title={lesson.title}

allowFullScreen

/>


</section>







<section className="lessonPanel">


<h2>

🎯 What You Will Learn

</h2>




<div className="objectiveGrid">


{

lesson.objectives?.map(

(item,index)=>(


<div

key={index}

className="objectiveItem"

>


<span>

⭕


</span>


<p>

{item}

</p>


</div>


)

)

}


</div>


</section>







<section className="lessonPanel">


<h2>

📚 Lesson Resources

</h2>



<div className="resourceGrid">


{

lesson.resources?.map(

(resource,index)=>(


<div

key={index}

className="resourceCard"


>


<div className="resourceIcon">


{

resource.type==="pdf"

?

"📄"

:

"📦"

}


</div>




<div>


<h3>

{resource.title}

</h3>



<span>

{resource.type.toUpperCase()}

</span>


</div>




<button>

Open

</button>



</div>


)

)

}


</div>


</section>








{

lesson.assignment &&


<section className="lessonPanel assignmentPanel">


<h2>

🏗 Engineering Assignment

</h2>




<div className="assignmentCard">


<h3>

{lesson.assignment.title}

</h3>



<p>

{lesson.assignment.description}

</p>



<div className="assignmentInfo">


<span>

⭐ Reward: {lesson.xp} XP

</span>



<span>

🔥 Difficulty: {lesson.difficulty}

</span>


</div>



<button>

Start Assignment

</button>


</div>



</section>


}






<section className="lessonPanel aiPanel">


<h2>

🤖 PBody AI Engineering Mentor

</h2>



<p>

Ask questions about this lesson and get engineering guidance.

</p>



<div className="aiBox">


<textarea

value={aiMessage}

onChange={(e)=>setAiMessage(e.target.value)}

placeholder="Ask AI about this lesson..."

/>



<button>

Send To AI

</button>



</div>



</section>

<section className="lessonPanel">


<h2>

📝 My Engineering Notes

</h2>




<textarea

className="notesArea"

value={notes}

onChange={(e)=>setNotes(e.target.value)}

placeholder="Write your lesson notes here..."

/>





<button

className="saveButton"

onClick={saveNotes}

>

Save Notes

</button>



</section>







{

lesson.quiz &&


<section className="lessonPanel">


<h2>

🧠 Lesson Assessment

</h2>



<p>

Test your understanding and earn XP by completing this quiz.

</p>



<QuizEngine

lesson={lesson}

/>



</section>


}








{

lesson.codeChallenge &&


<section className="lessonPanel challengePanel">


<h2>

💻 Code Challenge

</h2>



<p>

Practice your skills by solving real engineering problems.

</p>



<button

onClick={()=>navigate("/playground")}

>

Open Code Playground

</button>



</section>


}








<section className="lessonNavigation">





<button

className="secondaryButton"

onClick={previousLesson}

disabled={lessonIndex===0}

>

⬅ Previous Lesson

</button>







<button

className="completeButton"

onClick={finishLesson}

disabled={isCompleted}

>

{

isCompleted

?

"🎉 Completed"

:

"✅ Complete Lesson"

}


</button>







<button

className="primaryButton"

onClick={nextLesson}

disabled={lessonIndex===lessons.length-1}

>

Next Lesson ➜

</button>





</section>





</div>


</AppLayout>


);


}