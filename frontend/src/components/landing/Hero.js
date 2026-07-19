import { useNavigate } from "react-router-dom";

import Logo from "../../assets/images/logo.png";
import developerHero from "../../assets/images/developerhero-image.png";

import "./Hero.css";


export default function Hero(){


const navigate = useNavigate();



return(

<section className="hero">



<div className="hero-left">



<div className="heroBadge">


<img

src={Logo}

alt="PBody FullStack Academy Logo"

/>


<span>

The World's Next Generation Engineering Academy

</span>


</div>






<h1>

Learn.

<br/>

Build.

<br/>

<span>

Innovate.

</span>

</h1>







<p>

<strong>PBody FullStack Academy</strong> is an AI-powered engineering
platform designed to transform beginners into professional software
engineers through structured learning, real-world projects,
AI mentorship and career-focused training.

</p>








<div className="hero-buttons">



<button

className="primary-btn"

onClick={()=>navigate("/learning")}

>

🚀 Start Learning

</button>





<button

className="secondary-btn"

onClick={()=>navigate("/courses")}

>

📚 Explore Courses

</button>




</div>









<div className="hero-stats">



<div>

<h2>

120+

</h2>

<span>

Courses

</span>

</div>






<div>

<h2>

500+

</h2>

<span>

Projects

</span>

</div>







<div>

<h2>

AI

</h2>

<span>

Mentorship

</span>

</div>





</div>







</div>









<div className="hero-right">



<div className="developerHeroBox">



<img

src={developerHero}

alt="PBody FullStack Academy Developer"

/>



</div>



</div>






</section>


);


}