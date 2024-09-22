import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import './Assets/styles/styles.css'
import { NavLinkProvider } from "./context/NavLinkContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <NavLinkProvider>
    <App />
  </NavLinkProvider>
);
