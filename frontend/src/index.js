import React from "react";
import ReactDOM from "react-dom/client";

import { setupMobile } from "./capacitor";

import { ThemeProvider } from "./context/ThemeContext";
import { BrowserRouter } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import { ProgressProvider } from "./context/ProgressContext";
import { SubscriptionProvider } from "./context/SubscriptionContext";

import AIProvider from "./ai/AIProvider";

import App from "./App";

import "./styles/theme.css";
import "./index.css";

setupMobile();

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <SubscriptionProvider>
            <ProgressProvider>
              <AIProvider>
                <App />
              </AIProvider>
            </ProgressProvider>
          </SubscriptionProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// Register PWA service worker in production
if (
  "serviceWorker" in navigator &&
  process.env.NODE_ENV === "production"
) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log(
          "PBody Academy service worker registered:",
          registration.scope
        );
      })
      .catch((error) => {
        console.error(
          "PBody Academy service worker registration failed:",
          error
        );
      });
  });
}