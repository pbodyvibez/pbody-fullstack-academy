import { Navigate, useLocation } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";
import { useSubscription } from "../../context/SubscriptionContext";


export default function PremiumRoute({children}){


const {

user,

loading,

isAuthenticated

}=useAuth();



const {

isPremium,

isTrialActive

}=useSubscription();



const location = useLocation();




// ===============================
// CHECK USER LOADING
// ===============================

if(loading){


return(

<div
style={{

minHeight:"100vh",

background:"#020617",

color:"white",

display:"flex",

alignItems:"center",

justifyContent:"center",

fontSize:"22px"

}}

>

Loading...

</div>

);


}






// ===============================
// REQUIRE LOGIN
// ===============================

if(!isAuthenticated || !user){


return(

<Navigate

to="/login"

replace

state={{

from:location

}}

/>

);


}






// ===============================
// FREE COURSE ACCESS
// ===============================


// CHANGE THESE IDS TO YOUR FREE COURSE IDS

const freeCourses = [

"frontend",

"html",

"css",

"javascript"

];



const courseId = location.pathname.split("/")[2];



if(

location.pathname.startsWith("/course/")

&&

freeCourses.includes(courseId)

){


return children;


}







// ===============================
// PREMIUM ACCESS
// ===============================


if(isPremium || isTrialActive){


return children;


}





return(

<Navigate

to="/pricing"

replace

/>

);


}