import axios from "axios";


const API = axios.create({

baseURL:

process.env.REACT_APP_API_URL ||

"https://pbody-fullstack-academy.onrender.com/api",

withCredentials:true

});


export default API;