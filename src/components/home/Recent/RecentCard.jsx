import React from "react";
import { list } from "../../data/Data";
export default function RecentCard() {
  return (
    <>
      <div className="content grid3 mtop">
        {list.map((item, index) => {
          const { cover, name, location, category, price, type } = item;
          return (
            <div className="box shadow" key={index}>
              <div className="img">
                <img src={cover} alt="cover" />
              </div>
              <div className="text">
                <div className="category flex">
                  <span
                    style={{
                      background:
                        category === "For Sale" ? "#25b5791a" : "#ff98001a",
                      color: category === "For Sale" ? "#25b579" : "#ff9800"
                    }}
                  >
                    {category}
                  </span>
                  <i className="fa fa-heart"></i>
                </div>
                <h4>{name}</h4>
                <p><i className="fa fa-location-dot"></i>{location}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
