import React, { useState } from "react";

const ShortCircuit = () => {
  let [value, setValue] = useState("");
  let [isError, setIsError] = useState(false);
  //   let x = "" || "Hello World";
  //   let y = "" && "Hello World";
  return (
    <>
      <div>
        <h1>{value || "Hello world"}</h1>
      </div>
      <div>
        <p>{!isError ? "there is no error" : "there is error"}</p>
      </div>
      <button
        className="btn btn-primary"
        onClick={() => {
          setIsError(!isError);
        }}
      >
        show/hide
      </button>
    </>
  );
};

export default ShortCircuit;
