// ===============================================
// PBODY FULLSTACK ACADEMY
// AI INPUT
// ===============================================

import { useState } from "react";

import "../../styles/aiAssistant.css";


// ===============================================
// AI INPUT COMPONENT
// ===============================================

export default function AIInput({
  onSend,
  loading = false,
  placeholder = "Ask your PBody AI Mentor..."
}) {

  const [value, setValue] = useState("");


  // ===============================================
  // SEND
  // ===============================================

  function handleSend() {

    const message = value.trim();

    if (!message || loading) {
      return;
    }

    onSend?.(message);

    setValue("");

  }


  // ===============================================
  // KEYBOARD
  // ===============================================

  function handleKeyDown(event) {

    if (
      event.key === "Enter" &&
      !event.shiftKey
    ) {

      event.preventDefault();

      handleSend();

    }

  }


  // ===============================================
  // RENDER
  // ===============================================

  return (

    <div className="ai-input-container">

      <input
        type="text"
        value={value}
        onChange={(event) =>
          setValue(event.target.value)
        }
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        disabled={loading}
        aria-label="Ask PBody AI Mentor"
      />


      <button
        type="button"
        onClick={handleSend}
        disabled={loading || !value.trim()}
        aria-label="Send message to PBody AI Mentor"
      >

        {loading ? "..." : "Send"}

      </button>

    </div>

  );

}
