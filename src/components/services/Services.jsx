import React from "react";
import Back from "../common/Back";
import img from "../images/services.jpg";
import FeaturedCard from "../home/Featured/FeaturedCard";

export default function Services() {
  return (
    <>
      <section className="services mb ">
        <Back name="Services" title="Services - All Services" cover={img} />
        <div className="featured container">
            <FeaturedCard />
        </div>
      </section>
    </>
  );
}
