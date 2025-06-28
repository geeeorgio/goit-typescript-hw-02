import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import App from "./components/App/App";

import "./index.css";

createRoot(document.getElementById("root")! as HTMLDivElement).render(
  <StrictMode>
    <App />
    <Toaster />
  </StrictMode>
);
