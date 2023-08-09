import React from "react";
import Back from "../common/Back";
import image from "../images/pricing.jpg";
import "./Contact1.css"

export default function Contact() {
  return (
    <>
      <section className="contact mb">
        <Back name="Contact Us" title="Get Help And Friendly Support" cover={image} />
        <div className="container">
          <form action="" className="shadow">
            <h4>Fillup The Form</h4>
            <div>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email" />
            </div>
            <input type="text" placeholder="Subject" />
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button>Submit Request</button>

          </form>
        </div>
      </section>
    </>
  );
}
