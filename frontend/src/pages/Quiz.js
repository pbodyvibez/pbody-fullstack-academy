// ===============================================
// PBODY FULLSTACK ACADEMY
// QUIZ PAGE
// ===============================================


import {
useLocation,
useNavigate
} from "react-router-dom";


import AppLayout from "../components/layout/AppLayout";


import QuizEngine from "../components/quiz/QuizEngine";


import quizzes from "../data/quizzes";


import "../styles/quiz.css";





export default function Quiz(){



const navigate = useNavigate();


const location = useLocation();





const {

lesson,

course,

category="frontend"

}

=

location.state || {};








// ===============================================
// LOAD QUIZ DATA
// ===============================================


const selectedCategory =

quizzes[category]

|| {};




const quizQuestions =

selectedCategory.lesson1

|| [];







console.log(

"QUIZ SYSTEM DEBUG",

{

category,

lesson,

course,

allQuizzes:quizzes,

quizQuestions

}

);









if(!lesson){



return(


<AppLayout>


<div className="quiz-container">


<div className="quiz-card">


<h2>

No lesson selected.

</h2>


<p>

Please open the quiz from a lesson page.

</p>


</div>


</div>


</AppLayout>


);


}








if(quizQuestions.length===0){



return(


<AppLayout>


<div className="quiz-container">


<div className="quiz-card">


<h2>

No quiz available for this lesson.

</h2>


<p>

Category:

{category}

</p>


</div>


</div>


</AppLayout>


);


}










return(



<AppLayout>



<div className="quiz-container">





<QuizEngine



questions={quizQuestions}



lesson={lesson}



onComplete={()=>{



navigate("/lesson",{



state:{



lesson,

course



}



});



}}



/>






</div>



</AppLayout>



);



}