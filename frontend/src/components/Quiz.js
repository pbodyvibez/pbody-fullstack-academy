import React from "react";

function Quiz() {
  return (
    <div className="container" style={{ marginTop: "80px" }}>

      <h1>Quiz 📝</h1>

      <div className="card" style={{ marginTop: "20px" }}>
        <h2>Question 1</h2>
        <p>What is React?</p>

        <ul>
          <li>A database</li>
          <li>A JavaScript library</li>
          <li>An operating system</li>
        </ul>
      </div>

    </div>
  );
}

export default Quiz;