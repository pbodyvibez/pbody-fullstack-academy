import {
useState
} from "react";

import {
useAuth
} from "../context/AuthContext";

import {
sendAIMessage
} from "../services/aiService";

import "../styles/aiMentor.css";


export default function AIMentor(){

const {
token,
user
}=useAuth();


const [message,setMessage]=useState("");

const [loading,setLoading]=useState(false);


const [chat,setChat]=useState([

{
role:"ai",
text:
"Welcome Engineer. I am your PBody AI Engineering Mentor. Ask me about coding, debugging, architecture, projects, or career growth."
}

]);



const suggestions=[

"Explain React hooks",

"Review my JavaScript code",

"Suggest a fullstack project",

"Explain backend architecture",

"Prepare me for developer interviews"

];



async function sendMessage(){


if(!message.trim()) return;


const userMessage=message;


setChat(prev=>[

...prev,

{
role:"user",
text:userMessage
}

]);


setMessage("");

setLoading(true);



try{


const data=await sendAIMessage({

message:userMessage,

student:{

level:1,

xp:0,

name:user?.name

},

token

});



setChat(prev=>[

...prev,

{

role:"ai",

text:data.reply || "No response received."

}

]);


}

catch(error){


console.error(error);


setChat(prev=>[

...prev,

{

role:"ai",

text:"AI Mentor is temporarily unavailable. Please try again."

}

]);


}

finally{

setLoading(false);

}


}



return(


<div className="aiMentorPage">


<section className="aiHero">


<div>


<div className="aiBadge">

PBODY AI ENGINEERING MENTOR

</div>



<h1>

Your Personal Engineering Intelligence Partner

</h1>



<p>

Learn faster, solve problems smarter, and build professional software with AI guidance designed for future engineers.

</p>


</div>



<div className="aiBrandMark">

AI

</div>


</section>




<div className="aiWorkspace">



<div className="aiChatCard">


<div className="chatHeader">

<div>

<h2>

Engineering Mentor

</h2>

<p>

Powered by PBody Intelligence

</p>

</div>


<span>

Online

</span>


</div>




<div className="chatMessages">


{

chat.map((item,index)=>(


<div

key={index}

className={
item.role==="user"
?
"userMessage"
:
"aiMessage"
}

>

{item.text}

</div>


))

}



{

loading &&

<div className="aiMessage">

Analyzing like an engineer...

</div>

}


</div>




<div className="chatInput">


<input

value={message}

onChange={(e)=>setMessage(e.target.value)}

placeholder="Ask your engineering question..."

onKeyDown={(e)=>{

if(e.key==="Enter")

sendMessage();

}}

/>



<button

onClick={sendMessage}

disabled={loading}

>

{

loading

?

"Thinking"

:

"Send"

}


</button>



</div>



</div>






<div className="aiToolsCard">


<h2>

Engineering Assistant

</h2>


<p>

Quick tools to accelerate your learning.

</p>



{

suggestions.map((item,index)=>(


<button

key={index}

onClick={()=>setMessage(item)}

>

{item}

</button>


))

}



<div className="mentorFeatures">


<div>

Code Analysis

</div>


<div>

Debug Assistance

</div>


<div>

System Design Help

</div>


<div>

Career Preparation

</div>


<div>

Project Guidance

</div>


</div>



</div>


</div>




<section className="aiBottom">


<h2>

Building Tomorrow's Software Engineers

</h2>


<p>

PBody AI Mentor combines learning, problem solving, and engineering guidance in one intelligent workspace.

</p>


</section>



</div>


);


}