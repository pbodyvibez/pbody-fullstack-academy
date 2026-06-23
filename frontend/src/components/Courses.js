import React from "react";

function Courses() {
  return (
    <div className="container" style={{ marginTop: "80px" }}>

      <h1>Courses 📚</h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
        marginTop: "30px"
      }}>

        <div className="card">
          <h2>Fullstack Development</h2>
          <p>HTML, CSS, JS, React, Node</p>
        </div>

        <div className="card">
          <h2>AI Engineering</h2>
          <p>OpenAI, Prompt Engineering</p>
        </div>

        <div className="card">
          <h2>Mobile Development</h2>
          <p>React Native Apps</p>
        </div>

      </div>

    </div>
  );
}

export default Courses;