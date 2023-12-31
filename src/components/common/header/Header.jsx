import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { nav } from "../../data/Data";
import { useContext } from "react";
import { AppContext } from "../../pages/Pages";

export default function Header() {
  const [navlist, setnavlist] = useState(false);
  const { listNum,setListNum } = useContext(AppContext);
  const [selectedLink, setSelectedLink] = useState(null);

  function handleLinkClick(link) {
    setSelectedLink(link);
    if(selectedLink==="home"||"blog"){
      setListNum(0)
    }
  }
  return (
    <>
      <header>
        <div className="container flex">
          <div className="logo">
            <img src="./images/logo.png" alt="logo" />
          </div>
          <div className="nav">
            <ul className={navlist ? "small" : "flex"}>
              {nav.map((list, index) => {
                const { text, path } = list;
                return (
                  <li key={index}>
                    <Link to={path} className={selectedLink===text?"selected":""} onClick={() => handleLinkClick( text )}>
                      {text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="button flex">
            <h4>
              <span>{listNum}</span> <label>My List</label>
            </h4>
            <button className="btn1">
              <i className="fa fa-sign-out"></i>
              Sign In
            </button>
          </div>
          <div className="toggle">
            <button onClick={() => setnavlist(!navlist)}>
              {navlist ? (
                <i className="fa fa-times"></i>
              ) : (
                <i className="fa fa-bars"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
