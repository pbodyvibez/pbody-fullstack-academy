
import Hero from "../components/landing/Hero";
import Stats from "../components/landing/Stats";
import Features from "../components/landing/Features";
import Categories from "../components/landing/Categories";
import Partners from "../components/landing/Partners";
import Testimonials from "../components/landing/Testimonials";
import CTA from "../components/landing/CTA";

export default function Home() {
  return (
    <>
      <Hero />

      <Stats />

      <Features />

      <Categories />

      <Partners />

      <Testimonials />

      <CTA />

      <section
        style={{
          padding: "80px 24px",
          textAlign: "center",
          background: "#0B1F3A",
          color: "#ffffff"
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto"
          }}
        >
          <div
            style={{
              fontSize: "52px",
              marginBottom: "20px"
            }}
          >
            📱
          </div>

          <h2
            style={{
              margin: "0 0 16px",
              fontSize: "clamp(28px, 5vw, 46px)",
              fontWeight: 800
            }}
          >
            Take PBody Fullstack Academy With You
          </h2>

          <p
            style={{
              maxWidth: "680px",
              margin: "0 auto 30px",
              fontSize: "17px",
              lineHeight: 1.7,
              opacity: 0.9
            }}
          >
            Learn, practice, track your progress and build your developer
            skills anywhere with the PBody Fullstack Academy Android app.
          </p>

          <a
            href="/downloads/PBody-Fullstack-Academy-v1.0.apk"
            download="PBody-Fullstack-Academy-v1.0.apk"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              padding: "16px 30px",
              borderRadius: "12px",
              background: "#D4AF37",
              color: "#0B1F3A",
              textDecoration: "none",
              fontWeight: 800,
              fontSize: "16px",
              cursor: "pointer",
              boxShadow: "0 10px 30px rgba(0,0,0,0.25)"
            }}
          >
            📲 Download Android App
          </a>

          <p
            style={{
              marginTop: "16px",
              fontSize: "13px",
              opacity: 0.7
            }}
          >
            Android • PBody Fullstack Academy v1.0
          </p>
        </div>
      </section>
    </>
  );
}
