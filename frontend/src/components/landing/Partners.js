import "./Partners.css";

const partners = [
  {
    name: "OpenAI",
    description:
      "Learn AI engineering by building real-world applications with modern AI technologies."
  },
  {
    name: "GitHub",
    description:
      "Master professional version control, collaboration, and portfolio management using Git and GitHub."
  },
  {
    name: "Vercel",
    description:
      "Deploy modern frontend applications quickly with enterprise-grade hosting and continuous deployment."
  },
  {
    name: "Render",
    description:
      "Deploy scalable backend services, databases, and APIs with ease."
  },
  {
    name: "Supabase",
    description:
      "Build production-ready applications with authentication, PostgreSQL databases, and storage."
  },
  {
    name: "Google Cloud",
    description:
      "Learn cloud computing concepts and deploy applications using industry-standard cloud infrastructure."
  }
];

export default function Partners() {
  return (
    <section className="partners">
      <div className="partners-header">
        <h2>Industry Technologies You'll Use</h2>

        <p>
          At PBody Fullstack Academy, you'll build projects using the same
          platforms and technologies trusted by professional software engineers
          worldwide.
        </p>
      </div>

      <div className="partners-grid">
        {partners.map((partner, index) => (
          <div className="partner-card" key={index}>
            <h3>{partner.name}</h3>
            <p>{partner.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}