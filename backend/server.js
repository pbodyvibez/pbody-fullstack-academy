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



// =====================
// ROUTES
// =====================


app.use(
"/api/payments",
paymentRoutes
);



app.get("/",(req,res)=>{

res.json({

success:true,

message:"PBody FullStack Academy Backend Running 🚀"

});

});




// =====================
// DATABASE + SERVER
// =====================


mongoose
.connect(process.env.MONGO_URI)
.then(()=>{


console.log("MongoDB Connected");


app.listen(
5000,
()=>{

console.log(
"Backend running on port 5000"
);

}
);


})
.catch((error)=>{


console.error(
"Database connection failed:",
error
);


});