const mongoose = require("mongoose");



const subscriptionSchema = new mongoose.Schema(

{


user:{


type:mongoose.Schema.Types.ObjectId,

ref:"User",

required:true

},




status:{


type:String,


enum:[

"trial",

"premium",

"expired"

],


default:"trial"


},




plan:{


type:String,


default:"annual"


},




currency:{


type:String,


default:"NGN"


},




amount:{


type:Number,


default:0


},




paymentReference:{


type:String,


default:null


},




provider:{


type:String,


default:null


},




trialStart:{


type:Date,


default:Date.now


},




trialEnd:{


type:Date,


default:function(){


return new Date(

Date.now()+

3*24*60*60*1000

);


}


},




activatedAt:{


type:Date,


default:null


},




expiresAt:{


type:Date,


default:null


}



},

{

timestamps:true

}

);



module.exports = mongoose.model(

"Subscription",

subscriptionSchema

);