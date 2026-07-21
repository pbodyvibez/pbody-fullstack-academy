import {
createContext,
useContext,
useEffect,
useState
} from "react";


import {
loginUser
} from "../services/authService";



const AuthContext=createContext();



const SESSION_KEY="pbody_session";






export function AuthProvider({children}){


const [user,setUser]=useState(null);

const [token,setToken]=useState(null);

const [loading,setLoading]=useState(true);







useEffect(()=>{


const saved =
localStorage.getItem(SESSION_KEY);



if(saved){


try{


const session =
JSON.parse(saved);



if(session.user && session.token){


setUser(session.user);

setToken(session.token);


}else{


localStorage.removeItem(
SESSION_KEY
);


}



}
catch(error){


localStorage.removeItem(
SESSION_KEY
);


}


}



setLoading(false);



},[]);









function setSession(user,token){



const session={

user,

token

};




localStorage.setItem(

SESSION_KEY,

JSON.stringify(session)

);




setUser(user);

setToken(token);



}











async function login(email,password){



try{



const response =
await loginUser({

email,

password

});






setSession(

response.user,

response.token

);






return {


success:true,

user:response.user


};



}

catch(error){



return {


success:false,


message:

error?.response?.data?.message ||

"Login failed"


};



}



}









function logout(){



localStorage.removeItem(
SESSION_KEY
);



setUser(null);

setToken(null);



}









return(


<AuthContext.Provider

value={{

user,

token,

loading,

login,

logout,

setSession,

isAuthenticated:!!user

}}

>


{children}


</AuthContext.Provider>


);



}








export function useAuth(){


return useContext(AuthContext);


}