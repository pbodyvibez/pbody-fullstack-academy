function Courses(){

const courses = [

{

icon:"🌐",

title:"HTML & CSS",

desc:"Learn to build beautiful websites from scratch.",

progress:"100%",

width:"100%"

},

{

icon:"🟨",

title:"JavaScript",

desc:"Master the language of the web.",

progress:"75%",

width:"75%"

},

{

icon:"⚛",

title:"React",

desc:"Build modern interactive applications.",

progress:"40%",

width:"40%"

},

{

icon:"🟢",

title:"Node.js",

desc:"Create powerful backend applications.",

progress:"20%",

width:"20%"

},

{

icon:"🗄",

title:"Databases",

desc:"Learn MongoDB and SQL databases.",

progress:"0%",

width:"0%"

},

{

icon:"🤖",

title:"AI Development",

desc:"Build AI-powered applications.",

progress:"0%",

width:"0%"

}

]


return(

<div

style={{

padding:"50px",

color:"white",

textAlign:"center"

}}

>

<h1

style={{

fontSize:"60px"

}}

>

📚 Our Courses

</h1>


<p

style={{

fontSize:"22px",

color:"#cbd5e1",

marginBottom:"50px"

}}

>

Learn modern technologies and become a professional developer.

</p>



<div

style={{

display:"flex",

flexWrap:"wrap",

justifyContent:"center",

gap:"30px"

}}

>

{

courses.map((course,index)=>(

<div

key={index}

style={{

width:"320px",

background:"#1e293b",

padding:"30px",

borderRadius:"25px",

boxShadow:"0 0 25px rgba(0,0,0,0.3)"

}}

>

<h1

style={{

fontSize:"65px"

}}

>

{course.icon}

</h1>


<h2>

{course.title}

</h2>


<p

style={{

color:"#cbd5e1",

lineHeight:"30px"

}}

>

{course.desc}

</p>



<div

style={{

background:"#334155",

height:"15px",

borderRadius:"30px",

marginTop:"20px",

overflow:"hidden"

}}

>

<div

style={{

width:course.width,

height:"15px",

background:

"linear-gradient(90deg,#38bdf8,#2563eb)",

borderRadius:"30px"

}}

>

</div>

</div>


<p

style={{

marginTop:"10px",

fontWeight:"bold",

color:"#38bdf8"

}}

>

{course.progress} Complete

</p>



<button

style={{

marginTop:"20px",

padding:"15px 35px",

background:"#2563eb",

color:"white",

border:"none",

borderRadius:"12px",

fontSize:"18px",

cursor:"pointer"

}}

>

Start Course

</button>

</div>

))

}

</div>

</div>

)

}

export default Courses;