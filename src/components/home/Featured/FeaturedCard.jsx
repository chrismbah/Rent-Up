import React from "react";
import { featured } from "../../data/Data";

export default function FeaturedCard() {
  return (
    <>
      <div className="content grid5 mtop">
        {featured.map((items, index) => (
          <div className="box" key={index}>
            <img src={items.cover} alt="featured" />
            <h4>{items.name}</h4>
            <label>{items.total}</label>
          </div>
        ))}
      </div>
    </>
  );
}
