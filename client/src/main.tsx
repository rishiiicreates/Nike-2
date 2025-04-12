import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Initialize GSAP ScrollTrigger if needed
// Ensuring it's only imported when needed, will be set up in components

createRoot(document.getElementById("root")!).render(<App />);
