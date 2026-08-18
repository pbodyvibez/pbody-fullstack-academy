// ===============================================
// PBODY FULLSTACK ACADEMY
// QUIZ ENGINE LOGIC
// ===============================================



export function checkAnswer(

question,

selectedAnswer

){



return (

question.answer === selectedAnswer

);


}









export function calculateQuizResult(

questions,

answers

){



let score = 0;

let totalXP = 0;







questions.forEach(

(question,index)=>{



if(

checkAnswer(

question,

answers[index]

)

){



score++;



totalXP += question.xp || 20;



}



}


);









const percentage = questions.length

?

Math.round(

(score / questions.length) * 100

)

:

0;









return {


score,


totalQuestions:questions.length,


percentage,


xpEarned:totalXP,


passed:percentage >=70



};



}









export function createQuizSubmission(

category,

lesson,

result

){



return {


category,


lesson,


score:result.score,


percentage:result.percentage,


xpEarned:result.xpEarned,


passed:result.passed,


completedAt:new Date().toISOString()



};


}