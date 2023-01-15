import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

// Selects the div element from id in index.html present in public folder
// Render the App component in it
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
