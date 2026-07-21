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



if(form.password.length < 6){


setError(
"Password must be at least 6 characters."
);


return;


}






try{


setLoading(true);





const registerResponse = await registerUser({

name:form.name,

email:form.email,

password:form.password

});



console.log(
"REGISTER SUCCESS:",
registerResponse
);







const loginResponse = await loginUser({

email:form.email,

password:form.password

});





if(!loginResponse.token){


throw new Error(
"Login session could not be created."
);


}





localStorage.setItem(

"pbody_session",

JSON.stringify({

user:loginResponse.user,

token:loginResponse.token

})

);






navigate("/dashboard",{

replace:true

});





}

catch(err){


console.error(err);



setError(

err?.response?.data?.message ||

err.message ||

"Registration failed"

);



}

finally{


setLoading(false);


}



};








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

alt="PBody FullStack Academy"

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

🚀 Start Your Journey

</span>




<h2>

Join The Engineering Community

</h2>




<p>

Create your account and begin your professional software engineering journey.

</p>



</div>









<form onSubmit={handleRegister}>






<div className="inputGroup">


<label>

Full Name

</label>



<input

type="text"

name="name"

placeholder="Enter your full name"

value={form.name}

onChange={handleChange}

/>



</div>









<div className="inputGroup">


<label>

Email Address

</label>



<input

type="email"

name="email"

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

type="password"

name="password"

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

type="password"

name="confirmPassword"

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


Already have an account?


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