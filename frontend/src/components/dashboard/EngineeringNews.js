import "../../styles/dashboard.css";
export default function EngineeringNews(){


const news=[

"🚀 AI continues transforming software engineering workflows.",

"⚛ React keeps improving performance with new releases.",

"☁ Cloud engineering demand continues rising worldwide.",

"🔐 Cybersecurity remains one of the fastest-growing careers."

];


return(

<div className="workspaceCard">


<div className="cardHeader">

<h2>
🌍 Engineering News
</h2>

</div>



<ul className="newsList">


{

news.map((item,index)=>(

<li key={index}>

{item}

</li>

))

}


</ul>


</div>

);


}