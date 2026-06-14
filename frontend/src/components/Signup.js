import { useState } from "react";

function Signup({setPage}) {

const [name,setName] = useState("");

const [email,setEmail] = useState("");

const [password,setPassword] = useState("");

const signup = ()=>{

if(

name===""

||

email===""

||

password===""

)

{

alert("Please fill all fields");

return;

}

alert(

"Welcome to PBody Academy, "

+

name

);

setPage("dashboard");

}

return(

<div

style={{

maxWidth:"550px",

margin:"50px auto",

background:"#1e293b",

padding:"40px",

borderRadius:"25px",

color:"white",

textAlign:"center"

}}

>

<h1>

🚀 Create Account

</h1>



<input

type="text"

placeholder="Full Name"

value={name}

onChange={(e)=>setName(e.target.value)}

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

type="email"

placeholder="Email"

value={email}

onChange={(e)=>setEmail(e.target.value)}

style={{

width:"90%",

padding:"18px",

marginTop:"20px",

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

onClick={signup}

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

Create Account

</button>



<p

style={{

marginTop:"30px",

fontSize:"18px"

}}

>

Already have an account?

<span

style={{

color:"#60a5fa",

cursor:"pointer",

marginLeft:"10px"

}}

onClick={()=>setPage("login")}

>

Login

</span>

</p>

</div>

)

}

export default Signup;