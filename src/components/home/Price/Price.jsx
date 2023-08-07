import React from "react";
import PriceCard from "./PriceCard";
import Heading from "../../common/Heading";
import "./Price.css"

export default function Price() {
  return (
    <>
      <section className="price padding">
        <div className="container">
          <Heading
            title="Select Your Package"
            subtitle="Ranging from basic packages to premium packages,variety of packages that will fit your style"
          />
          <PriceCard />
        </div>
      </section>
    </>
  );
}
