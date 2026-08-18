import {
  Navigate,
  useLocation
} from "react-router-dom";


import {
  useAuth
} from "../context/AuthContext";



export default function ProtectedRoute({
  children
}){


const {
  user,
  loading
}=useAuth();



const location = useLocation();





// ======================================
// AUTH CHECK LOADING
// ======================================


if(loading){


return(


<div className="routeLoading">


<div className="loader"></div>


<p>
Loading PBody Academy...
</p>


</div>


);


}






// ======================================
// REDIRECT GUEST USERS
// ======================================


if(!user){


return(


<Navigate

to="/login"

replace

state={{

from:location.pathname

}}

/>


);


}







// ======================================
// AUTHORIZED
// ======================================


return children;



}