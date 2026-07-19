import "./CTA.css";

export default function CTA() {
  return (
    <section className="cta">
      <div className="cta-container">

        <h2>
          Become a World-Class Software Engineer
        </h2>

        <p>
          Learn frontend, backend, databases, cloud engineering, AI,
          DevOps and full stack development through structured courses,
          real-world projects, quizzes, certificates and AI mentorship.
        </p>

        <div className="cta-buttons">

          <button
            className="cta-primary"
            onClick={() => (window.location.href = "/register")}
          >
            🚀 Start Learning Free
          </button>

          <button
            className="cta-secondary"
            onClick={() => (window.location.href = "/courses")}
          >
            📚 Explore Courses
          </button>

        </div>

      </div>
    </section>
  );
}