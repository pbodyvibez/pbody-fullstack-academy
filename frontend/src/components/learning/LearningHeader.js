import "../../styles/learninghub.css";

export default function LearningPathCard({

title,

progress,

lessons,

projects,

duration,

difficulty

}){

return(

<div className="learning-card">

<h2>

{title}

</h2>

<div className="progress">

<div

className="progress-fill"

style={{width:`${progress}%`}}

/>

</div>

<h3>

{progress}% Completed

</h3>

<div className="learning-info">

<p>📚 {lessons} Lessons</p>

<p>💻 {projects} Projects</p>

<p>⏱ {duration}</p>

<p>🎯 {difficulty}</p>

</div>

<button>

Continue Learning →

</button>

</div>

);

}