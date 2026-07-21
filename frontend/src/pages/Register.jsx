import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import AppLayout from "../components/layout/AppLayout";
import Logo from "../assets/images/logo.png";

import { registerUser, loginUser } from "../services/authService";

import { useAuth } from "../context/AuthContext";

import "../styles/auth.css";


export default function Register(){


const navigate = useNavigate();

const { setSession } = useAuth();



const [loading,setLoading] = useState(false);

const [error,setError] = useState("");



const [form,setForm] = useState({

name:"",
email:"",
password:"",
confirmPassword:""

});




const handleChange=(e)=>{

setForm({

...form,

[e.target.name]:e.target.value

});

};






const handleRegister=async(e)=>{


e.preventDefault();


setError("");



if(
!form.name ||
!form.email ||
!form.password ||
!form.confirmPassword
){

setError("Please complete all fields.");

return;

}




if(form.password !== form.confirmPassword){

setError("Passwords do not match.");

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


if(!loginResponse.success){

throw new Error(
loginResponse.message || "Auto login failed"
);

}


setSession(

loginResponse.user,

loginResponse.token

);





navigate("/dashboard");





}

catch(err){


console.error(err);



setError(

err?.response?.data?.message ||
"Registration failed"

);


}

finally{

setLoading(false);

}



};







return (

<AppLayout>

<div className="authPage">


<div className="authCard registerCard">



<div className="authBrand">


<img src={Logo} alt="PBody Academy"/>


<h1>
PBODY FULLSTACK ACADEMY
</h1>


<p>
AI Powered Engineering Academy
</p>


</div>





<h2>
Join The Engineering Community 🚀
</h2>





<form onSubmit={handleRegister}>


<input

name="name"

placeholder="Full Name"

value={form.name}

onChange={handleChange}

/>



<input

name="email"

type="email"

placeholder="Email"

value={form.email}

onChange={handleChange}

/>



<input

name="password"

type="password"

placeholder="Password"

value={form.password}

onChange={handleChange}

/>




<input

name="confirmPassword"

type="password"

placeholder="Confirm Password"

value={form.confirmPassword}

onChange={handleChange}

/>



{
error &&
<p className="authError">
{error}
</p>
}



<button disabled={loading}>

{
loading
?
"Creating Account..."
:
"Create Academy Account 🚀"
}

</button>



</form>




<p>

Already registered?

<Link to="/login">
Login
</Link>


</p>



</div>


</div>


</AppLayout>

);


}