import { Link } from "react-router-dom";

import Logo from "../../assets/images/logo.png";

import { useAuth } from "../../context/AuthContext";

import "./Navbar.css";



export default function Navbar(){


const {
user,
logout
}=useAuth();



return(


<nav className="navbar">





<div className="navBrand">


<Link to="/home">


<img

src={Logo}

alt="PBODY"

/>



<span>

PBody FullStack Academy

</span>



</Link>


</div>








<div className="navLinks">


<Link to="/home">

Home

</Link>





<Link to="/pricing">

Pricing

</Link>






{
user &&

<>


<Link to="/courses">

Courses

</Link>



<Link to="/learning">

Learning Hub

</Link>




<Link to="/ai">

AI Mentor 🤖

</Link>



<Link to="/dashboard">

Dashboard

</Link>



</>

}






</div>









<div className="navActions">





{

user ?



<>


<Link

className="loginButton"

to="/dashboard"

>

Continue Learning

</Link>




<button

className="logoutNav"

onClick={logout}

>

Logout

</button>



</>



:

<>


<Link

className="loginButton"

to="/login"

>

Login

</Link>




<Link

className="registerButton"

to="/register"

>

Register

</Link>



</>



}





</div>







</nav>


);


}