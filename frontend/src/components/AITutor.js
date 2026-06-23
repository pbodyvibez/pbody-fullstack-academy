import React, { useState } from "react";

function AITutor() {
  const [messages, setMessages] = useState([
    { type: "ai", text: "Hi 👋 I'm your AI Tutor. Ask me anything." }
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { type: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: input })
      });

      const data = await res.json();

      const aiMessage = {
        type: "ai",
        text: data.reply
      };

      setMessages((prev) => [...prev, aiMessage]);

    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { type: "ai", text: "Error connecting to AI backend." }
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="container" style={{ paddingTop: "70px" }}>

      <h1>AI Tutor 🤖</h1>

      <p style={{ color: "#94a3b8" }}>
        Real AI-powered coding assistant
      </p>

      {/* CHAT BOX */}
      <div style={{
        marginTop: "30px",
        height: "420px",
        overflowY: "auto",
        background: "#0f172a",
        borderRadius: "15px",
        padding: "15px"
      }}>

        {messages.map((msg, i) => (
          <div key={i} style={{
            display: "flex",
            justifyContent: msg.type === "user" ? "flex-end" : "flex-start",
            marginBottom: "10px"
          }}>
            <div style={{
              maxWidth: "70%",
              padding: "10px 15px",
              borderRadius: "12px",
              background: msg.type === "user"
                ? "linear-gradient(90deg, #38bdf8, #6366f1)"
                : "#1e293b",
              color: msg.type === "user" ? "#0b1220" : "#e2e8f0"
            }}>
              {msg.text}
            </div>
          </div>
        ))}

        {loading && (
          <p style={{ color: "#94a3b8" }}>AI is typing...</p>
        )}

      </div>

      {/* INPUT */}
      <div style={{
        display: "flex",
        gap: "10px",
        marginTop: "15px"
      }}>

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask anything..."
          style={{
            flex: 1,
            padding: "12px",
            borderRadius: "10px",
            background: "#0b1220",
            border: "1px solid #334155",
            color: "white"
          }}
        />

        <button className="btn btn-primary" onClick={sendMessage}>
          Send
        </button>

      </div>

    </div>
  );
}

export default AITutor;