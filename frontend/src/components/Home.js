import React from "react";

function Home() {
  return (
    <div className="container">

      {/* HERO - MAIN FOCUS */}
      <section style={{ textAlign: "center", paddingTop: "70px" }}>

        <h1 style={{ fontSize: "54px", fontWeight: "900" }}>
          Become a Fullstack Developer 🚀
        </h1>

        <p style={{ marginTop: "15px", fontSize: "18px", color: "#94a3b8" }}>
          Learn step-by-step. Build real projects. Get industry-ready skills.
        </p>

        <div style={{ marginTop: "30px" }}>
          <button className="btn btn-primary">
            Start Learning Path
          </button>
        </div>

        <p style={{ marginTop: "15px", fontSize: "14px", color: "#64748b" }}>
          No confusion. Follow a structured roadmap.
        </p>

      </section>

      {/* LEARNING PATH (VERY IMPORTANT SECTION) */}
      <section style={{ marginTop: "90px" }}>

        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
          Your Learning Path
        </h2>

        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px"
        }}>

          <div className="card">
            <h3>1. Fundamentals</h3>
            <p>HTML, CSS, JavaScript basics</p>
          </div>

          <div className="card">
            <h3>2. Frontend Development</h3>
            <p>React, UI building, components</p>
          </div>

          <div className="card">
            <h3>3. Backend Development</h3>
            <p>Node.js, APIs, databases</p>
          </div>

          <div className="card">
            <h3>4. AI Integration</h3>
            <p>Build AI-powered applications</p>
          </div>

          <div className="card">
            <h3>5. Deployment</h3>
            <p>Go live on internet like a real developer</p>
          </div>

        </div>

      </section>

      {/* FINAL CTA */}
      <section style={{ textAlign: "center", marginTop: "80px" }}>

        <h2>Ready to Start?</h2>

        <p style={{ color: "#94a3b8", marginTop: "10px" }}>
          Join structured learning instead of random tutorials.
        </p>

        <button className="btn btn-outline" style={{ marginTop: "20px" }}>
          Explore Dashboard
        </button>

      </section>

    </div>
  );
}

export default Home;