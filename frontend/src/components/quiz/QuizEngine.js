// ===============================================
// PBODY FULLSTACK ACADEMY
// QUIZ ENGINE COMPONENT
// ===============================================


import {
useState,
useMemo
} from "react";


import "../../styles/quizEngine.css";


import {
calculateQuizResult
} from "../../data/quizzes/quizEngine";


import {
prepareQuiz
} from "../../data/quizzes/quizUtils";


import {
useProgress
} from "../../context/ProgressContext";


import {
useUserEngine
} from "../../context/UserEngineContext";





export default function QuizEngine({

questions=[],

lesson,

onComplete

}){


const {
completeQuiz
}=useProgress();



const {
addXP
}=useUserEngine();





const preparedQuestions = useMemo(()=>{


if(!questions || questions.length===0){

return [];

}


return prepareQuiz(questions);


},[questions]);







const [
current,
setCurrent
]=useState(0);



const [
answers,
setAnswers
]=useState([]);



const [
selected,
setSelected
]=useState(null);



const [
finished,
setFinished
]=useState(false);







if(preparedQuestions.length===0){


return(

<div className="quizResult">

<h2>

No questions available

</h2>

</div>

);


}








const selectAnswer=(index)=>{


if(selected!==null)return;


setSelected(index);



const updatedAnswers=[...answers];


updatedAnswers[current]=index;


setAnswers(updatedAnswers);


};









const nextQuestion=()=>{


if(selected===null)return;



if(current < preparedQuestions.length-1){


setCurrent(current+1);


setSelected(null);


}

else{


setFinished(true);


}


};








if(finished){



const result = calculateQuizResult(

preparedQuestions,

answers

);




if(result.passed){


completeQuiz?.(
lesson?.id
);


addXP?.(
result.xpEarned
);


}





return(

<div className="quizResult">


<div className="resultIcon">

{
result.passed
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

{result.score}

/

{result.totalQuestions}

</h3>


<p>

Score: {result.percentage}%

</p>


<p>

XP Earned ⭐ {result.xpEarned}

</p>



<button

onClick={()=>onComplete?.()}

>

Return To Lesson

</button>


</div>

);


}







const question = preparedQuestions[current];







return(


<div className="quizContainer">



<div className="quizHeader">


<span>

Question {current+1}

/

{preparedQuestions.length}

</span>



<h2>

{lesson?.title}

</h2>


</div>







<div className="questionCard">


<h3>

{question.question}

</h3>





<div className="answerList">


{

question.options.map(

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

current===preparedQuestions.length-1

?

"Finish Quiz 🚀"

:

"Next Question ➜"

}


</button>




</div>


);



}