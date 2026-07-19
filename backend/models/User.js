const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({

name:{
type:String,
required:true,
trim:true
},

email:{
type:String,
required:true,
unique:true,
lowercase:true,
trim:true
},

password:{
type:String,
required:true
},

level:{
type:Number,
default:1
},

xp:{
type:Number,
default:0
},

streak:{
type:Number,
default:0
},

completedLessons:[{
type:String
}],

completedCourses:[{
type:String
}],

certificates:[{
type:String
}],

subscriptionStatus:{
type:String,
enum:["trial","premium","expired"],
default:"trial"
},

trialEndsAt:{
type:Date,
default:()=>{

const date=new Date();

date.setDate(date.getDate()+3);

return date;

}
},

avatar:{
type:String,
default:""
},

country:{
type:String,
default:""
},

role:{
type:String,
default:"student"
}

},

{

timestamps:true

}

);

module.exports = mongoose.model(

"User",

UserSchema

);