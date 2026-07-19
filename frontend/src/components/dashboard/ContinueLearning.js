import { useNavigate } from "react-router-dom";

import "../../styles/dashboard.css";


export default function ContinueLearning(){


const navigate=useNavigate();


return(

<div className="workspaceCard continueCard">


<div className="cardHeader">

<h2>

📚 Continue Learning

</h2>


<span>

Frontend Track

</span>

</div>



<div className="coursePreview">


<div className="courseLogo">

⚛️

</div>


<div>

<h3>

Frontend Engineering

</h3>


<p>

HTML → CSS → JavaScript → React → Professional Frontend Projects

</p>

</div>


</div>



<div className="learningProgress">


<div className="progressLine">

<div></div>

</div>


<span>

Continue your engineering journey

</span>


</div>



<button
onClick={()=>navigate("/courses")}
>
Resume Learning 🚀
</button>

</div>

);


}