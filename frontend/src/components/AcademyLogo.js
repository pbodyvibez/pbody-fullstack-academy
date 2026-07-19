export default function AcademyLogo({
  size = 140,
  showText = true,
}) {
  return (
    <div
      style={{
        textAlign: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          width: size,
          height: size,
          margin: "auto",
          position: "relative",
        }}
      >
        {/* OUTER RING */}
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            background:
              "linear-gradient(135deg,#38bdf8,#1d4ed8,#0f172a)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow:
              "0 0 35px rgba(56,189,248,.4)",
          }}
        >
          {/* INNER */}
          <div
            style={{
              width: "82%",
              height: "82%",
              borderRadius: "50%",
              background: "#0f172a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "3px solid #38bdf8",
            }}
          >
            <div
              style={{
                fontSize: size / 3.3,
                fontWeight: "900",
                color: "#38bdf8",
                letterSpacing: "2px",
              }}
            >
              PA
            </div>
          </div>
        </div>

        {/* AI DOTS */}
        <div
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: "#38bdf8",
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: 15,
            left: 10,
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: "#38bdf8",
          }}
        />
      </div>

      {showText && (
        <>
          <h1
            style={{
              color: "#ffffff",
              marginTop: 15,
              marginBottom: 0,
              fontWeight: "800",
              letterSpacing: "2px",
            }}
          >
            PBODY ACADEMY
          </h1>

          <p
            style={{
              color: "#94a3b8",
              marginTop: 8,
              fontSize: 14,
              letterSpacing: "1px",
            }}
          >
            Learn • Build • Earn • Get Hired
          </p>
        </>
      )}
    </div>
  );
}