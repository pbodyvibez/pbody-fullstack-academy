import "../../styles/landing.css";

export default function Stats() {

const stats = [

{
number:"120+",
label:"Engineering Courses",
icon:"🎓"
},

{
number:"600+",
label:"Hands-on Projects",
icon:"💻"
},

{
number:"50K+",
label:"Community Members",
icon:"🌍"
},

{
number:"95%",
label:"Career Success",
icon:"🚀"
}

];

return(

<section className="premiumStats">

<div className="sectionTitle">

<span>OUR IMPACT</span>

<h2>Building Tomorrow's Software Engineers</h2>

<p>

Thousands of students are transforming their careers through
AI-powered engineering education.

</p>

</div>

<div className="premiumStatsGrid">

{

stats.map((item,index)=>(

<div
key={index}
className="premiumStatCard"
>

<div className="statGlow"></div>

<div className="statIcon">

{item.icon}

</div>

<h2>

{item.number}

</h2>

<p>

{item.label}

</p>

</div>

))

}

</div>

</section>

);

}