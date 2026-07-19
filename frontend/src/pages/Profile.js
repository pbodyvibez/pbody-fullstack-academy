import { useState } from "react";

import AppLayout from "../components/layout/AppLayout";

import { useAuth } from "../context/AuthContext";

import "../styles/profile.css";


export default function Profile(){


const {user, updateProfile}=useAuth();



const currentUser = user || {};



const [form,setForm]=useState({


name:currentUser.name || "",

email:currentUser.email || "",

phone:currentUser.phone || "",

country:currentUser.country || "",

bio:currentUser.bio || "",

github:currentUser.github || "",

linkedin:currentUser.linkedin || "",

portfolio:currentUser.portfolio || "",

role:currentUser.role || "Student Developer",

skills:currentUser.skills || ""



});



const [photo,setPhoto]=useState(

currentUser.photo || ""

);



const handleChange=(e)=>{


setForm({

...form,

[e.target.name]:e.target.value

});


};




const handlePhoto=(e)=>{


const file=e.target.files[0];


if(!file)return;



const reader=new FileReader();



reader.onload=(event)=>{


setPhoto(event.target.result);


};



reader.readAsDataURL(file);



};





const saveProfile=()=>{


updateProfile({

...form,

photo

});



alert(

"Your PBody engineering profile has been updated."

);


};




return(



<AppLayout>



<div className="profilePage">



<section className="profileHero">


<h1>

👨‍💻 My Engineering Profile

</h1>


<p>

Build your professional identity inside PBody FullStack Academy.

Showcase your skills, projects and engineering journey.

</p>


</section>







<div className="profileContainer">





<div className="profileLeft">


<div className="profileCard">



<div className="profileImage">


{

photo ?


<img

src={photo}

alt="Profile"

/>


:


<div className="avatarLarge">

{

form.name

?

form.name.charAt(0).toUpperCase()

:

"P"

}

</div>


}



</div>





<label className="uploadBtn">


📷 Upload Profile Picture


<input

type="file"

hidden

accept="image/*"

onChange={handlePhoto}

/>



</label>







<div className="profileBadges">


<div>

<h2>

{currentUser.level || 1}

</h2>

<span>

Level

</span>

</div>



<div>

<h2>

{currentUser.xp || 0}

</h2>

<span>

XP

</span>

</div>



<div>

<h2>

{currentUser.streak || 0}

</h2>

<span>

Streak

</span>

</div>



</div>






</div>


</div>







<div className="profileRight">



<div className="profileForm">


<h2>

Personal Information

</h2>



<input

name="name"

value={form.name}

placeholder="Full Name"

onChange={handleChange}

/>




<input

name="email"

value={form.email}

placeholder="Email Address"

onChange={handleChange}

/>





<input

name="phone"

value={form.phone}

placeholder="Phone Number"

onChange={handleChange}

/>





<input

name="country"

value={form.country}

placeholder="Country"

onChange={handleChange}

/>





<input

name="role"

value={form.role}

placeholder="Professional Role"

onChange={handleChange}

/>





<textarea

name="bio"

rows="5"

value={form.bio}

placeholder="Professional Biography"

onChange={handleChange}

/>







<h2>

Engineering Skills

</h2>



<textarea

name="skills"

rows="4"

value={form.skills}

placeholder="Example: React, Node.js, MongoDB, Python"

onChange={handleChange}

/>








<h2>

Professional Links

</h2>




<input

name="github"

value={form.github}

placeholder="GitHub URL"

onChange={handleChange}

/>





<input

name="linkedin"

value={form.linkedin}

placeholder="LinkedIn URL"

onChange={handleChange}

/>





<input

name="portfolio"

value={form.portfolio}

placeholder="Portfolio Website"

onChange={handleChange}

/>







<div className="profileTips">


<h3>

🚀 Become Career Ready

</h3>



<ul>


<li>

Upload a professional picture.

</li>


<li>

Complete your engineering profile.

</li>


<li>

Build projects.

</li>


<li>

Share your GitHub.

</li>


<li>

Earn certificates.

</li>



</ul>



</div>








<div className="profileButtons">



<button

className="saveProfile"

onClick={saveProfile}

>

💾 Save Profile

</button>





<button

className="cancelProfile"

onClick={()=>window.location.reload()}

>

↺ Reset

</button>



</div>






</div>



</div>






</div>


</div>


</AppLayout>


);


}