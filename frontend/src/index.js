import React from "react";
import ReactDOM from "react-dom/client";

import { setupMobile } from "./capacitor";

setupMobile();

import { ThemeProvider } from "./context/ThemeContext";
import {
  BrowserRouter
} from "react-router-dom";


import {
  AuthProvider
} from "./context/AuthContext";


import {
  ProgressProvider
} from "./context/ProgressContext";


import {
  SubscriptionProvider
} from "./context/SubscriptionContext";


import AIProvider from "./ai/AIProvider";


import App from "./App";


import "./styles/theme.css";
import "./index.css";



const root =
ReactDOM.createRoot(
  document.getElementById("root")
);



root.render(

<React.StrictMode>

<BrowserRouter>


<ThemeProvider>

<SubscriptionProvider>

<AuthProvider>

<ProgressProvider>

<App />

</ProgressProvider>

</AuthProvider>

</SubscriptionProvider>

</ThemeProvider>


</BrowserRouter>

</React.StrictMode>

);