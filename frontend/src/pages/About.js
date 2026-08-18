import FounderImage from "../assets/images/founder.png";

import "../styles/about.css";


export default function About(){


return(


<div className="about-page">


<section className="founder-hero">


<div className="founder-image-box">


<img

src={FounderImage}

alt="Precious Kenneth Sampson Founder of PBody FullStack Academy"

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

Founder • CEO • Lead Software Engineer

</h3>



<p>

Also known as <strong>PBody</strong>, Precious Kenneth Sampson is a
multidisciplinary engineer, full stack developer, entrepreneur and
creative problem solver passionate about using technology to build
solutions that improve lives.

</p>



<p>

His journey through mechanical engineering, software development and
innovation created the foundation for PBody FullStack Academy — a
platform designed to help people transform ideas into real-world
technology solutions.

</p>



<p>

Through engineering experience, practical development skills and a
passion for mentorship, he is building an academy where students do not
only learn code, but learn how to think like professional engineers.

</p>


</div>


</section>







<section className="about-cards">



<div className="about-card">


<h2>

🌍 Our Mission

</h2>


<p>

To provide world-class practical technology education that transforms
beginners into confident engineers through structured learning,
real-world projects, AI mentorship and career-focused training.

</p>


</div>





<div className="about-card">


<h2>

🚀 Our Vision

</h2>


<p>

To build a global engineering community of innovative problem solvers
who use technology, creativity and knowledge to create meaningful
solutions for humanity.

</p>


</div>





<div className="about-card">


<h2>

💡 Why PBody Exists

</h2>


<p>

PBody FullStack Academy was created from the belief that talent exists
everywhere, but access to quality mentorship and practical education
can change everything.

</p>


</div>



</section>







<section className="founder-message">


<h2>

A Message From The Founder

</h2>



<p>

"Technology is not only about writing code. It is about solving
problems, creating opportunities and improving lives.

My mission with PBody FullStack Academy is to help people discover
their potential, develop valuable engineering skills and become
builders of the future."

</p>



<h4>

— Precious Kenneth Sampson (PBody)

</h4>



</section>



</div>


);


}