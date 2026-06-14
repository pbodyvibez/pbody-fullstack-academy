import { useState } from "react";

function Quiz({setPage}) {

const [answer,setAnswer] = useState("");

const [result,setResult] = useState("");

const submitQuiz = () => {

if(answer==="A"){

setResult("PASS");

}

else{

setResult("FAIL");

}

}

return(

<div

style={{

maxWidth:"900px",

margin:"50px auto",

padding:"40px",

background:"#1e293b",

borderRadius:"25px",

color:"white"

}}

>

<h1

style={{

fontSize:"50px",

textAlign:"center"

}}

>

📝 HTML & CSS Quiz

</h1>



<h2

style={{

marginTop:"50px"

}}

>

Question 1

</h2>



<p

style={{

fontSize:"25px",

lineHeight:"45px"

}}

>

What does HTML stand for?

</p>



<div style={{marginTop:"30px"}}>

<label>

<input

type="radio"

name="quiz"

value="A"

onChange={(e)=>setAnswer(e.target.value)}

/>

{" "}

A. Hyper Text Markup Language

</label>

</div>



<div style={{marginTop:"20px"}}>

<label>

<input

type="radio"

name="quiz"

value="B"

onChange={(e)=>setAnswer(e.target.value)}

/>

{" "}

B. Hyper Tool Machine Language

</label>

</div>



<div style={{marginTop:"20px"}}>

<label>

<input

type="radio"

name="quiz"

value="C"

onChange={(e)=>setAnswer(e.target.value)}

/>

{" "}

C. Home Tool Markup Language

</label>

</div>



<button

onClick={submitQuiz}

style={{

marginTop:"40px",

padding:"15px 40px",

fontSize:"20px",

background:"#2563eb",

color:"white",

border:"none",

borderRadius:"15px",

cursor:"pointer"

}}

>

Submit Test

</button>




{

result==="PASS"

&&

<div

style={{

background:"#14532d",

padding:"30px",

marginTop:"40px",

borderRadius:"20px",

textAlign:"center"

}}

>

<h1>

🎉 Congratulations

</h1>



<h2>

You Passed!

</h2>



<p>

Certificate is now unlocked.

</p>



<button

onClick={()=>setPage("certificate")}

style={{

marginTop:"25px",

padding:"15px 40px",

background:"gold",

border:"none",

borderRadius:"15px",

fontSize:"20px",

cursor:"pointer"

}}

>

🏆 View Certificate

</button>

</div>

}




{

result==="FAIL"

&&

<div

style={{

background:"#7f1d1d",

padding:"30px",

marginTop:"40px",

borderRadius:"20px",

textAlign:"center"

}}

>

<h1>

❌ Failed

</h1>



<p>

You did not pass.

Try again.

</p>

</div>

}



</div>

)

}

export default Quiz;