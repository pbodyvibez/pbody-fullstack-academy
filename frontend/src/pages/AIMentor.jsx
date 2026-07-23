import {
useState
} from "react";


import {
useAuth
} from "../context/AuthContext";


import API from "../utils/api";


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
"Hello Engineer 👋 I am your PBody AI Engineering Mentor. Ask me about coding, debugging, projects, architecture or career growth."

}

]);





const suggestions=[


"Explain React hooks",

"Debug my JavaScript code",

"Create a frontend project idea",

"Explain backend APIs",

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


const response = await API.post(

"/ai/chat",

{


message:userMessage,


student:{


level:1,


xp:0,


name:user?.name

}



},

{


headers:{


Authorization:

`Bearer ${token}`


}

}


);





setChat(prev=>[

...prev,

{

role:"ai",

text:

response.data.reply

}

]);




}

catch(error){



console.error(

"AI ERROR",

error

);



setChat(prev=>[

...prev,

{

role:"ai",

text:

"⚠️ AI Mentor connection failed. Please try again."

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

🤖 PBODY AI ENGINEERING MENTOR

</div>



<h1>

Your Personal AI Software Engineering Coach

</h1>



<p>

Learn faster, debug smarter, build professional projects and prepare for engineering careers with AI assistance.

</p>


</div>



<div className="aiRobot">

🤖

</div>



</section>








<div className="aiWorkspace">





<div className="aiChatCard">


<div className="chatHeader">


<h2>

AI Mentor Chat

</h2>


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

Thinking like an engineer... 🤖

</div>


}



</div>









<div className="chatInput">



<input


value={message}


onChange={(e)=>setMessage(e.target.value)}


placeholder="Ask your AI mentor anything..."



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

"Thinking..."

:

"Send 🚀"

}


</button>



</div>




</div>









<div className="aiToolsCard">



<h2>

Engineering Tools

</h2>



<p>

Quick actions to improve your development skills.

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

✅ Code Review

</div>


<div>

✅ Bug Fixing

</div>


<div>

✅ Architecture Advice

</div>


<div>

✅ Career Guidance

</div>


<div>

✅ Project Planning

</div>



</div>




</div>





</div>







<section className="aiBottom">


<h2>

Built For Future Engineers 🚀

</h2>



<p>

PBody AI Mentor helps students move from beginner level to professional software engineering.

</p>


</section>






</div>


);


}