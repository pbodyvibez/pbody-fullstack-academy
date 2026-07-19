import { Link, useNavigate } from "react-router-dom";

import "./Footer.css";

import Logo from "../../assets/images/logo.png";


export default function Footer(){


const navigate = useNavigate();



return(


<footer className="footer">


<div className="footer-container">



<div className="footer-brand">


<div className="footerLogo">


<img
src={Logo}
alt="PBody FullStack Academy"
/>



<div>

<h2>
PBody
</h2>


<span>
FullStack Academy
</span>


</div>


</div>




<p>

An AI-powered engineering academy transforming beginners
into professional software engineers through structured courses,
real-world projects, AI mentorship and career-focused training.

</p>




<div className="footerSocial">


<a href="#">
LinkedIn
</a>


<a href="#">
GitHub
</a>


<a href="#">
YouTube
</a>


</div>


</div>






<div className="footer-links">


<h3>
Academy
</h3>



<Link to="/courses">
Courses
</Link>


<Link to="/learning">
Learning Hub
</Link>


<Link to="/ai">
AI Engineering Mentor
</Link>


</div>







<div className="footer-links">


<h3>
Company
</h3>



<Link to="/about">
About PBody
</Link>



<Link to="/community">
Community
</Link>



<Link to="/contact">
Contact Us
</Link>



<Link to="/privacy">
Privacy Policy
</Link>



<Link to="/terms">
Terms Of Service
</Link>



</div>







<div className="footer-contact">


<h3>
Contact
</h3>


<p>
📧 support@pbodyacademy.com
</p>


<p>
🌍 Global Online Academy
</p>


<p>
🚀 Learn Anywhere. Build Anywhere.
</p>




<button
onClick={()=>navigate("/contact")}
>

Contact Academy

</button>



</div>



</div>







<div className="footer-bottom">


<div>

© {new Date().getFullYear()}

<strong>
 PBody FullStack Academy
</strong>

</div>



<span>

Built for the next generation of software engineers 🚀

</span>


</div>



</footer>


);


}