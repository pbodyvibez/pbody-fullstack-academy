export default function AIMessage({

message,

sender

}){


return(

<div

className={`aiMessage ${sender}`}

>


<div className="messageAvatar">


{

sender === "ai"

?

"🤖"

:

"👨‍💻"

}


</div>



<div className="messageContent">


<p>

{message}

</p>


</div>



</div>

);


}