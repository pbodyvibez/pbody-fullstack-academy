// ======================================================
// PBODY FULLSTACK ACADEMY
// MAIN APPLICATION ROUTER
// FULL REPLACEMENT
// ======================================================

import React from "react";

import {
  Routes,
  Route
} from "react-router-dom";

// ======================================================
// PROVIDERS
// ======================================================

import { AuthProvider } from "./context/AuthContext";
import { ProgressProvider } from "./context/ProgressContext";
import { SubscriptionProvider } from "./context/SubscriptionContext";
import { UserEngineProvider } from "./context/UserEngineContext";

import AIProvider from "./ai/AIProvider";

// ======================================================
// SCROLL
// ======================================================

import ScrollRestoration from "./components/layout/ScrollRestoration";

// ======================================================
// ROUTE GUARD
// ======================================================

import ProtectedRoute from "./routes/ProtectedRoute";

// ======================================================
// LAYOUTS
// ======================================================

import PublicLayout from "./components/layout/PublicLayout";
import StudentLayout from "./components/layout/StudentLayout";

// ======================================================
// PUBLIC
// ======================================================

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";

import PaymentSuccess from "./pages/PaymentSuccess";

// ======================================================
// ACADEMY
// ======================================================

import Dashboard from "./pages/Dashboard";
import LearningHub from "./pages/LearningHub";

import Courses from "./pages/Courses";
import CoursePage from "./pages/CoursePage";
import LessonView from "./pages/LessonView";

import Quiz from "./pages/Quiz";
import Assignment from "./pages/Assignment";

import Projects from "./pages/Projects";
import ProjectPage from "./pages/ProjectPage";

// ======================================================
// STUDENT
// ======================================================

import Certificates from "./pages/Certificates";

import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

import Leaderboard from "./pages/Leaderboard";

import Community from "./pages/Community";
import EngineeringDiscussions from "./pages/EngineeringDiscussions";

import Notifications from "./pages/Notifications";

// ======================================================
// CAREER
// ======================================================

import Career from "./pages/Career";
import JobBoard from "./pages/JobBoard";
import Internship from "./pages/Internship";

import PortfolioBuilder from "./pages/PortfolioBuilder";
import PortfolioPreview from "./pages/PortfolioPreview";

import ResumeBuilder from "./pages/ResumeBuilder";
import ResumePreview from "./pages/ResumePreview";

import Roadmaps from "./pages/Roadmaps";

// ======================================================
// AI
// ======================================================

import AIMentor from "./pages/AIMentor";
import AITutor from "./pages/AITutor";

// ======================================================
// ADMIN
// ======================================================

import AdminDashboard from "./pages/AdminDashboard";

// ======================================================
// ERROR
// ======================================================

import NotFound from "./pages/NotFound";


// ======================================================
// APP
// ======================================================

export default function App() {

  return (

    <AuthProvider>

      <ProgressProvider>

        <SubscriptionProvider>

          <UserEngineProvider>

            <AIProvider>

              <ScrollRestoration />

              <Routes>


                {/* ==================================================
                    PUBLIC WEBSITE
                ================================================== */}

                <Route
                  element={<PublicLayout />}
                >

                  <Route
                    path="/"
                    element={<Home />}
                  />

                  <Route
                    path="/about"
                    element={<About />}
                  />

                  <Route
                    path="/contact"
                    element={<Contact />}
                  />

                  <Route
                    path="/pricing"
                    element={<Pricing />}
                  />

                  <Route
                    path="/privacy"
                    element={<Privacy />}
                  />

                  <Route
                    path="/terms"
                    element={<Terms />}
                  />

                  <Route
                    path="/login"
                    element={<Login />}
                  />

                  <Route
                    path="/register"
                    element={<Register />}
                  />

                  <Route
                    path="/forgot-password"
                    element={<ForgotPassword />}
                  />

                  <Route
                    path="/payment-success"
                    element={<PaymentSuccess />}
                  />

                </Route>


                {/* ==================================================
                    PROTECTED CLASSROOM

                    These pages intentionally do NOT use
                    StudentLayout.

                    This prevents duplicate navigation,
                    duplicate sidebars and layout conflicts.
                ================================================== */}

                <Route
                  path="/course/:id"
                  element={
                    <ProtectedRoute>
                      <CoursePage />
                    </ProtectedRoute>
                  }
                />

                <Route
                  path="/lesson/:courseId/:lessonId"
                  element={
                    <ProtectedRoute>
                      <LessonView />
                    </ProtectedRoute>
                  }
                />


                {/* ==================================================
                    PROTECTED STUDENT APPLICATION

                    Everything inside this route automatically
                    receives StudentLayout.
                ================================================== */}

                <Route
                  element={
                    <ProtectedRoute>
                      <StudentLayout />
                    </ProtectedRoute>
                  }
                >


                  {/* ==================================================
                      DASHBOARD
                  ================================================== */}

                  <Route
                    path="/dashboard"
                    element={<Dashboard />}
                  />


                  {/* ==================================================
                      LEARNING
                  ================================================== */}

                  <Route
                    path="/learning-hub"
                    element={<LearningHub />}
                  />

                  <Route
                    path="/courses"
                    element={<Courses />}
                  />


                  {/* ==================================================
                      ASSESSMENTS
                  ================================================== */}

                  <Route
                    path="/quiz"
                    element={<Quiz />}
                  />

                  <Route
                    path="/assignment"
                    element={<Assignment />}
                  />


                  {/* ==================================================
                      PROJECTS
                  ================================================== */}

                  <Route
                    path="/projects"
                    element={<Projects />}
                  />

                  <Route
                    path="/project/:id"
                    element={<ProjectPage />}
                  />


                  {/* ==================================================
                      COMMUNITY
                  ================================================== */}

                  <Route
                    path="/community"
                    element={<Community />}
                  />

                  <Route
                    path="/community/discussions"
                    element={<EngineeringDiscussions />}
                  />


                  {/* ==================================================
                      STUDENT
                  ================================================== */}

                  <Route
                    path="/certificates"
                    element={<Certificates />}
                  />

                  <Route
                    path="/profile"
                    element={<Profile />}
                  />

                  <Route
                    path="/settings"
                    element={<Settings />}
                  />

                  <Route
                    path="/leaderboard"
                    element={<Leaderboard />}
                  />

                  <Route
                    path="/notifications"
                    element={<Notifications />}
                  />


                  {/* ==================================================
                      CAREER CENTER
                  ================================================== */}

                  <Route
                    path="/career"
                    element={<Career />}
                  />

                  <Route
                    path="/jobs"
                    element={<JobBoard />}
                  />

                  <Route
                    path="/internships"
                    element={<Internship />}
                  />


                  {/* ==================================================
                      PORTFOLIO
                  ================================================== */}

                  <Route
                    path="/portfolio-builder"
                    element={<PortfolioBuilder />}
                  />

                  <Route
                    path="/portfolio-builder/preview"
                    element={<PortfolioPreview />}
                  />


                  {/* ==================================================
                      RESUME
                  ================================================== */}

                  <Route
                    path="/resume-builder"
                    element={<ResumeBuilder />}
                  />

                  <Route
                    path="/resume-builder/preview"
                    element={<ResumePreview />}
                  />


                  {/* ==================================================
                      ROADMAPS
                  ================================================== */}

                  <Route
                    path="/roadmaps"
                    element={<Roadmaps />}
                  />


                  {/* ==================================================
                      AI
                  ================================================== */}

                  <Route
                    path="/ai-mentor"
                    element={<AIMentor />}
                  />

                  <Route
                    path="/ai-tutor"
                    element={<AITutor />}
                  />


                  {/* ==================================================
                      ADMIN
                  ================================================== */}

                  <Route
                    path="/admin"
                    element={<AdminDashboard />}
                  />


                  {/* ==================================================
                      404
                  ================================================== */}

                  <Route
                    path="*"
                    element={<NotFound />}
                  />

                </Route>

              </Routes>

            </AIProvider>

          </UserEngineProvider>

        </SubscriptionProvider>

      </ProgressProvider>

    </AuthProvider>

  );

}