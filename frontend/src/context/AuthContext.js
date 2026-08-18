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



if(session.user){


setUser(session.user);

setToken(session.token || null);


}


else{


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









function saveSession(updatedUser,updatedToken){



const session={

user:updatedUser,

token:updatedToken

};



localStorage.setItem(

SESSION_KEY,

JSON.stringify(session)

);



setUser(updatedUser);

setToken(updatedToken);



}









async function login(email,password){



try{


const response =
await loginUser({

email,

password

});





saveSession(

response.user,

response.token

);





return{


success:true,

user:response.user


};



}

catch(error){



return{


success:false,


message:

error?.response?.data?.message ||

"Login failed"



};



}



}









function updateProfile(profileData){



const updatedUser={


...user,


...profileData



};



saveSession(

updatedUser,

token

);



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


updateProfile,


setSession:saveSession,


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