function Dashboard(){

return(

<div

style={{

color:"white",

padding:"40px"

}}

>

<h1

style={{

fontSize:"50px"

}}

>

👋 Welcome Lucky

</h1>

<p

style={{

fontSize:"22px",

color:"#cbd5e1"

}}

>

Keep learning and keep building.

</p>


<div

style={{

display:"flex",

gap:"30px",

marginTop:"50px",

flexWrap:"wrap"

}}

>

<div

style={{

background:"#1e293b",

padding:"30px",

borderRadius:"20px",

width:"250px"

}}

>

<h1>📚</h1>

<h2>Courses</h2>

<h1>6</h1>

<p>Courses Enrolled</p>

</div>


<div

style={{

background:"#1e293b",

padding:"30px",

borderRadius:"20px",

width:"250px"

}}

>

<h1>🏆</h1>

<h2>Certificates</h2>

<h1>2</h1>

<p>Certificates Earned</p>

</div>


<div

style={{

background:"#1e293b",

padding:"30px",

borderRadius:"20px",

width:"250px"

}}

>

<h1>📈</h1>

<h2>Progress</h2>

<h1>80%</h1>

<p>Learning Progress</p>

</div>

</div>


<div

style={{

marginTop:"60px",

background:"#1e293b",

padding:"30px",

borderRadius:"20px"

}}

>

<h2>

Recent Activity

</h2>

<ul

style={{

fontSize:"20px",

lineHeight:"45px"

}}

>

<li>✅ Completed HTML & CSS</li>

<li>✅ Completed JavaScript</li>

<li>🚀 Started React Course</li>

<li>🏆 Earned First Certificate</li>

</ul>

</div>

</div>

)

}

export default Dashboard;