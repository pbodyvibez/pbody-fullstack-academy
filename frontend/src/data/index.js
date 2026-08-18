// ===============================================
// PBODY FULLSTACK ACADEMY
// PREMIUM ENGINEERING LESSON REGISTRY
// CONNECTED WITH COURSES.JS IDS
// ===============================================


import frontend from "./frontendLessons";
import backend from "./backendLessons";
import fullstack from "./fullstackLessons";
import ai from "./aiLessons";
import mobile from "./mobileLessons";
import cybersecurity from "./cybersecurityLessons";
import gamedev from "./gameLessons";
import devops from "./devopsLessons";
import dataScience from "./dataScienceLessons";
import graphics from "./graphicLessons";
import videoEditing from "./videoLessons";
import business from "./businessLessons";


// Newly connected premium modules

import testing from "./testingLessons";



// ===============================================
// COURSE LESSON DATABASE
// IDs MUST MATCH courses.js
// ===============================================


const lessons = {


/*
FREE COURSE
*/

frontend,



/*
PREMIUM ENGINEERING COURSES
*/

backend,

fullstack,

ai,

mobile,

devops,

cybersecurity,

testing,



// ===============================================
// COURSE ID ALIASES
// ===============================================


/*
courses.js:

id:"uiux"
*/

uiux: graphics,



/*
courses.js:

id:"data"
*/

data: dataScience,





// ===============================================
// EXISTING ACADEMY MODULES
// ===============================================


gamedev,

videoEditing,

business


};



export default lessons;