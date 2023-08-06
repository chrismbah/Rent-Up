import React from "react";
import "./Featured.css";
import Heading from "../../common/Heading";
import FeaturedCard from "./FeaturedCard";
export default function Featured() {
  return (
    <>
      <section className="featured background">
        <div className="container">
          <Heading
            title="Featured Property Types"
            subtitle="Find All Types Of Property"
          />
          <FeaturedCard />
        </div>
      </section>
    </>
  );
}
