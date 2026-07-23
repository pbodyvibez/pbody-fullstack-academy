const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");




// ========================================
// CREATE JWT TOKEN
// ========================================

function createToken(user){


return jwt.sign(

{
id:user._id,
email:user.email
},

process.env.JWT_SECRET,

{
expiresIn:"7d"
}

);


}






// ========================================
// REGISTER USER
// ========================================

router.post("/register", async(req,res)=>{


try{


const {

name,

email,

password

}=req.body;





if(
!name ||
!email ||
!password
){


return res.status(400).json({

success:false,

message:"All fields are required"

});


}






const cleanEmail =
email.toLowerCase().trim();






const existingUser =
await User.findOne({

email:cleanEmail

});





if(existingUser){


return res.status(400).json({

success:false,

message:"Email already registered"

});


}






const passwordHash =
await bcrypt.hash(

password,

10

);






const user =
await User.create({

name:name.trim(),

email:cleanEmail,

password:passwordHash

});







const token =
createToken(user);







return res.status(201).json({

success:true,

message:"Account created successfully",

token,


user:{


id:user._id,


name:user.name,


email:user.email


}



});



}

catch(error){


console.log(
"REGISTER ERROR:",
error.message
);



return res.status(500).json({

success:false,

message:"Registration failed"

});


}



});









// ========================================
// LOGIN USER
// ========================================


router.post("/login", async(req,res)=>{


try{


const {

email,

password

}=req.body;





if(
!email ||
!password
){


return res.status(400).json({

success:false,

message:"Email and password required"

});


}







const user =
await User.findOne({

email:email.toLowerCase().trim()

});






if(!user){


return res.status(404).json({

success:false,

message:"Account not found"

});


}







const passwordValid =
await bcrypt.compare(

password,

user.password

);






if(!passwordValid){


return res.status(401).json({

success:false,

message:"Incorrect password"

});


}






const token =
createToken(user);






return res.json({

success:true,

token,


user:{


id:user._id,


name:user.name,


email:user.email


}



});



}

catch(error){


console.log(
"LOGIN ERROR:",
error.message
);



return res.status(500).json({

success:false,

message:"Login failed"

});


}


});







module.exports = router;