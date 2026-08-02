import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import './Assets/styles/styles.css';
import { NavLinkProvider } from "./context/NavLinkContext";
import { ThemeProvider } from "./context/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <NavLinkProvider>
        <App />
      </NavLinkProvider>
    </ThemeProvider>
  </React.StrictMode>
);

