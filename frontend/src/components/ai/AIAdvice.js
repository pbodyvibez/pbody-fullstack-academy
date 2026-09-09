// ===============================================
// PBODY FULLSTACK ACADEMY
// AI ADVICE
// ===============================================

import Logo from "../../assets/images/logo.png";

import "../../styles/aiAssistant.css";


// ===============================================
// AI ADVICE COMPONENT
// ===============================================

export default function AIAdvice({
  title = "PBody Engineering Advice",
  advice = "",
  items = [],
  onAction,
  actionLabel = "Ask PBody AI"
}) {

  const adviceItems = Array.isArray(items)
    ? items.filter(Boolean)
    : [];


  if (!advice && adviceItems.length === 0) {
    return null;
  }


  return (

    <section className="ai-advice">

      {/* =========================================
          HEADER
      ========================================= */}

      <div className="ai-advice-header">

        <div className="ai-advice-brand">

          <div className="ai-advice-logo">

            <img
              src={Logo}
              alt="PBody FullStack Academy"
            />

          </div>


          <div>

            <span className="ai-advice-label">
              PBODY AI
            </span>

            <h3>
              {title}
            </h3>

          </div>

        </div>

      </div>


      {/* =========================================
          ADVICE
      ========================================= */}

      {advice && (

        <p className="ai-advice-text">
          {advice}
        </p>

      )}


      {/* =========================================
          ADVICE ITEMS
      ========================================= */}

      {adviceItems.length > 0 && (

        <div className="ai-advice-list">

          {adviceItems.map((item, index) => (

            <div
              className="ai-advice-item"
              key={`${item}-${index}`}
            >

              <span className="ai-advice-number">
                {index + 1}
              </span>

              <span>
                {item}
              </span>

            </div>

          ))}

        </div>

      )}


      {/* =========================================
          ACTION
      ========================================= */}

      {onAction && (

        <button
          type="button"
          className="ai-advice-action"
          onClick={onAction}
        >
          {actionLabel}
        </button>

      )}

    </section>

  );

}