const pricing = require("../config/pricing");

const {
initializeTransaction,
verifyTransaction
} = require("../services/paystackService");

const Subscription = require("../models/Subscription");

const User = require("../models/User");



// ==============================
// INITIALIZE PAYMENT
// ==============================

exports.initializePayment = async (req,res)=>{


try{


const {

email,

currency="NGN"

}=req.body;



if(!email){

return res.status(400).json({

success:false,

message:"Email is required"

});

}



const user = await User.findOne({

email

});



if(!user){

return res.status(404).json({

success:false,

message:"User account not found"

});

}




const plan = pricing[currency];



if(!plan){

return res.status(400).json({

success:false,

message:"Currency not supported"

});

}




const payment = await initializeTransaction({

email,

amount:plan.annual,

currency:plan.currency

});





res.json({

success:true,

message:"Payment initialized",

data:payment

});




}

catch(error){


console.error(

"INITIALIZE PAYMENT ERROR",

error.response?.data || error.message

);



res.status(500).json({

success:false,

message:"Payment initialization failed"

});


}


};









// ==============================
// VERIFY PAYMENT
// ==============================

exports.verifyPayment = async(req,res)=>{


try{


const {

reference

}=req.params;



const payment = await verifyTransaction(reference);





if(payment.status !== "success"){


return res.status(400).json({

success:false,

message:"Payment unsuccessful"

});


}




const email = payment.customer.email;



const user = await User.findOne({

email

});



if(!user){


return res.status(404).json({

success:false,

message:"User not found"

});


}





const subscription = await Subscription.findOneAndUpdate(

{

user:user._id

},

{


status:"premium",

plan:"annual",

currency:payment.currency,

amount:payment.amount,

paymentReference:reference,

provider:"paystack",

activatedAt:new Date(),

expiresAt:new Date(

Date.now()+

365*24*60*60*1000

)

},

{

new:true,

upsert:true

}

);





res.json({

success:true,

message:"Premium activated",

subscription

});



}

catch(error){


console.error(

"VERIFY PAYMENT ERROR",

error.response?.data || error.message

);



res.status(500).json({

success:false,

message:"Verification failed"

});


}


};