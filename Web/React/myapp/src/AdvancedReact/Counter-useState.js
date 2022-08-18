import React, { useState } from "react";

const Counter = () => {
  let [value, setValue] = useState(0);
  let [complexvalue, setComplexValue] = useState(0);

  return (
    <>
      <div className="container d-flex align-items-center flex-column">
        <h1>Counter</h1>
        <h2>{value}</h2>
      </div>
      <div className="container d-flex justify-content-center ">
        <button
          className="btn btn-success mx-3"
          onClick={() => {
            setValue(value + 1);
          }}
        >
          +
        </button>
        <button
          className="btn btn-danger mx-3"
          onClick={() => {
            setValue(value - 1);
          }}
        >
          -
        </button>
      </div>
      <br />
      <br />
      <br />
      <div className="container d-flex align-items-center flex-column">
        <h1>Complex Counter</h1>
        <h2>{complexvalue}</h2>
      </div>
      <div className="container d-flex justify-content-center ">
        <button
          className="btn btn-success mx-3"
          onClick={() => {
            console.log("hii");
            setTimeout(() => {
              setComplexValue((prevValue) => {
                return prevValue + 1;
              });
              //   setValue(value + 1);
            }, 2000);
          }}
        >
          +
        </button>
        <button
          className="btn btn-danger mx-3"
          onClick={() => {
            setTimeout(() => {
              setComplexValue((prevValue) => {
                return prevValue - 1;
              });
              //   setValue(value + 1);
            }, 2000);
          }}
        >
          -
        </button>
      </div>
    </>
  );
};

export default Counter;
