import React, { useState } from "react";

const Title = () => {
  //   let title = "Random Title";
  //   useState Syntax
  //   let [title ,setTitle]   = useState(Default_value)

  let [title, setTitle] = useState("Random Title");

  console.log(title);
  return (
    <h1
      onClick={() => {
        console.log(title);
        if (title === "Random Title") {
          setTitle("Title Changed");
        } else {
          setTitle("Random Title");
        }
      }}
    >
      {title}
    </h1>
  );
};

export default Title;
