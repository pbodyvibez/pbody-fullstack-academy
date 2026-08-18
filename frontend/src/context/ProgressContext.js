import {
createContext,
useContext,
useEffect,
useState
} from "react";


const ProgressContext = createContext();



const DEFAULT_PROGRESS = {


completedLessons: [],

completedQuizzes: [],

unlockedLessons:[1],


currentLesson:1,


totalXP:0,


level:1,


streak:0,


lastActivity:null


};





export function ProgressProvider({children}){





const [progress,setProgress]=useState(()=>{


const saved =
localStorage.getItem(
"courseProgress"
);



return saved

?

JSON.parse(saved)

:

DEFAULT_PROGRESS;



});









useEffect(()=>{


localStorage.setItem(

"courseProgress",

JSON.stringify(progress)

);


},[progress]);









// =================================
// XP CALCULATION
// =================================


function calculateLevel(xp){


return Math.floor(
xp / 500
)+1;


}









function updateActivity(){


return new Date()
.toISOString();


}









// =================================
// COMPLETE LESSON
// =================================


function completeLesson(lesson){



setProgress(prev=>{



if(
prev.completedLessons.includes(
lesson.id
)
){

return prev;

}






const newXP =

prev.totalXP +

(lesson.xp || 50);






return{


...prev,

completedLessons:[

...prev.completedLessons,

lesson.id

],



currentLesson:
lesson.id,



totalXP:newXP,



level:
calculateLevel(newXP),



streak:
prev.streak + 1,



lastActivity:
updateActivity()



};



});



}









// =================================
// COMPLETE QUIZ
// =================================


function completeQuiz(lessonId,xp=100){



setProgress(prev=>{



if(
prev.completedQuizzes.includes(
lessonId
)
){

return prev;

}




const newXP =

prev.totalXP + xp;





let unlocked = [

...prev.unlockedLessons

];





if(
!unlocked.includes(
lessonId + 1
)
){

unlocked.push(
lessonId + 1
);

}






return{


...prev,



completedQuizzes:[

...prev.completedQuizzes,

lessonId

],



unlockedLessons:unlocked,



totalXP:newXP,



level:
calculateLevel(newXP),



lastActivity:
updateActivity()



};



});



}









// =================================
// CURRENT LESSON
// =================================


function setCurrentLesson(id){



setProgress(prev=>({

...prev,

currentLesson:id


}));



}









// =================================
// RESET
// =================================


function resetProgress(){


localStorage.removeItem(
"courseProgress"
);



setProgress(
DEFAULT_PROGRESS
);



}









return(


<ProgressContext.Provider


value={{


progress,


completeLesson,


completeQuiz,


setCurrentLesson,


resetProgress



}}


>


{children}


</ProgressContext.Provider>


);



}









export function useProgress(){


return useContext(
ProgressContext
);


}