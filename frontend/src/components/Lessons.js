import React from "react";

function Lessons() {
  return (
    <div className="container" style={{ marginTop: "80px" }}>

      <h1>Lessons 🎓</h1>

      <div className="card" style={{ marginTop: "20px" }}>
        <h2>Lesson 1</h2>
        <p>Introduction to Web Development</p>
      </div>

      <div className="card" style={{ marginTop: "20px" }}>
        <h2>Lesson 2</h2>
        <p>HTML & CSS Basics</p>
      </div>

      <div className="card" style={{ marginTop: "20px" }}>
        <h2>Lesson 3</h2>
        <p>JavaScript Fundamentals</p>
      </div>

    </div>
  );
}

export default Lessons;