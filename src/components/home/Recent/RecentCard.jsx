import React from "react";
import { list } from "../../data/Data";
export default function RecentCard() {
  return (
    <>
      <div className="content grid3 mtop">
        {list.map((item, index) => {
          const { cover, name, location, category, price, type } = val;
          return <div className="box shadow" key={index}>
            <div className="img">
                <img src={cover} alt="cover" />
            </div>
          </div>;
        })}
      </div>
    </>
  );
}
