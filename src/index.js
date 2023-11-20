import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";
import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <ThemeProvider>
    <Router>
      <Auth0Provider
        domain="dev-qfgdvxg44qhrs40z.us.auth0.com"
        clientId="c8zqTIN7qAzNKTVRnifvC0IBNkj2wKWs"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <App />
      </Auth0Provider>
    </Router>
  </ThemeProvider>
);
