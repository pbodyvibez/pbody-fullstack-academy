// ===============================================
// PBODY FULLSTACK ACADEMY
// QUIZ UTILITIES
// ===============================================



// Shuffle array helper

export function shuffleArray(array){


return [...array].sort(
()=>Math.random() - 0.5
);


}



// Shuffle quiz questions

export function shuffleQuestions(questions){


return shuffleArray(questions);


}



// Shuffle answer options
// Keeps correct answer index updated

export function shuffleOptions(question){


const options = question.options.map(
(option,index)=>({

text: option,

correct:index === question.answer

})
);



const shuffled = shuffleArray(options);



return {


...question,


options: shuffled.map(
(item)=>item.text
),


answer: shuffled.findIndex(
(item)=>item.correct
)


};


}



// Prepare quiz before starting

export function prepareQuiz(questions){


return shuffleQuestions(

questions.map(
(question)=>shuffleOptions(question)

)

);


}



// Calculate total possible XP

export function calculateTotalXP(questions){


return questions.reduce(

(total,question)=>

total + (question.xp || 0),

0

);


}



// Assign quiz difficulty

export function getDifficulty(questionCount){


if(questionCount <= 5){

return "Beginner";

}


if(questionCount <= 10){

return "Intermediate";

}


return "Advanced";


}



// Create quiz information card

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