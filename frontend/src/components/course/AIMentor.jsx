import { useState } from "react";

import "./course.css";



export default function AIMentor({

course,

lesson

}){





const [input,setInput] = useState("");




const [messages,setMessages] = useState([



{

role:"ai",

text:

`Welcome to your AI Engineering Mentor.

You are learning:

${course?.title || "Engineering"}

Current lesson:

${lesson?.title || "Select a lesson"}

Ask questions about concepts, code, debugging or projects.`

}



]);








const suggestions=[


"Explain this concept simply",

"Give me a real world example",

"Help debug my code",

"Create a practice challenge",

"Generate interview questions"


];









const sendMessage=(message)=>{



if(!message.trim()) return;





setMessages(prev=>[

...prev,


{

role:"student",

text:message

},



{

role:"ai",

text:

`I received your question about "${lesson?.title || "this lesson"}".

Your AI mentor connection is ready for API integration.`

}



]);




setInput("");



};








return(



<div className="aiMentor">







<div className="aiHeader">



<div>


<h2>

AI Engineering Mentor

</h2>



<p>

Your personal coding assistant

</p>


</div>




<span>

ONLINE

</span>




</div>









<div className="chatWindow">





{

messages.map((message,index)=>(



<div



key={index}



className={

message.role === "ai"

?

"aiMessage"

:

"studentMessage"

}



>


{message.text}



</div>



))


}





</div>









<div className="aiSuggestions">





{

suggestions.map(item=>(



<button


key={item}


onClick={()=>sendMessage(item)}



>

{item}


</button>



))


}






</div>









<div className="aiInput">





<input



value={input}



onChange={(e)=>setInput(e.target.value)}



placeholder="Ask your mentor..."



onKeyDown={(e)=>{


if(e.key==="Enter"){

sendMessage(input);

}


}}



/>







<button



onClick={()=>sendMessage(input)}



>

Send

</button>







</div>








</div>



);


}