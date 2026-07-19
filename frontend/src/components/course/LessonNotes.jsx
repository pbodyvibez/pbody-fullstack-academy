import "../../components/course/course.css";


export default function LessonNotes({lesson}){


if(!lesson){

return null;

}



return(


<div className="lessonNotes">


<h2>

📘 Lesson Notes

</h2>



{

lesson.notes?.map((note,index)=>(


<div

className="noteItem"

key={index}

>

✓ {note}

</div>


))

}



</div>


);


}