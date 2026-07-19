import { Link } from "react-router-dom";

export default function NotFound(){

return(

<div
style={{
height:"100vh",
display:"flex",
flexDirection:"column",
justifyContent:"center",
alignItems:"center",
background:"#071426",
color:"#fff"
}}
>

<h1>

404

</h1>

<h2>

Page Not Found

</h2>

<Link

to="/"

style={{

marginTop:"20px",

color:"#00d4ff",

textDecoration:"none"

}}

>

Return Home

</Link>

</div>

);

}