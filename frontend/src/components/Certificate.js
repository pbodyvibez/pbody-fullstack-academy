function Certificate() {

const watermarkStyle = {

position:"absolute",

color:"rgba(30,58,138,0.05)",

fontWeight:"bold",

pointerEvents:"none"

}

return (

<div

style={{

maxWidth:"1100px",

margin:"40px auto",

padding:"70px",

position:"relative",

overflow:"hidden",

background:`

linear-gradient(

135deg,

#ffffff,

#eff6ff,

#dbeafe,

#fefce8

)

`,

border:"5px solid #f59e0b",

outline:"12px solid #1e3a8a",

borderRadius:"35px",

textAlign:"center",

boxShadow:"0 0 50px rgba(37,99,235,0.3)"

}}

>

{/* MANY WATERMARKS */}

<div style={{...watermarkStyle,top:"8%",left:"5%",fontSize:"80px"}}>

PBA

</div>


<div style={{...watermarkStyle,top:"20%",right:"5%",fontSize:"70px"}}>

PBA

</div>


<div style={{...watermarkStyle,top:"45%",left:"15%",fontSize:"100px"}}>

PBA

</div>


<div style={{...watermarkStyle,bottom:"15%",right:"10%",fontSize:"90px"}}>

PBA

</div>


<div style={{...watermarkStyle,top:"65%",left:"35%",fontSize:"80px"}}>

PBA

</div>


<div

style={{

...watermarkStyle,

top:"12%",

left:"28%",

fontSize:"28px",

letterSpacing:"5px"

}}

>

PBody Academy

</div>


<div

style={{

...watermarkStyle,

top:"30%",

left:"55%",

fontSize:"25px",

letterSpacing:"5px"

}}

>

PBody Academy

</div>


<div

style={{

...watermarkStyle,

bottom:"20%",

left:"18%",

fontSize:"30px",

letterSpacing:"5px"

}}

>

PBody Academy

</div>



{/* TOP CORNERS */}

<div

style={{

position:"absolute",

top:"25px",

left:"25px",

fontSize:"65px"

}}

>

🏆

</div>


<div

style={{

position:"absolute",

top:"25px",

right:"25px",

fontSize:"65px"

}}

>

🎓

</div>



{/* TITLE */}

<h1

style={{

fontSize:"68px",

color:"#1e3a8a",

marginBottom:"10px",

fontWeight:"bold",

position:"relative",

zIndex:2

}}

>

PBody Academy

</h1>


<p

style={{

fontSize:"20px",

letterSpacing:"8px",

color:"#475569",

fontWeight:"bold",

position:"relative",

zIndex:2

}}

>

BUILD • LEARN • DOMINATE

</p>



<h2

style={{

fontSize:"50px",

marginTop:"50px",

color:"#b45309",

letterSpacing:"8px",

position:"relative",

zIndex:2

}}

>

CERTIFICATE OF COMPLETION

</h2>



<p

style={{

fontSize:"28px",

marginTop:"50px",

color:"#334155",

position:"relative",

zIndex:2

}}

>

This certifies that

</p>



<h1

style={{

fontSize:"70px",

color:"#2563eb",

fontFamily:"cursive",

marginTop:"20px",

marginBottom:"20px",

position:"relative",

zIndex:2

}}

>

Lucky Kenneth

</h1>



<p

style={{

fontSize:"28px",

color:"#334155",

position:"relative",

zIndex:2

}}

>

has successfully completed

</p>



<h2

style={{

fontSize:"45px",

color:"#0f172a",

marginTop:"20px",

position:"relative",

zIndex:2

}}

>

React Fundamentals

</h2>



<p

style={{

fontSize:"24px",

marginTop:"25px",

color:"#475569",

position:"relative",

zIndex:2

}}

>

With distinction and outstanding performance

</p>



<div

style={{

width:"180px",

height:"180px",

borderRadius:"50%",

background:

"linear-gradient(135deg,#fde68a,#facc15,#f59e0b)",

margin:"50px auto",

display:"flex",

justifyContent:"center",

alignItems:"center",

fontSize:"90px",

boxShadow:"0 0 35px rgba(245,158,11,0.7)",

position:"relative",

zIndex:2

}}

>

🎖

</div>



<h3

style={{

color:"#2563eb",

fontSize:"30px",

position:"relative",

zIndex:2

}}

>

PBA-2026-0001

</h3>



<div

style={{

display:"flex",

justifyContent:"space-around",

marginTop:"70px",

flexWrap:"wrap",

position:"relative",

zIndex:2

}}

>

<div>

<div

style={{

width:"220px",

borderTop:"2px solid #334155",

margin:"auto"

}}

>

</div>

<h3>Founder</h3>

<p>Kenneth S. Precious</p>

</div>



<div>

<div

style={{

width:"220px",

borderTop:"2px solid #334155",

margin:"auto"

}}

>

</div>

<h3>Director</h3>

<p>PBody Academy</p>

</div>

</div>

</div>

)

}

export default Certificate;