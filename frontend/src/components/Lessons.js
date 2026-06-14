import { useState } from "react";

function Lessons() {

const lessons = [

{

title:"Introduction to HTML",

completed:true

},

{

title:"HTML Elements",

completed:true

},

{

title:"HTML Forms",

completed:false

},

{

title:"CSS Basics",

completed:false

},

{

title:"Flexbox",

completed:false

},

{

title:"Responsive Design",

completed:false

}

];



const completedLessons = lessons.filter(

lesson => lesson.completed

).length;



const progress =

Math.floor(

(completedLessons / lessons.length) * 100

);



return(

<div

style={{

padding:"50px",

color:"white",

maxWidth:"900px",

margin:"auto"

}}

>

<h1

style={{

fontSize:"55px",

textAlign:"center"

}}

>

📚 HTML & CSS Lessons

</h1>



<p

style={{

textAlign:"center",

fontSize:"22px",

color:"#cbd5e1"

}}

>

Complete all lessons to unlock your test.

</p>



<div

style={{

background:"#334155",

height:"20px",

borderRadius:"30px",

marginTop:"40px",

overflow:"hidden"

}}

>

<div

style={{

width:progress+"%",

height:"20px",

background:

"linear-gradient(90deg,#38bdf8,#2563eb)",

borderRadius:"30px"

}}

>

</div>

</div>



<h2

style={{

marginTop:"15px",

color:"#38bdf8"

}}

>

{progress}% Complete

</h2>



{

lessons.map((lesson,index)=>(

<div

key={index}

style={{

background:"#1e293b",

padding:"25px",

marginTop:"25px",

borderRadius:"20px",

display:"flex",

justifyContent:"space-between",

alignItems:"center"

}}

>

<h2>

{lesson.title}

</h2>



{

lesson.completed

?

<span

style={{

fontSize:"28px"

}}

>

✅

</span>

:

<button

style={{

padding:"12px 25px",

background:"#2563eb",

color:"white",

border:"none",

borderRadius:"10px",

cursor:"pointer"

}}

>

Start Lesson

</button>

}

</div>

))

}



{

progress===100

?

<div

style={{

background:"#14532d",

padding:"30px",

marginTop:"50px",

borderRadius:"20px",

textAlign:"center"

}}

>

<h1>

🎉 Test Unlocked

</h1>

<p>

You completed all lessons.

Take the course test now.

</p>

</div>

:

<div

style={{

background:"#7f1d1d",

padding:"30px",

marginTop:"50px",

borderRadius:"20px",

textAlign:"center"

}}

>

<h1>

🔒 Test Locked

</h1>

<p>

Complete all lessons first.

</p>

</div>

}

</div>

)

}

export default Lessons;