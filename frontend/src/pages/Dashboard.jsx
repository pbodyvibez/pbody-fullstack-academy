import { Link } from "react-router-dom";

import { useAuth } from "../context/AuthContext";
import { useProgress } from "../context/ProgressContext";

import Logo from "../assets/images/logo.png";

import "../styles/dashboard.css";



export default function Dashboard(){


const { user } = useAuth();



const {

xp = 0,

level = 1,

streak = 0,

completedLessons = 0,

completedCourses = 0,

completedProjects = 0,

completedQuizzes = 0,

certificates = 0

} = useProgress() || {};





const progress = Math.min(

100,

Math.floor((xp / 5000) * 100)

);







return(



<div className="dashboardPage">







<section className="dashboardHero">



<div className="dashboardBrand">



<img

src={Logo}

alt="PBody FullStack Academy"

/>



<div>

<span>

PBODY FULLSTACK ACADEMY

</span>


<p>

AI Powered Engineering Platform

</p>


</div>



</div>








<div className="heroContent">



<div className="heroBadge">

ENGINEER DASHBOARD

</div>






<h1>


Welcome back,

<br/>


<strong>

{user?.name || "Engineer"}

</strong>


</h1>






<p>

Continue building your software engineering career with courses, projects, AI mentorship and professional certifications.

</p>





<Link

to="/learning-hub"

className="primaryDashboardButton"

>

Continue Learning

</Link>



</div>








<div className="heroLevel">


<div className="levelCircle">


<strong>

{level}

</strong>



<span>

LEVEL

</span>


</div>



</div>







</section>









<section className="dashboardStats">



<div className="statCard">

<h2>{xp}</h2>

<p>Total XP</p>

</div>




<div className="statCard">

<h2>{streak}</h2>

<p>Learning Streak</p>

</div>




<div className="statCard">

<h2>{completedLessons}</h2>

<p>Lessons Completed</p>

</div>




<div className="statCard">

<h2>{completedCourses}</h2>

<p>Courses</p>

</div>




<div className="statCard">

<h2>{completedProjects}</h2>

<p>Projects</p>

</div>




<div className="statCard">

<h2>{completedQuizzes}</h2>

<p>Quizzes</p>

</div>




<div className="statCard">

<h2>{certificates}</h2>

<p>Certificates</p>

</div>




</section>









<section className="dashboardGrid">






<div className="dashboardCard">


<div className="cardHeader">


<h2>

Learning Progress

</h2>


</div>





<div className="progressBar">


<div

className="progressFill"

style={{

width:`${progress}%`

}}


/>


</div>




<h3>

{progress}% Complete

</h3>



<p>

Your engineering journey is progressing. Keep building your skills.

</p>



</div>









<div className="dashboardCard">


<h2>

Learning Hub

</h2>



<p>

Access structured frontend, backend and fullstack engineering paths.

</p>



<Link

to="/learning-hub"

className="dashboardButton"

>

Open Learning Hub

</Link>


</div>









<div className="dashboardCard">


<h2>

Project Laboratory

</h2>



<p>

Build real-world applications and strengthen your developer portfolio.

</p>



<Link

to="/projects"

className="dashboardButton"

>

Build Projects

</Link>



</div>









<div className="dashboardCard">


<h2>

Professional Profile

</h2>



<p>

Manage your developer identity, certificates and career progress.

</p>



<Link

to="/profile"

className="dashboardButton"

>

View Profile

</Link>



</div>







</section>









<section className="activityCard">


<h2>

Recent Academy Activity

</h2>





<div className="activityItem">

Completed academy login session

</div>




<div className="activityItem">

Continue your engineering pathway

</div>




<div className="activityItem">

Create your next software project

</div>




<div className="activityItem">

Earn your next professional certificate

</div>




</section>








</div>


);


}