import React from "react";

import "./Categories.css";

const categories = [

{
icon:"🌐",
title:"Frontend Engineering",
courses:"40+ Lessons",
description:"Master HTML, CSS, JavaScript, React, Tailwind CSS and Next.js by building modern responsive applications."
},

{
icon:"⚙️",
title:"Backend Engineering",
courses:"40+ Lessons",
description:"Learn Node.js, Express.js, REST APIs, authentication, databases and scalable backend architecture."
},

{
icon:"🗄️",
title:"Database Engineering",
courses:"25+ Lessons",
description:"Understand SQL, PostgreSQL, MongoDB, Supabase and database design for production applications."
},

{
icon:"☁️",
title:"Cloud & DevOps",
courses:"20+ Lessons",
description:"Deploy applications using Git, GitHub, Docker, CI/CD pipelines, Render and cloud infrastructure."
},

{
icon:"🤖",
title:"Artificial Intelligence",
courses:"20+ Lessons",
description:"Build AI-powered applications using OpenAI APIs, automation and modern AI development tools."
},

{
icon:"📱",
title:"Mobile Development",
courses:"30+ Lessons",
description:"Develop Android and iOS applications using React Native with real-world projects."
}

];

export default function Categories(){

return(

<section className="categories">

<div className="categories-header">

<h2>Engineering Learning Paths</h2>

<p>

Choose a structured roadmap and become a professional software engineer one step at a time.

</p>

</div>

<div className="categories-grid">

{

categories.map((item,index)=>(

<div
key={index}
className="category-card"
>

<div className="category-icon">

{item.icon}

</div>

<h3>

{item.title}

</h3>

<span>

{item.courses}

</span>

<p>

{item.description}

</p>

<button>

Explore Path →

</button>

</div>

))

}

</div>

</section>

);

}