require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const paymentRoutes = require("./routes/paymentRoutes");


const app = express();



app.use(
cors({
origin:[
"http://localhost:3000",
"https://pbodyvibezai.netlify.app"
],
credentials:true
})
);



app.use(express.json());



// TEST ROUTE

app.get("/",(req,res)=>{

res.json({

success:true,

message:"PBody FullStack Academy Backend Running 🚀"

});

});



// PAYMENT ROUTES

app.use(
"/api/payments",
paymentRoutes
);



// DATABASE


mongoose
.connect(process.env.MONGO_URI)
.then(()=>{


console.log("✅ MongoDB Connected");



const PORT = process.env.PORT || 5000;



app.listen(PORT,()=>{


console.log(
`🚀 Backend running on port ${PORT}`
);


});


})
.catch((error)=>{


console.error(
"❌ Database connection failed",
error
);


});