import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";


const AuthContext = createContext();


const SESSION_KEY = "pbody_session";


const SESSION_DURATION =
30 * 24 * 60 * 60 * 1000; 
// 30 days



export function AuthProvider({children}){


const [user,setUser] = useState(null);


const [loading,setLoading] = useState(true);





useEffect(()=>{


const saved =
localStorage.getItem(SESSION_KEY);



if(saved){


try{


const session =
JSON.parse(saved);



if(
session.user &&
session.expiresAt > Date.now()
){


setUser(session.user);


}
else{


localStorage.removeItem(
SESSION_KEY
);


}


}
catch{


localStorage.removeItem(
SESSION_KEY
);


}


}



setLoading(false);


},[]);







async function login(email,password){



if(!email || !password){


return {

success:false,

message:
"Email and password are required."

};


}




const loggedUser = {


id:1,


name:"Engineer",


email


};





const session = {


user:loggedUser,


expiresAt:
Date.now()+SESSION_DURATION


};





localStorage.setItem(

SESSION_KEY,

JSON.stringify(session)

);



setUser(loggedUser);



return {


success:true


};



}







function logout(){


localStorage.removeItem(
SESSION_KEY
);


setUser(null);


}






function refreshSession(){


if(!user)return;



const session={


user,


expiresAt:
Date.now()+SESSION_DURATION


};



localStorage.setItem(

SESSION_KEY,

JSON.stringify(session)

);


}








return(


<AuthContext.Provider

value={{

user,

loading,

login,

logout,

refreshSession,

isAuthenticated:
!!user

}}

>


{children}


</AuthContext.Provider>


);


}






export function useAuth(){


return useContext(AuthContext);


}