const express = require("express");

const router = express.Router();

const bcrypt = require("bcryptjs");

const User = require("../models/User");



// ===============================
// REGISTER
// ===============================

router.post("/register", async(req,res)=>{


console.log("========== REGISTER START ==========");


try{


console.log("BODY RECEIVED:");
console.log(req.body);



const {
name,
email,
password
}=req.body;



if(!name || !email || !password){


return res.status(400).json({

success:false,

message:"Missing required fields"

});


}




console.log("Checking existing user...");


const existingUser =
await User.findOne({
email
});



if(existingUser){


return res.status(400).json({

success:false,

message:"User already exists"

});


}




console.log("Hashing password...");


const hashedPassword =
await bcrypt.hash(
password,
10
);




console.log("Creating user...");



const user =
new User({

name:name,

email:email,

password:hashedPassword

});




await user.save();



console.log("USER CREATED:");
console.log(user._id);



return res.status(201).json({

success:true,

message:"Registration successful",

user:{

id:user._id,

name:user.name,

email:user.email

}

});



}

catch(error){


console.log("==============================");

console.log("REGISTER FAILED");

console.log(error);


console.log("==============================");



return res.status(500).json({

success:false,

message:error.message

});


}



});






module.exports = router;