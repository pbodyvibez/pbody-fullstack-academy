// ===============================================
// PBODY FULLSTACK ACADEMY
// AI PROMPT SUGGESTIONS
// ===============================================

import "../../styles/aiAssistant.css";


// ===============================================
// AI PROMPT SUGGESTIONS
// ===============================================

export default function AIPromptSuggestions({
  suggestions = [],
  onSelect,
  disabled = false
}) {

  const defaultSuggestions = [
    "Explain this lesson",
    "Show me a practical example",
    "Help me debug my code",
    "Create a practice challenge",
    "Give me interview questions"
  ];

  const items =
    Array.isArray(suggestions) && suggestions.length
      ? suggestions
      : defaultSuggestions;


  return (

    <div className="ai-prompt-suggestions">

      <div className="ai-prompt-heading">
        <span className="ai-prompt-logo">
          <img
            src={require("../../assets/images/logo.png")}
            alt="PBody FullStack Academy"
          />
        </span>

        <span>
          Ask PBody AI
        </span>
      </div>


      <div className="ai-prompt-list">

        {items.map((suggestion, index) => (

          <button
            type="button"
            key={`${suggestion}-${index}`}
            onClick={() => onSelect?.(suggestion)}
            disabled={disabled}
          >
            {suggestion}
          </button>

        ))}

      </div>

    </div>

  );

}