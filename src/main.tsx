import React from "react";
import { createRoot } from "react-dom/client";
import AppRouter from "./AppRouter";
import "./index.css";

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
