import React from "react";
import Back from "../common/Back";
import RecentCard from "../home/Recent/RecentCard";
import img from "../images/about.jpg";
import { useContext } from "react";
import { AppContext } from "../pages/Pages";

export default function Blog() {
  const {setListNum}=useContext(AppContext)
  return (
    <>
      <section className="blog-out mb">
        <Back title="Blog Grid - Our Blogs" name="Blog" cover={img} />
        <div className="container recent">
          <RecentCard setListNum={setListNum} />
        </div>
      </section>
    </>
  );
}
