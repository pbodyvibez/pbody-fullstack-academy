import { useState } from "react";

function Login({setPage}) {

const [email,setEmail] = useState("");

const [password,setPassword] = useState("");

const login = ()=>{

if(email==="" || password===""){

alert("Please fill all fields");

return;

}

alert("Welcome back " + email);

setPage("dashboard");

}

return(

<div

style={{

maxWidth:"500px",

margin:"50px auto",

background:"#1e293b",

padding:"40px",

borderRadius:"25px",

color:"white",

textAlign:"center"

}}

>

<h1>

🔐 Login

</h1>



<input

type="email"

placeholder="Email"

value={email}

onChange={(e)=>setEmail(e.target.value)}

style={{

width:"90%",

padding:"18px",

marginTop:"25px",

fontSize:"18px",

borderRadius:"12px",

border:"none"

}}

/>



<input

type="password"

placeholder="Password"

value={password}

onChange={(e)=>setPassword(e.target.value)}

style={{

width:"90%",

padding:"18px",

marginTop:"20px",

fontSize:"18px",

borderRadius:"12px",

border:"none"

}}

/>



<button

onClick={login}

style={{

marginTop:"30px",

padding:"15px 40px",

background:"#2563eb",

color:"white",

border:"none",

fontSize:"20px",

borderRadius:"12px",

cursor:"pointer"

}}

>

Login

</button>



<p

style={{

marginTop:"30px",

fontSize:"18px"

}}

>

Don't have an account?

<span

style={{

color:"#60a5fa",

cursor:"pointer",

marginLeft:"10px"

}}

onClick={()=>setPage("signup")}

>

Create Account

</span>

</p>

</div>

)

}

export default Login;