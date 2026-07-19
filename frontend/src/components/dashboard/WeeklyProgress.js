import "../../styles/dashboard.css";
export default function WeeklyProgress(){


const progress = [

{
day:"Mon",
value:65
},

{
day:"Tue",
value:40
},

{
day:"Wed",
value:85
},

{
day:"Thu",
value:70
},

{
day:"Fri",
value:50
},

{
day:"Sat",
value:90
},

{
day:"Sun",
value:35
}

];


return (

<div className="workspaceCard">


<div className="cardHeader">

<h2>
📈 Weekly Progress
</h2>

<span>
This Week
</span>

</div>



<div className="weeklyBars">


{

progress.map((item)=>(

<div 
key={item.day}
className="weeklyItem"
>


<span>
{item.day}
</span>


<div className="bar">


<div

style={{
height:`${item.value}%`
}}

/>


</div>


</div>

))

}


</div>


</div>

);


}