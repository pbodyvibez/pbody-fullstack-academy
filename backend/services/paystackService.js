const axios = require("axios");


const PAYSTACK_URL = "https://api.paystack.co";



function getHeaders(){

return {

Authorization:

`Bearer ${process.env.PAYSTACK_SECRET_KEY}`,

"Content-Type":

"application/json"

};

}





// ==============================
// INITIALIZE TRANSACTION
// ==============================

async function initializeTransaction({

email,

amount,

currency

}){


const response = await axios.post(

`${PAYSTACK_URL}/transaction/initialize`,

{

email,

amount,

currency,

callback_url:

process.env.PAYSTACK_CALLBACK_URL

},

{

headers:getHeaders()

}

);



return response.data.data;


}







// ==============================
// VERIFY TRANSACTION
// ==============================

async function verifyTransaction(reference){


const response = await axios.get(

`${PAYSTACK_URL}/transaction/verify/${reference}`,

{

headers:getHeaders()

}

);



return response.data.data;


}





module.exports = {

initializeTransaction,

verifyTransaction

};