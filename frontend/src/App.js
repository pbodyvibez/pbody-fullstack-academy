import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";


import ScrollRestoration from "./components/layout/ScrollRestoration";

import ProtectedRoute from "./components/auth/ProtectedRoute";
import PremiumRoute from "./components/auth/PremiumRoute";

import ProtectedLayout from "./components/layout/ProtectedLayout";



/* ================================
PUBLIC PAGES
================================ */

import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Pricing from "./pages/Pricing";
import PaymentSuccess from "./pages/PaymentSuccess";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";



/* ================================
PROTECTED PAGES
================================ */

import Dashboard from "./pages/Dashboard";
import LearningHub from "./pages/LearningHub";
import Courses from "./pages/Courses";
import CoursePage from "./pages/CoursePage";
import Lessons from "./pages/Lessons";

import Projects from "./pages/Projects";
import AIMentor from "./pages/AIMentor";

import Certificates from "./pages/Certificates";
import Community from "./pages/Community";
import Leaderboard from "./pages/Leaderboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";



import "./styles/global.css";



export default function App(){


return(


<>


<ScrollRestoration />



<Routes>



{/* ================================
PUBLIC ROUTES
================================ */}



<Route
path="/"
element={<Home />}
/>



<Route
path="/home"
element={<Home />}
/>



<Route
path="/about"
element={<About />}
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
path="/pricing"
element={<Pricing />}
/>



<Route
path="/payment-success"
element={<PaymentSuccess />}
/>



<Route
path="/contact"
element={<Contact />}
/>



<Route
path="/privacy"
element={<Privacy />}
/>



<Route
path="/terms"
element={<Terms />}
/>





{/* ================================
PROTECTED AREA
================================ */}



<Route

element={

<ProtectedRoute>

<ProtectedLayout />

</ProtectedRoute>

}

>



<Route
path="/dashboard"
element={<Dashboard />}
/>



<Route
path="/learning"
element={<LearningHub />}
/>



<Route
path="/courses"
element={<Courses />}
/>



<Route
path="/projects"
element={<Projects />}
/>



<Route
path="/ai"
element={<AIMentor />}
/>



<Route
path="/certificates"
element={<Certificates />}
/>



<Route
path="/community"
element={<Community />}
/>



<Route
path="/leaderboard"
element={<Leaderboard />}
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

path="/course/:id"

element={

<PremiumRoute>

<CoursePage />

</PremiumRoute>

}

/>




<Route

path="/lesson/:courseId/:lessonId"

element={

<PremiumRoute>

<Lessons />

</PremiumRoute>

}

/>




<Route

path="/aitutor"

element={

<PremiumRoute>

<AIMentor />

</PremiumRoute>

}

/>



</Route>





{/* ================================
FALLBACK
================================ */}



<Route

path="*"

element={

<Navigate

to="/"

replace

/>

}

/>



</Routes>


</>


);


}