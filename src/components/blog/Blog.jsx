import React from "react";
import Back from "../common/Back";
import RecentCard from "../home/Recent/RecentCard";
import img from "../images/about.jpg";

export default function Blog() {
  return (
    <>
      <section className="blog-out mb">
        <Back title="Blog Grid - Our Blogs" name="Blog" cover={img} />
        <div className="container recent">
          <RecentCard />
        </div>
      </section>
    </>
  );
}
