import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Style */
import GlobalStyle from "./styles/globalStyle.js";

/* Pages */
import Home from "./pages/Home.js";
import Users from "./pages/Users.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>

    <GlobalStyle />
  </>
);
