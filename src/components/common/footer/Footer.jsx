import React from "react";
import "./Footer.css";
import { footer } from "../../data/Data";

export default function Footer() {
  return (
    <>
      <section className="footerContact">
        <div className="container">
          <div className="send flex">
            <div className="text">
              <h1>Do You Have Questions ?</h1>
              <p>We'll help you to grow your career and growth.</p>
            </div>
            <button className="btn5">Contact Us Today</button>
          </div>
        </div>
      </section>
      <footer>
        <div className="container">
          <div className="box">
            <div className="logo">
              <img src="../images/logo-light.png" alt="" />
              <h2>Do You Need Help With Anything</h2>
              <p>
                Recieve updates, hot deals,tutorials ,discounts sent straight in
                your inbox every month
              </p>
              <div className="input flex">
                <input type="text" placeholder="Email Address" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>
          {footer.map((val,index) => {
            return (
              <div className="box" key={index}>
                <h3>{val.title}</h3>
                <ul>
                  {val.text.map((item,i) => {
                    const { list } = item;
                    return <li key={i}>{list}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </footer>
      <div className="legal">
        <span>© 2023 RentUP. Designed By Chris Mbah</span>
      </div>
    </>
  );
}
