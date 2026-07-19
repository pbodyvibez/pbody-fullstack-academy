const express = require("express");

const router = express.Router();

const Subscription = require("../models/Subscription");

const protect = require("../middleware/authMiddleware");



// ==============================
// GET CURRENT SUBSCRIPTION
// ==============================

router.get(

"/current",

protect,

async(req,res)=>{


try{


const subscription = await Subscription.findOne({

user:req.user.id

});





if(!subscription){


return res.json({

success:true,

subscription:null

});


}




// Check expiry


if(

subscription.status==="premium" &&

subscription.expiresAt &&

new Date() > subscription.expiresAt

){


subscription.status="expired";


await subscription.save();


}





res.json({

success:true,

subscription

});



}

catch(error){


console.error(

"SUBSCRIPTION ERROR",

error.message

);



res.status(500).json({

success:false,

message:"Unable to get subscription"

});


}


});




module.exports = router;