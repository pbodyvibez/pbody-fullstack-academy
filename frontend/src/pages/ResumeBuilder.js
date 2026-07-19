import { useState } from "react";

export default function ResumeBuilder() {

  const [resume, setResume] = useState({
    fullName: "",
    email: "",
    phone: "",
    skills: "",
    education: "",
    experience: ""
  });

  const handleChange = (e) => {
    setResume({
      ...resume,
      [e.target.name]: e.target.value
    });
  };

  const saveResume = () => {

    localStorage.setItem(
      "student_resume",
      JSON.stringify(resume)
    );

    alert("✅ Resume Saved Successfully!");

  };

  return (

    <div
      style={{
        minHeight:"100vh",
        background:"#081420",
        color:"white",
        padding:"40px"
      }}
    >

      <h1>📄 Resume Builder</h1>

      <br/>

      <input
        name="fullName"
        placeholder="Full Name"
        value={resume.fullName}
        onChange={handleChange}
      />

      <br/><br/>

      <input
        name="email"
        placeholder="Email"
        value={resume.email}
        onChange={handleChange}
      />

      <br/><br/>

      <input
        name="phone"
        placeholder="Phone Number"
        value={resume.phone}
        onChange={handleChange}
      />

      <br/><br/>

      <textarea
        name="skills"
        placeholder="Skills"
        value={resume.skills}
        onChange={handleChange}
      />

      <br/><br/>

      <textarea
        name="education"
        placeholder="Education"
        value={resume.education}
        onChange={handleChange}
      />

      <br/><br/>

      <textarea
        name="experience"
        placeholder="Experience"
        value={resume.experience}
        onChange={handleChange}
      />

      <br/><br/>

      <button onClick={saveResume}>

        Save Resume

      </button>

    </div>

  );

}