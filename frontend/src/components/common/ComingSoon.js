import { useNavigate } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import "../../styles/comingSoon.css";

export default function ComingSoon({

icon,

title,

description

}){

const navigate=useNavigate();

return(

<AppLayout>

<div className="comingSoonPage">

<div className="comingCard">

<div className="comingIcon">

{icon}

</div>

<h1>

{title}

</h1>

<p>

{description}

</p>

<div className="comingButtons">

<button

className="primaryComing"

onClick={()=>navigate("/dashboard")}

>

🏠 Dashboard

</button>

<button

className="secondaryComing"

onClick={()=>navigate("/learning")}

>

📚 Continue Learning

</button>

</div>

<div className="comingFooter">

<h3>

🚀 PBody Fullstack Academy

</h3>

<span>

New features are being added continuously.

</span>

</div>

</div>

</div>

</AppLayout>

);

}