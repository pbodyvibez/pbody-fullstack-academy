import { 
  useState 
} from "react";

import { 
  Link,
  useNavigate,
  useLocation
} from "react-router-dom";


import {
  useAuth
} from "../context/AuthContext";


import Logo from "../assets/images/logo.png";


import "../styles/auth.css";



export default function Login(){



const navigate = useNavigate();

const location = useLocation();



const {
login
}=useAuth();




const [email,setEmail]=useState("");

const [password,setPassword]=useState("");

const [error,setError]=useState("");

const [loading,setLoading]=useState(false);







async function handleSubmit(e){


e.preventDefault();


setError("");

setLoading(true);




const result = await login(
email,
password
);



console.log(
"LOGIN RESULT:",
result
);





if(!result.success){


setError(
result.message
);


setLoading(false);


return;


}






navigate(

location.state?.from || "/dashboard",

{

replace:true

}

);



setLoading(false);



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

🚀 Welcome Back

</span>



<h2>

Login To Your Academy

</h2>



<p>

Continue your journey to becoming
a professional software engineer.

</p>



</div>








<form onSubmit={handleSubmit}>





<div className="inputGroup">


<label>

Email Address

</label>



<input

type="email"

placeholder="developer@email.com"

value={email}

onChange={
(e)=>setEmail(e.target.value)
}

required

/>


</div>







<div className="inputGroup">


<label>

Password

</label>



<input

type="password"

placeholder="Enter your password"

value={password}

onChange={
(e)=>setPassword(e.target.value)
}

required

/>


</div>








{
error &&

<p

style={{

color:"#ef4444",

marginBottom:20,

fontWeight:600

}}

>

{error}

</p>

}







<div className="authOptions">


<label>


<input

type="checkbox"

/>


Remember me


</label>





<a href="/#">

Forgot Password?

</a>



</div>









<button

className="authButton"

type="submit"

disabled={loading}

>


{

loading

?

"Logging in..."

:

"Login To Dashboard 🚀"

}



</button>







</form>









<div className="authFooter">


<p>


Don't have an account?


<Link to="/register">

Create Account

</Link>



</p>



</div>







</div>







</div>







</div>



);


}