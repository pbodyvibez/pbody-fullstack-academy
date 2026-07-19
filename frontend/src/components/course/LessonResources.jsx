import "../../components/course/course.css";


export default function LessonResources({lesson}){


if(!lesson){

return null;

}



return(


<div className="lessonResources">


<h2>

📂 Resources

</h2>



{

lesson.resources?.map((item,index)=>(


<div

key={index}

className="resourceItem"

>

📄 {item}

</div>


))

}



</div>


);


}