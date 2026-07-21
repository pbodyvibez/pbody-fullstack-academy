require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


const authRoutes = require("./routes/authRoutes");
const paymentRoutes = require("./routes/paymentRoutes");


const app = express();


// ===============================
// MIDDLEWARE
// ===============================

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



// ===============================
// TEST
// ===============================

app.get("/",(req,res)=>{

res.json({

success:true,

message:"PBody Backend Online 🚀"

});

});



// ===============================
// ROUTES
// ===============================

app.use(
"/api/auth",
authRoutes
);


app.use(
"/api/payments",
paymentRoutes
);



// ===============================
// DATABASE
// ===============================

mongoose.connect(process.env.MONGO_URI)

.then(()=>{


console.log("✅ MongoDB Connected");


const PORT =
process.env.PORT || 5000;


app.listen(PORT,()=>{


console.log(
`🚀 Server running on ${PORT}`
);


});


})

.catch(err=>{


console.log(
"MongoDB ERROR:",
err.message
);


});