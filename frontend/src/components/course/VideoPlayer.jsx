import React from "react";

import "./course.css";


export default function VideoPlayer({ lesson }) {



if(!lesson){


return(

<div className="videoEmpty">


<div className="emptyIcon">

▶

</div>


<h2>

Select a lesson to start learning

</h2>


<p>

Choose any lesson from the sidebar and begin your engineering journey.

</p>


</div>

);


}




return(


<section className="videoSection">



<div className="videoHeader">


<span className="videoBadge">

🎓 PBODY FULLSTACK ACADEMY

</span>



<h1>

{lesson.title}

</h1>



<p>

{lesson.description}

</p>


</div>







<div className="videoPlayer">


{

lesson.video || lesson.videoUrl ? (


<iframe

src={lesson.video || lesson.videoUrl}

title={lesson.title}

allow=

"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"

allowFullScreen

></iframe>


)


:


(

<div className="videoPlaceholder">


<div className="playIcon">

▶

</div>


<h2>

Video Coming Soon

</h2>


<p>

This lesson video is currently being prepared.

</p>


</div>


)


}


</div>







<div className="lessonDescription">


<h2>

About This Lesson

</h2>



<p>

{lesson.description}

</p>


<div className="lessonDuration">


⏱ Duration:

<strong>

{lesson.duration || "Learning Session"}

</strong>


</div>



</div>





</section>


);


}