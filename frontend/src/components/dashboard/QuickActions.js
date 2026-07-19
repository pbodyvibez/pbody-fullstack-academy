export default function QuickActions(){


const actions=[

"📚 Browse Courses",

"🤖 Open AI Mentor",

"🏗 Build Project",

"🏆 View Certificates",

"💼 Career Center"

];


return(

<section className="quickActions">


<h2>

Quick Actions

</h2>


<div className="actionGrid">


{

actions.map(action=>(

<button 
key={action}
>

{action}

</button>

))

}


</div>


</section>

);


}