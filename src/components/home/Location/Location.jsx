import React from "react";
import "./Location.css";
import { locations } from "../../data/Data";
import Heading from "../../common/Heading";

export default function Location() {
  return (
    <>
      <section className="location padding">
        <div className="container">
          <Heading
            title="Explore By Location"
            subtitle="Explore various properties you wish to own or rent by loaction including various famous tourist sites"
          />
          <div className="content grid3 mtop">
            {locations.map((location,index)=>(
                <div className="box" key={index}>
                    <img src={location.cover} alt="location" />
                    <div className="overlay">
                      <h5>{location.name}</h5>
                      <p>
                        <label >{location.Villas}</label>
                        <label >{location.Offices}</label>
                        <label >{location.Apartments}</label>
                      </p>
                    </div>
                </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
