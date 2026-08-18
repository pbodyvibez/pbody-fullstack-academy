import {
useMemo
} from "react";


import {
useAuth
} from "../context/AuthContext";



import "../styles/leaderboard.css";





export default function Leaderboard(){



const {
user
}=useAuth();





const rankings = useMemo(()=>[


{
rank:1,
name:"Alex Johnson",
level:18,
xp:24500,
badge:"🥇",
role:"FullStack Engineer"
},


{
rank:2,
name:"Sarah Williams",
level:16,
xp:21200,
badge:"🥈",
role:"Frontend Engineer"
},



{
rank:3,
name:"Michael Brown",
level:15,
xp:19800,
badge:"🥉",
role:"Backend Engineer"
},



{
rank:4,
name:"You",
level:user?.level || 1,
xp:user?.xp || 0,
badge:"🚀",
role:"Student Developer"
}



],[
user
]);






return(



<div className="leaderboardPage">





<section className="leaderHero">



<div>


<span>

🏆 PBODY ENGINEERING RANKINGS

</span>



<h1>

Climb The Developer Leaderboard

</h1>



<p>

Earn XP, complete courses, pass quizzes and compete with engineers around the world.

</p>


</div>



<div className="trophy">


🏆

</div>



</section>









<section className="leaderStats">



<div>


<h2>

10,000+

</h2>


<p>

Active Engineers

</p>


</div>





<div>


<h2>

250K+

</h2>


<p>

XP Earned

</p>


</div>






<div>


<h2>

500+

</h2>


<p>

Projects Completed

</p>


</div>




</section>









<section className="rankingCard">



<h2>

Top Engineers

</h2>





<div className="rankingList">



{

rankings.map((student)=>(



<div

key={student.rank}

className={

student.name==="You"

?

"rankingItem currentStudent"

:

"rankingItem"

}

>



<div className="rankNumber">


{student.badge}


</div>






<div className="studentInfo">


<h3>

{student.name}

</h3>


<p>

{student.role}

</p>


</div>






<div className="studentLevel">


<strong>

Level {student.level}

</strong>


<span>

{student.xp.toLocaleString()} XP

</span>


</div>




</div>



))

}





</div>






</section>








<section className="leaderTips">



<h2>

🚀 How To Reach The Top

</h2>



<div className="tipGrid">



<div>

✅ Complete lessons

</div>



<div>

🔥 Maintain learning streaks

</div>



<div>

🧠 Pass quizzes

</div>



<div>

💻 Build projects

</div>



<div>

🏅 Earn certificates

</div>



<div>

🤖 Use AI Mentor

</div>




</div>



</section>







</div>




);



}