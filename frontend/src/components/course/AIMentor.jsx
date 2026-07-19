import { useState } from "react";
import "./course.css";

export default function AIMentor({ course, lesson }) {

const [input,setInput] = useState("");

const [messages,setMessages] = useState([

{
role:"ai",
text:`👋 Welcome to PBody AI Engineering Mentor.

You are currently learning:

${course?.title || "Engineering"}

Lesson:

${lesson?.title || "Current Lesson"}

Ask me anything about this lesson.`
}

]);


const suggestions=[

"Explain this lesson simply",

"Give me real world examples",

"Debug my code",

"Create a practice exercise",

"Prepare interview questions",

"Summarize this lesson"

];



const sendMessage=(message)=>{

if(!message.trim()) return;


setMessages((prev)=>[

...prev,

{
role:"student",
text:message
},

{
role:"ai",
text:

`🤖 AI Mentor:

I understand your question about "${lesson?.title}".

This response system will connect to OpenAI API next.

For now, your mentor interface is ready.`

}

]);


setInput("");

};



return(

<div className="aiMentor">


<div className="aiHeader">

<div>

<h2>

🤖 AI Engineering Mentor

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

message.role==="ai"

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

suggestions.map((item)=>(


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

placeholder="Ask your AI mentor anything..."

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