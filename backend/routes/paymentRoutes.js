const express = require("express");

const router = express.Router();


const {
initializePayment,
verifyPayment
}=require("../controllers/paymentController");



router.get(
"/test",
(req,res)=>{

res.json({

success:true,

message:"Payment route working"

});

}

);



router.post(
"/initialize",
initializePayment
);



router.get(
"/verify/:reference",
verifyPayment
);



module.exports = router;