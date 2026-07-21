import {useState} from "react";
import {Link,useNavigate} from "react-router-dom";

import AppLayout from "../components/layout/AppLayout";

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
login
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




if(
form.password !== form.confirmPassword
){

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




// AUTO LOGIN

const result =
await login(
form.email,
form.password
);



if(result.success){

navigate("/dashboard");

}



}

catch(error){


console.log(error);


setError(

error?.response?.data?.message ||

"Registration failed"

);


}


finally{

setLoading(false);

}


}







return(

<AppLayout>


<div className="authPage">


<div className="authBackground">

<div className="glowOne"></div>

<div className="glowTwo"></div>

</div>





<div className="authContainer">





<div className="authBrand">


<img
src={Logo}
alt="PBody Academy"
/>


<h1>
PBODY FULLSTACK ACADEMY
</h1>


<p>
AI Powered Engineering Academy
</p>


</div>







<div className="authCard registerCard">





<div className="authHeader">


<span>
🚀 Join The Future
</span>


<h2>
Create Engineer Account
</h2>


<p>
Start your journey into professional software engineering.
</p>


</div>






<form onSubmit={handleRegister}>


<div className="inputGroup">

<label>
Full Name
</label>


<input

name="name"

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



</AppLayout>

);


}