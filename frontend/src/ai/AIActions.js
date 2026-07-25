// ===============================================
// PBODY FULLSTACK ACADEMY
// AI ACTIONS
// ===============================================


import { AI_TYPES } from "./AITypes";



// ===============================================
// SEND STUDENT MESSAGE
// ===============================================


export const sendAIMessage = (
  dispatch,
  message
)=>{


  dispatch({

    type: AI_TYPES.SEND_MESSAGE,

    payload: {

      id: Date.now(),

      sender:"student",

      text:message

    }

  });


};





// ===============================================
// RECEIVE AI MESSAGE
// ===============================================


export const receiveAIMessage = (
  dispatch,
  message
)=>{


  dispatch({

    type: AI_TYPES.RECEIVE_MESSAGE,

    payload: {

      id: Date.now(),

      sender:"ai",

      text:message

    }

  });


};





// ===============================================
// EXPLAIN LESSON
// ===============================================


export const explainLesson = (
  dispatch,
  lesson
)=>{


  const response = `

I will explain ${lesson} step by step.

First, understand the main concept.

Then practice with examples.

Finally build a small project.

`;


  receiveAIMessage(

    dispatch,

    response

  );


};





// ===============================================
// DEBUG CODE
// ===============================================


export const debugCode = (
  dispatch,
  code
)=>{


  const response = `

I am analyzing your code.

Check:

1. Syntax errors

2. Logic mistakes

3. Missing requirements

4. Possible improvements


Your AI Mentor will guide you through fixing it.

`;



  receiveAIMessage(

    dispatch,

    response

  );


};





// ===============================================
// GENERATE QUIZ
// ===============================================


export const generateQuiz = (

 dispatch,

 topic

)=>{


 const response = `

Creating a practice quiz for:

${topic}


Question 1:

Explain the purpose of this concept.


Question 2:

Give a practical example.


Question 3:

Build a small implementation.


`;



 receiveAIMessage(

  dispatch,

  response

 );


};





// ===============================================
// CREATE PRACTICE TASK
// ===============================================


export const createPracticeTask = (

 dispatch,

 skill

)=>{


 const response = `

Practice Challenge:

Build a small project using ${skill}.

Requirements:

- Write clean code

- Explain your approach

- Test your solution

- Improve your design


`;



 receiveAIMessage(

  dispatch,

  response

 );


};