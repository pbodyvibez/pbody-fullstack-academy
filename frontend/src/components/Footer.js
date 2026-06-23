import React from "react";

function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <h3>PBody Fullstack Academy</h3>

        <p>Learn. Build. Deploy. Become Industry Ready.</p>

        <p style={{ marginTop: "10px", fontSize: "14px", color: "#94a3b8" }}>
          © {new Date().getFullYear()} All rights reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;