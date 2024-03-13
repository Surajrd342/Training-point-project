import React from "react";
import ReactDOM from "react-dom/client";
import AppMain from "./appMain.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppMain />
      <ToastContainer />
    </BrowserRouter>
  </React.StrictMode>
);
