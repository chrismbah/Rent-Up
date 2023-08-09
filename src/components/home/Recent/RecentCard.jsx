import React, { useState } from "react";
import { list } from "../../data/Data";
import "./Recent.css";
export default function RecentCard({ setListNum, listNum }) {
  return (
    <>
      <div className="content grid3 mtop">
        {list.map((item, index) => {
          const { cover, name, location, category, price, type } = item;
          const [colorHeart, setColor] = useState("#bec7d8");
          function toggleBtn() {
            if (colorHeart === "#bec7d8") {
              setColor("#27ae60");
              setListNum(listNum + 1);
            } else {
              setColor("#bec7d8");
              setListNum(listNum - 1);
            }
          }
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
                      color: category === "For Sale" ? "#25b579" : "#ff9800",
                    }}
                  >
                    {category}
                  </span>
                  <i
                    className="fa fa-heart"
                    style={{ color: colorHeart }}
                    onClick={
                      toggleBtn
                      // colorHeart === "#bec7d8"
                      //   ? setColor("#27ae60")
                      //   : setColor("#bec7d8")
                    }
                  ></i>
                </div>
                <h4>{name}</h4>
                <p>
                  <i className="fa fa-location-dot"></i>
                  {location}
                </p>
              </div>
              <div className="button flex">
                <div className="price-no">
                  <button className="btn2">{price}</button>
                  <label htmlFor=""> /sqft</label>
                </div>
                <span>{type}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
