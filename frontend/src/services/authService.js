import axios from "axios";

const API = axios.create({

baseURL:

process.env.REACT_APP_API_URL ||

"http://localhost:5000/api"

});



export const registerUser = (data)=>{

return API.post(

"/auth/register",

data

);

};



export const loginUser = (data)=>{

return API.post(

"/auth/login",

data

);

};



export const getProfile = (token)=>{

return API.get(

"/auth/profile",

{

headers:{

Authorization:`Bearer ${token}`

}

}

);

};