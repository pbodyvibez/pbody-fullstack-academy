import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Courses from "./components/Courses";
import Lessons from "./components/Lessons";
import Quiz from "./components/Quiz";
import Dashboard from "./components/Dashboard";
import AITutor from "./components/AITutor";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Certificate from "./components/Certificate";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div
      style={{
        backgroundColor: "#0f172a",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <Navbar setPage={setPage} />

      {page === "home" && <Home />}
      {page === "courses" && <Courses />}
      {page === "lessons" && <Lessons />}
      {page === "quiz" && <Quiz setPage={setPage} />}
      {page === "dashboard" && <Dashboard />}
      {page === "ai" && <AITutor />}
      {page === "login" && <Login setPage={setPage} />}
      {page === "signup" && <Signup setPage={setPage} />}
      {page === "certificate" && <Certificate />}
    </div>
  );
}

export default App;