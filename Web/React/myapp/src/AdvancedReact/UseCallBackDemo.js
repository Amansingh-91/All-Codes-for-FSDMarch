import React, { useState, useCallback } from "react";
import ChildA from "./ChildA";
const UseCallBackDemo = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const myFunc = useCallback(() => {
    //Somthing here
  }, [count1]);

  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>

      <p>{count}</p>
      <ChildA name={"aman"} myFunc={myFunc} />
      <button
        className="btn btn-primary"
        onClick={() => {
          setCount1(count1 + 1);
        }}
      >
        Increase
      </button>

      <p>{count1}</p>
    </>
  );
};

export default UseCallBackDemo;
