// ===============================================
// PBODY FULLSTACK ACADEMY
// QUIZ UTILITIES
// ===============================================



// Shuffle array safely

export function shuffleArray(array){


return [...array].sort(
()=>Math.random()-0.5
);


}







// Shuffle quiz questions

export function shuffleQuestions(questions){


return shuffleArray(
questions
);


}







// Shuffle answer options
// Keeps correct answer index correct


export function shuffleOptions(question){



const formattedOptions = question.options.map(

(option,index)=>(


{

text:option,

correct:index===question.answer


}


)

);





const shuffled = shuffleArray(
formattedOptions
);





return {


...question,


options:shuffled.map(
(item)=>item.text
),



answer:shuffled.findIndex(

(item)=>item.correct

),



// default XP per question

xp:question.xp || 20



};



}









// Prepare quiz before starting


export function prepareQuiz(questions){


return shuffleQuestions(


questions.map(

question=>

shuffleOptions(question)


)


);


}









// Calculate total possible XP


export function calculateTotalXP(questions){


return questions.reduce(


(total,question)=>


total + (question.xp || 20),


0


);



}









// Difficulty calculator


export function getDifficulty(questionCount){



if(questionCount <=5){

return "Beginner";

}



if(questionCount <=10){

return "Intermediate";

}



return "Advanced";


}









// Quiz information card


export function getQuizInfo(

category,

lesson,

questions

){



return {


title:`${category} ${lesson}`,


category,


lesson,


totalQuestions:questions.length,


difficulty:getDifficulty(
questions.length
),


totalXP:calculateTotalXP(
questions
)



};


}