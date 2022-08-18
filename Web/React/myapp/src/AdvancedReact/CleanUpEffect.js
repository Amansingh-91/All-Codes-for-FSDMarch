import React, { useEffect, useState } from "react";

const CleanUpEffect = () => {
  let [size, setSize] = useState(window.innerWidth);
  const CheckSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    console.log("hii");
    window.addEventListener("resize", CheckSize);
    // return () => {
    //   console.log("remove");
    //   window.removeEventListener("resize", CheckSize);
    // };
  }, []);
  return (
    <div className="container">
      <div className="d-flex flex-column align-items-center ">
        <h1>Window</h1>
        <h2>{size} PX</h2>
      </div>
    </div>
  );
};

export default CleanUpEffect;
