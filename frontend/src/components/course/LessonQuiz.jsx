import { useState } from "react";

import "../../components/course/course.css";


export default function LessonQuiz({lesson}){


const [selected,setSelected] = useState("");

const [result,setResult] = useState("");



if(!lesson?.quiz || lesson.quiz.length===0){

return null;

}



const checkAnswer = (correct)=>{


if(

selected.toLowerCase() === correct.toLowerCase()

){

setResult("✅ Correct! Great job.");

}

else{

setResult(

"❌ Not correct. Review the lesson notes and try again."

);

}


};




return(


<div className="lessonQuiz">


<h2>

🧠 Knowledge Check

</h2>



{

lesson.quiz.map((item,index)=>(


<div

className="quizQuestion"

key={index}

>


<h3>

{index+1}. {item.question}

</h3>



<input

value={selected}

onChange={(e)=>setSelected(e.target.value)}

placeholder="Type your answer..."

/>



<button

onClick={()=>checkAnswer(item.answer)}

>

Check Answer

</button>


</div>


))

}




{

result &&

<div className="quizResult">

{result}

</div>

}



</div>


);


}