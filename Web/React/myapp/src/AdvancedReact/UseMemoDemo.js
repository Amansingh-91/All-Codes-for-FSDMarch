import React, { useState, useMemo } from "react";

const UseMemoDemo = () => {
  const [count, setCount] = useState(0);
  const [isShow, setIsShow] = useState(false);
  const expensiveFunc = (mynum) => {
    for (let index = 0; index < 1000000000; index++) {}
    return mynum;
  };
  const countMe = useMemo(() => {
    return expensiveFunc(count);
  }, [count]);

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
      <p>{countMe}</p>
      <button
        className="btn btn-light"
        onClick={() => {
          setIsShow(!isShow);
        }}
      >
        {isShow ? "Click Me" : "Toggle"}
      </button>
    </>
  );
};

export default UseMemoDemo;
