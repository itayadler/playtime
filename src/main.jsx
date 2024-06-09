import React from "react";
import ReactDOM from "react-dom/client";
import Playtime from "./playtime.jsx";
import AppRouter from "./router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppRouter>
      <Playtime />
    </AppRouter>
  </React.StrictMode>
);
