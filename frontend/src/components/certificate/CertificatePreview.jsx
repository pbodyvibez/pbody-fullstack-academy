// ===============================================
// PBODY FULLSTACK ACADEMY
// CERTIFICATE PREVIEW
// ===============================================


import {
Award,
ShieldCheck
} from "lucide-react";


import "../../styles/certificatePreview.css";



export default function CertificatePreview({name}){


return(


<div className="certificatePaper">


<div className="certificateTop">


<Award/>

<h2>

PBODY FULLSTACK ACADEMY

</h2>


<span>

Verified Engineering Certificate

</span>


</div>





<div className="certificateBody">


<p>

This certificate is proudly presented to

</p>



<h1>

{name || "Student Name"}

</h1>



<p>

for successfully completing the

</p>



<h2>

Full Stack Software Engineering Program

</h2>




<p>

Demonstrating practical skills in modern
web development, software engineering,
problem solving and project creation.

</p>



</div>







<div className="certificateFooter">


<div>

<ShieldCheck/>

<br/>

Verified

</div>



<div>

PBODY

<br/>

Academy

</div>



</div>




</div>


);


}