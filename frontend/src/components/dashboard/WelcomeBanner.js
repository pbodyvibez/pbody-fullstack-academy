import "../../styles/dashboard.css";
import Logo from "../../assets/images/logo.png";

export default function WelcomeBanner({ user, data }) {

const xp = data?.xp || 0;

const level = data?.level || 1;

const nextXP = data?.nextXP || 1000;

const percent = Math.min((xp / nextXP) * 100,100);

return(

<section className="workspaceHero">

<div className="heroContent">

<div className="heroBadge">

<img
src={Logo}
alt="PBody FullStack Academy"
/>

<span>

PBODY FULLSTACK ACADEMY

</span>

</div>


<h1>

Welcome Back,

<br/>

{user?.name || "Engineer"} 👋

</h1>


<p>

Continue mastering software engineering,
build real-world projects,
earn industry-ready certificates,
and prepare for high-paying engineering careers with AI-powered learning.

</p>


<div className="heroButtons">

<button>

📚 Continue Learning

</button>

<button className="outline">

🤖 Open AI Mentor

</button>

</div>

</div>



<div className="heroXP">

<div className="xpCircle">

<svg>

<circle
cx="80"
cy="80"
r="68"
/>

<circle
className="progressCircle"
cx="80"
cy="80"
r="68"
style={{
strokeDashoffset:
427 -
(427 * percent) / 100
}}
/>

</svg>

<div>

<h2>

{level}

</h2>

<span>

LEVEL

</span>

</div>

</div>

<h3>

{xp} XP

</h3>

<small>

{nextXP - xp} XP until Level {level + 1}

</small>

</div>

</section>

);

}