import { Navigate, useLocation } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";
import { useSubscription } from "../../context/SubscriptionContext";


export default function PremiumRoute({ children }) {

  const {
    user,
    loading: authLoading,
    isAuthenticated
  } = useAuth();


  const {
    isPremium,
    isTrialActive,
    loading: subscriptionLoading
  } = useSubscription();


  const location = useLocation();


  // ===============================
  // CHECK AUTHENTICATION LOADING
  // ===============================

  if (authLoading) {

    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#020617",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "22px"
        }}
      >
        Loading...
      </div>
    );

  }


  // ===============================
  // REQUIRE LOGIN
  // ===============================

  if (!isAuthenticated || !user) {

    return (
      <Navigate
        to="/login"
        replace
        state={{
          from: location
        }}
      />
    );

  }


  // ===============================
  // WAIT FOR SUBSCRIPTION CHECK
  // ===============================

  if (subscriptionLoading) {

    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#020617",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "22px"
        }}
      >
        Checking subscription...
      </div>
    );

  }


  // ===============================
  // FREE COURSE ACCESS
  // ===============================

  const freeCourses = [
    "frontend",
    "html",
    "css",
    "javascript"
  ];


  const courseId = location.pathname.split("/")[2];


  if (
    location.pathname.startsWith("/course/") &&
    freeCourses.includes(courseId)
  ) {

    return children;

  }


  // ===============================
  // PREMIUM ACCESS
  // ===============================

  if (isPremium || isTrialActive) {

    return children;

  }


  // ===============================
  // SEND TO PRICING
  // ===============================

  return (
    <Navigate
      to="/pricing"
      replace
    />
  );

}