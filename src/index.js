import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App";
import { AuthenticationContextProvider } from "./services/authentication/authentication.context";
import { ThemeContextProvider } from "./services/theme/theme.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthenticationContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </AuthenticationContextProvider>
  </React.StrictMode>
);
