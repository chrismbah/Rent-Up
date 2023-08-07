import React from "react";
import "./Awards.css";
import Heading from "../../common/Heading";
import { awards } from "../../data/Data";

export default function Awards() {
  return (
    <>
      <section className="awards padding">
        <div className="container">
          <Heading
            title="Over 1,240,000+ Happy Users Being with us still they love our services"
            subtitle="Our Awards"
          />
          <div className="content grid5 mtop">
            {awards.map((awards,index)=>{
                <div className="box" key={index}></div>
            })}
          </div>
        </div>
      </section>
    </>
  );
}
