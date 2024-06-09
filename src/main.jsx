import React from "react";
import ReactDOM from "react-dom/client";
import Playtime from "./playtime.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Playtime />
    </BrowserRouter>
  </React.StrictMode>
);
