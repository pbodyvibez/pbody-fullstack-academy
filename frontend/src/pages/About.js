import FounderImage from "../assets/images/founder.png";

import "../styles/about.css";


export default function About(){


return(


<div className="about-page">



<section className="founder-hero">



<div className="founder-image-box">


<img

src={FounderImage}

alt="Precious Kenneth Sampson - Founder of PBody FullStack Academy"

/>


</div>





<div className="founder-content">


<span className="about-badge">

🚀 Founder Story

</span>



<h1>

Precious Kenneth Sampson

</h1>



<h3>

Founder | CEO | Lead Software Engineer

</h3>



<p>

Also known as <strong>PBody</strong>, Precious Kenneth Sampson is a
multidisciplinary problem solver, mechanical engineer, full stack
developer, entrepreneur and creative visionary passionate about
building solutions that improve human lives.

</p>



<p>

From a young age, he developed a passion for solving problems and
understanding how things work. His journey through engineering,
technology and creativity has shaped the vision behind PBody FullStack
Academy.

</p>



<p>

Today, by the grace of God, he combines engineering experience,
software development skills and a passion for teaching to help others
become creators of solutions for the future.

</p>



</div>


</section>







<section className="about-cards">



<div className="about-card">


<h2>

🌍 Our Mission

</h2>


<p>

To provide practical, accessible and industry-focused technology
education that transforms beginners into confident engineers capable
of building real-world solutions.

</p>


</div>







<div className="about-card">


<h2>

🚀 Our Vision

</h2>


<p>

To train good stewards of knowledge who use technology, creativity and
innovation to solve real-world problems and positively impact society.

</p>


</div>







<div className="about-card">


<h2>

💡 Why PBody Exists

</h2>


<p>

Coming from a small community where opportunities were limited,
Precious understands the power of access, mentorship and education.
PBody FullStack Academy was created to help people discover their
potential and build meaningful careers.

</p>


</div>




</section>










<section className="founder-message">



<h2>

A Message From The Founder

</h2>



<p>

"Failure is not an option when people depend on you. The journey may
not always be easy, but giving up is never the solution.

My dream has always been to solve problems and create opportunities
for others. PBody FullStack Academy represents my commitment to
helping people discover their abilities, develop valuable skills and
create solutions for the world."

</p>



<h4>

— Precious Kenneth Sampson (PBody)

</h4>



</section>



</div>


);


}