import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import { makeServer } from "./server";

// Call make Server
makeServer();
const root = createRoot(document.getElementById("root"));
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
