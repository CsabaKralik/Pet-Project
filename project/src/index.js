import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Menu from "./components/Menu/Menu";
import Spaces from "./components/Spaces/Spaces";
import Register from "./components/Register/Register";

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="Login" element={<App />}></Route>
        <Route path="Register" element={<Register />}></Route>
        <Route path="Account" element={<App />}></Route>
        <Route path="Spaces" element={<Spaces />}></Route>
        <Route path="Groups" element={<App />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
