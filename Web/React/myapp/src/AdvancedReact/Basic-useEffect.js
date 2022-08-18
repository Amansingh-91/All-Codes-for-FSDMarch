import React, { useEffect, useState } from "react";

const BasicEffect = () => {
  let [value, setValue] = useState(0);
  console.log("normal", value);
  useEffect(() => {
    console.log(" Side Effect");
    document.title = ` (${value}) New Messages `;
  }, [value]);
  return (
    <div>
      <h1>Basic-useEffect</h1>
      <button
        className="btn btn-primary"
        onClick={() => {
          setValue(value + 1);
        }}
      >
        click me
      </button>
    </div>
  );
};

export default BasicEffect;
