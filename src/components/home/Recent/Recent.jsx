import React from "react";
import RecentCard from "./RecentCard";
import Heading from "../../common/Heading";

export default function Recent({setListNum,listNum}) {
  return (
    <>
      <section className="recent padding">
        <div className="container">
          <Heading
            title="Recent Property Listed"
            subtitle="Here are some of the recent property up for sale and also the ones that are up for rent"
          />
          <RecentCard setListNum={setListNum} listNum={listNum}/>
        </div>
      </section>
    </>
  );
}
