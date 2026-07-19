const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");



// ==================================
// REGISTER USER
// ==================================

async function registerUser({
name,
email,
password
}){


const existingUser = await User.findOne({

email

});


if(existingUser){

throw new Error(
"User already exists"
);

}



const hashedPassword = await bcrypt.hash(

password,

10

);



const user = await User.create({

name,

email,

password:hashedPassword

});



return {

id:user._id,

name:user.name,

email:user.email

};


}






// ==================================
// LOGIN USER
// ==================================

async function loginUser({

email,

password

}){


const user = await User.findOne({

email

});



if(!user){

throw new Error(

"User not found"

);

}



const validPassword = await bcrypt.compare(

password,

user.password

);



if(!validPassword){

throw new Error(

"Invalid password"

);

}





const token = jwt.sign(

{

id:user._id,

email:user.email

},

process.env.JWT_SECRET,

{

expiresIn:"1d"

}

);





return {

token,

user:{


id:user._id,

name:user.name,

email:user.email


}

};


}





module.exports = {

registerUser,

loginUser

};