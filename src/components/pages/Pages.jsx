import React from "react";
import Header from "../common/header/Header";
import Home from "../home/Home";
import Footer from "../common/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { createContext } from "react";
export const AppContext = createContext();

export default function Pages() {
  const [listNum, setListNum] = useState(0);

  return (
    <>
      <AppContext.Provider value={{ listNum, setListNum }}>
        <Router>
          <Header listNum={listNum} />
          <Routes>
            <Route
              path="/"
              element={<Home setlistNum={setListNum} listNum={listNum} />}
            />
          </Routes>
          <Footer />
        </Router>
      </AppContext.Provider>
    </>
  );
}
