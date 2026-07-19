import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Logo from "../assets/images/logo.png";

import AppLayout from "../components/layout/AppLayout";

import "../styles/auth.css";



export default function Register(){


const navigate = useNavigate();



const [form,setForm]=useState({

name:"",

email:"",

password:"",

confirmPassword:""

});



const [error,setError]=useState("");





const handleChange=(e)=>{


setForm({

...form,

[e.target.name]:e.target.value

});


};







const handleRegister=(e)=>{


e.preventDefault();



if(

!form.name ||

!form.email ||

!form.password ||

!form.confirmPassword

){


setError(

"Please complete all fields"

);


return;


}





if(form.password !== form.confirmPassword){


setError(

"Passwords do not match"

);


return;


}




setError("");



// backend registration will connect here


navigate("/login");



};









return(


<AppLayout>



<div className="authPage">





<div className="authBackgroundGlow"></div>







<div className="authCard registerCard">







<div className="authBrand">


<img

src={Logo}

alt="PBody Fullstack Academy"

/>



<h1>

PBODY FULLSTACK ACADEMY

</h1>



<p>

AI Powered Engineering Academy

</p>



</div>









<div className="authHeading">


<h2>

Join The Engineering Community 🚀

</h2>


<p>

Create your account and start building real world software skills.

</p>


</div>









<form onSubmit={handleRegister}>







<div className="inputGroup">


<label>

Full Name

</label>


<input


name="name"

type="text"

placeholder="Your full name"

value={form.name}

onChange={handleChange}


/>


</div>









<div className="inputGroup">


<label>

Email Address

</label>


<input


name="email"

type="email"

placeholder="developer@email.com"

value={form.email}

onChange={handleChange}


/>


</div>









<div className="inputGroup">


<label>

Password

</label>


<input


name="password"

type="password"

placeholder="Create password"

value={form.password}

onChange={handleChange}


/>


</div>









<div className="inputGroup">


<label>

Confirm Password

</label>


<input


name="confirmPassword"

type="password"

placeholder="Confirm password"

value={form.confirmPassword}

onChange={handleChange}


/>


</div>









{error && (

<p className="authError">

{error}

</p>

)}









<button

className="authButton"

type="submit"

>


Create Academy Account 🚀


</button>









</form>









<div className="authFooter">


<p>

Already have an account?

{" "}


<Link to="/login">

Login

</Link>


</p>



</div>









</div>







</div>



</AppLayout>


);


}