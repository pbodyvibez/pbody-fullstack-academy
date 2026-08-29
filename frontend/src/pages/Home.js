
import { useEffect, useState } from "react";

import Hero from "../components/landing/Hero";
import Stats from "../components/landing/Stats";
import Features from "../components/landing/Features";
import Categories from "../components/landing/Categories";
import Partners from "../components/landing/Partners";
import Testimonials from "../components/landing/Testimonials";
import CTA from "../components/landing/CTA";

export default function Home() {
  const [installPrompt, setInstallPrompt] = useState(null);
  const [showIOSInstructions, setShowIOSInstructions] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      setInstallPrompt(event);
    };

    window.addEventListener(
      "beforeinstallprompt",
      handleBeforeInstallPrompt
    );

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const isIOS = () => {
    return /iphone|ipad|ipod/i.test(navigator.userAgent);
  };

  const isStandalone = () => {
    return (
      window.matchMedia("(display-mode: standalone)").matches ||
      window.navigator.standalone === true
    );
  };

  const handleInstallApp = async () => {
    if (isStandalone()) {
      return;
    }

    if (isIOS()) {
      setShowIOSInstructions(true);
      return;
    }

    if (installPrompt) {
      try {
        installPrompt.prompt();

        const result = await installPrompt.userChoice;

        if (result?.outcome === "accepted") {
          setInstallPrompt(null);
        }
      } catch (error) {
        console.error("PBody app installation failed:", error);
      }

      return;
    }

    alert(
      "PBody Fullstack Academy can be installed from your browser menu. " +
        "Look for 'Install PBody Fullstack Academy' or 'Add to Home Screen'."
    );
  };

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
            Install PBody Fullstack Academy on your device and learn,
            practice, track your progress and build your developer skills
            wherever you go.
          </p>

          <button
            type="button"
            onClick={handleInstallApp}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              padding: "16px 30px",
              border: "none",
              borderRadius: "12px",
              background: "#D4AF37",
              color: "#0B1F3A",
              fontWeight: 800,
              fontSize: "16px",
              cursor: "pointer",
              boxShadow: "0 10px 30px rgba(0,0,0,0.25)"
            }}
          >
            📲 Install PBody App
          </button>

          <p
            style={{
              marginTop: "16px",
              fontSize: "13px",
              opacity: 0.7
            }}
          >
            Windows • macOS • Android • iPhone • iPad
          </p>

          {showIOSInstructions && (
            <div
              style={{
                margin: "30px auto 0",
                maxWidth: "520px",
                padding: "24px",
                borderRadius: "16px",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
                textAlign: "left"
              }}
            >
              <h3
                style={{
                  marginTop: 0,
                  marginBottom: "12px",
                  fontSize: "21px"
                }}
              >
                Install PBody on iPhone or iPad
              </h3>

              <ol
                style={{
                  margin: 0,
                  paddingLeft: "22px",
                  lineHeight: 1.8
                }}
              >
                <li>Open PBody Fullstack Academy in Safari.</li>
                <li>Tap the Share button.</li>
                <li>Select <strong>Add to Home Screen</strong>.</li>
                <li>Tap <strong>Add</strong>.</li>
                <li>Open PBody Academy from your Home Screen.</li>
              </ol>

              <button
                type="button"
                onClick={() => setShowIOSInstructions(false)}
                style={{
                  marginTop: "18px",
                  padding: "10px 18px",
                  border: "1px solid rgba(255,255,255,0.3)",
                  borderRadius: "8px",
                  background: "transparent",
                  color: "#ffffff",
                  cursor: "pointer"
                }}
              >
                Close
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}