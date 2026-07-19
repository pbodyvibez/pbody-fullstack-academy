import { useLocation } from "react-router-dom";
import { useState } from "react";
import AppLayout from "../components/layout/AppLayout";
import API from "../utils/api";

import { useAuth } from "../context/AuthContext";

import "../styles/aiTutor.css";

export default function AITutor() {

  const location = useLocation();

  const {
user
}=useAuth();

  const lesson = location.state?.lesson || null;

  const defaultPrompt = location.state?.prompt || "";

  const [prompt, setPrompt] = useState(defaultPrompt);

  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        lesson
          ? `👋 Welcome back!

Current Lesson:

${lesson.title}

Ask me anything about this lesson.`
          : "👋 Hello! I am your AI Engineering Mentor."
    }
  ]);

  const sendMessage = async () => {

    if (!prompt.trim()) return;

    const userMessage = {
      role: "user",
      content: prompt
    };

    setMessages(prev => [...prev, userMessage]);

    setLoading(true);

    try {

      const token = localStorage.getItem("token");

      const res = await API.post(

        "/ai/chat",

        {

          message: prompt,

          lesson: lesson?.title || "",

          course: lesson?.category || "",

          student: {

            level: user.level,

            xp: user.xp

          }

        },

        {

          headers: {

            Authorization: `Bearer ${token}`

          }

        }

      );

      setMessages(prev => [

        ...prev,

        {

          role: "assistant",

          content: res.data.reply

        }

      ]);

    }

    catch (err) {

      setMessages(prev => [

        ...prev,

        {

          role: "assistant",

          content:

            "❌ Unable to contact AI Mentor."

        }

      ]);

    }

    setPrompt("");

    setLoading(false);

  };

  return (

    <AppLayout>

      <div className="aiTutorPage">

        <div className="chatHeader">

          <h1>

            🤖 AI Engineering Mentor

          </h1>

          {

            lesson && (

              <p>

                Current Lesson:

                <strong>

                  {lesson.title}

                </strong>

              </p>

            )

          }

        </div>

        <div className="chatWindow">

          {

            messages.map((msg,index)=>(

              <div

                key={index}

                className={

                  msg.role==="assistant"

                    ? "assistantBubble"

                    : "userBubble"

                }

              >

                {msg.content}

              </div>

            ))

          }

          {

            loading && (

              <div className="assistantBubble">

                Thinking...

              </div>

            )

          }

        </div>

        <div className="chatInput">

          <textarea

            value={prompt}

            onChange={(e)=>setPrompt(e.target.value)}

            placeholder="Ask your AI Mentor..."

          />

          <button

            onClick={sendMessage}

          >

            Send

          </button>

        </div>

      </div>

    </AppLayout>

  );

}