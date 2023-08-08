import React from "react";
import Back from "../common/Back";
import img from "../images/about.jpg";
import Heading from "../common/Heading";
import "./About.css"

export default function About() {
  return (
    <>
      <section className="about mb">
        <Back name="About Us" title="About Us - Who We Are" cover={img} />
        <div className="container flex mtop">
          <div className="left row">
            <Heading
              title="Our Agency Story"
              subtitle="Check Out Our Story And Work Process"
            />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              incidunt, ducimus maxime magni aliquam nulla doloremque dolor
              ullam molestias, sed adipisci dicta soluta commodi corrupti
              officiis nisi asperiores?
            </p>
            <p>
              Lorem veritatis expedita unde? Eius in laudantium delectus nostrum
              ipsa doloribus ratione error nobis hic ex aperiam aliquid illum,
              vitae, temporibus ducimus facere suscipit repellat numquam
            </p>
            <button className="btn2">More About Us</button>
          </div>
          <div className="right row">
            <img src="./immio.jpg" alt="cover" />
          </div>
        </div>
      </section>
    </>
  );
}
