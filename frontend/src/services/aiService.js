// ===============================================
// PBODY FULLSTACK ACADEMY
// AI SERVICE
// ===============================================


import API from "../utils/api";



// ===============================================
// SEND MESSAGE TO AI MENTOR
// ===============================================


export async function sendAIMessage({

message,

lesson = null,

course = null,

student = null,

token

}) {


const response = await API.post(

"/ai/chat",

{


message,

lesson,

course,

student

},


{

headers:{


Authorization:

`Bearer ${token}`


}


}


);


return response.data;


}