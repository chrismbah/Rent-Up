import React from "react";
import Header from "../common/header/Header";
import Home from "../home/Home";
import About from "../about/About";
import Services from "../services/Services";
import Footer from "../common/footer/Footer";
import Blog from "../blog/Blog";
import Pricing from "../pricing/Pricing";
import Contact1 from "../contact/Contact1";
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
              element={<Home />}
            />
                <Route
              path="/about"
              element={<About />}
            />
                <Route
              path="/services"
              element={<Services />}
            />
               
                <Route
              path="/blog"
              element={<Blog />}
            />
                <Route
              path="/pricing"
              element={<Pricing />}
            />
                  <Route
              path="/contact"
              element={<Contact1 />}
            />
          </Routes>
          <Footer />
        </Router>
      </AppContext.Provider>
    </>
  );
}
