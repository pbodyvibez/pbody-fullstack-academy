import "./Testimonials.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import student1 from "../../assets/images/testimonials/student1.jpg";
import student2 from "../../assets/images/testimonials/student2.jpg";
import student3 from "../../assets/images/testimonials/student3.jpg";
import student4 from "../../assets/images/testimonials/student4.jpg";
import student5 from "../../assets/images/testimonials/student5.jpg";
import student6 from "../../assets/images/testimonials/student6.jpg";

const testimonials = [

{
name:"Daniel Johnson",
country:"🇺🇸 United States",
role:"Frontend Engineer",
image:student1,
rating:"★★★★★",
text:"PBody FullStack Academy completely transformed my career. The projects were practical, the AI mentor explained concepts clearly, and I landed my first frontend engineering role."
},

{
name:"Sophia Williams",
country:"🇨🇦 Canada",
role:"Software Engineer",
image:student2,
rating:"★★★★★",
text:"The roadmap is incredibly well structured. Instead of jumping between random tutorials, I learned everything in the correct order."
},

{
name:"Michael Brown",
country:"🇬🇧 United Kingdom",
role:"React Developer",
image:student3,
rating:"★★★★★",
text:"This feels more like a premium engineering bootcamp than an online course. Every lesson builds confidence."
},

{
name:"Emma Wilson",
country:"🇦🇺 Australia",
role:"Full Stack Developer",
image:student4,
rating:"★★★★★",
text:"The AI Mentor is amazing. Whenever I got stuck building projects, it guided me without simply giving away the answer."
},

{
name:"David Miller",
country:"🇩🇪 Germany",
role:"Backend Engineer",
image:student5,
rating:"★★★★★",
text:"After completing the backend roadmap I finally understood APIs, databases and authentication properly."
},

{
name:"Olivia Davis",
country:"🇳🇬 Nigeria",
role:"Software Engineer",
image:student6,
rating:"★★★★★",
text:"This academy deserves much more recognition. Everything feels polished, modern and beginner friendly."
}

];

export default function Testimonials(){

return(

<section className="testimonials">

<div className="section-title">

<span>
SUCCESS STORIES
</span>

<h2>
Trusted By Future Software Engineers
</h2>

<p>

Thousands of students are learning engineering skills,
building real-world applications and preparing for careers
with PBody FullStack Academy.

</p>

</div>

<Swiper

modules={[
Navigation,
Pagination,
Autoplay
]}

spaceBetween={30}

slidesPerView={3}

navigation

pagination={{
clickable:true
}}

autoplay={{
delay:4500,
disableOnInteraction:false
}}

loop

breakpoints={{

0:{
slidesPerView:1
},

768:{
slidesPerView:2
},

1100:{
slidesPerView:3
}

}}

>

{

testimonials.map(student=>(

<SwiperSlide
key={student.name}
>

<div className="testimonial-card">

<div className="testimonial-top">

<img
src={student.image}
alt={student.name}
/>

<div>

<h3>

{student.name}

</h3>

<h4>

{student.role}

</h4>

<small>

{student.country}

</small>

</div>

</div>

<p>

"{student.text}"

</p>

<div className="stars">

{student.rating}

</div>

</div>

</SwiperSlide>

))

}

</Swiper>

</section>

);

}