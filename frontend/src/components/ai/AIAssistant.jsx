// ===============================================
// PBODY FULLSTACK ACADEMY
// AI ASSISTANT INTERFACE
// ===============================================


import {
  useState
} from "react";


import useAI from "../../ai/useAI";


import "../../styles/aiAssistant.css";



// ===============================================
// AI ASSISTANT COMPONENT
// ===============================================


export default function AIAssistant(){



const {


  isOpen,

  toggleChat,

  messages,

  sendMessage,

  receiveMessage,

  typing,

  setTyping


}=useAI();




const [input,setInput] = useState("");





const suggestions = [

"Explain this lesson",

"Debug my code",

"Create practice quiz",

"Give me a project idea"

];






const askAI = (text)=>{


if(!text.trim()) return;



const studentMessage = {


id:Date.now(),

sender:"student",

text:text


};



sendMessage(studentMessage);



setInput("");



setTyping(true);





setTimeout(()=>{



receiveMessage({


id:Date.now()+1,


sender:"ai",


text:

"I am your PBody AI Mentor. I will guide you step by step. Let's break this concept down and learn it properly."



});



setTyping(false);



},1200);



};







return (

<>


<button

className="ai-floating-button"

onClick={toggleChat}

>

🤖

</button>





{

isOpen && (


<div className="ai-assistant-window">





<div className="ai-header">


<h3>

PBody AI Mentor

</h3>



<span>

Online

</span>



</div>







<div className="ai-messages">





{

messages.length === 0 ? (


<p className="ai-empty">


Hello Student 👋


<br/>


I am your AI engineering mentor.


<br/>


Ask me anything about coding, lessons, or projects.


</p>


)

:

(

messages.map((message)=>(


<div

key={message.id}

className={

message.sender === "ai"

?

"ai-message"

:

"student-message"

}

>

{message.text}


</div>


))


)

}





{

typing && (

<p className="ai-typing">

AI Mentor is thinking...

</p>

)

}



</div>







<div className="ai-suggestions">


{

suggestions.map((item)=>(


<button

key={item}

onClick={()=>askAI(item)}

>

{item}

</button>


))


}


</div>








<div className="ai-footer">



<input


value={input}


onChange={(e)=>setInput(e.target.value)}


onKeyDown={(e)=>{


if(e.key==="Enter"){

askAI(input);

}


}}



placeholder="Ask your AI Mentor..."


/>




<button

onClick={()=>askAI(input)}

>

Send

</button>



</div>






</div>


)


}



</>


);


}