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
          <div className="content grid4 mtop">
            {awards.map((award,index)=>(
                <div className="box" key={index}>
                    <div className="icon">
                        <span>{award.icon}</span>
                    </div>
                    <h1>{award.num}</h1>
                    <p>{award.name}</p>
                </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
