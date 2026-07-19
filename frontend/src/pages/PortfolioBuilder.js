import { useState, useEffect } from "react";

export default function PortfolioBuilder() {

  const [portfolio, setPortfolio] = useState({
    title: "",
    bio: "",
    github: "",
    linkedin: "",
    website: ""
  });

  useEffect(() => {

    const saved = localStorage.getItem("student_portfolio");

    if (saved) {

      setPortfolio(JSON.parse(saved));

    }

  }, []);

  const handleChange = (e) => {

    setPortfolio({

      ...portfolio,

      [e.target.name]: e.target.value

    });

  };

  const savePortfolio = () => {

    localStorage.setItem(

      "student_portfolio",

      JSON.stringify(portfolio)

    );

    alert("✅ Portfolio Saved Successfully!");

  };

  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#081420",
        color: "white",
        padding: "40px"
      }}
    >

      <h1>🌐 Portfolio Builder</h1>

      <br />

      <input
        name="title"
        placeholder="Professional Title"
        value={portfolio.title}
        onChange={handleChange}
      />

      <br /><br />

      <textarea
        name="bio"
        placeholder="Short Professional Bio"
        value={portfolio.bio}
        onChange={handleChange}
      />

      <br /><br />

      <input
        name="github"
        placeholder="GitHub URL"
        value={portfolio.github}
        onChange={handleChange}
      />

      <br /><br />

      <input
        name="linkedin"
        placeholder="LinkedIn URL"
        value={portfolio.linkedin}
        onChange={handleChange}
      />

      <br /><br />

      <input
        name="website"
        placeholder="Personal Website"
        value={portfolio.website}
        onChange={handleChange}
      />

      <br /><br />

      <button onClick={savePortfolio}>

        Save Portfolio

      </button>

    </div>

  );

}