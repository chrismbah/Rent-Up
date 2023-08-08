import React from "react";

export default function Back({name,title,cover}) {
  return (
    <>
      <div className="back">
        <div className="container">
          <span>{name}</span>
          <h1>{title}</h1>
        </div>
        <img src={cover} alt="Cover" />
      </div>
    </>
  );
}
