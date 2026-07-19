import "../../styles/dashboard.css";


export default function StatsCards({data}){


const cards=[

{
icon:"🔥",
title:"Daily Streak",
value:`${data?.streak || 1} Days`,
text:"Keep learning daily to maintain your engineering momentum."
},

{
icon:"📚",
title:"Lessons Completed",
value:data?.completed || 0,
text:"Every completed lesson unlocks new engineering skills."
},

{
icon:"🏆",
title:"Certificates",
value:0,
text:"Complete professional programs to earn certificates."
},

{
icon:"⭐",
title:"Current XP",
value:data?.xp || 0,
text:"Gain experience points from every achievement."
}

];


return(

<section className="analyticsGrid">

{

cards.map((card,index)=>(

<div

className="analyticsCard"

key={index}

>


<div className="analyticsIcon">

{card.icon}

</div>


<h3>

{card.title}

</h3>


<h2>

{card.value}

</h2>


<p>

{card.text}

</p>


</div>

))

}

</section>

);

}