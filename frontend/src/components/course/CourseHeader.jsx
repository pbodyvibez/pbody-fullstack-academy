import Logo from "../../assets/images/logo.png";

import { useNavigate } from "react-router-dom";

import "../../components/course/course.css";


export default function CourseHeader({

course

}){


const navigate = useNavigate();



return(


<section className="courseHeader">



<button

className="courseBackButton"

onClick={()=>navigate("/courses")}

>

← Back To Courses

</button>





<div className="courseHeaderBrand">



<img

src={Logo}

alt="PBody FullStack Academy"

/>



<div>

<h3>

PBODY FULLSTACK ACADEMY

</h3>


<span>

AI Powered Engineering Academy

</span>


</div>


</div>







<div className="courseHeroContent">





<div className="courseThumbnail">


<img

src={course.thumbnail || course.image}

alt={course.title}

/>




<div

className={

course.access === "premium"

?

"headerPremium"

:

"headerFree"

}

>


{

course.access === "premium"

?

"⭐ PREMIUM COURSE"

:

"🚀 FREE COURSE"

}


</div>



</div>










<div className="courseInformation">





<h1>

{course.icon} {course.title}

</h1>





<p>

{course.description}

</p>







<div className="courseMeta">


<span>

⭐ {course.rating || "4.9"}

</span>



<span>

👨‍🎓 {course.students || "10,000+"}

</span>



<span>

📚 {course.lessons || 0} Lessons

</span>



<span>

⏱ {course.duration || "Self Paced"}

</span>



<span>

🏆 Certificate

</span>



</div>








<div className="careerTags">


{

course.technologies?.slice(0,6).map((tech,index)=>(


<span key={index}>

{tech}

</span>


))


}


</div>






</div>






</div>






</section>


);


}