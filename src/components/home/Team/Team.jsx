import React from "react";
import Heading from "../../common/Heading";
import { teams } from "../../data/Data";
import "./Team.css"

export default function Team() {
  return (
    <>
      <section className="team background">
        <div className="container">
          <Heading
            title="Our Featured Agents"
            subtitle="Meet our experienced agents who will assist you to purchase your dream home for the comfort of you and your family"
          />
          <div className="content mtop grid3">
            {teams.map((team, index) => (
              <div className="box" key={index}>
                <button className="btn3">{team.list} Listings</button>
                <div className="details">
                  <div className="img">
                    <img src={team.cover} alt="Teams" />
                    <i className="fa fa-circle-check"></i>
                  </div>
                  <i className="fa fa-location-dot"></i>
                  <label htmlFor="">{team.address}</label>
                  <h4>{team.name}</h4>
                  <ul>
                    {team.icon.map((icon, index) => (
                      <li key={index}>{icon}</li>
                    ))}
                  </ul>
                  <div className="button flex">
                    <button>
                      <i className="fa fa-envelope"></i>
                      Message
                    </button>
                    <button className="btn4">
                      <i className="fa fa-phone-alt"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
