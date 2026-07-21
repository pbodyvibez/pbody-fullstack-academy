import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Logo from "../assets/images/logo.png";

import {
 registerUser,
 loginUser
} from "../services/authService";

import {
 useAuth
} from "../context/AuthContext";

import "../styles/auth.css";


export default function Register(){

const navigate = useNavigate();

const {
setSession
}=useAuth();



const [loading,setLoading]=useState(false);

const [error,setError]=useState("");



const [form,setForm]=useState({

name:"",
email:"",
password:"",
confirmPassword:""

});





function handleChange(e){

setForm({

...form,

[e.target.name]:e.target.value

});

}





async function handleRegister(e){

e.preventDefault();

setError("");



if(
!form.name ||
!form.email ||
!form.password ||
!form.confirmPassword
){

setError(
"Please complete all fields."
);

return;

}



if(form.password !== form.confirmPassword){

setError(
"Passwords do not match."
);

return;

}



try{


setLoading(true);



await registerUser({

name:form.name,

email:form.email,

password:form.password

});



const loginResponse =
await loginUser({

email:form.email,

password:form.password

});





localStorage.setItem(
"pbody_session",
JSON.stringify({

user:loginResponse.user,

token:loginResponse.token

})
);





navigate("/dashboard");



}

catch(err){


console.log(err);


setError(

err?.response?.data?.message ||
"Registration failed"

);


}

finally{

setLoading(false);

}


}





return(



<div className="authPage">


<div className="authBackground">

<div className="glowOne"></div>

<div className="glowTwo"></div>

</div>




<div className="authContainer">



<div className="authBrand">


<img
src={Logo}
alt="PBody"
/>


<h1>

PBODY FULLSTACK ACADEMY

</h1>


<p>

AI Powered Engineering Academy

</p>


</div>






<div className="authCard">



<div className="authHeader">


<span>

🚀 Join The Future

</span>



<h2>

Create Engineer Account

</h2>



<p>

Start your professional software engineering journey.

</p>


</div>






<form onSubmit={handleRegister}>


<div className="inputGroup">

<label>

Full Name

</label>


<input

name="name"

value={form.name}

onChange={handleChange}

placeholder="Your full name"

/>


</div>






<div className="inputGroup">

<label>

Email Address

</label>


<input

name="email"

type="email"

value={form.email}

onChange={handleChange}

placeholder="developer@email.com"

/>


</div>






<div className="inputGroup">

<label>

Password

</label>


<input

name="password"

type="password"

value={form.password}

onChange={handleChange}

placeholder="Create password"

/>


</div>







<div className="inputGroup">

<label>

Confirm Password

</label>


<input

name="confirmPassword"

type="password"

value={form.confirmPassword}

onChange={handleChange}

placeholder="Confirm password"

/>


</div>





{
error &&

<p className="authError">

{error}

</p>

}




<button

className="authButton"

disabled={loading}

>


{
loading
?
"Creating Account..."
:
"Create Academy Account 🚀"

}


</button>




</form>





<div className="authFooter">


<p>

Already an engineer?

<Link to="/login">

Login

</Link>


</p>


</div>





</div>





</div>



</div>



);


}