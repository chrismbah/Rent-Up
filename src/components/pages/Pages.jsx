import React from "react";
import Header from "../common/header/Header";
import Home from "../home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function Pages() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </Router>
    </>
  );
}
