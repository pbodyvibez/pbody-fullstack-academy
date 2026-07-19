import axios from "axios";



const API_URL =

process.env.REACT_APP_API_URL ||

"http://localhost:5000/api";





// ==============================
// INITIALIZE PAYMENT
// ==============================

export async function initializePayment(data){


const response = await axios.post(

`${API_URL}/payments/initialize`,

data

);


return response.data;


}





// ==============================
// VERIFY PAYMENT
// ==============================

export async function verifyPayment(reference){


const response = await axios.get(

`${API_URL}/payments/verify/${reference}`

);


return response.data;


}