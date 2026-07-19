import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function ProtectedRoute({ children }) {

  const {
    user,
    loading
  } = useAuth();

  const location = useLocation();

  // Wait until authentication has finished checking localStorage
  if (loading) {

    return (

      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#020617",
          color: "#ffffff",
          fontSize: "20px",
          fontWeight: 700
        }}
      >
        Loading...
      </div>

    );

  }

  // User is not authenticated
  if (!user) {

    return (

      <Navigate
        to="/login"
        replace
        state={{
          from: location.pathname
        }}
      />

    );

  }

  // User is authenticated
  return children;

}