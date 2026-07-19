import React from "react";

import "./Features.css";

const features = [

{
icon:"🎓",
title:"Structured Learning",
description:"Follow a carefully designed roadmap from beginner to professional full stack engineer."
},

{
icon:"🤖",
title:"AI Engineering Mentor",
description:"Get instant explanations, code reviews, debugging help and learning guidance powered by AI."
},

{
icon:"💻",
title:"Real Projects",
description:"Build real-world applications that strengthen your portfolio and prepare you for industry jobs."
},

{
icon:"🏆",
title:"Professional Certification",
description:"Earn certificates by completing learning paths, projects and engineering assessments."
},

{
icon:"📈",
title:"Progress Tracking",
description:"Monitor XP, streaks, achievements and course completion with your personal dashboard."
},

{
icon:"🌍",
title:"Career Ready",
description:"Prepare for internships, freelance work and software engineering careers with practical experience."
}

];

export default function Features(){

return(

<section className="features">

<div className="section-title">

<h2>

Why Choose PBody FullStack Academy?

</h2>

<p>

Everything you need to become a professional software engineer in one platform.

</p>

</div>

<div className="features-grid">

{

features.map((feature,index)=>(

<div

key={index}

className="feature-card"

>

<div className="feature-icon">

{feature.icon}

</div>

<h3>

{feature.title}

</h3>

<p>

{feature.description}

</p>

</div>

))

}

</div>

</section>

);

}