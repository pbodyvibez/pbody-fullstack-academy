
import { useNavigate } from "react-router-dom";
import { useSubscription } from "../context/SubscriptionContext";
import { useProgress } from "../context/ProgressContext";
import { useAuth } from "../context/AuthContext";

import courses from "../data/courses";

import Logo from "../assets/images/logo.png";

import "../styles/dashboard.css";

console.log("Dashboard Loaded");

export default function Dashboard(){

const navigate = useNavigate();
const {

user

}=useAuth();



const {

isTrialActive,

isPremium,

subscription

}=useSubscription();



const {

progress

}=useProgress();




const completedLessons =

progress?.completedLessons?.length || 0;



const totalXP =

completedLessons * 50;



const learningProgress =

Math.min(

Math.round(

(completedLessons / 100) * 100

),

100

);





return(


<div className="dashboardPage">



<section className="dashboardHero">



<div className="dashboardHeroContent">



<div className="dashboardBrand">



<img

src={Logo}

alt="PBody FullStack Academy Logo"

/>



<div>


<h3>

PBODY FULLSTACK ACADEMY

</h3>


<span>

AI Powered Engineering Academy

</span>


</div>



</div>





<h1>

Welcome Back,

{user?.name || "Engineer"} 👋

</h1>



<p>

Continue building your software engineering career.

Master frontend, backend, AI and professional development skills.

</p>





<div className="dashboardActions">


<button

className="primaryButton"

onClick={()=>navigate("/learning")}

>

Continue Learning →

</button>



<button

className="secondaryButton"

onClick={()=>navigate("/ai")}

>

🤖 Ask AI Mentor

</button>


</div>



</div>






<div className="dashboardStatusCard">



<div className="statusLogo">


<img

src={Logo}

alt="logo"

/>


</div>



<h2>

{

isPremium

?

"Premium Engineer"

:

isTrialActive

?

"Free Trial Active"

:

"Student Account"

}

</h2>




<p>

{

isPremium

?

"You have full access to all premium engineering programs."

:

"Start your engineering journey with PBody Academy."

}

</p>





{
subscription?.status==="trial" &&

(

<div className="trialBadge">

🔥 Trial Access

</div>

)

}





{
isPremium &&

(

<div className="premiumBadge">

⭐ PRO MEMBER

</div>

)

}




</div>




</section>





<section className="dashboardStats">


<div className="dashboardStatCard">


<div>

⚡

</div>


<h2>

{totalXP}

</h2>


<p>

Total XP

</p>


</div>





<div className="dashboardStatCard">


<div>

📚

</div>


<h2>

{completedLessons}

</h2>


<p>

Lessons Completed

</p>


</div>





<div className="dashboardStatCard">


<div>

🔥

</div>


<h2>

7

</h2>


<p>

Day Streak

</p>


</div>




<div className="dashboardStatCard">


<div>

🏆

</div>


<h2>

0

</h2>


<p>

Certificates

</p>


</div>



</section>
<section className="dashboardMainGrid">



<div className="dashboardLargeCard continueLearningCard">



<div className="cardHeader">


<div>

<span>

🚀

</span>


<h2>

Continue Learning

</h2>


</div>



</div>





<p>

Pick up where you stopped and continue mastering professional engineering skills.

</p>





<div className="progressContainer">



<div className="progressTop">


<span>

Learning Progress

</span>


<strong>

{learningProgress}%

</strong>


</div>




<div className="progressBar">


<div

style={{

width:`${learningProgress}%`

}}

/>


</div>



</div>





<button

className="primaryButton"

onClick={()=>navigate("/courses")}

>

Resume Course →

</button>




</div>









<div className="dashboardLargeCard aiMentorCard">



<div className="cardHeader">


<div>

<span>

🤖

</span>


<h2>

AI Engineering Mentor

</h2>


</div>



</div>





<p>

Your personal AI mentor helps you understand concepts, debug code, design projects and prepare for engineering careers.

</p>





<div className="aiFeatures">


<div>

✓ Code Explanation

</div>


<div>

✓ Debug Assistance

</div>


<div>

✓ Project Guidance

</div>


<div>

✓ Career Advice

</div>



</div>





<button

className="secondaryButton"

onClick={()=>navigate("/ai")}

>

Open AI Mentor →

</button>



</div>







</section>









<section className="dashboardPrograms">



<div className="sectionTitle">


<h2>

Your Engineering Programs

</h2>



<p>

Master the skills required to become a professional developer.

</p>



</div>







<div className="programGrid">


{

courses.slice(0,4).map(course=>(



<div

className="programCard"

key={course.id}

>



<div className="programIcon">

{

course.icon || "💻"

}

</div>




<h3>

{course.title}

</h3>




<p>

{course.description}

</p>





<div className="courseStatus">


<span>

{

course.level || "Beginner"

}

</span>



{

course.premium &&

(

<b>

⭐ Premium

</b>

)

}



</div>



</div>



))

}



</div>



</section>









<section className="dashboardBottomGrid">





<div className="dashboardLargeCard roadmapCard">



<div className="cardHeader">


<h2>

🛣️ Career Roadmap

</h2>


</div>





<div className="roadmapItem active">


<span>

1

</span>


<div>

<h3>

Frontend Engineer

</h3>

<p>

HTML, CSS, JavaScript, React

</p>

</div>


</div>







<div className="roadmapItem">


<span>

2

</span>


<div>

<h3>

Full Stack Engineer

</h3>


<p>

Node.js, APIs, Databases

</p>


</div>


</div>







<div className="roadmapItem">


<span>

3

</span>


<div>

<h3>

Senior Developer

</h3>


<p>

Architecture, Cloud, AI Systems

</p>


</div>


</div>




</div>







<div className="dashboardLargeCard activityCard">



<div className="cardHeader">


<h2>

📈 Recent Activity

</h2>


</div>





<div className="activityItem">


<span>

✅

</span>


<p>

Started your engineering journey

</p>


</div>




<div className="activityItem">


<span>

📚

</span>


<p>

Continue your next lesson

</p>


</div>




<div className="activityItem">


<span>

🤖

</span>


<p>

AI Mentor available 24/7

</p>


</div>





</div>





</section>
<section className="premiumUpgradeSection">


<div className="upgradeContent">



<div className="upgradeLogo">


<img

src={Logo}

alt="PBody FullStack Academy"

/>


</div>





<div>


<h2>

Upgrade To PBody Pro ⭐

</h2>


<p>

Unlock unlimited AI Mentor access, premium projects, professional certificates, career tools and advanced engineering programs.

</p>


</div>



<button

className="upgradeButton"

onClick={()=>navigate("/pricing")}

>

Upgrade Now →

</button>




</div>



</section>







<section className="dashboardQuote">


<div>


<img

src={Logo}

alt="PBody Logo"

/>



<h2>

Build. Learn. Engineer. Transform.

</h2>



<p>

PBody FullStack Academy is designed to take you from beginner to professional engineer through practical learning and real-world projects.

</p>


</div>


</section>


</div>


);


}