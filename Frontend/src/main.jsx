import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import AppProvider from "./providers/AppProvider";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
    <Analytics/>
    <SpeedInsights/>
  </React.StrictMode>
);