import React from "react";
import Hero from "./Hero/Hero";
import Featured from "./Featured/Featured";
import Recent from "./Recent/Recent";
import Awards from "./Awards/Awards";
import Location from "./Location/Location";
import Team from "./Team/Team";
import { useContext } from "react";
import { AppContext } from "../pages/Pages";

export default function Home() {
  const { listNum, setListNum } = useContext(AppContext);
  return (
    <>
      <Hero />
      <Featured />
      <Recent setListNum={setListNum} listNum={listNum} />
      <Awards />
      <Location />
      <Team />
    </>
  );
}
