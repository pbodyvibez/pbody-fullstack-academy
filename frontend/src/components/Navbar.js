function Navbar({ setPage }) {

return (

<nav

style={{

background:"#1e293b",

padding:"20px",

borderRadius:"20px",

display:"flex",

justifyContent:"space-between",

alignItems:"center",

marginBottom:"30px"

}}

>

<h1

style={{

color:"#38bdf8",

fontSize:"32px",

cursor:"pointer",

margin:0

}}

onClick={() => setPage("home")}

>

🚀 PBody Academy

</h1>



<div

style={{

display:"flex",

gap:"25px",

color:"white",

fontWeight:"bold",

fontSize:"18px",

alignItems:"center"

}}

>

<span

style={{cursor:"pointer"}}

onClick={() => setPage("home")}

>

Home

</span>



<span

style={{cursor:"pointer"}}

onClick={() => setPage("courses")}

>

Courses

</span>



<span

style={{cursor:"pointer"}}

onClick={() => setPage("lessons")}

>

Lessons

</span>



<span

style={{cursor:"pointer"}}

onClick={() => setPage("quiz")}

>

Quiz

</span>



<span

style={{cursor:"pointer"}}

onClick={() => setPage("dashboard")}

>

Dashboard

</span>



<span

style={{cursor:"pointer"}}

onClick={() => setPage("ai")}

>

AI Tutor

</span>



<span

style={{cursor:"pointer"}}

onClick={() => setPage("certificate")}

>

Certificates

</span>



<span

style={{cursor:"pointer"}}

onClick={() => setPage("login")}

>

Login

</span>

</div>

</nav>

)

}

export default Navbar;