import { useState } from "react";
import { useParams } from "react-router-dom";


import courses from "../data/courses";
import lessonsData from "../data/lessons";


import CourseHeader from "../components/course/CourseHeader";
import LessonSidebar from "../components/course/LessonSidebar";
import VideoPlayer from "../components/course/VideoPlayer";
import LessonNavigation from "../components/course/LessonNavigation";
import LessonResources from "../components/course/LessonResources";
import ProgressCard from "../components/course/ProgressCard";
import AIMentor from "../components/course/AIMentor";
import LessonNotes from "../components/course/LessonNotes";
import LessonQuiz from "../components/course/LessonQuiz";
import CompleteLesson from "../components/course/CompleteLesson";

import AICourseTracker from "../components/ai/AICourseTracker";
import AILessonTracker from "../components/ai/AILessonTracker";
import { useProgress } from "../context/ProgressContext";


import "../components/course/course.css";



export default function CoursePage(){


const { id } = useParams();



const course = courses.find(

item => item.id === id

);



const lessons = lessonsData[id] || [];



const {

progress

}=useProgress();




const [currentLesson,setCurrentLesson]=useState(

lessons.length

?

lessons[0]

:

null

);





const completedLessons =

progress?.completedLessons?.length || 0;







if(!course){


return(


<div className="courseNotFound">


<h1>

Course Not Found

</h1>


<p>

This engineering path does not exist.

</p>


</div>

);

}








return(


<div className="courseWorkspace">



<AICourseTracker course={course} />

<AILessonTracker lesson={currentLesson} />

<CourseHeader

course={course}

/>








<div className="workspaceGrid">





<aside className="courseSidebar">


<LessonSidebar


lessons={lessons}


currentLesson={currentLesson}


setCurrentLesson={setCurrentLesson}


/>


</aside>









<main className="workspaceContent">





{

currentLesson

?

<VideoPlayer

lesson={currentLesson}

/>

:

<div className="videoEmpty">


<h2>

Course Content Coming Soon

</h2>


<p>

This learning path is being prepared by PBody FullStack Academy.

</p>


</div>

}




{

lessons.length > 0 &&

<LessonNavigation


lessons={lessons}


currentLesson={currentLesson}


setCurrentLesson={setCurrentLesson}


/>

}







<div className="learningToolsGrid">



<LessonResources

lesson={currentLesson}

/>




<LessonNotes

lesson={currentLesson}

/>



</div>







<AIMentor


course={course}


lesson={currentLesson}


/>







<LessonQuiz

lesson={currentLesson}

/>







<CompleteLesson

lesson={currentLesson}

/>







</main>









<aside className="courseProgress">


<ProgressCard


course={course}


currentLesson={currentLesson}


completed={completedLessons}


total={lessons.length}


/>


</aside>







</div>







</div>


);


}