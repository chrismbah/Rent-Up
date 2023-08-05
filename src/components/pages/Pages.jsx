import React from "react";
import Header from "../common/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function Pages() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          {/* <Route path="/about">
            <About />
          </Route> */}
        </Routes>
      </Router>
    </>
  );
}
