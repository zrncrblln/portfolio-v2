import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

try {
  createRoot(document.getElementById("root")!).render(<App />);
} catch (error) {
  console.error("Error rendering app:", error);
  // Fallback: render a simple message
  document.getElementById("root")!.innerHTML =
    "<h1>Something went wrong. Please try disabling browser extensions like TronLink or Bybit.</h1>";
}
