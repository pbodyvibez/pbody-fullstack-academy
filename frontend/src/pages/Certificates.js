// ===============================================
// PBODY FULLSTACK ACADEMY
// PREMIUM CERTIFICATE CENTER
// CONNECTED TO PROGRESS + AUTH PROFILE
// ===============================================

import CertificatePreview from "../components/certificate/CertificatePreview";
import CertificateDownload from "../components/certificate/CertificateDownload";

import {
Award,
ShieldCheck,
QrCode,
Lock,
Download,
CheckCircle
} from "lucide-react";


import {
useProgress
} from "../context/ProgressContext";


import {
useAuth
} from "../context/AuthContext";


import lessonsData from "../data";


import "../styles/certificates.css";





export default function Certificates(){



const {
progress
}=useProgress();



const {
user
}=useAuth();







// ===============================
// LESSON CALCULATION
// ===============================


const allLessons = Object.values(
lessonsData
).flat();



const totalLessons = allLessons.length;



const completedLessons =
progress?.completedLessons || [];





const completedCount = allLessons.filter(

lesson =>

completedLessons.includes(
lesson.id
)

).length;






const percentage = totalLessons

?

Math.round(

(completedCount / totalLessons) * 100

)

:

0;






const unlocked = percentage >= 100;





const studentName =

user?.name ||

user?.fullName ||

"PBody Student";








return(


<div className="certificatePage">






<section className="certificateHero">



<div className="certificateLogo">

🏆

</div>




<h1>

Professional Engineering Certificates

</h1>




<p>

Your achievements are automatically tracked.
Complete your engineering pathway and earn
a verified PBody FullStack Academy certificate.

</p>



</section>









<section className="certificateDashboard">





<div className="certificateStatus">



<div className="certificateIcon">

<ShieldCheck/>

</div>




<h2>

Certificate Progress

</h2>




<p>

Continue learning, complete your lessons and
unlock your professional engineering certificate.

</p>






<div className="progressBar">


<div

style={{

width:`${percentage}%`

}}

/>


</div>






<span>

{completedCount} / {totalLessons}
Lessons Completed

</span>





</div>









<div className="certificatePreview">



{

unlocked

?

<>


<div className="lockedBadge success">

<CheckCircle/>

Certificate Earned

</div>





<CertificatePreview

name={studentName}

/>





<CertificateDownload

name={studentName}

/>



</>





:

<>


<div className="lockedBadge">

<Lock/>

Certificate Locked

</div>





<Award className="awardIcon"/>




<h2>

PBody FullStack Academy

</h2>





<h3>

Software Engineering Certificate

</h3>





<p>

Complete your learning pathway to unlock
your official certificate.

</p>






<div className="qrBox">


<QrCode size={70}/>


<span>

QR Verification

</span>


</div>







<button disabled>


<Lock size={18}/>

Locked


</button>



</>



}




</div>







</section>









<section className="certificateBenefits">





<div>

🏆

<h3>

Professional Proof

</h3>


<p>

Showcase your verified engineering journey.

</p>


</div>






<div>

🔐

<h3>

Digital Verification

</h3>


<p>

Certificates will support QR verification.

</p>


</div>






<div>

🚀

<h3>

Career Ready

</h3>


<p>

Build credibility with employers.

</p>


</div>





</section>







</div>


);



}