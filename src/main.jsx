import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./GlobalStyle.css";
import User_provider from "./components/context/context.jsx";
// import "@fortawesome/fontawesome-free/css/all.min.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <User_provider>
        <App />
      </User_provider>
    </BrowserRouter>
  </React.StrictMode>
);
