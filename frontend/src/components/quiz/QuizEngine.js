import { useState } from "react";

import "../../styles/quizEngine.css";

import { useProgress } from "../../context/ProgressContext";


export default function QuizEngine({lesson}){


const {
completeLesson
}=useProgress();



const questions = lesson.quizData || [

{
question:"What does HTML stand for?",
options:[
"Hyper Text Markup Language",
"High Tech Modern Language",
"Hyper Transfer Machine Language",
"Home Tool Markup Language"
],
answer:0
},

{
question:"Which language is used for styling websites?",
options:[
"Python",
"CSS",
"Java",
"SQL"
],
answer:1
},

{
question:"React is mainly used for building what?",
options:[
"Databases",
"User Interfaces",
"Operating Systems",
"Servers"
],
answer:1
}

];



const [current,setCurrent]=useState(0);

const [selected,setSelected]=useState(null);

const [score,setScore]=useState(0);

const [finished,setFinished]=useState(false);



const selectAnswer=(index)=>{

setSelected(index);

};



const nextQuestion=()=>{


if(selected===null)
return;



if(selected===questions[current].answer){

setScore(score+1);

}



if(current < questions.length-1){

setCurrent(current+1);

setSelected(null);


}else{


setFinished(true);


}

};





const percentage=Math.round(

(score/questions.length)*100

);





if(finished){


return(

<div className="quizResult">


<div className="resultIcon">

{

percentage >= 70

?

"🏆"

:

"📚"

}

</div>



<h2>

Quiz Completed

</h2>



<h3>

{score} / {questions.length}

</h3>



<p>

Score: {percentage}%

</p>



{

percentage >=70 &&

<button

onClick={()=>completeLesson(lesson)}

>

Claim XP Reward 🚀

</button>

}



</div>

);


}





return(


<div className="quizContainer">


<div className="quizHeader">


<span>

Question {current+1} / {questions.length}

</span>


<h2>

{lesson.title}

</h2>


</div>




<div className="questionCard">


<h3>

{questions[current].question}

</h3>




<div className="answerList">


{

questions[current].options.map(

(option,index)=>(


<button

key={index}

className={

selected===index

?

"selectedAnswer"

:

""

}

onClick={()=>selectAnswer(index)}

>


{option}


</button>


)

)

}



</div>


</div>



<button

className="nextQuestion"

onClick={nextQuestion}

>

{

current===questions.length-1

?

"Finish Quiz"

:

"Next Question ➜"

}


</button>



</div>


);


}