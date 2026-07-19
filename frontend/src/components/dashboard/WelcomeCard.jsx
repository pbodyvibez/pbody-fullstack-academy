import "./dashboard.css";

export default function WelcomeCard({

user,

xp,

streak

}){

const firstName =

user?.name?.split(" ")[0] || "Engineer";

return(

<section className="welcomeCard">

<div>

<span className="welcomeBadge">

🚀 PBODY FULLSTACK ACADEMY

</span>

<h1>

Welcome back,

{firstName} 👋

</h1>

<p>

Continue your journey toward becoming a world-class software engineer.

</p>

</div>

<div className="welcomeStats">

<div>

<h2>{xp}</h2>

<span>Total XP</span>

</div>

<div>

<h2>{streak}</h2>

<span>Day Streak 🔥</span>

</div>

</div>

</section>

);

}