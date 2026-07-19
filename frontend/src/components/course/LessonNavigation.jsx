import "../../components/course/course.css";


export default function LessonNavigation({

lessons,

currentLesson,

setCurrentLesson

}){


if(!lessons || !currentLesson){

return null;

}



const currentIndex = lessons.findIndex(

lesson => lesson.id === currentLesson.id

);



const previousLesson =

lessons[currentIndex - 1];



const nextLesson =

lessons[currentIndex + 1];




return(


<div className="lessonNavigation">



<button

className="previousLesson"

disabled={!previousLesson}

onClick={()=>setCurrentLesson(previousLesson)}

>

⬅ Previous Lesson

</button>





<div className="lessonCounter">


Lesson {currentIndex + 1}

/

{lessons.length}


</div>





<button

className="nextLesson"

disabled={!nextLesson}

onClick={()=>setCurrentLesson(nextLesson)}

>

Next Lesson ➡

</button>



</div>


);


}