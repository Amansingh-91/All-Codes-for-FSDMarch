import React, { useEffect, useRef, useState } from "react";

const UseRefExample = () => {
  let [name, setName] = useState("");
  let CountRender = useRef(0);
  let inputRef = useRef(null);
  useEffect(() => {
    console.log(CountRender, inputRef);
    inputRef.current.focus();
    CountRender.current = CountRender.current + 1;
  });
  return (
    <div>
      <h1>Count:{CountRender.current}</h1>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(inputRef.current.value);
        }}
      >
        <div className="form-control">
          <input
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />{" "}
          <br />
          <input type="text" ref={inputRef} />
          <button className="btn">add</button>
        </div>
      </form>
    </div>
  );
};

export default UseRefExample;
